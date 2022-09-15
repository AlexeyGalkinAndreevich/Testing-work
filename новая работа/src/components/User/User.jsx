import React from "react";
import styles from './User.module.css'
function User({photo,nameUser}){
 return(
    <div className={styles.user}>
        <div className={styles.userPhoto}>
            <img src={photo} alt="" />
        </div>
        
        <p className={styles.nameUser}>{nameUser}</p>
    </div>
 )
}
export default User
