import React from 'react';
import NewestImage, {INewImage} from "./newestImage";
import './../../../../styles/newest/index.scss'
import {isDesktop} from "../../../../const";

export type IProps = {
    newestImages: Array<INewImage>
}

const Newest = ({newestImages}: IProps) => {
    return (
        <div>
            <div className="newImgTitle">LAST IMAGES</div>
            <div className="newImgContainer">
                <div className={isDesktop ? "marginRight3" : 'imgMobile'}>
                    <NewestImage model={newestImages.find(item => item.id === 14)}/>
                </div>
                <div className={isDesktop ? "marginRight5" : "imgMobile"}>
                    <NewestImage model={newestImages.find(item => item.id === 11)} isStored={isDesktop}/>
                </div>
                <div className={isDesktop ? "emptyImage" : ''} />
            </div>
        </div>
    );
};

export default Newest;