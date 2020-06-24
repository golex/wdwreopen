import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import moment from 'moment';

// Components
import SEO from "../components/seo";
import Content from '../components/content'
import SectionHeader from '../components/sectionheader'
import SectionCard from '../components/sectioncard'
import IconPicker from '../components/iconpicker'
import {RiTwitterLine}from 'react-icons/ri';

function Info() {
    var content = Content()
    const data = useStaticQuery(graphql`
        query {
            currentBuildDate {
                currentDate
            }
        }
    `)
    const buildTimestamp = data.currentBuildDate.currentDate;
    //console.log(content);
    return (
        <div className="flex flex-col font-sans bg-gray-100">
            <SEO title="Is Disney World Open Yet?"/>
            <div className="flex-1 container mx-auto px-4 py-6">
                <h1 className="flex items-center justify-center text-3xl md:text-5xl font-light text-gray-900">
                    <IconPicker name="WDW" className="w-12 h-12 mr-5 fill-current"/>
                    Is Disney World Open Yet?
                </h1>                
                <br/>
                <p className="mb-2">This information is only sourced from official Disney announcements made on public channels.<br/>Last updated <div className="inline-block font-medium">{buildTimestamp}</div>. </p>
                <p className="text-sm italic text-gray-500">This site is not affiliated in any way with the Walt Disney Company or any of its affiliates or subsidiaries.</p>
                <br/>
                <SectionHeader name="Theme Parks"/>
                {content.themeParks.map((section, index) => (
                    <SectionCard section={section} key={index}/>
                ))}
                <SectionHeader name="Resorts - Coming Soon"/>
                {content.resorts.map((section, index) => (
                    <SectionCard section={section} key={index}/>
                ))}
            </div>
            <div className="flex justify-center bg-indigo-200 px-4 py-4">
                <div>Assembled by Ryan Austin</div>
                <a href="https://twitter.com/golex" className="flex ml-6 items-center font-medium"><RiTwitterLine className="w-6 h-6"/> <div className="ml-1">@golex</div></a>
            </div>
        </div>
    )
}


export default Info;