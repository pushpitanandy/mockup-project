import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Image from '../Image/Image';
import './RecentlyAdded.css';

const RecentlyAdded = () => {
    const images = useLoaderData();
    return (
        <div className='images'>
            {
                images.map(image => <Image
                    key={image.id}
                    image={image}
                ></Image>)
            }
        </div>
    );
};

export default RecentlyAdded;