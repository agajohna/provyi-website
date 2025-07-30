# Provyi - Location-Based Surveillance Marketplace Website

A modern, responsive website for the Provyi iOS app - a two-sided marketplace connecting requesters with spotters for location-based surveillance and photography tasks.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, scroll animations, and smooth transitions
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Performance Optimized**: Fast loading with optimized assets and animations

## 📁 File Structure

```
Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Colors and Branding

The website uses a modern color scheme with gradients. You can customize the colors in `styles.css`:

```css
/* Primary colors */
--primary-blue: #2563eb;
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Text colors */
--text-dark: #1e293b;
--text-light: #64748b;
```

### App Store Link

Update the App Store download link in `script.js`:

```javascript
// Replace 'YOUR_APP_STORE_LINK' with your actual App Store URL
window.open('YOUR_APP_STORE_LINK', '_blank');
```

### Content Updates

#### Hero Section
- Update the main headline in `index.html`
- Modify the subtitle description
- Change the call-to-action button text

#### Features Section
- Add or remove feature cards
- Update feature descriptions and icons
- Modify the feature grid layout

#### Pricing Section
- Update pricing information
- Modify the pricing structure
- Add or remove pricing tiers

#### Footer
- Update social media links
- Modify contact information
- Change the copyright notice

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features
- Optimized images and assets
- Smooth scrolling
- Intersection Observer for animations
- Lazy loading effects
- Mobile-first responsive design

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- Responsive navigation menu
- Touch-friendly buttons
- Optimized typography
- Mobile-specific animations
- Fast loading times

## 🚀 Deployment

### Local Development
1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

### Web Hosting
Upload the files to your web hosting provider:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository
- **Traditional hosting**: Upload via FTP

### Custom Domain
1. Purchase a domain name
2. Configure DNS settings
3. Update your hosting provider settings
4. Add SSL certificate for HTTPS

## 📊 Analytics and Tracking

### Google Analytics
Add Google Analytics tracking code to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Conversion Tracking
Track important user actions:
- App Store downloads
- Contact form submissions
- Feature section engagement
- Pricing page visits

## 🔧 Advanced Customization

### Adding New Sections
1. Create the HTML structure in `index.html`
2. Add corresponding CSS styles in `styles.css`
3. Include any JavaScript functionality in `script.js`

### Custom Animations
The website includes several animation types:
- Fade-in animations on scroll
- Hover effects on cards
- Typing effect on hero title
- Parallax scrolling effects

### SEO Optimization
- Add meta tags for social sharing
- Include structured data markup
- Optimize page titles and descriptions
- Add alt text to images

## 📞 Support

For questions or customization requests:
- Review the code comments for guidance
- Test changes in a development environment
- Ensure cross-browser compatibility
- Validate HTML and CSS

## 📄 License

This website template is created for the Provyi app. Customize as needed for your specific requirements.

---

**Provyi** - Connecting requesters with spotters for location-based surveillance tasks. 