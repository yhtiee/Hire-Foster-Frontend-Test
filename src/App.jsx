import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ListUsersPage from './Pages/ListUsersPage';
import UserDetialsPage from './Pages/UserDetialsPage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListUsersPage/>}/>
        <Route path='/details' element={<UserDetialsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App