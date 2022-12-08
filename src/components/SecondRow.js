import React from "react";
import { HStack, Text, Flex, Spacer } from "@chakra-ui/react";
import "../App.css";
import { CiFilter } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SecondRow = () => {
  const navigate = useNavigate();
  const handleAdd = () => navigate("/edit");

  return (
    <Flex className="second-row">
      <button className="third-row-buttons">
        <HStack alignItems="center" className="events-workshops-filter">
          <CiFilter color="#FFFFFF" size="2rem" />
          <Text className="main-filter-text">Events</Text>
        </HStack>
      </button>
      <Spacer />
      <button onClick={handleAdd} className="third-row-buttons">
        <HStack alignItems="center" className="add-event-container">
          <AiOutlinePlus color="#000000" size="2rem" />
          <Text className="add-event">Add Event</Text>
        </HStack>
      </button>
    </Flex>
  );
};

export default SecondRow;
