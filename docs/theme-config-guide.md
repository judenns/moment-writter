# Theme Configuration Guide

## Quick Start

The theme configuration system lets you customize the entire design system through a single JSON file:

1. **Edit** `theme.config.json` with your custom values
2. **Run** `npm run theme` to apply changes
3. **Preview** with `npm run dev` to see results

## Configuration Structure

**Source**: [`theme.config.json`](../theme.config.json)

The configuration file contains all customizable design tokens:

```json
{
  "brand": {
    "color": "#000bff"          // Primary brand color
  },
  "colors": {
    "text-dark": "#111111",     // Headings & emphasis
    "text-default": "#525252",  // Body text
    "text-light": "#999999",    // Secondary text
    "bg-default": "#ffffff",    // Main background
    "border-default": "#e1e0f0" // Default borders
  },
  "typography": {
    "heading-font": "Inter",    // Heading font
    "body-font": "Inter",       // Body font
    "headings": {
      "h1": "4.5rem",          // Display size
      "h2": "2rem"             // Page titles
    }
  },
  "components": {
    "button": {
      "size": {
        "default": {
          "height": "56px",      // Standard button height
          "font-size": "1rem"
        }
      }
    }
  }
}
```

**Current values**: See [`theme.config.json`](../theme.config.json) for all configuration options.

## What Gets Updated

The `npm run theme` command updates CSS variables in:

- `style/variables/colors.css` - All color tokens
- `style/variables/typography.css` - Font families and sizes
- `style/components/buttons.css` - Button variants
- `style/components/forms.css` - Input sizes

## Example Customizations

**Source**: [`theme.config.json`](../theme.config.json)

### Change Brand Color to Blue

Edit `brand.color` in your theme configuration:

```json
{
  "brand": {
    "color": "#1E40AF"         // Changes all brand variables
  }
}
```

### Full Brand Color Customization

Customize brand color and component-specific overrides:

```json
{
  "brand": {
    "color": "#DC2626"         // Primary brand color
  },
  "components": {
    "button": {
      "tonal": {
        "background-color": "#FEE2E2",      // Light red tint
        "hover-background-color": "#FECACA" // Darker on hover
      }
    }
  }
}
```

### Change Font to Roboto

Update typography configuration:

```json
{
  "typography": {
    "heading-font": "Roboto",
    "body-font": "Roboto"
  }
}
```

### Make Buttons Taller

Adjust button size configuration:

```json
{
  "components": {
    "button": {
      "size": {
        "small": {
          "height": "48px"
        },
        "default": {
          "height": "60px"
        },
        "large": {
          "height": "68px"
        }
      }
    }
  }
}
```

**Current values**: See [`theme.config.json`](../theme.config.json) → `components.button.size`

## How Theme Updates Work

**Source**: [`scripts/update-theme.js`](../scripts/update-theme.js)

**Cascade System**: Theme changes flow through the CSS variable architecture:

1. `theme.config.json` values update primitive variables in `style/variables/colors.css`
2. Semantic variables automatically inherit changes (e.g., `--txt-brand: var(--brand-700)`)
3. Components use semantic variables, staying in sync automatically

**Generated CSS files**:
- `style/variables/colors.css` - Color tokens
- `style/variables/typography.css` - Font families and sizes
- `style/components/buttons.css` - Button variants
- `style/components/forms.css` - Input sizes

## Button Variant Configuration

**Source**: [`theme.config.json`](../theme.config.json) → `components.button`

Each button variant (primary, tonal, outline, link) can be customized with:

- `text-color`: Text color for normal state
- `background-color`: Background color for normal state
- `border-color`: Border color for normal state
- `hover-text-color`: Text color when hovering
- `hover-background-color`: Background color when hovering
- `hover-border-color`: Border color when hovering

**Current button configuration**: See [`theme.config.json`](../theme.config.json) → `components.button` for all variant options.

## Tips

1. **Brand Color Simplicity**: Just change `brand.color` - all brand variables update automatically
2. **Test after changes**: Always run `npm run dev:theme` to see your changes
3. **Backup your config**: The `theme.config.json` file contains all your customizations
4. **Hover colors**: Usually make hover colors 10-15% darker than the default colors
5. **Variable Architecture**: The system uses primitive → semantic → component variables for consistency

## Troubleshooting

If the theme update doesn't work:
1. Check that `theme.config.json` has valid JSON syntax
2. Make sure all color values are valid hex codes (e.g., "#FF6B35")
3. Run `npm run theme` manually to see any error messages
