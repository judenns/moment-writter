# Modern Design System - Starter Template

Production-ready design system template with Claude Code + MCP integration for seamless design-to-code workflows.

## 🚀 Quick Start

```bash
# Clone & Rename
git clone https://github.com/judenns/design-system-demo.git my-design-system
cd my-design-system

# Update remote origin (optional - for your own repo)
git remote set-url origin https://github.com/yourusername/my-design-system.git

# Install & Start
npm install
npm run dev                 # http://localhost:5173
npm run dev:style           # Component showcase
```

## 📋 Development Commands

```bash
# Development
npm run dev                 # Dev server (http://localhost:5173)
npm run dev:host           # External access
npm run dev:https          # HTTPS dev server
npm run dev:style          # Open component showcase

# Production
npm run build              # Build to dist/
npm run build:watch        # Watch mode build
npm run preview            # Preview build

# Theme
npm run theme              # Apply theme.config.json
npm run dev:theme          # Apply theme and preview
npm run build:theme        # Apply theme and build
npm run clean              # Clean artifacts
```

## 🎨 Theme Configuration - Instant Brand Adaptation

**How it works**: `theme.config.json` → `npm run theme` → All CSS variables updated automatically

### Quick Start
```json
{
  "brand": {
    "color": "#E54D2E"          // Your brand color
  },
  "colors": {
    "text-dark": "#1f1f1f",     // Heading text
    "bg-default": "#ffffff"      // Background
  },
  "typography": {
    "headings": { "h1": "4.5rem" } // Custom sizing
  }
}
```

### Usage Examples

**Corporate Theme**:
```json
{
  "brand": { "color": "#1E40AF" },
  "colors": {
    "text-dark": "#1f2937",
    "bg-default": "#f8fafc"
  }
}
```

**Marketing Theme**:
```json
{
  "brand": { "color": "#E54D2E" },
  "colors": {
    "text-dark": "#18181b",
    "bg-default": "#fefefe"
  }
}
```

**SaaS Product Theme**:
```json
{
  "brand": { "color": "#7C3AED" },
  "typography": {
    "headings": { "h1": "3.5rem", "h2": "2.25rem" }
  }
}
```

```bash
# Apply your theme configuration
npm run theme
```

**What gets updated**: All CSS custom properties in `style/variables/` match your theme instantly. Colors, typography, component styles - everything stays consistent across all components.

See [Theme Guide](docs/theme-config-guide.md) for advanced customization.

## 🔧 MCP Integration - Supercharge Your Workflow

**Why MCP?** Transform natural language into production code with zero hallucinations:
- **Context7**: Access latest docs from official sources (React, Next.js, Tailwind, etc.)
- **Figma MCP**: Convert designs to code instantly with design token sync
- **Claude Code**: Natural language → validated patterns → clean implementation

### Setup with Claude Code (No Tokens Required)

```bash
# Let Claude install and configure MCP servers for you
"Install Context7 MCP server and configure it"
"Set up Figma MCP integration with my token"
"Help me configure MCP servers in Claude settings"
```

**Manual Setup** (if preferred):

```bash
# Context7 - Documentation Server
npm install -g @context7/mcp-server

# Figma MCP - Design Integration
npm install -g @figma/mcp-server
# Token: Figma → Account Settings → Personal Access Tokens
```

## 🤖 Specialized Agents

Claude Code automatically activates the right agent based on your request. Each agent follows a specific workflow to ensure quality and consistency.

### 🎨 Front-End Agent
**What it does**: Creates UI components following your design system patterns
**Workflow**:
1. **Context7 Lookup** (MANDATORY) - Gets latest documentation from official sources
2. **Discover System** - Finds existing CSS variables and components
3. **Figma Reference** - Uses design screenshots/metadata if available
4. **Implement** - Creates code using BEM naming and CSS variables
5. **Validate** - Ensures accessibility and responsive design

```bash
"Create a card component with hover effects"
"Build a responsive navigation bar using our design tokens"
"Add a pricing table with three tiers"
```

