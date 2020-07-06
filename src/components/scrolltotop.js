import PropTypes from "prop-types";
import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useEffect, useState } from "react";
import IconPicker from "../components/iconpicker";

function ScrollToTop() {
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    if (scrollY > 100) {
        return (
            <button
                className="flex flex-col items-center fixed bottom-0 right-0 m-4 p-2 border bg-white text-indigo-700"
                onClick={scrollToTop}
            >
                <IconPicker name="top" className="w-4 h-4 fill-current" />
                <div className="hidden md:block text-sm font-medium">Top</div>
            </button>
        );
    } else {
        return null;
    }
}

ScrollToTop.propTypes = {};

export default ScrollToTop;
