import PropTypes from "prop-types";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Moment from "moment";
import { useStaticQuery, graphql } from "gatsby";
import "react-tabs/style/react-tabs.css";
import "../css/custom.css";

// Icons
import { GiTicket } from "react-icons/gi";
import IconPicker from "./iconpicker";

const openStatusMappings = [
    { css: "wdw-item wdw-item-closed even:bg-gray-100", name: "Closed" },
    { css: "wdw-item wdw-item-open even:bg-gray-100", name: "Open" },
    { css: "wdw-item wdw-item-unknown even:bg-gray-100", name: "Unknown" },
    { css: "wdw-item wdw-item-closed even:bg-gray-100", name: "Suspended" },
    { css: "wdw-item wdw-item-closed even:bg-gray-100", name: "Required" },
    { css: "wdw-item wdw-item-link even:bg-gray-100", name: "" },
    { css: "wdw-item wdw-item-partial even:bg-gray-100", name: "Partial" },
];

const closedStatusMappings = [...openStatusMappings];
closedStatusMappings[1] = {
    css: "wdw-item wdw-item-open even:bg-gray-100",
    name: "Confirmed",
};

function getDateBGColor(date) {
    const reopenDate = Moment("2020-07-14");
    const now = Moment();
    var daysTillDate = date.diff(now, "days");
    if (now.isBefore(reopenDate)) {
        daysTillDate -= reopenDate.diff(now, "days");
    }

    if (daysTillDate <= 7) {
        return "bg-green-100";
    } else if (daysTillDate <= 14) {
        return "bg-yellow-100";
    } else if (daysTillDate <= 21) {
        return "bg-orange-100";
    } else {
        return "bg-red-100";
    }
}

function renderSectionTabList(content) {
    return (
        <TabList className="px-3 border-b border-gray-200 bg-gray-100">
            {Object.keys(content).map((category) => (
                <Tab className="wdw-tabs mx-3 px-1 py-1 text-sm font-medium text-gray-600" key={category}>
                    {category}
                </Tab>
            ))}
        </TabList>
    );
}

function renderItemLabel(name) {
    if (name.startsWith("http")) {
        return (
            <a href={name} className="break-all md:break-normal" target="_blank" rel="noreferrer">
                {name}
            </a>
        );
    } else {
        return <div>{name}</div>;
    }
}

function renderItemStatus(status) {
    if (status) {
        return <td className="w-20 md:w-24 p-1 font-normal">{status}</td>;
    } else {
        return null;
    }
}

function renderCustomSectionContent(custom) {
    const nodeOrder = [1, 0, 2];
    const parks = ["Magic Kingdom", "Animal Kingdom", "Epcot", "Hollywood Studios"];
    const dateCutoff = [Moment("2020-07-11"), Moment("2020-07-11"), Moment("2020-07-15"), Moment("2020-07-15")];
    const query = useStaticQuery(
        graphql`
            query {
                allMongodbWdwReservationSummary(sort: { fields: type }) {
                    nodes {
                        id
                        nextAvailableDate
                        latestUnavailableDate
                        type
                    }
                    totalCount
                }
            }
        `
    );

    // Convert this data into a renderable format
    const data = query.allMongodbWdwReservationSummary.nodes;
    const dateField = custom.custom;
    const parksData = [];
    parks.map((name, index) => {
        const parkData = {
            name,
            dates: [],
        };
        nodeOrder.map((node) => {
            var date = Moment(data[node][dateField][index]);
            if (date.isBefore(dateCutoff[index])) {
                parkData.dates.push( {name: "N/A"});
            } else {
                var dateString;
                if(custom.custom == 'latestUnavailableDate') {
                    const daysUntil = date.diff(Moment(), 'days');
                    dateString = daysUntil + ' days';
                } else {
                    dateString = date.format("MMMM D")
                }
                parkData.dates.push({ name: dateString, color: getDateBGColor(date) });
            }
        });
        parksData.push(parkData);
    });
    //console.log(parksData);

    return (
        <div className="w-full px-4 py-4">
            <div className="text-base font-medium">{custom.name}</div>
            <div className="text-sm text-gray-600 my-2">{custom.description}</div>

            <table className="w-full table-auto my-4 border-collapse border">
                <thead>
                    <tr className="bg-gray-200 font-medium text-sm md:text-base border">
                        <td className="p-1 border">Park</td>
                        <td className="p-1 border">Disney Resort Guests</td>
                        <td className="p-1 border">Annual Passholders</td>
                        <td className="p-1 border">Theme Park Tickets Guests</td>
                    </tr>
                </thead>
                <tbody>
                    {parksData.map((parkData, index) => (
                        <tr className="text-sm md:text-base border" key={index}>
                            <td className="p-1 border font-medium">{parkData.name}</td>
                            <td className={'p-1 border ' + parkData.dates[0].color}>{parkData.dates[0].name}</td>
                            <td className={'p-1 border ' + parkData.dates[1].color}>{parkData.dates[1].name}</td>
                            <td className={'p-1 border ' + parkData.dates[2].color}>{parkData.dates[2].name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a
                href="https://disneyworld.disney.go.com/availability-calendar/"
                className="wdw-item wdw-item-link"
                target="_blank"
                rel="noreferrer"
            >
                Disney Park Pass Availability Calendar
            </a>
        </div>
    );
}

function renderSectionItemList(items, isOpen) {
    if (items.length == 1 && items[0].custom) {
        return renderCustomSectionContent(items[0]);
    }

    const statusMappings = isOpen ? openStatusMappings : closedStatusMappings;
    return (
        <div className="w-full px-4 py-4">
            <table className="w-full table-fixed">
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index} className={statusMappings[item.status].css}>
                            <td className="w-8 md:w-12 p-1 md:py-2">
                                <IconPicker name={item.icon} />
                            </td>
                            <td className="p-1 font-medium">{renderItemLabel(item.name)}</td>
                            {renderItemStatus(statusMappings[item.status].name)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function SectionContent({ content, isOpen }) {
    const numCategories = Object.keys(content).length;
    if (numCategories > 1) {
        return (
            <div>
                <Tabs selectedTabClassName="wdw-tabs-selected">
                    {renderSectionTabList(content)}
                    {Object.keys(content).map((category) => (
                        <TabPanel key={category}>{renderSectionItemList(content[category], isOpen)}</TabPanel>
                    ))}
                </Tabs>
            </div>
        );
    } else if (numCategories == 1) {
        const category = Object.keys(content)[0];
        return <div>{renderSectionItemList(content[category], isOpen)}</div>;
    } else {
        return null;
    }
}

SectionContent.propTypes = {
    content: PropTypes.object,
    isOpen: PropTypes.bool,
};

export default SectionContent;
