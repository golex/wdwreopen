import PropTypes from "prop-types";
import React from "react";

function SectionHeader({name}) {
    return (
        <div className="text-2xl font-normal text-gray-900 tracking-wide border-b border-gray-200 pb-3 mb-5">{name}</div>
    )
}

SectionHeader.propTypes = {
    name: PropTypes.string
}

export default SectionHeader;