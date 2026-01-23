import { StatType } from '@/types/layout'
import React from 'react'

interface Props {
    stats: StatType[];
}

const Stat: React.FC<Props> = ({ stats }) => (
    <>
        {
            stats.map(({ description, id, value }) => (
                <div key={id} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</div>
                <p className="text-gray-50 text-sm md:text-base font-medium">{description}</p>
                </div>
            ))
        }
    </>
)

export default Stat