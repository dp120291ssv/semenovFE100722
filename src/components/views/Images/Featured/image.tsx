import React from 'react';
import '../../../../styles/featured/image.scss'

export type IImage = {
    age: number;
    id: number;
    image: string;
    rating: number;
    tags: Array<string>;
    title: string;
    url: string;
}

export type IProps = {
    model?: IImage
    isBigImg?: boolean;
    isStored?: boolean;
    isHidden?: boolean;
}

const Image = ({model, isBigImg, isStored, isHidden}: IProps) => {
    return (
        <>
            <div className={isHidden ? "isHidden" : isBigImg ? "imgContainerBig" : "imgContainer"}>
                <img src={(`/assets/${model?.image}`)} className={isBigImg ? "big_image" : "small_image"}
                     alt={model?.title}/>
                {isStored ? <div className="isStored"><img src="/assets/icons/star-solid.svg" /></div> : null}
                <div className="imgGradient"/>
                <div className="description">
                    <div>{model?.title}</div>
                    <div className="tagRow">
                        {model?.tags ? model.tags.map(tag =>
                            <div key={tag} className="tag">{`#${tag}`}</div>
                        ) : null}
                    </div>
                </div>
            </div>

        </>

    );
};

export default Image;