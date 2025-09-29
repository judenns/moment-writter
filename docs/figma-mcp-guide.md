# Figma Dev Mode MCP Server + Claude Code Integration Guide

Official Figma Dev Mode MCP Server brings your designs directly into Claude Code - generate pixel-perfect code from your Figma designs with simple conversation.

## What This Does

Figma's official Dev Mode MCP Server connects Claude Code directly to your Figma designs, providing design context and enabling accurate code generation from your design files.

**Key Benefits:**
- **Direct Design Access**: Claude Code reads your Figma files directly
- **Pixel-Perfect Code**: Generate HTML/CSS that matches your designs exactly
- **Design System Integration**: Pull variables, components, and layout data into your workflow
- **Real-Time Sync**: Keep designs and code perfectly synchronized
- **Component-Based Workflows**: Ideal for design systems and component libraries

## Official Setup (2 Minutes)

**Requirements:**
- Figma Desktop App (required - web version not supported)
- Claude Code CLI
- Local development environment

### Step 1: Enable MCP Server in Figma Desktop
```
1. Open Figma Desktop App
2. Go to Preferences/Settings
3. Enable "Enable local MCP Server"
4. Confirm the server is running (you'll see a confirmation message)
```

### Step 2: Connect to Claude Code
```bash
# Add the official Figma Dev Mode MCP Server
claude mcp add --transport http figma-dev-mode-mcp-server http://127.0.0.1:3845/mcp

# Test the connection
claude mcp status
```

### Step 3: Verify Connection
**In Claude Code:**
```
Type: #get_code

# You should see available tools listed:
# - get_code
# - get_screenshot
# - get_metadata
# - get_variable_defs
# - get_code_connect_map
```

**If tools don't appear:**
1. Restart Figma Desktop App
2. Restart Claude Code
3. Verify server is running at http://127.0.0.1:3845/mcp

## Natural Language Workflow

**Select a Frame in Figma** → **Ask Claude Code** → **Get Perfect Code**

### 1. View and Analyze Designs
```bash
# Get visual preview of selected Figma frame
"Show me a screenshot of the currently selected component"

# Analyze design specifications
"What are the exact dimensions and spacing of this button?"

# Extract design tokens
"List all the colors and typography used in this design"
```

### 2. Generate Production Code
```bash
# Generate component code
"Create a React component for this button using our design system"

# Generate responsive CSS
"Generate CSS for this card component with mobile responsiveness"

# Create HTML structure
"Build HTML markup for this navigation component"
```

### 3. Design System Integration
```bash
# Extract design variables
"Get all color variables from this Figma file"

# Sync component properties
"Extract the typography scale and spacing tokens"

# Generate CSS custom properties
"Convert these Figma variables to CSS custom properties"
```

### 4. Component Libraries
```bash
# Map Figma to code components
"Connect this Figma component to our Button.tsx file"

# Batch component generation
"Generate all form components from the selected design system page"
```

## Complete Workflow Examples

### Example 1: Building a Pricing Card Component

**Step 1:** Select the pricing card frame in Figma Desktop
```
You: "Generate a screenshot of the currently selected component"
Claude: [Shows visual preview of the pricing card]
```

**Step 2:** Generate the component code
```
You: "Create a React component for this pricing card using our CSS variables"
Claude: [Generates complete React component with exact styling]
```

**Step 3:** Add responsive behavior
```
You: "Make this component responsive for mobile devices"
Claude: [Adds media queries and mobile-first responsive CSS]
```

**Result:** Pixel-perfect component ready for production in under 3 minutes!

### Example 2: Design System Token Extraction

**Step 1:** Select your design system page in Figma
```
You: "Extract all color variables from the currently selected Figma page"
Claude: [Lists all colors with hex values and variable names]
```

**Step 2:** Convert to CSS custom properties
```
You: "Convert these colors to CSS custom properties for our design system"
Claude: [Generates CSS variables file with proper naming conventions]
```

**Step 3:** Update theme configuration
```
You: "Update our theme.config.json with these new colors"
Claude: [Updates theme file and runs npm run theme]
```

### Example 3: Component Library Generation

**Step 1:** Select multiple button variants in Figma
```
You: "Generate code for all button variants on this page"
Claude: [Creates complete button system with all states]
```

**Step 2:** Integrate with existing design system
```
You: "Update our existing buttons.css with these new variants"
Claude: [Merges new variants with existing component styles]
```

## Available MCP Tools

### `get_screenshot`
**Purpose:** Visual preview of selected Figma frame
**Usage:** `"Show me a screenshot of the selected component"`
**Output:** PNG image of the currently selected design

