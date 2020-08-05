import React from 'react'
import loadingImg from "../../../assets/images/loading.svg";

let Preloader = () => {
    return <div>
        <img src={loadingImg} alt='loading img'/>
    </div>
};

export default Preloader;