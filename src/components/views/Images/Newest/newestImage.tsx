import React from 'react';
import './../../../../styles/newest/image.scss'

export type INewImage = {
    age: number;
    id: number;
    image: string;
    rating: number;
    tags: Array<string>;
    title: string;
    url: string;
}

export type IProps = {
    model?: INewImage
    isStored?: boolean
}

const NewestImage = ({model, isStored}: IProps) => {
    return (
        <div>
            <div className="imgNewContainer">
                <img src={(`/assets/${model?.image}`)} className={"image"} alt={model?.title}/>
                {isStored ? <div className="isStored"><img src="/assets/icons/star-regular.svg"/></div> : null}
            </div>
            <div className="imageTitle">{model?.title}</div>
            <div className="tagRow">
                {model?.tags ? model.tags.map(tag =>
                    <div key={tag} className="tag">{`#${tag}`}</div>
                ) : null}
            </div>

        </div>
    );
};

export default NewestImage;