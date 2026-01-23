import { ContactItem } from '@/types/layout';
import React, { JSX } from 'react'

interface Props {
    contacts: ContactItem[];
}

const getLinkElement = (link: string, linkLabel: string): JSX.Element => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    {linkLabel}
  </a>
)

const getDescription = (description: string): JSX.Element => (
  <p className="text-gray-50">
    {description}
  </p>
)

const Contacts: React.FC<Props> = ({ contacts }) => (
    <>
        {
            contacts.map(({ firstRow, icon, id, secondRow, link }) => (
            <div key={id} className="flex gap-4 mb-8">
                <div className="text-gray-100 flex-shrink-0">{icon}</div>
                <div>
                <p className="mb-1 text-gray-50 font-medium">{firstRow}</p>
                {
                    link 
                    ? getLinkElement(link, secondRow)
                    : getDescription(secondRow)
                }
                </div>
            </div>
            ))
        }
    </>
)

export default Contacts