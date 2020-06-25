import PropTypes from "prop-types";
import React from "react";

function SectionHeader({name, info}) {
    return (
        <div className="border-b border-gray-200 pb-3 mb-5">
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