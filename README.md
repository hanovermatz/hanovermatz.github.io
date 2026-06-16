# Research Portfolio Website

Welcome to your personal research portfolio website powered by GitHub Pages! This is a professional, responsive website to showcase your scientific research, publications, and media appearances.

## 🚀 Getting Started

Your website is now live at: **https://hanovermatz-oss.github.io**

It may take a few minutes to deploy. You can check the status in your repository settings under GitHub Pages.

## 📝 Customization Guide

### 1. **Update Your Profile**

Edit `index.html` and replace the placeholder text:

- **Your Name**: Replace "Your Name" in the footer and about section
- **Research Area**: Update the "About Me" section with your specific research focus
- **Research Interests**: List your 3 main research interests
- **Contact Email**: Update `mailto:your.email@example.com` with your actual email

### 2. **Add Your Profile Picture**

1. Create an `images` folder in your repository
2. Add your profile picture as `images/profile.jpg` (or `.png`)
3. The profile picture should ideally be:
   - Square format (e.g., 500x500px)
   - Professional headshot
   - Good lighting and clear visibility

### 3. **Add Research Highlights with GIFs**

1. Create animated GIFs or videos of your research highlights
2. Save them as:
   - `images/research-1.gif`
   - `images/research-2.gif`
   - `images/research-3.gif`
3. Update the titles and descriptions in the "Research Highlights" section

### 4. **Add Your Publications**

In `index.html`, update the Publications section:

```html
<article class="publication-item slide-in-left">
    <div class="publication-year">2024</div>
    <div class="publication-content">
        <h3>Your Paper Title</h3>
        <p class="authors">Your Name, Co-author 1, Co-author 2</p>
        <p class="journal"><em>Journal Name</em>, Volume X, Issue Y</p>
        <p class="description">Brief abstract of your publication.</p>
        <div class="publication-links">
            <a href="https://doi.org/..." class="link-button">Read Paper</a>
            <a href="https://doi.org/..." class="link-button">DOI</a>
        </div>
    </div>
</article>
```

Duplicate this block for each publication and fill in your details.

### 5. **Add Media Appearances**

In the "Media & Outreach" section, update:

```html
<div class="media-item fade-in-up">
    <h3>Podcast Interview</h3>
    <p>Featured on [Podcast Name] discussing [topic]</p>
    <p class="date">Date: Month Year</p>
    <a href="https://podcast-link.com" class="link-button">Listen</a>
</div>
```

Update with your actual media appearances (podcasts, interviews, news articles, conference talks, etc.)

### 6. **Update Social Links**

In the Contact section, replace the placeholder URLs:

- Email: `mailto:your.email@example.com`
- Twitter: `https://twitter.com/yourhandle`
- LinkedIn: `https://linkedin.com/in/yourprofile`
- GitHub: `https://github.com/hanovermatz-oss`

### 7. **Customize Colors** (Optional)

Edit `style.css` and modify the CSS variables at the top:

```css
:root {
    --primary-color: #2c3e50;      /* Main color */
    --secondary-color: #3498db;    /* Accent color */
    --accent-color: #e74c3c;       /* Highlight color */
    --light-bg: #ecf0f1;           /* Light background */
}
```

## 📁 File Structure

```
hanovermatz-oss.github.io/
├── index.html          # Main page
├── style.css           # Styling
├── script.js           # JavaScript animations
├── README.md           # This file
└── images/
    ├── profile.jpg     # Your profile picture
    ├── research-1.gif  # Research highlight 1
    ├── research-2.gif  # Research highlight 2
    └── research-3.gif  # Research highlight 3
```

## ✨ Features

- ✅ **Responsive Design**: Works on desktop, tablet, and mobile
- ✅ **Smooth Animations**: Fade-ins, slide-ins, and hover effects
- ✅ **Navigation Bar**: Sticky navigation with smooth scrolling
- ✅ **Professional Layout**: Banner, about, research highlights, publications, media, contact
- ✅ **Publication Management**: Easy-to-update publication list with DOI links
- ✅ **Media Section**: Showcase podcasts, interviews, and conference talks
- ✅ **Social Links**: Connect visitors to your social profiles
- ✅ **Scroll-to-Top Button**: Convenient navigation on long pages

## 🎨 Sections Explained

### Banner
- Eye-catching header with animated wave effect
- First impression for visitors

### About
- Profile picture (left)
- Biography and research interests (right)
- Responsive layout that stacks on mobile

### Research Highlights
- 3-column grid showcasing key projects
- Perfect for animated GIFs or visualizations
- Hover effects for interactivity

### Publications
- Timeline-style publication list
- Organized by year
- Links to papers and DOIs

### Media & Outreach
- Showcase podcasts, interviews, news features
- Conference talks and guest lectures
- Grid layout with card design

### Contact
- Email, Twitter, LinkedIn, GitHub links
- Call-to-action for collaboration

## 🔧 Advanced Customization

### Adding More Sections
Simply add a new `<section>` in `index.html` and add CSS styling in `style.css`.

### Changing Fonts
Update the font-family in `style.css`:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Adding More Publications
Copy the publication item block and update with your data. The layout automatically adapts.

## 📱 Mobile Responsive

The site is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1200px
- Mobile: Below 768px

## 🚢 Deploying Changes

1. Edit your HTML/CSS/JS files
2. Commit and push to GitHub
3. Changes deploy automatically (usually within 1 minute)

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

## ❓ Troubleshooting

### Site not showing up?
- Wait 5-10 minutes for initial deployment
- Check GitHub Pages settings in repository Settings
- Ensure repository is public
- Check that repository name is `hanovermatz-oss.github.io`

### Images not loading?
- Ensure image files are in the `images/` folder
- Use lowercase filenames
- Check file extensions (`.jpg`, `.gif`, `.png`)

### Changes not reflecting?
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Hard refresh (Ctrl+F5 or Cmd+Shift+R)
- Wait a few minutes for deployment

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [HTML/CSS Reference](https://developer.mozilla.org/en-US/docs/Web)
- [Markdown Guide](https://www.markdownguide.org/)

## 📧 Support

For issues with GitHub Pages, visit the [GitHub Support](https://support.github.com) page.

---

**Happy researching and sharing your work!** 🔬📊

Remember to keep your bio, publications, and media links up to date as your career progresses.