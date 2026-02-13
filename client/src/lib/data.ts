
export const INDUSTRIES = {
  'Food + Beverage': '#BF8F60',        // warm caramel
  'Arts + Entertainment': '#F2DFB6',   // soft parchment
  'Health + Beauty': '#7FA56B',        // sage green
  'Professional Services': '#3E392F',  // deep olive-charcoal
  'Transportation': '#141414',         // near-black
  'Construction': '#8C6A4F',            // walnut brown (NEW)
  'Retail': '#5A5F55',                 // warm off-white
  'Investment Technology': '#0E4B3B',  // deep evergreen (trust/wealth/tech)
  'Education': '#FCBD25',              // golden warmth (growth/learning)
  'Business Consulting': '#3E392F',    // grounded authority (matches prof services)
  'Security Services': '#141414',      // strong + protective (matches transportation)
  'Content + Photos Creator': '#F2DFB6', // clean creative neutral (matches arts)
} as const;


export const AFFINITIES = {
  'Women Owned': '#BF8F60',
  'Black Owned': '#F2DFB6',
  'LGBTQIA+ Owned': '#3E392F',
  'Veteran Owned': '#7FA56B',
  'View In Person': '#F5A623',
} as const;

export const LOAN_YEARS = [
   2021, 2022, 2023, 2024, 2025, 2026
] as const;

export type LoanYear = typeof LOAN_YEARS[number];

export type Industry = keyof typeof INDUSTRIES;
export type Affinity = keyof typeof AFFINITIES;

export interface Business {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  website: string;
  industry: Industry;
  affinities: Affinity[];
  loanYear: LoanYear;
}

