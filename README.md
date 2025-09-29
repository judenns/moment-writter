# Moments Writer

AI-powered obituary and memorial website creator using theme-configurable design system with Vite, vanilla web technologies, and Figma MCP integration.

## 🎯 Project Overview

**Mission**: Democratize the creation of exceptional obituaries and life stories through AI, offering a more meaningful, personalized experience.

### Background

Obituaries have remained largely unchanged for years and are often written without strong writing skills. With advancements in AI, we have a chance to disrupt and transform how we honor and remember loved ones.

### Target Audience

- **Funeral Directors**: Create or enhance obituaries using f1Connect Website Platform
- **Immediate Families**: Craft personalized and meaningful tributes for their loved ones

### Key Features

1. **Create from Scratch**: AI generates personalized obituaries with minimal input
2. **Rewrite & Enhance**: Upload existing obituaries for AI-powered improvements
3. **Update & Recreate**: Revisit and update older obituaries with new information
4. **Memorial Websites**: Auto-generate "moments sites" with photos, videos, guestbooks, and timelines

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/judenns/design-system-demo.git moment-writter
cd moment-writter

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

**Source**: [`theme.config.json`](./theme.config.json) → `npm run theme` → All CSS variables updated automatically

### Quick Start

**Configuration file**: [`theme.config.json`](./theme.config.json)

```json
{
  "brand": {
    "color": "#000bff" // Your brand color
  },
  "colors": {
    "text-dark": "#111111", // Heading text
    "bg-default": "#ffffff" // Background
  },
  "typography": {
    "headings": { "h1": "4.5rem" } // Custom sizing
  }
}
```

**Current values**: See [`theme.config.json`](./theme.config.json) for all configuration options.

### Usage Examples

**Source**: [`theme.config.json`](./theme.config.json)

Edit the configuration file to match your brand:

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

**Generated files**:
- `style/variables/colors.css` - Color tokens
- `style/variables/typography.css` - Font families and sizes
- `style/components/buttons.css` - Button variants
- `style/components/forms.css` - Input sizes

See [Theme Configuration Guide](docs/theme-config-guide.md) for advanced customization.

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
claude mcp add --transport http context7 https://mcp.context7.com/mcp

# Figma MCP Local Server  - Design Integration
claude mcp add --transport http figma-dev-mode-mcp-server http://127.0.0.1:3845/mcp
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

## 🎬 Demo Creation Process

This demo showcases how Claude Code with MCP integration creates production-quality design systems through natural language. Here's the complete workflow:

### Phase 1: Foundation Setup

**Theme System Architecture**:
```bash
# Natural language request
"Create a theme configuration system that:
- Uses JSON config as single source of truth
- Generates CSS variables automatically
- Updates all components instantly
- Supports complete brand customization"

# Claude Code:
1. Designs theme.config.json schema
2. Creates update-theme.js automation script
3. Generates CSS variable system
4. Adds npm scripts for workflow integration
```

**Design System Foundation**:
```bash
# Request
"Build a scalable CSS architecture with:
- BEM naming for components
- CSS custom properties for theming
- Responsive design utilities
- Accessibility-first approach"

# Claude Code:
1. Structures style/ directory
2. Creates reset.css and global.css
3. Implements variable system
4. Builds component library
```

### Phase 2: Component Development with MCP

**Context7 Integration** (MANDATORY Documentation-First):
```bash
# Request
"Create accessible button components following web standards"

# Front-End Agent MANDATORY workflow:
1. **🛑 STOP**: Do NOT write code yet (MANDATORY)
2. **Context7 Lookup**: Research patterns and best practices
   - resolve-library-id → find /w3c/aria-practices
   - get-library-docs → fetch WCAG button patterns
   - Focus: vanilla JS, HTML5, ARIA, accessibility
3. **Figma Reference**: Analyze design specifications
   - get_screenshot → visual preview
   - get_metadata → dimensions and spacing
   - get_code → component structure
4. **Pre-Implementation Checklist**: Validate 6 requirements
   - Context7 lookup completed?
   - Figma designs analyzed?
   - Accessibility requirements identified?
   - Design system variables identified?
   - Form validation patterns reviewed?
   - Keyboard navigation patterns reviewed?
5. **Implementation**: NOW create buttons.css with proper ARIA
6. **Validation**: Ensure keyboard navigation and focus states

# Note: Skipping Context7 violates project rules - NO EXCEPTIONS
```

**Figma MCP Integration** (Design-to-Code):
```bash
# Request with Figma URL
"Generate form components matching this Figma design"

# Figma Integration workflow:
1. **Extract Design**: Get visual and structural data
   - get_screenshot → visual preview of selected frame
   - get_metadata → dimensions, positioning, hierarchy
   - get_code → component structure and styling
2. **Token Mapping**: Compare Figma variables with CSS variables
   - get_variable_defs → extract design tokens
3. **Propose Updates**: Suggest theme.config.json changes
4. **Generate Code**: Create forms.css using design system patterns
5. **Link Components**: Map Figma → code via get_code_connect_map

# Always: Select frame in Figma Desktop before requesting code generation
```

### Phase 3: Documentation & Quality

