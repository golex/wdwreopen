import PropTypes from "prop-types";
import React from "react";
import moment from "moment";

// Components
import CountdownLabel from '../components/countdownlabel'
import SectionContent from '../components/sectioncontent'
import IconPicker from "./iconpicker";

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
            const reopenDateString = reopenDate.format("MMMM Do");
            return (
                <div className="text-red-600 text-base md:text-lg font-bold tracking-wide">Closed - Reopens {reopenDateString}</div>
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
    const isOpen = reopenDate.isValid() ? currentDate.isAfter(reopenDate) : true;
    return (
        <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-3 py-4 border-b border-gray-200 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col md:mr-2 mb-1 md:mb-0 ">
                        <div className="flex items-center justify-center md:justify-start">
                            <IconPicker name={section.icon} className="w-8 h-8 mr-2 fill-current"/>
                            <h3 className="text-lg leading-6 font-medium text-gray-900 tracking-wide">{section.title}</h3>
                        </div>
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