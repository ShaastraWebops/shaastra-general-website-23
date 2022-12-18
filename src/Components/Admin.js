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
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
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

function EditEvents() {
  const [search, setSearch] = useState("");
  var { isOpen, onOpen, onClose } = useDisclosure();
  const vertical = "AEROFEST";
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState(false);
  const [buttonText, setButtonText] = useState("AEROFEST");
  const [eorw, seteorw] = useState("Events");
  // console.log(window.innerWidth);

  // console.log(search, filtered);
  // const [events, setEvents] = useState([
  //   {
  //     name: "Biogen",
  //     status: "completed",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Integer bibendum arcuvitae nulla finibus hendrerit. Duis venenatis vitae augue nonaccumsan. Proin luctus mollis sollicitudin. Donec fermentum ante ligula cursus molestie.",
  //   },
  //   {
  //     name: "Aerofest",
  //     status: "upcoming",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Intege",
  //   },
  //   {
  //     name: "Elecfest",
  //     status: "ongoing",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Integer bibendum arcuvitae nulla finibus hendrerit. Duis venenatis vitae augue nonaccumsan. Proin luctus mollis sollicitudin. Donec fermentum ante ligula cursus molestie.",
  //   },
  //   {
  //     name: "Techfest",
  //     status: "completed",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Integer bibendum arcuvitae nulla finibus hendrerit. Duis venenatis vitae augue nonaccumsan. Proin luctus mollis sollicitudin. Donec fermentum ante ligula cursus molestie.",
  //   },
  //   {
  //     name: "shaastra",
  //     status: "completed",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Integer bibendum arcuvitae nulla finibus hendrerit. Duis venenatis vitae augue nonaccumsan. Proin luctus mollis sollicitudin. Donec fermentum ante ligula cursus molestie.",
  //   },
  //   {
  //     name: "saarang",
  //     status: "upcoming",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Integer bibendum arcuvitae nulla finibus hendrerit. Duis venenatis vitae augue nonaccumsan. Proin luctus mollis sollicitudin. Donec fermentum ante ligula cursus molestie.",
  //   },
  //   {
  //     name: "Gentech",
  //     status: "ongoing",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Integer bibendum arcuvitae nulla finibus hendrerit. Duis venenatis vitae augue nonaccumsan. Proin luctus mollis sollicitudin. Donec fermentum ante ligula cursus molestie.",
  //   },
  //   {
  //     name: "Biogen",
  //     status: "completed",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Integer bibendum arcuvitae nulla finibus hendrerit. Duis venenatis vitae augue nonaccumsan. Proin luctus mollis sollicitudin. Donec fermentum ante ligula cursus molestie.",
  //   },
  //   {
  //     name: "Biogen",
  //     status: "completed",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Integer bibendum arcuvitae nulla finibus hendrerit. Duis venenatis vitae augue nonaccumsan. Proin luctus mollis sollicitudin. Donec fermentum ante ligula cursus molestie.",
  //   },
  //   {
  //     name: "Biogen",
  //     status: "completed",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Integer bibendum arcuvitae nulla finibus hendrerit. Duis venenatis vitae augue nonaccumsan. Proin luctus mollis sollicitudin. Donec fermentum ante ligula cursus molestie.",
  //   },
  //   {
  //     name: "Biogen",
  //     status: "completed",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Integer bibendum arcuvitae nulla finibus hendrerit. Duis venenatis vitae augue nonaccumsan. Proin luctus mollis sollicitudin. Donec fermentum ante ligula cursus molestie.",
  //   },
  //   {
  //     name: "Biogen",
  //     status: "completed",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Integer bibendum arcuvitae nulla finibus hendrerit. Duis venenatis vitae augue nonaccumsan. Proin luctus mollis sollicitudin. Donec fermentum ante ligula cursus molestie.",
  //   },
  //   {
  //     name: "Biogen",
  //     status: "completed",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Integer bibendum arcuvitae nulla finibus hendrerit. Duis venenatis vitae augue nonaccumsan. Proin luctus mollis sollicitudin. Donec fermentum ante ligula cursus molestie.",
  //   },
  //   {
  //     name: "Biogen",
  //     status: "completed",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Integer bibendum arcuvitae nulla finibus hendrerit. Duis venenatis vitae augue nonaccumsan. Proin luctus mollis sollicitudin. Donec fermentum ante ligula cursus molestie.",
  //   },
  //   {
  //     name: "Biogen",
  //     status: "completed",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattisaugue mi, sit amet tempor velit gravida sed. Integer bibendum arcuvitae nulla finibus hendrerit. Duis venenatis vitae augue nonaccumsan. Proin luctus mollis sollicitudin. Donec fermentum ante ligula cursus molestie.",
  //   },
  // ]);

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
    <ChakraProvider className="App">
      <div
        onLoad={() => {
          if (!filtered) {
            refetch({ filter: "AEROFEST" });
          }
        }}
      >
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

export default EditEvents;
