<<<<<<< HEAD
import './App.css';
import Spons from "./components/Spons";
import "./styles/styles.css"

function App() {
  return (
    <div className="App">
      <Spons />
    </div>
=======
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import cardData from "./components/cardData";
import CardComponent from "./components/Card";

function App() {
  let cardElements = cardData.map((data) => {
    return <CardComponent data={data} key={data.id} />;
  });

  return (
    <>
    <div className="workshops-landing">
      <h1 className="title">WORKSHOPS</h1>
      
      <div>
        <button className="explore" onclick="explore()">Explore Workshops </button>{" "}
      </div>
      </div>
      <div className="glassmorphic2">
        <div className="wrapper">
        {cardElements}
        </div>
      </div>
    </>
>>>>>>> workshops
  );
}

export default App;
