import React from 'react';
import './Image.css';

const Image = (props) => {
    const {image, imageClicked} = props;
    const {url, filename, sizeInBytes} = image;
    const fileSize = (sizeInBytes * 0.000001).toFixed(1);
   
    return (
        <div className='image'>
            <button onClick={()=>{imageClicked(image)}}><img src={url}></img></button>
            <h5>{filename}</h5>
            <h5 id='fileSize'>{fileSize} MB</h5>
        </div>
    );
};

export default Image;