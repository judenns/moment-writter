// scripts/update-theme.js - One script to update everything
import fs from 'fs';

function updateTheme() {
  console.log('🎨 Updating theme from config...');

  const config = JSON.parse(fs.readFileSync('theme.config.json', 'utf8'));

  // Update primitive colors first, then semantic colors
  updatePrimitiveColors(config.colors, config.brand, config.components);
  updateSemanticColors();
  updateTypography(config.typography);
  updateComponentSizes(config.components);
  // Note: Component colors now use CSS variables automatically

  console.log('✅ Theme updated successfully!');
  console.log(`📅 Updated at: ${new Date().toLocaleString()}`);
}

function updatePrimitiveColors(colors, brand, components) {
  console.log('📝 Updating primitive colors...');

  const filePath = 'style/variables/colors.css';
  let content = fs.readFileSync(filePath, 'utf8');

  // Brand color mapping: config brand.color → --brand-700
  const brandColor = brand.color;
  const brand800 = darkenColor(brandColor, 0.15); // Darken more for hover

  // Create primitive color mappings
  const primitiveColorMap = {
    // Neutral scale mappings
    '--neutral-900': colors['text-dark'],
    '--neutral-700': colors['text-default'],
    '--neutral-500': colors['text-light'],
    '--neutral-400': colors['text-disable'], // For text-disable and border-default
    '--neutral-300': colors['border-light'],
    '--neutral-50': colors['bg-light'],

    // Brand scale mappings
    '--brand-700': brandColor, // Main brand color
    '--brand-800': brand800,   // Hover color
    '--brand-50': colors['bg-brand-light'],
    '--brand-100': components.button.tonal['background-color'], // Tonal bg
    '--brand-200': components.button.tonal['hover-background-color'] // Tonal hover
  };

  Object.entries(primitiveColorMap).forEach(([variable, value]) => {
    // Only update if the value is not empty/undefined/null
    if (value && value.trim() !== '') {
      content = updateVariable(content, variable, value);
    }
  });

  fs.writeFileSync(filePath, content);
}

function updateSemanticColors() {
  console.log('📝 Updating semantic colors...');

  const filePath = 'style/variables/colors.css';
  let content = fs.readFileSync(filePath, 'utf8');

  // Semantic colors that reference primitive scales
  const semanticColorMap = {
    // Text colors
    '--txt-dark': 'var(--neutral-900)',
    '--txt-default': 'var(--neutral-700)',
    '--txt-light': 'var(--neutral-500)',
    '--txt-brand': 'var(--brand-700)',
    '--txt-disable': 'var(--neutral-400)',
    '--txt-white': '#ffffff',

    // Background colors
    '--bg-default': '#ffffff',
    '--bg-brand': 'var(--brand-700)',
    '--bg-light': 'var(--neutral-50)',
    '--bg-white': '#ffffff',
    '--bg-brand-light': 'var(--brand-50)',

    // Border colors
    '--bd-default': 'var(--neutral-400)',
    '--bd-light': 'var(--neutral-300)',
    '--bd-brand': 'var(--brand-700)',
    '--bd-white': '#ffffff'
  };

  Object.entries(semanticColorMap).forEach(([variable, value]) => {
    content = updateVariable(content, variable, value);
  });

  fs.writeFileSync(filePath, content);
}

function updateTypography(typography) {
  console.log('📝 Updating typography...');

  const filePath = 'style/variables/typography.css';
  let content = fs.readFileSync(filePath, 'utf8');

  const headingFontStack = `'${typography['heading-font']}', system-ui, sans-serif`;
  const bodyFontStack = `'${typography['body-font']}', system-ui, sans-serif`;
  const displayFontStack = `'${typography['display-font']}', system-ui, sans-serif`;

  const typoMap = {
    '--heading-font': headingFontStack,
    '--default-font': bodyFontStack,
    '--display-font': displayFontStack,
    '--fs-h1': typography.headings.h1,
    '--fs-h2': typography.headings.h2,
    '--fs-h3': typography.headings.h3,
    '--fs-h4': typography.headings.h4,
    '--fs-h5': typography.headings.h5,
    '--fs-h6': typography.headings.h6,
    '--fs-large': typography.body.large,
    '--fs-default': typography.body.default,
    '--fs-small': typography.body.small,
    '--fs-label': typography.label,
    '--fs-caption': typography.caption
  };

  Object.entries(typoMap).forEach(([variable, value]) => {
    content = updateVariable(content, variable, value);
  });

  fs.writeFileSync(filePath, content);
}

