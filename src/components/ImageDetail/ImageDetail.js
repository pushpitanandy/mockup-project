import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ImageDetail = () => {
    const image = useLoaderData();
    const {url} = image;
    return (
        <div>
            <img src={url}></img>
        </div>
    );
};

export default ImageDetail;