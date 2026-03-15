<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

// Validate required fields
$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$role = trim($input['role'] ?? '');
$message = trim($input['message'] ?? '');

if (!$name || !$email || !$phone || !$role || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

// Email configuration
$smtpHost = getenv('GMAIL_SMTP_HOST') ?: 'smtp.gmail.com';
$smtpPort = getenv('GMAIL_SMTP_PORT') ?: 587;
$smtpUsername = getenv('GMAIL_USER');
$smtpPassword = getenv('GMAIL_APP_PASSWORD');
$hrEmail = getenv('HR_EMAIL') ?: 'hr@qatarmaster.com';

// Create email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: ' . $smtpUsername,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

$subject = "Job Application: $role - $name";

$emailBody = "
<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
    <h2 style='color: #1f2937;'>New Job Application Received</h2>
    <div style='background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;'>
        <h3 style='margin-top: 0; color: #374151;'>Applicant Details</h3>
        <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
        <p><strong>Position:</strong> " . htmlspecialchars($role) . "</p>
    </div>
    <div style='background: #f9fafb; padding: 20px; border-radius: 8px;'>
        <h3 style='margin-top: 0; color: #374151;'>Cover Message</h3>
        <p style='white-space: pre-wrap;'>" . htmlspecialchars($message) . "</p>
    </div>
</div>
";

// Send email using PHPMailer or built-in mail function
$success = sendSMTPEmail($hrEmail, $subject, $emailBody, $headers, $smtpHost, $smtpPort, $smtpUsername, $smtpPassword);

if ($success) {
    echo json_encode(['message' => 'Application submitted successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to submit application']);
}

function sendSMTPEmail($to, $subject, $body, $headers, $host, $port, $username, $password) {
    // Use PHPMailer if available, otherwise fall back to mail()
    if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
        return sendWithPHPMailer($to, $subject, $body, $username, $password);
    } else {
        return sendWithMailFunction($to, $subject, $body, $headers);
    }
}

function sendWithPHPMailer($to, $subject, $body, $username, $password) {
    try {
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $username;
        $mail->Password = $password;
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($username);
        $mail->addAddress($to);
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $body;

        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log("PHPMailer Error: " . $mail->ErrorInfo);
        return false;
    }
}

function sendWithMailFunction($to, $subject, $body, $headers) {
    $headerString = implode("\r\n", $headers);
    return mail($to, $subject, $body, $headerString);
}
?>
