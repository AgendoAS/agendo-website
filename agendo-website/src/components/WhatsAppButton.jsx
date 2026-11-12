const WHATSAPP_URL =
  'https://wa.me/5561993794643?text=' +
  encodeURIComponent('Olá! Vim pelo site da AGENDO e gostaria de mais informações.')

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] shadow-lg transition-colors"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="white" aria-hidden="true">
        <path d="M16.04 3C9.4 3 4 8.38 4 15c0 2.12.56 4.18 1.62 6L4 29l8.2-1.58A12.06 12.06 0 0 0 16.04 27C22.66 27 28 21.62 28 15S22.66 3 16.04 3Zm0 21.8c-1.8 0-3.58-.48-5.12-1.4l-.37-.22-4.86.94.98-4.7-.24-.39A9.73 9.73 0 0 1 6.3 15c0-5.38 4.37-9.76 9.74-9.76 5.36 0 9.72 4.38 9.72 9.76s-4.36 9.8-9.72 9.8Zm5.34-7.3c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.58-.9-2.17-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.2 3.02c.15.2 2.06 3.14 4.99 4.4.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.73-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34Z" />
      </svg>
    </a>
  )
}
