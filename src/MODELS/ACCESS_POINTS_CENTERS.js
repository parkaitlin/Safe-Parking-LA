// object model for each resource
// {
//     programName: "",
//     spa: "",
//     operator: "",
//     city: "",
//     address: "",
//     website: "",
//     phone: "",
//     hours: "",
//     walkIn: boolean,
//     eligibility: ""
// }

const accessCenters = [
[
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Exodus Mental Health",
    "Service Planning/Geographic Area": "SPA 4 - Metro LA",
    "Operator": "Exodus Mental Health",
    "Neighborhood": "Montecito Heights",
    "Address": "1920 Marengo St LA",
    "Website": "",
    "Email": "",
    "Phone": "213-276-4600",
    "Hours of Operation": "",
    "Walk-Ins Allowed?": "",
    "Eligibility Requirements": "",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Annenberg Access Center",
    "Service Planning/Geographic Area": "SPA 5 - West LA",
    "Operator": "The People Concern",
    "Neighborhood": "Santa Monica",
    "Address": "503 Olympic Blvd, Santa Monica, CA 90401",
    "Website": "",
    "Email": "",
    "Phone": "310-450-4050",
    "Hours of Operation": "7 Days a Week 8:00 am- 5:00 pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "Adults",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "St. Joseph Homeless Service Center",
    "Service Planning/Geographic Area": "SPA 5 - West LA",
    "Operator": "St. Joseph Center",
    "Neighborhood": "Venice",
    "Address": "404 Lincoln Blvd, Los Angeles, CA 90291",
    "Website": "https://stjosephctr.org/if-you-need-help/",
    "Email": "",
    "Phone": "",
    "Hours of Operation": "M-F 8:00am-5:00pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "Adults",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Safe Place for Youth",
    "Service Planning/Geographic Area": "SPA 5 - West LA",
    "Operator": "Safe Place for Youth",
    "Neighborhood": "Venice",
    "Address": "2469 Lincoln Blvd, Los Angeles, CA 90291",
    "Website": "http://www.safeplaceforyouth.org/youth",
    "Email": "",
    "Phone": "310-902-2283, option 2",
    "Hours of Operation": "Tuesdays, Wednesdays and Thursday between 1:00pm- 5:00pm , or Monday and Friday by appointment.",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "Youth",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "VA Greater Los Angeles Healthcare System",
    "Service Planning/Geographic Area": "SPA 5 - West LA",
    "Operator": "U.S Department of Veteran Affairs ",
    "Neighborhood": "Sawtelle",
    "Address": "West Los Angeles Medical Center Building 402 11301 Wilshire Blvd, Los Angeles, CA 90073",
    "Website": "",
    "Email": "",
    "Phone": "310-478-3711",
    "Hours of Operation": "Open 24 Hours",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "Veterans",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "SSG HOPICS",
    "Service Planning/Geographic Area": "SPA 6 - Central LA",
    "Operator": "SSG HOPICS",
    "Neighborhood": "South Park",
    "Address": "5711 S Broadway, Los Angeles 90037",
    "Website": "hopics.org",
    "Email": "",
    "Phone": "323-948-0444",
    "Hours of Operation": "M-F 8:30am-5pm",
    "Walk-Ins Allowed?": "",
    "Eligibility Requirements": "",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Ruth's Place ",
    "Service Planning/Geographic Area": "SPA 6 - Central LA",
    "Operator": "CRCD",
    "Neighborhood": "South Park",
    "Address": "4920 S Avalon Blvd, Los Angeles 90011",
    "Website": "",
    "Email": "",
    "Phone": "323-432-2440",
    "Hours of Operation": "M-F 8:30am-5pm",
    "Walk-Ins Allowed?": "",
    "Eligibility Requirements": "",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Harbor Interfaith Services",
    "Service Planning/Geographic Area": "SPA 8 - South Bay",
    "Operator": "HIS",
    "Neighborhood": "San Pedro",
    "Address": "599 W. 9th St, San Pedro, CA 90731",
    "Website": "http://www.harborinterfaith.org/",
    "Email": "",
    "Phone": "424-276-3602",
    "Hours of Operation": "Weekdays 8:00 am-12:30 pm, 1:30-5:00 pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "Adult and Youth",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "MHA Operation Healthy Homecoming",
    "Service Planning/Geographic Area": "SPA 8 - South Bay",
    "Operator": "MHA",
    "Neighborhood": "San Pedro",
    "Address": "",
    "Website": "",
    "Email": "",
    "Phone": "424-570-0241",
    "Hours of Operation": "",
    "Walk-Ins Allowed?": "",
    "Eligibility Requirements": "Veterans",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "St. Margaret’s Center",
    "Service Planning/Geographic Area": "SPA 8 - South Bay",
    "Operator": "St. Margaret’s Center",
    "Neighborhood": "Lennox",
    "Address": "10217 S. Inglewood Ave, Lennox, CA 90304",
    "Website": "",
    "Email": "",
    "Phone": "310-672-2208",
    "Hours of Operation": "Weekdays 8:30 am –12:00 pm, 1:00 – 5:00 pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "Adult and Youth",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "US Veterans Initiative (Inglewood)",
    "Service Planning/Geographic Area": "SPA 8 - South Bay",
    "Operator": "U.S. Vets of America",
    "Neighborhood": "Inglewood",
    "Address": "733 Hindry Ave, Inglewood, CA 90301 ",
    "Website": "",
    "Email": "",
    "Phone": "310-863-5837",
    "Hours of Operation": "Monday-Thursday, 8:30 am – 3:00 pm\u000bFriday: 8:30 am – 12:00 pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "Veterans",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "US Veterans Initiative (Long Beach)",
    "Service Planning/Geographic Area": "SPA 8 - South Bay",
    "Operator": "U.S. Vets of America",
    "Neighborhood": "Long Beach",
    "Address": "2001 River Ave, Long Beach, CA  90810",
    "Website": "",
    "Email": "",
    "Phone": "562-200-7300",
    "Hours of Operation": "Weekdays 8:30 am – 5:00 pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "Veterans",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "The Good Seed",
    "Service Planning/Geographic Area": "SPA 8 - South Bay",
    "Operator": "The Good Seed",
    "Neighborhood": "Long Beach",
    "Address": "1230 Pine Ave, Long Beach, CA  90813",
    "Website": "",
    "Email": "",
    "Phone": "855-968-8452",
    "Hours of Operation": "7 Days a Week 9:30 am – 6:30 pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "TAY",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "St. Margaret’s Center",
    "Service Planning/Geographic Area": "SPA 8 - South Bay",
    "Operator": "St. Margaret’s Center",
    "Neighborhood": "Lennox",
    "Address": "10217 S. Inglewood Ave, Lennox, CA 90304",
    "Website": "",
    "Email": "",
    "Phone": "310-672-2208",
    "Hours of Operation": "Weekdays 8:30 am –12:00 pm, 1:00 – 5:00 pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "TAY",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "PATH",
    "Service Planning/Geographic Area": "SPA 7 - South East LA",
    "Operator": "PATH",
    "Neighborhood": "",
    "Address": "",
    "Website": "",
    "Email": "",
    "Phone": "(323) 260-8035",
    "Hours of Operation": "",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "Adult",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Jovenes, Inc.",
    "Service Planning/Geographic Area": "SPA 7 - South East LA",
    "Operator": "Jovenes, Inc.",
    "Neighborhood": "Downtown Los Angeles",
    "Address": "1208 Pleasant Ave, Los Angeles, CA 90033",
    "Website": "",
    "Email": "",
    "Phone": "(323) 260-8035",
    "Hours of Operation": "Weekdays 9:00am - 5:00pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "Youth",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Interim Family Matcher",
    "Service Planning/Geographic Area": "SPA 7 - South East LA",
    "Operator": "The Whole Child",
    "Neighborhood": "Whittier",
    "Address": "10155 Colima Rd., Whittier, CA 90603",
    "Website": "",
    "Email": "",
    "Phone": "(323) 260-8035",
    "Hours of Operation": "Monday-Thursday, 8:00 am – 7:00 pm, Friday: 8:80 am – 5:00 pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "Family",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Valley Oasis",
    "Service Planning/Geographic Area": "SPA 1 - Antelope Valley",
    "Operator": "Valley Oasis",
    "Neighborhood": "Palmdale",
    "Address": "3030 E Palmdale Blvd, Palmdale, CA 93550",
    "Website": "",
    "Email": "",
    "Phone": "(661)945-6736",
    "Hours of Operation": "9:00 am - 5:00 PM Monday through Friday",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "TAY, Family, Adult",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Mental Health America",
    "Service Planning/Geographic Area": "SPA 1 - Antelope Valley",
    "Operator": "Mental Health America",
    "Neighborhood": "Lancaster",
    "Address": "506 W Jackman St, Lancaster, CA 93534",
    "Website": "",
    "Email": "",
    "Phone": "(661) 726-2850",
    "Hours of Operation": "9:00 am - 5:00 PM Monday through Friday",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "TAY, Family, Adult",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Union Station Homeless Services",
    "Service Planning/Geographic Area": "SPA 3 - San Gabriel Valley",
    "Operator": "Union Station Homeless Services",
    "Neighborhood": "Pasadena",
    "Address": "412 S. Raymond Ave Pasadena, CA 91104",
    "Website": "",
    "Email": "",
    "Phone": "626-240-4500",
    "Hours of Operation": "M-F 7:00 am - 1:30pm ",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "Adults , TAY",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Arcadia Mental Health",
    "Service Planning/Geographic Area": "SPA 3 - San Gabriel Valley",
    "Operator": "Arcadia Mental Health",
    "Neighborhood": "Arcadia",
    "Address": "330 E. Love Oak Ave. Arcadia, CA 91006",
    "Website": "",
    "Email": "",
    "Phone": "626-821-5858",
    "Hours of Operation": "Wed 8:00 am - 5:30 pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "Adults",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Volunteers of America- El Monte",
    "Service Planning/Geographic Area": "SPA 3 - San Gabriel Valley",
    "Operator": "Volunteers of America- El Monte",
    "Neighborhood": "El Monte",
    "Address": "4501 Santa Anita Ave El Monte, CA 91737",
    "Website": "",
    "Email": "",
    "Phone": "626-442-4357",
    "Hours of Operation": "M-F 9:00 am -5:00 pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "Adults",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Foothill Unity Center",
    "Service Planning/Geographic Area": "SPA 3 - San Gabriel Valley",
    "Operator": "Foothill Unity Center",
    "Neighborhood": "Monrovia",
    "Address": "415 W. Chestnut Ave Monrovia, CA 91016",
    "Website": "",
    "Email": "",
    "Phone": "626-358-3486",
    "Hours of Operation": "M-F 9am-5pm",
    "Walk-Ins Allowed?": "No",
    "Eligibility Requirements": "Adults",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Friends in Deed",
    "Service Planning/Geographic Area": "SPA 3 - San Gabriel Valley",
    "Operator": "Friends in Deed",
    "Neighborhood": "Pasadena",
    "Address": "444 E. Washington Blvd. Pasadena, CA 91104",
    "Website": "",
    "Email": "",
    "Phone": "626-797-2402",
    "Hours of Operation": "M-W 9am-5pm; Th 9am-2pm",
    "Walk-Ins Allowed?": "No",
    "Eligibility Requirements": "Adults - Females Only",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Volunteers of America- Pomona",
    "Service Planning/Geographic Area": "SPA 3 - San Gabriel Valley",
    "Operator": "Volunteers of America- Pomona",
    "Neighborhood": "Pomona",
    "Address": "2040 N. Garey Ave. Pomona, CA 91767",
    "Website": "",
    "Email": "",
    "Phone": "909-593-4796",
    "Hours of Operation": "M-F 9am-5pm",
    "Walk-Ins Allowed?": "",
    "Eligibility Requirements": "Adults",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "HOPE Center",
    "Service Planning/Geographic Area": "SPA 3 - San Gabriel Valley",
    "Operator": "Pacific Clinics HOPE Center",
    "Neighborhood": "Irindale",
    "Address": "13001 Ramona Blvd Suite I. Irwindale, CA 91706",
    "Website": "",
    "Email": "",
    "Phone": "626-337-3828",
    "Hours of Operation": "M,T,Th 2pm-4pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "TAY",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "David and Margaret ",
    "Service Planning/Geographic Area": "SPA 3 - San Gabriel Valley",
    "Operator": "David and Margaret ",
    "Neighborhood": "La Verne",
    "Address": "1350 3rd St. La Verne, CA 91750",
    "Website": "",
    "Email": "",
    "Phone": "909-267-5961",
    "Hours of Operation": "Monday 9am-5pm",
    "Walk-Ins Allowed?": "",
    "Eligibility Requirements": "TAY",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Hathaway-Sycamore",
    "Service Planning/Geographic Area": "SPA 3 - San Gabriel Valley",
    "Operator": "Hathaway-Sycamore",
    "Neighborhood": "Pasadena",
    "Address": "851 N. Oakland Ave. Pasadena, CA 91104",
    "Website": "",
    "Email": "",
    "Phone": "626-685-2197 x 7856",
    "Hours of Operation": "M-F 9am-5pm",
    "Walk-Ins Allowed?": "",
    "Eligibility Requirements": "TAY",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Hillsides Youth Moving On",
    "Service Planning/Geographic Area": "SPA 3 - San Gabriel Valley",
    "Operator": "Hillsides YMO",
    "Neighborhood": "Pasadena",
    "Address": "456 E. Orange Grove Blvd. Pasadena, CA 91104",
    "Website": "",
    "Email": "",
    "Phone": "626-765-6010",
    "Hours of Operation": "M&F 9am-5pm; T&Th 11:30am-8:00 pm; Wed 11:30 -5:30 pm ",
    "Walk-Ins Allowed?": "",
    "Eligibility Requirements": "TAY",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "DCFS- Pomona",
    "Service Planning/Geographic Area": "SPA 3 - San Gabriel Valley",
    "Operator": "DCFS- Pomona",
    "Neighborhood": "Pomona",
    "Address": "801 Corporate Center Drive. Pomona, CA 91768",
    "Website": "",
    "Email": "",
    "Phone": "909-802-1300",
    "Hours of Operation": "Th 9am - 5pm ",
    "Walk-Ins Allowed?": "",
    "Eligibility Requirements": "TAY",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "SSG HOPICS- SINGLE ADULTS ",
    "Service Planning/Geographic Area": "SPA 6 - Central LA",
    "Operator": "SSG HOPICS",
    "Neighborhood": "South Park",
    "Address": "5715 S Broadway Los Angeles",
    "Website": "ssghopics.org",
    "Email": "",
    "Phone": "",
    "Hours of Operation": "8:00am-5:00pm",
    "Walk-Ins Allowed?": "",
    "Eligibility Requirements": "",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "SSG HOPICS - FSC",
    "Service Planning/Geographic Area": "SPA 6 - Central LA",
    "Operator": "SSG HOPICS",
    "Neighborhood": "South Park",
    "Address": "5849 S Crocker St Los Angeles ",
    "Website": "ssghopics.org",
    "Email": "",
    "Phone": "",
    "Hours of Operation": "8:00am-5:00pm",
    "Walk-Ins Allowed?": "",
    "Eligibility Requirements": "",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "SSG HOPICS- Access Center",
    "Service Planning/Geographic Area": "SPA 6 - Central LA",
    "Operator": "SSG HOPICS",
    "Neighborhood": "Lynwood",
    "Address": "11301 Bullis Rd Lynwood Ca 90262",
    "Website": "ssghopics.org",
    "Email": "",
    "Phone": "",
    "Hours of Operation": "8:00am-5:00pm",
    "Walk-Ins Allowed?": "",
    "Eligibility Requirements": "",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "People Concern",
    "Service Planning/Geographic Area": "SPA 4 - Metro LA",
    "Operator": "People Concern",
    "Neighborhood": "Downtown Los Angeles",
    "Address": "527 Crocker Street, Los Angeles",
    "Website": "",
    "Email": "",
    "Phone": "",
    "Hours of Operation": "8:00am-5:00pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "TAY, Family, Adult",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "LALGBT Center",
    "Service Planning/Geographic Area": "SPA 4 - Metro LA",
    "Operator": "LALGBT Center",
    "Neighborhood": "Hollywood",
    "Address": "1220 N Highland Ave Los Angeles",
    "Website": "",
    "Email": "",
    "Phone": "",
    "Hours of Operation": "8:00am-5:00pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "TAY",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "Jovenes, Inc.",
    "Service Planning/Geographic Area": "SPA 4 - Metro LA",
    "Operator": "Jovenes, Inc.",
    "Neighborhood": "Downtown Los Angeles",
    "Address": "1208 Pleasant Ave, Los Angeles, CA 90033",
    "Website": "",
    "Email": "",
    "Phone": "",
    "Hours of Operation": "8:00am-5:00pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "TAY",
    "Notes ": ""
  },
  {
    "Updated by SPA Leadership ": "",
    "Program Name": "PATH",
    "Service Planning/Geographic Area": "SPA 4 - Metro LA",
    "Operator": "PATH",
    "Neighborhood": "Rampart Village",
    "Address": "340 N Madison Ave, Los Angeles",
    "Website": "",
    "Email": "",
    "Phone": "",
    "Hours of Operation": "8:00am-5:00pm",
    "Walk-Ins Allowed?": "Yes",
    "Eligibility Requirements": "TAY, Family, Adult",
    "Notes ": ""
}
]
]