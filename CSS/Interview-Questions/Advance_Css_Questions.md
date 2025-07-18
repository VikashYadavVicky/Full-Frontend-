# 🔥 100 Advanced CSS Q&A (Short/Long)

### 1. **What is the difference between `visibility: hidden` and `display: none` in CSS?**
- **Answer:** `visibility: hidden` hides the element but keeps its space in the layout. `display: none` hides the element and removes it from the layout flow entirely.

### 2. **Explain the difference between `relative`, `absolute`, `fixed`, and `sticky` positioning.**
- **Answer:**
  - `relative`: Positions the element relative to its normal position.
  - `absolute`: Positions the element relative to the nearest positioned ancestor.
  - `fixed`: Positions the element relative to the viewport.
  - `sticky`: Switches between `relative` and `fixed` based on scroll position.

### 3. **What is the stacking context in CSS?**
- **Answer:** A stacking context is an element’s 3D space in which child elements are stacked. It’s created by certain CSS properties like `z-index`, `opacity`, `transform`, etc.

### 4. **How does `z-index` work in stacking contexts?**
- **Answer:** `z-index` controls the order of elements on the z-axis within the same stacking context. A higher value means the element will appear on top.

### 5. **What is the `will-change` property and why is it useful?**
- **Answer:** `will-change` hints to the browser which properties will change, allowing for performance optimizations, especially in animations.

### 6. **What’s the difference between `em`, `rem`, `%`, `vh`, and `vw` units?**
- **Answer:**
  - `em`: Relative to the font-size of the element.
  - `rem`: Relative to the root element’s font-size.
  - `%`: Relative to the parent’s dimension.
  - `vh`: 1% of the viewport height.
  - `vw`: 1% of the viewport width.

### 7. **What does the `contain` property do in CSS?**
- **Answer:** It allows developers to control which aspects of an element are isolated from the rest of the page, optimizing rendering performance.

### 8. **How does CSS Grid differ from Flexbox?**
- **Answer:** Flexbox is one-dimensional (row or column), while CSS Grid is two-dimensional, allowing control over both rows and columns simultaneously.

### 9. **What is the purpose of `@supports` in CSS?**
- **Answer:** It checks if a browser supports a certain CSS feature and conditionally applies styles accordingly.

### 10. **What is `clip-path` in CSS?**
- **Answer:** It defines a visible region of an element, letting you create complex shapes like circles, ellipses, or polygons.

### 11. **How do you create a responsive layout using CSS Grid?**
- **Answer:** Use `grid-template-columns` with functions like `repeat(auto-fit, minmax())` and media queries to adapt layouts to various screen sizes.

### 12. **Explain the `object-fit` property in CSS.**
- **Answer:** It defines how media (like images or videos) should be resized to fit their container. Values include `cover`, `contain`, `fill`, and `none`.

### 13. **How does `backface-visibility` affect 3D transforms?**
- **Answer:** It controls whether the back side of an element is visible when rotated. Used in 3D flip animations.

### 14. **What is `calc()` in CSS?**
- **Answer:** `calc()` lets you perform calculations directly in CSS for property values like width, height, margin, etc.

### 15. **How do you center an element both vertically and horizontally using Flexbox?**
- **Answer:** Use `display: flex; justify-content: center; align-items: center;` on the container.

### 16. **What is a pseudo-element?**
- **Answer:** A pseudo-element lets you style specific parts of an element, like `::before`, `::after`, `::first-line`, etc.

### 17. **What is the difference between `min-content`, `max-content`, and `fit-content`?**
- **Answer:**
  - `min-content`: Smallest content width possible.
  - `max-content`: Widest content width possible.
  - `fit-content`: Clamps the size between min/max values.

### 18. **What is the purpose of `isolation: isolate`?**
- **Answer:** It creates a new stacking context, helping avoid z-index issues with sibling elements.

### 19. **What does the `aspect-ratio` property do?**
- **Answer:** It maintains the ratio between an element’s width and height, useful for responsive images and videos.

### 20. **How does `pointer-events: none` affect element behavior?**
- **Answer:** It disables mouse interaction on an element, making it invisible to pointer events like click, hover, etc.

### 21. **What is the purpose of the `@keyframes` rule in CSS?**
- **Answer:** The `@keyframes` rule defines intermediate steps in a CSS animation sequence, allowing smooth transitions between styles.

### 22. **How can you detect if a browser supports a CSS property?**
- **Answer:** Use the `@supports` rule (Feature Queries), e.g., `@supports (display: grid) { ... }`.

### 23. **Explain the concept of “reflow” and “repaint” in browser rendering.**
- **Answer:** Reflow is recalculating layout, and repaint is updating the pixels on the screen. Reflow is more expensive and should be minimized.

### 24. **How do transitions differ from animations in CSS?**
- **Answer:** Transitions require a trigger (like hover), while animations run automatically and can loop using `@keyframes`.

### 25. **What is the role of the `transform` property?**
- **Answer:** It allows rotation, scaling, moving, and skewing elements without affecting the document flow.

### 26. **What is the Shadow DOM and how does it relate to CSS?**
- **Answer:** Shadow DOM encapsulates a component’s styles and markup, preventing styles from leaking in or out.

