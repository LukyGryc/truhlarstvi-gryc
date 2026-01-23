import { NavLinkType } from "@/types/layout"
import NavLink from "./NavLink"

const links: NavLinkType[] = [
  { id: "onas", href: '#onas', label: 'O nás' },
  { id: "sluzby", href: '#sluzby', label: 'Služby' },
  { id: "galerie", href: '#galerie', label: 'Galerie' },
  { id: "kontakt", href: '#kontakt', label: 'Kontakt' }
]

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 flex justify-between w-full px-4 md:px-12 lg:px-60 py-3 md:py-4 bg-white/30 text-black backdrop-blur-md items-center">
      <h1 className="scroll-m-20 text-lg md:text-2xl font-semibold">
        <a href="#landingPage" className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          <span>Truhlářství Gryč</span>
        </a>
      </h1>

      <nav className="flex gap-4">
        {
          links.map(({ id, href, label }) => (
            <NavLink key={id} href={href} label={label} />
          ))
        }
      </nav>
    </header>
  )
}

export default Navbar