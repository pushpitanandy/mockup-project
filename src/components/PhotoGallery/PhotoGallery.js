import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Image from '../Image/Image';
import ImageDetail from '../ImageDetail/ImageDetail';
import './PhotoGallery.css';

const PhotoGallery = () => {
   
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
   
    // handle click on images 
    
    const [detail, setDetail] = useState(allImages[0]);

    const imageClicked = clickedImg =>{
        setDetail(clickedImg);        
     }

    // function to format dates
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };
      
    return (
        <div className='photo-gallery'>
            {/* photos section */}
            <div className='photos-section'>
                <h1>Photos</h1>
                <nav className='navbar'>
                    <NavLink to='/' className={({isActive}) => isActive ? 'active' : 'pending'}>Recently Added</NavLink>
                    <NavLink to='/favorited' className={({isActive}) => isActive ? 'active' : 'pending'}>Favorited</NavLink>
                </nav>
                
                <div className='images'>
                {
                allImages.map(image => <Image
                    key={image.id}
                    image={image}
                    imageClicked={imageClicked}
                ></Image>)
                }
                </div>
            </div>
           
            {/* photo detail section */}
            <div className='photo-details'>
                <ImageDetail 
                    detail={detail}
                    formatDate={formatDate}
                ></ImageDetail>
                 
            </div>

            
        </div>
    );
};

export default PhotoGallery;