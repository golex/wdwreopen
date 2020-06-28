import PropTypes from "prop-types";
import React from "react";

function SectionHeader({name, info}) {
    return (
        <div className="border-b-2 border-gray-800 pb-1 mb-6">
            <div className="text-2xl font-normal text-gray-900 tracking-wide">
                {name}
            </div>
            <div className="text-base font-normal text-gray-900 tracking-wide">
                {info}
            </div>
        </div>
    )
}

SectionHeader.propTypes = {
    name: PropTypes.string,
    info: PropTypes.string
}

export default SectionHeader;