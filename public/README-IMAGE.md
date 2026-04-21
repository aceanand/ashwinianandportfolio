# Adding Your Profile Image

## Quick Setup

1. **Save your profile photo** (the passport-style photo you shared) as `profile.jpg`
2. **Place it in this `public` folder** (the same folder where this README is located)
3. The image will automatically appear on your portfolio

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 500x500 pixels or larger (square format works best)
- **File Name**: Must be named `profile.jpg` (or update the path in `src/assets/profileImage.js`)

## Alternative: Use a Different Path

If you want to use a different image name or location:

1. Open `src/assets/profileImage.js`
2. Change the line:
   ```javascript
   const profileImageSrc = "/profile.jpg";
   ```
   To your preferred path, for example:
   ```javascript
   const profileImageSrc = "/images/my-photo.jpg";
   ```

## The Image is Fully Responsive

The profile image will automatically adjust for:
- Desktop: 380x380px
- Tablet: 320x320px  
- Mobile: 280x280px
- Small Mobile: 240x240px

All with smooth animations and hover effects!
