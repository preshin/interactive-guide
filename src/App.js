import "./App.css";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Home from "./views/Home";
import { lazy, Suspense, useState } from "react";
import AppContext from "./context/AppContext";
import { Button, Divider, Timeline } from "antd";
import Sidebar from "react-sidebar";
import { CloseOutlined, HistoryOutlined } from "@ant-design/icons";
// import AppProvider from "./context/AppProvider";

const AppProvider = lazy(() => import("./context/AppProvider"));

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <Suspense
      fallback={
        <div>
          <div className="flex justify-center items-center h-screen w-screen">
            Loading...
          </div>
        </div>
      }
    >
      <AppProvider>
        <AppContext.Consumer>
          {({ history }) => {
            return (
              <Sidebar
                sidebar={
                  <div className="w-80">
                    <Button
                      onClick={() => setOpenSideBar(false)}
                      icon={<CloseOutlined className="relative -top-0.5" />}
                      className="mt-3 border-none bg-transparent shadow-none"
                    >
                      Close
                    </Button>
                    <Divider />
                    <div className="px-8 pt-2">
                      <Timeline>
                        {history.slice(1).length !== 0 &&
                          history.slice(1).map(({ selectedAnswer }) => (
                            <Timeline.Item
                              key={`${selectedAnswer}-${Math.random()}`}
                            >
                              <div className="text-sm font-medium">
                                Question
                              </div>
                              <div className="text-sm text-gray-400">
                                {selectedAnswer}
                              </div>
                            </Timeline.Item>
                          ))}
                        {history.slice(1).length === 0 && (
                          <div className="text-sm">No History</div>
                        )}
                      </Timeline>
                    </div>
                  </div>
                }
                open={openSideBar}
                styles={{ sidebar: { background: "white" } }}
                pullRight
                onSetOpen={() => setOpenSideBar(false)}
              >
                <Layout>
                  <Header>
                    <Button
                      className="float-right m-3 relative"
                      onClick={() => setOpenSideBar(true)}
                      icon={<HistoryOutlined className="relative -top-0.5" />}
                    >
                      History
                    </Button>
                  </Header>
                  <Content
                    style={{
                      height: "90vh",
                    }}
                  >
                    <Home />
                  </Content>
                </Layout>
              </Sidebar>
            );
          }}
        </AppContext.Consumer>
      </AppProvider>
    </Suspense>
  );
}

export default App;
