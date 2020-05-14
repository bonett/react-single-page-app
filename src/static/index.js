export default {
    findCE: "Find CE for a",
    sortedBy: "Sorted by: ",
    filters: {
        byCourse: [
            {
                id: 0,
                title: "Course type",
                inputs: [
                    {
                        name: "Self placed",
                        value: "ANYPLACE"
                    },
                    {
                        name: "Live",
                        value: "LI"
                    }
                ]
            }
        ],
        byDelivery: [
            {
                id: 0,
                title: "Delivery type",
                inputs: [
                    {
                        name: "Any delivery type",
                        value: "ANY"
                    },
                    {
                        name: "Computer-Based Training",
                        value: "CBT"
                    },
                    {
                        name: "Correspondence",
                        value: "CO"
                    },
                    {
                        name: "Mailed Material",
                        value: "MM"
                    }
                ]
            }
        ],
        bySubject: [
            {
                id: 0,
                title: "Subject area",
                inputs: [
                    {
                        name: "Any subject area",
                        value: "ANYSUB"
                    },
                    {
                        name: "HIV/AIDS",
                        value: "HA"
                    },
                    {
                        name: "End-of-life Care and Palliative Health Care",
                        value: "EN"
                    },
                    {
                        name: "Mailed Material",
                        value: "Domestic Violence"
                    }
                ]
            }
        ]
    },
    navbarItem: [
        {
            path: "/features",
            name: "Features",
            isDropdown: false
        },
        {
            path: "/plans",
            name: "Plans",
            isDropdown: false
        },
        {
            path: "",
            name: "Organizations",
            isDropdown: true,
            navDropdown: [
                {
                    name: "Action"
                },
                {
                    name: "Another action"
                }
            ]
        },
        {
            path: "/",
            name: "Browse courses"
        },
        {
            path: "/support",
            name: "Support"
        },
    ],
    roles: [
        {
            "name": "Medical Doctor",
            "value": "36"
        },
    ],
    sort: [
        {
            "name": "Relevance",
            "value": "RELEVANCE"
        }
    ],
    states: [
        {
            "name": "Alabama",
            "value": "AL"
        },
        {
            "name": "Alaska",
            "value": "AK"
        },
        {
            "name": "American Samoa",
            "value": "AS"
        },
        {
            "name": "Arizona",
            "value": "AZ"
        },
        {
            "name": "Arkansas",
            "value": "AR"
        },
        {
            "name": "California",
            "value": "CA"
        },
        {
            "name": "Colorado",
            "value": "CO"
        },
        {
            "name": "Connecticut",
            "value": "CT"
        },
        {
            "name": "Delaware",
            "value": "DE"
        },
        {
            "name": "District Of Columbia",
            "value": "DC"
        },
        {
            "name": "Federated States Of Micronesia",
            "value": "FM"
        },
        {
            "name": "Florida",
            "value": "FL"
        },
        {
            "name": "Georgia",
            "value": "GA"
        },
        {
            "name": "Guam",
            "value": "GU"
        },
        {
            "name": "Hawaii",
            "value": "HI"
        },
        {
            "name": "Idaho",
            "value": "ID"
        },
        {
            "name": "Illinois",
            "value": "IL"
        },
        {
            "name": "Indiana",
            "value": "IN"
        },
        {
            "name": "Iowa",
            "value": "IA"
        },
        {
            "name": "Kansas",
            "value": "KS"
        },
        {
            "name": "Kentucky",
            "value": "KY"
        },
        {
            "name": "Louisiana",
            "value": "LA"
        },
        {
            "name": "Maine",
            "value": "ME"
        },
        {
            "name": "Marshall Islands",
            "value": "MH"
        },
        {
            "name": "Maryland",
            "value": "MD"
        },
        {
            "name": "Massachusetts",
            "value": "MA"
        },
        {
            "name": "Michigan",
            "value": "MI"
        },
        {
            "name": "Minnesota",
            "value": "MN"
        },
        {
            "name": "Mississippi",
            "value": "MS"
        },
        {
            "name": "Missouri",
            "value": "MO"
        },
        {
            "name": "Montana",
            "value": "MT"
        },
        {
            "name": "Nebraska",
            "value": "NE"
        },
        {
            "name": "Nevada",
            "value": "NV"
        },
        {
            "name": "New Hampshire",
            "value": "NH"
        },
        {
            "name": "New Jersey",
            "value": "NJ"
        },
        {
            "name": "New Mexico",
            "value": "NM"
        },
        {
            "name": "New York",
            "value": "NY"
        },
        {
            "name": "North Carolina",
            "value": "NC"
        },
        {
            "name": "North Dakota",
            "value": "ND"
        },
        {
            "name": "Northern Mariana Islands",
            "value": "MP"
        },
        {
            "name": "Ohio",
            "value": "OH"
        },
        {
            "name": "Oklahoma",
            "value": "OK"
        },
        {
            "name": "Oregon",
            "value": "OR"
        },
        {
            "name": "Palau",
            "value": "PW"
        },
        {
            "name": "Pennsylvania",
            "value": "PA"
        },
        {
            "name": "Puerto Rico",
            "value": "PR"
        },
        {
            "name": "Rhode Island",
            "value": "RI"
        },
        {
            "name": "South Carolina",
            "value": "SC"
        },
        {
            "name": "South Dakota",
            "value": "SD"
        },
        {
            "name": "Tennessee",
            "value": "TN"
        },
        {
            "name": "Texas",
            "value": "TX"
        },
        {
            "name": "Utah",
            "value": "UT"
        },
        {
            "name": "Vermont",
            "value": "VT"
        },
        {
            "name": "Virgin Islands",
            "value": "VI"
        },
        {
            "name": "Virginia",
            "value": "VA"
        },
        {
            "name": "Washington",
            "value": "WA"
        },
        {
            "name": "West Virginia",
            "value": "WV"
        },
        {
            "name": "Wisconsin",
            "value": "WI"
        },
        {
            "name": "Wyoming",
            "value": "WY"
        }
    ]
}