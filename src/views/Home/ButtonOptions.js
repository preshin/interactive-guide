import { Button, Col, Row } from "antd";
import React from "react";

function ButtonOptions({ buttonList, pageId, onClick }) {
  return (
    <Row gutter={16} className="text-center justify-center">
      {(buttonList ?? []).map(({ display, nextPage }) => (
        <Col className="gutter-row pb-6" xs={24} md={8} key={nextPage}>
          <Button
            size="large"
            className="bg-transparent rounded-lg border border-black h-14 w-full whitespace-normal"
            onClick={() =>
              onClick({
                nextPageId: nextPage,
                currentPageId: pageId,
                display,
              })
            }
          >
            {display}
          </Button>
        </Col>
      ))}
    </Row>
  );
}

export default ButtonOptions;
