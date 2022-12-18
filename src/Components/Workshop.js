import React, { useState } from "react";
import {
  ChakraProvider,
  Flex,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import "../App.css";
import bg from "./bg.png";
import SecondRow from "./SecondRoww";
import ThirdRow from "./ThirdRoww";
import CardTemplate from "./CardTemplate";
import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const GET_EVENTS = gql`
  query GetEvents($filter: String) {
    getEvents(filter: $filter) {
      events {
        name
        id
        description
        vertical
        pic
      }
    }
  }
`;

function Workshops() {
  const [search, setSearch] = useState("");
  var { isOpen, onOpen, onClose } = useDisclosure();
  const vertical = "WORKSHOPS";
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState(false);
  const [buttonText, setButtonText] = useState("AEROFEST");

  const { data, error, loading, refetch } = useQuery(GET_EVENTS, {
    variables: {
      filter: vertical,
    },
  });

  // let searchedEvents = [];

  if (loading) {
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            backgroundColor="rgba(198, 177, 211, 0.8)"
            color="black"
          >
            <ModalHeader>Loading...</ModalHeader>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }
  if (error) {
    onClose = () => {
      window.location.reload();
    };
    return (
      <ChakraProvider>
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backgroundColor="red" color="black">
            <ModalHeader>{error.message}</ModalHeader>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }

  console.log(data);
  let searchedEvents = data.getEvents.events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ChakraProvider>
      <div onLoad={() => refetch({ filter: "WORKSHOPS" })}>
        <Flex
          minWidth="100%"
          backgroundImage={bg}
          backgroundAttachment="fixed"
          flexDirection="column"
        >
          {/* <Navbar /> */}
          <SecondRow />
          <ThirdRow
            search={search}
            setSearch={setSearch}
            filter={filtered}
            setFilter={setFiltered}
            refetch={refetch}
            buttonText={buttonText}
            setButtonText={setButtonText}
          />
          <SimpleGrid className="item-grid" spacing={2}>
            {searchedEvents.map((event, index) => {
              return (
                <div key={index}>
                  <CardTemplate
                    name={event.name}
                    index={index}
                    events={searchedEvents}
                    desc={event.description}
                    id={event.id}
                    pic={event.pic}
                    refetch={refetch}
                    filter={filtered}
                    setFiltered={setFiltered}
                  />
                </div>
              );
            })}
          </SimpleGrid>
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default Workshops;
