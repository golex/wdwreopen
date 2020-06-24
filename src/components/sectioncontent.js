import PropTypes from "prop-types";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../css/custom.css';

// Icons
import {GiTicket} from 'react-icons/gi';
import IconPicker from "./iconpicker";

const openStatusMappings = [
    {css: "wdw-item-closed", name: "Closed"},
    {css: "wdw-item-open", name:"Open"},
    {css: "wdw-item-unknown", name:"Unknown"},
    {css: "wdw-item-closed", name:"Suspended"},
    {css: "wdw-item-closed", name:"Required"},
];

const closedStatusMappings = [
    {css: "wdw-item-closed", name: "Closed"},
    {css: "wdw-item-open", name:"Confirmed"},
    {css: "wdw-item-unknown", name:"Unknown"},
    {css: "wdw-item-closed", name:"Suspended"},
    {css: "wdw-item-closed", name:"Required"},
];

function renderSectionTabList(content) {
    return (
            <TabList className="px-3 border-b border-gray-200 bg-gray-100">
                {Object.keys(content).map((category) => (
                    <Tab className="wdw-tabs mx-3 px-1 py-1 text-sm font-medium text-gray-600" key={category}>{category}</Tab>
                ))}
            </TabList>
    )
}

function renderSectionItemList(items, isOpen) {
    const statusMappings = isOpen ? openStatusMappings : closedStatusMappings;
    return (
        <div className="w-full px-4 py-4">
            <table className="w-full table-fixed">
                <tbody>
                    {items.map((item, index) => (

                        <tr key={index} className={statusMappings[item.status].css}>
                            <td className="w-8 md:w-12 p-1 font-medium">
                                <IconPicker name={item.icon}/>
                            </td>
                            <td className="p-1 font-medium">
                                {item.name}
                            </td>
                            <td className="w-20 md:w-56 p-1 font-normal">
                                {statusMappings[item.status].name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function SectionContent({content, isOpen}) {
    const numCategories = Object.keys(content).length;
    if(numCategories > 1) {
        return (
            <div>
                <Tabs selectedTabClassName="wdw-tabs-selected"> 
                    {renderSectionTabList(content)}
                    {Object.keys(content).map((category) => (
                        <TabPanel key={category}>
                            {renderSectionItemList(content[category], isOpen)}
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
            )
    } else if (numCategories == 1) {
        const category = Object.keys(content)[0];
        return (
            <div>
                {renderSectionItemList(content[category], isOpen)}
            </div>
        )
    } else {
        return null;
    }
}

SectionContent.propTypes = {
    content : PropTypes.object,
    isOpen : PropTypes.bool,
}

export default SectionContent;