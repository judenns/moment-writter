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
git clone https://github.com/yourusername/moment-writter.git
cd moment-writter

# Install & Start
npm install
npm run dev                 # http://localhost:5173
npm run dev:style           # Component showcase
```

## 📋 Development Commands

### Development
```bash
npm run dev              # Dev server (localhost:5173)
npm run dev:host         # External access
npm run dev:https        # HTTPS dev server
npm run dev:style        # Open component showcase
```

### Production
```bash
npm run build            # Build to dist/
npm run build:watch      # Watch mode build
npm run build:analyze    # Build with bundle analysis
npm run preview          # Preview build
```

### Theme & Utilities
```bash
npm run theme            # Apply theme.config.json
npm run dev:theme        # Apply theme and preview
npm run build:theme      # Apply theme and build
npm run clean            # Clean artifacts
```

**See all available commands**: Run `npm run` in your terminal

## 🎨 Theme Configuration

**Source**: [`theme.config.json`](./theme.config.json) → `npm run theme` → All CSS variables updated automatically

### Quick Customization

Edit `theme.config.json` to match your brand:

```json
{
  "brand": {
    "color": "#000bff" // Your brand color
  },
  "colors": {
    "text-dark": "#111111",
    "bg-default": "#ffffff"
  },
  "typography": {
    "headings": { "h1": "4.5rem" }
  }
}
```

Then apply changes:
```bash
npm run theme
```

**What gets updated**: All CSS custom properties in `style/variables/` match your theme instantly. Colors, typography, component styles - everything stays consistent.

See [Theme Configuration Guide](docs/theme-guide.md) for advanced customization.

## 🔧 MCP Integration

**Why MCP?** Transform natural language into production code with zero hallucinations:

- **Context7**: Access latest docs from official sources (React, Next.js, Tailwind, etc.)
- **Figma MCP**: Convert designs to code instantly with design token sync
- **Claude Code**: Natural language → validated patterns → clean implementation

### Setup with Claude Code

```bash
# Let Claude install and configure MCP servers for you
"Install Context7 MCP server and configure it"
"Set up Figma MCP integration"
```

**Manual Setup** (if preferred):

```bash
# Context7 - Documentation Server
claude mcp add --transport http context7 https://mcp.context7.com/mcp

# Figma MCP - Design Integration
claude mcp add --transport http figma-dev-mode-mcp-server http://127.0.0.1:3845/mcp
```

## 🤖 Specialized Agents

Claude Code automatically activates the right agent based on your request.

### 🎨 Front-End Agent

**What it does**: Creates UI components following your design system patterns

**Workflow**:
1. **Context7 Lookup** (MANDATORY) - Gets latest documentation
2. **Discover System** - Finds existing CSS variables and components
3. **Figma Reference** - Uses design screenshots/metadata
4. **Implement** - Creates code using BEM naming and CSS variables
5. **Validate** - Ensures accessibility and responsive design

```bash
"Create an obituary editor with rich text support"
"Build a photo gallery with drag-and-drop upload"
"Add a timeline component for life milestones"
```

### 🎯 Figma Integration Agent

**What it does**: Converts Figma designs into code that matches your design system

**Workflow**:
1. **Extract Design** - Gets screenshots, measurements, tokens from Figma
2. **Check System** - Compares with existing CSS variables
3. **Propose Updates** - Suggests theme.config.json changes
4. **Generate Code** - Creates components using established patterns
5. **Map Components** - Links Figma designs to code

```bash
"Convert this Figma memorial card to CSS"
"Extract color tokens and update theme config"
"Generate guestbook component from Figma"
```

### 📚 Doc-Writer Agent

**What it does**: Keeps documentation current with codebase changes

**Workflow**:
1. **Discover Changes** - Scans for new components or updates
2. **Verify Examples** - Tests that code examples work
3. **Update Docs** - Syncs documentation with current code
4. **Simple Language** - Uses clear explanations
5. **Version Check** - Ensures references match current setup

```bash
"Update component documentation with new variants"
"Create usage guide for the obituary editor"
"Document the AI integration workflow"
```

### ✅ QA Agent

**What it does**: Validates quality, accessibility, and design consistency

**Workflow**:
1. **System Scan** - Finds potential issues
2. **Theme Validation** - Checks theme.config.json sync
3. **Accessibility Audit** - Validates WCAG compliance
4. **Performance Check** - Reviews load times
5. **Standards Compliance** - Ensures BEM naming consistency

```bash
"Check accessibility for the memorial site generator"
"Audit performance and suggest optimizations"
"Validate all components use CSS variables correctly"
```

## 📁 Project Structure

```
moment-writter/
├── index.html              # Main landing page
├── design-system.html      # Component showcase
├── theme.config.json       # Theme settings
├── CLAUDE.md              # Project-specific config
├── CLAUDE-DESIGN-SYSTEM.md # Design system reference
├── style/
│   ├── variables/          # Design tokens (auto-generated)
│   ├── components/         # UI components
│   └── pages/              # Page-specific styles
├── scripts/                # JavaScript and automation
├── docs/                   # Documentation
└── .claude/
    └── agents/             # Specialized agent configs
