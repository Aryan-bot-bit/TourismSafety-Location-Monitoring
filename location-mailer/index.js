import express from 'express';
import fetch from 'node-fetch'; 
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static('public'));

const { SENDER_EMAIL, RECIPIENT_EMAIL, GMAIL_APP_PASSWORD } = process.env;

if (!SENDER_EMAIL || !RECIPIENT_EMAIL || !GMAIL_APP_PASSWORD) {
  throw new Error('Please set SENDER_EMAIL, RECIPIENT_EMAIL, and GMAIL_APP_PASSWORD in .env');
}

async function reverseGeocode(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
  const res = await fetch(url, {
    headers: { 'User-Agent': 'LocationMailer/1.0 (rput764@gmail.com)' }
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to reverse geocode: ${res.status} ${res.statusText} - ${text}`);
  }
  const data = await res.json();
  return data.display_name || `lat:${lat}, lon:${lon}`;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SENDER_EMAIL,
    pass: GMAIL_APP_PASSWORD
  }
});

app.post('/send-location', async (req, res) => {
  try {
    const { lat, lon } = req.body;
    if (typeof lat !== 'number' || typeof lon !== 'number') {
      return res.status(400).json({ error: 'lat and lon must be numbers' });
    }

    const address = await reverseGeocode(lat, lon);
    const mapsLink = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=18/${lat}/${lon}`;

    const mailOptions = {
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: `Shared Location`,
      text: `A user shared their location.\n\nCoordinates: ${lat}, ${lon}\nAddress: ${address}\nMap link: ${mapsLink}`
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
