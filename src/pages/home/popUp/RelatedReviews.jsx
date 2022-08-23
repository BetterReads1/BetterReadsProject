import React, { useState } from 'react';

const RelatedReviews = ( {handleClose} ) => {
    return(
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={handleClose}>x</span>
                Related Reviews
            </div>
        </div>
      )
}

export default RelatedReviews;