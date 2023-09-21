import React from "react";
// import Nav from "./components/nav";
// import Main from "./components/main";
// import memesData from "./data/memesData";
// import Lesson1 from "./lessons/lesson1";
// import Header from './lessons/Header';
// import Body from './lessons/Body';
import boxesData from "./data/boxesData";
import Box from "./lessons/Box";

function App() {
  // const [user, setUser] = React.useState("Bill")
  const [box, setBox] = React.useState(boxesData)
  function toggle(id) {
    setBox(prevBox => {
      return prevBox.map(box => {
        return box.id === id ? {...box, on: !box.on} : box
      })
    })
  }
  // const styles = {
  //   backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  // }
  const mapBox = box.map((boxes) => <Box on={boxes.on} key={boxes.id} click={() => toggle(boxes.id)}/>)

  return (
    <div className="App">
      {/* <Lesson1 /> */}

      {/* <Nav />
      <Main /> */}

      {/* <Header user={user}/>
      <Body user={user}/> */}

      <main className="container text-center p-5 d-flex">
        <h1>Boxes go here</h1>
        {mapBox}
      </main>
    </div>
  );
}

export default App;