### `get_code`
**Purpose:** Generate production-ready code from designs
**Usage:** `"Create React component code for this button"`
**Output:** Complete HTML/CSS/JS code with exact styling
**Features:** Responsive design, accessibility, framework-specific patterns

### `get_metadata`
**Purpose:** Extract design specifications and structure
**Usage:** `"Get the layout information for this component"`
**Output:** Dimensions, positioning, hierarchy, and structure data
**Use Cases:** Understanding component architecture, spacing analysis

### `get_variable_defs`
**Purpose:** Extract design tokens and variables
**Usage:** `"Get all color and typography variables from this file"`
**Output:** Complete list of design tokens with values
**Formats:** CSS custom properties, JavaScript objects, design system tokens

### `get_code_connect_map`
**Purpose:** Map Figma components to existing code components
**Usage:** `"Connect this Figma button to our Button.tsx component"`
**Output:** Component mapping for design-code synchronization
**Benefits:** Maintains consistency between design and implementation

## Best Practices

### Figma Organization
```
✅ Use descriptive component names: "Button/Primary/Large" not "Rectangle 47"
✅ Organize with consistent frame structure and naming conventions
✅ Create and use Figma variables for colors, spacing, and typography
✅ Group related components on dedicated pages (Buttons, Forms, Cards)
✅ Use proper component variants and properties for different states
✅ Include all interactive states (hover, focus, disabled, loading)
```

### Design System Integration
```
✅ Maintain consistent naming between Figma variables and CSS custom properties
✅ Use semantic color names (primary, secondary) rather than descriptive (blue, red)
✅ Create comprehensive spacing scales that match your CSS spacing tokens
✅ Document component usage and guidelines within Figma
✅ Keep design system components updated and synchronized
```

### Working with Claude Code
```
✅ Select specific frames in Figma before asking Claude for code
✅ Be explicit about frameworks: "React component" or "vanilla HTML/CSS"
✅ Specify design system usage: "using our existing CSS variables"
✅ Request accessibility features: "with proper ARIA labels and keyboard navigation"
✅ Ask for responsive behavior: "mobile-first responsive design"
✅ Include state variations: "with hover, focus, and disabled states"
```

### Code Generation Guidelines
```
✅ Always review generated code for consistency with your project patterns
✅ Test components across different screen sizes and devices
✅ Validate accessibility compliance with screen readers and keyboard navigation
✅ Ensure proper semantic HTML structure and meaningful class names
✅ Verify that generated CSS follows your project's architectural patterns
```

## Troubleshooting

### Connection Issues

**Problem:** MCP tools not available in Claude Code
```bash
# Check if server is running
claude mcp status

# Verify Figma Desktop app is open and MCP server enabled
# Restart both Figma Desktop and Claude Code

# Re-add the server if needed
claude mcp remove figma-dev-mode-mcp-server
claude mcp add --transport http figma-dev-mode-mcp-server http://127.0.0.1:3845/mcp
```

**Problem:** "Server not responding" errors
**Root Cause:** Figma Desktop app not running or MCP server disabled
**Solution:**
1. Ensure Figma Desktop app is open (not web version)
2. Check that "Enable local MCP Server" is enabled in Figma preferences
3. Restart Figma Desktop if the server was recently enabled

### Code Generation Issues

**Problem:** Generated code doesn't match the design exactly
**Solution:** Use a two-step approach:
```
1. "Get the exact specifications for this component"
2. "Generate code using these precise measurements and colors"
```

**Problem:** Missing design tokens or incorrect variable names
**Solution:** Extract variables first:
```
1. "Get all variables from this Figma file"
2. "Generate code using these specific variable names"
```

### Frame Selection Issues

**Problem:** "No component selected" or wrong component analyzed
**Solution:**
1. Ensure you have selected a frame in Figma Desktop (not just viewing)
2. Use specific selection: click directly on the frame/component you want
3. Verify selection by asking: "What component is currently selected?"

### Performance Issues

**Problem:** Slow response times or timeouts
**Solution:**
1. Close unnecessary Figma files to reduce memory usage
2. Select smaller, specific frames rather than entire pages
3. Break complex requests into smaller, focused operations

## Quick Reference Commands

### Visual Analysis
```bash
# Get visual preview
"Screenshot the currently selected component"
"Show me what this component looks like"

# Analyze specifications
"What are the exact colors and spacing in this design?"
"Get the typography details for this component"
"Extract the layout structure and dimensions"
```

