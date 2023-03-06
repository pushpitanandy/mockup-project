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
    
     // to handle click on heart symbol
     const [list, setList] = useState(allImages);
     
     const heartClicked = (id) =>{
        setList((prevList) =>{
            const updatedList = prevList.map((item) => {
                if (item.id === id) {
                  return { ...item, favorited: !item.favorited };
                }
                return item;
              });
              return updatedList;
        });
     }  

     //to handle delete button
     const deleteClicked = (id) =>{
        const remaining = list.filter(photo => photo.id!==id);
        setList(remaining);
        setDetail(remaining[0]);
     }

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
                list.map(image => <Image
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
                    heartClicked={heartClicked}
                    deleteClicked={deleteClicked}
                ></ImageDetail>
                 
            </div>

            
        </div>
    );
};

export default PhotoGallery;