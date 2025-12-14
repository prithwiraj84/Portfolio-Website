# Modern Portfolio Website

A beautiful, responsive, and fully functional personal portfolio website built with HTML, CSS, and JavaScript. Features dark/light mode, smooth animations, and a working contact form.

![Portfolio Preview](<img width="1902" height="913" alt="image" src="https://github.com/user-attachments/assets/f67146c4-ae72-42b9-82b9-15d41cd260e8" />)

## ✨ Features

### 🎨 Design & UI
- **Modern, Clean Design** - Sleek and professional interface
- **Dark/Light Mode** - Toggle between themes with persistent preference
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Engaging transitions and hover effects
- **Glass Morphism** - Modern card designs with glassmorphic effects

### 📱 Sections
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **Work/Projects** - Showcase your projects with images and descriptions
- **About** - Tell your story and highlight your expertise
- **Skills** - Display your technical skills in an organized grid
- **Contact** - Working contact form with email integration

### 🚀 Functionality
- **Email Integration** - Contact form sends emails via EmailJS
- **Resume Download** - Direct link to download your resume as PDF
- **Social Media Links** - Connect to GitHub, LinkedIn, Twitter, etc.
- **Smooth Scrolling** - Seamless navigation between sections
- **Active Navigation** - Highlights current section in navigation bar
- **Mobile Menu** - Hamburger menu for mobile devices

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)** - Interactive functionality
- **EmailJS** - Email service integration
- **Font Awesome** - Icon library
- **Google Fonts (Inter)** - Typography

## 📦 Installation

1. **Clone or download** this repository
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **No build process required!** Just open `index.html` in your browser

3. **For local development**, you can use a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with http-server)
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```

4. Open `http://localhost:8000` in your browser

## ⚙️ Configuration

### 1. Personalize Content

Edit `index.html` to update:
- Your name and title
- Project descriptions and images
- Skills and expertise
- Contact information
- Social media links

### 2. Add Your Images

- **Profile Image**: Place `profile.jpg` in the `images/` folder
- **Project Images**: Add `project1.jpg`, `project2.jpg`, etc. in the `images/` folder
- See `images/README.txt` for detailed instructions

### 3. Setup Email Functionality

Follow the guide in `EMAILJS_SETUP.md` to:
- Create an EmailJS account
- Configure email service
- Update credentials in `script.js`

### 4. Customize Colors

Edit CSS variables in `styles.css` (lines 1-15):
```css
:root {
    --bg: #0b1021;
    --panel: #0f162f;
    --text: #e7ecf5;
    --accent: #6f7cf6;
    --accent-2: #22d3ee;
    /* ... */
}
```

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
├── resume.html         # Resume template (printable as PDF)
│
├── images/             # Image assets
│   ├── profile.jpg     # Your profile picture
│   ├── project1.jpg    # Project screenshots
│   ├── project2.jpg
│   └── README.txt      # Image setup instructions
│
├── README.md           # This file
└── EMAILJS_SETUP.md    # Email setup guide
```

## 🎯 Customization Guide

### Changing Colors

The portfolio uses CSS custom properties for easy theming. Modify the `:root` and `[data-theme="light"]` selectors in `styles.css`.

### Adding Projects

1. Copy a project card in the `work__grid` section
2. Update the content (title, description, tags)
3. Add your project image to the `images/` folder
4. Update the `background-image` style or use an `<img>` tag

### Modifying Sections

Each section is clearly marked in `index.html`. Simply edit the content within each `<section>` tag.

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails. Setup is required:

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Update credentials in `script.js`

See `EMAILJS_SETUP.md` for detailed instructions.

## 🌐 Deployment

### GitHub Pages (Free)

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select main branch
4. Your site will be live at `username.github.io/repository-name`

### Netlify (Recommended)

1. Drag and drop your project folder to [Netlify](https://www.netlify.com/)
2. Or connect your GitHub repository
3. Site is live instantly!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### Other Options

- **Firebase Hosting**
- **Surge.sh**
- **Any static hosting service**

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔧 Troubleshooting

### Contact form not working?
- Check EmailJS credentials in `script.js`
- Verify EmailJS account is active
- Check browser console for errors

### Images not showing?
- Ensure images are in the `images/` folder
- Check file names match exactly (case-sensitive)
- Verify image file extensions

### Dark/Light mode not persisting?
- Check browser localStorage is enabled
- Clear browser cache and try again

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **Fonts**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## 📞 Support

If you have questions or need help:
1. Check the setup guides in the repository
2. Review the code comments
3. Open an issue on GitHub

## 🚀 Future Enhancements

Potential features to add:
- [ ] Blog section
- [ ] Testimonials section
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] Advanced animations
- [ ] Portfolio filtering/search

---

**Made with ❤️ for showcasing your work**
