export default {
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
    ]
}