export const BUSINESSES: Business[] = [
{ 
  id: '3d-ventures',
  logo: "logos/3D_Ventures_LLC_logo.png", 
  name: "3D Ventures LLC", 
  tagline: "Innovating capital. Engineering opportunity.", 
  website: "https://www.3dventures.com/",
  industry: "Investment Technology",
  affinities: [],
  loanYear: 2025
},

{ 
  id: '88-seconds',
  logo: "logos/88__Seconds_LLC_logo.png", 
  name: "88 Seconds LLC", 
  tagline: "Delivering perfection in every heartbeat of time.", 
  website: "https://metierbrewing.com/",
  industry: "Food + Beverage",
  affinities: ["Black Owned", "View In Person"],
  loanYear: 2024
},

{ 
  id: 'a4-apple-learning-center',
  logo: "logos/A4_AppleLearningCenter.png", 
  name: "A 4 Apple Learning Center", 
  tagline: "Growing bright minds from the very beginning.", 
  website: "https://www.a4applelearningcenter.org/",
  industry: "Education",
  affinities: [],
  loanYear: 2025
},

{ 
  id: 'dj-cook',
  logo: "logos/A_DJ_AND_A_COOK_LLC_logo.webp", 
  name: "A DJ AND A COOK LLC", 
  tagline: "Mixing beats and flavors that move your soul.", 
  website: "https://www.feedthepeopleseattle.com",
  industry: "Food + Beverage",
  affinities: ["Black Owned", "View In Person"],
  loanYear: 2023
},

{ 
  id: 'ace-academy',
  logo: "logos/ACEAcademy_logo.webp", 
  name: "ACE Academy", 
  tagline: "Building brilliance, one student at a time.", 
  website: "https://www.aceacademywa.org/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'achava',
  logo: "logos/Achava_Cleaning_Services_LLC_logo.webp", 
  name: "Achava Cleaning Services LLC", 
  tagline: "Where spotless spaces meet divine service.", 
  website: "https://achavacleaningco.com/",
  industry: "Professional Services",
  affinities: ["Women Owned"],
  loanYear: 2025
},

{ 
  id: 'alpha-sharp',
  logo: "logos/Alpha_Sharp_Design,_LLC_logo.webp", 
  name: "Alpha Sharp Design, LLC", 
  tagline: "Designs that cut through the noise.", 
  website: "https://www.asdevpartners.com/about",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'althas',
  logo: "logos/Althas_Louisiana_Cajun_seasoning&spices_LLC_logo.png", 
  name: "Althas Louisiana Cajun seasoning & spices", 
  tagline: "A taste of the bayou in every bite.", 
  website: "https://althascajunspices.com",
  industry: "Food + Beverage",
  affinities: ["Women Owned", "View In Person"],
  loanYear: 2024
},

{ 
  id: 'axsm',
  logo: "logos/AxSM_Art_LLC_logo.png", 
  name: "AxSM Art LLC", 
  tagline: "Where expression meets motion and color.", 
  website: "https://www.madespaceseattle.com/",
  industry: "Arts + Entertainment",
  affinities: ["Black Owned", "LGBTQIA+ Owned"],
  loanYear: 2025
},

{ 
  id: 'bm-janitorial',
  logo: "logos/B&M_Janitorial_LLC_logo.png", 
  name: "B&M Janitorial LLC", 
  tagline: "Clean today, confident tomorrow.", 
  website: "https://bmcleaningservices.com/home",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'baxters',
  logo: "logos/Baxters_Bottles_LLC_logo.png", 
  name: "Baxters Bottles LLC", 
  tagline: "Sustainable bottles built for better living.", 
  website: "https://www.lucysbottleView.com",
  industry: "Retail",
  affinities: ["Women Owned", "View In Person"],
  loanYear: 2025
},

{ 
  id: 'bet-boon',
  logo: "logos/Bet_Boon_SPC_logo.svg", 
  name: "Bet Boon SPC", 
  tagline: "Where coffee & culture meet", 
  website: "https://www.boonboonacoffee.com/",
  industry: "Food + Beverage",
  affinities: ["Black Owned", "View In Person"],
  loanYear: 2024
},

{ 
  id: 'bite-me',
  logo: "logos/Bite_Me_Inc_logo1.png", 
  name: "Bite Me Inc.", 
  tagline: "Bold flavor with a side of attitude.", 
  website: "https://bitemeinc.cc/",
  industry: "Food + Beverage",
  affinities: ["Women Owned"],
  loanYear: 2024
},

{ 
  id: 'black-brilliance',
  logo: "logos/Black_Brilliance_Research,_LLC_logo.png", 
  name: "Black Brilliance Research, LLC", 
  tagline: "Data with depth, insight with purpose.", 
  website: "https://blackbrillianceresearch.com",
  industry: "Professional Services",
  affinities: ["Black Owned", "LGBTQIA+ Owned"],
  loanYear: 2025
},

{ 
  id: 'blastography',
  logo: "logos/BLASTography_LLC_logo.png", 
  name: "BLASTography LLC", 
  tagline: "Capturing energy one frame at a time.", 
  website: "https://blastmusicfest.com",
  industry: "Arts + Entertainment",
  affinities: ["Black Owned"],
  loanYear: 2023
},

{ 
  id: 'blessential',
  logo: "logos/Blessential_Trucking_LLC_logo.png", 
  name: "Blessential Trucking LLC", 
  tagline: "Hauling essentials, delivering blessings.", 
  website: "",
  industry: "Transportation",
  affinities: ["Black Owned", "Veteran Owned"],
  loanYear: 2024
},

{ 
  id: 'blkbry',
  logo: "logos/BLKBRY_logo.png", 
  name: "BLKBRY, LLC", 
  tagline: "Luxury curated for the modern creative.", 
  website: "https://www.blkbry.com",
  industry: "Health + Beauty",
  affinities: ["Black Owned", "Women Owned"],
  loanYear: 2026
},

{ 
  id: 'campfire',
  logo: "logos/Campfire_Coffee,_LLC_logo.webp", 
  name: "Campfire Coffee, LLC", 
  tagline: "Gather, sip, and spark something new.", 
  website: "https://www.welovecampfire.com",
  industry: "Food + Beverage",
  affinities: ["Black Owned", "Veteran Owned", "View In Person"],
  loanYear: 2025
},

{ 
  id: 'cheddarboy',
  logo: "logos/Cheddarboy_Popcorn_LLP_logo.webp", 
  name: "Cheddarboy Popcorn LLP", 
  tagline: "Crunchy, cheesy, dangerously addictive.", 
  website: "https://www.realcheddarboypopcorn.com/",
  industry: "Food + Beverage",
  affinities: ["Black Owned", "View In Person"],
  loanYear: 2026
},

{ 
  id: 'cipro',
  logo: "logos/Cipro-Group_Logo.png", 
  name: "Cipro LLC", 
  tagline: "Engineering efficiency for modern business.", 
  website: "https://ciprocontractors.com/",
  industry: "Construction",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'cjk',
  logo: "logos/CJK-Community-Homes-LOGO.png", 
  name: "CJK Homes and Design, LLC", 
  tagline: "Building dreams with precision and passion.", 
  website: "https://cjkcommunityhomes.org/",
  industry: "Construction",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'converge',
  logo: "logos/Converge_Media LLC_logo1.png", 
  name: "Converge Media LLC", 
  tagline: "Where culture, creativity, and conversation meet.", 
  website: "https://www.whereweconverge.com/",
  industry: "Arts + Entertainment",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'dopl',
  logo: "logos/Dopl_Technologies_Inc_logo.png", 
  name: "Dopl Technologies Inc.", 
  tagline: "Simplifying tech for real-world impact.", 
  website: "https://www.dopltechnologies.com/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2023
},

{ 
  id: 'dynamic-waters',
  logo: "logos/Dynamic_Waters_LLC_logo.webp", 
  name: "Dynamic Waters LLC", 
  tagline: "Flowing with innovation and integrity.", 
  website: "https://www.dynamicwaters.net/about",
  industry: "Professional Services",
  affinities: ["Veteran Owned"],
  loanYear: 2025
},

{ 
  id: 'emerald-water',
  logo: "logos/Emerald_Water_Anglers_LLC_logo.png", 
  name: "Emerald Water Anglers LLC", 
  tagline: "Guiding you to greener streams and clearer minds.", 
  website: "https://emeraldwateranglers.com/",
  industry: "Retail",
  affinities: ["View In Person"],
  loanYear: 2025
},

{ 
  id: 'face-consulting',
  logo: "logos/FACE-Consulting-Collaborative_logo1.png", 
  name: "FACE Consulting, LLC", 
  tagline: "Turning vision into actionable strategy.", 
  website: "https://faceconsultingcollaborative.com/",
  industry: "Professional Services",
  affinities: ["Black Owned", "Women Owned"],
  loanYear: 2025
},

{ 
  id: 'faith-finance',
  logo: "logos/Faith_Finance_Center_LLC_logo.jpg", 
  name: "Faith Finance Center LLC", 
  tagline: "Where faith meets financial freedom.", 
  website: "https://faithfinancecenter.mykajabi.com/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'freight-link',
  logo: "logos/Freight_Link_LLC_logo.jpeg", 
  name: "FREIGHT LINK LLC", 
  tagline: "Connecting cargo to destinations, seamlessly.", 
  website: "https://www.linkedin.com/company/freight-link-llc/",
  industry: "Transportation",
  affinities: ["Black Owned"],
  loanYear: 2024
},

{ 
  id: 'gravy',
  logo: "logos/Gravy_LLC_logo.webp", 
  name: "Gravy LLC", 
  tagline: "Making everything better, naturally.", 
  website: "https://www.gravyvashon.com/",
  industry: "Food + Beverage",
  affinities: ["Black Owned", "View In Person"],
  loanYear: 2024
},

{ 
  id: 'htm',
  logo: "logos/HTM_Contracting_LLC_logo.png", 
  name: "HTM Contracting LLC", 
  tagline: "Building trust from the ground up.", 
  website: "https://higherthanme.org/",
  industry: "Construction",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'hudson',
  logo: "logos/Hudson_Trucking_and_Transportation_LLC_logo.webp", 
  name: "Hudson Trucking", 
  tagline: "Driving reliability across every route.", 
  website: "https://www.hudsontransportation.us/",
  industry: "Transportation",
  affinities: ["Black Owned"],
  loanYear: 2024
},

{ 
  id: 'hulk',
  logo: "logos/Hulk_Construction_LLC_logo.png", 
  name: "Hulk Construction LLC", 
  tagline: "Strength, precision, and results that last.", 
  website: "https://www.hulk253.com/",
  industry: "Construction",
  affinities: ["Black Owned"],
  loanYear: 2024
},

{ 
  id: 'inclusive-data',
  logo: "logos/InclusivedataLLC-logo.png", 
  name: "Inclusive Data LLC", 
  tagline: "Data that represents everyone. Insight that moves everyone.", 
  website: "https://inclusivedatasolutions.com/",
  industry: "Investment Technology",
  affinities: [],
  loanYear: 2021
},

{ 
  id: 'inspirational',
  logo: "logos/Inspirational_Workshops_Brave_logo.png", 
  name: "Inspirational WorkViews", 
  tagline: "Inspiring minds to lead, live, and thrive.", 
  website: "https://www.braveyoungpeople.org/",
  industry: "Professional Services",
  affinities: ["Black Owned", "Women Owned"],
  loanYear: 2024
},

{ 
  id: 'intentions-juice',
  logo: "", 
  name: "Intentions Juice & Smoothie Bar LLC", 
  tagline: "Fuel your body. Feed your purpose.", 
  website: "https://www.intentionsjuicebar.com/",
  industry: "Food + Beverage",
  affinities: [],
  loanYear: 2026
},

{ 
  id: 'infinite-llc',
  logo: "logos/InfiniteLLC_logo.jpg", 
  name: "Infinite LLC", 
  tagline: "Expanding vision. Scaling success.", 
  website: "https://www.instagram.com/infinite.llc/",
  industry: "Business Consulting",
  affinities: [],
  loanYear: 2025
},

{ 
  id: 'jacob-willard-home',
  logo: "logos/JacobWillard_Home_logo.png", 
  name: "Jacob Willard Home", 
  tagline: "Where craftsmanship meets timeless comfort.", 
  website: "https://www.instagram.com/jacobwillardhome/?hl=en",
  industry: "Retail",
  affinities: [],
  loanYear: 2021
},

{ 
  id: 'jj-freemann',
  logo: "logos/J_J_Freemann_Construction_and_Painting,_LLC_logo.webp", 
  name: "J J Freemann Construction", 
  tagline: "Craftsmanship with every brush and brick.", 
  website: "https://www.jjfreemann.com/",
  industry: "Construction",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'jacobs-agro',
  logo: "logos/Jacobs_agro_LLC_logo.jpeg", 
  name: "Jacobs Agro LLC", 
  tagline: "Rooted in sustainability, growing for tomorrow.", 
  website: "https://jacobsagro.com/",
  industry: "Retail",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'jumpin-jambalaya',
  logo: "logos/JUMPIN_JAMBALAYA_LLC_logo.jpg", 
  name: "JUMPIN JAMBALAYA LLC", 
  tagline: "Flavor that dances right on your plate.", 
  website: "https://jumpinjambalaya.com/",
  industry: "Food + Beverage",
  affinities: ["Black Owned", "View In Person"],
  loanYear: 2025
},

{ 
  id: 'kyla-care',
  logo: "logos/Kyla_Care_Therapy_LLC_logo.png", 
  name: "Kyla Care Therapy LLC", 
  tagline: "Healing hearts, one session at a time.", 
  website: "https://www.kylacaretherapy.com/",
  industry: "Health + Beauty",
  affinities: ["Women Owned", "Black Owned"],
  loanYear: 2024
},

{ 
  id: 'len-can',
  logo: "logos/Len_Can_Builders,_Inc_logo.jpg", 
  name: "Len Can Builders, Inc.", 
  tagline: "Yes we can — and we build it better.", 
  website: "https://www.lencanbuilders.com/",
  industry: "Construction",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'lifestyle',
  logo: "logos/Lifestyle_LLC_logo.png", 
  name: "Lifestyle LLC", 
  tagline: "Curating comfort, class, and culture.", 
  website: "https://www.lifestylevalet.net/",
  industry: "Retail",
  affinities: ["Black Owned"],
  loanYear: 2024
},

{ 
  id: 'lunar-libations',
  logo: "logos/Lunar_Libations_LLC_revelry_logo.png", 
  name: "Lunar Libations LLC", 
  tagline: "Sip under the stars — taste the moonlight.", 
  website: "https://jetcitylabs.com/revelry/",
  industry: "Food + Beverage",
  affinities: ["Black Owned", "Women Owned", "View In Person"],
  loanYear: 2025
},

{ 
  id: 'made-men',
  logo: "logos/Made_Men_Cleaning_Services_LLC_logo.webp", 
  name: "Made Men Cleaning", 
  tagline: "Cleaning with honor, precision, and pride.", 
  website: "https://www.mademencs.com/",
  industry: "Professional Services",
  affinities: ["Black Owned", "Veteran Owned"],
  loanYear: 2025
},

{ 
  id: 'mama-row',
  logo: "logos/Mama_Row's_Caramel_Corp_logo.webp", 
  name: "Mama Row's Caramel Corp", 
  tagline: "Sweetness made from soul and legacy.", 
  website: "https://www.mamarowscaramel.com/",
  industry: "Food + Beverage",
  affinities: ["Women Owned", "Black Owned"],
  loanYear: 2024
},

{ 
  id: 'massage-me',
  logo: "logos/Massage-Me-LOGO.png", 
  name: "Massage ME LLC", 
  tagline: "Relax. Release. Renew.", 
  website: "https://canyonplacemassage.me/",
  industry: "Health + Beauty",
  affinities: ["Women Owned", "View In Person"],
  loanYear: 2025
},

{ 
  id: 'mediums',
  logo: "logos/Mediums_Collective_logo.webp", 
  name: "Mediums LLC", 
  tagline: "Where art and intuition meet business.", 
  website: "https://mediumscollective.com/",
  industry: "Arts + Entertainment",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'mr-naturalz',
  logo: "logos/Mr._Naturalz_LLC_logo1.png", 
  name: "Mr. Naturalz LLC", 
  tagline: "Naturally confident. Authentically you.", 
  website: "https://www.mrnaturalz.com/",
  industry: "Health + Beauty",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'najfahn',
  logo: "logos/Najfahn_LLC_logo.jpg", 
  name: "Najfahn LLC", 
  tagline: "Innovation born from cultural brilliance.", 
  website: "https://www.najfahncarcafe.com/",
  industry: "Transportation",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'new-leaf',
  logo: "logos/New_Leaf_Chiropractic_Wellness_logo.png", 
  name: "New Leaf Chiropractic", 
  tagline: "Turn over a new leaf in your health journey.", 
  website: "https://www.newleafhealthclinic.com/",
  industry: "Health + Beauty",
  affinities: ["Women Owned", "View In Person"],
  loanYear: 2025
},

{ 
  id: 'noir-lux',
  logo: "logos/Noir_Lux_Candle_Co._LLC_logo.svg", 
  name: "Noir Lux Candle Co. LLC", 
  tagline: "Luxury that lights up your mood.", 
  website: "https://noirluxcandleco.com/",
  industry: "Health + Beauty",
  affinities: ["Women Owned", "Black Owned", "View In Person"],
  loanYear: 2024
},

{ 
  id: 'on-blended-knee',
  logo: "logos/On_Blended_Knee_Winery_LLC_logo.webp", 
  name: "On Blended Knee Winery", 
  tagline: "Where passion is poured in every glass.", 
  website: "https://obkwinery.com/",
  industry: "Food + Beverage",
  affinities: ["Black Owned", "View In Person"],
  loanYear: 2025
},

{ 
  id: 'one-vibe',
  logo: "logos/ONE_VIBE_MEDIA_LLC_logo.jpg", 
  name: "ONE VIBE MEDIA LLC", 
  tagline: "Amplifying the culture, one story at a time.", 
  website: "https://onevibemedia.com/",
  industry: "Arts + Entertainment",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'osmosis',
  logo: "logos/Osmosis_Media_LLC_logo.png", 
  name: "Osmosis Media LLC", 
  tagline: "Creativity that seeps into every channel.", 
  website: "https://osmosismedia.com/",
  industry: "Arts + Entertainment",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'pan-african',
  logo: "logos/Pan_African_Center_for_Empowerment_logo1.jpg", 
  name: "Pan African Center for Empowerment", 
  tagline: "Uniting roots. Igniting power.", 
  website: "https://www.getonpace.org/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'party-house',
  logo: "logos/Party_House_logo.png", 
  name: "Party House", 
  tagline: "Where every night is the main event.", 
  website: "https://partyhousetacoma.com/",
  industry: "Arts + Entertainment",
  affinities: ["Black Owned", "View In Person"],
  loanYear: 2025
},

{ 
  id: 'pnw-one-stop-shop',
  logo: "logos/Pacific_NorthWest_1ss_logo.png", 
  name: "PACIFIC NORTHWEST ONE STOP SHOP", 
  tagline: "Built right. Done once.", 
  website: "https://www.yelp.com/biz/pacific-northwest-1-stop-shop-everett#location-and-hours",
  industry: "Construction",
  affinities: [],
  loanYear: 2023
},

{ 
  id: 'pinckney',
  logo: "logos/Pinckney_Cookie_Cafe_Inc_logo.webp", 
  name: "Pinckney Cookie Cafe Inc.", 
  tagline: "Cookies so good, they deserve applause.", 
  website: "https://lovethesecookies.com/",
  industry: "Food + Beverage",
  affinities: ["Black Owned", "View In Person"],
  loanYear: 2024
},

{ 
  id: 'pjs-classic',
  logo: "logos/PJ's_Classic_Homemade_Ice_Cream_logo.jpeg", 
  name: "PJ's Classic Ice Cream", 
  tagline: "Handcrafted happiness in every scoop.", 
  website: "https://www.yelp.com/biz/pjs-classic-creamery-seattle",
  industry: "Food + Beverage",
  affinities: ["Black Owned", "View In Person"],
  loanYear: 2025
},

{ 
  id: 'pot-pie-factory',
  logo: "logos/PotPieFactoryInc_Logo_sm.webp", 
  name: "Pot Pie Factory Inc.", 
  tagline: "Handcrafted comfort in every golden crust.", 
  website: "https://www.potpiefactory.co/",
  industry: "Food + Beverage",
  affinities: [],
  loanYear: 2022
},
{ 
  id: 'professional-women',
  logo: "logos/Professional_Women_of_Color_Network_logo.png", 
  name: "Professional Women of Color Network", 
  tagline: "Empowering women to lead boldly.", 
  website: "https://pwocn.wildapricot.org/",
  industry: "Professional Services",
  affinities: ["Women Owned", "Black Owned"],
  loanYear: 2025
},

{ 
  id: 'prostasia-security',
  logo: "", 
  name: "Prostasia Security, LLC", 
  tagline: "Protection without compromise.", 
  website: "https://www.bizprofile.net/wa/mountlake-terrace/prostasia-security-llc",
  industry: "Security Services",
  affinities: [],
  loanYear: 2025
},

{ 
  id: 'rosemore-property-management',
  logo: "logos/RosemoreProperty_Management_logo.png", 
  name: "Rosemore Property Management", 
  tagline: "Elevating spaces with care and precision.", 
  website: "https://www.instagram.com/rosemorepropertymanagement/",
  industry: "Professional Services",
  affinities: [],
  loanYear: 2021
},

{ 
  id: 'qemem',
  logo: "logos/Qemem_Hot_Sauce_LLC_logo.webp", 
  name: "Qemem Hot Sauce LLC", 
  tagline: "The fire your food's been missing.", 
  website: "https://www.qememhotsauce.com/",
  industry: "Food + Beverage",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'quality-dev',
  logo: "logos/Quality_Development_LLC_logo.png", 
  name: "Quality Development LLC", 
  tagline: "Developing excellence from the ground up.", 
  website: "https://www.qualitydevelopment.biz/",
  industry: "Construction",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'queencare',
  logo: "logos/Queencare_Products_LLC_logo.webp", 
  name: "Queencare Products LLC", 
  tagline: "Royal care for radiant queens.", 
  website: "https://www.queencareproducts.com/",
  industry: "Health + Beauty",
  affinities: ["Women Owned", "Black Owned", "View In Person"],
  loanYear: 2024
},

{ 
  id: 'remy-const',
  logo: "logos/Remy_Construction_LLC_logo.svg", 
  name: "Remy Construction, LLC", 
  tagline: "Building visions into reality.", 
  website: "https://www.rainiercustomhomes.com/",
  industry: "Construction",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'reviving-path',
  logo: "logos/REVIVING_PATH_COUNSELING_logo.png", 
  name: "REVIVING PATH COUNSELING", 
  tagline: "Guiding you toward renewal and peace.", 
  website: "https://rpathcc.com/",
  industry: "Professional Services",
  affinities: ["Women Owned", "Black Owned"],
  loanYear: 2025
},

{ 
  id: 'richlandhub',
  logo: "logos/Richlandhub_LLC_logo.webp", 
  name: "Richlandhub LLC", 
  tagline: "Connecting business, innovation, and growth.", 
  website: "https://richlandhub.com/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'ritesize',
  logo: "logos/RiteSize_Consulting_LLC_logo1.png", 
  name: "RiteSize Consulting LLC", 
  tagline: "Right insights. Right solutions. Right size.", 
  website: "https://www.ritesize.co/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'serenity-fin',
  logo: "logos/Serenity_Financial_Consultant_LLC_logo.png", 
  name: "Serenity Financial Consultant", 
  tagline: "Calm minds, confident money moves.", 
  website: "https://www.serenityfsgroup.com/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'siren-curves',
  logo: "logos/Siren_Curves_Body_Sculpting_LLC_logo.jpg", 
  name: "Siren Curves Body Sculpting", 
  tagline: "Confidence sculpted to perfection.", 
  website: "https://www.sirencurves.com/",
  industry: "Health + Beauty",
  affinities: ["Women Owned"],
  loanYear: 2025
},

{ 
  id: 'snapshot',
  logo: "logos/Snapshot_LLC_logo.png", 
  name: "Snapshot LLC", 
  tagline: "Moments frozen in perfect clarity.", 
  website: "https://www.facebook.com/snapshotcollective/",
  industry: "Arts + Entertainment",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'sonu-beauty',
  logo: "logos/SoNu_Beauty_Bar_INC_logo.png", 
  name: "SoNu Beauty Bar INC", 
  tagline: "So natural. So new. So you.", 
  website: "https://sonubeautybar.com/",
  industry: "Health + Beauty",
  affinities: ["Women Owned", "View In Person"],
  loanYear: 2025
},

{ 
  id: 'sound-sports',
  logo: "logos/Sound_Sports_Performance_and_Training_LLC_logo.webp", 
  name: "Sound Sports Performance", 
  tagline: "Train hard. Move smart. Win soundly.", 
  website: "https://soundsportsperformance.com/",
  industry: "Health + Beauty",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'spoonfed',
  logo: "logos/SpoonFed_Training_LLC.png", 
  name: "SpoonFed Training LLC", 
  tagline: "Feeding your potential, one skill at a time.", 
  website: "https://www.spoonfedtraining.com/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'stemtac',
  logo: "logos/Stemtac,_LLC_logo.png", 
  name: "Stemtac, LLC", 
  tagline: "STEM innovation with tactical precision.", 
  website: "https://www.stemtacfoundation.org/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2024
},

{ 
  id: 'surety-sec',
  logo: "logos/Surety_Security,_LLC_logo.webp", 
  name: "Surety Security, LLC", 
  tagline: "Your safety, our commitment.", 
  website: "https://www.suretysecuritypnw.com/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'tanimola',
  logo: "logos/Tanimola_logistics_LLC_logo.png", 
  name: "Tanimola logistics", 
  tagline: "Delivering trust across every mile.", 
  website: "https://www.instagram.com/p/DF0hSqpsmy2/",
  industry: "Transportation",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'taswira',
  logo: "logos/TASWIRA_LLC_logo.png", 
  name: "TASWIRA LLC", 
  tagline: "Picture the future. Then build it.", 
  website: "https://taswira.org/",
  industry: "Arts + Entertainment",
  affinities: ["Black Owned"],
  loanYear: 2024
},

{ 
  id: 'the-barbeque-pit',
  logo: "logos/The_Barbeque_Pit_logo.png", 
  name: "The Barbeque Pit", 
  tagline: "Slow smoked. Bold flavor. No shortcuts.", 
  website: "https://www.facebook.com/thebarbequepitseattle/",
  industry: "Food + Beverage",
  affinities: [],
  loanYear: 2022
},

{ 
  id: 'lakewood-bookstore',
  logo: "logos/the_lakewoodbookstore_logo.webp", 
  name: "The Lakewood Bookstore LLC", 
  tagline: "Where stories live and minds grow.", 
  website: "https://thelakewoodbookstore.com/",
  industry: "Education",
  affinities: [],
  loanYear: 2026
},

{ 
  id: 'the-postman',
  logo: "logos/The_Postman_LLC_logo.png", 
  name: "The Postman LLC", 
  tagline: "Delivering stories worth opening.", 
  website: "https://www.facebook.com/thepostmanseattle/",
  industry: "Transportation",
  affinities: ["Black Owned", "View In Person"],
  loanYear: 2024
},

{ 
  id: 'the-sauce-llc',
  logo: "logos/The_sauceLLC_logo.png", 
  name: "The Sauce LLC", 
  tagline: "Flavor that speaks for itself.", 
  website: "https://wsauceco.com/",
  industry: "Food + Beverage",
  affinities: [],
  loanYear: 2025
},

{ 
  id: 'silent-task',
  logo: "logos/The_Silent_Task_Force_logo.png", 
  name: "The Silent Task Force", 
  tagline: "Working quietly. Impacting loudly.", 
  website: "https://www.thesilenttaskforce.org/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2024
},

{ 
  id: 'thompson-elec',
  logo: "logos/Thompson_Electrical_Services_LLC_logo.png", 
  name: "Thompson Electrical Services", 
  tagline: "Powering progress with precision.", 
  website: "https://thompsonelectricalservices.com/",
  industry: "Construction",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'thoughts-cost',
  logo: "logos/Thoughts_Cost_LLC_logo.png", 
  name: "Thoughts Cost LLC", 
  tagline: "Ideas worth every penny.", 
  website: "https://www.thoughtscost.com/",
  industry: "Arts + Entertainment",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'timu-market',
  logo: "logos/Timu_Marketing_Agency,_LLC_logo.png", 
  name: "Timu Marketing Agency", 
  tagline: "Marketing that moves communities forward.", 
  website: "https://timumarketing.com/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2024
},

{ 
  id: 'tonl-llc',
  logo: "logos/TONL_LLC_logo.png", 
  name: "TONL, LLC", 
  tagline: "Authentic visuals. Global impact.", 
  website: "https://tonl.co/",
  industry: "Arts + Entertainment",
  affinities: [],
  loanYear: 2025
},

{ 
  id: 'twb-consult',
  logo: "logos/TWB_Consulting_LLC_logo.png", 
  name: "TWB Consulting LLC", 
  tagline: "Strategic insight for sustainable success.", 
  website: "https://www.consulttwb.com/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'umami-kushi',
  logo: "logos/Umami_kushi_LLC_logo.jpeg", 
  name: "Umami Kushi llc", 
  tagline: "Savory bites with global soul.", 
  website: "https://umamikushi.com/",
  industry: "Food + Beverage",
  affinities: ["Black Owned", "View In Person"],
  loanYear: 2024
},

{ 
  id: 'urban-connoisseur',
  logo: "logos/Urban_Connoisseurs_ LLC_logo1.png", 
  name: "Urban Connoisseurs, LLC", 
  tagline: "Curating culture for the refined palate.", 
  website: "https://www.urbanconnoisseurs.com/",
  industry: "Food + Beverage",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'urban-hills',
  logo: "logos/Urban_Hills_Group_LLC_logo.png", 
  name: "Urban Hills Group LLC", 
  tagline: "Rising communities. Built with care.", 
  website: "https://www.urbanhig.org/",
  industry: "Construction",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'village-life',
  logo: "logos/Village_Life_Project_logo.webp", 
  name: "Village Life Project", 
  tagline: "Building stronger communities, one family at a time.", 
  website: "https://www.villagelifeproject.org/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2024
},

{ 
  id: 'vulgar-dreamer',
  logo: "logos/VULGAR-DREAMER_logo.jpg", 
  name: "Vulgar Dreamer", 
  tagline: "Art unapologetic. Vision untamed.", 
  website: "https://vulgardreamer.com/",
  industry: "Arts + Entertainment",
  affinities: ["Black Owned", "Women Owned"],
  loanYear: 2025
},

{ 
  id: 'wembo-cpa',
  logo: "logos/Wembo_CPA_PLLC_logo.png", 
  name: "Wembo CPA PLLC", 
  tagline: "Your numbers. Our expertise.", 
  website: "https://www.wembocpa.com/",
  industry: "Professional Services",
  affinities: ["Black Owned"],
  loanYear: 2025
},

{ 
  id: 'where-is-neva',
  logo: "logos/Where_is_Neva_LLC_logo.png", 
  name: "Where is Neva LLC", 
  tagline: "A creative search for what's next.", 
  website: "https://www.whereisneva.com/",
  industry: "Arts + Entertainment",
  affinities: ["Black Owned", "Women Owned"],
  loanYear: 2025
},

{ 
  id: 'wonder-of-women',
  logo: "logos/Wonder_of_Women_International_PC_logo.png", 
  name: "Wonder of Women", 
  tagline: "Celebrating womanhood, worldwide.", 
  website: "https://www.thewonderofwomen.org/",
  industry: "Professional Services",
  affinities: ["Women Owned", "Black Owned"],
  loanYear: 2024
},

];
