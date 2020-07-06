import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import moment from "moment";

// Components
import SEO from "../components/seo";
import Content from "../../content.json";
import SectionHeader from "../components/sectionheader";
import SectionCard from "../components/sectioncard";
import IconPicker from "../components/iconpicker";
import { RiTwitterLine, RiRedditLine, RiFacebookCircleLine } from "react-icons/ri";
import ScrollToTop from "../components/scrolltotop";
import { FacebookShareButton, RedditShareButton, TwitterShareButton } from "react-share";

function Info() {
    var content = Content;
    const data = useStaticQuery(graphql`
        query {
            currentBuildDate {
                currentDate
            }
        }
    `);
    const buildTimestamp = data.currentBuildDate.currentDate;
    //console.log(content);
    return (
        <div className="flex flex-col font-sans bg-gray-100 text-gray-900">
            <SEO title="Is Disney World Open Yet?" />
            <div className="flex-1 container mx-auto px-4 py-6">
                <h1 className="flex items-center justify-center text-3xl md:text-5xl font-light">
                    <IconPicker name="WDW" className="w-12 h-12 mr-5 fill-current" />
                    Is Disney World Open Yet?
                </h1>
                <br />

                <div className="bg-white shadow rounded-lg mb-6 p-3">
                    <div className="mb-1 flex justify-between">
                        <div>
                            Last updated <div className="inline-block font-medium">{buildTimestamp}</div>.
                        </div>
                        <div className="text-gray-700">
                            <RedditShareButton url="https://isdisneyworldopenyet.com" title="Is Disney World Open Yet?">
                                <RiRedditLine className="mx-1 w-6 h-6 fill-current" />
                            </RedditShareButton>
                            <TwitterShareButton url="https://isdisneyworldopenyet.com" title="Is Disney World Open Yet?" related={["@golex"]}>
                                <RiTwitterLine className="mx-1 w-6 h-6 fill-current" />
                            </TwitterShareButton>
                            <FacebookShareButton url="https://isdisneyworldopenyet.com" quote="Is Disney World Open Yet?">
                                <RiFacebookCircleLine className="mx-1 w-6 h-6 fill-current" />
                            </FacebookShareButton>
                        </div>
                    </div>
                    <div className="mb-1">
                        This information is only sourced from official Disney announcements made on public channels.
                    </div>
                    <div className="text-sm text-gray-600">
                        This site is not affiliated in any way with the Walt Disney Company or any of its affiliates or
                        subsidiaries.
                    </div>
                </div>
                <SectionHeader name="Theme Parks" />
                {content.themeParks.map((section, index) => (
                    <SectionCard section={section} key={index} />
                ))}
                <SectionHeader name="Value Resorts" />
                {content.resorts[0].map((section, index) => (
                    <SectionCard section={section} key={index} />
                ))}
                <SectionHeader name="Moderate Resorts" />
                {content.resorts[1].map((section, index) => (
                    <SectionCard section={section} key={index} />
                ))}
                <SectionHeader name="Deluxe Resorts" />
                {content.resorts[2].map((section, index) => (
                    <SectionCard section={section} key={index} />
                ))}
                <SectionHeader name="Vacation Club Resorts" />
                {content.resorts[3].map((section, index) => (
                    <SectionCard section={section} key={index} />
                ))}
                <SectionHeader name="" />
                <SectionCard section={content.references[0]} />
            </div>
            <div className="flex justify-center bg-indigo-200 px-4 py-4">
                <div>Assembled by Ryan Austin</div>
                <a href="https://twitter.com/golex" className="flex ml-6 items-center font-medium">
                    <RiTwitterLine className="w-6 h-6" /> <div className="ml-1">@golex</div>
                </a>
            </div>
            <ScrollToTop />
        </div>
    );
}

export default Info;
