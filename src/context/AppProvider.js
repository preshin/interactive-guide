import React, { useState } from "react";
import AppContext from "./AppContext";
import pages from "../pages";

function AppProvider(props) {
  const initialState = {
    pages,
    currentPage: pages.homePage,
    currentPageId: pages.homePage.pageId,
    previousPageId: null,
    history: [{ ...pages.homePage, selectedAnswer: null }],
    userIssueInfo: null,
  };

  const [appState, setAppState] = useState({
    ...initialState,
    goToNextPage: ({ nextPageId, currentPageId, display }) => {
      const currentState = appState;
      if (!(nextPageId === "homePage")) {
        currentState.history.push({
          ...pages[nextPageId],
          selectedAnswer: display,
        });
        setAppState({
          ...currentState,
          currentPage: pages[nextPageId],
          currentPageId: nextPageId,
          previousPageId: currentPageId,
        });
      } else {
        currentState.history.length = 1;
        setAppState({
          ...currentState,
          ...initialState,
        });
      }
    },
    goToPrevPage: () => {
      const currentState = appState;
      currentState.history.pop();
      const currentPageId =
        currentState.history[currentState.history.length - 1].pageId;
      const currentPage = pages[currentPageId];
      let previousPageId = null;
      if (currentState.history.length > 1) {
        previousPageId =
          currentState.history[currentState.history.length - 2].pageId;
      } else {
        previousPageId = null;
      }
      setAppState({
        ...currentState,
        currentPage,
        currentPageId,
        previousPageId,
      });
    },

    updateUserIssueInfo: (userIssueInfo) => {
      const currentState = appState;
      setAppState({
        ...currentState,
        userIssueInfo,
      });
    },
  });

  console.log("APP STATE", appState);
  return (
    <AppContext.Provider value={appState}>{props.children}</AppContext.Provider>
  );
}

export default AppProvider;