### 27. **How do you implement dark mode using CSS?**
- **Answer:** Use `@media (prefers-color-scheme: dark)` to apply styles when the user has dark mode enabled.

### 28. **What is the difference between `overflow: scroll`, `auto`, and `hidden`?**
- **Answer:**
  - `scroll`: Always shows scrollbars.
  - `auto`: Shows scrollbars only when needed.
  - `hidden`: Clips content without scrollbars.

### 29. **How can you create a full-screen background image that maintains aspect ratio?**
- **Answer:** Use `background-image`, `background-size: cover`, and `background-position: center`.

### 30. **How do you make an element float over all other elements on the page?**
- **Answer:** Use `position: fixed` or `absolute` with a high `z-index`.

### 31. **What is the `mix-blend-mode` property?**
- **Answer:** It defines how an element’s content should blend with the background content, like `multiply`, `screen`, etc.

### 32. **What are custom properties (CSS variables)?**
- **Answer:** Defined using `--name` syntax and accessed via `var(--name)`, they allow reuse and dynamic styling.

### 33. **What is the `filter` property in CSS?**
- **Answer:** It applies graphical effects like blur, brightness, contrast, and grayscale to elements.

### 34. **How do you animate elements on scroll?**
- **Answer:** Use `position: sticky`, CSS animations, or combine CSS with JavaScript/IntersectionObserver API.

### 35. **What is the difference between `nth-child` and `nth-of-type` selectors?**
- **Answer:** `nth-child` counts all children, while `nth-of-type` targets specific element types only.

### 36. **What is the difference between `:not(:last-child)` and `:not(:last-of-type)`?**
- **Answer:**
  - `:not(:last-child)`: Targets all but the last child element.
  - `:not(:last-of-type)`: Targets all but the last of a specific element type.

### 37. **What are media queries and how do they work?**
- **Answer:** Media queries apply styles conditionally based on device characteristics like width, height, or color scheme.

