# Portfolio Setup Guide

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Add Your Profile Photo
1. Take the passport-style photo you have
2. Save it as `profile.jpg`
3. Place it in the `public` folder (same level as `index.html`)

**Image Tips:**
- Best size: 500x500 pixels or larger (square)
- Format: JPG, PNG, or WebP
- The component will automatically make it responsive for all devices

### Step 3: Run the Portfolio
```bash
npm start
```

Your portfolio will open at `http://localhost:3000` 🎉

---

## 📱 Responsive Design

Your profile image will automatically resize for different devices:

| Device | Image Size |
|--------|------------|
| Desktop (>968px) | 380x380px |
| Tablet (641-968px) | 320x320px |
| Mobile (481-640px) | 280x280px |
| Small Mobile (<480px) | 240x240px |

All with smooth animations and hover effects!

---

## 🎨 Customization

### Update Social Links
Edit these files:
- `src/components/Hero.js` (lines 38-44)
- `src/components/Contact.js` (lines 48-54)

Replace:
```javascript
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
```

With your actual GitHub/LinkedIn URLs:
```javascript
<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
```

### Change Profile Image Path
If you want to use a different image name:

1. Open `src/assets/profileImage.js`
2. Change line 5:
```javascript
const profileImageSrc = "/your-image-name.jpg";
```

### Update Personal Info
- **About section**: `src/components/About.js`
- **Skills**: `src/components/Skills.js`
- **Experience**: `src/components/Experience.js`
- **Projects**: `src/components/Projects.js`

---

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized build in the `build` folder ready for deployment.

---

## 🌐 Deploy

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Drag and drop the `build` folder to [Netlify](https://app.netlify.com/drop)

### Option 3: GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```

---

## ✨ Features Included

✅ Fully responsive design (mobile, tablet, desktop)  
✅ Smooth scroll navigation  
✅ Animated loading screen  
✅ Hover effects on all interactive elements  
✅ Mobile-responsive hamburger menu  
✅ Professional gradient color scheme  
✅ Optimized profile image component with fallback  
✅ SEO-friendly structure  
✅ Fast loading with lazy loading images  

---

## 🐛 Troubleshooting

**Image not showing?**
- Check that `profile.jpg` is in the `public` folder
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

**Port 3000 already in use?**
```bash
# Use a different port
PORT=3001 npm start
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Need Help?

Contact: ashwinianand920@gmail.com

---

**Built with ❤️ using React.js**
