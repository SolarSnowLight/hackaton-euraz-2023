import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Landing from "src/pages/Landing/Landing";
import MainScreen from "src/pages/MainScreen/MainScreen";
import {ExhausterDetailedScreen} from "../ExhausterDetailedScreen/ExhausterDetailedScreen";

function App() {
  return <Routes>
    <Route path='main-screen' element={<MainScreen />} />
    <Route path='exhauster-detailed/:id/*' element={<ExhausterDetailedScreen.ExhausterDetailedScreen />}/>
    <Route path='*' element={<Navigate to='main-screen' replace={true} />} />
  </Routes>
}

export default App
