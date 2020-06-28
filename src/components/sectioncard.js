import PropTypes from "prop-types";
import React, { useState } from "react";
import moment from "moment";

// Components
import CountdownLabel from '../components/countdownlabel'
import SectionContent from '../components/sectioncontent'
import IconPicker from "./iconpicker";
import { Collapse } from "@blueprintjs/core";
import Stripes from '../images/stripe.svg';

function RenderSectionCardStatus({reopenDate}) {
    if(reopenDate.isValid()) {
        const currentDate = moment();
        const isOpen =  currentDate.isAfter(reopenDate);
        if(isOpen) {
            return (
                <div className="text-green-600 text-base md:text-lg font-bold tracking-wide flex items-center w-24">
                    <IconPicker name="open"/>
                    <div className="ml-2">Open</div>
                </div>
            )
        }
        else
        {
            return (
                <div className="text-red-600 text-base md:text-lg font-bold tracking-wide flex items-center w-24">
                    <IconPicker name="close"/>
                    <div className="ml-2">Closed</div>
                </div>
            )
        }
    } else {
        return null;
    }
}

RenderSectionCardStatus.propTypes = {
    reopenDate: PropTypes.object,
}

function RenderSectionCardCollapsible({alwaysVisible, children, id, shouldScroll}) {
    const [isExpanded, toggleExpansion] = useState(false);
    const labelName = isExpanded ? "Close" : "Details";
    const iconName = isExpanded ? "up" : "down";
    const anchorId = '#' + id;
    if(alwaysVisible) {
        return (
            <div>{children}</div>
        );
    } else {
        return (
            <div className="flex flex-col">
                <Collapse isOpen={isExpanded}>
                    {children}
                </Collapse>
                <button className="flex items-center justify-center px-3 py-2 text-indigo-700 font-medium text-sm border-t border-gray-200 focus:outline-none" onClick={() => {
                        toggleExpansion(!isExpanded);
                        
                        if(shouldScroll) {
                            const behavior = isExpanded ? 'auto' : 'smooth';
                            const element = document.querySelector(anchorId);
                            element.scrollIntoView({
                                behavior: behavior,
                                block: 'start',
                            });
                        }
                    }}>
                    {labelName}
                    <IconPicker name={iconName} className = "ml-1 w-5 h-5 fill-current"/>
                </button>
            </div>
        );
    }
}

RenderSectionCardCollapsible.propTypes = {
    alwaysVisible : PropTypes.bool,
    children : PropTypes.element,
    id : PropTypes.string,
    shouldScroll : PropTypes.bool,
}

function RenderSectionCard({reopenDate, children}) {
    const currentDate = moment();
    const isOpen =  currentDate.isAfter(reopenDate);
    if(reopenDate.isValid()) {
        if(isOpen) {
            return (
                <div className="border border-green-600 rounded-lg">{children}</div>
            );

        } else {
            return (
                <div className="border border-red-600 rounded-lg">{children}</div>
            );
        }
    } else {
        return (
            <div>{children}</div>
        );
    }
}

RenderSectionCard.propTypes = {
    reopenDate: PropTypes.object,
    children : PropTypes.element,
}

/*
style={
                    {
                        backgroundImage: `url(${Stripes})`,
                        backgroundSize: "30px 30px",
                    }
                }
*/

function SectionCard({section}) {
    const reopenDate = moment(section.reopenDate);
    const currentDate = moment();
    const isOpen = reopenDate.isValid() ? currentDate.isAfter(reopenDate) : true;
    const alwaysVisibleContent = !section.icon || Object.keys(section.content).length == 0;
    return (
        <div className="bg-white shadow rounded-lg mb-6" id={section.id}>
            <RenderSectionCard reopenDate={reopenDate}>
                <div className="px-3 py-4 border-b border-gray-200 sm:px-6" >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex flex-col md:mr-2 mb-2 md:mb-0 ">
                            <div className="flex items-center justify-center md:justify-start">
                                <IconPicker name={section.icon} className="w-8 h-8 mr-2 fill-current flex-none"/>
                                <h3 className="text-lg leading-6 font-bold text-gray-900 tracking-wide">{section.title}</h3>
                            </div>
                            <CountdownLabel targetTime={reopenDate}/>
                        </div>
                        <RenderSectionCardStatus reopenDate={reopenDate}/>
                    </div>
                </div>
                <RenderSectionCardCollapsible alwaysVisible={alwaysVisibleContent} id={section.id} shouldScroll={section.large}>
                    <SectionContent content={section.content} isOpen={isOpen}/>
                </RenderSectionCardCollapsible>
            </RenderSectionCard>
        </div>
    )
}

SectionCard.propTypes = {
    section: PropTypes.object,
}

export default SectionCard;