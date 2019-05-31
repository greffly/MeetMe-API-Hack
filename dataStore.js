//data store for airport codes

let airportCodeData = {
    "5A8":"Aleknagik",
    "79J":"Andalusia",
    "ABE":"Allentown",
    "ABI":"Abilene",
    "ABQ":"Albuquerque",
    "ABR":"Aberdeen",
    "ABY":"Albany",
    "ACK":"Nantucket",
    "ACT":"Waco",
    "ACV":"Arcata",
    "ACY":"Atlantic City",
    "ADW":"Camp Springs",
    "AEX":"Alexandria",
    "AFW":"Fort Worth",
    "AGC":"Pittsburgh",
    "AGS":"Augusta",
    "AHN":"Athens",
    "AKR":"Akron",
    "ALB":"Albany",
    "ALI":"Alice",
    "ALM":"Alamogordo",
    "ALN":"St Louis",
    "ALO":"Waterloo",
    "ALS":"Alamosa",
    "ALW":"Walla Walla",
    "AMA":"Amarillo",
    "ANB":"Anniston",
    "AND":"Anderson",
    "AOO":"Altoona",
    "APA":"Denver",
    "APF":"Naples",
    "APG":"Aberdeen",
    "APN":"Alpena",
    "ARA":"New Iberia",
    "ART":"Watertown",
    "ASE":"Aspen",
    "AST":"Astoria",
    "ATL":"Atlanta",
    "ATY":"Watertown",
    "AUG":"Augusta",
    "AUS":"Austin",
    "AUW":"Wausau",
    "AVL":"Asheville",
    "AVP":"Scranton",
    "AXN":"Alexandria",
    "AZO":"Kalamazoo",
    "BAB":"Marysville",
    "BAD":"Bossier City",
    "BAF":"Westfield",
    "BAK":"Columbus",
    "BBD":"Brady",
    "BCE":"Bryce Canyon",
    "BDE":"Baudette",
    "BDL":"Hartford",
    "BDR":"Bridgeport",
    "BED":"Bedford",
    "BFD":"Bradford",
    "BFF":"Scottsbluff",
    "BFI":"Seattle",
    "BFL":"Bakersfield",
    "BFM":"Mobile",
    "BGM":"Binghamton",
    "BGR":"Bangor",
    "BHB":"Bar Harbor",
    "BHM":"Birmingham",
    "BIF":"Fort Bliss",
    "BIH":"Bishop",
    "BIL":"Billings",
    "BIS":"Bismarck",
    "BIX":"Biloxi",
    "BJC":"Denver",
    "BJI":"Bemidji",
    "BKE":"Baker City",
    "BKF":"Aurora",
    "BKL":"Cleveland",
    "BKW":"Beckley",
    "BLF":"Bluefield",
    "BLH":"Blythe",
    "BLI":"Bellingham",
    "BLV":"Belleville",
    "BMG":"Bloomington",
    "BMI":"Bloomington",
    "BNA":"Nashville",
    "BNO":"Burns",
    "BOI":"Boise",
    "BOS":"Boston",
    "BPI":"Big Piney",
    "BPK":"Mountain Home",
    "BPT":"Port Arthur",
    "BQK":"Brunswick",
    "BRD":"Brainerd",
    "BRL":"Burlington",
    "BRO":"Brownsville",
    "BTL":"Battle Creek",
    "BTM":"Butte",
    "BTR":"Baton Rouge",
    "BTV":"Burlington",
    "BUF":"Buffalo",
    "BUR":"Burbank",
    "BVI":"Beaver Falls",
    "BVY":"Beverly",
    "BWG":"Bowling Green",
    "BWI":"Baltimore",
    "BYH":"Blytheville",
    "BYI":"Burley",
    "BYS":"Fort Irwin",
    "BZN":"Bozeman",
    "CAE":"Columbia",
    "CAK":"Akron",
    "CAR":"Caribou",
    "CBM":"Columbus",
    "CCY":"Charles City",
    "CDC":"Cedar City",
    "CDR":"Chadron",
    "CDS":"Childress",
    "CEC":"Crescent City",
    "CEF":"Chicopee",
    "CEW":"Crestview",
    "CGF":"Cleveland",
    "CGI":"Cape Girardeau",
    "CHA":"Chattanooga",
    "CHO":"Charlottesville",
    "CHS":"Charleston",
    "CID":"Cedar Rapids",
    "CIU":"Sault Ste Marie",
    "CKB":"Clarksburg",
    "CLE":"Cleveland",
    "CLL":"College Station",
    "CLM":"Port Angeles",
    "CLT":"Charlotte",
    "CMH":"Columbus",
    "CMI":"Champaign",
    "CMX":"Hancock",
    "CNM":"Carlsbad",
    "CNU":"Chanute",
    "COD":"Cody",
    "COE":"Coeur d'Alene",
    "COF":"Cocoa Beach",
    "CON":"Concord",
    "COS":"Colorado Springs",
    "COU":"Columbia",
    "CPR":"Casper",
    "CRE":"North Myrtle Beach",
    "CRG":"Jacksonville",
    "CRP":"Corpus Christi",
    "CRQ":"Carlsbad",
    "CRW":"Charleston",
    "CSG":"Columbus",
    "CSV":"Crossville",
    "CTB":"Cut Bank",
    "CUB":"Columbia",
    "CVG":"Cincinnati",
    "CVO":"Corvallis",
    "CVS":"Clovis",
    "CWA":"Mosinee",
    "CXO":"Houston",
    "CYS":"Cheyenne",
    "DAA":"Fort Belvoir",
    "DAB":"Daytona Beach",
    "DAG":"Daggett",
    "DAL":"Dallas",
    "DAN":"Danville",
    "DAY":"Dayton",
    "DBQ":"Dubuque",
    "DCA":"Washington",
    "DDC":"Dodge City",
    "DEC":"Decatur",
    "DEN":"Denver",
    "DET":"Detroit",
    "DFW":"Dallas-Fort Worth",
    "DHN":"Dothan",
    "DHT":"Dalhart",
    "DIK":"Dickinson",
    "DLF":"Del Rio",
    "DLH":"Duluth",
    "DLS":"The Dalles",
    "DMA":"Tucson",
    "DMN":"Deming",
    "DNL":"Augusta",
    "DOV":"Dover",
    "DPA":"Chicago",
    "NV65":"Mercury",
    "DRI":"De Ridder",
    "DRT":"Del Rio",
    "DSM":"Des Moines",
    "DTW":"Detroit",
    "DUG":"Douglas Bisbee",
    "DUJ":"Dubois",
    "DYS":"Abilene",
    "EAT":"Wenatchee",
    "EAU":"Eau Claire",
    "ECG":"Elizabeth City",
    "ECP":"Panama City Beach",
    "EDW":"Edwards",
    "EED":"Needles",
    "EEN":"Keene",
    "EET":"Alabaster",
    "EFD":"Houston",
    "EGE":"Eagle",
    "EGI":"Crestview",
    "EKA":"Eureka",
    "EKN":"Elkins",
    "EKO":"Elko",
    "ELD":"El Dorado",
    "ELM":"Elmira",
    "ELO":"Ely",
    "ELP":"El Paso",
    "ELY":"Ely",
    "END":"Enid",
    "ENV":"Wendover",
    "ENW":"Kenosha",
    "ERI":"Erie",
    "ESF":"Alexandria",
    "EUG":"Eugene",
    "EVV":"Evansville",
    "EVW":"Evanston",
    "EWB":"New Bedford",
    "EWN":"New Bern",
    "EWR":"Newark",
    "EYW":"Key West",
    "FAF":"Fort Eustis",
    "FAR":"Fargo",
    "FAT":"Fresno",
    "FAY":"Fayetteville",
    "FBG":"Fort Bragg",
    "FCS":"Fort Carson",
    "FDY":"Findlay",
    "FFO":"Dayton",
    "FHU":"Fort Huachuca Sierra Vista",
    "FKL":"Franklin",
    "FLG":"Flagstaff",
    "FLL":"Fort Lauderdale",
    "FLO":"Florence",
    "FME":"Fort Meade",
    "FMN":"Farmington",
    "FMY":"Fort Myers",
    "FNT":"Flint",
    "FOD":"Fort Dodge",
    "FOE":"Topeka",
    "FPR":"Fort Pierce",
    "FRG":"Farmingdale",
    "FRI":"Fort Riley",
    "FSD":"Sioux Falls",
    "FSI":"Fort Sill",
    "FSM":"Fort Smith",
    "FST":"Fort Stockton",
    "FTK":"Fort Knox",
    "FTW":"Fort Worth",
    "FTY":"Atlanta",
    "FWA":"Fort Wayne",
    "FXE":"Fort Lauderdale",
    "FYV":"Fayetteville",
    "GCC":"Gillette",
    "GCK":"Garden City",
    "GCN":"Grand Canyon",
    "GDV":"Glendive",
    "GEG":"Spokane",
    "GFK":"Grand Forks",
    "GFL":"Glens Falls",
    "GGG":"Longview",
    "GGW":"Glasgow",
    "GJT":"Grand Junction",
    "GLD":"Goodland",
    "GLH":"Greenville",
    "GLS":"Galveston",
    "GMU":"Greenville",
    "GNV":"Gainesville",
    "GON":"Groton",
    "GPI":"Kalispell",
    "GPT":"Gulfport",
    "GRB":"Green Bay",
    "GRF":"Fort Lewis",
    "GRI":"Grand Island",
    "GRK":"Fort Hood",
    "GRR":"Grand Rapids",
    "GSB":"Goldsboro",
    "GSO":"Greensboro",
    "GSP":"Greenville",
    "GTB":"Fort Drum",
    "GTF":"Great Falls",
    "GTR":"Starkville",
    "GUP":"Gallup",
    "GUS":"Peru",
    "GUY":"Guymon",
    "GWO":"Greenwood",
    "GYY":"Gary",
    "HBG":"Hattiesburg",
    "HBR":"Hobart",
    "HFD":"Hartford",
    "HGR":"Hagerstown",
    "HHR":"Hawthorne",
    "HIB":"Hibbing",
    "HIF":"Ogden",
    "HIO":"Portland",
    "HKY":"Hickory",
    "HLG":"Wheeling",
    "HLN":"Helena",
    "HLR":"Fort Hood",
    "HMN":"Alamogordo",
    "HOB":"Hobbs",
    "HON":"Huron",
    "HOP":"Fort Campbell",
    "HOT":"Hot Springs",
    "HOU":"Houston",
    "HPN":"White Plains",
    "HQM":"Hoquiam",
    "HRL":"Harlingen",
    "HRO":"Harrison",
    "HRT":"Mary Esther",
    "HST":"Homestead",
    "HSV":"Huntsville",
    "HTS":"Huntington",
    "HUA":"Redstone Arsnl Huntsville",
    "HUF":"Terre Haute",
    "HUL":"Houlton",
    "HUT":"Hutchinson",
    "HVN":"New Haven",
    "HVR":"Havre",
    "HYA":"Hyannis",
    "HYI":"San Marcos",
    "HYR":"Hayward",
    "HYS":"Hays",
    "IAB":"Wichita",
    "IAD":"Washington",
    "IAG":"Niagara Falls",
    "IAH":"Houston",
    "ICT":"Wichita",
    "IDA":"Idaho Falls",
    "IKK":"Kankakee",
    "ILG":"Wilmington",
    "ILM":"Wilmington",
    "ILN":"Wilmington",
    "IND":"Indianapolis",
    "INK":"Wink",
    "INL":"International Falls",
    "INT":"Winston Salem",
    "INW":"Winslow",
    "IPL":"Imperial",
    "IPT":"Williamsport",
    "IRK":"Kirksville",
    "ISM":"Orlando",
    "ISN":"Williston",
    "ISO":"Kinston",
    "ISP":"Islip",
    "ITH":"Ithaca",
    "IWA":"Phoenix",
    "JAC":"Jackson",
    "JAN":"Jackson",
    "JAX":"Jacksonville",
    "JBR":"Jonesboro",
    "JCT":"Junction",
    "JFK":"New York",
    "JHW":"Jamestown",
    "JKL":"Jackson",
    "JLN":"Joplin",
    "JMS":"Jamestown",
    "JST":"Johnstown",
    "JXN":"Jackson",
    "KLS":"Kelso",
    "LAF":"Lafayette",
    "LAL":"Lakeland",
    "LAN":"Lansing",
    "LAR":"Laramie",
    "LAS":"Las Vegas",
    "LAW":"Lawton",
    "LAX":"Los Angeles",
    "LBB":"Lubbock",
    "LBE":"Latrobe",
    "LBF":"North Platte",
    "LBL":"Liberal",
    "LBT":"Lumberton",
    "LBX":"Angleton",
    "LCH":"Lake Charles",
    "LCK":"Columbus",
    "LEB":"Lebanon",
    "LEE":"Leesburg",
    "LEX":"Lexington",
    "LFI":"Hampton",
    "LFK":"Lufkin",
    "LFT":"Lafayette",
    "LGA":"New York",
    "LGB":"Long Beach",
    "LGU":"Logan",
    "LIT":"Little Rock",
    "LLQ":"Monticello",
    "LMT":"Klamath Falls",
    "LND":"Lander",
    "LNK":"Lincoln",
    "LNS":"Lancaster",
    "LOL":"Lovelock",
    "LOU":"Louisville",
    "LOZ":"London",
    "LRD":"Laredo",
    "LRF":"Jacksonville",
    "LRU":"Las Cruces",
    "LSE":"La Crosse",
    "LSF":"Fort Benning",
    "LSV":"Las Vegas",
    "LTS":"Altus",
    "LUF":"Glendale",
    "LUK":"Cincinnati",
    "LVM":"Livingston",
    "LVS":"Las Vegas",
    "LWB":"Lewisburg",
    "LWM":"Lawrence",
    "LWS":"Lewiston",
    "LWT":"Lewistown",
    "LYH":"Lynchburg",
    "MAF":"Midland",
    "MBG":"Mobridge",
    "MBS":"Saginaw",
    "MCB":"Mc Comb",
    "MCC":"Sacramento",
    "MCE":"Merced",
    "MCF":"Tampa",
    "MCI":"Kansas City",
    "MCK":"Mc Cook",
    "MCN":"Macon",
    "MCO":"Orlando",
    "MCW":"Mason City",
    "MDH":"Carbondale",
    "MDT":"Harrisburg",
    "MDW":"Chicago",
    "MEI":"Meridian",
    "MEM":"Memphis",
    "MER":"Merced",
    "MFD":"Mansfield",
    "MFE":"Mc Allen",
    "MFR":"Medford",
    "MGE":"Marietta",
    "MGM":"Montgomery",
    "MGW":"Morgantown",
    "MHK":"Manhattan",
    "MHR":"Sacramento",
    "MHT":"Manchester",
    "MIA":"Miami",
    "MIB":"Minot",
    "MIE":"Muncie",
    "MIV":"Millville",
    "MKC":"Kansas City",
    "MKE":"Milwaukee",
    "MKL":"Jackson",
    "MLB":"Melbourne",
    "MLC":"Mc Alester",
    "MLI":"Moline",
    "MLS":"Miles City",
    "MLU":"Monroe",
    "MMT":"Eastover",
    "MMU":"Morristown",
    "MMV":"Mc Minnville",
    "MOB":"Mobile",
    "MOD":"Modesto",
    "MOT":"Minot",
    "MPV":"Montpelier",
    "MQY":"Smyrna",
    "MRB":"Martinsburg",
    "MRY":"Monterey",
    "MSL":"Muscle Shoals",
    "MSN":"Madison",
    "MSO":"Missoula",
    "MSP":"Minneapolis",
    "MSS":"Massena",
    "MSY":"New Orleans",
    "MTC":"Mount Clemens",
    "MTH":"Marathon",
    "MTJ":"Montrose",
    "MTN":"Baltimore",
    "MUI":"Fort Indiantown Gap",
    "MUO":"Mountain Home",
    "MWH":"Moses Lake",
    "MXF":"Montgomery",
    "MYL":"McCall",
    "MYR":"Myrtle Beach",
    "MYV":"Marysville",
    "NBC":"Beaufort",
    "NBG":"New Orleans",
    "NCA":"Jacksonville",
    "NDZ":"Milton",
    "NEL":"Lakehurst",
    "NEW":"New Orleans",
    "NFG":"Oceanside",
    "NFL":"Fallon",
    "NFW":"Fort Worth",
    "NGP":"Corpus Christi",
    "NGU":"Norfolk",
    "NHK":"Patuxent River",
    "BXM":"Brunswick",
    "NID":"China Lake",
    "NIP":"Jacksonville",
    "NJK":"El Centro",
    "NKT":"Cherry Point",
    "NKX":"San Diego",
    "NLC":"Lemoore",
    "NMM":"Meridian",
    "NPA":"Pensacola",
    "NQA":"Millington",
    "NQI":"Kingsville",
    "NQX":"Key West",
    "NRB":"Mayport",
    "NSE":"Milton",
    "NTD":"Point Mugu",
    "NTU":"Virginia Beach",
    "NUQ":"Mountain View",
    "NUW":"Oak Harbor",
    "NXP":"Twentynine Palms",
    "NYG":"Quantico",
    "NYL":"Yuma",
    "NZY":"San Diego",
    "OAJ":"Jacksonville",
    "OAK":"Oakland",
    "OFF":"Omaha",
    "OFK":"Norfolk",
    "OGB":"Orangeburg",
    "OGD":"Ogden",
    "OKC":"Oklahoma City",
    "OLF":"Wolf Point",
    "OLM":"Olympia",
    "OLS":"Nogales",
    "OLU":"Columbus",
    "OMA":"Omaha",
    "ONP":"Newport",
    "ONT":"Ontario",
    "OPF":"Miami",
    "OQU":"North Kingstown",
    "ORD":"Chicago",
    "ORF":"Norfolk",
    "ORH":"Worcester",
    "OSH":"Oshkosh",
    "OSU":"Columbus",
    "OTH":"North Bend",
    "OTM":"Ottumwa",
    "OWB":"Owensboro",
    "OWD":"Norwood",
    "OXR":"Oxnard",
    "OZR":"Ozark",
    "PAE":"Everett",
    "PAH":"Paducah",
    "PAM":"Panama City",
    "PBF":"Pine Bluff",
    "PBG":"Plattsburgh",
    "PBI":"West Palm Beach",
    "PDK":"Atlanta",
    "PDT":"Pendleton",
    "PDX":"Portland",
    "PGA":"Page",
    "PGV":"Greenville",
    "PHF":"Newport News",
    "PHL":"Philadelphia",
    "PHX":"Phoenix",
    "PIA":"Peoria",
    "PIB":"Hattiesburg",
    "PIE":"St Petersburg",
    "PIH":"Pocatello",
    "PIR":"Pierre",
    "PIT":"Pittsburgh",
    "PKB":"Parkersburg",
    "PLN":"Pellston",
    "PMD":"Palmdale",
    "PNA":"Pinedale",
    "PNC":"Ponca City",
    "PNE":"Philadelphia",
    "PNS":"Pensacola",
    "POB":"Fayetteville",
    "POE":"Fort Polk",
    "POU":"Poughkeepsie",
    "PQI":"Presque Isle",
    "PRB":"Paso Robles",
    "PRC":"Prescott",
    "PRX":"Paris",
    "PSC":"Pasco",
    "PSM":"Portsmouth",
    "PSP":"Palm Springs",
    "PTK":"Pontiac",
    "PUW":"Pullman/Moscow",
    "PVD":"Providence",
    "PVU":"Provo",
    "PWK":"Chicago",
    "PWM":"Portland",
    "PWT":"Bremerton",
    "RAL":"Riverside",
    "RAP":"Rapid City",
    "RBL":"Red Bluff",
    "RCA":"Rapid City",
    "RDD":"Redding",
    "RDG":"Reading",
    "RDM":"Redmond",
    "RDR":"Grand Forks",
    "RDU":"Raleigh",
    "RFD":"Chicago",
    "RHI":"Rhinelander",
    "RIC":"Richmond",
    "RIL":"Rifle",
    "RIV":"Riverside",
    "RIW":"Riverton",
    "RKS":"Rock Springs",
    "RME":"Rome",
    "RMG":"Rome",
    "RND":"Universal City",
    "RNH":"New Richmond",
    "RNO":"Reno",
    "ROA":"Roanoke",
    "ROC":"Rochester",
    "ROW":"Roswell",
    "RSL":"Russell",
    "RST":"Rochester",
    "RSW":"Fort Myers",
    "RUT":"Rutland",
    "RVS":"Tulsa",
    "RWF":"Redwood Falls",
    "RWI":"Rocky Mount",
    "RWL":"Rawlins",
    "RYY":"Atlanta",
    "SAC":"Sacramento",
    "SAF":"Santa Fe",
    "SAN":"San Diego",
    "SAT":"San Antonio",
    "SAV":"Savannah",
    "SAW":"Marquette",
    "SBA":"Santa Barbara",
    "SBD":"San Bernardino",
    "SBN":"South Bend",
    "SBP":"San Luis Obispo",
    "SBY":"Salisbury",
    "SCH":"Schenectady",
    "SCK":"Stockton",
    "SDF":"Louisville",
    "SDM":"San Diego",
    "SDY":"Sidney",
    "SEA":"Seattle",
    "SFB":"Orlando",
    "SFF":"Spokane",
    "SFO":"San Francisco",
    "SGF":"Springfield",
    "SGH":"Springfield",
    "SGJ":"St Augustine",
    "SGR":"Houston",
    "SGU":"St George",
    "SHR":"Sheridan",
    "SHV":"Shreveport",
    "SJC":"San Jose",
    "SJT":"San Angelo",
    "SKA":"Spokane",
    "SKF":"San Antonio",
    "SLC":"Salt Lake City",
    "SLE":"Salem",
    "SLI":"Los Alamitos",
    "SLK":"Saranac Lake",
    "SLN":"Salina",
    "SME":"Somerset",
    "SMF":"Sacramento",
    "SMN":"Salmon",
    "SMX":"Santa Maria",
    "SNA":"Santa Ana",
    "SNS":"Salinas",
    "SNY":"Sidney",
    "SOA":"Sonora",
    "SPI":"Springfield",
    "SPS":"Wichita Falls",
    "SRQ":"Sarasota",
    "SRR":"Ruidoso",
    "SSC":"Sumter",
    "SSF":"San Antonio",
    "SSI":"Brunswick",
    "STC":"St Cloud",
    "STJ":"St Joseph",
    "STL":"St Louis",
    "STP":"St Paul",
    "STS":"Santa Rosa",
    "SUN":"Hailey",
    "SUS":"St Louis",
    "SUU":"Fairfield",
    "SUX":"Sioux City",
    "SUZ":"Benton",
    "SVN":"Savannah",
    "SWF":"Newburgh",
    "SWO":"Stillwater",
    "SYR":"Syracuse",
    "SZL":"Knob Noster",
    "TBN":"Fort Leonard Wood",
    "TCC":"Tucumcari",
    "TCL":"Tuscaloosa",
    "TCM":"Tacoma",
    "TCS":"Truth Or Consequences",
    "TEB":"Teterboro",
    "TIK":"Oklahoma City",
    "TIW":"Tacoma",
    "TIX":"Titusville",
    "TLH":"Tallahassee",
    "TMB":"Miami",
    "TOI":"Troy",
    "TOL":"Toledo",
    "TOP":"Topeka",
    "TPA":"Tampa",
    "TPH":"Tonopah",
    "TPL":"Temple",
    "TRI":"Kingsport",
    "TRK":"Truckee",
    "TRM":"Palm Springs",
    "TTD":"Portland",
    "TTN":"Trenton",
    "TTS":"Titusville",
    "TUL":"Tulsa",
    "TUP":"Tupelo",
    "TUS":"Tucson",
    "TVC":"Traverse City",
    "TVL":"South Lake Tahoe",
    "TWF":"Twin Falls",
    "TXK":"Texarkana",
    "TYR":"Tyler",
    "TYS":"Knoxville",
    "UAO":"Aurora",
    "UIN":"Quincy",
    "UKI":"Ukiah",
    "UNV":"State College",
    "UOX":"Oxford",
    "UTS":"Huntsville",
    "VAD":"Valdosta",
    "VBG":"Lompoc",
    "VCT":"Victoria",
    "VEL":"Vernal",
    "VGT":"Las Vegas",
    "VLD":"Valdosta",
    "VNY":"Van Nuys",
    "VOK":"Camp Douglas",
    "VPS":"Valparaiso",
    "VPZ":"Valparaiso",
    "VRB":"Vero Beach",
    "VTN":"Valentine",
    "W63":"Clarksville",
    "WJF":"Lancaster",
    "WMC":"Winnemucca",
    "WRB":"Warner Robins",
    "WRI":"Wrightstown",
    "WRL":"Worland",
    "WWD":"Wildwood",
    "WWR":"Woodward",
    "WYS":"West Yellowstone",
    "XMR":"Cocoa Beach",
    "XNA":"Fayetteville",
    "YIP":"Detroit",
    "YKM":"Yakima",
    "YKN":"Yankton",
    "YNG":"Youngstown/Warren",
    "ZZV":"Zanesville",
    "PAQ":"Palmer",
    "BTI":"Barter Island Lrrs",
    "BET":"Bethel",
    "BIG":"Delta Junction Ft Greely",
    "BVK":"Buckland",
    "BRW":"Wiley Post",
    "BTT":"Bettles",
    "BCV":"Birchwood",
    "CDB":"Cold Bay",
    "Z84":"Clear",
    "SCM":"Scammon Bay",
    "CDV":"Cordova",
    "CZF":"Cape Romanzof",
    "DEE":"Deering",
    "ADK":"Adak Island",
    "DLG":"Dillingham",
    "MDM":"Marshall",
    "ADQ":"Kodiak",
    "DUT":"Unalaska",
    "EDF":"Anchorage",
    "EHM":"Cape Newenham",
    "EIL":"Fairbanks",
    "ENM":"Emmonak",
    "ENA":"Kenai",
    "FAI":"Fairbanks",
    "FBK":"Fairbanks",
    "AFE":"Kake",
    "AFM":"Ambler",
    "GAL":"Galena",
    "GKN":"Gulkana",
    "GAM":"Gambell",
    "GST":"Gustavus",
    "HCA":"Holy Cross",
    "HLA":"Huslia",
    "HNS":"Haines",
    "HOM":"Homer",
    "HPB":"Hooper Bay",
    "EII":"Egegik",
    "IAN":"Kiana",
    "ILI":"Iliamna",
    "UTO":"Utopia Creek",
    "JNU":"Juneau",
    "AKN":"King Salmon",
    "AKP":"Anaktuvuk Pass",
    "KTN":"Ketchikan",
    "AKW":"Klawock",
    "LUR":"Cape Lisburne",
    "MCG":"McGrath",
    "MRI":"Anchorage",
    "MYU":"Mekoryuk",
    "ANC":"Anchorage",
    "ANI":"Aniak",
    "ENN":"Nenana",
    "ANN":"Annette",
    "ANV":"Anvik",
    "OME":"Nome",
    "ORT":"Northway",
    "OTZ":"Kotzebue",
    "PBV":"St George",
    "KPC":"Port Clarence",
    "PSG":"Petersburg",
    "PTH":"Port Heiden",
    "PTU":"Platinum",
    "AQT":"Nuiqsut",
    "ARC":"Arctic Village",
    "RBY":"Ruby",
    "SVA":"Savoonga",
    "SCC":"Deadhorse",
    "SDP":"Sand Point",
    "SHH":"Shishmaref",
    "SIT":"Sitka",
    "WLK":"Selawik",
    "KSM":"St Mary's",
    "SNP":"St Paul Island",
    "SVW":"Sparrevohn",
    "SXQ":"Soldotna",
    "SYA":"Shemya",
    "TOG":"Togiak Village",
    "TKA":"Talkeetna",
    "TLJ":"Takotna",
    "ATK":"Atqasuk",
    "VDZ":"Valdez",
    "KVL":"Kivalina",
    "SWD":"Seward",
    "WRG":"Wrangell",
    "AWI":"Wainwright",
    "WTK":"Noatak",
    "IYS":"Wasilla",
    "YAK":"Yakutat",
    "FYU":"Fort Yukon",
    "BKH":"Kekaha",
    "HDH":"Mokuleia",
    "HHI":"Wahiawa",
    "HNM":"Hana",
    "JHM":"Lahaina",
    "JRF":"Kapolei",
    "KOA":"Kailua/Kona",
    "LIH":"Lihue",
    "MKK":"Kaunakakai",
    "MUE":"Kamuela",
    "NGF":"Kaneohe",
    "HNL":"Honolulu",
    "LNY":"Lanai City",
    "OGG":"Kahului",
    "BSF":"Camp Pohakuloa",
    "ITO":"Hilo",
    "UPP":"Hawi",
    "PIZ":"Point Lay",
    };