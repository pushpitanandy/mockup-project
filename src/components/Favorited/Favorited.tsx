import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Image from '../Image/Image';
import ImageDetail from '../ImageDetail/ImageDetail';

interface ObjectType {
  id: number;
      url: string;
      filename: string;
      sizeInBytes: number;
      uploadedBy: string;
      createdAt: string;
      updatedAt: string;
      dimensions: {
        width: number;
        height: number;
      };
      resolution: {
        width: number;
        height: number;
      };
      description?: string;
      favorited: boolean;
}

const Favorited = () => {
  const images: ObjectType[] = useLoaderData() as ObjectType[];

    const [list, setList] = useState(images);
   
    // to sort the images by using favorited
    const favoritedImages = list.filter(img => img.favorited);
    
    // handle click on images 
    
    const [detail, setDetail] = useState(favoritedImages[0]);
   
    const imageClicked = (clickedImg: ObjectType) =>{
        setDetail(clickedImg);    
     }

    // function to format dates
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        // handle invalid date
        return "";
      }
      const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      return formattedDate;
    };
      
    // to handle click on heart symbol
   
    const heartClicked = (id: number) => {
        setList((prevList) => {
          const updatedList = prevList.map((item) => {
            if (item.id === id) {
              return { ...item, favorited: !item.favorited };
            }
            return item;
          });
          return updatedList;
        });
        if (id === detail.id) {
          setDetail((prevDetail) => ({
            ...prevDetail,
            favorited: !prevDetail.favorited,
          }));
        }
      };
          //to handle delete button
          const deleteClicked = (id: number) =>{
            const remaining = favoritedImages.filter(photo => photo.id!==id);
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
                favoritedImages.map(image => <Image
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

export default Favorited;