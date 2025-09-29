# CLAUDE.md - Modern Design System Configuration

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

**Moments Writer** - AI-powered obituary and memorial website creator using theme-configurable design system with Vite, vanilla web technologies, and Figma MCP integration.

### Background
Obituaries have remained largely unchanged for years and are often written without strong writing skills. With advancements in AI, we have a chance to disrupt and democratize the creation of exceptional obituaries and life stories, offering a more meaningful, personalized experience.

### Audience
- **Funeral Directors**: Looking to create or enhance obituaries using our f1Connect Website Platform
- **Immediate Families**: Wanting to craft personalized and meaningful tributes for their loved ones

### Use Cases
1. **Create an Obituary from Scratch**: AI generates a personalized obituary with minimal input, capturing the deceased's essence, achievements, and key moments
2. **Rewrite or Enhance an Existing Obituary**: Users can upload or paste an existing obituary, and the AI will offer suggestions to improve emotional depth and personalization
3. **Update and Recreate Existing Obituaries**: Offer services for revisiting and updating older obituaries with new information, correcting inaccuracies, or refreshing content
4. **Create a Memorial Website**: Automatically generate a personalized "moments site" with the obituary text, photos, videos, guestbooks, and a life timeline. This digital space provides a lasting tribute for friends and family to celebrate the deceased's life

### Design System
- **Theme System**: `theme.config.json` → automated CSS variable updates
- **Component Library**: Accessible components with BEM naming and size variants
- **Brand Strategy**: Neutral-first with strategic brand color usage

## ⚠️ CRITICAL: MCP Integration & Front-End Workflow

### Context7 - MANDATORY Pre-Implementation Workflow

**🚨 STOP BEFORE WRITING ANY FRONT-END CODE 🚨**

This is a **MANDATORY** workflow with **NO EXCEPTIONS**. Skipping Context7 violates project rules.

**Required Pre-Implementation Steps:**
1. **🛑 STOP** - Do NOT write code yet
2. **🔍 Context7 Lookup** - Research patterns and best practices
   - Use `resolve-library-id` to find library documentation
   - Use `get-library-docs` to retrieve implementation patterns
   - Focus on: vanilla JS, HTML5, ARIA, accessibility, form validation
3. **🎨 Figma Reference** - Analyze design specifications
   - Use `get_screenshot` for visual reference
   - Use `get_code` for component structure
   - Use `get_metadata` for design tokens
4. **✅ Validate** - Confirm all requirements gathered
5. **💻 Implement** - NOW write code with best practices

**Pre-Implementation Checklist (Answer ALL before coding):**
- [ ] Context7 lookup completed for relevant patterns?
- [ ] Figma designs analyzed and understood?
- [ ] Accessibility requirements identified (ARIA, keyboard nav)?
- [ ] Design system variables identified?
- [ ] Form validation patterns reviewed (if applicable)?
- [ ] Keyboard navigation patterns reviewed (if applicable)?

**If Context7 is Unavailable:**
- ❌ DO NOT proceed silently
- ✅ Acknowledge the Context7 requirement
- ✅ Explain why it cannot be used
- ✅ Ask user for explicit permission to proceed without it

**Key Context7 Libraries for This Project:**
- `/jsebrech/plainvanilla` - Vanilla JavaScript patterns
- `/w3c/aria-practices` - ARIA accessibility patterns
- `/mdn/content` - HTML5, CSS, JavaScript documentation
- Framework-specific docs when using libraries

### Figma Integration

- **Get designs**: `get_screenshot`, `get_code`, `get_metadata`
- **Always reference Figma** before implementing UI components

## Build System (Vite)

- **Dev**: `npm run dev` (port 5173 with hot reload)
- **Build**: `npm run build` (optimized production)
- **Theme**: `npm run theme` (apply config changes)
- **Theme Dev**: `npm run dev:theme` (theme + dev server)
- **Style Dev**: `npm run dev:style` (design system page)

## Dependencies

- **Only dependency**: `vite@^7.1.6` (dev only)
- **Runtime**: Pure vanilla HTML, CSS, JavaScript

## Theme System

**Config**: `theme.config.json` → `npm run theme` → CSS variables updated

**Structure**: Brand color, semantic colors, typography, component sizes
**Workflow**: Edit config → run theme script → components auto-update

## Commands

```bash
npm run dev          # Dev server (localhost:5173)
npm run dev:host     # Dev server with network access
npm run dev:https    # Dev server with HTTPS
npm run dev:style    # Design system page (localhost:5173/design-system.html)
npm run dev:theme    # Apply theme + open design system page
npm run build        # Production build
npm run build:watch  # Production build with watch mode
npm run build:analyze # Production build with bundle analysis
npm run build:theme  # Apply theme + production build
npm run preview      # Preview production build
npm run preview:https # Preview production build with HTTPS
npm run theme        # Apply theme config changes
npm run clean        # Clean build artifacts and cache
```

## CSS Architecture

**Load Order**: `reset.css` → `global.css` → `variables.css` → components

