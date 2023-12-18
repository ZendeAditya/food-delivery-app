import React from 'react'

const SectionHeader = ({ subheader, header }) => {
    return (
        <div>
            <h3 className="uppercase text-gray-500 font-semibold leading-4">{subheader}</h3>
            <h2 className="text-red-600 font-bold text-4xl italic">{header}</h2>
        </div>
    )
}

export default SectionHeader;