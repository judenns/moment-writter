# CLAUDE.md - Moments Writer Project Configuration

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with this repository.

## 📋 Design System Reference

**For generic design system documentation**, see [CLAUDE-DESIGN-SYSTEM.md](./CLAUDE-DESIGN-SYSTEM.md)

This file contains Moments Writer-specific configuration. All design system rules, MCP workflows, and component guidelines are in the design system reference file.

## Project Overview

**Moments Writer** - AI-powered obituary and memorial website creator that applies a theme-configurable design system to create meaningful tributes. Built with Vite, vanilla web technologies, and Figma MCP integration.

### What This Project Is
This is a **purpose-built application** using a design system foundation to solve a specific problem: creating personalized, AI-enhanced obituaries and memorial websites. The design system is a **means to an end**, not the end product itself.

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

## Moments Writer Specific Guidelines

### Content Strategy
- **Empathetic Tone**: All UI copy should be respectful and compassionate
- **Accessibility First**: Memorial content must be accessible to all users
- **Privacy Considerations**: Handle sensitive information with care
- **Cultural Sensitivity**: Support diverse cultural and religious traditions

### Component Priorities
1. **Obituary Editor**: Rich text editor with AI enhancement
2. **Photo/Video Gallery**: Easy media upload and management
3. **Timeline Builder**: Life milestone visualization
4. **Guestbook**: Condolence and memory sharing
5. **Memorial Website Generator**: Template-based site creation

### AI Integration Points
- Obituary generation from minimal input
- Content enhancement suggestions
- Tone and style adjustments
- Grammar and clarity improvements
- Cultural and religious customization

## Agent Guidelines

**Front-End**: **MANDATORY Context7 lookup BEFORE ANY coding** → Figma reference → validate checklist → implement
**Figma Integration**: Extract designs, sync tokens with theme config
**Doc-Writer**: Keep docs updated with component changes, maintain Moments Writer context
**QA**: Validate accessibility (ARIA, keyboard nav), design system consistency, performance, content sensitivity

### 🤖 Agent Auto-Activation Rules

**When to Use Front-End Agent (via Task tool with `subagent_type: "front-end-agent"`):**

**Auto-Activation Triggers:**
- **Keywords detected**: component, implement, create, build, UI, form, button, input, dropdown, modal, card, layout, editor, gallery, timeline, guestbook
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
// When user asks: "Create an obituary editor component"
// Claude should use Task tool:
Task({
  subagent_type: "front-end-agent",
  description: "Implement obituary editor",
  prompt: "Create an obituary editor component with rich text editing capabilities. Use Context7 to research text editor accessibility patterns and form validation, reference Figma designs, then implement using BEM naming and design system variables."
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

## Project-Specific Files

**Application Pages**:
- `index.html` - Landing page and marketing
- `editor.html` - Obituary creation/editing interface (planned)
- `preview.html` - Memorial website preview (planned)
- `gallery.html` - Photo/video management (planned)

**Application Scripts**:
- `scripts/main.js` - Core application logic
- `scripts/ai-integration.js` - AI API integration (planned)
- `scripts/editor.js` - Rich text editor logic (planned)
- `scripts/gallery.js` - Media management (planned)

## Common Patterns for Moments Writer

**New Obituary Component**: "Create [component] for obituary editing/display using design system variables, BEM naming, with accessibility focus"
**AI Enhancement Feature**: "Implement AI [feature] with Context7 lookup for API patterns, proper error handling, loading states"
**Memorial Layout**: "Build memorial website [section] using existing components, layout utilities, semantic HTML, respectful design"

## Demo Flow

1. Show Figma design → 2. Use Claude Code natural language → 3. Demonstrate MCP workflow → 4. Show component consistency → 5. Highlight speed and quality → 6. Demo Moments Writer specific features (obituary creation, AI enhancement, memorial site generation)

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.