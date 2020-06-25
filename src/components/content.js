
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

function addResort(list, name, reopenDate, icon) {
    if(!icon) {
        icon = "hotel";
    }
    var resort = new Section(name, reopenDate, icon);
    list.push(resort);
    return resort;
}

function Content() {
    var allThemeParks = new Section("All Theme Parks", "", null);
    allThemeParks.addItem("Misc", "FastPass+", "door", 3);
    allThemeParks.addItem("Misc", "Extra Magic Hours", "clock", 3);
    allThemeParks.addItem("Misc", "Ticket Sales", "ticket", 3);
    allThemeParks.addItem("Misc", "Parades & Nighttime Shows", "firework", 3);
    allThemeParks.addItem("Misc", "Character Greetings", "mickey", 3);
    allThemeParks.addItem("Misc", "Park Reservations", "calendar", 4);
    allThemeParks.addItem("Misc", "Face Coverings", "mask", 4);
    
    var mk = new Section("Magic Kingdom", "2020-07-11 09:00-04:00", "MK");
    mk.addItem("Attractions", "\"it's a small world\”", "ride", 1);
    mk.addItem("Attractions", "Astro Orbiter", "ride", 1);
    mk.addItem("Attractions", "Big Thunder Mountain Railroad", "ride", 1);
    mk.addItem("Attractions", "Buzz Lightyear's Space Ranger Spin", "ride", 1);
    mk.addItem("Attractions", "Carousel of Progress", "ride", 1);
    mk.addItem("Attractions", "Country Bear Jamboree", "ride", 1);
    mk.addItem("Attractions", "Dumbo the Flying Elephant", "ride", 1);
    mk.addItem("Attractions", "Enchanted Tiki Room", "ride", 1);
    mk.addItem("Attractions", "Jungle Cruise", "ride", 1);
    mk.addItem("Attractions", "Liberty Square Riverboat", "ride", 1);
    mk.addItem("Attractions", "Mad Tea Party", "ride", 1);
    mk.addItem("Attractions", "Mickey's PhilharMagic", "ride", 1);
    mk.addItem("Attractions", "Peter Pan's Flight", "ride", 1);
    mk.addItem("Attractions", "Pirates of the Caribbean", "ride", 1);
    mk.addItem("Attractions", "Prince Charming Regal Carrousel", "ride", 1);
    mk.addItem("Attractions", "Seven Dwarfs Mine Train", "ride", 1);
    mk.addItem("Attractions", "Sorcerers of the Magic Kingdom", "ride", 1);
    mk.addItem("Attractions", "Space Mountain", "ride", 1);
    mk.addItem("Attractions", "Splash Mountain", "ride", 1);
    mk.addItem("Attractions", "Swiss Family Treehouse", "ride", 1);
    mk.addItem("Attractions", "The Barnstormer", "ride", 1);
    mk.addItem("Attractions", "The Hall of Presidents", "ride", 1);
    mk.addItem("Attractions", "The Haunted Mansion", "ride", 1);
    mk.addItem("Attractions", "The Magic Carpets of Aladdin", "ride", 1);
    mk.addItem("Attractions", "The Many Adventures of Winnie the Pooh", "ride", 1);
    mk.addItem("Attractions", "Tom Sawyer Island", "ride", 1);
    mk.addItem("Attractions", "Tomorrowland Speedway", "ride", 1);
    mk.addItem("Attractions", "Tomorrowland Transit Authority Peoplemover", "ride", 1);
    mk.addItem("Attractions", "Under the Sea ~ Journey of The Little Mermaid", "ride", 1);
    mk.addItem("Attractions", "Enchanted Tales with Belle", "ride", 2);
    mk.addItem("Attractions", "Monsters, Inc. Laugh Floor", "ride", 2);

    mk.addItem("Dining", "Aloha Isle", "food", 1);
    mk.addItem("Dining", "Auntie Gravity's Galactic Goodies", "food", 1);
    mk.addItem("Dining", "Be Our Guest Restaurant", "food", 1);
    mk.addItem("Dining", "Cosmic Ray's Starlight Cafe", "food", 1);
    mk.addItem("Dining", "Joffrey’s Coffee & Tea Company", "food", 1);
    mk.addItem("Dining", "Jungle Navigation Co. LTD Skipper Canteen", "food", 1);
    mk.addItem("Dining", "Liberty Square Market", "food", 1);
    mk.addItem("Dining", "Liberty Tree Tavern", "food", 1);
    mk.addItem("Dining", "Main Street Bakery", "food", 1);
    mk.addItem("Dining", "Pecos Bill Tall Tale Inn and Cafe", "food", 1);
    mk.addItem("Dining", "Pinocchio Village Haus", "food", 1);
    mk.addItem("Dining", "The Plaza Restaurant", "food", 1);
    mk.addItem("Dining", "Sleepy Hollow", "food", 1);
    mk.addItem("Dining", "Storybook Treats", "food", 1);
    mk.addItem("Dining", "Sunshine Tree Terrace", "food", 1);
    mk.addItem("Dining", "Tony's Town Square Restaurant", "food", 1);
    mk.addItem("Dining", "Casey's Corner", "food", 2);
    mk.addItem("Dining", "Cheshire Café", "food", 2);
    mk.addItem("Dining", "Cinderella's Royal Table", "food", 2);
    mk.addItem("Dining", "Columbia Harbour House", "food", 2);
    mk.addItem("Dining", "Cool Ship", "food", 2);
    mk.addItem("Dining", "Gaston's Tavern", "food", 2);
    mk.addItem("Dining", "Golden Oak Outpost", "food", 2);
    mk.addItem("Dining", "The Diamond Horseshoe", "food", 2);
    mk.addItem("Dining", "The Friar's Nook", "food", 2);
    mk.addItem("Dining", "The Lunching Pad", "food", 2);
    mk.addItem("Dining", "Tomorrowland Terrace Restaurant", "food", 2);
    mk.addItem("Dining", "Tortuga Tavern", "food", 2);
    mk.addItem("Dining", "Westward Ho", "food", 2);

    mk.addItem("Shopping", "Arribas Brothers", "shop", 1);
    mk.addItem("Shopping", "Baby Care", "shop", 1);
    mk.addItem("Shopping", "Big Al's", "shop", 1);
    mk.addItem("Shopping", "Box Office Gifts", "shop", 1);
    mk.addItem("Shopping", "Buzz Lightyear's Space Ranger Spin Photos", "shop", 1);
    mk.addItem("Shopping", "Crystal Arts", "shop", 1);
    mk.addItem("Shopping", "Emporium", "shop", 1);
    mk.addItem("Shopping", "Fantasy Faire", "shop", 1);
    mk.addItem("Shopping", "Hundred Acre Goods", "shop", 1);
    mk.addItem("Shopping", "Island Supply by Sunglass Hut", "shop", 1);
    mk.addItem("Shopping", "Main Street Confectionery", "shop", 1);
    mk.addItem("Shopping", "Memento Mori", "shop", 1);
    mk.addItem("Shopping", "Plaza del Sol Caribe Bazaar", "shop", 1);
    mk.addItem("Shopping", "Rubio Arts", "shop", 1);
    mk.addItem("Shopping", "Sir Mickey’s", "shop", 1);
    mk.addItem("Shopping", "Splashdown Photos", "shop", 1);
    mk.addItem("Shopping", "Star Traders", "shop", 1);
    mk.addItem("Shopping", "Strollers & Wheelchairs", "shop", 1);
    mk.addItem("Shopping", "The Chapeau", "shop", 1);
    mk.addItem("Shopping", "Tomorrowland Light & Power Co.", "shop", 1);
    mk.addItem("Shopping", "TTC Cart / Wheelchairs", "shop", 1);
    mk.addItem("Shopping", "Uptown Jewelers & Cinema", "shop", 1);
    mk.addItem("Shopping", "Ye Olde Christmas Shoppe", "shop", 1);
    mk.addItem("Shopping", "Bibbidi Bobbidi Boutique", "shop", 0);
    mk.addItem("Shopping", "Harmony Barber Shop", "shop", 0);
    mk.addItem("Shopping", "Agrabah Bazaar", "shop", 2);
    mk.addItem("Shopping", "Big Top Souvenirs", "shop", 2);
    mk.addItem("Shopping", "Bonjour! Village Gifts", "shop", 2);
    mk.addItem("Shopping", "Briar Patch", "shop", 2);
    mk.addItem("Shopping", "Casey Jr. RailRoad Mercantile", "shop", 2);
    mk.addItem("Shopping", "Disney Clothiers", "shop", 2);
    mk.addItem("Shopping", "La Princesa de Cristal", "shop", 2);
    mk.addItem("Shopping", "Liberty Square Portrait Gallery", "shop", 2);
    mk.addItem("Shopping", "Merchant of Venus", "shop", 2);
    mk.addItem("Shopping", "Newsstand", "shop", 2);
    mk.addItem("Shopping", "Prairie Outpost & Supply", "shop", 2);
    mk.addItem("Shopping", "The Pirates League", "shop", 2);
    mk.addItem("Shopping", "Ursa's Major Minor Mart", "shop", 2);

    var ak = new Section("Animal Kingdom", "2020-07-11 08:00-04:00", "AK");
    ak.addItem("Attractions", "Avatar Flight of Passage", "ride", 1);
    ak.addItem("Attractions", "DINOSAUR", "ride", 1);
    ak.addItem("Attractions", "Discovery Island Trails", "ride", 1);
    ak.addItem("Attractions", "Expedition Everest – Legend of the Forbidden Mountain", "ride", 1);
    ak.addItem("Attractions", "Gorilla Falls Exploration Trail", "ride", 1);
    ak.addItem("Attractions", "It’s Tough to be a Bug!", "ride", 1);
    ak.addItem("Attractions", "Kali River Rapids", "ride", 1);
    ak.addItem("Attractions", "Kilimanjaro Safaris", "ride", 1);
    ak.addItem("Attractions", "Maharajah Jungle Trek", "ride", 1);
    ak.addItem("Attractions", "Na'vi River Journey", "ride", 1);
    ak.addItem("Attractions", "The Animation Experience at Conservation Station", "ride", 1);
    ak.addItem("Attractions", "The Oasis Exhibits", "ride", 1);
    ak.addItem("Attractions", "TriceraTop Spin", "ride", 1);
    ak.addItem("Attractions", "Wilderness Explorers", "ride", 1);
    ak.addItem("Attractions", "Wildlife Express", "ride", 1);
    ak.addItem("Attractions", "Festival of the Lion King", "ride", 2);
    ak.addItem("Attractions", "Primeval Whirl", "ride", 2);
    ak.addItem("Attractions", "The Boneyard", "ride", 2);

    ak.addItem("Dining", "Anandapur Ice Cream Truck", "food", 1);
    ak.addItem("Dining", "Creature Comforts", "food", 1);
    ak.addItem("Dining", "Dawa Bar", "food", 1);
    ak.addItem("Dining", "Dino-Bite Snacks", "food", 1);
    ak.addItem("Dining", "Flame Tree Barbecue", "food", 1);
    ak.addItem("Dining", "Harambe Fruit Market", "food", 1);
    ak.addItem("Dining", "Isle of Java", "food", 1);
    ak.addItem("Dining", "Joffrey’s Coffee & Tea Company", "food", 1);
    ak.addItem("Dining", "Mr. Kamal's", "food", 1);
    ak.addItem("Dining", "Nomad Lounge", "food", 1);
    ak.addItem("Dining", "Pongu Pongu", "food", 1);
    ak.addItem("Dining", "Rainforest Cafe® at Disney's Animal Kingdom", "food", 1);
    ak.addItem("Dining", "Restaurantosaurus", "food", 1);
    ak.addItem("Dining", "Satu'li Canteen", "food", 1);
    ak.addItem("Dining", "Tamu Tamu Refreshments", "food", 1);
    ak.addItem("Dining", "Thirsty River Bar & Trek Snacks", "food", 1);
    ak.addItem("Dining", "Tiffins Restaurant", "food", 1);
    ak.addItem("Dining", "Trilo-Bites", "food", 1);
    ak.addItem("Dining", "Yak & Yeti™ Local Food Cafes", "food", 1);
    ak.addItem("Dining", "Yak & Yeti™ Restaurant", "food", 1);
    ak.addItem("Dining", "Caravan Road", "food", 2);
    ak.addItem("Dining", "Dino Diner", "food", 2);
    ak.addItem("Dining", "Drinkwallah", "food", 2);
    ak.addItem("Dining", "Eight Spoon Café", "food", 2);
    ak.addItem("Dining", "Kusafiri Coffee Shop & Bakery", "food", 2);
    ak.addItem("Dining", "Mahindi", "food", 2);
    ak.addItem("Dining", "Pizzafari", "food", 2);
    ak.addItem("Dining", "The Smiling Crocodile", "food", 2);
    ak.addItem("Dining", "Terra Treats", "food", 2);
    ak.addItem("Dining", "Tusker House Restaurant", "food", 2);
    ak.addItem("Dining", "Warung Outpost", "food", 2);

    ak.addItem("Shopping", "Africa Hub Cart", "shop", 1);
    ak.addItem("Shopping", "African Heritage Wood Carving", "shop", 1);
    ak.addItem("Shopping", "Baby Care", "shop", 1);
    ak.addItem("Shopping", "Chester and Hester's Dinosaur Treasures", "shop", 1);
    ak.addItem("Shopping", "Discovery Trading Company", "shop", 1);
    ak.addItem("Shopping", "Garden Gate Gifts & Strollers", "shop", 1);
    ak.addItem("Shopping", "Kilimanjaro Safari Cart", "shop", 1);
    ak.addItem("Shopping", "Mandala Gifts", "shop", 1);
    ak.addItem("Shopping", "Mombasa Marketplace", "shop", 1);
    ak.addItem("Shopping", "Out Of The Wild", "shop", 1);
    ak.addItem("Shopping", "Serka Zong Bazaar", "shop", 1);
    ak.addItem("Shopping", "The Dino Institute Shop", "shop", 1);
    ak.addItem("Shopping", "Windtraders", "shop", 1);
    ak.addItem("Shopping", "Boneyard Cart", "shop", 2);
    ak.addItem("Shopping", "Colors of Mo'ara", "shop", 2);
    ak.addItem("Shopping", "Island Mercantile", "shop", 2);
    ak.addItem("Shopping", "Mariya's Souvenirs", "shop", 2);
    ak.addItem("Shopping", "Riverside Depot", "shop", 2);
    ak.addItem("Shopping", "The Outpost Shop", "shop", 2);
    ak.addItem("Shopping", "Yak & Yeti™ Bhaktapur Market", "shop", 2);
    ak.addItem("Shopping", "Ziwani Traders", "shop", 2);
    ak.addItem("Shopping", "Zuri's Sweets Shop", "shop", 2);

    var ep = new Section("Epcot", "2020-07-15 11:00-04:00", "EP");
    ep.addItem("Attractions", "Awesome Planet", "ride", 1);
    ep.addItem("Attractions", "Canada Far and Wide", "ride", 1);
    ep.addItem("Attractions", "Disney & Pixar Short Film Festival", "ride", 1);
    ep.addItem("Attractions", "Friendship Lagoon Boats", "ride", 1);
    ep.addItem("Attractions", "Frozen Ever After", "ride", 1);
    ep.addItem("Attractions", "Gran Fiesta Tour Starring The Three Caballeros", "ride", 1);
    ep.addItem("Attractions", "Impressions de France", "ride", 1);
    ep.addItem("Attractions", "Journey Into Imagination with Figment", "ride", 1);
    ep.addItem("Attractions", "Kidcot (modified)", "ride", 1);
    ep.addItem("Attractions", "Living with the Land", "ride", 1);
    ep.addItem("Attractions", "Mission: SPACE", "ride", 1);
    ep.addItem("Attractions", "Reflections of China", "ride", 1);
    ep.addItem("Attractions", "Soarin' Around the World", "ride", 1);
    ep.addItem("Attractions", "Spaceship Earth", "ride", 1);
    ep.addItem("Attractions", "Test Track", "ride", 1);
    ep.addItem("Attractions", "The American Adventure", "ride", 1);
    ep.addItem("Attractions", "The Seas with Nemo & Friends", "ride", 1);
    ep.addItem("Attractions", "Walt Disney Imagineering presents the Epcot Experience", "ride", 1);
    ep.addItem("Attractions", "Turtle Talk with Crush", "ride", 2);
    ep.addItem("Attractions", "Voices of Liberty", "ride", 2);

    ep.addItem("Dining", "Biergarten Restaurant", "food", 1);
    ep.addItem("Dining", "Choza de Margarita", "food", 1);
    ep.addItem("Dining", "Coral Reef Restaurant", "food", 1);
    ep.addItem("Dining", "Crepes des Chefs de France", "food", 1);
    ep.addItem("Dining", "Fife & Drum Tavern", "food", 1);
    ep.addItem("Dining", "Funnel Cake", "food", 1);
    ep.addItem("Dining", "Garden Grill Restaurant", "food", 1);
    ep.addItem("Dining", "Gelati", "food", 1);
    ep.addItem("Dining", "Joffrey’s Coffee & Tea Company", "food", 1);
    ep.addItem("Dining", "Joy of Tea", "food", 1);
    ep.addItem("Dining", "Kabuki Café", "food", 1);
    ep.addItem("Dining", "Katsura Grill", "food", 1);
    ep.addItem("Dining", "L'Artisan des Glaces", "food", 1);
    ep.addItem("Dining", "La Cantina de San Angel", "food", 1);
    ep.addItem("Dining", "La Cava de Tequila", "food", 1);
    ep.addItem("Dining", "La Hacienda de San Angel", "food", 1);
    ep.addItem("Dining", "The Land Cart", "food", 1);
    ep.addItem("Dining", "Le Cellier Steakhouse", "food", 1);
    ep.addItem("Dining", "Popcorn in Canada", "food", 1);
    ep.addItem("Dining", "Refreshment Outpost", "food", 1);
    ep.addItem("Dining", "Refreshment Port", "food", 1);
    ep.addItem("Dining", "Regal Eagle Smokehouse: Craft Drafts & Barbecue", "food", 1);
    ep.addItem("Dining", "Rose & Crown Dining Room", "food", 1);
    ep.addItem("Dining", "Rose & Crown Pub", "food", 1);
    ep.addItem("Dining", "San Angel Inn Restaurante", "food", 1);
    ep.addItem("Dining", "Spice Road Table", "food", 1);
    ep.addItem("Dining", "Sunshine Seasons", "food", 1);
    ep.addItem("Dining", "Tangierine Café", "food", 1);
    ep.addItem("Dining", "Taste of EPCOT International Food & Wine Festival", "food", 1);
    ep.addItem("Dining", "Traveler’s Café", "food", 1);
    ep.addItem("Dining", "UK Beer Cart", "food", 1);
    ep.addItem("Dining", "Via Napoli Ristorante e Pizzeria", "food", 1);
    ep.addItem("Dining", "Akershus Royal Banquet Hall", "food", 2);
    ep.addItem("Dining", "Block & Hans", "food", 2);
    ep.addItem("Dining", "Chefs de France", "food", 2);
    ep.addItem("Dining", "Cool Wash", "food", 2);
    ep.addItem("Dining", "Kringla Bakeri Og Kafe", "food", 2);
    ep.addItem("Dining", "Les Halles Boulangerie-Patisserie", "food", 2);
    ep.addItem("Dining", "Lotus Blossom Café", "food", 2);
    ep.addItem("Dining", "Monsieur Paul", "food", 2);
    ep.addItem("Dining", "Nine Dragons Restaurant", "food", 2);
    ep.addItem("Dining", "Restaurant Marrakesh", "food", 2);
    ep.addItem("Dining", "Sommerfest", "food", 2);
    ep.addItem("Dining", "Takumi-Tei", "food", 2);
    ep.addItem("Dining", "Teppan Edo", "food", 2);
    ep.addItem("Dining", "Tokyo Dining", "food", 2);
    ep.addItem("Dining", "Tutto Gusto Wine Cellar", "food", 2);
    ep.addItem("Dining", "Tutto Italia Ristorante", "food", 2);
    ep.addItem("Dining", "Yorkshire County Fish Shop", "food", 2);

    ep.addItem("Shopping", "African Heritage", "shop", 1);
    ep.addItem("Shopping", "Arribas Brothers", "shop", 1);
    ep.addItem("Shopping", "Art of Disney", "shop", 1);
    ep.addItem("Shopping", "Baby Care", "shop", 1);
    ep.addItem("Shopping", "Canada Cart", "shop", 1);
    ep.addItem("Shopping", "China Kiosk", "shop", 1);
    ep.addItem("Shopping", "Disney Traders", "shop", 1);
    ep.addItem("Shopping", "Galerie Des Halles", "shop", 1);
    ep.addItem("Shopping", "Gateway Gifts", "shop", 1);
    ep.addItem("Shopping", "Glas Und Porcellan", "shop", 1);
    ep.addItem("Shopping", "ImageWorks", "shop", 1);
    ep.addItem("Shopping", "Karamell Kuche", "shop", 1);
    ep.addItem("Shopping", "La Bottega Italiana", "shop", 1);
    ep.addItem("Shopping", "Mexico Indoor Plaza", "shop", 1);
    ep.addItem("Shopping", "Mission: SPACE Cargo", "shop", 1);
    ep.addItem("Shopping", "Mitsukoshi", "shop", 1);
    ep.addItem("Shopping", "Mouse Gear Temporary Location", "shop", 1);
    ep.addItem("Shopping", "Pin Traders - Camera Center", "shop", 1);
    ep.addItem("Shopping", "Port of Entry", "shop", 1);
    ep.addItem("Shopping", "Puffin's Roost", "shop", 1);
    ep.addItem("Shopping", "Sea Base Alpha Gift Shop", "shop", 1);
    ep.addItem("Shopping", "Strollers & Wheelchairs", "shop", 1);
    ep.addItem("Shopping", "Tea Caddy", "shop", 1);
    ep.addItem("Shopping", "Test Track Simporium", "shop", 1);
    ep.addItem("Shopping", "Wood Carver", "shop", 1);
    ep.addItem("Shopping", "World Traveler", "shop", 1);
    ep.addItem("Shopping", "Casablanca Carpets", "shop", 2);
    ep.addItem("Shopping", "Das Kaufhaus", "shop", 2);
    ep.addItem("Shopping", "Der Teddybar", "shop", 2);
    ep.addItem("Shopping", "Die Weihnachts Ecke", "shop", 2);
    ep.addItem("Shopping", "El Ranchito del Norte", "shop", 2);
    ep.addItem("Shopping", "Glaskunst", "shop", 2);
    ep.addItem("Shopping", "Good Fortune Gifts", "shop", 2);
    ep.addItem("Shopping", "Il Bel Cristallo", "shop", 2);
    ep.addItem("Shopping", "Kunstarbeit in Kristall", "shop", 2);
    ep.addItem("Shopping", "La Princesa de Cristal", "shop", 2);
    ep.addItem("Shopping", "La Signature", "shop", 2);
    ep.addItem("Shopping", "La Gemma Elegante", "shop", 2);
    ep.addItem("Shopping", "La Tienda Encantada", "shop", 2);
    ep.addItem("Shopping", "L'Esprit de la Provence", "shop", 2);
    ep.addItem("Shopping", "Les Vins de France", "shop", 2);
    ep.addItem("Shopping", "Lords and Ladies", "shop", 2);
    ep.addItem("Shopping", "Marketplace in the Medina", "shop", 2);
    ep.addItem("Shopping", "Northwest Mercantile", "shop", 2);
    ep.addItem("Shopping", "Plaza de los Amigos", "shop", 2);
    ep.addItem("Shopping", "Plume et Palette", "shop", 2);
    ep.addItem("Shopping", "Ring Carvers", "shop", 2);
    ep.addItem("Shopping", "Souk-al-Magreb", "shop", 2);
    ep.addItem("Shopping", "Souvenirs de France", "shop", 2);
    ep.addItem("Shopping", "Sportsman's Shoppe", "shop", 2);
    ep.addItem("Shopping", "Stein Haus", "shop", 2);
    ep.addItem("Shopping", "Tangier Traders", "shop", 2);
    ep.addItem("Shopping", "The Brass Bazaar", "shop", 2);
    ep.addItem("Shopping", "The Crown & Crest", "shop", 2);
    ep.addItem("Shopping", "The Fjording", "shop", 2);
    ep.addItem("Shopping", "The Queen's Table", "shop", 2);
    ep.addItem("Shopping", "The Toy Soldier", "shop", 2);
    ep.addItem("Shopping", "Trading Post", "shop", 2);
    ep.addItem("Shopping", "Village Traders", "shop", 2);
    ep.addItem("Shopping", "Volkskunst", "shop", 2);
    ep.addItem("Shopping", "Wandering Reindeer", "shop", 2);
    ep.addItem("Shopping", "Weinkeller", "shop", 2);

    var hs = new Section("Hollywood Studios", "2020-07-15 10:00-04:00", "HS");
    hs.addItem("Attractions", "Alien Swirling Saucers", "ride", 1);
    hs.addItem("Attractions", "Lightning McQueen's Racing Academy", "ride", 1);
    hs.addItem("Attractions", "Mickey & Minnie's Runaway Railway", "ride", 1);
    hs.addItem("Attractions", "Mickey Shorts Theater", "ride", 1);
    hs.addItem("Attractions", "Millennium Falcon: Smugglers Run", "ride", 1);
    hs.addItem("Attractions", "Muppet*Vision 3D", "ride", 1);
    hs.addItem("Attractions", "Rock 'n' Roller Coaster Starring Aerosmith", "ride", 1);
    hs.addItem("Attractions", "Slinky Dog Dash", "ride", 1);
    hs.addItem("Attractions", "Star Tours – The Adventures Continue", "ride", 1);
    hs.addItem("Attractions", "Star Wars: Rise of the Resistance", "ride", 1);
    hs.addItem("Attractions", "The Twilight Zone Tower of Terror™", "ride", 1);
    hs.addItem("Attractions", "Toy Story Mania!", "ride", 1);
    hs.addItem("Attractions", "Walt Disney Presents", "ride", 1);
    hs.addItem("Attractions", "Beauty and the Beast - Live on Stage", "ride", 2);
    hs.addItem("Attractions", "Disney Junior Dance Party!", "ride", 2);
    hs.addItem("Attractions", "For the First Time In Forever: A Frozen Sing-Along Celebration", "ride", 2);
    hs.addItem("Attractions", "Indiana Jones Epic Stunt Spectacular!", "ride", 2);
    hs.addItem("Attractions", "Jedi Training: Trials of the Temple", "ride", 2);
    hs.addItem("Attractions", "Savi's Workshop", "ride", 2);
    hs.addItem("Attractions", "Voyage of the Little Mermaid", "ride", 2);

    hs.addItem("Dining", "50's Prime Time Café", "food", 1);
    hs.addItem("Dining", "Anaheim Produce", "food", 1);
    hs.addItem("Dining", "Backlot Express", "food", 1);
    hs.addItem("Dining", "BaseLine Tap House", "food", 1);
    hs.addItem("Dining", "Docking Bay 7 Food and Cargo", "food", 1);
    hs.addItem("Dining", "The Hollywood Brown Derby", "food", 1);
    hs.addItem("Dining", "The Hollywood Brown Derby Lounge", "food", 1);
    hs.addItem("Dining", "Joffrey’s Coffee & Tea Company", "food", 1);
    hs.addItem("Dining", "Mama Melrose's Ristorante Italiano", "food", 1);
    hs.addItem("Dining", "Milk Stand", "food", 1);
    hs.addItem("Dining", "Oga's Cantina at the Walt Disney World Resort", "food", 1);
    hs.addItem("Dining", "Peevy’s Polar Pipeline", "food", 1);
    hs.addItem("Dining", "PizzeRizzo", "food", 1);
    hs.addItem("Dining", "Ronto Roasters", "food", 1);
    hs.addItem("Dining", "Rosie's All-American Café", "food", 1);
    hs.addItem("Dining", "Sci-Fi Dine-In Theater Restaurant", "food", 1);
    hs.addItem("Dining", "Sunshine Day Bar", "food", 1);
    hs.addItem("Dining", "The Trolley Car Café", "food", 1);
    hs.addItem("Dining", "ABC Commissary", "food", 2);
    hs.addItem("Dining", "Catalina Eddie's", "food", 2);
    hs.addItem("Dining", "Dockside Diner", "food", 2);
    hs.addItem("Dining", "Epic Eats", "food", 2);
    hs.addItem("Dining", "Fairfax Fare", "food", 2);
    hs.addItem("Dining", "Hollywood Scoops", "food", 2);
    hs.addItem("Dining", "Hollywood & Vine", "food", 2);
    hs.addItem("Dining", "Kat Saka's Kettle", "food", 2);
    hs.addItem("Dining", "KRNR The Rock Station", "food", 2);
    hs.addItem("Dining", "Market", "food", 2);
    hs.addItem("Dining", "Neighborhood Bakery", "food", 2);
    hs.addItem("Dining", "Tune-In Lounge", "food", 2);
    hs.addItem("Dining", "Woody's Lunch Box", "food", 2);

    hs.addItem("Shopping", "Celebrity 5 & 10", "shop", 1);
    hs.addItem("Shopping", "Crossroads of the World", "shop", 1);
    hs.addItem("Shopping", "Dok Ondar's Den of Antiquities", "shop", 1);
    hs.addItem("Shopping", "Droid Depot Experience", "shop", 1);
    hs.addItem("Shopping", "Droid Depot Store", "shop", 1);
    hs.addItem("Shopping", "In Character", "shop", 1);
    hs.addItem("Shopping", "Legends of Hollywood", "shop", 1);
    hs.addItem("Shopping", "Mickey's Of Hollywood", "shop", 1);
    hs.addItem("Shopping", "Movieland Memorabilia", "shop", 1);
    hs.addItem("Shopping", "Once Upon A Time", "shop", 1);
    hs.addItem("Shopping", "Rock Around The Shop", "shop", 1);
    hs.addItem("Shopping", "Rubio Arts", "shop", 1);
    hs.addItem("Shopping", "Sid Cahuenga's One-of-a-Kind", "shop", 1);
    hs.addItem("Shopping", "Strollers & Wheelchairs", "shop", 1);
    hs.addItem("Shopping", "Tatooine Traders", "shop", 1);
    hs.addItem("Shopping", "The Market", "shop", 1);
    hs.addItem("Shopping", "Tower Hotel Gifts", "shop", 1);
    hs.addItem("Shopping", "Toy Story Mania Shop", "shop", 1);
    hs.addItem("Shopping", "Beverly Sunset Boutique", "shop", 2);
    hs.addItem("Shopping", "Black Spire Outfitters", "shop", 2);
    hs.addItem("Shopping", "Creature Stall", "shop", 2);
    hs.addItem("Shopping", "Disney Studio Store", "shop", 2);
    hs.addItem("Shopping", "First Order Cargo", "shop", 2);
    hs.addItem("Shopping", "Frozen Fractal Gifts", "shop", 2);
    hs.addItem("Shopping", "Indiana Jones Adventure Outpost", "shop", 2);
    hs.addItem("Shopping", "It's A Wonderful Shop", "shop", 2);
    hs.addItem("Shopping", "Keystone Clothiers", "shop", 2);
    hs.addItem("Shopping", "Launch Bay Cargo", "shop", 2);
    hs.addItem("Shopping", "Oscar's Super Service", "shop", 2);
    hs.addItem("Shopping", "Resistance Supply", "shop", 2);
    hs.addItem("Shopping", "Sunset Ranch Pins and Souvenirs", "shop", 2);
    hs.addItem("Shopping", "Stage 1 Company Store", "shop", 2);
    hs.addItem("Shopping", "Toydarian Toymaker", "shop", 2);

    var other = new Section("Other", "", "");
    other.addItem("Misc", "Golf", "map", 1);
    other.addItem("Misc", "Blizzard Beach", "map", 0);
    other.addItem("Misc", "ESPN Wide World of Sports Complex", "map", 0);
    other.addItem("Misc", "Miniature Golf", "map", 0);
    other.addItem("Misc", "Spas and Salons", "map", 0);
    other.addItem("Misc", "Typhoon Lagoon", "map", 0);

    var valueResorts = [];
    var moderateResorts = [];
    var deluxeResorts = [];
    var dvcResorts = [];

    // Value
    addResort(valueResorts, "Disney's All-Star Movies Resort", "2021-01-01 09:00-04:00");
    addResort(valueResorts, "Disney's All-Star Music Resort", "2021-01-01 09:00-04:00");
    addResort(valueResorts, "Disney's All-Star Sports Resort", "2021-01-01 09:00-04:00");
    addResort(valueResorts, "Disney's Art of Animation Resort", "2020-08-12 09:00-04:00");
    addResort(valueResorts, "Disney's Pop Century Resort", "2020-07-10 09:00-04:00");
    var fwResort = addResort(valueResorts, "The Campsites at Disney's Fort Wilderness Resort", "2020-06-22 09:00-04:00");
    //Moderate:

    addResort(moderateResorts, "Disney's Caribbean Beach Resort", "2020-07-29 09:00-04:00");
    addResort(moderateResorts, "Disney's Coronado Springs Resort", "2020-10-14 09:00-04:00");
    addResort(moderateResorts, "Disney's Port Orleans Resort - French Quarter", "2021-01-01 09:00-04:00");
    addResort(moderateResorts, "Disney's Port Orleans Resort - Riverside", "2021-01-01 09:00-04:00");
    var fwcResort = addResort(moderateResorts, "The Cabins at Disney's Fort Wilderness Resort", "2020-06-22 09:00-04:00");
    //Deluxe:

    addResort(deluxeResorts, "Disney's Animal Kingdom Lodge", "2021-01-01 09:00-04:00");
    addResort(deluxeResorts, "Disney's Beach Club Resort", "2020-08-24 09:00-04:00");
    addResort(deluxeResorts, "Disney's BoardWalk Inn", "2020-10-01 09:00-04:00");
    addResort(deluxeResorts, "Disney's Contemporary Resort", "2020-07-10 09:00-04:00");
    addResort(deluxeResorts, "Disney's Grand Floridian Resort & Spa", "2020-09-21 09:00-04:00");
    addResort(deluxeResorts, "Disney's Polynesian Village Resort", "2020-08-12 09:00-04:00");
    addResort(deluxeResorts, "Disney's Wilderness Lodge", "2021-01-01 09:00-04:00");
    addResort(deluxeResorts, "Disney's Yacht Club Resort", "2020-08-24 09:00-04:00");

    //DVC:
    var bltResort = addResort(dvcResorts, "Bay Lake Tower at Disney's Contemporary Resort", "2020-06-22 09:00-04:00", "village");
    var brResort = addResort(dvcResorts, "Boulder Ridge Villas at Disney's Wilderness Lodge", "2020-06-22 09:00-04:00", "village");
    var ccResort = addResort(dvcResorts, "Copper Creek Villas & Cabins at Disney's Wilderness Lodge", "2020-06-22 09:00-04:00", "village");
    addResort(dvcResorts, "Disney's Animal Kingdom Villas - Jambo House", "2021-01-01 09:00-04:00", "village");
    var akkResort = addResort(dvcResorts, "Disney's Animal Kingdom Villas - Kidani Village", "2020-06-22 09:00-04:00", "village");
    var bcvResort = addResort(dvcResorts, "Disney's Beach Club Villas", "2020-06-22 09:00-04:00", "village");
    var bwvResort = addResort(dvcResorts, "Disney's BoardWalk Villas", "2020-06-22 09:00-04:00", "village");
    var okwResort = addResort(dvcResorts, "Disney's Old Key West Resort", "2020-06-22 09:00-04:00", "village");
    var pvbResort = addResort(dvcResorts, "Disney's Polynesian Villas & Bungalows", "2020-06-22 09:00-04:00", "village");
    var rivResort = addResort(dvcResorts, "Disney’s Riviera Resort", "2020-06-22 09:00-04:00", "village");
    var ssrResort = addResort(dvcResorts, "Disney's Saratoga Springs Resort & Spa", "2020-06-22 09:00-04:00", "village");
    var gfvResort = addResort(dvcResorts, "The Villas at Disney's Grand Floridian Resort & Spa", "2020-06-22 09:00-04:00", "village");

    fwResort.addItem("Dining", "P&J's Southern Takeout", "food", 1);
    fwResort.addItem("Dining", "Meadow Snack Bar", "food", 1);
    fwResort.addItem("Dining", "Crockett’s Tavern", "food", 1);
    fwcResort.addItem("Dining", "P&J's Southern Takeout", "food", 1);
    fwcResort.addItem("Dining", "Meadow Snack Bar", "food", 1);
    fwcResort.addItem("Dining", "Crockett’s Tavern", "food", 1);
    
    bltResort.addItem("Dining", "The Wave… of American Flavors ", "food", 1);
    bltResort.addItem("Dining", "The Wave Lounge", "food", 1);
    bltResort.addItem("Dining", "Contempo Café", "food", 1);
    bltResort.addItem("Dining", "Cove Bar", "food", 1);

    brResort.addItem("Dining", "Whispering Canyon Cafe", "food", 1);
    brResort.addItem("Dining", "Roaring Fork", "food", 1);
    brResort.addItem("Dining", "Geyser Point Bar & Grill", "food", 1);
    ccResort.addItem("Dining", "Whispering Canyon Cafe", "food", 1);
    ccResort.addItem("Dining", "Roaring Fork", "food", 1);
    ccResort.addItem("Dining", "Geyser Point Bar & Grill", "food", 1);

    akkResort.addItem("Dining", "Sanaa", "food", 1);
    akkResort.addItem("Dining", "Kidani Breakfast at Sanaa", "food", 1);
    akkResort.addItem("Dining", "Sanaa Lounge", "food", 1);
    akkResort.addItem("Dining", "Maji Pool Bar", "food", 1);

    bcvResort.addItem("Dining", "Beaches and Cream Soda Shop", "food", 1);
    bcvResort.addItem("Dining", "Beach Club Marketplace", "food", 1);
    bcvResort.addItem("Dining", "Martha’s Vineyard", "food", 1);

    bwvResort.addItem("Dining", "Trattoria al Forno (excludes Character Dining)", "food", 1);
    bwvResort.addItem("Dining", "Pizza Window", "food", 1);
    bwvResort.addItem("Dining", "BoardWalk Bakery", "food", 1);
    bwvResort.addItem("Dining", "Leaping Horse Libations", "food", 1);
    bwvResort.addItem("Dining", "AbracadaBar", "food", 1);

    okwResort.addItem("Dining", "Olivia’s Café", "food", 1);
    okwResort.addItem("Dining", "Good's Food to Go", "food", 1);
    okwResort.addItem("Dining", "Gurgling Suitcase", "food", 1);

    pvbResort.addItem("Dining", "Kona Cafe", "food", 1);
    pvbResort.addItem("Dining", "Capt. Cook's", "food", 1);
    pvbResort.addItem("Dining", "Pineapple Lanai", "food", 1);
    pvbResort.addItem("Dining", "Barefoot Pool Bar", "food", 1);

    rivResort.addItem("Dining", "Topolino’s Terrace (includes modified Character Dining)", "food", 1);
    rivResort.addItem("Dining", "Primo Piatto", "food", 1);
    rivResort.addItem("Dining", "Le Petit Café", "food", 1);
    rivResort.addItem("Dining", "Bar Riva", "food", 1);

    ssrResort.addItem("Dining", "The Artist’s Palette", "food", 1);
    ssrResort.addItem("Dining", "The Paddock Grill", "food", 1);
    ssrResort.addItem("Dining", "On the Rocks Pool Bar", "food", 1);

    gfvResort.addItem("Dining", "Grand Floridian Cafe", "food", 1);
    gfvResort.addItem("Dining", "Gasparilla Island Grill", "food", 1);
    gfvResort.addItem("Dining", "Enchanted Rose", "food", 1);
    gfvResort.addItem("Dining", "Beaches Pool Bar & Grill", "food", 1);

    fwResort.addItem("Shopping", "Settlement Trading Post", "shop", 1);
    fwResort.addItem("Shopping", "Meadow Trading Post", "shop", 1);
    fwcResort.addItem("Shopping", "Settlement Trading Post", "shop", 1);
    fwcResort.addItem("Shopping", "Meadow Trading Post", "shop", 1);

    bltResort.addItem("Shopping", "Bayview Gifts", "shop", 1);
    bltResort.addItem("Shopping", "Fantasia Market ", "shop", 1);

    brResort.addItem("Shopping", "Wilderness Mercantile", "shop", 1);
    ccResort.addItem("Shopping", "Wilderness Mercantile", "shop", 1);

    akkResort.addItem("Shopping", "Johari Treasures", "shop", 1);

    bcvResort.addItem("Shopping", "Beach Club Marketplace", "shop", 1);

    bwvResort.addItem("Shopping", "Screen Door General Store", "shop", 1);

    okwResort.addItem("Shopping", "Conch Flats General Store", "shop", 1);

    pvbResort.addItem("Shopping", "Moana Mercantile", "shop", 1);
    pvbResort.addItem("Shopping", "Bou-tiki", "shop", 1);

    rivResort.addItem("Shopping", "La Boutique", "shop", 1);

    ssrResort.addItem("Shopping", "Artist’s Palette", "shop", 1);

    gfvResort.addItem("Shopping", "M. Mouse Mercantile", "shop", 1);
    gfvResort.addItem("Shopping", "Sandy Cove Gifts and Sundries", "shop", 1);


    var references = new Section("References", "", "");
    references.addItem("Link", "https://disneyworld.disney.go.com/experience-updates/", "link", 5);
    references.addItem("Link", "https://disneyworld.disney.go.com/experience-updates/parks", "link", 5);
    references.addItem("Link", "https://disneyworld.disney.go.com/experience-updates/resorts", "link", 5);
    references.addItem("Link", "https://disneyworld.disney.go.com/experience-updates/dine/", "link", 5);
    references.addItem("Link", "https://disneyworld.disney.go.com/experience-updates/park-reservations", "link", 5);
    references.addItem("Link", "https://disneyworld.disney.go.com/experience-updates/events-tours-extras", "link", 5);
    references.addItem("Link", "https://disneyworld.disney.go.com/experience-updates/annual-passes/", "link", 5);
    references.addItem("Link", "https://disneyworld.disney.go.com/travel-information/", "link", 5);
    references.addItem("Link", "https://disneyparks.disney.go.com/blog/2020/06/attractions-and-entertainment-details-for-phased-reopening-of-walt-disney-world-theme-parks/", "link", 5);
    references.addItem("Link", "https://disneyparks.disney.go.com/blog/2020/06/introducing-the-disney-park-pass-system-for-reserving-theme-park-visits-to-walt-disney-world-resort/", "link", 5);
    references.addItem("Link", "https://disneyparks.disney.go.com/blog/2020/06/update-on-seasonal-events-at-walt-disney-world-resort/", "link", 5);
    references.addItem("Link", "https://disneyworld.disney.go.com/faq/dining-reservations/advance-reservation-window/", "link", 5);


    return {
        themeParks : [allThemeParks, mk, ak, ep, hs, other],
        resorts : [valueResorts, moderateResorts, deluxeResorts, dvcResorts],
        references : [references],
    };
}


export default Content;