import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer"
import { NavigationLinks } from "@/constants/navigationConstants"
import { SquareX } from "lucide-react"

interface IProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const NavDrawer: React.FC<IProps> = ({ isOpen, setIsOpen }) => {

    const handleClose = () => {
        setIsOpen(false)
    }

  return (
    <Drawer direction="right" open={isOpen} onClose={handleClose}>
      <DrawerContent>
        <DrawerHeader className="grid justify-items-end">
            <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
            <SquareX onClick={handleClose}/>
        </DrawerHeader>
        {
            NavigationLinks.map(({ id, href, label }) => (
                <div key={id} onClick={handleClose} className="px-6 py-4 border-b border-gray-200">
                    <a href={href} className="text-lg font-medium text-gray-900 hover:text-blue-500">{label}</a>
                </div>
            ))
        }
      </DrawerContent>
    </Drawer>
  )
}

export default NavDrawer