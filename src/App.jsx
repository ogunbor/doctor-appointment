import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkWrapper from './LinkWrapper';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import './App.css';


const App = () => {
  const external_link="https://bit-doc.vercel.app";
  const [mode, setMode] = useState(true); // true for day mode, false for night mode
  const [selectedDate, setSelectedDate] = useState(null);
   

 

  const handleModeChange = () => {
    setMode(!mode);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // const handleBookAppointment = () => {
  //   // You can add your appointment booking logic here
    
  // };

  return (
    <>
    <div className={`container ${mode ? 'day-mode' : 'night-mode'}`}>
      <nav>
        <div className="navbar-left">
          <h1>BitDoc</h1>
        </div>
        <div className="navbar-right">
          <label htmlFor="mode-switch">{mode ? 'Night' : 'Day'} Mode</label>
          <input
            type="checkbox"
            id="mode-switch"
            checked={mode}
            onChange={handleModeChange}
          />
        </div>
      </nav>

      <div id="content">
        <div id="date-picker">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            minDate={new Date()}
            className="custom-calendar" // Add a custom class for styling
          />
        </div>
        {/* <button className="book-button" onClick={handleBookAppointment}>
        
        </button> */}
      </div>
    </div>

    <BrowserRouter>
    <LinkWrapper link={external_link}/>
        
      </BrowserRouter>
    
    </>
  );
};

export default App;
