
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

    
    var mk = createSection("Magic Kingdom", "2020-07-11 09:00", "");
    
    var ak = createSection("Animal Kingdom", "2020-07-11 08:00", "");
    
    var ep = createSection("Epcot", "2020-07-15 11:00", "");
    
    var hs = createSection("Hollywood Studios", "2020-07-15 10:00", "");

    return {
        themeParks : [allThemeParks, mk, ak, ep, hs],
        resorts : []
    };
}


export default Content;