import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter/>
    </div>
    <div>
      <a href="https://www.facebook.com/owshatt/" className="p-text"><FaFacebookF /> </a> 
    </div>
    <div>
    <a href="https://www.instagram.com/oguzyldrmx/" className="p-text"><BsInstagram /></a> 
    </div>
  </div>
);

export default SocialMedia;