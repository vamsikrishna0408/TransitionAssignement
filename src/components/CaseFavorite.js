import React from 'react';
import './CaseFavorite.css';
import { TbPhotoHeart,TbPin } from "react-icons/tb";

const CaseFavorite = () => {
  return (
    <section className="case-favorite">

        <div className='case-item text'> <TbPin className='pin-icon' />Case favorite</div>
        <hr/>
      <div className="case-item">
        <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt.</p>
      </div>
      <div className="case-item">
      <TbPhotoHeart className='photo-icon' /><span>Photo</span>
      </div>
      <div className="case-item">
        <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt.</p>
      </div>
    </section>
  );
};

export default CaseFavorite;
