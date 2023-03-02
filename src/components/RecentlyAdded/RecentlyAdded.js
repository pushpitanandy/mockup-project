import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Image from '../Image/Image';
import './RecentlyAdded.css';

const RecentlyAdded = () => {
    const images = useLoaderData();
   
    // to sort the images by using createdAt
    const allImages = [];

    images.forEach((img) => {
    allImages.push(img);
    });

    allImages.sort((a,b) =>{
        const imgA = new Date(a.createdAt).getTime();
        const imgB = new Date(b.createdAt).getTime();
        return imgB-imgA;
    });
   
    return (
        <div className='images'>
            {
                allImages.map(image => <Image
                    key={image.id}
                    image={image}
                ></Image>)
            }
        </div>
    );
};

export default RecentlyAdded;