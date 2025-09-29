# Design System & Component Reference

A modern, neutral design system built with semantic CSS variables and strategic brand color usage. This system provides a solid foundation that can be customized for any project while maintaining consistency and accessibility.

## Design System

### Color System

Semantic color system built with CSS custom properties, emphasizing neutrals with strategic brand color usage.

#### Philosophy
- **Neutral Foundation**: Grays for 90% of UI elements
- **Strategic Brand Usage**: Brand color (`var(--brand-700)`) for primary actions only
- **Accessible Contrast**: All color combinations meet WCAG AA standards
- **Semantic Naming**: Color variables describe usage, not appearance
- **Layered Variables**: Primitive colors → semantic variables → components
- **Theme Automation**: All colors update automatically via `theme.config.json`

#### CSS Variable Architecture

**Three-Layer System**:

1. **Primitive Variables**: Base color palette (`--brand-700: #E54D2E`, `--neutral-500: #8c8c8c`)
2. **Semantic Variables**: Usage-based references (`--txt-brand: var(--brand-700)`, `--bg-light: var(--neutral-50)`)
3. **Component Variables**: Component-specific values that reference semantic variables

This architecture ensures that theme updates cascade properly: when you change `brand.color` in `theme.config.json`, it updates the primitive `--brand-700`, which automatically updates all semantic variables that reference it (`--txt-brand`, `--bg-brand`, `--bd-brand`), which in turn updates all components.

#### Text Colors
```css
--txt-dark: var(--neutral-800);     /* Primary headings, bold text */
--txt-default: var(--neutral-600);  /* Body text, regular content */
--txt-light: var(--neutral-500);    /* Secondary text, subtitles */
--txt-brand: var(--brand-700);      /* Brand text (#000BFF) - primary actions */
--txt-white: #ffffff;               /* Text on dark backgrounds */
--txt-success: var(--success-700);  /* Success messages */
--txt-error: var(--error-700);      /* Error messages */
--txt-warning: var(--warning-700);  /* Warning messages */
--txt-disable: var(--neutral-400);  /* Disabled text */
```

#### Background Colors
```css
--bg-default: #ffffff;              /* Default page background */
--bg-white: #ffffff;                /* Cards, modal backgrounds */
--bg-brand: var(--brand-700);       /* Primary brand background (#000BFF) */
--bg-brand-light: var(--brand-100); /* Light brand tints */
--bg-light: var(--neutral-50);      /* Subtle section backgrounds */
--bg-success: var(--success-700);   /* Success states */
--bg-warning: var(--warning-700);   /* Warning states */
--bg-error: var(--error-700);       /* Error states */
```

#### Border Colors
```css
--bd-default: var(--neutral-200);   /* Default borders */
--bd-brand: var(--brand-700);       /* Brand borders (#000BFF) */
--bd-success: var(--success-700);   /* Success borders */
--bd-error: var(--error-700);       /* Error borders */
--bd-warning: var(--warning-700);   /* Warning borders */
--bd-white: #ffffff;                /* White borders */
```

### Typography

#### Font Families
```css
--font-family-base: 'Inter', system-ui, sans-serif;  /* Primary font stack */
--heading-font: var(--font-family-base);             /* Consistent typography */
--body-font: var(--font-family-base);                /* Unified font system */
```

#### Font Sizes (Type Scale)
```css
--fs-h1: 4.5rem;    /* 72px - Hero headings */
--fs-h2: 3.75rem;   /* 60px - Page headings */
--fs-h3: 3.25rem;   /* 52px - Section headings */
--fs-h4: 2.75rem;   /* 44px - Subsection headings */
--fs-h5: 2rem;      /* 32px - Component headings */
--fs-h6: 1.5rem;    /* 24px - Small headings */
--fs-default: 1rem; /* 16px - Body text baseline */
--fs-large: 1.25rem; /* 20px - Emphasized text */
--fs-small: 0.875rem; /* 14px - Secondary text */
--fs-caption: 0.75rem; /* 12px - Captions, metadata */
--fs-label: 0.875rem; /* 14px - Form labels */
```

#### Font Weights
```css
--fw-default: 400;    /* Normal body text */
--fw-medium: 500;     /* Slightly emphasized text */
--fw-semibold: 600;   /* Headings, buttons */
--fw-bold: 700;       /* Strong emphasis */
--fw-extrabold: 800;  /* Heavy emphasis */
--fw-black: 900;      /* Maximum weight */
```

### Spacing Scale

Consistent spacing system based on rem units for scalability:

```css
--space-0: 0;           /* Zero spacing */
--space-xs: 0.25rem;    /* 4px - Tight spacing */
--space-sm: 0.5rem;     /* 8px - Small spacing */
--space-md: 1rem;       /* 16px - Medium spacing (baseline) */
--space-lg: 1.5rem;     /* 24px - Large spacing */
--space-xl: 2rem;       /* 32px - Extra large */
--space-2xl: 3rem;      /* 48px - Double extra large */
--space-3xl: 4rem;      /* 64px - Triple extra large */
--space-4xl: 6rem;      /* 96px - Maximum spacing */
```

### Border Radius

```css
--radius-none: 0;        /* No rounding */
--radius-sm: 0.25rem;    /* 4px - Subtle rounding */
--radius-md: 0.5rem;     /* 8px - Standard rounding */
--radius-lg: 0.75rem;    /* 12px - Prominent rounding */
--radius-xl: 1rem;       /* 16px - Large rounding */
--radius-full: 9999px;   /* Pills, circles */
```

### Elevation (Shadows)

Layered shadow system for depth hierarchy:

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);     /* Subtle elevation */
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);    /* Card elevation */
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);  /* Modal elevation */
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);  /* Floating elevation */
```

## CSS Architecture

Our CSS is organized into modular component files for better maintainability and scalability:

```
style/
├── reset.css              # CSS reset foundation
├── global.css            # Global CSS setup and defaults
├── variables/            # Design tokens (modular)
│   ├── variables.css     # Import all token files
│   ├── colors.css        # Color system
│   ├── typography.css    # Typography tokens
│   ├── spacing.css       # Spacing & layout tokens
│   └── breakpoints.css   # Responsive breakpoints
├── components/           # Reusable UI components
│   ├── buttons.css       # Interactive elements
│   ├── forms.css         # Form controls
│   ├── headings.css      # Typography components
│   ├── layout.css        # Layout utilities
│   └── utilities.css     # Helper classes
└── pages/               # Page-specific styles
    ├── design-system.css # Component showcase
    └── index.css        # Landing page
```

**Current Structure**: Fully modular architecture with separated design tokens in the `variables/` directory, reusable components, and page-specific styles for maximum maintainability and scalability.

**Build System**: Powered by **Vite** for instant development server startup, hot module reloading, and optimized production builds with zero configuration.

## Component Library

### Buttons (`buttons.css`)

Modern button system with comprehensive interactive states and accessibility features.

**Variants**:
- `btn--primary`: Brand color background (#000BFF), white text
- `btn--secondary-fill`: Neutral gray background, dark text
- `btn--secondary-outline`: Transparent background, brand border
- `btn--link`: Text-only, brand color, no background

**Features**:
- Consistent 44px minimum height (accessibility)
- Proper focus indicators with keyboard navigation
- Disabled state handling
- Hover and active state feedback

```html
<!-- Primary Variants -->
<button class="btn btn--primary">Primary</button>
<button class="btn btn--secondary-fill">Secondary</button>
<button class="btn btn--secondary-outline">Outline</button>
<button class="btn btn--link">Link</button>

<!-- Disabled State -->
<button class="btn btn--primary" disabled>Disabled</button>
```

### Forms (`forms.css`)

Comprehensive form system with accessibility, validation states, and Phosphor icon integration.

**Elements**:
- Text inputs, textareas, select dropdowns
- Checkboxes and radio buttons with custom styling
- Form labels, help text, validation messages
- Form groups for consistent spacing

**Icon System**:
- Phosphor icons via data URIs for consistency
- Search, validation, and state indicators
- Easily replaceable with any icon system

**Features**:
- WCAG compliant form controls
- Clear focus indicators
- Error and validation states
- Consistent spacing and alignment

```html
<!-- Text Input -->
<div class="input-group">
  <label class="label">Input Label</label>
  <input type="text" class="input" placeholder="Placeholder" />
</div>

<!-- Input States -->
<input type="text" class="input" placeholder="Default" />
<input type="text" class="input input--focus" placeholder="Focused" />
<input type="text" class="input input--error" value="Error state" />
<input type="text" class="input" placeholder="Disabled" disabled />

<!-- Checkbox -->
<div class="checkbox-group">
  <input type="checkbox" id="cb1" class="checkbox" />
  <label for="cb1" class="checkbox-label">Checkbox</label>
</div>
```


### Layout (`layout.css`)

**Components**: containers, grids, flex utilities, modern layout patterns
**Features**: responsive design, spacing utilities, alignment classes

```html
<!-- Containers -->
<div class="container">Default container</div>
<div class="container container--narrow">Narrow container</div>
<div class="container container--wide">Wide container</div>

<!-- Grid Layouts -->
<div class="grid grid--3-col">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="grid grid--auto-fit">
  <div>Responsive item</div>
  <div>Responsive item</div>
</div>