### Code Generation
```bash
# Component generation
"Create a React component for the selected button"
"Generate vanilla HTML/CSS for this card component"
"Build a Vue.js component from this form design"

# Responsive development
"Generate mobile-first responsive CSS for this layout"
"Create a responsive React component with proper breakpoints"

# Accessibility-focused
"Generate accessible HTML with proper ARIA labels"
"Create keyboard-navigable component code"
```

### Design System Workflows
```bash
# Token extraction
"Extract all color variables from the current Figma file"
"Get typography tokens and convert to CSS custom properties"
"Pull spacing variables and format as design system tokens"

# Component mapping
"Connect this Figma component to our existing Button.tsx"
"Map all components on this page to our component library"

# Theme synchronization
"Update our theme.config.json with Figma color variables"
"Sync design tokens between Figma and our CSS variables"
```

### Batch Operations
```bash
# Multiple components
"Generate code for all button variants on this page"
"Extract specifications for all form components"
"Create React components for the entire design system page"

# Design system updates
"Update all existing components with new Figma specifications"
"Regenerate our component library based on latest Figma designs"
```

## Why This Works So Well

**For Designers:** Your designs get implemented exactly as intended - no more "that's not what I designed" moments.

**For Developers:** Skip the tedious measurement and color-picking work. Get accurate code instantly.

**For Teams:** Perfect sync between design and code. Everyone stays on the same page.

**For Projects:** Faster delivery, fewer bugs, consistent implementation across all components.

---

**Need Help?** Just ask Claude: "Help me set up Figma integration" or "Show me how to extract colors from Figma"

**Last Updated:** September 2024

## Integration with Design System Theme Configuration

**Source**: [`theme.config.json`](../theme.config.json) → [`scripts/update-theme.js`](../scripts/update-theme.js) → [`style/variables/`](../style/variables/)

This project includes automated theme configuration that works seamlessly with Figma Dev Mode MCP Server.

### Smart Variable Integration

**Source**: [`style/variables/colors.css`](../style/variables/colors.css) for CSS variable definitions

Claude Code automatically maps Figma design tokens to your existing CSS custom properties:

```css
/* Figma Color: Primary/600 */
/* Instead of hard-coded values: */
background-color: #E54D2E;

/* Claude generates using your design system: */
background-color: var(--brand-color);
color: var(--txt-on-brand);
padding: var(--space-md) var(--space-lg);
```

**Current CSS variables**: See [`style/variables/colors.css`](../style/variables/colors.css) for all available design tokens.

### Complete Design-to-Code Workflow

**Source**: [`theme.config.json`](../theme.config.json) (configuration) → [`scripts/update-theme.js`](../scripts/update-theme.js) (automation) → [`style/variables/`](../style/variables/) (output)

**1. Extract Design Tokens**
```bash
"Extract all color and spacing variables from this Figma design system page"
# → Gets complete token list with proper naming
```

**2. Generate Theme Configuration**
```bash
"Update our theme.config.json with these Figma variables"
# → Updates theme.config.json with extracted tokens
```

**Current configuration**: See [`theme.config.json`](../theme.config.json) for existing design tokens.

**3. Apply Theme System**
```bash
"Apply the updated theme configuration"
# → Runs: npm run theme
# → Updates: style/variables/colors.css, typography.css, buttons.css, forms.css
```

**4. Generate Components**
```bash
"Create React components using our updated design system variables"
# → Generates components that automatically use CSS variables from style/variables/
```

### Design System Synchronization

**Workflow**: Figma → [`theme.config.json`](../theme.config.json) → [`scripts/update-theme.js`](../scripts/update-theme.js) → [`style/variables/`](../style/variables/) → Components

- Figma design tokens are mapped to `theme.config.json`
- Theme script generates CSS custom properties in `style/variables/`
- Component code uses semantic variable names, not hard-coded values
- Theme changes propagate to all components automatically
- Maintains design-code consistency across entire system

**Example Workflow:**
```bash
# 1. Select design system colors page in Figma
"Extract color variables and update our theme configuration"

# 2. Apply theme changes (updates CSS files)
"Run the theme update process"

# 3. Generate new component with updated theme
"Create a pricing card component using the updated design system"

# Result: Component uses CSS variables from style/variables/colors.css
```

### Benefits
- **Automatic Mapping**: Figma variables → `theme.config.json` → CSS custom properties in `style/variables/`
- **Theme Flexibility**: Easy brand customization via [`theme.config.json`](../theme.config.json)
- **Component Consistency**: All generated components use design system tokens from `style/variables/`
- **Maintainability**: Single source of truth at [`theme.config.json`](../theme.config.json) for design values