### 38. **How do you visually hide content but keep it accessible for screen readers?**
- **Answer:** Use:
  ```css
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }

### 39. How do you animate gradients in CSS?
- Answer: Use background-image with keyframes or transitions and background-size + background-position.

### 40. How can you prevent font rendering issues (FOUT/FOIT)?
- Answer: Use font-display: swap in @font-face to show fallback text until custom font loads.


### 41. **What are custom properties (CSS variables), and how are they used?**

* **Answer:** CSS variables are reusable values declared with `--` prefix. Example:

```css
:root {
  --main-color: #3498db;
}
.element {
  color: var(--main-color);
}
```

### 42. **What is `accent-color` in CSS?**

* **Answer:** It customizes the color of form controls like checkboxes and radio buttons. Example:

```css
input[type="checkbox"] {
  accent-color: red;
}
```

### 43. **What does `forced-colors` media feature do?**

* **Answer:** It detects if the user has enabled a high-contrast or forced color mode. Example:

```css
@media (forced-colors: active) {
  body {
    background: Canvas;
    color: CanvasText;
  }
}
```

### 44. **What is the difference between `initial`, `inherit`, and `unset`?**

* **Answer:**

  * `initial`: Resets to the default value defined by the browser.
  * `inherit`: Takes the value from the parent.
  * `unset`: Acts as `inherit` for inherited properties, otherwise acts as `initial`.

### 45. **How does the `@layer` rule help in CSS?**

* **Answer:** `@layer` helps organize and control the cascade of styles by defining style layers with priorities.

### 46. **What is the difference between `::before` and `:before`?**

* **Answer:** Both work the same, but `::before` is the correct modern syntax (double colon is for pseudo-elements).

### 47. **How do you animate height from `0` to `auto`?**

* **Answer:** CSS alone can't transition `auto`. Use `max-height` with a fixed large value and `overflow: hidden`.

### 48. **What is the difference between `nth-child()` and `nth-of-type()`?**

* **Answer:**

  * `nth-child()`: Counts all children.
  * `nth-of-type()`: Counts only specific element types.

### 49. **What does `scroll-snap` do in CSS?**

* **Answer:** It enables smooth and controlled snapping to scroll positions for carousels or sections.

### 50. **Explain the difference between `transform: translate()` and `position` properties.**

* **Answer:** `translate()` is a transformation applied visually without affecting layout; `position` affects document flow.

### 51. **What are logical properties in CSS?**

* **Answer:** They adapt to writing modes and directions. Example: `margin-inline-start`, `padding-block-end`.

### 52. **What is the `content-visibility` property?**

* **Answer:** It enables content to be skipped in rendering until needed. Improves performance for large pages.

### 53. **What is the difference between `scale()` and `zoom` in CSS?**

* **Answer:**

  * `scale()`: A transform function that visually scales an element.
  * `zoom`: A non-standard property (supported mainly in IE/Chrome).

### 54. **What is the purpose of `resize` in CSS?**

* **Answer:** It allows users to resize elements like textareas. Values: `none`, `both`, `horizontal`, `vertical`.

### 55. **What is the use of `writing-mode` in CSS?**

* **Answer:** Controls the direction in which text is laid out, such as `horizontal-tb`, `vertical-rl`, etc.

### 56. **What are `counter` and `counter-increment` in CSS?**

* **Answer:** They allow you to create automatic numbering systems using counters and pseudo-elements.

### 57. **What is the `:is()` pseudo-class used for?**

* **Answer:** Simplifies writing complex selectors. Example:

```css
:is(h1, h2, h3) {
  color: red;
}
```

### 58. **What does `scroll-behavior: smooth` do?**

* **Answer:** Enables smooth scrolling for anchor links or when using `element.scrollIntoView()`.

### 59. **What are blend modes in CSS?**

* **Answer:** They determine how an element’s content blends with its background using `mix-blend-mode` or `background-blend-mode`.

### 60. **What is the difference between `box-sizing: border-box` and `content-box`?**

* **Answer:**

  * `border-box`: Includes padding and border in total width/height.
  * `content-box`: Default, excludes padding and border from width/height.

### 61. **What is `contain` property in CSS used for?**

* **Answer:** It improves performance by containing layout, paint, or size for an element, isolating it from the rest of the document.

### 62. **What does `will-change` do in CSS?**

* **Answer:** It hints to the browser which properties will change, allowing it to optimize rendering ahead of time.

### 63. **How does `backdrop-filter` work?**

* **Answer:** It applies filter effects (e.g., blur) to the background behind an element, often used with transparency.

### 64. **What is the purpose of `aspect-ratio`?**

* **Answer:** It sets a preferred width-to-height ratio for an element, helping maintain consistent scaling.

### 65. **What is `@property` used for in CSS?**

* **Answer:** It defines typed custom properties (variables) with type, inheritance, and initial value for use in transitions and animations.

### 66. **What is the `scroll-padding` property?**

* **Answer:** It defines the padding area within the scroll container where snap points are aligned.

### 67. **Explain the use of `inset` shorthand.**

* **Answer:** It is a shorthand for top, right, bottom, and left inset offsets for absolutely positioned elements.

### 68. **What does `pointer-events: none` do?**

* **Answer:** It disables mouse interaction with an element.

### 69. **What is the purpose of `text-decoration-skip-ink`?**

* **Answer:** It makes underlines skip descenders of characters like "g", "y", for better readability.

### 70. **What is a CSS Houdini API?**

* **Answer:** Houdini exposes parts of the CSS engine to developers, allowing custom styling logic using JavaScript.

### 71. **What is the `env()` function in CSS?**

* **Answer:** It allows access to environment variables, commonly used on iOS devices for safe area insets.

### 72. **What is the purpose of `min()` and `max()` in CSS?**

* **Answer:** These functions return the smallest or largest value from a set, useful in responsive design.

### 73. **What is `image-rendering: pixelated` used for?**

* **Answer:** It makes low-resolution images appear blocky when scaled up.

### 74. **What is `overflow-anchor` used for?**

* **Answer:** It prevents scroll position jumps when content above the viewport changes.

### 75. **What is the difference between `display: none` and `visibility: hidden`?**

* **Answer:** `display: none` removes the element from layout; `visibility: hidden` hides it but keeps its layout space.

### 76. **What is the use of `clip-path`?**

* **Answer:** It clips an element to a specific shape (e.g., circle, polygon).

### 77. **How does the `:where()` pseudo-class differ from `:is()`?**

* **Answer:** `:where()` is like `:is()`, but has no specificity, allowing easier overriding.

### 78. **What is the purpose of `scroll-margin`?**

* **Answer:** It adds spacing around an element when it is scrolled into view using scroll snapping or anchors.

### 79. **What is the `touch-action` property used for?**

* **Answer:** It defines whether or how an element can be manipulated by touch gestures (scrolling, zooming).

### 80. **What is the difference between `em`, `rem`, and `%` units in CSS?**

* **Answer:**

  * `em`: Relative to the font-size of the parent.
  * `rem`: Relative to the root font-size.
  * `%`: Relative to the parent element’s size.

### 81. **What is the difference between `display: contents` and `display: none`?**

* **Answer:** `display: contents` makes the container disappear while keeping its children rendered. `display: none` removes the entire element and its children from rendering.

### 82. **What is the `revert` value in CSS?**

* **Answer:** `revert` resets a property to its value from the user-agent stylesheet (like browser defaults).

### 83. **How does `line-clamp` work in CSS?**

* **Answer:** It truncates text after a set number of lines with ellipsis, often used with `display: -webkit-box` and `-webkit-line-clamp`.

### 84. **What are `::part()` and `::theme()` selectors?**

* **Answer:** `::part()` lets you style shadow DOM parts. `::theme()` is still experimental and allows theme scoping.

### 85. **What is the `text-wrap` property used for?**

* **Answer:** Introduced in newer specs, it allows control over how text wraps at line breaks (e.g., `wrap`, `nowrap`, `balance`).

### 86. **How does `animation-composition` affect CSS animations?**

* **Answer:** It determines how animations are combined: `replace`, `add`, or `accumulate`.

### 87. **What is `scroll-timeline` in CSS?**

* **Answer:** It allows animations to be linked to scroll progress, currently supported experimentally.

### 88. **What is the `anchor-position` property?**

* **Answer:** Used for anchoring elements relative to another (experimental feature).

### 89. **What is the difference between `position: sticky` and `fixed`?**

* **Answer:** `sticky` toggles between relative and fixed depending on scroll; `fixed` always stays fixed relative to viewport.

### 90. **What is a CSS Container Query?**

* **Answer:** Allows you to apply styles based on the size of a container rather than the viewport.

### 91. **What is `@scope` used for in CSS?**

* **Answer:** Defines a scope for CSS rules, limiting their application to a section of the DOM (experimental).

### 92. **What is the `overflow: clip` value?**

* **Answer:** It clips overflowing content without adding scrollbars.

### 93. **What are subgrid layouts in CSS Grid?**

* **Answer:** Subgrid allows child elements to align with the grid of the parent container.

### 94. **How does the `:has()` pseudo-class work?**

* **Answer:** Allows selecting a parent element based on its children. Example: `div:has(img)`.

### 95. **What is the `view-timeline` in CSS?**

* **Answer:** It defines timelines for elements entering or leaving the viewport (scroll-based animation sync).

### 96. **What is the `baseline-source` property used for?**

* **Answer:** It specifies which child box determines the baseline alignment in flex/grid layouts.

### 97. **How does `forced-color-adjust` work?**

* **Answer:** It allows or prevents automatic adjustments in forced colors mode.

### 98. **What is `contain-intrinsic-size`?**

* **Answer:** Provides fallback size for an element when content visibility is hidden until rendered.

### 99. **What is the use of `text-align-last`?**

* **Answer:** It sets the alignment of the last line of text in a paragraph.

### 100. **How can `accent-color` be customized for a theme?**

* **Answer:** By setting it on the root or specific form elements, you can theme checkboxes, radios, etc. Example:

```css
:root {
  accent-color: #e67e22;
}
```

## 🔥 100 Advanced CSS MCQs

### 1. **Which CSS property creates a new stacking context?**

* A) z-index: 0
* B) transform: scale(1)
* C) opacity: 1
* D) display: block
* **Correct Answer:** B) transform: scale(1)

### 2. **What is the effect of `isolation: isolate` in CSS?**

* A) It combines stacking contexts.
* B) It forces the element to appear on top.
* C) It creates a new stacking context.
* D) It disables z-index for children.
* **Correct Answer:** C) It creates a new stacking context.

### 3. **Which unit is relative to the viewport's width?**

* A) em
* B) rem
* C) vh
* D) vw
* **Correct Answer:** D) vw

### 4. **What does `contain: layout paint` optimize?**

* A) Only layout calculations
* B) Layout and paint operations
* C) Event propagation
* D) Text rendering
* **Correct Answer:** B) Layout and paint operations

### 5. **Which CSS feature allows detection of feature support in the browser?**

* A) @media
* B) @supports
* C) @keyframes
* D) @import
* **Correct Answer:** B) @supports

### 6. **What does the `clip-path` property do?**

* A) Crops the outer container
* B) Hides overflow
* C) Defines a visible shape for an element
* D) Adjusts element opacity
* **Correct Answer:** C) Defines a visible shape for an element

### 7. **Which pseudo-class targets elements being dragged?**

* A) \:drag
* B) \:draggable
* C) \:active
* D) \:dragging
* **Correct Answer:** D) \:dragging

### 8. **What is the `@layer` rule used for in CSS?**

* A) Creating multiple backgrounds
* B) Managing specificity and order of styles
* C) Making fixed headers
* D) Defining media queries
* **Correct Answer:** B) Managing specificity and order of styles

### 9. **How does `backface-visibility: hidden` affect a 3D transformed element?**

* A) Disables all 3D effects
* B) Hides the back of the element when flipped
* C) Improves performance
* D) Locks Z index
* **Correct Answer:** B) Hides the back of the element when flipped

### 10. **What does `scroll-snap-type` control?**

* A) Scroll speed
* B) Scroll behavior at breakpoints
* C) Scroll snapping behavior
* D) Viewport overflow
* **Correct Answer:** C) Scroll snapping behavior

### 11. Which CSS property helps reduce paint and layout costs by isolating a part of the DOM?
- A) containment  
- B) display  
- C) z-index  
- D) transform  
- **Answer:** A) containment

### 12. What does the `mix-blend-mode` property do?
- A) Blends background images only  
- B) Controls transparency of an element  
- C) Specifies how an element’s content should blend with its background  
- D) Specifies blending of pseudo-elements  
- **Answer:** C) Specifies how an element’s content should blend with its background

### 13. What does `backdrop-filter` allow you to do?
- A) Filter text inside an element  
- B) Apply effects to elements below a semi-transparent overlay  
- C) Change the stacking order  
- D) Crop the background image  
- **Answer:** B) Apply effects to elements below a semi-transparent overlay

### 14. Which of the following triggers a new stacking context?
- A) `z-index: auto`  
- B) `opacity: 1`  
- C) `position: relative`  
- D) `transform: scale(1)`  
- **Answer:** D) `transform: scale(1)`

### 15. What does the `:is()` pseudo-class do?
- A) Targets visible elements  
- B) Groups multiple selectors with shared styles  
- C) Targets only the first element  
- D) Applies styles based on element type  
- **Answer:** B) Groups multiple selectors with shared styles

### 16. What is the main benefit of using `prefers-reduced-motion` media query?
- A) Improves color contrast  
- B) Enables accessibility for users with motion sensitivity  
- C) Prevents layout shifts  
- D) Disables hover states  
- **Answer:** B) Enables accessibility for users with motion sensitivity

### 17. Which of the following will create a new block formatting context?
- A) `float: left`  
- B) `position: relative`  
- C) `display: inline-block`  
- D) `line-height: 1.5`  
- **Answer:** A) `float: left`

### 18. What does `scroll-behavior: smooth;` do?
- A) Prevents scroll bounce  
- B) Makes scrolling animations smooth for anchor links  
- C) Locks scroll at sections  
- D) Enables auto scroll to top  
- **Answer:** B) Makes scrolling animations smooth for anchor links

### 19. What does the `accent-color` property control?
- A) Font color  
- B) Color of form controls like checkboxes and radio buttons  
- C) Background color of buttons  
- D) Border color of focus elements  
- **Answer:** B) Color of form controls like checkboxes and radio buttons

### 20. What is the purpose of `env(safe-area-inset-*)`?
- A) Adds scroll margin  
- B) Creates safe zones for content on devices with notches or rounded corners  
- C) Applies box shadows  
- D) Aligns text inside grid areas  
- **Answer:** B) Creates safe zones for content on devices with notches or rounded corners

### 21. Which CSS feature allows conditional rules based on browser support?
- A) @media  
- B) @keyframes  
- C) @supports  
- D) @import  
- **Answer:** C) @supports

### 22. What does the `initial` keyword do in CSS?
- A) Resets the property to browser default  
- B) Inherits the value from the parent  
- C) Applies the first declared rule  
- D) Removes the property  
- **Answer:** A) Resets the property to browser default

### 23. Which of the following values will prevent a flex item from shrinking?
- A) `flex-shrink: 1`  
- B) `flex-grow: 1`  
- C) `flex-shrink: 0`  
- D) `flex-basis: auto`  
- **Answer:** C) `flex-shrink: 0`

### 24. How does `object-position` differ from `background-position`?
- A) It only affects videos  
- B) It controls the alignment of replaced elements like images or videos  
- C) It defines parallax effect  
- D) It works only with absolute positioning  
- **Answer:** B) It controls the alignment of replaced elements like images or videos

### 25. Which layout method allows for overlapping content regions?
- A) Grid  
- B) Float  
- C) Flexbox  
- D) Positioning  
- **Answer:** D) Positioning

### 26. What is the purpose of the `overscroll-behavior` property?
- A) Adds scrollbars to all elements  
- B) Prevents scroll chaining in nested scrollable containers  
- C) Disables smooth scroll  
- D) Fixes scroll snapping  
- **Answer:** B) Prevents scroll chaining in nested scrollable containers

### 27. Which of the following will apply a grayscale filter?
- A) `filter: hue(0deg);`  
- B) `filter: grayscale(100%);`  
- C) `background-blend-mode: gray;`  
- D) `opacity: 50%;`  
- **Answer:** B) `filter: grayscale(100%);`

### 28. Which keyword allows a CSS variable to fallback to another value?
- A) `!default`  
- B) `--fallback`  
- C) `var(--name, fallback)`  
- D) `@fallback`  
- **Answer:** C) `var(--name, fallback)`

### 29. What is the effect of `transform: translateZ(0);` on performance?
- A) Breaks the stacking order  
- B) Forces hardware acceleration  
- C) Prevents element from rendering  
- D) Disables animations  
- **Answer:** B) Forces hardware acceleration

### 30. What is the role of `inset` in CSS?
- A) Used in padding calculation  
- B) Shorthand for top, right, bottom, and left in absolute positioning  
- C) Used in filter effects  
- D) Works only with grid  
- **Answer:** B) Shorthand for top, right, bottom, and left in absolute positioning

### 31. What is the effect of `mix-blend-mode: multiply;` in CSS?
- A) Applies a shadow effect  
- B) Blends an element with the background based on the multiply formula  
- C) Animates an element in layers  
- D) Adds a blur to the element  
- **Answer:** B) Blends an element with the background based on the multiply formula

### 32. What does `writing-mode: vertical-rl;` do?
- A) Aligns text to the right  
- B) Makes text scrollable  
- C) Rotates text vertically from right to left  
- D) Reverses text direction  
- **Answer:** C) Rotates text vertically from right to left

### 33. What does the `backdrop-filter` property affect?
- A) The entire page background  
- B) The background content behind an element  
- C) Only SVGs  
- D) Animations only  
- **Answer:** B) The background content behind an element

### 34. Which unit is relative to the width of the `0` glyph in the element's font?
- A) `ch`  
- B) `em`  
- C) `vw`  
- D) `ex`  
- **Answer:** A) `ch`

### 35. What is the default value of `box-sizing` in most browsers?
- A) `content-box`  
- B) `border-box`  
- C) `padding-box`  
- D) `inherit`  
- **Answer:** A) `content-box`

### 36. What does `scroll-snap-type` do?
- A) Locks all scrolling  
- B) Adds a spring animation to scrolling  
- C) Controls how scrolling containers snap to child elements  
- D) Prevents scroll overflow  
- **Answer:** C) Controls how scrolling containers snap to child elements

### 37. What is the purpose of `animation-fill-mode: both;`?
- A) Resets animation on repeat  
- B) Applies styles before and after animation  
- C) Runs two animations at once  
- D) Forces the element to shrink  
- **Answer:** B) Applies styles before and after animation

### 38. What is the effect of `line-height: 0;`?
- A) Hides the text  
- B) Collapses vertical space between lines  
- C) Makes text bold  
- D) Adds default padding  
- **Answer:** B) Collapses vertical space between lines

### 39. Which property helps maintain high-resolution rendering on retina displays?
- A) `transform`  
- B) `zoom`  
- C) `image-rendering`  
- D) `filter`  
- **Answer:** C) `image-rendering`

### 40. What does `display: contents;` do?
- A) Hides the element’s content  
- B) Displays child elements as if the parent didn’t exist  
- C) Makes text scrollable  
- D) Converts the element to block  
- **Answer:** B) Displays child elements as if the parent didn’t exist

### 41. What does the `isolation` property do in CSS?
- A) Makes the element fixed  
- B) Prevents blending with parent elements by creating a new stacking context  
- C) Applies a blur effect  
- D) Disables inheritance of styles  
- **Answer:** B) Prevents blending with parent elements by creating a new stacking context

### 42. What does `unicode-bidi: bidi-override;` do?
- A) Removes text direction  
- B) Forces the text direction to override its normal behavior  
- C) Applies a font transformation  
- D) Adds bidirectional arrows  
- **Answer:** B) Forces the text direction to override its normal behavior

### 43. What is the effect of `minmax(200px, 1fr)` in CSS Grid?
- A) Sets a static column width  
- B) Prevents column resizing  
- C) Defines a flexible column that’s at least 200px but grows  
- D) Hides the grid item  
- **Answer:** C) Defines a flexible column that’s at least 200px but grows

### 44. Which value of `overflow` makes scrollbars only appear when needed?
- A) `visible`  
- B) `auto`  
- C) `hidden`  
- D) `scroll`  
- **Answer:** B) `auto`

### 45. What does the `contain: layout;` property do?
- A) Forces layout recalculations  
- B) Isolates layout styles of the element  
- C) Applies a CSS reset  
- D) Disables animation  
- **Answer:** B) Isolates layout styles of the element

### 46. Which property allows animation to run only once and then freeze at the last keyframe?
- A) `animation-direction: reverse;`  
- B) `animation-iteration-count: 1;`  
- C) `animation-fill-mode: forwards;`  
- D) `animation-delay: 0s;`  
- **Answer:** C) `animation-fill-mode: forwards;`

### 47. What does `overscroll-behavior: contain;` do?
- A) Prevents scroll chaining to parent  
- B) Locks scrolling completely  
- C) Hides the scroll bar  
- D) Binds scroll to only children  
- **Answer:** A) Prevents scroll chaining to parent

### 48. Which of the following supports native CSS nesting (as of recent specifications)?
- A) `@nest`  
- B) Native syntax using `{}`  
- C) CSS Modules only  
- D) Sass only  
- **Answer:** A) `@nest`

### 49. What is the effect of `object-position: right top;` on an image?
- A) Resizes image to the right  
- B) Aligns the image to the top-right inside its box  
- C) Clips the image  
- D) Adds margin on right  
- **Answer:** B) Aligns the image to the top-right inside its box

### 50. What does the `accent-color` property style?
- A) Font weight of highlighted text  
- B) Background of bold text  
- C) Color of form controls like checkboxes and radio buttons  
- D) Placeholder text  
- **Answer:** C) Color of form controls like checkboxes and radio buttons


### 51. What does the `backdrop-filter` property do?
- A) Adds a filter to the page background  
- B) Applies graphical effects like blur or brightness to the background of an element  
- C) Changes the stacking context  
- D) Makes the background image responsive  
- **Answer:** B) Applies graphical effects like blur or brightness to the background of an element

### 52. Which CSS property defines how an element resizes when its container resizes?
- A) `box-sizing`  
- B) `resize`  
- C) `contain`  
- D) `aspect-ratio`  
- **Answer:** B) `resize`

### 53. What does `scroll-snap-type: x mandatory;` do?
- A) Snaps scroll to both directions  
- B) Enables horizontal scroll snapping to child elements  
- C) Locks vertical scroll  
- D) Enables elastic scroll  
- **Answer:** B) Enables horizontal scroll snapping to child elements

### 54. What does `mix-blend-mode: multiply;` do?
- A) Makes an element transparent  
- B) Blends the element’s background with its parent using the multiply algorithm  
- C) Combines all siblings into one element  
- D) Multiplies the z-index  
- **Answer:** B) Blends the element’s background with its parent using the multiply algorithm

### 55. How does `all: unset;` affect an element?
- A) Resets only inherited properties  
- B) Resets margin and padding  
- C) Resets all properties to their inherited or initial value  
- D) Removes content  
- **Answer:** C) Resets all properties to their inherited or initial value

### 56. Which property allows for text to wrap around shapes?
- A) `shape-wrap`  
- B) `float-wrap`  
- C) `shape-outside`  
- D) `wrap-around`  
- **Answer:** C) `shape-outside`

### 57. What does the `scroll-behavior: smooth;` property do?
- A) Delays the scroll  
- B) Animates scrolling between anchor links  
- C) Prevents page scrolling  
- D) Smoothens the zoom effect  
- **Answer:** B) Animates scrolling between anchor links

### 58. Which media feature can detect if a user prefers reduced motion?
- A) `min-motion`  
- B) `motion-preference`  
- C) `prefers-reduced-motion`  
- D) `user-motion`  
- **Answer:** C) `prefers-reduced-motion`

### 59. What is the purpose of `scroll-margin-top`?
- A) Sets the margin above scrollable container  
- B) Offsets the scroll snap position  
- C) Sets margin above sticky element  
- D) Sets the scroll container’s top border  
- **Answer:** B) Offsets the scroll snap position

### 60. What does the `:has()` pseudo-class allow in CSS?
- A) Select elements with a given attribute  
- B) Style an element based on its child/descendant  
- C) Select only empty elements  
- D) Apply styles after loading  
- **Answer:** B) Style an element based on its child/descendant

### 61. Which CSS property helps prevent content from overflowing and causing layout shifts?
- A) `overflow-wrap`  
- B) `white-space`  
- C) `line-clamp`  
- D) `contain`  
- **Answer:** A) `overflow-wrap`

### 62. What is the use of the `contain-intrinsic-size` property?
- A) Defines fallback size for elements with containment  
- B) Resets container dimensions  
- C) Forces width/height inheritance  
- D) Maintains aspect ratio  
- **Answer:** A) Defines fallback size for elements with containment

### 63. What does `overscroll-behavior: none;` do?
- A) Prevents content from scrolling  
- B) Disables scroll bounce and overscroll chaining  
- C) Sets scroll offset  
- D) Triggers scroll event manually  
- **Answer:** B) Disables scroll bounce and overscroll chaining

### 64. Which value of `appearance` removes the default browser styling?
- A) `none`  
- B) `hidden`  
- C) `unset`  
- D) `default`  
- **Answer:** A) `none`

### 65. Which CSS property affects how inline content breaks between lines?
- A) `line-break`  
- B) `overflow`  
- C) `word-break`  
- D) `break-inside`  
- **Answer:** C) `word-break`

### 66. What does `font-display: swap;` do in @font-face?
- A) Prevents font from loading  
- B) Uses fallback font until custom font is ready  
- C) Disables font smoothing  
- D) Caches font offline  
- **Answer:** B) Uses fallback font until custom font is ready

### 67. How do you specify responsive typography using `clamp()`?
- A) `font-size: clamp(2rem, 4vw, 5rem);`  
- B) `font-size: calc(4rem - 2vw);`  
- C) `font-size: responsive(2, 5);`  
- D) `font-size: fit-content(2rem, 5rem);`  
- **Answer:** A) `font-size: clamp(2rem, 4vw, 5rem);`

### 68. What does `text-rendering: optimizeLegibility;` do?
- A) Applies bold to text  
- B) Enables kerning and ligatures for better readability  
- C) Forces font smoothing  
- D) Increases text contrast  
- **Answer:** B) Enables kerning and ligatures for better readability

### 69. Which CSS feature allows defining dynamic ranges in media queries?
- A) `media-range`  
- B) `range-query`  
- C) CSS Media Range Syntax  
- D) `between()`  
- **Answer:** C) CSS Media Range Syntax

### 70. What is the default stacking order (z-index) of positioned elements?
- A) Elements stack randomly  
- B) Based on the color and size  
- C) According to DOM order  
- D) Higher z-index wins regardless of DOM  
- **Answer:** C) According to DOM order


### 71. Which CSS property controls how nested elements establish a new stacking context?
- A) `position`  
- B) `isolation`  
- C) `z-index`  
- D) `visibility`  
- **Answer:** B) `isolation`

### 72. What does `touch-action: none;` do?
- A) Disables all pointer input  
- B) Disables browser touch gestures like zoom and pan  
- C) Locks screen orientation  
- D) Prevents hover effects  
- **Answer:** B) Disables browser touch gestures like zoom and pan

### 73. Which CSS feature allows media queries based on container dimensions instead of viewport?
- A) `@media (container-width: ...)`  
- B) Container Queries  
- C) Element Queries  
- D) `@viewport`  
- **Answer:** B) Container Queries

### 74. What does the `accent-color` property affect?
- A) The background color of focused elements  
- B) The highlight color of selected text  
- C) The theme color of form controls and checkboxes  
- D) The border color of inputs  
- **Answer:** C) The theme color of form controls and checkboxes

### 75. What is the default value of the `position` property?
- A) `absolute`  
- B) `relative`  
- C) `static`  
- D) `inherit`  
- **Answer:** C) `static`

### 76. What is the effect of `backdrop-filter: blur(10px);`?
- A) Blurs the element’s background color  
- B) Blurs the area behind the element  
- C) Blurs child elements only  
- D) Applies blur to all ancestor layers  
- **Answer:** B) Blurs the area behind the element

### 77. Which of the following units is relative to the height of the font?
- A) `ch`  
- B) `vw`  
- C) `em`  
- D) `ex`  
- **Answer:** D) `ex`

### 78. What happens when you apply `overflow: auto;` to a container?
- A) Hides overflowed content  
- B) Always shows scrollbars  
- C) Adds scrollbars only when necessary  
- D) Forces scrolling behavior regardless of content  
- **Answer:** C) Adds scrollbars only when necessary

### 79. Which CSS module introduces `grid-template-areas`?
- A) CSS Flexbox Module  
- B) CSS Display Module  
- C) CSS Grid Layout Module  
- D) CSS Table Layout Module  
- **Answer:** C) CSS Grid Layout Module

### 80. What does `scroll-snap-type` control?
- A) Prevents scrolling past content edges  
- B) Controls snapping behavior on scroll containers  
- C) Defines smooth scrolling animations  
- D) Fixes the scroll to a single direction  
- **Answer:** B) Controls snapping behavior on scroll containers

### 81. What does the `caret-color` property control in CSS?
- A) The background color of input fields  
- B) The blinking text cursor color in inputs or editable elements  
- C) The color of selected text  
- D) The underline color of hyperlinks  
- **Answer:** B) The blinking text cursor color in inputs or editable elements

### 82. Which value of `display` creates a grid formatting context?
- A) `block`  
- B) `flex`  
- C) `grid`  
- D) `inline-grid`  
- **Answer:** C) `grid`

### 83. What is the effect of setting `line-height: 1.5;`?
- A) Increases the letter spacing  
- B) Sets line height to 1.5 times the font size  
- C) Makes lines bold  
- D) Makes the font size 1.5 times larger  
- **Answer:** B) Sets line height to 1.5 times the font size

### 84. What does `column-count` define in multi-column layout?
- A) The number of visible table columns  
- B) The number of rows  
- C) The number of columns into which content should be split  
- D) The number of media queries  
- **Answer:** C) The number of columns into which content should be split

### 85. Which of these is **not** a valid timing function in CSS?
- A) `ease`  
- B) `step-start`  
- C) `fast-in`  
- D) `cubic-bezier`  
- **Answer:** C) `fast-in`

### 86. What is the default `flex-direction` value in Flexbox?
- A) `row`  
- B) `column`  
- C) `row-reverse`  
- D) `column-reverse`  
- **Answer:** A) `row`

### 87. What does the `appearance: none;` property do?
- A) Disables text rendering  
- B) Hides all child elements  
- C) Removes default styling provided by the browser (e.g. buttons, inputs)  
- D) Disables element visibility  
- **Answer:** C) Removes default styling provided by the browser (e.g. buttons, inputs)

### 88. Which property allows you to rotate an element around its center?
- A) `rotate`  
- B) `transform: rotate()`  
- C) `transform-origin`  
- D) `perspective`  
- **Answer:** B) `transform: rotate()`

### 89. What happens when you set `object-fit: contain;` on an image?
- A) The image is cropped to fill the container  
- B) The image stretches to fit the container  
- C) The image is resized to fit the container while maintaining aspect ratio  
- D) The image is hidden  
- **Answer:** C) The image is resized to fit the container while maintaining aspect ratio

### 90. Which value of `position` allows sticky behavior when scrolling?
- A) `fixed`  
- B) `relative`  
- C) `absolute`  
- D) `sticky`  
- **Answer:** D) `sticky`

### 91. Which CSS property can add a shadow inside a box?
- A) `box-shadow`  
- B) `text-shadow`  
- C) `inset-shadow`  
- D) `box-shadow: inset`  
- **Answer:** D) `box-shadow: inset`

### 92. Which value of `overflow` prevents any scrolling or overflow visibility?
- A) `scroll`  
- B) `visible`  
- C) `auto`  
- D) `hidden`  
- **Answer:** D) `hidden`

### 93. What unit is based on the width of the "0" character in the font?
- A) `em`  
- B) `vw`  
- C) `ch`  
- D) `ex`  
- **Answer:** C) `ch`

### 94. Which property can prevent flex items from shrinking?
- A) `flex-grow: 0;`  
- B) `flex-shrink: 0;`  
- C) `flex-basis: auto;`  
- D) `justify-content: flex-start;`  
- **Answer:** B) `flex-shrink: 0;`

### 95. What’s the effect of `white-space: nowrap;`?
- A) Prevents text from wrapping to the next line  
- B) Adds extra spaces between words  
- C) Converts all characters to uppercase  
- D) Resets all spacing styles  
- **Answer:** A) Prevents text from wrapping to the next line

### 96. What property is used to control scroll snapping behavior?
- A) `snap-mode`  
- B) `scroll-behavior`  
- C) `scroll-snap-type`  
- D) `scroll-style`  
- **Answer:** C) `scroll-snap-type`

### 97. What does the `filter: grayscale(100%)` property do?
- A) Converts an element to grayscale  
- B) Adds a gray background  
- C) Disables color on text only  
- D) Highlights the element  
- **Answer:** A) Converts an element to grayscale

### 98. Which shorthand property sets margin on all sides?
- A) `margin-all`  
- B) `margin-block`  
- C) `margin`  
- D) `margins`  
- **Answer:** C) `margin`

### 99. What CSS keyword ensures a property overrides other declarations?
- A) `override`  
- B) `!force`  
- C) `!important`  
- D) `super`  
- **Answer:** C) `!important`

### 100. What is the use of `clip-path: circle();`?
- A) Clips the element into a circular shape  
- B) Rounds all corners  
- C) Applies a background circle  
- D) Scales the element down  
- **Answer:** A) Clips the element into a circular shape


