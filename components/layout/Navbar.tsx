const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 flex justify-between w-full px-4 md:px-12 lg:px-60 py-3 md:py-4 bg-white/30 text-black backdrop-blur-md items-center">
      <h1 className="scroll-m-20 text-xl md:text-2xl font-semibold">
        <a href="#landingPage" className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          <span>Truhlářství Gryč</span>
        </a>
      </h1>

      <nav className="flex gap-4">
        <a href="#onas" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 transition-colors hover:text-blue-600">O nás</a>
        <a href="#sluzby" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 transition-colors hover:text-blue-600">Služby</a>
        <a href="#galerie" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 transition-colors hover:text-blue-600">Galerie</a>
        <a href="#kontakt" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 transition-colors hover:text-blue-600">Kontakt</a>
      </nav>
    </header>
  )
}

export default Navbar