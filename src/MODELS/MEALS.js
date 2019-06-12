const meals = [
		{
			PROGRAM_NAME: "Church in the Park- Breakfast",
			SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
			OPERATOR: "First Church of the Nazarene of Pasadena",
			NEIGHBORHOOD: "Pasadena",
			ADDRESS: "275 S Raymond Ave, Pasadena, CA 91105",
			WEBSITE: "https://www.paznaz.org/compassionate-ministries/",
			EMAIL: "info@paznaz.org",
			PHONE: "N/A",
			HOURS_OF_OPERATION: "Sunday: 8:45am - N/A",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "On corner of Del Mar & Fair Oaks. "
		},
		{
			PROGRAM_NAME: "Free Dinner",
			SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
			OPERATOR: "Pasadena Church",
			NEIGHBORHOOD: "Pasadena",
			ADDRESS: "404 E. Washington Blvd Pasadena, CA  91104",
			WEBSITE: "https://www.pasadenachurch.com/home",
			EMAIL: "N/A",
			PHONE: "(626) 794-2951",
			HOURS_OF_OPERATION: "Monday, Wednesday, Friday: 6:00pm-7:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Free Breakfast and Lunch",
			SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
			OPERATOR: "Union Station Homeless Services",
			NEIGHBORHOOD: "Pasadena",
			ADDRESS: "412 S Raymond Ave Pasadena, CA 91105",
			WEBSITE: "https://unionstationhs.org/",
			EMAIL: "info@unionstationhs.org ",
			PHONE: "(626) 240-4550",
			HOURS_OF_OPERATION: "Breakfast: 9:00am-9:30am & Lunch: 12:00pm-12:30pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Christian Food Center",
			SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
			OPERATOR: "N/A",
			NEIGHBORHOOD: "Fashion District",
			ADDRESS: "1101 E Washington Blvd LA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(800) 798-7099",
			HOURS_OF_OPERATION: "N/A",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Downtown Women's Center",
			SERVICE_PLANNING_AREA: "SPA 4 - Metro LA",
			OPERATOR: "Downtown Women's Center",
			NEIGHBORHOOD: "Downtown Los Angeles",
			ADDRESS: "442 S San Pedro St Los Angeles, CA 90011",
			WEBSITE: "https://www.downtownwomenscenter.org",
			EMAIL: "N/A",
			PHONE: "(213) 680-0600",
			HOURS_OF_OPERATION: "Breakfast: 9:00am-9:00am & Lunch: 12:00pm-1:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Good Shepherd (Women Only)",
			SERVICE_PLANNING_AREA: "SPA 4 - Metro LA",
			OPERATOR: "N/A",
			NEIGHBORHOOD: "Historic Filipinotown",
			ADDRESS: "267 Belmont Ave Los Angeles, CA 90026",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(213) 250-5251",
			HOURS_OF_OPERATION: "N/A",
			WALK_INS: "N/A",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Silverlake Church",
			SERVICE_PLANNING_AREA: "SPA 4 - Metro LA",
			OPERATOR: "Silverlake Church",
			NEIGHBORHOOD: "Silverlake",
			ADDRESS: "2930 Hyperion Ave Los Angeles, CA 90027",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(323) 663-3151",
			HOURS_OF_OPERATION: "N/A",
			WALK_INS: "N/A",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Hollywood Pres Children Center",
			SERVICE_PLANNING_AREA: "SPA 4 - Metro LA",
			OPERATOR: "Hippie Kitchen",
			NEIGHBORHOOD: "Hollywood",
			ADDRESS: "1760 N Gower St, Los Angeles, CA 90028",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(323) 463-7161",
			HOURS_OF_OPERATION: "N/A",
			WALK_INS: "N/A",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Hippie Kitchen",
			SERVICE_PLANNING_AREA: "SPA 4 - Metro LA",
			OPERATOR: "N/A",
			NEIGHBORHOOD: "Downtown Los Angeles",
			ADDRESS: "821 E 6th St, Los Angeles, CA 90021",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(213) 614-9615",
			HOURS_OF_OPERATION: "N/A",
			WALK_INS: "N/A",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "St Francis Center",
			SERVICE_PLANNING_AREA: "SPA 4 - Metro LA",
			OPERATOR: "St Francis Church ",
			NEIGHBORHOOD: "University Park",
			ADDRESS: "1835 S Hope St, Los Angeles, CA 90015",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(213) 747-5347",
			HOURS_OF_OPERATION: "N/A",
			WALK_INS: "N/A",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Bread & Roses Cafe",
			SERVICE_PLANNING_AREA: "SPA 4 - Metro LA",
			OPERATOR: "St. Joseph Center's Homeless Service Center",
			NEIGHBORHOOD: "Venice",
			ADDRESS: "663 Rose Ave Los Angeles, CA 90291",
			WEBSITE: "https://stjosephctr.org/program/outreach-engagement/",
			EMAIL: "N/A",
			PHONE: "(310) 399-6878",
			HOURS_OF_OPERATION: "Monday, Tuesday, Thursday: 7:30am-4:30pm & Wednesday: 7:30am-12:00pm & Friday: 7:30am-3:30pm",
			WALK_INS: "No",
			ELIGIBILITY_REQUIREMENTS: "Hot meals by appointment Monday-Friday must make reservation at Homeless Service Center",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Grace Lutheran Church",
			SERVICE_PLANNING_AREA: "SPA 5 - West LA",
			OPERATOR: "Grace Lutheran Church",
			NEIGHBORHOOD: "Culver City",
			ADDRESS: "4427 Overland Ave Culver City, CA 90230",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 559-1027",
			HOURS_OF_OPERATION: "Monday: 4:30pm-N/A",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "The People Concern",
			SERVICE_PLANNING_AREA: "SPA 5 - West LA",
			OPERATOR: "The People Concern",
			NEIGHBORHOOD: "Santa Monica",
			ADDRESS: "503 Olympic Blvd Santa Monica, CA 90401",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 450-4050",
			HOURS_OF_OPERATION: "Monday-Friday: 9:00am-12:00pm & 3:30pm-4:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Safe Place for Youth (Youth Only)",
			SERVICE_PLANNING_AREA: "SPA 5 - West LA",
			OPERATOR: "Safe Place for Youth",
			NEIGHBORHOOD: "Venice",
			ADDRESS: "2469 Lincoln Blvd Los Angeles, CA 90291",
			WEBSITE: "http://www.safeplaceforyouth.org/drop_in",
			EMAIL: "N/A",
			PHONE: "(310) 902-2283",\
			HOURS_OF_OPERATION: "Tuesday, Wednesday, Thursday: 1:00pm-5:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "Ages 16-25 Only",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Catholic Charities",
			SERVICE_PLANNING_AREA: "SPA 5 - West LA",
			OPERATOR: "Catholic Charities",
			NEIGHBORHOOD: "Venice",
			ADDRESS: "211 3rd Ave, Los Angeles, CA 90291",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 392-8701",
			HOURS_OF_OPERATION: "Monday-Friday: 8:30am-5:00pm & Saturday, Sunday: 9:00am-2:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "SSG HOPICS",
			SERVICE_PLANNING_AREA: "SPA 5 - West LA",
			OPERATOR: "SSG HOPICS",
			NEIGHBORHOOD: "South Los Angeles",
			ADDRESS: "5849 CrockerSt Los Angeles, CA 90003",
			WEBSITE: "https://www.hopics.org/",
			EMAIL: "N/A",
			PHONE: "(323) 432-4399",
			HOURS_OF_OPERATION: "N/A",
			WALK_INS: "N/A",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Watts Labor Community Action Commitee ",
			SERVICE_PLANNING_AREA: "SPA 6 - Central LA",
			OPERATOR: "Watts Labor Community Action Committee",
			NEIGHBORHOOD: "Hacienda Village",
			ADDRESS: "958 E 108th Street Los Angeles, CA ",
			WEBSITE: "http://www.wlcac.org/",
			EMAIL: "N/A",
			PHONE: "(323) 563-4721",
			HOURS_OF_OPERATION: "N/A",
			WALK_INS: "N/A",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "St. Lawrence Martyr Catholic Church ",
			SERVICE_PLANNING_AREA: "SPA 6 - Central LA",
			OPERATOR: "St. Lawrence Martyr Catholic Church ",
			NEIGHBORHOOD: "Redondo Beach",
			ADDRESS: "1900 S Prospect Ave., Redondo Bch",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 540-0329 ",
			HOURS_OF_OPERATION: "Monday-Thursday: 8:30am-3:30pm & Friday, Sunday: 8:30am-1:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Beacon Light Mission ",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "Beacon Light Mission ",
			NEIGHBORHOOD: "Wilmington",
			ADDRESS: "525 Broad St, Wilmington, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: " (310) 830-7063 ",
			HOURS_OF_OPERATION: "Monday-Sunday: 5:45pm-N/A",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "Must attend chapel first",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "St. Catherine Laboure Catholic Church ",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "St. Catherine Laboure Catholic Church ",
			NEIGHBORHOOD: "Torrance",
			ADDRESS: "3846 Redondo Bch Blvd, Torrance, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 323-8900 ",
			HOURS_OF_OPERATION: "Monday-Friday: 11:00am-1:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Calvary Hawthorne Presbyterian Church ",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "Calvary Hawthorne Presbyterian Church ",
			NEIGHBORHOOD: "Hawthorne",
			ADDRESS: "13560 Hawthorne Blvd, Hawthorne, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 676-1144",
			HOURS_OF_OPERATION: "Thursday, Friday: 11:00am-2:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Salvation Army",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "Salvation Army",
			NEIGHBORHOOD: "Inglewood",
			ADDRESS: "324 E. Queen St, Inglewood, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 677-3375",
			HOURS_OF_OPERATION: "Monday-Friday: 11:00am-UNKNOWN",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "first 40 ",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "St. James Catholic Church",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "St. James Catholic Church",
			NEIGHBORHOOD: "Redondo Beach",
			ADDRESS: "415 Vincent, Redondo Beach, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 530-2756",
			HOURS_OF_OPERATION: "Monday, Wednesday, Friday: 1:00pm-2:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "St. Margaret’s Center",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "St. Margaret’s Center",
			NEIGHBORHOOD: "Lennox",
			ADDRESS: "10217 Inglewood, Lennox, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 672-2208 ",
			HOURS_OF_OPERATION: "Monday, Wednesday, Friday: 8:30am-12:00pm & 1:00pm-5:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "St. John Evangelical Lutheran Church ",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "St. John Evangelical Lutheran Church ",
			NEIGHBORHOOD: "Gardena",
			ADDRESS: "14517 Crenshaw Blvd, Gardena, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 676-8804 ",
			HOURS_OF_OPERATION: "Monday, Friday: 6:00pm & Sunday: 12:00pm-(UNKNOWN)",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Curt’s Kitchen ",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "Curt’s Kitchen ",
			NEIGHBORHOOD: "San Pedro",
			ADDRESS: "129 North Pacific Ave. San Pedro, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 831-3480 ",
			HOURS_OF_OPERATION: "Monday, Tuesday: 5:30pm-(UNKNOWN)",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "St. Andrew’s Presbyterian Church ",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "St. Andrew’s Presbyterian Church ",
			NEIGHBORHOOD: "Redondo Beach",
			ADDRESS: "301 Avenue D, Redondo Beach, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 540-5252",
			HOURS_OF_OPERATION: "Tuesday, Thursday: 12:00pm-1:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Homeless Resources Fair & Mobile Shower ",
			SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
			OPERATOR: "More Than Just A Meal ",
			NEIGHBORHOOD: "South El Monte",
			ADDRESS: "1201 Loma Ave (Area A, Building 21)\r\rSouth El Monte, California 91733",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "N/A",
			HOURS_OF_OPERATION: "Thursday: 11:00am-3:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "St. Paul’s United Methodist (Proj. Needs) ",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "St. Paul’s United Methodist (Proj. Needs) ",
			NEIGHBORHOOD: "Redondo Beach",
			ADDRESS: "2600 Nelson, Redondo Beach, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 370-4319 ",
			HOURS_OF_OPERATION: "Tuesday: 6:00pm-7:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Calvary Light Christian Center ",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "Calvary Light Christian Center ",
			NEIGHBORHOOD: "Wilmington",
			ADDRESS: "1101 N. Lakme Ave, Wilmington, ",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: " (310) 830-3043 ",
			HOURS_OF_OPERATION: "Wednesday: 12:00pm-(UNKNOWN)",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "First United Methodist Church (Shared Bread) ",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "First United Methodist Church (Shared Bread) ",
			NEIGHBORHOOD: "Redondo Beach",
			ADDRESS: "243 S. Broadway, Redondo Bch, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: " (310) 372-8445 ",
			HOURS_OF_OPERATION: "Wednesday: 5:00pm-7:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "First Baptist Church ",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "First Baptist Church ",
			NEIGHBORHOOD: "San Pedro",
			ADDRESS: "555 W. 7th St, San Pedro, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: " (310) 548-1333 ",
			HOURS_OF_OPERATION: "Thur. 6pm, Sun 8am",
			HOURS_OF_OPERATION: "Thursday: 6:00pm-(UNKNOWN) & Sunday: 8:00am-(UNKNOWN)",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Journey South Bay Community Church ",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "Journey South Bay Community Church ",
			NEIGHBORHOOD: "Redondo Beach",
			ADDRESS: "2761 190th St., Redondo Beach, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 371-0411 ",
			HOURS_OF_OPERATION: "Thursday: 6:00pm-(UNKNOWN)",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Torrance First Baptist Church ",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "Torrance First Baptist Church ",
			NEIGHBORHOOD: "Torrance",
			ADDRESS: "2118 W. Carson, Torrance, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 328-5030",
			HOURS_OF_OPERATION: "1st Saturday of every Month: 11:00am-1:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Walteria United Methodist Church",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "Walteria United Methodist Church",
			NEIGHBORHOOD: "Torrance",
			ADDRESS: "3646 Newton St., Torrance, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 375-0622 ",
			HOURS_OF_OPERATION: "2nd Saturday of every Month: 11:00am-1:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "St. Andrew’s Episcopal Church ",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "St. Andrew’s Episcopal Church ",
			NEIGHBORHOOD: "Torrance",
			ADDRESS: "1432 Engracia, Torrance, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 328-3781",
			HOURS_OF_OPERATION: "3rd Saturday of every Month: 11:00am-1:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "First United Methodist Church",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "First United Methodist Church",
			NEIGHBORHOOD: "Torrance",
			ADDRESS: "1551 El Prado, Torrance, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 328-3242 ",
			HOURS_OF_OPERATION: "4th Saturday of every MOnth: 11:00am-1:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Riviera United Methodist Church ",
			SERVICE_PLANNING_AREA: "SPA 8 - South Bay",
			OPERATOR: "Riviera United Methodist Church ",
			NEIGHBORHOOD: "Redondo Beach",
			ADDRESS: "375 Palos Verdes Blvd., Redondo Bch, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(310) 378-9273",
			HOURS_OF_OPERATION: "Last Saturday of every Month: 11:00am-1:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Meal",
			SERVICE_PLANNING_AREA: "SPA 7 - South East LA",
			OPERATOR: "Bethany Church",
			NEIGHBORHOOD: "Bellflower",
			ADDRESS: "17054 Bixby Ave, Bellflower, CA ",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(562) 866-1812",
			HOURS_OF_OPERATION: "Wednesday: 4:15:pm-5:15pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Breakfast and Lunch",
			SERVICE_PLANNING_AREA: "SPA 7 - South East LA",
			OPERATOR: "Journey of Faith",
			NEIGHBORHOOD: "Bellflower",
			ADDRESS: "17456 Downey Ave., Bellflower, CA ",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(562) 634-2910",
			HOURS_OF_OPERATION: "Saturday: 9:30am-12:00pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Breakfast",
			SERVICE_PLANNING_AREA: "SPA 7 - South East LA",
			OPERATOR: "Calvary Baptist Church",
			NEIGHBORHOOD: "Bellflower",
			ADDRESS: "14722 Clark Ave., Bellflower, CA ",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(562) 925-3706",
			HOURS_OF_OPERATION: "Saturday: 8:00am-9:00am",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Meals",
			SERVICE_PLANNING_AREA: "SPA 7 - South East LA",
			OPERATOR: "Life Center Church",
			NEIGHBORHOOD: "Lakewood",
			ADDRESS: "6022 Candlewood St, Lakewood, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(562) 866-9078",
			HOURS_OF_OPERATION: "3rd Saturday of every Month: Time is UNKNOWN.",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Meals",
			SERVICE_PLANNING_AREA: "SPA 7 - South East LA",
			OPERATOR: "SSS Good Samaritan Association",
			NEIGHBORHOOD: "Lakewood",
			ADDRESS: "5035 Hedda St, Lakewood, CA",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(562) 619-0467",
			HOURS_OF_OPERATION: "4th Saturday of every Month: 8:00am-10:00am",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Meals",
			SERVICE_PLANNING_AREA: "SPA 7 - South East LA",
			OPERATOR: "Cerritos Crossroads Multinational Church",
			NEIGHBORHOOD: "Cerritos",
			ADDRESS: "12229 Del Amo Blvd, Cerritos, CA 90703",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(562) 809-4143",
			HOURS_OF_OPERATION: "Friday: 8:30am-9:30am & Sunday: 8:45pm-9:30pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Meals",
			SERVICE_PLANNING_AREA: "SPA 7 - South East LA",
			OPERATOR: "St. Paul on the Cross Catholic Church",
			NEIGHBORHOOD: "La Mirada",
			ADDRESS: "14020 Foster Rd, La Mirada, CA 90638",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(562) 921-2914",
			HOURS_OF_OPERATION: "Tuesdays: 9:30am-(UNKNOWN)",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Meals",
			SERVICE_PLANNING_AREA: "SPA 7 - South East LA",
			OPERATOR: "Saint Matthias Church Soup Kitchen",
			NEIGHBORHOOD: "Wittier",
			ADDRESS: "7056 Washington Ave, Whittier, CA 90602",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(562) 698-4347",
			HOURS_OF_OPERATION: "Monday-Friday: 3:00pm-(UNKNOWN)",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Meals",
			SERVICE_PLANNING_AREA: "SPA 7 - South East LA",
			OPERATOR: "Parroquia Sargrada Church",
			NEIGHBORHOOD: "Huntington Park",
			ADDRESS: "6401 Rugby Ave, Huntington Park, CA ",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "N/A",
			HOURS_OF_OPERATION: "Monday-Friday: 9:00am-2:00PM",
			WALK_INS: "N/A",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Meals and clothing ",
			SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
			OPERATOR: "Purpose Church",
			NEIGHBORHOOD: "Pomona",
			ADDRESS: "586 N. Main St. \r\rPomona, CA 91768",
			WEBSITE: "https://purposechurch.com/localimpact/",
			EMAIL: "N/A",
			PHONE: "(909) 629-5277 x 3014",
			HOURS_OF_OPERATION: "3rd Saturday of every Month: Time is UNKNOWN",
			WALK_INS: "N/A",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Helping Hands Caring\r\rHearts Ministry ",
			SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
			OPERATOR: "New Harvest Church \r",
			NEIGHBORHOOD: "Pomona",
			ADDRESS: "480 W. Monterey St.\r\rPomona, Ca.",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "N/A",
			HOURS_OF_OPERATION: "Sunday Dinner: 3:30pm-5:30pm",
			WALK_INS: "Yes",
			ELIGIBILITY_REQUIREMENTS: "N/A",
			NOTES: "N/A"
		},
		{
			PROGRAM_NAME: "Meals for those in Motels",
			SERVICE_PLANNING_AREA: "SPA 3 - San Gabriel Valley",
			OPERATOR: "Inter City Volunteers ",
			NEIGHBORHOOD: "Pomona",
			ADDRESS: "P.O. Box 209\r\rPomona, CA 91769",
			WEBSITE: "N/A",
			EMAIL: "N/A",
			PHONE: "(909) 865-8853 ",
			HOURS_OF_OPERATION: "Tuesday-Friday: 9:00am-5:30pm",
			WALK_INS: "No",
			ELIGIBILITY_REQUIREMENTS: "Provides hot meals to homeless individuals and families living in motels",
			NOTES: "N/A"
		}
]

