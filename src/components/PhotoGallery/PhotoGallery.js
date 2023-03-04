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
    
    const [detail, setDetail] = useState({});

    const imageClicked = clickedImg =>{
        // console.log(clickedImg); 
        setDetail(clickedImg);       
     }

    const fileSize = (detail.sizeInBytes * 0.000001).toFixed(1);

    // function to format dates
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };
      
      const formattedCreatedDate = formatDate(detail.createdAt);
      const formattedUpdatedDate = formatDate(detail.updatedAt);
    
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
                {/* {
                    <ImageDetail
                    
                    ></ImageDetail>
                } */}

                <img src={detail.url}></img>
                <div>
                    <h3>{detail.filename}</h3>
                </div>
                <h5>{fileSize}</h5>
                <div className='informationSection'>
                    <h3>Information</h3>
                    <div>
                        <h5>Uploaded by</h5>
                        <p>{detail.uploadedBy}</p>
                    </div>
                    <div>
                        <h5>Created</h5>
                        <p>{formattedCreatedDate}</p>
                    </div>
                    <div>
                        <h5>Last modified</h5>
                        <p>{formattedUpdatedDate}</p>
                    </div>
                    <div>
                        <h5>Dimensions</h5>
                        <p>{detail.dimensions.width} x {detail.dimensions.height}</p>
                    </div>
                    <div>
                        <h5>Resolution</h5>
                        <p>{detail.resolution.width} x {detail.resolution.height}</p>
                    </div>
                </div>
                <div>
                    <h3>Description</h3>
                    <p>{detail.description}</p>
                </div>
                <button>Delete</button>
            </div>

            
        </div>
    );
};

export default PhotoGallery;