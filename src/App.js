import React from "react";
import Nav from "./components/nav";
import Main from "./components/main";
// import WinWidth from "./lessons/WindowsWidth";

// import Lesson1 from "./lessons/lesson1";
// import Header from './lessons/Header';
// import Body from './lessons/Body';
// import boxesData from "./data/boxesData";
// import Box from "./lessons/Box";

export default function App() {
  // const [user, setUser] = React.useState("Bill")
  // const [box, setBox] = React.useState(boxesData)
  // function toggle(id) {
  //   setBox(prevBox => {
  //     return prevBox.map(box => {
  //       return box.id === id ? {...box, on: !box.on} : box
  //     })
  //   })
  // }
  // const styles = {
  //   backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  // }

  // const mapBox = box.map((boxes) => <Box on={boxes.on} key={boxes.id} click={() => toggle(boxes.id)}/>)

  const [show, setShow] = React.useState(true)
  function showDarkMode() {
    setShow(prevShow => !prevShow)
  }

  return (
    <div>
      {/* <Lesson1 /> */}

      <Nav dark={show} toggleDark={showDarkMode}/>
      <Main dark={show}/>

      {/* <Header user={user}/>
      <Body user={user}/> */}
      
      {/* <main className="container text-center p-5 d-flex"> */}
        {/* <h1>Boxes go here</h1> */}
        {/* {mapBox} */}
      {/* </main> */}

      {/* <button className="w-75 border-0 rounded" onClick={showWidth}>Toggle WindowTracker</button>
      {show && <WinWidth/>} */}
    </div>
  );
}