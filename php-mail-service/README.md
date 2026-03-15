# PHP Mail Service Deployment

## Environment Variables
Set these environment variables on your hosting platform:

```
GMAIL_USER=your-email@qatarmaster.com
GMAIL_APP_PASSWORD=your-16-character-app-password
HR_EMAIL=hr@qatarmaster.com
CONTACT_EMAIL=info@qatarmaster.com
GMAIL_SMTP_HOST=smtp.gmail.com
GMAIL_SMTP_PORT=587
```

## Hosting Requirements
- PHP 7.4+ with JSON extension
- Optional: PHPMailer library for better SMTP handling
- HTTPS enabled (required for production)
- CORS headers configured

## Installation
1. Upload files to your web server
2. Set environment variables
3. Ensure PHP can send emails via SMTP
4. Test endpoints with curl or Postman

## Endpoints
- POST /careers.php - Job applications
- POST /contact.php - Contact form messages

## Security
- Use HTTPS in production
- Validate all inputs
- Rate limiting recommended
- Monitor email sending logs
