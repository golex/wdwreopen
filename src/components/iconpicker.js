import PropTypes from "prop-types";
import React from "react";

// Icons
import castleIllustration from "../images/noun_magic kingdom park_3017446.svg";
import mkIllustration from "../images/noun_mickey mouse_881132.svg";
import akIllustration from "../images/noun_scar_1308380.svg";
import epIllustration from "../images/noun_Future Earth_63078.svg";
import hsIllustration from "../images/noun_Wizard's Hat_200109.svg";
import {GiTicket, GiCalendar, GiFireworkRocket, GiCauldron, GiShop, GiExitDoor, GiVillage, GiBed} from 'react-icons/gi';
import {RiMickeyLine, RiRestaurantLine, RiMapPinLine, RiExternalLinkLine} from 'react-icons/ri';
import {FaShoppingBag} from 'react-icons/fa';
import {BsClockHistory} from 'react-icons/bs';
import {ReactComponent as MaskIcon} from '../images/noun_mask_3399244.svg';
import {ReactComponent as RideIcon} from '../images/noun_Roller Coaster_164833.svg';

function IconPicker({name, className}) {
    if(className === undefined) {
        className = "w-6 h-6 fill-current";
    }
    switch(name)
    {
        case "WDW":
            return (
                <img
                alt="magic kingdom park by Vectors Point from the Noun Project"
                className={className}
                src={castleIllustration}
                />
            )
            
        case "MK":
            return (
                <img
                alt="mickey mouse by SoyGalem from the Noun Project"
                className={className}
                src={mkIllustration}
                />
            )
        case "AK":
            return (
                <img
                alt="scar by SoyGalem from the Noun Project"
                className={className}
                src={akIllustration}
                />
            )
        case "EP":
            return (
                <img
                alt="Future Earth by Heinz Wegener from the Noun Project"
                className={className}
                src={epIllustration}
                />
            )
        case "HS":
            return (
                <img
                alt="Wizard's Hat by Olly Banham from the Noun Project"
                className={className}
                src={hsIllustration}
                />
            )
        case "ticket":
            return (
                <GiTicket className={className}/>
            )
        case "calendar":
            return (
                <GiCalendar className={className}/>
            )
        case "firework":
            return (
                <GiFireworkRocket className={className}/>
            )
        case "mickey":
            return (
                <RiMickeyLine className={className}/>
            )
        case "cauldron":
            return (
                <GiCauldron className={className}/>
            )
        case "mask":
            return (
                <MaskIcon className={className}/>
            )
        case "bag":
            return (
                <FaShoppingBag className={className}/>
            )
        case "shop":
            return (
                <GiShop className={className}/>
            )
        
        case "door":
            return (
                <GiExitDoor className={className}/>
            )
        case "clock":
            return (
                <BsClockHistory className={className}/>
            )
        case "food":
            return (
                <RiRestaurantLine className={className}/>
            )
        case "village":
            return (
                <GiVillage className={className}/>
            )
        case "ride":
            return (
                <RideIcon className={className}/>
            )
        case "map":
            return (
                <RiMapPinLine className={className}/>
            )
        case "link":
            return (
                <RiExternalLinkLine className={className}/>
            )  
        case "hotel":
            return (
                <GiBed className={className}/>
            )               
    }
    return null;
};

IconPicker.propTypes = {
    name : PropTypes.string,
    className : PropTypes.string,
}

export default IconPicker;