<!-- Stack Layout -->
<div class="stack stack--lg">
  <div>Item 1</div>
  <div>Item 2</div> <!-- Automatic spacing -->
  <div>Item 3</div>
</div>

<!-- Sidebar Layout -->
<div class="sidebar">
  <aside>Sidebar content</aside>
  <main>Main content</main>
</div>

<!-- Media Object -->
<div class="media">
  <img class="media__object" src="avatar.jpg" alt="Avatar">
  <div class="media__content">
    <h3>Title</h3>
    <p>Content text</p>
  </div>
</div>
```

## Design Principles

### Core Philosophy
1. **Neutral Foundation**: 90% neutral grays, 10% strategic brand color usage
2. **Semantic Variables**: CSS custom properties describe usage, not appearance
3. **Accessibility First**: WCAG 2.1 AA compliance built into every component
4. **Consistency**: Unified spacing scale, typography, and interaction patterns

### Technical Standards
5. **BEM Methodology**: Block__Element--Modifier naming convention
6. **Token-Based**: All values reference design system variables
7. **Touch-Friendly**: 44px minimum touch targets for mobile accessibility
8. **Progressive Enhancement**: Works without JavaScript, enhanced with it

## Component Construction Rules

When building new components:

1. **Use existing semantic variables** from `variables/` directory for consistency
2. **Follow BEM methodology** (.block__element--modifier)
3. **Include all interactive states** (hover, focus, active, disabled)
4. **Use consistent spacing** from the spacing scale (`variables/spacing.css`)
5. **Provide appropriate ARIA attributes** for accessibility
6. **Test with keyboard navigation** and screen readers
7. **Verify color contrast** meets WCAG AA standards (4.5:1 minimum)
8. **Ensure touch targets** are at least 44×44px for mobile accessibility

### Essential Dependencies

**Ultra-Clean Package Structure**:
- **Only dependency**: `vite@^7.1.6` (dev dependency)
- **Zero runtime dependencies**: Pure vanilla HTML, CSS, JavaScript
- **Optimized bundle**: Platform-specific binaries are optional, only installed as needed
- **Build performance**: Sub-second dev server startup, instant hot reload

## Development Workflow

### Adding New Components

1. **Choose the appropriate CSS file** in `style/components/` based on component type:
   - Interactive elements → `buttons.css` or `forms.css`
   - Text content → `headings.css`
   - Layout utilities → `layout.css`
   - Helper classes → `utilities.css`

2. **Follow the established patterns**:
   - Use BEM naming convention
   - Include all interactive states
   - Add responsive behavior using `variables/breakpoints.css`
   - Ensure accessibility compliance

3. **Update imports**:
   - Add new component to `components/components.css`
   - Maintain proper loading order

4. **Test the component**:
   - `npm run dev` - Start development server
   - Verify color contrast (WCAG AA: 4.5:1 minimum)
   - Test keyboard navigation and focus states
   - Check screen reader compatibility
   - Validate responsive behavior across breakpoints
   - `npm run build` - Test production build

### File Loading Order

CSS files are loaded in this specific order via `components/components.css`:

1. `buttons.css` - Interactive elements
2. `forms.css` - Form components with Phosphor icons
3. `layout.css` - Layout and structure utilities
4. `headings.css` - Typography and text components
5. `utilities.css` - Helper classes (highest specificity)

## Claude Code Integration

This design system integrates with **Claude Code** and **MCP (Model Context Protocol)** for streamlined development workflows.

### Figma MCP Integration
Transform Figma designs into production-ready code:

1. **`get_screenshot`** - View component designs
2. **`get_code`** - Generate implementation code using system variables
3. **`get_metadata`** - Extract design specifications and measurements
4. **`get_variable_defs`** - Sync design tokens with CSS custom properties

### Context7 Integration
Documentation-first development approach:
- Validates APIs and patterns before code generation
- Ensures up-to-date, version-specific implementation
- Zero hallucinated code, zero outdated patterns

### Development Workflow
```bash
"Create a button component from Figma" → Figma MCP + Context7
"Update component documentation" → Doc-Writer agent
"Check accessibility compliance" → QA agent + Context7
```

See `docs/figma-mcp-guide.md` for complete setup and usage examples.

## Utility Classes (`utilities.css`)

Comprehensive utility classes for rapid development:

```html
<!-- Spacing -->
<div class="mt-lg mb-xl p-md">Spacing utilities</div>

<!-- Display -->
<div class="flex justify-center align-center">Flexbox utilities</div>

<!-- Colors -->
<p class="text-brand bg-light">Color utilities</p>

<!-- Typography -->
<h1 class="font-bold text-center">Typography utilities</h1>

<!-- Borders and Shadows -->
<div class="border rounded-lg shadow-md">Visual utilities</div>
```