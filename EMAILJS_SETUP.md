# 📧 EmailJS Setup Instructions

To enable the contact form to send real emails, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (300 emails/month free tier)

## 2. Setup Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Note your **Service ID**

## 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact from {{name}}

From: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Note your **Template ID**

## 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**

## 5. Update Contact.tsx
Open `components/Contact.tsx` and replace:

```typescript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  formRef.current!,
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
)
```

## 6. Test
1. Run `npm run dev`
2. Go to contact section
3. Fill out the form
4. Check your email inbox!

## Troubleshooting
- Make sure to verify your email service
- Check EmailJS dashboard for error logs
- Ensure your template variable names match the form field names

## Alternative: Environment Variables (Recommended for Production)
Create `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update Contact.tsx:

```typescript
const result = await emailjs.sendForm(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  formRef.current!,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
)
```
