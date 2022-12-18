import React, { useState } from "react";
import {
  Box,
  HStack,
  Text,
  Flex,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import "../App.css";
import { AiOutlineSearch } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";

const ThirdRow = ({
  search,
  setSearch,
  filter,
  setFilter,
  refetch,
  buttonText,
  setButtonText,
  subbuttonText,
  setsubButtonText,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("AEROFEST");

  const handleClose = async (e) => {
    e.preventDefault();
    console.log(value);
    await refetch({ filter: value })
      .then(() => onClose())
      .then(() => setsubButtonText("Events"));
  };

  return (
    <Box className="third-row">
      <Flex className="search-container">
        <AiOutlineSearch size="2rem" />
        <input
          type="text"
          id="search"
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Spacer />
      </Flex>
    </Box>
  );
};

export default ThirdRow;
