# CLAUDE.md - Moments Writer Project Configuration

## ⚠️ MANDATORY: Read Design System First

**ALWAYS read [CLAUDE-DESIGN-SYSTEM.md](./CLAUDE-DESIGN-SYSTEM.md) BEFORE starting any work.**

This file contains **Moments Writer-specific configuration only**. All design system rules, MCP workflows, CSS architecture, and component guidelines are in CLAUDE-DESIGN-SYSTEM.md.

## Project Overview

**Moments Writer** - AI-powered obituary and memorial website creator. Built with Vite, vanilla web technologies, and design system foundation.

### What This Project Is

A **purpose-built application** using a design system to solve a specific problem: creating personalized, AI-enhanced obituaries and memorial websites.

### Background

Obituaries have remained largely unchanged for years. With AI, we can democratize the creation of exceptional obituaries and life stories, offering a more meaningful, personalized experience.

### Audience

- **Funeral Directors**: Create/enhance obituaries for f1Connect Website Platform
- **Immediate Families**: Craft personalized tributes for loved ones

### Use Cases

1. **Create Obituary from Scratch**: AI generates personalized obituary with minimal input
2. **Rewrite/Enhance Existing Obituary**: Upload/paste existing obituary, AI improves emotional depth
3. **Update Existing Obituaries**: Revisit older obituaries with new information or corrections
4. **Create Memorial Website**: Auto-generate "moments site" with obituary, photos, videos, guestbook, timeline

## MCP & Agent Rules

**All MCP integration rules** (Context7, Figma) are in [CLAUDE-DESIGN-SYSTEM.md](./CLAUDE-DESIGN-SYSTEM.md)

**Key Context7 Libraries for This Project:**

- `/jsebrech/plainvanilla` - Vanilla JavaScript patterns
- `/w3c/aria-practices` - ARIA accessibility patterns
- `/mdn/content` - HTML5, CSS, JavaScript documentation

**Agent Auto-Activation:** Use `front-end-agent` for UI work (editor, gallery, timeline, guestbook components)

# important-instruction-reminders

Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (\*.md) or README files. Only create documentation files if explicitly requested by the User.
