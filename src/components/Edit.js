import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import {
  Button,
  ChakraProvider,
  Flex,
  Spacer,
  Textarea,
} from "@chakra-ui/react";

const Edit = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(require("./cardimg.png"));
  const [initial, setInitial] = useState(true);
  const [event, setEvent] = useState({
    name: "",
    participation: "",
    desc: "",
    regStart: "",
    regEnd: "",
    evStart: "",
    evEnd: "",
    fee: "",
  });

  useEffect(() => {
    if (selectedImage) {
      setInitial(false);
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
  return (
    <ChakraProvider>
      <div className="edit-page-main-container">
        <div className="heading">Add Event</div>
        <div className="fields-container">
          <div className="container-right">
            {imageUrl && selectedImage && (
              <div className="image-container">
                <div className="image-preview">Image Preview:</div>
                <img src={imageUrl} alt={selectedImage.name} width="90%" />
              </div>
            )}
            {initial ? (
              <div className="image-container">
                <div className="image-preview">Image Preview:</div>
                <img src={imageUrl} width="90%" alt="profile" />
              </div>
            ) : null}
            <div className="select-image">
              <input
                accept="image/*"
                type="file"
                id="select-image"
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
              <br />
              <Button>Upload Image</Button>
            </div>
          </div>
          <div className="container-left">
            <Flex className="edit-first-row">
              <Spacer />
              <div className="field-group">
                <label htmlFor="name" className="input-labels">
                  Add new name
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  value={event.name}
                  onChange={(e) => setEvent({ ...event, name: e.target.value })}
                />
              </div>
              <Spacer />
              <div className="field-group">
                <label htmlFor="participation" className="input-labels">
                  Participation
                </label>
                <br />
                <input
                  type="text"
                  id="participation"
                  value={event.participation}
                  onChange={(e) =>
                    setEvent({ ...event, participation: e.target.value })
                  }
                />
              </div>
              <Spacer />
            </Flex>
            <div className="edit-desc">
              <label htmlFor="add-new-desc" className="input-labels">
                Add new description
              </label>
              <br />
              <Textarea
                id="add-new-desc"
                value={event.desc}
                onChange={(e) => setEvent({ ...event, desc: e.target.value })}
              />
            </div>
            <Flex className="edit-first-row">
              <Spacer />
              <div className="field-group">
                <label htmlFor="reg-start" className="input-labels">
                  Registration Start
                </label>
                <br />
                <input
                  type="date"
                  id="reg-start"
                  value={event.regStart}
                  onChange={(e) =>
                    setEvent({ ...event, regStart: e.target.value })
                  }
                />
              </div>
              <Spacer />
              <div className="field-group">
                <label htmlFor="reg-end" className="input-labels">
                  Registration End
                </label>
                <br />
                <input
                  type="date"
                  id="reg-end"
                  value={event.regEnd}
                  onChange={(e) =>
                    setEvent({ ...event, regEnd: e.target.value })
                  }
                />
              </div>
              <Spacer />
            </Flex>
            <Flex className="edit-first-row">
              <Spacer />
              <div className="field-group">
                <label htmlFor="ev-start" className="input-labels">
                  Event Start
                </label>
                <br />
                <input
                  type="date"
                  id="ev-start"
                  value={event.evStart}
                  onChange={(e) =>
                    setEvent({ ...event, evStart: e.target.value })
                  }
                />
              </div>
              <Spacer />
              <div className="field-group">
                <label htmlFor="ev-end" className="input-labels">
                  Event End
                </label>
                <br />
                <input
                  type="date"
                  id="ev-end"
                  value={event.evEnd}
                  onChange={(e) =>
                    setEvent({ ...event, evEnd: e.target.value })
                  }
                />
              </div>
              <Spacer />
            </Flex>
            <Flex className="edit-first-row">
              <Spacer />
              <div className="field-group-fee">
                <label htmlFor="reg-fee" className="input-labels">
                  Registration Fee
                </label>
                <br />
                <input
                  type="text"
                  id="reg-fee"
                  value={event.fee}
                  onChange={(e) => setEvent({ ...event, fee: e.target.value })}
                />
              </div>
              <Spacer />
            </Flex>
            <Button onClick={() => console.log(event)}>Confirm</Button>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Edit;
