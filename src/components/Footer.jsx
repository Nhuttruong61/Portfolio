import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='my-4'>
      <ul className="flex justify-center">
        <li className="mr-6">
          <a href="https://www.facebook.com/profile.php?id=100007950272205">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </li>
        <li className="mr-6">
          <a href="/">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/n_truong01/">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </li>
      </ul>
      <div className='my-2'>© 2023 Truong Nguyen. All rights reserved.</div>
    </div>
  )
}

export default Footer;
