import React from 'react';
import './Image.css';

interface Props {
    image: {
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
    };
    imageClicked: (image: {id: number;
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
        favorited: boolean;}) => void;
  }

const Image = ({ image, imageClicked }: Props) => {
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