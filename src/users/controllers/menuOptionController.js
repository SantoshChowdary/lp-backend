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
      slug: "/other-courses",
      tabOrder: 3,
      tabName: "Other Courses"
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
      slug: "/community",
      tabOrder: 6,
      tabName: "community"
    },
    // {
    //   tabId: v4(),
    //   enrollPlans: [],
    //   slug: "/jobs",
    //   tabOrder: 7,
    //   tabName: "Jobs"
    // },
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
  