
export const INDUSTRIES = {
  'Food + Beverage': '#FF6B6B',
  'Arts + Entertainment': '#4ECDC4',
  'Health + Beauty': '#FFD93D',
  'Professional Services': '#6C5CE7',
  'Transportation': '#A8E6CF',
  'Construction': '#FF8B94',
  'Retail': '#95E1D3',
} as const;

export const AFFINITIES = {
  'Women Owned': '#E91E63',
  'Black Owned': '#8B4513',
  'LGBTQIA+ Owned': '#9C27B0',
  'Veteran Owned': '#1565C0',
  'Shop In Person': '#F57C00',
} as const;

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
}

export const BUSINESSES: Business[] = [
  { 
    id: '88-seconds',
    logo: "logos/88__Seconds_LLC_logo.png", 
    name: "88 Seconds LLC", 
    tagline: "Delivering perfection in every heartbeat of time.", 
    website: "https://metierbrewing.com/",
    industry: "Food + Beverage",
    affinities: ["Black Owned", "Shop In Person"]
  },
  { 
    id: 'dj-cook',
    logo: "logos/A_DJ_AND_A_COOK_LLC_logo.webp", 
    name: "A DJ AND A COOK LLC", 
    tagline: "Mixing beats and flavors that move your soul.", 
    website: "https://www.feedthepeopleseattle.com",
    industry: "Food + Beverage",
    affinities: ["Black Owned", "Shop In Person"]
  },
  { 
    id: 'ace-academy',
    logo: "logos/ACEAcademy_logo.webp", 
    name: "ACE Academy", 
    tagline: "Building brilliance, one student at a time.", 
    website: "https://www.aceacademywa.org/",
    industry: "Professional Services",
    affinities: ["Black Owned"]
  },
  { 
    id: 'achava',
    logo: "logos/Achava_Cleaning_Services_LLC_logo.webp", 
    name: "Achava Cleaning Services LLC", 
    tagline: "Where spotless spaces meet divine service.", 
    website: "https://achavacleaningco.com/",
    industry: "Professional Services",
    affinities: ["Women Owned"]
  },
  { 
    id: 'alpha-sharp',
    logo: "logos/Alpha_Sharp_Design,_LLC_logo.webp", 
    name: "Alpha Sharp Design, LLC", 
    tagline: "Designs that cut through the noise.", 
    website: "https://www.asdevpartners.com/about",
    industry: "Professional Services",
    affinities: ["Black Owned"]
  },
  { 
    id: 'althas',
    logo: "logos/Althas_Louisiana_Cajun_seasoning&spices_LLC_logo.png", 
    name: "Althas Louisiana Cajun seasoning & spices", 
    tagline: "A taste of the bayou in every bite.", 
    website: "https://althascajunspices.com",
    industry: "Food + Beverage",
    affinities: ["Women Owned", "Shop In Person"]
  },
  { 
    id: 'axsm',
    logo: "logos/AxSM_Art_LLC_logo.png", 
    name: "AxSM Art LLC", 
    tagline: "Where expression meets motion and color.", 
    website: "https://www.madespaceseattle.com/",
    industry: "Arts + Entertainment",
    affinities: ["Black Owned", "LGBTQIA+ Owned"]
  },
  { 
    id: 'bm-janitorial',
    logo: "logos/B&M_Janitorial_LLC_logo.png", 
    name: "B&M Janitorial LLC", 
    tagline: "Clean today, confident tomorrow.", 
    website: "https://bmcleaningservices.com/home",
    industry: "Professional Services",
    affinities: ["Black Owned"]
  },
  { 
    id: 'baxters',
    logo: "logos/Baxters_Bottles_LLC_logo.png", 
    name: "Baxters Bottles LLC", 
    tagline: "Sustainable bottles built for better living.", 
    website: "https://www.lucysbottleshop.com",
    industry: "Retail",
    affinities: ["Women Owned", "Shop In Person"]
  },
  { 
    id: 'bet-boon',
    logo: "logos/Bet_Boon_SPC_logo.svg", 
    name: "Bet Boon SPC", 
    tagline: "Where coffee & culture meet", 
    website: "https://www.boonboonacoffee.com/",
    industry: "Food + Beverage",
    affinities: ["Black Owned", "Shop In Person"]
  },
  { 
    id: 'bite-me',
    logo: "logos/Bite_Me_Inc_logo1.png", 
    name: "Bite Me Inc.", 
    tagline: "Bold flavor with a side of attitude.", 
    website: "https://bitemeinc.cc/",
    industry: "Food + Beverage",
    affinities: ["Women Owned"]
  },
  { 
    id: 'black-brilliance',
    logo: "logos/Black_Brilliance_Research,_LLC_logo.png", 
    name: "Black Brilliance Research, LLC", 
    tagline: "Data with depth, insight with purpose.", 
    website: "https://blackbrillianceresearch.com",
    industry: "Professional Services",
    affinities: ["Black Owned", "LGBTQIA+ Owned"]
  },
  { 
    id: 'blastography',
    logo: "logos/BLASTography_LLC_logo.png", 
    name: "BLASTography LLC", 
    tagline: "Capturing energy one frame at a time.", 
    website: "https://blastmusicfest.com",
    industry: "Arts + Entertainment",
    affinities: ["Black Owned"]
  },
  { 
    id: 'blessential',
    logo: "logos/Blessential_Trucking_LLC_logo.png", 
    name: "Blessential Trucking LLC", 
    tagline: "Hauling essentials, delivering blessings.", 
    website: "",
    industry: "Transportation",
    affinities: ["Black Owned", "Veteran Owned"]
  },
  { 
    id: 'blkbry',
    logo: "logos/BLKBRY_logo.png", 
    name: "BLKBRY, LLC", 
    tagline: "Luxury curated for the modern creative.", 
    website: "https://www.blkbry.com",
    industry: "Health + Beauty",
    affinities: ["Black Owned", "Women Owned"]
  },
  { 
    id: 'campfire',
    logo: "logos/Campfire_Coffee,_LLC_logo.webp", 
    name: "Campfire Coffee, LLC", 
    tagline: "Gather, sip, and spark something new.", 
    website: "https://www.welovecampfire.com",
    industry: "Food + Beverage",
    affinities: ["Black Owned", "Veteran Owned", "Shop In Person"]
  },
  { 
    id: 'cheddarboy',
    logo: "logos/Cheddarboy_Popcorn_LLP_logo.webp", 
    name: "Cheddarboy Popcorn LLP", 
    tagline: "Crunchy, cheesy, dangerously addictive.", 
    website: "https://www.realcheddarboypopcorn.com/",
    industry: "Food + Beverage",
    affinities: ["Black Owned", "Shop In Person"]
  },
  { 
    id: 'cipro',
    logo: "logos/Cipro-Group_Logo.png", 
    name: "Cipro LLC", 
    tagline: "Engineering efficiency for modern business.", 
    website: "https://ciprocontractors.com/",
    industry: "Construction",
    affinities: ["Black Owned"]
  },
  { 
    id: 'cjk',
    logo: "logos/CJK-Community-Homes-LOGO.png", 
    name: "CJK Homes and Design, LLC", 
    tagline: "Building dreams with precision and passion.", 
    website: "https://cjkcommunityhomes.org/",
    industry: "Construction",
    affinities: ["Black Owned"]
  },
  { 
    id: 'converge',
    logo: "logos/Converge_Media_LLC_logo.webp", 
    name: "Converge Media LLC", 
    tagline: "Where culture, creativity, and conversation meet.", 
    website: "https://www.whereweconverge.com/",
    industry: "Arts + Entertainment",
    affinities: ["Black Owned"]
  },
  { 
    id: 'dopl',
    logo: "logos/Dopl_Technologies_Inc_logo.png", 
    name: "Dopl Technologies Inc.", 
    tagline: "Simplifying tech for real-world impact.", 
    website: "https://www.dopltechnologies.com/",
    industry: "Professional Services",
    affinities: ["Black Owned"]
  },
  { 
    id: 'dynamic-waters',
    logo: "logos/Dynamic_Waters_LLC_logo.webp", 
    name: "Dynamic Waters LLC", 
    tagline: "Flowing with innovation and integrity.", 
    website: "https://www.dynamicwaters.net/about",
    industry: "Professional Services",
    affinities: ["Veteran Owned"]
  },
  { 
    id: 'emerald-water',
    logo: "logos/Emerald_Water_Anglers_LLC_logo.png", 
    name: "Emerald Water Anglers LLC", 
    tagline: "Guiding you to greener streams and clearer minds.", 
    website: "https://emeraldwateranglers.com/",
    industry: "Retail",
    affinities: ["Shop In Person"]
  },
  { 
    id: 'face-consulting',
    logo: "logos/FACE-Consulting-Collaborative_logo.webp", 
    name: "FACE Consulting, LLC", 
    tagline: "Turning vision into actionable strategy.", 
    website: "https://faceconsultingcollaborative.com/",
    industry: "Professional Services",
    affinities: ["Black Owned", "Women Owned"]
  },
  { 
    id: 'faith-finance',
    logo: "logos/Faith_Finance_Center_LLC_logo.jpg", 
    name: "Faith Finance Center LLC", 
    tagline: "Where faith meets financial freedom.", 
    website: "https://faithfinancecenter.mykajabi.com/",
    industry: "Professional Services",
    affinities: ["Black Owned"]
  },
  { 
    id: 'freight-link',
    logo: "logos/Freight_Link_LLC_logo.jpeg", 
    name: "FREIGHT LINK LLC", 
    tagline: "Connecting cargo to destinations, seamlessly.", 
    website: "https://www.linkedin.com/company/freight-link-llc/",
    industry: "Transportation",
    affinities: ["Black Owned"]
  },
  { 
    id: 'gravy',
    logo: "logos/Gravy_LLC_logo.webp", 
    name: "Gravy LLC", 
    tagline: "Making everything better, naturally.", 
    website: "https://www.gravyvashon.com/",
    industry: "Food + Beverage",
    affinities: ["Black Owned", "Shop In Person"]
  },
  { 
    id: 'htm',
    logo: "logos/HTM_Contracting_LLC_logo.png", 
    name: "HTM Contracting LLC", 
    tagline: "Building trust from the ground up.", 
    website: "https://higherthanme.org/",
    industry: "Construction",
    affinities: ["Black Owned"]
  },
  { 
    id: 'hudson',
    logo: "logos/Hudson_Trucking_and_Transportation_LLC_logo.webp", 
    name: "Hudson Trucking", 
    tagline: "Driving reliability across every route.", 
    website: "https://www.hudsontransportation.us/",
    industry: "Transportation",
    affinities: ["Black Owned"]
  },
  { 
    id: 'hulk',
    logo: "logos/Hulk_Construction_LLC_logo.png", 
    name: "Hulk Construction LLC", 
    tagline: "Strength, precision, and results that last.", 
    website: "https://www.hulk253.com/",
    industry: "Construction",
    affinities: ["Black Owned"]
  },
  { 
    id: 'inspirational',
    logo: "logos/Inspirational_Workshops_-_Brave_logo.png", 
    name: "Inspirational Workshops", 
    tagline: "Inspiring minds to lead, live, and thrive.", 
    website: "https://www.braveyoungpeople.org/",
    industry: "Professional Services",
    affinities: ["Black Owned", "Women Owned"]
  },
  { 
    id: 'jj-freemann',
    logo: "logos/J_J_Freemann_Construction_and_Painting,_LLC_logo.webp", 
    name: "J J Freemann Construction", 
    tagline: "Craftsmanship with every brush and brick.", 
    website: "https://www.jjfreemann.com/",
    industry: "Construction",
    affinities: ["Black Owned"]
  },
  { 
    id: 'jacobs-agro',
    logo: "logos/Jacobs_agro_LLC_logo.jpeg", 
    name: "jacobs agro LLC", 
    tagline: "Rooted in sustainability, growing for tomorrow.", 
    website: "https://jacobsagro.com/",
    industry: "Retail",
    affinities: ["Black Owned"]
  },
  { 
    id: 'jumpin-jambalaya',
    logo: "logos/JUMPIN_JAMBALAYA_LLC_logo.jpg", 
    name: "JUMPIN JAMBALAYA LLC", 
    tagline: "Flavor that dances right on your plate.", 
    website: "https://jumpinjambalaya.com/",
    industry: "Food + Beverage",
    affinities: ["Black Owned", "Shop In Person"]
  },
  { 
    id: 'kyla-care',
    logo: "logos/Kyla_Care_Therapy_LLC_logo.png", 
    name: "Kyla Care Therapy LLC", 
    tagline: "Healing hearts, one session at a time.", 
    website: "https://www.kylacaretherapy.com/",
    industry: "Health + Beauty",
    affinities: ["Women Owned", "Black Owned"]
  },
  { 
    id: 'len-can',
    logo: "logos/Len_Can_Builders,_Inc_logo.jpg", 
    name: "Len Can Builders, Inc.", 
    tagline: "Yes we can — and we build it better.", 
    website: "https://www.lencanbuilders.com/",
    industry: "Construction",
    affinities: ["Black Owned"]
  },
  { 
    id: 'lifestyle',
    logo: "logos/Lifestyle_LLC_logo.png", 
    name: "Lifestyle LLC", 
    tagline: "Curating comfort, class, and culture.", 
    website: "https://www.lifestylevalet.net/",
    industry: "Retail",
    affinities: ["Black Owned"]
  },
  { 
    id: 'lunar-libations',
    logo: "logos/Lunar_Libations_LLC_revelry_logo.png", 
    name: "Lunar Libations LLC", 
    tagline: "Sip under the stars — taste the moonlight.", 
    website: "https://jetcitylabs.com/revelry/",
    industry: "Food + Beverage",
    affinities: ["Black Owned", "Women Owned", "Shop In Person"]
  },
  { 
    id: 'made-men',
    logo: "logos/Made_Men_Cleaning_Services_LLC_logo.webp", 
    name: "Made Men Cleaning", 
    tagline: "Cleaning with honor, precision, and pride.", 
    website: "https://www.mademencs.com/",
    industry: "Professional Services",
    affinities: ["Black Owned", "Veteran Owned"]
  },
  { 
    id: 'mama-row',
    logo: "logos/Mama_Row's_Caramel_Corp_logo.webp", 
    name: "Mama Row's Caramel Corp", 
    tagline: "Sweetness made from soul and legacy.", 
    website: "https://www.mamarowscaramel.com/",
    industry: "Food + Beverage",
    affinities: ["Women Owned", "Black Owned"]
  },
  { 
    id: 'massage-me',
    logo: "logos/Massage-Me-LOGO.png", 
    name: "Massage ME LLC", 
    tagline: "Relax. Release. Renew.", 
    website: "https://canyonplacemassage.me/",
    industry: "Health + Beauty",
    affinities: ["Women Owned", "Shop In Person"]
  },
  { 
    id: 'mediums',
    logo: "logos/Mediums_Collective_logo.webp", 
    name: "Mediums LLC", 
    tagline: "Where art and intuition meet business.", 
    website: "https://mediumscollective.com/",
    industry: "Arts + Entertainment",
    affinities: ["Black Owned"]
  },
  { 
    id: 'mr-naturalz',
    logo: "logos/Mr._Naturalz_LLC_logo.webp", 
    name: "Mr. Naturalz LLC", 
    tagline: "Naturally confident. Authentically you.", 
    website: "https://www.mrnaturalz.com/",
    industry: "Health + Beauty",
    affinities: ["Black Owned"]
  },
  { 
    id: 'najfahn',
    logo: "logos/Najfahn_LLC_logo.jpg", 
    name: "Najfahn LLC", 
    tagline: "Innovation born from cultural brilliance.", 
    website: "https://www.najfahncarcafe.com/",
    industry: "Transportation",
    affinities: ["Black Owned"]
  },
  { 
    id: 'new-leaf',
    logo: "logos/New_Leaf_Chiropractic_Wellness_logo.png", 
    name: "New Leaf Chiropractic", 
    tagline: "Turn over a new leaf in your health journey.", 
    website: "https://www.newleafhealthclinic.com/",
    industry: "Health + Beauty",
    affinities: ["Women Owned", "Shop In Person"]
  },
  { 
    id: 'noir-lux',
    logo: "logos/Noir_Lux_Candle_Co._LLC_logo.svg", 
    name: "Noir Lux Candle Co. LLC", 
    tagline: "Luxury that lights up your mood.", 
    website: "https://noirluxcandleco.com/",
    industry: "Health + Beauty",
    affinities: ["Women Owned", "Black Owned", "Shop In Person"]
  },
  { 
    id: 'on-blended-knee',
    logo: "logos/On_Blended_Knee_Winery_LLC_logo.webp", 
    name: "On Blended Knee Winery", 
    tagline: "Where passion is poured in every glass.", 
    website: "https://obkwinery.com/",
    industry: "Food + Beverage",
    affinities: ["Black Owned", "Shop In Person"]
  }
];
