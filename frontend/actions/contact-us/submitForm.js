import axios from "axios";

const GOOGLE_SHEET_WEBHOOK = 'https://script.google.com/macros/s/AKfycbw4lpVVgxYmsEOKamdTgPa38gPs76Gg-gAh8ihTCiDRvOsr-0fCD3mIbpOXfqlf9KJH/exec';

export default async function submitForm(req, res) {
  const body = req.body || {};

  // Honeypot check — bots typically fill hidden fields
  if (body.website && body.website.trim() !== '') {
    console.log('[contact-form] honeypot triggered — silently discarding submission');
    // Fake success to avoid tipping off bots
    req.flash('alert', 'success');
    return res.redirect('/contact-us');
  }

  // Server-side validation
  const nama = (body.nama || '').trim();
  const phone = (body.phone || '').trim();
  const pesan = (body.pesan || '').trim();
  const kebutuhan = (body.kebutuhan || '').trim();

  if (nama.length < 2 || phone.length < 10 || pesan.length < 10 || !kebutuhan) {
    req.flash('alert', 'error');
    return res.redirect('/contact-us');
  }

  // Build enriched message for Google Sheet compatibility
  // (Existing sheet only knows nama/email/phone/pesan — append extras to pesan)
  const enrichedPesan = [
    `Jenis Kebutuhan: ${kebutuhan}`,
    body.perusahaan ? `Perusahaan: ${body.perusahaan.trim()}` : null,
    '',
    'Pesan:',
    pesan,
  ].filter(Boolean).join('\n');

  const payload = {
    nama,
    email: (body.email || '').trim(),
    phone,
    pesan: enrichedPesan,
    // Extras for future backend integration (Google Sheet ignores unknown fields)
    perusahaan: (body.perusahaan || '').trim(),
    kebutuhan,
    submitted_at: new Date().toISOString(),
  };

  try {
    const response = await axios.post(GOOGLE_SHEET_WEBHOOK, payload, {
      timeout: 15000,
    });
    const result = response?.data?.result === 'success' ? 'success' : 'error';
    req.flash('alert', result);
  } catch (err) {
    console.error('[contact-form] submission failed:', err.message);
    req.flash('alert', 'error');
  }

  res.redirect('/contact-us');
}