function updateComponentSizes(components) {
  console.log('📝 Updating component sizes...');

  // Update button sizes (height and font-size)
  if (components.button?.size) {
    const filePath = 'style/components/buttons.css';
    let content = fs.readFileSync(filePath, 'utf8');

    // Handle both old format (string) and new format (object)
    const defaultSize = typeof components.button.size.default === 'string'
      ? { height: components.button.size.default, fontSize: '1rem' }
      : components.button.size.default;

    const smallSize = typeof components.button.size.small === 'string'
      ? { height: components.button.size.small, fontSize: '0.875rem' }
      : components.button.size.small;

    const largeSize = typeof components.button.size.large === 'string'
      ? { height: components.button.size.large, fontSize: '1.25rem' }
      : components.button.size.large;

    content = updateButtonSize(content, '.btn', defaultSize.height, defaultSize['font-size']);
    content = updateButtonSize(content, '.btn--sm', smallSize.height, smallSize['font-size']);
    content = updateButtonSize(content, '.btn--lg', largeSize.height, largeSize['font-size']);

    fs.writeFileSync(filePath, content);
  }

  // Update input sizes (height and font-size)
  if (components.input?.size) {
    const filePath = 'style/components/forms.css';
    let content = fs.readFileSync(filePath, 'utf8');

    // Handle both old format (string) and new format (object)
    const defaultSize = typeof components.input.size.default === 'string'
      ? { height: components.input.size.default, fontSize: '1rem' }
      : components.input.size.default;

    const smallSize = typeof components.input.size.small === 'string'
      ? { height: components.input.size.small, fontSize: '0.875rem' }
      : components.input.size.small;

    const largeSize = typeof components.input.size.large === 'string'
      ? { height: components.input.size.large, fontSize: '1.25rem' }
      : components.input.size.large;

    content = updateInputSize(content, '.input', defaultSize.height, defaultSize['font-size']);
    content = updateInputSize(content, '.input--sm', smallSize.height, smallSize['font-size']);
    content = updateInputSize(content, '.input--lg', largeSize.height, largeSize['font-size']);
    content = updateInputHeight(content, '.select', defaultSize.height);
    content = updateInputHeight(content, '.textarea', defaultSize.height);

    fs.writeFileSync(filePath, content);
  }
}

function updateButtonSize(content, selector, height, fontSize) {
  // Update height
  let updatedContent = updateButtonHeight(content, selector, height);

  // Update font-size if provided
  if (fontSize) {
    updatedContent = updateButtonFontSize(updatedContent, selector, fontSize);
  }

  return updatedContent;
}

function updateButtonHeight(content, selector, height) {
  // More specific regex that handles multiline CSS rules better
  const regex = new RegExp(
    `(${escapeRegex(selector)}\\s*\\{[\\s\\S]*?height:\\s*)([^;\\n]+)(;[\\s\\S]*?\\})`,
    'g'
  );

  if (content.match(regex)) {
    return content.replace(regex, `$1${height}$3`);
  }
  return content;
}

function updateButtonFontSize(content, selector, fontSize) {
  const regex = new RegExp(
    `(${escapeRegex(selector)}\\s*\\{[\\s\\S]*?font-size:\\s*)([^;\\n]+)(;[\\s\\S]*?\\})`,
    'g'
  );

  if (content.match(regex)) {
    return content.replace(regex, `$1${fontSize}$3`);
  }
  return content;
}

function updateInputSize(content, selector, height, fontSize) {
  // Update height
  let updatedContent = updateInputHeight(content, selector, height);

  // Update font-size if provided
  if (fontSize) {
    updatedContent = updateInputFontSize(updatedContent, selector, fontSize);
  }

  return updatedContent;
}

function updateInputHeight(content, selector, height) {
  const property = selector.includes('textarea') ? 'min-height' : 'height';
  const regex = new RegExp(
    `(${escapeRegex(selector)}\\s*{[^}]*${property}:\\s*)([^;]+)(;[^}]*})`,
    'gs'
  );

  if (content.match(regex)) {
    return content.replace(regex, `$1${height}$3`);
  }
  return content;
}

function updateInputFontSize(content, selector, fontSize) {
  const regex = new RegExp(
    `(${escapeRegex(selector)}\\s*{[^}]*font-size:\\s*)([^;]+)(;[^}]*})`,
    'gs'
  );

  if (content.match(regex)) {
    return content.replace(regex, `$1${fontSize}$3`);
  }
  return content;
}

function updateVariable(content, variable, value) {
  const regex = new RegExp(`(${escapeRegex(variable)}:\\s*)([^;]+)(;)`, 'g');
  if (content.match(regex)) {
    return content.replace(regex, `$1${value}$3`);
  }
  return content;
}

// Helper functions for component updates removed - no longer needed

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Helper function to darken a hex color
function darkenColor(hex, amount) {
  const color = hex.replace('#', '');
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  const newR = Math.round(r * (1 - amount));
  const newG = Math.round(g * (1 - amount));
  const newB = Math.round(b * (1 - amount));

  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
}

// Run the update
updateTheme();
