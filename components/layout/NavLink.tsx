'use client';
import { NavLinkType } from "@/types/layout"
import { motion } from "motion/react"

interface Props extends Omit<NavLinkType, 'id'> {};

const NavLink: React.FC<Props> = ({ href, label }) => (
    <motion.a 
        href={href} 
        className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 font-medium"
        initial={{ background: "transparent", color: "black" }}
        whileHover={{ 
            background: "rgba(0, 0, 0, 0.8)",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            color: "white"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
    >
        {label}
    </motion.a>
)

export default NavLink