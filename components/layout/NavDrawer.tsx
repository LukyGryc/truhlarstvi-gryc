import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer"
import { NavigationLinks } from "@/constants/navigationConstants"
import { getHref } from "@/util/linkUtil"
import { SquareX } from "lucide-react"

interface IProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    isHomePage: boolean
}

const NavDrawer: React.FC<IProps> = ({ isOpen, setIsOpen, isHomePage }) => {

  const handleClose = () => {
      setIsOpen(false)
  }

  return (
    <Drawer direction="right" open={isOpen} onClose={handleClose}>
      <DrawerContent className="overflow-y-auto">
        <DrawerHeader className="grid justify-items-end">
            <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={handleClose}
              className="p-1 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-offset-2"
            >
              <SquareX aria-hidden="true" />
            </button>
        </DrawerHeader>
        {
            NavigationLinks.map(({ id, href, label }) => (
                <div key={id} onClick={handleClose} className="px-6 py-4 border-b border-gray-200">
                    <a href={getHref(href, isHomePage)} className="text-lg font-medium text-gray-900 hover:text-blue-500">{label}</a>
                </div>
            ))
        }
      </DrawerContent>
    </Drawer>
  )
}

export default NavDrawer