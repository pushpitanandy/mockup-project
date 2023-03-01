import React from 'react';
import { Link } from 'react-router-dom';
import './Image.css';

const Image = ({image}) => {
    const {id, url, filename, sizeInBytes} = image;
    // console.log(image);
    const fileSize = (sizeInBytes * 0.000001).toFixed(1);
    return (
        <div className='image'>
            <Link to={`/image/${id}`} ><img src={url}></img></Link>
            <h5>{filename}</h5>
            <h5 id='fileSize'>{fileSize} MB</h5>
        </div>
    );
};

export default Image;