**Automated Documentation**:
```bash
# Request
"Create comprehensive documentation for the design system"

# Documentation workflow:
1. **Component Discovery**: Scan style/ directory for all components
2. **Extract Patterns**: Identify BEM naming and variable usage
3. **Generate Examples**: Create live code examples with syntax highlighting
4. **Usage Guide**: Document theme configuration workflow
5. **Sync Check**: Ensure docs match actual implementation
```

**Quality Assurance**:
```bash
# Request
"Audit the design system for accessibility and performance"

# QA workflow:
1. **Accessibility Scan**: Validate WCAG 2.1 AA compliance
   - ARIA attributes present and correct
   - Keyboard navigation functional
   - Color contrast ratios ≥4.5:1
   - Focus indicators visible
2. **Theme Validation**: Check theme.config.json synchronization
   - CSS variables match config
   - All components use theme variables
3. **Performance Check**: Review CSS architecture and load times
   - Optimized selector specificity
   - Minimal file size
4. **Standards Audit**: Ensure BEM consistency across all components
```

### Phase 4: Real-World Application

**Multi-Component Page Creation**:
```bash
# Single natural language request
"Build a landing page with hero, features section, and CTA"

# Claude Code orchestrates specialized workflows:
1. **Context7 Lookup**: Get responsive design patterns (MANDATORY first step)
2. **Figma Integration**: Match designs if Figma URL provided
3. **Front-End Implementation**: Create layout structure using design system
4. **QA Validation**: Validate accessibility and performance
5. **Documentation**: Update component documentation and examples

# Note: Each component follows the MANDATORY Context7 → Figma → Implement workflow
```

### Key Demo Features

**1. Theme Configuration System**:
- Edit `theme.config.json` → Run `npm run theme` → Instant visual update
- Demonstrates single source of truth architecture
- Shows automated CSS variable generation

**2. MCP-Powered Development**:
- **Context7 (MANDATORY)**: Zero hallucinations via official documentation lookup
  - resolve-library-id + get-library-docs for accurate patterns
  - Sources: /w3c/aria-practices, /jsebrech/plainvanilla, /mdn/content
- **Figma MCP**: Design-to-code with token synchronization
  - get_screenshot, get_code, get_metadata, get_variable_defs
  - Requires Figma Desktop with MCP server enabled
- **Workflow Coordination**: Context7 → Figma → Implement → Validate

**3. Production Quality Output**:
- Semantic HTML with proper landmarks
- Accessible components (WCAG 2.1 AA)
- Responsive design with mobile-first approach
- Optimized CSS with BEM methodology

**4. Developer Experience**:
- Natural language interface for all operations
- Instant feedback via Vite hot reload
- Automated workflows (theme updates, builds)
- Clear documentation with live examples

### Demo Script

**5-Minute Walkthrough**:

```bash
# 1. Show theme configuration (30s)
"Let me show you our theme system - edit theme.config.json, run npm run theme"

# 2. Demonstrate MCP integration (1m)
"Create a pricing card component"
# Watch the MANDATORY workflow:
# → Context7 fetches accessibility patterns (resolve-library-id + get-library-docs)
# → Figma provides visual design (get_screenshot + get_metadata)
# → Code generates using design system variables

# 3. Show component consistency (1m)
"Notice how all components automatically match the theme"
# Browse design-system.html to see unified styling

# 4. Update theme in real-time (30s)
# Change brand color in theme.config.json
npm run theme
# All components update instantly

# 5. Show documentation quality (1m)
# Open docs/ to show auto-generated guides
# Demonstrate live code examples
```

### Technical Highlights

**What Makes This Demo Special**:

1. **Zero Runtime Dependencies**: Pure vanilla web technologies (HTML, CSS, JS)
2. **Automated Theme System**: theme.config.json → npm run theme → CSS variables
3. **MANDATORY MCP Integration**: Context7 documentation-first workflow prevents hallucinations
4. **Workflow Orchestration**: Context7 → Figma → Implement → Validate pipeline
5. **Production Ready**: WCAG 2.1 AA accessibility, optimized performance, maintainable architecture

**Commands Used in Demo**:
```bash
npm install              # One-time setup
npm run dev              # Live development
npm run dev:style        # Component showcase
npm run theme            # Apply configuration
npm run build            # Production build
```

### Lessons Learned

**Best Practices Demonstrated**:
- **Single Source of Truth**: theme.config.json controls all design tokens
- **Automated Workflows**: npm run theme reduces manual CSS updates
- **Documentation-First Development**: MANDATORY Context7 lookup prevents hallucinations
- **Design-Code Synchronization**: Figma MCP ensures pixel-perfect implementation
- **Quality Gates**: Accessibility, performance, and standards validation at every step
- **Natural Language Interface**: Complex workflows via simple conversational requests

**Scalability Proven**:
- **Theme System**: Scales from 5 to 500+ components without architectural changes
- **Component Library**: BEM methodology and CSS variables enable unlimited growth
- **MCP Integration**: Context7 + Figma workflow adapts to any tech stack (React, Vue, vanilla)
- **Workflow Orchestration**: MANDATORY Context7 → Figma → Implement pipeline handles increasing complexity
- **Documentation Sync**: Automated docs generation keeps pace with component growth
