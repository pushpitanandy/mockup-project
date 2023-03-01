import React from 'react';
import './Image.css';

const Image = ({image}) => {
    const {url, filename} = image;
    return (
        <div className='image'>
            <img src={url}></img>
            <h5>{filename}</h5>
        </div>
    );
};

export default Image;