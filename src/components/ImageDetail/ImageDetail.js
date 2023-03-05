import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ImageDetail.css';

const ImageDetail = ({detail, formatDate}) => {

    const {url, filename, sizeInBytes, uploadedBy, createdAt, updatedAt, dimensions, resolution, description} = detail;
    return (
        <div className='detail'>
                <img src={url}></img>
                <div className='nameAndHeart'>
                    <h3 id='imageName'>{filename}</h3>
                    <FontAwesomeIcon icon={faHeart} className='heartIcon'/>
               </div>
                <h5 id='fileSize'>{(sizeInBytes * 0.000001).toFixed(1)} MB</h5>
                
                <div className='informationSection'>
                    <h3>Information</h3>
                    <div id='uploadedBy'>
                        <h5>Uploaded by</h5>
                        <p>{uploadedBy}</p>
                    </div>
                    <div>
                        <h5>Created</h5>
                        <p>{formatDate(createdAt)}</p>
                    </div>
                    <div>
                        <h5>Last modified</h5>
                        <p>{formatDate(updatedAt)}</p>
                    </div>
                    <div>
                        <h5>Dimensions</h5>
                        <p>{dimensions.width} x {dimensions.height}</p>
                    </div>
                    <div>
                        <h5>Resolution</h5>
                        <p>{resolution.width} x {resolution.height}</p>
                    </div>
                </div>
                
                <div id='description'>
                    <h3>Description</h3>
                    {description ? <p>{description}</p> : <p>Not available</p>}
                </div>
                <button id='deleteBtn'>Delete</button>
                
        </div>
    );
};

export default ImageDetail;