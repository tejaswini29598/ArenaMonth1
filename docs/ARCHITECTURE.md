# Component Architecture & Data Flow

## Component Hierarchy

```
App (Root)
├── Header
│   ├── Logo
│   ├── Navigation
│   │   └── NavLinks (Dynamic)
│   └── ThemeToggle
├── MainContent (Router-based)
│   ├── Home Page
│   │   ├── Hero Section
│   │   ├── FeaturesGrid
│   │   │   └── FeatureCard (Multiple)
│   │   ├── StatsSection
│   │   ├── TestimonialsSection
│   │   └── CTASection
│   ├── Services Page
│   │   ├── ServiceCards (Dynamic)
│   │   └── ProcessGrid
│   ├── Portfolio Page
│   │   ├── CategoryFilter
│   │   ├── ProjectsGrid
│   │   │   └── ProjectCard (Multiple)
│   │   └── CTASection
│   ├── About Page
│   │   ├── StorySection
│   │   ├── ValuesGrid
│   │   ├── TeamGrid
│   │   │   └── TeamCard (Multiple)
│   │   └── StatsSection
│   └── Contact Page
│       ├── ContactForm
│       ├── ContactInfo
│       └── FAQSection
└── Footer
    ├── FooterLogo
    ├── QuickLinks
    ├── ContactInfo
    └── SocialLinks
```

## State Management Pattern

### Global App State (App.js)
```javascript
const [currentPage, setCurrentPage] = useState('home');
const [theme, setTheme] = useState('light');

// Flows down through props
// Header receives: onThemeToggle, theme
// Pages receive: currentPage
// All components access constants from utils
```

### Local Component State (Contact.js)
```javascript
const [formData, setFormData] = useState({...});
const [errors, setErrors] = useState({});
const [submitted, setSubmitted] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
```

### Portfolio Filtering (Portfolio.js)
```javascript
const [activeCategory, setActiveCategory] = useState('all');
const filteredProjects = PORTFOLIO_PROJECTS.filter(...);
```

## Data Flow

### Theme Management
```
User clicks theme button
    ↓
Header.handleThemeToggle()
    ↓
App.setTheme('dark' | 'light')
    ↓
Effect hook saves to localStorage
    ↓
Effect hook updates document.documentElement.data-theme
    ↓
CSS variables switch based on [data-theme]
    ↓
All components update colors
```

### Page Navigation
```
User clicks nav link
    ↓
Navigation.handleLinkClick()
    ↓
App.handleNavigation(link)
    ↓
App.setCurrentPage(link.id)
    ↓
Effect hook scrolls to top
    ↓
App.renderPage() displays new page
```

### Form Submission
```
User fills form
    ↓
Contact.handleChange() updates formData
    ↓
Input onChange triggers state update
    ↓
User submits form
    ↓
Contact.handleSubmit()
    ↓
Form validation runs
    ↓
If valid: Send data
If invalid: Show errors
    ↓
Success message displays
    ↓
Form resets after timeout
```

### Portfolio Filtering
```
User selects category
    ↓
Portfolio.setActiveCategory(category.id)
    ↓
filteredProjects computed
    ↓
Grid re-renders with filtered items
    ↓
Scale animations trigger on new items
```

## Component Props Pattern

### Header Component
```javascript
<Header 
  onThemeToggle={handleThemeToggle}
  theme={theme}
/>
```

### Navigation Component
```javascript
<Navigation 
  onLinkClick={handleNavigation}
/>
```

### FeatureCard Component (Reusable)
```javascript
<FeatureCard 
  feature={feature}    // Feature object from constants
  index={index}        // For stagger animation delay
/>
```

## Constants Organization

### utils/constants.js Structure
```javascript
// Navigation
export const NAV_LINKS = [...]

// Features (Home page)
export const FEATURES = [...]

// Services (Services page)
export const SERVICES = [...]

// Portfolio (Portfolio page)
export const PORTFOLIO_PROJECTS = [...]
export const PORTFOLIO_CATEGORIES = [...]

// Team (About page)
export const TEAM_MEMBERS = [...]

// Testimonials (Home page)
export const TESTIMONIALS = [...]

// Contact info
export const CONTACT_INFO = {...}
export const SOCIAL_MEDIA = [...]

// Validation messages
export const VALIDATION_MESSAGES = {...}

// API endpoints (for future use)
export const API_ENDPOINTS = {...}

// Design tokens
export const BREAKPOINTS = {...}
export const Z_INDEX = {...}
export const ANIMATION_DURATIONS = {...}
export const COLORS = {...}
```

## Utility Functions Organization

### utils/helpers.js Categories

**Validation**
- validateEmail()
- validatePhone()
- validateUrl()
- validateRequired()
- validateMinLength()
- validateMaxLength()
- validatePasswordStrength()

