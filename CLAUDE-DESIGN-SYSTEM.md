# CLAUDE-DESIGN-SYSTEM.md - Design System Configuration

Claude Code configuration for this modern design system repository.

## ⚠️ Critical Rules

**NON-NEGOTIABLE** rules for ALL operations:

1. **Context7 Protocol**: Use MCP Context7 BEFORE implementing external libraries
2. **Agent Delegation**: Use Task tool when >5 files or specialized work needed
3. **Component Search**: Grep existing components BEFORE creating new ones
4. **Variable Verification**: Read CSS variables BEFORE using them

## Project Overview

**Modern Design System** - Theme-configurable system with Vite, vanilla web tech, Figma MCP integration.

- **Theme**: `theme.config.json` → `npm run theme` → auto-updates CSS variables
- **Components**: Accessible, BEM naming, size variants
- **Colors**: Neutral-first with strategic brand usage

## Documentation Philosophy

**Reference-based documentation** - Always check source files, not hard-coded docs.

**Why?** Single source of truth, stays synchronized, no stale docs.

**Workflow**: Documentation points to files → read actual files → use current values

## MCP Integration

### Context7 (MANDATORY)

**MUST** use before implementing ANY external library:
1. `resolve-library-id` with library name
2. `get-library-docs` with resolved ID
3. Implement using official patterns

### Figma

Use when Figma URLs provided: `get_screenshot`, `get_code`, `get_metadata`, `get_variable_defs`

## Build System

- **Tool**: Vite (see `package.json` → `devDependencies`)
- **Scripts**: See `package.json` → `scripts`
- **Key commands**: `npm run dev`, `npm run build`, `npm run theme`

## Theme System

**Config**: `theme.config.json` → `npm run theme` → CSS variables updated

**Structure**: Brand color, semantic colors, typography, component sizes

**Available Variables**: Check actual files first
```bash
# View CSS variables
grep -r "^  --" style/variables/

# Check theme config
cat theme.config.json
```

## CSS Architecture

**Load Order**: `reset.css` → `global.css` → `variables.css` → components

**Structure**:
- `style/variables/`: Design tokens (auto-generated)
- `style/components/`: BEM components
- `style/pages/`: Page-specific styles

**Rules**: Use CSS variables, BEM naming, extend existing components

## Design System Rules

**Variable Naming**:
- Text: `--txt-*` (dark, default, light, brand, disable)
- Background: `--bg-*` (default, brand, light, white)
- Border: `--bd-*` (default, light, brand)
- Typography: `--fs-*` (h1-h6, body, label, caption)

**Variable Discovery**:
1. Check `style/variables/variables.css`
2. Reference `theme.config.json`
3. Search usage: `grep -r "var(--" style/components/`

## Component Guidelines

**Adding Components**:
1. Search existing: `grep -l "component-name" style/components/*.css`
2. Create CSS in `style/components/`
3. Import in `style/components/components.css`
4. Use BEM naming
5. Use existing CSS variables
6. Include hover/focus/disabled states
7. Ensure accessibility (ARIA, keyboard nav)

## Implementation Rules

### Mandatory Checks
1. Grep existing components BEFORE creating
2. Context7 lookup for external libraries
3. Read CSS variables BEFORE using
4. Task tool if >5 files

### Quality Requirements
- **CSS Variables**: ONLY semantic variables from `variables.css`
- **Interactive States**: hover, focus, active, disabled required
- **ARIA**: Proper labels and roles required
- **Keyboard Nav**: Tab order and focus indicators required
- **Touch Targets**: Minimum 44px required
- **WCAG 2.1 AA**: 4.5:1 contrast, semantic HTML, keyboard access required

## Agent Usage

### When to Use Task Tool

**Auto-trigger**:
- File count >5 files
- Specialized work: QA validation, accessibility audit, docs
- Complex search across multiple directories

**Agents**:
- `front-end-agent`: UI components, accessibility
- `qa-agent`: Testing, accessibility, design consistency
- `doc-writer-agent`: Documentation generation

## File Organization

**Key Directories**:
- `style/`: All CSS (variables, components, pages)
- `scripts/`: JavaScript and automation
- `docs/`: Documentation
- Root: HTML pages

**Discover**: Use `ls`, `grep`, `cat` to explore current structure

## Quality Standards

- **Semantic HTML**: Landmarks, heading hierarchy
- **WCAG 2.1 AA**: Keyboard nav, ARIA, 4.5:1 contrast
- **Touch Targets**: 44px minimum (see `theme.config.json`)
- **Performance**: Optimized assets, minimal requests

## Troubleshooting

- **MCP Issues**: Check `.claude/settings.local.json`
- **CSS Issues**: Verify import order
- **Theme Not Applied**: Run `npm run theme`
- **Build Issues**: Check `dist/` output