### 🎯 Figma Integration Agent
**What it does**: Converts Figma designs into code that matches your design system
**Workflow**:
1. **Extract Design** - Gets screenshots, measurements, and design tokens from Figma
2. **Check System** - Compares with existing CSS variables and theme config
3. **Propose Updates** - Suggests theme.config.json changes instead of direct CSS edits
4. **Generate Code** - Creates components using your established patterns
5. **Map Components** - Links Figma designs to code components

```bash
"Convert this Figma button to CSS"
"Extract color tokens and update our theme config"
"Generate code from selected Figma frame"
```

### 📚 Doc-Writer Agent
**What it does**: Keeps documentation current with your codebase changes
**Workflow**:
1. **Discover Changes** - Scans for new components or system updates
2. **Verify Examples** - Tests that all code examples actually work
3. **Update Docs** - Syncs documentation with current codebase
4. **Simple Language** - Uses clear explanations for all skill levels
5. **Version Check** - Ensures all references match current setup

```bash
"Update the component documentation with new button variants"
"Create usage examples for the theme configuration system"
"Document the MCP integration workflow"
```

### ✅ QA Agent
**What it does**: Validates code quality, accessibility, and design system consistency
**Workflow**:
1. **System Scan** - Uses tools to find potential issues in CSS/HTML
2. **Theme Validation** - Checks theme.config.json sync with CSS variables
3. **Accessibility Audit** - Validates WCAG compliance and keyboard navigation
4. **Performance Check** - Reviews load times and asset optimization
5. **Standards Compliance** - Ensures BEM naming and component consistency

```bash
"Check accessibility compliance for the new form components"
"Audit performance issues and suggest optimizations"
"Validate that all components use CSS variables correctly"
```

### ⚙️ General-Purpose Agent
**What it does**: Handles complex multi-step tasks and research
**Workflow**:
1. **Task Analysis** - Breaks down complex requests into steps
2. **Research** - Gathers information using Context7 and web search
3. **Plan Creation** - Develops structured approach
4. **Implementation** - Executes plan using appropriate tools
5. **Validation** - Verifies results and suggests improvements

```bash
"Research and implement user authentication"
"Optimize build configuration for better performance"
"Set up automated testing for components"
```

## 📁 Project Structure

```
style/
├── reset.css & global.css     # Foundation
├── variables/                 # Design tokens
│   ├── colors.css            # Color system
│   ├── typography.css        # Type scale
│   └── spacing.css           # Spacing tokens
├── components/               # UI components
│   ├── buttons.css           # Button variants
│   ├── forms.css             # Form controls
│   └── layout.css            # Layout utilities
└── pages/                   # Page-specific styles

docs/                         # Guides and documentation
.claude/                     # Claude Code configuration
scripts/                     # Theme automation
```

## 🎯 Real-World Use Cases

### Context7 MCP - Documentation-First Development
```bash
# Get verified, up-to-date patterns
"Get the latest CSS Grid documentation"
"Show me React 19 hook patterns from official docs"
"Find accessibility best practices for buttons"

# Zero hallucinations - always current official docs
```

### Figma MCP - Design-to-Code Pipeline
```bash
# From Figma URL to production code
"Show me the header component from [figma-url]"
"Extract color tokens from our design system"
"Generate CSS matching this Figma button exactly"
"Sync spacing values between Figma and CSS variables"

# Perfect design-developer handoff
```

### Claude Code - Natural Language Interface
```bash
"Create a responsive dashboard layout using our variables"
"Add dark mode support to all components"
"Optimize this page for mobile accessibility"

# Multi-step tasks handled automatically
```

## 📚 Documentation

- **[Design System Guide](docs/design-system.md)** - Component reference
- **[Figma MCP Guide](docs/figma-mcp-guide.md)** - Design-to-code workflow
- **[Theme Configuration](docs/theme-config-guide.md)** - Customization options

## 🛠 Architecture

**Clean & Modern**:
- Pure vanilla HTML5, CSS3, JavaScript
- Vite 7.x build system with instant hot reload
- Zero runtime dependencies (only `vite` dev dependency)
- Token-based design system with automated theme updates
- BEM methodology for consistent CSS architecture
