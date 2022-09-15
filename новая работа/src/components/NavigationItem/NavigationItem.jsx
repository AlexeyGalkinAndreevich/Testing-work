// Link to={href},
import React from "react";
import { Link } from "react-router-dom";

import styles from './NavigationItem.module.css'


function NavigationItem({href,label,icon}){
    return (
      <Link className={styles.item} to={href}>
       <img src={icon}/> {label} 
      </Link>
    );
}

export default NavigationItem