import './App.css'
import Navpar from './components/Navbar.tsx';
import { useState } from 'react';
import Form from './components/form';
import {IuserDate} from "./components/interFasess/index";
import UserDate from "./components/detailsUser";
function App() {
  const [logged , setLogged] = useState(false)
  const [userData,steUsrData] = useState<IuserDate>({
    username:"",
    password:"",
    email:"",
    address:""
})
  return (
    <>
    <Navpar home= "home" about="about us" contact="contact" logged={logged} setLogged={setLogged}/>
    {logged ? (<UserDate user={userData}/>) : (<Form setLogged={setLogged} userData={userData} steUsrData={steUsrData}/>)}
    
    </>
  )
}


export default App