**Formatting**
- formatPhoneNumber()
- formatCurrency()
- formatDate()
- formatDateTime()

**String Manipulation**
- truncateText()
- capitalizeFirst()
- capitalizeWords()
- slugify()

**Array Operations**
- unique()
- groupBy()
- sortBy()

**Performance**
- debounce()
- throttle()

**Storage**
- getFromLocalStorage()
- saveToLocalStorage()
- removeFromLocalStorage()

**DOM Operations**
- addClass()
- removeClass()
- hasClass()
- toggleClass()

**Animations & Scroll**
- observeElements()
- smoothScroll()
- copyToClipboard()
- lazyLoadImages()

## CSS Architecture

### Global Styles (src/styles/global.css)
- Reset and normalization
- Typography defaults
- Form element styling
- Utility classes
- Responsive utilities
- Print styles
- Accessibility support

### Design Variables (src/styles/variables.css)
- Color palette (light & dark)
- Typography system
- Spacing scale (8px baseline grid)
- Breakpoints
- Border radius scale
- Shadows
- Transitions timing
- Z-index scale

### Animations (src/styles/animations.css)
- 15+ predefined animations
- Keyframe definitions
- Stagger effects
- Hover effects
- Scroll animations
- Utility animation classes

### Component Styles
- Scoped to component
- Import global styles
- Use CSS variables
- BEM-like naming
- Mobile-first media queries
- Accessibility-focused

## Responsive Strategy

### Mobile-First Approach
```
Base styles for mobile (< 768px)
    ↓
Tablet adjustments (>= 768px)
    ↓
Desktop adjustments (>= 1024px)
    ↓
Large desktop (>= 1280px)
```

### Breakpoint Usage
```css
/* Mobile - default */
.feature-card {
  grid-template-columns: 1fr;
}

/* Tablet and up */
@media (min-width: 768px) {
  .feature-card {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .feature-card {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Accessibility Architecture

### ARIA Implementation
- `role="navigation"` on nav
- `role="main"` on main
- `aria-expanded` on toggle buttons
- `aria-label` on icon buttons
- `aria-describedby` on form inputs
- `aria-hidden="true"` on decorative elements

### Semantic HTML
```html
<header>          <!-- Header landmark -->
<nav>             <!-- Navigation landmark -->
<main>            <!-- Main landmark -->
<article>         <!-- Article landmark -->
<section>         <!-- Section content -->
<footer>          <!-- Footer landmark -->
<button>          <!-- Interactive elements -->
<form>            <!-- Form structure -->
<label>           <!-- Form labels -->
```

### Keyboard Navigation
- Tab through interactive elements
- Enter/Space on buttons
- Escape to close menus
- Arrow keys for navigation
- Focus indicators visible

## Performance Optimization

### Code Splitting (Future)
```javascript
// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home/Home'));
const Services = lazy(() => import('./pages/Services/Services'));
```

### Memoization (Future)
```javascript
// Prevent unnecessary re-renders
const FeatureCard = memo(({ feature, index }) => {...});
```

### Event Delegation
```javascript
// Single listener for multiple elements
const handleNavigation = (link) => {...}
```

## Error Handling

### Form Validation
```javascript
// Validate on submit
const newErrors = validateForm();
if (errors) {
  setErrors(newErrors);
  return; // Don't submit
}
```

### Try-Catch for Storage
```javascript
try {
  localStorage.setItem(key, JSON.stringify(value));
} catch (error) {
  console.error('Storage error:', error);
}
```

### Null Safety
```javascript
// Safe property access
const theme = getFromLocalStorage('app-theme', 'light');
```

## Testing Strategy

### Unit Tests (Example)
```javascript
// Test validation functions
test('validateEmail validates correctly', () => {
  expect(validateEmail('test@example.com')).toBe(true);
  expect(validateEmail('invalid')).toBe(false);
});
```

### Component Tests (Example)
```javascript
// Test component rendering
test('Header renders with theme toggle', () => {
  render(<Header theme="light" onThemeToggle={mockFn} />);
  expect(screen.getByRole('button', { name: /theme/i })).toBeInTheDocument();
});
```

## Extension Points

### Adding New Page
1. Create `src/pages/NewPage/` folder
2. Create component with state if needed
3. Create corresponding CSS file
4. Import in `App.js`
5. Add to `NAV_LINKS` in constants
6. Add route case in `renderPage()`

### Adding New Component
1. Create `src/components/NewComponent/` folder
2. Create JS component file
3. Create CSS file with scoped styles
4. Export component
5. Import and use in parent components

### Adding New Utility
1. Add function to `utils/helpers.js`
2. Export function
3. Import where needed
4. Add tests (when test suite exists)

---

**This architecture ensures scalability, maintainability, and optimal performance.**
