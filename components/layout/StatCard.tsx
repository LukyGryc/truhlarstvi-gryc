'use client';
import { StatType } from '@/types/layout'
import { animate } from 'motion';
import { motion, useMotionValue, useMotionValueEvent, useInView } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react'

interface StatCardProps {
    stats: StatType[];
}

const StatCard: React.FC<StatCardProps> = ({ stats }) => (
    <>
        {
            stats.map(({ description, id, value, type }) => (
                <div key={id} className="text-center">
                    <StatValue value={value} type={type} />
                    <p className="text-gray-50 text-sm md:text-base font-medium">{description}</p>
                </div>
            ))
        }
    </>
)

interface StatValueProps {
    value: number; 
    type: "+" | "%" 
}

const StatValue: React.FC<StatValueProps> = ({ value, type }) => {
    const [displayValue, setDisplayValue] = useState(0)
    const count = useMotionValue(0)
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: 3 })
            return () => controls.stop()
        }
    }, [isInView, value, count])

    useMotionValueEvent(count, "change", (latest) => {
        setDisplayValue(Math.round(latest))
    })

    return (
        <motion.div 
            ref={ref}
            className="text-3xl md:text-4xl font-bold text-white mb-2"
        >
            {displayValue}{type}
        </motion.div>
    )
}

export default StatCard