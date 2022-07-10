import React from 'react';
import Image, {IImage} from "./image";
import '../../../../styles/featured/index.scss'
import {isDesktop} from "../../../../const";

export type IProps = {
    bestImages: Array<IImage>
}

const Featured = ({bestImages}: IProps) => {

    return (
        <>
            <div className="title">FEATURED IMAGES</div>
            <div className="container">
                <Image model={bestImages.find(item => item.id === 17)} isBigImg={true} isStored={isDesktop}/>
                <div className="group">
                    <Image model={bestImages.find(item => item.id === 14)}/>
                    <Image model={bestImages.find(item => item.id === 12)} isStored={isDesktop}/>
                    {!isDesktop ?
                        <>
                            <Image model={bestImages.find(item => item.id === 14)}/>
                            <Image model={bestImages.find(item => item.id === 12)} isStored={isDesktop}/>
                        </> : null}

                </div>
            </div>
        </>
    );
};

export default Featured;