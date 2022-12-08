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
                <input type="text" id="name" />
              </div>
              <Spacer />
              <div className="field-group">
                <label htmlFor="participation" className="input-labels">
                  Participation
                </label>
                <br />
                <input type="text" id="participation" />
              </div>
              <Spacer />
            </Flex>
            <div className="edit-desc">
              <label htmlFor="add-new-desc" className="input-labels">
                Add new description
              </label>
              <br />
              <Textarea id="add-new-desc" />
            </div>
            <Flex className="edit-first-row">
              <Spacer />
              <div className="field-group">
                <label htmlFor="reg-start" className="input-labels">
                  Registration Start
                </label>
                <br />
                <input type="date" id="reg-start" />
              </div>
              <Spacer />
              <div className="field-group">
                <label htmlFor="reg-end" className="input-labels">
                  Registration End
                </label>
                <br />
                <input type="date" id="reg-end" />
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
                <input type="date" id="ev-start" />
              </div>
              <Spacer />
              <div className="field-group">
                <label htmlFor="ev-end" className="input-labels">
                  Event End
                </label>
                <br />
                <input type="date" id="ev-end" />
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
                <input type="text" id="reg-fee" />
              </div>
              <Spacer />
            </Flex>
            <Button>Confirm</Button>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Edit;