```
style/
├── variables/           # Design tokens (theme-configurable)
│   ├── variables.css    # Main CSS variables (generated)
│   ├── colors.css       # Color system
│   ├── typography.css   # Typography tokens
│   ├── spacing.css      # Spacing tokens
│   └── breakpoints.css  # Responsive breakpoints
├── components/          # BEM components
│   ├── components.css   # Component imports
│   ├── buttons.css      # Button variants
│   ├── forms.css        # Form elements
│   ├── headings.css     # Heading styles
│   ├── layout.css       # Layout utilities
│   └── utilities.css    # Utility classes
└── pages/              # Page-specific styles
    ├── index.css        # Homepage styles
    └── design-system.css # Design system page styles
```

**Rules**: Use CSS variables, follow BEM naming, extend existing components

## Design System Rules

**Theme Source**: `theme.config.json` → use `npm run theme` to apply changes

**Use Existing Variables**:
- **Text**: `--txt-dark`, `--txt-default`, `--txt-light`, `--txt-brand`
- **Background**: `--bg-default`, `--bg-brand`, `--bg-light`
- **Border**: `--bd-default`, `--bd-light`, `--bd-brand`
- **Typography**: `--fs-h1` to `--fs-caption`, font families, weights
- **Sizing**: Small (44px), Default (56px), Large (64px)

**BEM Naming**: `.block__element--modifier`
**Brand Strategy**: Neutral-first with strategic brand color for actions

## Component Guidelines

**Adding Components**:
1. Create CSS file in `components/`
2. Import in `components.css`
3. Use BEM naming
4. Use existing CSS variables
5. Include hover/focus/disabled states
6. Ensure accessibility (ARIA, keyboard nav)

**Available Components**:
- **Buttons**: Primary, tonal, outline, link variants with size options
- **Forms**: Input fields, textareas with validation states
- **Headings**: Typography scale with consistent styling
- **Layout**: Grid, flexbox utilities, containers
- **Utilities**: Spacing, display, alignment helper classes

## Implementation Rules

- Check existing components first
- Use semantic CSS variables only
- Include all interactive states
- Add ARIA attributes
- Test keyboard navigation
- Ensure responsive design
- WCAG 2.1 AA compliance

## Agent Guidelines

**Front-End**: **MANDATORY Context7 lookup BEFORE ANY coding** → Figma reference → validate checklist → implement
**Figma Integration**: Extract designs, sync tokens with theme config
**Doc-Writer**: Keep docs updated with component changes
**QA**: Validate accessibility (ARIA, keyboard nav), design system consistency, performance

### 🤖 Agent Auto-Activation Rules

**When to Use Front-End Agent (via Task tool with `subagent_type: "front-end-agent"`):**

**Auto-Activation Triggers:**
- **Keywords detected**: component, implement, create, build, UI, form, button, input, dropdown, modal, card, layout
- **File patterns**: `*.html`, `style/**/*.css`, `scripts/**/*.js` (UI-related)
- **Task indicators**: "add", "create", "implement", "build" + UI component terms

**Required Agent Workflow:**
1. Launch front-end agent via Task tool
2. Agent performs Context7 lookup (MANDATORY)
3. Agent references Figma designs
4. Agent implements with Magic MCP if applicable
5. Agent validates against design system

**Example Usage:**
```javascript
// When user asks: "Create a modal component"
// Claude should use Task tool:
Task({
  subagent_type: "front-end-agent",
  description: "Implement modal component",
  prompt: "Create a modal component following design system patterns. Use Context7 to research modal accessibility patterns, reference Figma designs, then implement using BEM naming and design system variables."
})
```

**Why Use Front-End Agent:**
- Ensures Context7 lookup happens (prevents violations)
- Follows MCP integration patterns automatically
- Maintains consistency across UI implementations
- Parallel processing for complex multi-component work

### Front-End Agent Enforcement

When working on front-end tasks, the Front-End agent MUST:

1. **Acknowledge Context7 Requirement** at start of each implementation task
2. **Complete Context7 Lookups** before writing ANY code
3. **Reference Figma Designs** for all UI components
4. **Document Lookups** - State what was researched and what was learned
5. **Apply Best Practices** from Context7 findings

**Violation Protocol:**
- If Context7 is skipped, it is a **rule violation**
- If front-end agent is not used for UI work, it is a **missed optimization**
- User may request retrospective validation of existing implementations
- All violations must be acknowledged and corrected

## File Organization

**HTML Import Order**: reset → global → variables → components → page-specific
**Pages**: `index.html`, `design-system.html`
**Scripts**: `scripts/main.js` (core), `scripts/update-theme.js` (theme automation)

## Quality Standards

- **Semantic HTML**: Proper landmarks, heading hierarchy
- **WCAG 2.1 AA**: Keyboard nav, ARIA labels, 4.5:1 contrast
- **Touch Targets**: Minimum 44px
- **Performance**: Optimized assets, minimal requests

## Demo Flow

1. Show Figma design → 2. Use Claude Code natural language → 3. Demonstrate MCP workflow → 4. Show component consistency → 5. Highlight speed and quality

## Common Patterns

**New Component**: "Create [component] using design system variables, BEM naming, with hover/focus states"
**Update Theme**: "Update theme.config.json → npm run theme → test components"
**Page Layout**: "Use existing components, layout utilities, semantic HTML"

## Troubleshooting

- **MCP Issues**: Check `.claude/settings.local.json`
- **CSS Issues**: Verify import order
- **Theme Not Applied**: Run `npm run theme`
- **Build Issues**: Check `dist/` output

**Debug Steps**: `npm run dev` → browser dev tools → validate HTML → test states → accessibility audit
