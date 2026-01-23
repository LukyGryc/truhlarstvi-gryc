import React from 'react'

interface Props {
    title: string
}

const SectionTitle:React.FC<Props> = ({ title }) => (
    <div className="mb-16">
        <h1 className="section-header">{title}</h1>
        <div className="header-underline" />
    </div>
)

export default SectionTitle