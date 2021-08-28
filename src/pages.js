const commonQuestionAndAnswers1 = {
  question:
    "Thank you for the information.Please select the issue you are experiencing with your iPhone.",
  answers: [
    {
      nextPage: "runningSlowlyPage",
      display: "iPhone is running slowly",
    },
    {
      nextPage: "notConnectToWifiPage",
      display: "iPhone does not connect to Wi-Fi",
    },
  ],
};

const pageData = {
  homePage: {
    pageId: "homePage",
    title: [
      "Welcome to SkyCom's iPhone Troubleshooting",
      "To begin we will need the correct model you are using?",
    ],
    question: "",
    answers: [
      {
        nextPage: "iphone12Page",
        display: "iPhone 12",
      },
      {
        nextPage: "iphone11Page",
        display: "iPhone 11",
      },
    ],
  },

  iphone12Page: {
    pageId: "iphone12Page",
    title: null,
    ...commonQuestionAndAnswers1,
  },

  iphone11Page: {
    pageId: "iphone11Page",
    title: null,
    ...commonQuestionAndAnswers1,
  },

  runningSlowlyPage: {
    pageId: "runningSlowlyPage",
    title: [
      "First, please do the following: Clear your phone's browser cache.",
      "How do I clear my cache?",
      "Go to **Settings** > **Safari** > **Clear History and Website Data**. If you just want to clear the website data collected, you’ll need to tap **Settings** > **Safari** > **Advanced** > **Website Data** > **Remove all website data**.",
    ],
    question: "Did that resolve the issue?",
    answers: [
      {
        nextPage: "resolvedPage",
        display: "Yes",
      },
      {
        nextPage: "notResolvedPage",
        display: "No",
      },
    ],
  },

  notConnectToWifiPage: {
    pageId: "notConnectToWifiPage",
    title: [
      "First, please do the following: Clear your phone's browser cache.",
      "**How do I clear my cache?**",
      "Go to **Settings** > **Safari** > **Clear History and Website Data**. If you just want to clear the website data collected, you’ll need to tap **Settings** > **Safari** > **Advanced** > **Website Data** > **Remove all website data**.",
    ],
    question: "Did that resolve the issue?",
    answers: [
      {
        nextPage: "resolvedPage",
        display: "Yes",
      },
      {
        nextPage: "updatePhoneOsPage",
        display: "No",
      },
    ],
  },

  updatePhoneOsPage: {
    pageId: "updatePhoneOsPage",
    title: [
      "Next: **Update your phone's OS.**",
      "**How do I update OS?**",
      "Make sure your phone is plugged in for charging and is connected to WiFi.",
      "Go to **Settings** > **General** > **Software Update**.",
    ],
    question: "Does that resolve the issue?",
    answers: [
      {
        nextPage: "resolvedPage",
        display: "Yes",
      },
      {
        nextPage: "notResolvedPage",
        display: "No",
      },
    ],
  },

  resolvedPage: {
    pageId: "resolvedPage",
    title: ["That's great. We're glad that resolved your issue."],
    question: null,
    answers: [
      {
        nextPage: "homePage",
        display: "Done",
      },
    ],
  },

  notResolvedPage: {
    pageId: "notResolvedPage",
    title: null,
    question: null,
    answers: [
      {
        nextPage: "openCasePage",
        display: "Open a Case",
      },
    ],
  },

  openCasePage: {
    pageId: "openCasePage",
    title: null,
    question: null,
    answers: null,
  },
};

export default pageData;
