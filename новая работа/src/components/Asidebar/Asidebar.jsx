import React from "react";
import Navigation from "../Navigation";
import User from "../User";
import styles from './Asidebar.module.css'
function Asidebar(){
    return (
        <aside className={styles.asidebar}>
            {/* <img/> */}
            <User photo={"./UserPhoto.png"} nameUser="Henry Jabbawockiez"/>
            <Navigation />
            <div className={styles.LogOutDiv}>
                <button className={styles.LogOutBtn}><img src={"./power.png"} alt=""></img>LOG OUT</button>
            </div>
            

        </aside>
    )

}
export default Asidebar;