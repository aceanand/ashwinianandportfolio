# Portfolio Folder Structure

```
portfolio/
│
├── public/
│   ├── index.html
│   ├── profile.jpg          ← PUT YOUR PHOTO HERE!
│   └── README-IMAGE.md
│
├── src/
│   ├── assets/
│   │   └── profileImage.js  ← Profile image component (JSX)
│   │
│   ├── components/
│   │   ├── Navbar.js        ← Navigation bar
│   │   ├── Navbar.css
│   │   ├── Hero.js          ← Main hero section with photo
│   │   ├── Hero.css
│   │   ├── About.js         ← About section
│   │   ├── About.css
│   │   ├── Skills.js        ← Technical skills
│   │   ├── Skills.css
│   │   ├── Experience.js    ← Work experience
│   │   ├── Experience.css
│   │   ├── Projects.js      ← Project showcase
│   │   ├── Projects.css
│   │   ├── Contact.js       ← Contact information
│   │   ├── Contact.css
│   │   ├── Footer.js        ← Footer
│   │   └── Footer.css
│   │
│   ├── App.js               ← Main app component
│   ├── App.css
│   ├── index.js             ← Entry point
│   └── index.css            ← Global styles
│
├── package.json
├── README.md
├── SETUP-GUIDE.md           ← Quick setup instructions
├── FOLDER-STRUCTURE.md      ← This file
└── .gitignore

```

## 📸 Important: Profile Image Location

Your profile photo MUST be placed here:
```
public/profile.jpg
```

## 🎯 Key Files to Customize

1. **Profile Image**: `public/profile.jpg`
2. **Social Links**: `src/components/Hero.js` and `src/components/Contact.js`
3. **Personal Info**: All component files in `src/components/`

## 🔧 How the Profile Image Works

1. **Image Component**: `src/assets/profileImage.js`
   - Loads image from `public/profile.jpg`
   - Has fallback placeholder if image not found
   - Fully responsive with error handling

2. **Used In**: `src/components/Hero.js`
   - Imported as JSX component
   - Wrapped with glow effects and animations
   - Responsive sizing for all devices

3. **Styling**: `src/components/Hero.css`
   - Circular border with gradient
   - Hover effects
   - Responsive breakpoints:
     - Desktop: 380x380px
     - Tablet: 320x320px
     - Mobile: 280x280px
     - Small: 240x240px

## 📦 After Adding Your Photo

1. Save photo as `profile.jpg` in `public/` folder
2. Run `npm start`
3. Your photo will appear with smooth animations!

If image doesn't load, you'll see a gradient placeholder with "AA" initials.
