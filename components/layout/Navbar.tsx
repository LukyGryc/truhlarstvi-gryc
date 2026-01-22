import Link from "next/link"

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 flex justify-between w-full px-4 md:px-12 lg:px-60 py-3 md:py-4 bg-white/30 text-black backdrop-blur-md items-center">
      <h1 className="scroll-m-20 text-xl md:text-2xl font-semibold">
        <a href="#onas">
          <span>Truhlářství <span className="text-gold italic">Gryč</span></span>
        </a>
      </h1>

      <nav className="flex gap-4">
        <a href="#onas">O nás</a>
        <a href="#sluzby">Služby</a>
        <a href="#galerie">Galerie</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
    </header>
  )
}

export default Navbar