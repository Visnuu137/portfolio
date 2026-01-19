# Visnu Sathia Seelan - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Front End Developer.

## 🌐 Live Demo

Once deployed to GitHub Pages, your portfolio will be available at:
`https://yourusername.github.io/portfolio/`

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Smooth Scrolling**: Enhanced navigation experience
- **Interactive Elements**: Hover effects and transitions throughout
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized for performance

## 📋 Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal profile and information
3. **Skills**: Front-end and back-end technologies
4. **Experience**: Work history timeline
5. **Projects**: Showcase of completed projects
6. **Education**: Academic background and certifications
7. **Contact**: Contact information and social links

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- JavaScript (Vanilla JS)
- Font Awesome Icons
- Google Fonts (Inter)

## 📦 Installation & Setup

1. **Clone the repository** (or download the files):
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open the website**:
   - Simply open `index.html` in your web browser, or
   - Use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View in browser**:
   - Navigate to `http://localhost:8000`

## 🚀 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository** on GitHub:
   - Go to [GitHub](https://github.com/new)
   - Name it `portfolio` (or any name you prefer)
   - Make it public
   - Don't initialize with README (since you already have one)

2. **Upload files**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section
   - Under **Source**, select **main** branch
   - Select **/ (root)** folder
   - Click **Save**
   - Your site will be live at `https://yourusername.github.io/portfolio/`

### Method 2: Using GitHub CLI

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Create repository on GitHub and push
gh repo create portfolio --public --source=. --remote=origin --push

# Enable GitHub Pages
gh api repos/yourusername/portfolio/pages -X POST -f source[branch]=main -f source[path]=/
```

## 📝 Customization

### Update Personal Information

1. **Contact Information**: Edit the contact section in `index.html`
2. **Social Links**: Update the hero social links in `index.html`
3. **Colors**: Modify CSS variables in `styles.css`:
   ```css
   :root {
       --primary-color: #6366f1;
       --secondary-color: #8b5cf6;
       /* ... */
   }
   ```

### Add New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation menu if needed

### Update Projects

Edit the projects section in `index.html` to add or modify project cards.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Visnu Sathia Seelan**
- Email: visnusathia@gmail.com
- Phone: +60 12 998 6595
- Location: Negeri Sembilan, Malaysia

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- All the open-source communities that make web development possible

---

⭐ If you like this portfolio, feel free to star the repository!
