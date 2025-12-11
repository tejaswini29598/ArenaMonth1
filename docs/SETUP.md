# Setup Instructions

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16 or higher): [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**: [Install Yarn](https://yarnpkg.com/)
- **Git**: [Download](https://git-scm.com/)
- **Text Editor or IDE**: VS Code recommended ([Download](https://code.visualstudio.com/))

### Verify Installation

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

## Installation Steps

### 1. Clone or Extract the Project

If cloning from Git:
```bash
git clone <repository-url>
cd business-website
```

Or if you have the project files already:
```bash
cd business-website
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

This will install all required packages from `package.json`:
- react (18.2.0)
- react-dom (18.2.0)
- react-router-dom (6.8.0)
- prop-types (15.8.1)
- react-scripts (5.0.1)

### 3. Start Development Server

```bash
# Using npm
npm start

# Or using yarn
yarn start
```

The application will:
- Open automatically in your default browser
- Be available at `http://localhost:3000`
- Reload automatically when you make changes (Hot Module Reloading)

### 4. Build for Production

When ready to deploy:

```bash
# Using npm
npm run build

# Or using yarn
yarn build
```

This creates an optimized production build in the `build/` directory:
- Minified files
- Optimized bundle size
- Production-ready assets

## Project Structure Quick Start

```
business-website/
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   ├── styles/          # Global and design system styles
│   ├── utils/           # Helper functions and constants
│   ├── App.js           # Main App component
│   └── index.js         # React entry point
├── public/
│   ├── index.html       # HTML template
│   └── manifest.json    # PWA manifest
├── package.json         # Dependencies and scripts
└── README.md            # Full documentation
```

## Available Scripts

### Development
```bash
npm start
# Runs app in development mode with hot reload
```

### Build
```bash
npm run build
# Creates optimized production build
```

### Testing
```bash
npm test
# Launches test runner (when tests are added)
```

### Eject (Advanced)
```bash
npm eject
# Note: this is one-way operation!
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory (optional):

```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENVIRONMENT=development
```

Access in code:
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

### Port Configuration

To use a different port:

```bash
# Linux/Mac
PORT=3001 npm start

# Windows (cmd)
set PORT=3001 && npm start

# Windows (PowerShell)
$env:PORT=3001; npm start
```

## Troubleshooting

### Issue: npm install fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# Use a different port
PORT=3001 npm start

# Or kill process using port 3000
# Linux/Mac: lsof -ti:3000 | xargs kill -9
# Windows: netstat -ano | findstr :3000
```

### Issue: Module not found errors

**Solution:**
```bash
# Check if node_modules exists
ls node_modules

# If not, install again
npm install

# Or clear and reinstall
npm ci
```

### Issue: Hot reload not working

**Solution:**
1. Check if files are saved
2. Restart development server: Ctrl+C then `npm start`
3. Clear browser cache: Ctrl+Shift+Delete
4. Restart IDE/Editor

## Browser Support

The application works on:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

For older browsers, consider using polyfills.

## Performance Tips

1. **Minimize node_modules**: Only install necessary packages
2. **Use production builds**: For testing final performance
3. **Optimize images**: Use appropriate formats and sizes
4. **Lazy load components**: For better initial load time
5. **Monitor bundle size**: Use `npm run build` to check

## Development Tools

### Recommended VS Code Extensions

1. **ES7+ React/Redux/React-Native snippets**
   - dsznajder.es7-react-js-snippets

2. **Prettier - Code formatter**
   - esbenp.prettier-vscode

3. **ESLint**
   - dbaeumer.vscode-eslint

4. **CSS Peek**
   - pranaygp.vscode-css-peek

5. **Thunder Client** (API testing)
   - rangav.vscode-thunder-client

### Browser DevTools

**Chrome DevTools** (F12):
- Elements panel: Inspect HTML/CSS
- Console: JavaScript debugging
- Network: Monitor HTTP requests
- Performance: Analyze rendering
- Lighthouse: Generate reports

## Next Steps

1. **Explore the code**: Review components and pages
2. **Customize content**: Update text and data in `constants.js`
3. **Add your images**: Replace emoji with actual images
4. **Connect API**: Integrate with backend services
5. **Deploy**: Choose a hosting platform

## Getting Help

- **React Docs**: https://react.dev
- **MDN Web Docs**: https://developer.mozilla.org
- **Stack Overflow**: Tag with `reactjs`
- **GitHub Issues**: Check project issues
- **Documentation**: Read included docs/

## Common Tasks

### Change Theme Colors

Edit `src/styles/variables.css`:
```css
:root {
  --primary-color: #2563eb; /* Change this */
  --accent-color: #f59e0b;  /* And this */
}
```

### Add New Page

1. Create folder: `src/pages/NewPage/`
2. Create `NewPage.js` and `NewPage.css`
3. Import in `App.js`
4. Add to `NAV_LINKS` in `constants.js`

### Modify Navigation

Edit `src/utils/constants.js`:
```javascript
export const NAV_LINKS = [
  // Add or modify navigation items
];
```

### Update Contact Info

Edit `src/utils/constants.js`:
```javascript
export const CONTACT_INFO = {
  email: 'your-email@example.com',
  phone: '+1 (555) 123-4567',
  // ...
};
```

---

**Ready to start coding? Happy developing! 🚀**
