import React from "react";
import { Image, Text, Button, Flex, Spacer, Box } from "@chakra-ui/react";
import "../App.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const CardTemplate = ({ name, index, events, setEvents }) => {
  const handleDelete = () => {
    events.splice(index, 1);
    setEvents(events);
  };

  return (
    <div className="card">
      <div className="card-header">
        <Text className="card-heading-text">{name}</Text>
      </div>
      <div className="card-body">
        <Image
          width="100%"
          alt="event_img"
          objectFit="contain"
          src={require("./cardimg.png")}
        />
        <Text className="card-body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis
          augue mi, sit amet tempor velit gravida sed. Integer bibendum arcu
          vitae nulla finibus hendrerit. Duis venenatis vitae augue non
          accumsan. Proin luctus mollis sollicitudin. Donec fermentum ante in
          ligula cursus molestie.
        </Text>
      </div>
      <Flex className="card-footer">
        <Spacer />
        <Box>
          <Button>
            <AiFillEdit size="1.3rem" />
            <Text className="button-text">Edit</Text>
          </Button>
        </Box>
        <Spacer />
        <Box>
          <Button onClick={handleDelete}>
            <AiFillDelete size="1.3rem" />
            <Text className="button-text">Delete</Text>
          </Button>
        </Box>
        <Spacer />
      </Flex>
    </div>
  );
};

export default CardTemplate;
