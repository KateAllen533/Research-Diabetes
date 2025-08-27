# Research Publications - Algorithms & Bioinformatics

A modern, responsive academic website for publishing research in algorithms and bioinformatics. Built with HTML5, CSS3, and vanilla JavaScript, designed to showcase academic research with a professional and clean interface.

## 🌟 Features

- **Modern Academic Design**: Clean, professional layout optimized for research publications
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Elements**: Smooth animations, filtering, and dynamic content
- **Publication Management**: Easy-to-update publication listings with filtering capabilities
- **Research Focus**: Specialized sections for algorithms and bioinformatics research
- **Contact System**: Built-in contact form for research inquiries
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/research-publications.git
cd research-publications
```

### 2. Customize Content

Edit the following files to personalize your research website:

- **`index.html`**: Update research areas, team information, and contact details
- **`styles.css`**: Modify colors, fonts, and styling to match your institution's branding
- **`script.js`**: Customize interactive features and functionality

### 3. Add Your Publications

Replace the placeholder publications in `index.html` with your actual research:

```html
<div class="publication-item">
    <div class="pub-meta">
        <span class="pub-year">2024</span>
        <span class="pub-type">Journal</span>
    </div>
    <h3 class="pub-title">Your Research Title</h3>
    <p class="pub-authors">Your Name, Co-author Names</p>
    <p class="pub-venue">Journal/Conference Name</p>
    <div class="pub-abstract">
        <p>Your research abstract goes here...</p>
    </div>
    <div class="pub-links">
        <a href="paper-url" class="pub-link"><i class="fas fa-external-link-alt"></i> Paper</a>
        <a href="code-url" class="pub-link"><i class="fab fa-github"></i> Code</a>
        <a href="pdf-url" class="pub-link"><i class="fas fa-download"></i> PDF</a>
    </div>
</div>
```

### 4. Deploy to GitHub Pages

1. **Create a new repository** on GitHub
2. **Push your code** to the repository
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select source branch (usually `main` or `master`)
   - Choose folder (usually `/ (root)`)
   - Click Save

Your website will be available at: `https://yourusername.github.io/repository-name`

## 📁 File Structure

```
research-publications/
├── index.html          # Main website file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
├── README.md           # This file
└── .gitignore          # Git ignore file (optional)
```

## 🎨 Customization Guide

### Colors and Branding

Update the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Your primary brand color */
    --secondary-color: #10b981;    /* Secondary accent color */
    --accent-color: #f59e0b;       /* Highlight color */
    /* ... other variables */
}
```

### Research Areas

Modify the research cards in `index.html` to reflect your specific research areas:

```html
<div class="research-card">
    <div class="card-icon">
        <i class="fas fa-brain"></i>
    </div>
    <h3>Your Research Area</h3>
    <p>Description of your research focus...</p>
    <div class="card-tags">
        <span class="tag">Tag 1</span>
        <span class="tag">Tag 2</span>
    </div>
</div>
```

### Team Information

Update team member details in the team section:

```html
<div class="team-member">
    <div class="member-avatar">
        <i class="fas fa-user-graduate"></i>
    </div>
    <h3>Your Name</h3>
    <p>Your role and research focus...</p>
    <div class="member-expertise">
        <span class="expertise-tag">Expertise 1</span>
        <span class="expertise-tag">Expertise 2</span>
    </div>
</div>
```

## 🔧 Advanced Customization

### Adding New Sections

To add new sections, follow this pattern:

1. **Add HTML structure** in `index.html`
2. **Add CSS styling** in `styles.css`
3. **Add JavaScript functionality** in `script.js` (if needed)

### Custom JavaScript Functions

The website includes several utility functions you can use:

```javascript
// Show notifications
window.ResearchWebsite.showNotification('Your message', 'success');

// Filter publications
window.ResearchWebsite.filterPublications();

// Animate counters
window.ResearchWebsite.animateCounters();
```

### Responsive Design

The website is built with a mobile-first approach. CSS breakpoints:

- **Mobile**: `< 480px`
- **Tablet**: `480px - 768px`
- **Desktop**: `> 768px`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Features

- **Optimized CSS**: Efficient selectors and minimal repaints
- **Lazy Loading**: Images and content load as needed
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Minimal JavaScript**: Lightweight, fast-loading scripts

## 🔍 SEO and Accessibility

- **Semantic HTML**: Proper use of HTML5 elements
- **Meta Tags**: Optimized for search engines
- **Alt Text**: Descriptive text for images and icons
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and structure

## 📊 Analytics Integration

To add Google Analytics, insert this code before the closing `</head>` tag:

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

## 🐛 Troubleshooting

### Common Issues

1. **GitHub Pages not updating**: Clear browser cache or wait a few minutes
2. **Styles not loading**: Check file paths and ensure CSS file is in the root directory
3. **JavaScript errors**: Open browser console to check for error messages

### Debug Mode

Enable debug mode by adding this to your HTML:

```html
<script>
    window.DEBUG = true;
</script>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Modern CSS techniques and best practices

## 📞 Support

For questions or support:

- **Email**: research@example.edu
- **GitHub**: Create an issue in the repository
- **Documentation**: Check this README and inline code comments

---

**Built with ❤️ for the academic research community**

*Last updated: August 2024*