```

## 📚 Documentation

- **[Design System Guide](docs/design-system.md)** - Component reference and usage
- **[Theme Configuration](docs/theme-guide.md)** - Customization options
- **[Figma MCP Guide](docs/figma-mcp-guide.md)** - Design-to-code workflow
- **[CLAUDE.md](CLAUDE.md)** - Project-specific configuration
- **[CLAUDE-DESIGN-SYSTEM.md](CLAUDE-DESIGN-SYSTEM.md)** - Design system reference

## 🛠 Architecture

**Clean & Modern**:
- Pure vanilla HTML5, CSS3, JavaScript
- Vite 7.x build system with instant hot reload
- Zero runtime dependencies (only `vite` dev dependency)
- Token-based design system with automated theme updates
- BEM methodology for consistent CSS architecture

## 💡 Use Cases

### Context7 MCP - Documentation-First Development

```bash
# Get verified, up-to-date patterns
"Get the latest CSS Grid documentation"
"Show me vanilla JS form validation patterns"
"Find accessibility best practices for rich text editors"
```

### Figma MCP - Design-to-Code Pipeline

```bash
# From Figma URL to production code
"Show me the obituary card component from [figma-url]"
"Extract color tokens from our design system"
"Generate CSS matching this Figma button exactly"
```

### Claude Code - Natural Language Interface

```bash
"Create a memorial website builder with customizable sections"
"Add AI-powered obituary enhancement feature"
"Optimize the editor for mobile accessibility"
```

## 🎬 Development Workflow

This project demonstrates how Claude Code with MCP integration creates production-quality applications through natural language.

### Moments Writer Specific Workflow

**Content Creation Flow**:
1. User provides basic information about deceased
2. AI generates initial obituary draft
3. Rich text editor allows refinement
4. Preview shows memorial website with obituary
5. User can add photos, videos, timeline entries
6. Memorial site is generated and published

**MCP-Powered Development** (MANDATORY):
- **Context7**: Zero hallucinations via official documentation lookup
  - resolve-library-id + get-library-docs for accurate patterns
  - Sources: /w3c/aria-practices, /jsebrech/plainvanilla, /mdn/content
- **Figma MCP**: Design-to-code with token synchronization
  - get_screenshot, get_code, get_metadata, get_variable_defs
  - Requires Figma Desktop with MCP server enabled
- **Workflow Coordination**: Context7 → Figma → Implement → Validate

### Production Quality Features

- Semantic HTML with proper landmarks
- Accessible components (WCAG 2.1 AA)
- Responsive design with mobile-first approach
- Optimized CSS with BEM methodology
- Respectful and empathetic UI design
- Privacy-conscious data handling

## 🌟 What Makes Moments Writer Special

**Purpose-Built Application**: Unlike generic templates, Moments Writer is specifically designed for creating meaningful obituaries and memorial websites.

**AI-Enhanced Writing**: Leverages modern AI to help users craft compelling, personalized tributes without strong writing skills.

**Design System Foundation**: Uses a robust, accessible design system as a foundation while focusing on the obituary creation mission.

**Cultural Sensitivity**: Built with respect for diverse cultural and religious traditions in memorial practices.

**Accessibility First**: Ensures memorial content is accessible to all users, reflecting the inclusive nature of remembrance.