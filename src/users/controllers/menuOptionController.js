const constants = require("../../common/constants");
const { v4 } = require('uuid');


const tabsData = [
    {
      tabId: v4(),
      enrollPlans: [],
      slug: "/home",
      tabOrder: 1,
      tabName: "Home"
    },
    {
      tabId: v4(),
      enrollPlans: [],
      slug: "/projects",
      tabOrder: 2,
      tabName: "Projects"
    },
    {
      tabId: v4(),
      enrollPlans: [],
      slug: "/all-courses",
      tabOrder: 3,
      tabName: "All Courses"
    },
    {
      tabId: v4(),
      enrollPlans: [],
      slug: "/bookmarks",
      tabOrder: 4,
      tabName: "Bookmarks"
    },
    {
      tabId: v4(),
      enrollPlans: [],
      slug: "/code-playground",
      tabOrder: 5,
      tabName: "Code Playground"
    },
    {
      tabId: v4(),
      enrollPlans: [],
      slug: "/my-learnings",
      tabOrder: 6,
      tabName: "My Learnings"
    },
    {
      tabId: v4(),
      enrollPlans: [],
      slug: "/my-portfolio",
      tabOrder: 7,
      tabName: "My Portfolio"
    },
    // {
    //   tabId: v4(),
    //   enrollPlans: [],
    //   slug: "/my-discussions",
    //   tabOrder: 8,
    //   tabName: "My Discussions"
    // }
  ];

const menuOptionsController = async (req, res) => {
    return res.status(200).send(JSON.stringify(tabsData));
};

module.exports = {
    menuOptionsController
}
  