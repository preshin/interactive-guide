import { Input, Button, Card } from "antd";
import Modal from "antd/lib/modal/Modal";
import { Fragment, useState } from "react";
import AppContext from "../../context/AppContext";
import { validateEmail } from "../../helpers/utils";

const UserForm = ({ handleOk }) => {
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const formItems = [
    {
      id: "name",
      label: "Name",
    },

    {
      id: "email",
      label: "Email",
    },

    {
      id: "subject",
      label: "Subject",
    },

    {
      id: "description",
      label: "Description",
    },
  ];

  return (
    <AppContext.Consumer>
      {({ goToNextPage, updateUserIssueInfo, history, ...contextProps }) => {
        const { pageId } = history[history.length - 1];

        const onHandleSubmit = () => {
          setOpenModal(true);
          updateUserIssueInfo(formData);
        };

        return (
          <>
            <Card>
              {formItems.map(({ label, id }) => (
                <Fragment key={id}>
                  <label>{`${label}:`}</label>
                  {id !== "description" && (
                    <Input
                      className="mt-2 mb-2"
                      placeholder={`Enter ${label}`}
                      value={formData[id]}
                      type={id === "email" ? "email" : "text"}
                      onChange={(event) =>
                        setFormData({ ...formData, [id]: event.target.value })
                      }
                    />
                  )}
                  {id === "description" && (
                    <Input.TextArea
                      className="mt-2 mb-2"
                      placeholder={`Enter ${label}`}
                      value={formData[id]}
                      type="text"
                      onChange={(event) =>
                        setFormData({ ...formData, [id]: event.target.value })
                      }
                    />
                  )}
                  {id === "email" &&
                    formData.email.length !== 0 &&
                    !validateEmail(formData.email) && (
                      <p className="text-red-500 pt-1">Enter valid Email</p>
                    )}
                </Fragment>
              ))}
              <Button
                className="mt-3"
                type="primary"
                onClick={onHandleSubmit}
                disabled={
                  formData.name.length === 0 ||
                  formData.email.length === 0 ||
                  !validateEmail(formData.email) ||
                  formData.subject.length === 0 ||
                  formData.description.length === 0
                }
              >
                Submit
              </Button>
            </Card>
            <Modal
              title="Received"
              visible={openModal}
              onOk={handleOk}
              onCancel={null}
              closable={false}
              footer={[
                <Button
                  key="submit"
                  type="primary"
                  onClick={() => {
                    goToNextPage({
                      nextPageId: "homePage",
                      currentPageId: pageId,
                      display: "Submitted",
                    });
                    setOpenModal(false);
                  }}
                >
                  Okay
                </Button>,
              ]}
            >
              <p className="text-base">Successfully submitted your issue.</p>
              <p className="text-base">
                Someone from our team will contact you.
              </p>
            </Modal>
          </>
        );
      }}
    </AppContext.Consumer>
  );
};

export default UserForm;
