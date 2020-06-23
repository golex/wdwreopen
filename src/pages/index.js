import PropTypes from "prop-types";
import React from "react";
import moment from 'moment';

// Components
//import SEO from "../components/seo";
import Content from '../components/content'
import CountdownLabel from '../components/countdownlabel'

// Icons
import mkIllustration from "../images/noun_magic kingdom park_3017446.svg";
import {GiTicket} from 'react-icons/gi';

function RenderSectionHeader({name}) {
    return (
        <div className="text-2xl font-normal text-gray-900 tracking-wide border-b border-gray-200 pb-3 mb-5">{name}</div>
    )
}

RenderSectionHeader.propTypes = {
    name: PropTypes.string
}

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

function RenderSectionCard({section}) {
    const reopenDate = moment(section.reopenDate);
    const currentDate = moment();
    const isOver =  currentDate.isAfter(reopenDate);
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
            <div className="px-3 border-b border-gray-200 bg-gray-100">
                <div className="flex">
                    <a className="mx-3 px-1 py-2 text-sm font-medium text-indigo-600 border-b-2 border-indigo-600">Attractions</a>
                    <a className="mx-3 px-1 py-2 text-sm font-medium text-gray-600">Dining</a>
                    <a className="mx-4 px-1 py-2 text-sm font-medium text-gray-600">Shops</a>
                    <a className="mx-4 px-1 py-2 text-sm font-medium text-gray-600">Special events</a>
                </div>
            </div>
            <div className="w-full px-10 py-4">
                <table className="w-full table-fixed">
                    <tbody>
                        <tr>
                            <td className="w-12 p-1 text-red-600 font-medium">
                                <GiTicket className="w-8 h-8 fill-current"/>
                            </td>
                        <td className="w-1/3 p-1 text-red-600 font-medium">
                                FastPass+
                        </td>
                        <td className="p-1 text-red-600 font-normal">
                            Unavailable
                        </td>
                        </tr>
                        <tr>
                            <td className="w-12 p-1 text-red-600 font-medium">
                                <svg
                                    className="w-8 h-8 mr-2 fill-current"
                                    height="54"
                                    viewBox="0 0 54 54"
                                    width="54"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                                </svg>
                            </td>
                        <td className="w-1/3 p-1 text-red-600 font-medium">
                                Extra Magic Hours
                        </td>
                        <td className="p-1 text-red-600 font-normal">
                            Unavailable
                        </td>
                        </tr>
                        <tr>
                            <td className="w-12 p-1 text-red-600 font-medium">
                                <svg
                                    className="w-8 h-8 mr-2 fill-current"
                                    height="54"
                                    viewBox="0 0 54 54"
                                    width="54"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                                </svg>
                            </td>
                        <td className="w-1/3 p-1 text-red-600 font-medium">
                                Parades
                        </td>
                        <td className="p-1 text-red-600 font-normal">
                            Unavailable
                        </td>
                        </tr>
                        <tr>
                            <td className="w-12 p-1 text-red-600 font-medium">
                                <svg
                                    className="w-8 h-8 mr-2 fill-current"
                                    height="54"
                                    viewBox="0 0 54 54"
                                    width="54"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                                </svg>
                            </td>
                        <td className="w-1/3 p-1 text-red-600 font-medium">
                                Park Ticket Purchase
                        </td>
                        <td className="p-1 text-red-600 font-normal">
                            Unavailable
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

RenderSectionCard.propTypes = {
    section: PropTypes.object,
}

function Info() {
    var content = Content()
    console.log(content);
    return (
        <div className="flex font-sansbg-gray-100">
            {/*
            <div className="w-64 bg-gray-200 p-4 shadow-md">
                <h2 className="text-xl">Welcome</h2>
            </div>
            */}
            <div className="flex-1 container mx-auto px-4 py-6">
                <h1 className="flex items-center text-5xl font-light text-gray-900">
                    <img
                    alt="magic kingdom park by Vectors Point from the Noun Project"
                    className="w-12 h-12 mr-5 fill-current"
                    src={mkIllustration}
                    />
                    Is Disney World Open Yet?
                </h1>
                <RenderSectionHeader name="Currently under construction"/>
                <br/>
                <RenderSectionHeader name="Theme Parks"/>
                {content.themeParks.map((section, index) => (
                    <RenderSectionCard section={section} key={index}/>
                ))}
                <RenderSectionHeader name="Resorts"/>
                {content.resorts.map((section, index) => (
                    <RenderSectionCard section={section} key={index}/>
                ))}
            </div>
        </div>
    )
}


export default Info;