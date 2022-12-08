import React, { useState } from "react";
import { ChakraProvider, Flex, SimpleGrid } from "@chakra-ui/react";
import "../App.css";
import bg from "./bg.png";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import CardTemplate from "./CardTemplate";
import Navbar from "./Navbar";

function EditEvents() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState("");
  // console.log(window.innerWidth);
  // console.log(search, filtered);
  const [events, setEvents] = useState([
    { name: "Biogen", status: "completed" },
    { name: "Aerofest", status: "upcoming" },
    { name: "Elecfest", status: "ongoing" },
    { name: "Techfest", status: "completed" },
    { name: "shaastra", status: "completed" },
    { name: "saarang", status: "upcoming" },
    { name: "Gentech", status: "ongoing" },
    { name: "Biogen", status: "completed" },
    { name: "Biogen", status: "completed" },
    { name: "Biogen", status: "completed" },
    { name: "Biogen", status: "completed" },
    { name: "Biogen", status: "completed" },
    { name: "Biogen", status: "completed" },
    { name: "Biogen", status: "completed" },
    { name: "Biogen", status: "completed" },
  ]);

  let searchedEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(search.toLowerCase()) &&
      (filtered ? event.status === filtered : true)
  );

  return (
    <ChakraProvider className="App">
      <>
        <Flex
          minWidth="100%"
          backgroundImage={bg}
          backgroundAttachment="fixed"
          flexDirection="column"
        >
          <Navbar />
          <SecondRow />
          <ThirdRow
            search={search}
            setSearch={setSearch}
            filter={filtered}
            setFilter={setFiltered}
          />
          <SimpleGrid className="item-grid" spacing={2}>
            {searchedEvents.map((event, index) => {
              return (
                <div key={index}>
                  <CardTemplate
                    name={event.name}
                    index={index}
                    events={searchedEvents}
                    setEvents={setEvents}
                  />
                </div>
              );
            })}
          </SimpleGrid>
        </Flex>
        <footer className="footer">Developed by Tarak</footer>
      </>
    </ChakraProvider>
  );
}

export default EditEvents;
