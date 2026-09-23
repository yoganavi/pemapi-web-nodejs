// WhatsApp deeplink helper — builds wa.me URLs with contextual prefilled messages
// Phone number verified in memory: 0811-2899-009 → international format 628112899009

const WA_NUMBER = '628112899009';

const templates = {
  general: 'Halo PEMAPI, saya ingin bertanya.',
  konsultasi: 'Halo PEMAPI, saya tertarik untuk konsultasi terkait kebutuhan APAR di perusahaan saya. Mohon informasinya lebih lanjut. Terima kasih.',
  product: (name) => `Halo PEMAPI, saya tertarik dengan ${name}. Mohon informasi kapasitas, harga, dan cara order. Terima kasih.`,
  solusi: (title) => `Halo PEMAPI, saya tertarik dengan layanan ${title}. Mohon informasinya. Terima kasih.`,
  industri: (title) => `Halo PEMAPI, kami dari sektor ${title} dan membutuhkan konsultasi APAR yang sesuai. Mohon informasinya. Terima kasih.`,
  quizResult: (type, capacity, quantity) =>
    `Halo PEMAPI, saya baru selesai Quiz APAR dan mendapat rekomendasi: ${type} ${capacity}, ${quantity} unit. Mohon konsultasi untuk validasi rekomendasi ini. Terima kasih.`,
  app: 'Halo PEMAPI, saya tertarik dengan PEMAPI App untuk manajemen APAR digital. Mohon informasi cara setup dan onboarding. Terima kasih.',
};

/**
 * Build wa.me URL with prefilled message.
 * @param {string} context - one of 'general', 'konsultasi', 'product', 'solusi', 'industri', 'quizResult', 'app'
 * @param  {...any} args - context-specific args passed to template function
 * @returns {string} full wa.me URL
 */
export function waLink(context = 'general', ...args) {
  const tmpl = templates[context] || templates.general;
  const message = typeof tmpl === 'function' ? tmpl(...args) : tmpl;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_PHONE_DISPLAY = '0811-2899-009';
export const WA_PHONE_INTL = WA_NUMBER;
