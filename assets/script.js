const gen1 = ["Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran",
  "Nidorina",
  "Nidoqueen",
  "Nidoran",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch'd",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew"]
const gen2 = ["Chikorita",
  "Bayleef",
  "Meganium",
  "Cyndaquil",
  "Quilava",
  "Typhlosion",
  "Totodile",
  "Croconaw",
  "Feraligatr",
  "Sentret",
  "Furret",
  "Hoothoot",
  "Noctowl",
  "Ledyba",
  "Ledian",
  "Spinarak",
  "Ariados",
  "Crobat",
  "Chinchou",
  "Lanturn",
  "Pichu",
  "Cleffa",
  "Igglybuff",
  "Togepi",
  "Togetic",
  "Natu",
  "Xatu",
  "Mareep",
  "Flaaffy",
  "Ampharos",
  "Bellossom",
  "Marill",
  "Azumarill",
  "Sudowoodo",
  "Politoed",
  "Hoppip",
  "Skiploom",
  "Jumpluff",
  "Aipom",
  "Sunkern",
  "Sunflora",
  "Yanma",
  "Wooper",
  "Quagsire",
  "Espeon",
  "Umbreon",
  "Murkrow",
  "Slowking",
  "Misdreavus",
  "Unown",
  "Wobbuffet",
  "Girafarig",
  "Pineco",
  "Forretress",
  "Dunsparce",
  "Gligar",
  "Steelix",
  "Snubbull",
  "Granbull",
  "Qwilfish",
  "Scizor",
  "Shuckle",
  "Heracross",
  "Sneasel",
  "Teddiursa",
  "Ursaring",
  "Slugma",
  "Magcargo",
  "Swinub",
  "Piloswine",
  "Corsola",
  "Remoraid",
  "Octillery",
  "Delibird",
  "Mantine",
  "Skarmory",
  "Houndour",
  "Houndoom",
  "Kingdra",
  "Phanpy",
  "Donphan",
  "Porygon2",
  "Stantler",
  "Smeargle",
  "Tyrogue",
  "Hitmontop",
  "Smoochum",
  "Elekid",
  "Magby",
  "Miltank",
  "Blissey",
  "Raikou",
  "Entei",
  "Suicune",
  "Larvitar",
  "Pupitar",
  "Tyranitar",
  "Lugia",
  "Ho-Oh",
  "Celebi"]
const gen3 = ["Treecko",
  "Grovyle",
  "Sceptile",
  "Torchic",
  "Combusken",
  "Blaziken",
  "Mudkip",
  "Marshtomp",
  "Swampert",
  "Poochyena",
  "Mightyena",
  "Zigzagoon",
  "Linoone",
  "Wurmple",
  "Silcoon",
  "Beautifly",
  "Cascoon",
  "Dustox",
  "Lotad",
  "Lombre",
  "Ludicolo",
  "Seedot",
  "Nuzleaf",
  "Shiftry",
  "Taillow",
  "Swellow",
  "Wingull",
  "Pelipper",
  "Ralts",
  "Kirlia",
  "Gardevoir",
  "Surskit",
  "Masquerain",
  "Shroomish",
  "Breloom",
  "Slakoth",
  "Vigoroth",
  "Slaking",
  "Nincada",
  "Ninjask",
  "Shedinja",
  "Whismur",
  "Loudred",
  "Exploud",
  "Makuhita",
  "Hariyama",
  "Azurill",
  "Nosepass",
  "Skitty",
  "Delcatty",
  "Sableye",
  "Mawile",
  "Aron",
  "Lairon",
  "Aggron",
  "Meditite",
  "Medicham",
  "Electrike",
  "Manectric",
  "Plusle",
  "Minun",
  "Volbeat",
  "Illumise",
  "Roselia",
  "Gulpin",
  "Swalot",
  "Carvanha",
  "Sharpedo",
  "Wailmer",
  "Wailord",
  "Numel",
  "Camerupt",
  "Torkoal",
  "Spoink",
  "Grumpig",
  "Spinda",
  "Trapinch",
  "Vibrava",
  "Flygon",
  "Cacnea",
  "Cacturne",
  "Swablu",
  "Altaria",
  "Zangoose",
  "Seviper",
  "Lunatone",
  "Solrock",
  "Barboach",
  "Whiscash",
  "Corphish",
  "Crawdaunt",
  "Baltoy",
  "Claydol",
  "Lileep",
  "Cradily",
  "Anorith",
  "Armaldo",
  "Feebas",
  "Milotic",
  "Castform",
  "Kecleon",
  "Shuppet",
  "Banette",
  "Duskull",
  "Dusclops",
  "Tropius",
  "Chimecho",
  "Absol",
  "Wynaut",
  "Snorunt",
  "Glalie",
  "Spheal",
  "Sealeo",
  "Walrein",
  "Clamperl",
  "Huntail",
  "Gorebyss",
  "Relicanth",
  "Luvdisc",
  "Bagon",
  "Shelgon",
  "Salamence",
  "Beldum",
  "Metang",
  "Metagross",
  "Regirock",
  "Regice",
  "Registeel",
  "Latias",
  "Latios",
  "Kyogre",
  "Groudon",
  "Rayquaza",
  "Jirachi",
  "Deoxys"]
const gen4 = ["Turtwig",
  "Grotle",
  "Torterra",
  "Chimchar",
  "Monferno",
  "Infernape",
  "Piplup",
  "Prinplup",
  "Empoleon",
  "Starly",
  "Staravia",
  "Staraptor",
  "Bidoof",
  "Bibarel",
  "Kricketot",
  "Kricketune",
  "Shinx",
  "Luxio",
  "Luxray",
  "Budew",
  "Roserade",
  "Cranidos",
  "Rampardos",
  "Shieldon",
  "Bastiodon",
  "Burmy",
  "Wormadam",
  "Mothim",
  "Combee",
  "Vespiquen",
  "Pachirisu",
  "Buizel",
  "Floatzel",
  "Cherubi",
  "Cherrim",
  "Shellos",
  "Gastrodon",
  "Ambipom",
  "Drifloon",
  "Drifblim",
  "Buneary",
  "Lopunny",
  "Mismagius",
  "Honchkrow",
  "Glameow",
  "Purugly",
  "Chingling",
  "Stunky",
  "Skuntank",
  "Bronzor",
  "Bronzong",
  "Bonsly",
  "Mime Jr.",
  "Happiny",
  "Chatot",
  "Spiritomb",
  "Gible",
  "Gabite",
  "Garchomp",
  "Munchlax",
  "Riolu",
  "Lucario",
  "Hippopotas",
  "Hippowdon",
  "Skorupi",
  "Drapion",
  "Croagunk",
  "Toxicroak",
  "Carnivine",
  "Finneon",
  "Lumineon",
  "Mantyke",
  "Snover",
  "Abomasnow",
  "Weavile",
  "Magnezone",
  "Lickilicky",
  "Rhyperior",
  "Tangrowth",
  "Electivire",
  "Magmortar",
  "Togekiss",
  "Yanmega",
  "Leafeon",
  "Glaceon",
  "Gliscor",
  "Mamoswine",
  "Porygon-Z",
  "Gallade",
  "Probopass",
  "Dusknoir",
  "Froslass",
  "Rotom",
  "Uxie",
  "Mesprit",
  "Azelf",
  "Dialga",
  "Palkia",
  "Heatran",
  "Regigigas",
  "Giratina",
  "Cresselia",
  "Phione",
  "Manaphy",
  "Darkrai",
  "Shaymin",
  "Arceus"]
const gen5 = ["Victini",
  "Snivy",
  "Servine",
  "Serperior",
  "Tepig",
  "Pignite",
  "Emboar",
  "Oshawott",
  "Dewott",
  "Samurott",
  "Patrat",
  "Watchog",
  "Lillipup",
  "Herdier",
  "Stoutland",
  "Purrloin",
  "Liepard",
  "Pansage",
  "Simisage",
  "Pansear",
  "Simisear",
  "Panpour",
  "Simipour",
  "Munna",
  "Musharna",
  "Pidove",
  "Tranquill",
  "Unfezant",
  "Blitzle",
  "Zebstrika",
  "Roggenrola",
  "Boldore",
  "Gigalith",
  "Woobat",
  "Swoobat",
  "Drilbur",
  "Excadrill",
  "Audino",
  "Timburr",
  "Gurdurr",
  "Conkeldurr",
  "Tympole",
  "Palpitoad",
  "Seismitoad",
  "Throh",
  "Sawk",
  "Sewaddle",
  "Swadloon",
  "Leavanny",
  "Venipede",
  "Whirlipede",
  "Scolipede",
  "Cottonee",
  "Whimsicott",
  "Petilil",
  "Lilligant",
  "Basculin",
  "Sandile",
  "Krokorok",
  "Krookodile",
  "Darumaka",
  "Darmanitan",
  "Maractus",
  "Dwebble",
  "Crustle",
  "Scraggy",
  "Scrafty",
  "Sigilyph",
  "Yamask",
  "Cofagrigus",
  "Tirtouga",
  "Carracosta",
  "Archen",
  "Archeops",
  "Trubbish",
  "Garbodor",
  "Zorua",
  "Zoroark",
  "Minccino",
  "Cinccino",
  "Gothita",
  "Gothorita",
  "Gothitelle",
  "Solosis",
  "Duosion",
  "Reuniclus",
  "Ducklett",
  "Swanna",
  "Vanillite",
  "Vanillish",
  "Vanilluxe",
  "Deerling",
  "Sawsbuck",
  "Emolga",
  "Karrablast",
  "Escavalier",
  "Foongus",
  "Amoonguss",
  "Frillish",
  "Jellicent",
  "Alomomola",
  "Joltik",
  "Galvantula",
  "Ferroseed",
  "Ferrothorn",
  "Klink",
  "Klang",
  "Klinklang",
  "Tynamo",
  "Eelektrik",
  "Eelektross",
  "Elgyem",
  "Beheeyem",
  "Litwick",
  "Lampent",
  "Chandelure",
  "Axew",
  "Fraxure",
  "Haxorus",
  "Cubchoo",
  "Beartic",
  "Cryogonal",
  "Shelmet",
  "Accelgor",
  "Stunfisk",
  "Mienfoo",
  "Mienshao",
  "Druddigon",
  "Golett",
  "Golurk",
  "Pawniard",
  "Bisharp",
  "Bouffalant",
  "Rufflet",
  "Braviary",
  "Vullaby",
  "Mandibuzz",
  "Heatmor",
  "Durant",
  "Deino",
  "Zweilous",
  "Hydreigon",
  "Larvesta",
  "Volcarona",
  "Cobalion",
  "Terrakion",
  "Virizion",
  "Tornadus",
  "Thundurus",
  "Reshiram",
  "Zekrom",
  "Landorus",
  "Kyurem",
  "Keldeo",
  "Meloetta",
  "Genesect"]
const gen6 = ["Chespin",
  "Quilladin",
  "Chesnaught",
  "Fennekin",
  "Braixen",
  "Delphox",
  "Froakie",
  "Frogadier",
  "Greninja",
  "Bunnelby",
  "Diggersby",
  "Fletchling",
  "Fletchinder",
  "Talonflame",
  "Scatterbug",
  "Spewpa",
  "Vivillon",
  "Litleo",
  "Pyroar",
  "Flabébé",
  "Floette",
  "Florges",
  "Skiddo",
  "Gogoat",
  "Pancham",
  "Pangoro",
  "Furfrou",
  "Espurr",
  "Meowstic",
  "Honedge",
  "Doublade",
  "Aegislash",
  "Spritzee",
  "Aromatisse",
  "Swirlix",
  "Slurpuff",
  "Inkay",
  "Malamar",
  "Binacle",
  "Barbaracle",
  "Skrelp",
  "Dragalge",
  "Clauncher",
  "Clawitzer",
  "Helioptile",
  "Heliolisk",
  "Tyrunt",
  "Tyrantrum",
  "Amaura",
  "Aurorus",
  "Sylveon",
  "Hawlucha",
  "Dedenne",
  "Carbink",
  "Goomy",
  "Sliggoo",
  "Goodra",
  "Klefki",
  "Phantump",
  "Trevenant",
  "Pumpkaboo",
  "Gourgeist",
  "Bergmite",
  "Avalugg",
  "Noibat",
  "Noivern",
  "Xerneas",
  "Yveltal",
  "Zygarde",
  "Diancie",
  "Hoopa",
  "Volcanion"]
const gen7 = ["Rowlet",
  "Dartrix",
  "Decidueye",
  "Litten",
  "Torracat",
  "Incineroar",
  "Popplio",
  "Brionne",
  "Primarina",
  "Pikipek",
  "Trumbeak",
  "Toucannon",
  "Yungoos",
  "Gumshoos",
  "Grubbin",
  "Charjabug",
  "Vikavolt",
  "Crabrawler",
  "Crabominable",
  "Oricorio",
  "Cutiefly",
  "Ribombee",
  "Rockruff",
  "Lycanroc",
  "Wishiwashi",
  "Mareanie",
  "Toxapex",
  "Mudbray",
  "Mudsdale",
  "Dewpider",
  "Araquanid",
  "Fomantis",
  "Lurantis",
  "Morelull",
  "Shiinotic",
  "Salandit",
  "Salazzle",
  "Stufful",
  "Bewear",
  "Bounsweet",
  "Steenee",
  "Tsareena",
  "Comfey",
  "Oranguru",
  "Passimian",
  "Wimpod",
  "Golisopod",
  "Sandygast",
  "Palossand",
  "Pyukumuku",
  "Type: Null",
  "Silvally",
  "Minior",
  "Komala",
  "Turtonator",
  "Togedemaru",
  "Mimikyu",
  "Bruxish",
  "Drampa",
  "Dhelmise",
  "Jangmo-o",
  "Hakamo-o",
  "Kommo-o",
  "Tapu Koko",
  "Tapu Lele",
  "Tapu Bulu",
  "Tapu Fini",
  "Cosmog",
  "Cosmoem",
  "Solgaleo",
  "Lunala",
  "Nihilego",
  "Buzzwole",
  "Pheromosa",
  "Xurkitree",
  "Celesteela",
  "Kartana",
  "Guzzlord",
  "Necrozma",
  "Magearna",
  "Marshadow",
  "Poipole",
  "Naganadel",
  "Stakataka",
  "Blacephalon",
  "Zeraora",
  "Meltan",
  "Melmetal"]
const gen8 = ["Grookey",
  "Thwackey",
  "Rillaboom",
  "Scorbunny",
  "Raboot",
  "Cinderace",
  "Sobble",
  "Drizzile",
  "Inteleon",
  "Skwovet",
  "Greedent",
  "Rookidee",
  "Corvisquire",
  "Corviknight",
  "Blipbug",
  "Dottler",
  "Orbeetle",
  "Nickit",
  "Thievul",
  "Gossifleur",
  "Eldegoss",
  "Wooloo",
  "Dubwool",
  "Chewtle",
  "Drednaw",
  "Yamper",
  "Boltund",
  "Rolycoly",
  "Carkol",
  "Coalossal",
  "Applin",
  "Flapple",
  "Appletun",
  "Silicobra",
  "Sandaconda",
  "Cramorant",
  "Arrokuda",
  "Barraskewda",
  "Toxel",
  "Toxtricity",
  "Sizzlipede",
  "Centiskorch",
  "Clobbopus",
  "Grapploct",
  "Sinistea",
  "Polteageist",
  "Hatenna",
  "Hattrem",
  "Hatterene",
  "Impidimp",
  "Morgrem",
  "Grimmsnarl",
  "Obstagoon",
  "Perrserker",
  "Cursola",
  "Sirfetch’d",
  "Mr. Rime",
  "Runerigus",
  "Milcery",
  "Alcremie",
  "Falinks",
  "Pincurchin",
  "Snom",
  "Frosmoth",
  "Stonjourner",
  "Eiscue",
  "Indeedee",
  "Morpeko",
  "Cufant",
  "Copperajah",
  "Dracozolt",
  "Arctozolt",
  "Dracovish",
  "Arctovish",
  "Duraludon",
  "Dreepy",
  "Drakloak",
  "Dragapult",
  "Zacian",
  "Zamazenta",
  "Eternatus",
  "Kubfu",
  "Urshifu",
  "Zarude",
  "Regieleki",
  "Regidrago",
  "Glastrier",
  "Spectrier",
  "Calyrex",
  "Wyrdeer",
  "Kleavor",
  "Ursaluna",
  "Basculegion",
  "Sneasler",
  "Overqwil",
  "Enamorus"]
const gen9 = ["Sprigatito",
  "Floragato",
  "Meowscarada",
  "Fuecoco",
  "Crocalor",
  "Skeledirge",
  "Quaxly",
  "Quaxwell",
  "Quaquaval",
  "Lechonk",
  "Oinkologne",
  "Tarountula",
  "Spidops",
  "Nymble",
  "Lokix",
  "Pawmi",
  "Pawmo",
  "Pawmot",
  "Tandemaus",
  "Maushold",
  "Fidough",
  "Dachsbun",
  "Smoliv",
  "Dolliv",
  "Arboliva",
  "Squawkabilly",
  "Nacli",
  "Naclstack",
  "Garganacl",
  "Charcadet",
  "Armarouge",
  "Ceruledge",
  "Tadbulb",
  "Bellibolt",
  "Wattrel",
  "Kilowattrel",
  "Maschiff",
  "Mabosstiff",
  "Shroodle",
  "Grafaiai",
  "Bramblin",
  "Brambleghast",
  "Toedscool",
  "Toedscruel",
  "Klawf",
  "Capsakid",
  "Scovillain",
  "Rellor",
  "Rabsca",
  "Flittle",
  "Espathra",
  "Tinkatink",
  "Tinkatuff",
  "Tinkaton",
  "Wiglett",
  "Wugtrio",
  "Bombirdier",
  "Finizen",
  "Palafin",
  "Varoom",
  "Revavroom",
  "Cyclizar",
  "Orthworm",
  "Glimmet",
  "Glimmora",
  "Greavard",
  "Houndstone",
  "Flamigo",
  "Cetoddle",
  "Cetitan",
  "Veluza",
  "Dondozo",
  "Tatsugiri",
  "Annihilape",
  "Clodsire",
  "Farigiraf",
  "Dudunsparce",
  "Kingambit",
  "Great-Tusk",
  "Scream-Tail",
  "Brute-Bonnet",
  "Flutter-Mane",
  "Slither-Wing",
  "Sandy-Shocks",
  "Iron-Treads",
  "Iron-Bundle",
  "Iron-Hands",
  "Iron-Jugulis",
  "Iron-Moth",
  "Iron-Thorns",
  "Frigibax",
  "Arctibax",
  "Baxcalibur",
  "Gimmighoul",
  "Gholdengo",
  "Wo-Chien",
  "Chien-Pao",
  "Ting-Lu",
  "Chi-Yu",
  "Roaring-Moon",
  "Iron-Valiant",
  "Koraidon",
  "Miraidon"/*,
  "Walking-Wake",
  "Iron-Leaves",
  "Okidogi",
  "Munkidori",
  "Fezandipiti",
  "Ogerpon",
  "Terapagos"*/]
// https://www.dragonflycave.com/resources/pokemon-list-generator 
let allPokemon = gen1.concat(gen2, gen3, gen4, gen5, gen6, gen7, gen8, gen9)

const searchBtn = document.getElementById("search")
const searchBox = document.getElementById("pokemonName") // names with spaces need a '-' between them
const pictureBox = document.getElementById("pictureBox")
const nameDiv = document.getElementById("name")
const descriptionP = document.getElementById("desctiption")
const hpStat = document.getElementById("HP")
const attackStat = document.getElementById("attack")
const defenceStat = document.getElementById("defence")
const specialAttackStat = document.getElementById("specialAttack")
const specialDefenceStat = document.getElementById("specialDefence")
const speedStat = document.getElementById("speed")
searchBtn.addEventListener("click", searchPokemon)
let randomPokemon = allPokemon[Math.floor(Math.random() * allPokemon.length)]
let viewPokemon = randomPokemon.toLocaleLowerCase() // api will not fetch a pokemon with a capital letter

// console.log(randomPokemon)

function getPokemon(){
  let name
  fetch('https://pokeapi.co/api/v2/pokemon/'+viewPokemon)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data)
    name = data.name
    name = capitalize(name)
    nameDiv.innerText = name + ", Dex No: " + data.id
    pictureBox.src = data.sprites.other["official-artwork"].front_default
    hpStat.innerText = "HP: "+data.stats[0].base_stat
    attackStat.innerText = "Attack: "+data.stats[1].base_stat
    defenceStat.innerText = "Defence: "+data.stats[2].base_stat
    specialAttackStat.innerText = "Special Attack: "+data.stats[3].base_stat
    specialDefenceStat.innerText = "Special Defence: "+data.stats[4].base_stat
    speedStat.innerText = "Speed: "+data.stats[5].base_stat
    // descriptionP.innerText = getFlavorText(data.id)

  })
  .catch(function(err){
    console.log("error")
  })
}
getPokemon()

