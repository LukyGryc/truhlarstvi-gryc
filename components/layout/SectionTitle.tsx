'use client';
import { motion } from 'motion/react'
import React from 'react'

interface Props {
    title: string
}

const SectionTitle:React.FC<Props> = ({ title }) => (
    <motion.div 
        className="mb-16"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
    >
        <h1 className="section-header">{title}</h1>
        <div className="header-underline" />
    </motion.div>
)

export default SectionTitle