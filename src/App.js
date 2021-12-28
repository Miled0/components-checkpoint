import Adress from './component/profile/Address.js'
import Myname from './component/profile/FullName'
import Photo from './component/profile/profilePhoto'
import React from "react"
import './App.css';

function App() {
  return (
    <>
    <div className="container">
    <Photo className="photo"/>
    <p><label>My Name: </label>
    <Myname className="name"/></p>
    <p><label>My address: </label>
    <Adress className="adress"/></p>
    
</div>
    </>
  );
}

export default App;
