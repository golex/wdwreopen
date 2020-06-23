
class SectionContent {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    addItem(name, icon, status) {
        this.items.push({
            name,
            icon,
            status
        });
    }
}

class Section {
    constructor(title, reopenDate, icon) {
        this.title = title;
        this.reopenDate = reopenDate;
        this.icon = icon;
        this.content = {};
    }

    addItem(category, name, icon, status) {
        var items = this.content[category];
        if(items === undefined) {
            this.content[category] = [];
            items = this.content[category];
        }
        items.push({
            name,
            icon,
            status
        });
    }
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
    var allThemeParks = new Section("All Theme Parks", "", "");
    allThemeParks.addItem("Misc", "FastPass+", "test", 0);
    allThemeParks.addItem("Misc", "Extra Magic Hours", "test", 0);
    allThemeParks.addItem("Misc", "Park Ticket Sales", "test", 0);
    
    var mk = new Section("Magic Kingdom", "2020-07-11 09:00-04:00", "");
    mk.addItem("Attractions", "Seven Dwarves Mine Train", "test", 1);
    mk.addItem("Attractions", "Peter Pan", "test", 1);
    mk.addItem("Attractions", "Splash Mountain", "test", 1);
    mk.addItem("Attractions", "Philharmagic", "test", 2);
    mk.addItem("Dining", "Crystal Palace", "test", 1);
    mk.addItem("Dining", "Be Our Guest", "test", 2);
    mk.addItem("Shopping", "Big Tent", "test", 1);
    
    var ak = new Section("Animal Kingdom", "2020-07-11 08:00-04:00", "");
    
    var ep = new Section("Epcot", "2020-07-15 11:00-04:00", "");
    
    var hs = new Section("Hollywood Studios", "2020-07-15 10:00-04:00", "");

    return {
        themeParks : [allThemeParks, mk, ak, ep, hs],
        resorts : []
    };
}


export default Content;