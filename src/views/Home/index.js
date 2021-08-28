import { Button, Col, Row } from "antd";
import React from "react";
import AppContext from "../../context/AppContext";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import UserForm from "./UserForm";
import ButtonOptions from "./ButtonOptions";

function Home() {
  return (
    <AppContext.Consumer>
      {({ goToNextPage, history, goToPrevPage }) => {
        const { pageId, title, question, answers } =
          history[history.length - 1];
        return (
          <>
            {history.length > 1 && (
              <Row className="p-5 border-b border-gray-300">
                <Col span={12}>
                  <Button
                    className="bg-transparent border-none shadow-none"
                    onClick={() => goToPrevPage()}
                    icon={<ArrowLeftOutlined className="relative -top-0.5" />}
                  >
                    Back
                  </Button>
                </Col>
              </Row>
            )}
            {pageId !== "openCasePage" && (
              <Row justify="center" className="p-5">
                <Col xs={0} md={4}></Col>
                <Col xs={24} md={16}>
                  <Row>
                    <Col span={24}></Col>
                    <Col span={24}>
                      {title && (
                        <div>
                          {title.map((t) => (
                            <div className="pb-2">
                              <ReactMarkdown
                                className="text-base"
                                key={`title-${t}`}
                                children={t}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      {question && (
                        <p className="text-center text-sm p-5 rounded-lg border border-blue-500 text-blue-500 my-3.5">
                          {question}
                        </p>
                      )}
                    </Col>
                    <Col span={24} className="pt-3">
                      <ButtonOptions
                        buttonList={answers}
                        onClick={({ nextPageId, currentPageId, display }) =>
                          goToNextPage({
                            nextPageId,
                            currentPageId,
                            display,
                          })
                        }
                        pageId={pageId}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs={0} md={4}></Col>
              </Row>
            )}
            {pageId === "openCasePage" && (
              <Row justify="center" className="p-5">
                <Col xs={0} md={4}></Col>
                <Col xs={24} md={16}>
                  <UserForm />
                </Col>
                <Col xs={0} md={4}></Col>
              </Row>
            )}
          </>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Home;
