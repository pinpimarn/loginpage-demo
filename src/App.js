import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './Login'
import SignUp from './SignUp'
import Password from './Password'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/SignUp" element={<SignUp/>}/>
          <Route exact path="/Password" element={<Password/>}/>
        </Routes>
    </Router>
  );
}

export default App;