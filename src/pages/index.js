import PropTypes from "prop-types";
import React from "react";
import moment from 'moment';

// Components
//import SEO from "../components/seo";
import Content from '../components/content'
import SectionHeader from '../components/sectionheader'
import SectionCard from '../components/sectioncard'

// Icons
import mkIllustration from "../images/noun_magic kingdom park_3017446.svg";

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
                <SectionHeader name="Currently under construction"/>
                <br/>
                <SectionHeader name="Theme Parks"/>
                {content.themeParks.map((section, index) => (
                    <SectionCard section={section} key={index}/>
                ))}
                <SectionHeader name="Resorts"/>
                {content.resorts.map((section, index) => (
                    <SectionCard section={section} key={index}/>
                ))}
            </div>
        </div>
    )
}


export default Info;