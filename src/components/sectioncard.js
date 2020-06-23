import PropTypes from "prop-types";
import React from "react";
import moment from "moment";

// Components
import CountdownLabel from '../components/countdownlabel'
import SectionContent from '../components/sectioncontent'

function RenderSectionCardStatus({reopenDate}) {
    if(reopenDate.isValid()) {
        const currentDate = moment();
        const isOpen =  currentDate.isAfter(reopenDate);
        if(isOpen) {
            return (
                <div className="text-green-600 text-lg font-bold tracking-wide">Open</div>
            )
        }
        else
        {
            return (
                <div className="text-red-600 text-lg font-bold tracking-wide">Closed</div>
            )
        }
    } else {
        return null;
    }
}

RenderSectionCardStatus.propTypes = {
    reopenDate: PropTypes.object,
}

function SectionCard({section}) {
    const reopenDate = moment(section.reopenDate);
    const currentDate = moment();
    const isOpen =  currentDate.isAfter(reopenDate);
    return (
        <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-3 py-4 border-b border-gray-200 sm:px-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900 tracking-wide">{section.title}</h3>
                        <CountdownLabel targetTime={reopenDate}/>
                    </div>
                    <RenderSectionCardStatus reopenDate={reopenDate}/>
                </div>
                
            </div>
            <SectionContent content={section.content} isOpen={isOpen}/>
        </div>
    )
}

SectionCard.propTypes = {
    section: PropTypes.object,
}

export default SectionCard;