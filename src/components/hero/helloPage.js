import React from "react";

import { useAuth } from "../context/authcontext";
import '../../styles/mainContent.scss'

export default function HelloPage() {
    return (
        <div className='hello'>
            <span className='helloMessage'>
                This is Main page! Hello friend!
                Lets go to Items!
            </span>
        </div>
    )
}