// function getFlavorText(dexNum){
//   fetch(('https://pokeapi.co/api/v2/pokemon-species/'+dexNum))
//   .then(function(response){
//     return response.json()
//   })
//   .then(function(data){
//     console.log(data.flavor_text_entries)
//     return (data.flavor_text_entries) // need a way to guarantee an english dex entry 
//   })
// }

function searchPokemon(){
  let check = capitalize(searchBox.value)
  if (allPokemon.includes(check)){
    console.log("Pokemon Found")
    viewPokemon = check.toLocaleLowerCase()
    getPokemon()
  }
  else{
    console.log("Pokemon Not Found")
    let name = "MissingNo"
    nameDiv.innerText = name
    descriptionP.innerText = "Pokemon Not Found"
    pictureBox.src = './assets/MissingNo.webp'
  }
}

$("#pokemonName").autocomplete({  
  source: function(request, response) {
    let matches = $.map(allPokemon, function(sort) {
      if ( sort.toUpperCase().indexOf(request.term.toUpperCase()) === 0 ) {
        return sort
      }
    })
    response(matches)
  }
})

function capitalize(s) {
  let lower = s.toLowerCase()
  return s.charAt(0).toUpperCase() + lower.slice(1)
}


// https://pokeapi.co/api/v2/pokemon-species/{id or name}/ flavor_text for dex entrys 