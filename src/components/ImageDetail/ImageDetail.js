import React from 'react';

const ImageDetail = ({detail, formatDate}) => {
    
    console.log(detail);
    return (
        <div>
           <img src={detail.url}></img>
                <div>
                    <h3>{detail.filename}</h3>
                </div>
                <h5>{(detail.sizeInBytes * 0.000001).toFixed(1)} MB</h5>
                
                <div className='informationSection'>
                    <h3>Information</h3>
                    <div>
                        <h5>Uploaded by</h5>
                        <p>{detail.uploadedBy}</p>
                    </div>
                    <div>
                        <h5>Created</h5>
                        <p>{formatDate(detail.createdAt)}</p>
                    </div>
                    <div>
                        <h5>Last modified</h5>
                        <p>{formatDate(detail.updatedAt)}</p>
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
    );
};

export default ImageDetail;