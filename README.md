# Moments Writer

AI-powered obituary and memorial website creator. Built with Vite, vanilla web technologies, and theme-configurable design system.

## 🎯 What It Does

Transform obituaries from basic text to meaningful memorials. AI helps craft compelling tributes, then generates beautiful memorial websites with photos, videos, timelines, and guestbooks.

**For**: Funeral directors and families creating personalized tributes

**Features**:
- 🤖 AI-generated obituaries from minimal input
- ✨ Enhance existing obituaries with better writing
- 🌐 Auto-generate memorial websites ("moments sites")
- 📸 Photo/video galleries, timelines, guestbooks

## 🚀 Quick Start

```bash
npm install
npm run dev              # Start dev server → localhost:5173
npm run dev:style        # View component showcase
```

## 📋 Key Commands

```bash
# Development
npm run dev              # Dev server
npm run dev:theme        # Apply theme + preview

# Production
npm run build            # Build to dist/
npm run preview          # Preview build

# Theme
npm run theme            # Apply theme.config.json changes
```

Run `npm run` to see all available commands

## 🎨 Theme System

Edit [`theme.config.json`](./theme.config.json) → Run `npm run theme` → All CSS variables update automatically

```json
{
  "brand": { "color": "#000bff" },
  "colors": { "text-dark": "#111111" },
  "typography": { "headings": { "h1": "4.5rem" } }
}
```

See [Theme Guide](docs/theme-guide.md) for details

## 🔧 MCP Integration

**Powered by Claude Code with MCP servers for production-quality code:**

- **Context7**: Official documentation lookup (zero hallucinations)
- **Figma MCP**: Design-to-code with token sync
- **Specialized Agents**: Auto-activated based on task type

### Setup

Ask Claude Code:
```bash
"Install Context7 MCP server"
"Set up Figma MCP integration"
```

Or [install manually](https://docs.claude.com/en/docs/mcp)

## 🤖 Specialized Agents

Auto-activated based on your request:

**🎨 Front-End**: Creates UI components following design system
- Context7 lookup → Figma reference → Implement → Validate
- Example: *"Create an obituary editor with rich text support"*

**🎯 Figma Integration**: Converts designs to code with token sync
- Extract design → Check system → Generate code → Map components
- Example: *"Convert this Figma memorial card to CSS"*

**📚 Doc-Writer**: Keeps documentation current
- Discover changes → Verify examples → Update docs
- Example: *"Update component documentation"*

**✅ QA**: Validates quality and accessibility
- System scan → Theme validation → Accessibility audit → Performance check
- Example: *"Check accessibility for memorial site"*

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

## 🛠 Architecture

- **Stack**: Vanilla HTML5, CSS3, JavaScript
- **Build**: Vite 7.x (instant hot reload)
- **Dependencies**: Zero runtime deps
- **Design System**: Token-based with BEM methodology
- **Theme**: Automated updates via `theme.config.json`

## 📚 Documentation

**User Guides**:
- [Design System Guide](docs/design-system.md) - Components and usage
- [Theme Configuration](docs/theme-guide.md) - Customization
- [Figma MCP Guide](docs/figma-mcp-guide.md) - Design-to-code

**Claude Code Config** (for AI development):
- [CLAUDE.md](CLAUDE.md) - Project-specific context
- [CLAUDE-DESIGN-SYSTEM.md](CLAUDE-DESIGN-SYSTEM.md) - Design system rules

*Note: Design system file synced from [design-system-demo](https://github.com/judenns/design-system-demo)*

## 🌟 What Makes This Special

**Purpose-Built**: Designed specifically for obituaries and memorials, not a generic template

**AI-Enhanced**: Helps users craft compelling tributes without strong writing skills

**Accessible**: WCAG 2.1 AA compliant, respecting the inclusive nature of remembrance

**Culturally Sensitive**: Supports diverse cultural and religious memorial traditions