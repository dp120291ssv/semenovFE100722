import React from 'react';
import Featured from "./Images/Featured/index";
import Newest from "./Images/Newest/index";
import dataJson from '../../utils/data.json'
import '../../styles/main.scss'

function Main() {
    let filteredBestRated = dataJson.sort((a, b) => b.rating - a.rating).slice(0, 5);
    let filteredNewest = dataJson.sort((a, b) => a.age - b.age).slice(0, 2);

    return (
        <div className="root">
            <div className="featured">
                <Featured bestImages={filteredBestRated}/>
                <button className="btnLeft">
                    <img src="/assets/icons/back.svg" className="backImg"/>
                </button>
                <button className="btnRight">
                    <img src="/assets/icons/next.svg" className="nextImg"/>
                </button>
            </div>
            <Newest newestImages={filteredNewest}/>
        </div>
    );
}

export default Main;
