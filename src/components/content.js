
function createSection(t, d, i) {
    return {
        title: t,
        reopenDate: d,
        icon: i,
        content: []
    };
}

function addDataToSection(section, name, icon, status) {
    section.content.push({
        name: name,
        icon: icon,
        status: status
    });
    return section;
}

function Content() {
    var allThemeParks = createSection("All Theme Parks", "", "");
    addDataToSection(allThemeParks, "FastPass+", "test", 0);

    
    var mk = createSection("Magic Kingdom", "", "");
    
    var ak = createSection("Animal Kingdom", "", "");
    
    var ep = createSection("EPCOT", "", "");
    
    var hs = createSection("Hollywood Studios", "", "");

    return {
        themeParks : [allThemeParks, mk, ak, ep, hs],
        resorts : []
    };
}


export default Content;