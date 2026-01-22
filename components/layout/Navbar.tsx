import Link from "next/link"

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 flex justify-between w-full px-4 md:px-12 lg:px-60 py-3 md:py-4 bg-white/30 text-black backdrop-blur-md items-center">
      <h1 className="scroll-m-20 text-xl md:text-2xl font-semibold">
        <Link href="/" >
          <span>Truhlářství <span className="text-gold italic">Gryč</span></span>
        </Link>
      </h1>

      <nav className="flex gap-4">
        <Link href="/" >O nás</Link>
        <Link href="/sluzby" >Služby</Link>
        <Link href="/galerie" >Galerie</Link>
        <Link href="/kontakt" >Kontakt</Link>
      </nav>
    </header>
  )
}

export default Navbar