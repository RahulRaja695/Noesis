// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// require('dotenv').config(); 

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // POST route to handle contact form
// app.post('/send-email', async (req, res) => {
//   const { name, email, phone, message } = req.body;

//   if (!name || !phone || !/^\d{10}$/.test(phone)) {
//     return res.status(400).json({ error: 'Invalid name or phone number' });
//   }

//   try {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS
//     },
//   });

//   await transporter.sendMail({
//     from: `"${name}" <${process.env.EMAIL_USER}>`,
//     to: process.env.EMAIL_USER,
//     // replyTo: email || process.env.EMAIL_USER,
//     subject: `New enquiry from - ${name}`,
//     text: `
//       Hi Team,

//       New enquiry from website - Marketing

//       Client Name: ${name}
//       Phone number: ${phone}
//       Email Id: ${email || 'Not provided'}
//       Address: ${message || 'No message'}

//       Warm Regards,
//       Noesis Digital.
//     `,
//   });

//   res.status(200).json({ success: true});
// }
// // , message: 'Email sent successfully!' 
//   catch (error) {
//     console.error('Email error:', error);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// });

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });
console.log("Email User:", process.env.EMAIL_USER); // Debug
console.log("Email Pass:", process.env.EMAIL_PASS ? "Loaded" : "Missing"); // Debug

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST route to handle contact form
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !phone || !/^\d{10}$/.test(phone)) {
    return res.status(400).json({ error: 'Invalid name or phone number' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New enquiry from - ${name}`,
      text: `
        Hi Team,

        New enquiry from website - Marketing

        Client Name: ${name}
        Phone number: ${phone}
        Email Id: ${email || 'Not provided'}
        Address: ${message || 'No message'}

        Warm Regards,
        Noesis Digital.
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
