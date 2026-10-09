Prompts.md: CSS Prompts Log

AI tool used: Claude. Every prompt below is about the CSS (layout, theme, effects). I read and understood the output before using it.

1. Layout and structure (Flexbox + Grid)

Prompt: Build a responsive landing page for "Prodesk IT" using only raw CSS. Use Flexbox for the navbar (logo left, links right) and CSS Grid for the 3 service cards. Below 768px the nav links collapse into a hamburger menu and the cards stack into one column.

2. Theme with CSS variables and dark mode

Prompt: Use CSS variables in :root for all colors. Add a body.dark class that overrides the variables so a JavaScript toggle can switch between light and dark mode.

3. Hover and micro-interactions

Prompt: Add hover states to all CTA buttons (color change plus a slight scale). Make the service cards lift on hover using translateY and a larger box-shadow with a smooth transition.

4. Sticky glassmorphism navbar

Prompt: Make the navbar position: sticky; top: 0 and give it a frosted glass effect using backdrop-filter: blur(10px) and a semi-transparent background that works in light and dark mode.

5. Match the company logo colors

Prompt: Convert all colors and the theme to match the company logo (yellow hexagons). Keep text readable: use yellow as a fill color and a darker amber for text on light backgrounds so contrast stays accessible.

6. Visual polish

Prompt: Make the website more attractive using useful CSS properties: gradients, radial-gradient glow, honeycomb background pattern, clip-path hexagon shapes, animated underline on nav links, gradient buttons with glow, and a floating hexagon animation.

7. Layout redesign and sections

Prompt: Redesign the layout with a dark hero, a two-column About section, a full-width services band, a stats panel, a "Why choose us" section with a sticky heading, two large feature panels, an FAQ using <details>, and a big footer grid with four link columns.

8. Design upgrade

Prompt: Improve the design further: floating pill navbar over the hero, slanted hero bottom edge with clip-path, new web font with font-display: swap, tick-point lists inside cards, a solutions tile grid, arrow-nudge on buttons, and a scroll reveal effect that respects prefers-reduced-motion.

9. Responsive and accessibility CSS

Prompt: Make everything mobile-first and test at 375px, 768px and 1280px. Add visible :focus-visible outlines, 44px minimum tap targets, WCAG AA color contrast, and prefers-reduced-motion support.

What I learned
Flexbox for one-dimensional layout (navbar), Grid for two-dimensional layout (cards, footer).
CSS variables make theme switching easy.
backdrop-filter needs a semi-transparent background to show the glass effect.
clip-path lets me cut elements into hexagon shapes.