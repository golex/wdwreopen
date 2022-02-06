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
import { RiTwitterLine, RiRedditLine, RiFacebookCircleLine, RiClipboardLine } from "react-icons/ri";
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

                <div className="bg-white shadow rounded-lg mb-6 p-3 md:text-base text-sm">
                    <div className="text-5xl font-semibold flex justify-center">Yes.</div>
                    <div className="-mt-2 mb-10 flex justify-center text-xs text-gray-700">(pretty much)</div>
                    <div className="mb-6">
                        I am no longer updating this website since Walt Disney World is pretty much open. All the resort
                        hotels are accepting guests again, as are the temporarily closed restaurants and shops. For
                        better or worse, the post-pandemic changes like park reservations and Genie+ are here to stay.
                    </div>
                    <div className="mb-1">
                        I hope this site was helpful during the long reopening, and for the latest information please
                        visit Disney`s official website:
                    </div>
                    <div className="flex justify-center text-blue-600 underline font-semibold">
                        <a href="https://disneyworld.disney.go.com/experience-updates/">
                            Walt Disney World Experience Updates
                        </a>
                    </div>
                </div>

                <div className="flex justify-center mb-6 p-3 bg-blue-600 shadow rounded-lg  text-white">
                    <div className="inline-flex flex-col text-center">
                        <div className="font-bold md:text-lg text-base">
                            I&apos;d love to learn more about your Disney planning strategy!
                        </div>
                        <div className="max-w-xl md:block hidden text-sm text-blue-100">
                            I&apos;ll never include external advertising on the page, but I&apos;m hoping to build the
                            best Disney planning tools ever and would really appreciate your help.
                        </div>
                        <a
                            className="mt-2 p-1 bg-white rounded-lg text-blue-500 font-bold md:text-lg text-sm"
                            href="https://forms.gle/7f6zL8xFzKe5TpEy6"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Fill out the 3 minute Disney Planner survey
                        </a>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg mb-6 p-3 md:text-base text-sm">
                    <div className="mb-1 flex justify-between">
                        <div>
                            Last updated <div className="inline-block font-medium">{buildTimestamp}</div>.
                        </div>
                        <div className="text-gray-700">
                            <RedditShareButton url="https://isdisneyworldopenyet.com" title="Is Disney World Open Yet?">
                                <RiRedditLine className="mx-1 w-6 h-6 fill-current" />
                            </RedditShareButton>
                            <TwitterShareButton
                                url="https://isdisneyworldopenyet.com"
                                title="Is Disney World Open Yet?"
                                related={["@golex"]}
                            >
                                <RiTwitterLine className="mx-1 w-6 h-6 fill-current" />
                            </TwitterShareButton>
                            <FacebookShareButton
                                url="https://isdisneyworldopenyet.com"
                                quote="Is Disney World Open Yet?"
                            >
                                <RiFacebookCircleLine className="mx-1 w-6 h-6 fill-current" />
                            </FacebookShareButton>
                        </div>
                    </div>
                    <div className="mb-1">
                        This information is only sourced from official Disney announcements made on public channels.
                    </div>
                    <div className="mb-1 md:text-sm text-xs text-gray-600">
                        This site is not affiliated in any way with the Walt Disney Company or any of its affiliates or
                        subsidiaries.
                    </div>
                </div>
                {/*
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
                */}
            </div>
            <div className="fixed w-full bottom-0 flex justify-center bg-indigo-200 px-4 py-4">
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
