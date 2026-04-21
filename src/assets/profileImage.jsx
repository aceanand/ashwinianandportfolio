// Profile image as a React component
import React, { useState } from 'react';
import passportPhoto from './passport.png';

const ProfileImage = ({ className, alt }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Fallback placeholder with initials
  const PlaceholderImage = () => (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '6rem',
      fontWeight: 'bold',
      color: 'white',
      borderRadius: '50%'
    }}>
      AA
    </div>
  );
  
  if (imageError) {
    return <PlaceholderImage />;
  }
  
  return (
    <img 
      src={passportPhoto} 
      alt={alt || "Ashwini Anand - Full Stack Developer"} 
      className={`${className} ${imageLoaded ? 'image-loaded' : 'image-loading'}`}
      loading="lazy"
      onLoad={() => setImageLoaded(true)}
      onError={() => setImageError(true)}
    />
  );
};

export default ProfileImage;
