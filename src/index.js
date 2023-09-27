import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Lesson2 from './lessons/lesson2';
// import Lesson3 from "./lessons/lesson3";
// import Lesson4 from './lessons/lesson4';
// import Lesson5 from './lessons/lesson5';
// import Lesson6 from './lessons/lesson6';
// import Lesson7 from './lessons/lesson7';
// import AppState from './lessons/AppState';
// import Form from './lessons/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function greetings(name) {
//   const date = new Date()
//   const hour = date.getHours()

//   let time
//   if(hour >= 4 && hour < 12) {
//     time = "morning"
//   } else if (hour >= 12 && hour < 17) {
//     time = "afternoon"
//   } else if (hour >= 17 && hour < 20) {
//     time = "evening"
//   } else {
//     time = "night"
//   }
//   // console.log(hour)
//   console.log(time)
//   return `Good ${time}, ${name}`
// }

root.render(
  <React.StrictMode>
    <App />

    {/* <AppState/> */}

    {/* <Lesson2/> */}
    
    {/* <Lesson3/> */}
    
    {/* <Lesson4/> */}

    {/* <Lesson5 /> */}

    {/* <Lesson6 /> */}

    {/* <Lesson7 /> */}

    {/* <Form/> */}
  </React.StrictMode>
);