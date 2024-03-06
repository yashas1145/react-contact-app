import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import contacts from "../data/contacts";
import style from "../style.module.css";

function App () {
    return <div>
        <Header/>
            <div className={style.flexContainer}>
                <Contact contactName={contacts[0].name} contactImgUrl={contacts[0].imgUrl} contactNumber={contacts[0].contact} contactEmail={contacts[0].email}/>
                <Contact contactName={contacts[1].name} contactImgUrl={contacts[1].imgUrl} contactNumber={contacts[1].contact} contactEmail={contacts[1].email}/>
                <Contact contactName={contacts[0].name} contactImgUrl={contacts[0].imgUrl} contactNumber={contacts[0].contact} contactEmail={contacts[0].email}/>
            </div>
        <Footer/>
    </div>
}

export default App;