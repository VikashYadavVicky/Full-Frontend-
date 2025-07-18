# 🎓 100 Intermediate CSS Interview Questions (Short/Long)

1. **What is the difference between `relative`, `absolute`, `fixed`, and `sticky` positioning in CSS?**  
   - **Answer:**  
     - `relative`: Positions the element relative to its normal position.  
     - `absolute`: Positions the element relative to the nearest positioned ancestor.  
     - `fixed`: Positions the element relative to the viewport.  
     - `sticky`: A hybrid between `relative` and `fixed`; sticks when a specified scroll position is met.

2. **How does the CSS box model work?**  
   - **Answer:** The box model consists of `content`, `padding`, `border`, and `margin`. It defines how the size of elements is calculated and how they interact with each other in layout.

3. **What is specificity in CSS?**  
   - **Answer:** Specificity determines which rule applies when multiple rules match the same element. Inline styles > IDs > Classes/Pseudo-classes > Elements.

4. **What are pseudo-elements in CSS?**  
   - **Answer:** Pseudo-elements allow you to style specific parts of an element. Examples: `::before`, `::after`, `::first-letter`, `::first-line`.

5. **What is the difference between `em`, `rem`, and `px`?**  
   - **Answer:**  
     - `px`: Absolute unit.  
     - `em`: Relative to the parent element's font size.  
     - `rem`: Relative to the root (`html`) font size.

6. **How can you center a div both vertically and horizontally?**  
   - **Answer:**  
     - Using Flexbox:
       ```css
       display: flex;
       justify-content: center;
       align-items: center;
       ```
     - Or using Grid:
       ```css
       display: grid;
       place-items: center;
       ```

7. **What are media queries?**  
   - **Answer:** Media queries are used to apply different styles based on device properties like screen width, height, orientation, resolution, etc.

8. **Explain the difference between `min-width` and `max-width` in responsive design.**  
   - **Answer:**  
     - `min-width`: Styles apply when the viewport is *at least* this width.  
     - `max-width`: Styles apply when the viewport is *at most* this width.

9. **How does the `z-index` property work in CSS?**  
   - **Answer:** `z-index` controls the vertical stacking order of overlapping elements. Higher values appear on top. It only works on positioned elements.

10. **What is the difference between `visibility: hidden` and `display: none`?**  
    - **Answer:**  
      - `visibility: hidden`: Hides the element but it still occupies space.  
      - `display: none`: Hides the element and removes it from the document flow.

11. **What is a pseudo-class in CSS?**  
    - **Answer:** A pseudo-class is used to define a special state of an element. Examples include `:hover`, `:focus`, `:nth-child()`.

12. **What does the `inherit` keyword do in CSS?**  
    - **Answer:** It forces a property to inherit its value from its parent element.

13. **What is the purpose of `calc()` in CSS?**  
    - **Answer:** `calc()` allows you to perform calculations to dynamically set CSS property values. Example: `width: calc(100% - 50px);`

14. **What is the difference between `inline`, `block`, and `inline-block` elements?**  
    - **Answer:**  
      - `inline`: No line break, can’t set width/height.  
      - `block`: Takes full width, new line.  
      - `inline-block`: Behaves like inline but supports width and height.

15. **What is the purpose of the `transition` property?**  
    - **Answer:** It allows you to animate changes in CSS property values smoothly over time. Example: `transition: all 0.3s ease-in-out;`

16. **How does `object-fit` affect images and videos in CSS?**  
    - **Answer:** `object-fit` defines how media content (like `<img>`) should fit within its container. Example: `object-fit: cover;`

17. **What is the difference between `auto`, `scroll`, and `hidden` for the `overflow` property?**  
    - **Answer:**  
      - `auto`: Adds scrollbars only when needed.  
      - `scroll`: Always adds scrollbars.  
      - `hidden`: Hides overflowing content.

18. **What is Flexbox?**  
    - **Answer:** Flexbox is a layout model that allows for the arrangement of elements in one direction (row or column) with powerful alignment and spacing features.

19. **How can you make a website mobile-friendly using CSS?**  
    - **Answer:** Use responsive units (`%`, `em`, `rem`), media queries, flexible grids, and avoid fixed widths.

20. **What are the different combinators in CSS?**  
    - **Answer:**  
      - Descendant (` `)  
      - Child (`>`)  
      - Adjacent sibling (`+`)  
      - General sibling (`~`)

21. **What does the `box-sizing` property do?**  
   - **Answer:** `box-sizing` defines how the total width and height of an element are calculated. With `border-box`, padding and border are included inside the element’s width and height.

22. **What is the difference between `nth-child()` and `nth-of-type()`?**  
   - **Answer:**  
     - `:nth-child(n)`: Matches the nth child regardless of type.  
     - `:nth-of-type(n)`: Matches the nth child of the specified type.

23. **How does the `position: sticky` property work?**  
   - **Answer:** `sticky` toggles between `relative` and `fixed` based on the user’s scroll position.

24. **What are keyframe animations in CSS?**  
   - **Answer:** Keyframe animations define how an element should change style at specific keyframes using `@keyframes`.

25. **What is the use of the `clip-path` property in CSS?**  
   - **Answer:** It allows you to create complex shapes by clipping the element to a specific polygon, circle, or other defined area.

26. **What is the stacking context in CSS?**  
   - **Answer:** It’s the 3D space where elements are stacked in the z-axis. A new stacking context is formed by positioned elements with a `z-index`.

27. **How do you make an element responsive?**  
   - **Answer:** Use flexible units (`%`, `vw`, `vh`), media queries, and avoid fixed dimensions.

28. **What are custom properties (CSS variables)?**  
   - **Answer:** CSS variables are reusable values defined with `--name: value;` and used with `var(--name)`.

29. **How does `opacity` differ from `visibility`?**  
   - **Answer:**  
     - `opacity: 0`: Fully transparent but still interactive.  
     - `visibility: hidden`: Not visible but still takes space.  
     - `display: none`: Not visible and no space is taken.

30. **How do transitions differ from animations in CSS?**  
   - **Answer:** Transitions animate between two states. Animations allow more control using keyframes for multiple steps.

31. **What is the difference between `vw` and `%` in CSS?**  
   - **Answer:**  
     - `vw` is relative to the *viewport width*.  
     - `%` is relative to the *parent element*.

32. **How does `isolation: isolate;` affect stacking?**  
   - **Answer:** It creates a new stacking context, preventing z-index conflicts with outside elements.

33. **What is the purpose of the `pointer-events` property?**  
   - **Answer:** It controls whether an element can be the target of mouse events. Example: `pointer-events: none;` disables interaction.

34. **What is the difference between `:root` and `html` in CSS?**  
   - **Answer:**  
     - `:root` is more specific and often used for defining CSS variables.  
     - `html` refers to the root `<html>` element.

35. **What’s the use of `will-change` in CSS?**  
   - **Answer:** It hints to the browser which properties will change to optimize performance for animations and transforms.

36. **What is a CSS reset and why is it needed?**  
   - **Answer:** A CSS reset removes default browser styles to ensure consistent rendering across all browsers.

37. **What’s the difference between `currentColor` and a hex value like `#000`?**  
   - **Answer:** `currentColor` inherits the value of the `color` property, making it dynamic, whereas `#000` is a fixed black color.

38. **How do `min-height` and `max-height` affect layout?**  
   - **Answer:** They constrain the height of an element to be no less than or no more than a certain value.

39. **What is the `aspect-ratio` property used for?**  
   - **Answer:** It defines the ratio between the width and height of an element (e.g., `aspect-ratio: 16 / 9;`).

40. **How can you make a flex container wrap its items?**  
   - **Answer:** Use `flex-wrap: wrap;` on the container.


41. **What is the difference between absolute and relative positioning in CSS?**  
   - **Answer:**  
     - `relative`: Positions the element relative to its normal position.  
     - `absolute`: Positions the element relative to its nearest positioned ancestor.

42. **How can you center a div both horizontally and vertically using Flexbox?**  
   - **Answer:**  
     ```css
     display: flex;
     justify-content: center;
     align-items: center;
     ```

43. **What is specificity in CSS?**  
   - **Answer:** It's a hierarchy that determines which style rule takes precedence. Inline > ID > Class > Element.

44. **What are pseudo-elements in CSS?**  
   - **Answer:** They allow you to style specific parts of an element, like `::before` and `::after`.

45. **How does `overflow: auto` work?**  
   - **Answer:** It adds scrollbars only when content overflows the container.

46. **What is the z-index and how does it affect elements?**  
   - **Answer:** It controls the stack order of overlapping elements. Higher values appear in front.

47. **How can you apply styles to every even table row?**  
   - **Answer:** Use `tr:nth-child(even)`.

48. **What is the `calc()` function in CSS?**  
   - **Answer:** It allows you to perform calculations to determine CSS property values, e.g., `width: calc(100% - 20px);`.

49. **What is the default display value for a `<div>` element?**  
   - **Answer:** `block`.

50. **What is the difference between `em` and `rem` units?**  
   - **Answer:**  
     - `em`: Relative to the font size of the parent.  
     - `rem`: Relative to the root element’s font size.

51. **How do media queries work in CSS?**  
   - **Answer:** They apply styles conditionally based on device characteristics like screen width, e.g., `@media (max-width: 600px)`.

52. **What’s the use of the `transition` property?**  
   - **Answer:** It enables smooth animation when property values change over time.

53. **What is `object-fit` in CSS used for?**  
   - **Answer:** It defines how content (like images or videos) should be resized to fit their container.

54. **What does the `visibility` property do?**  
   - **Answer:** It toggles visibility without changing layout space (e.g., `hidden`, `visible`).

55. **How can you prevent an element from shrinking in a flex container?**  
   - **Answer:** Use `flex-shrink: 0;`.

56. **What is the purpose of `white-space: nowrap`?**  
   - **Answer:** It prevents text from wrapping to the next line.

57. **How does `inherit` work in CSS?**  
   - **Answer:** It forces a property to take the value from its parent element.

58. **How do you create a fixed navigation bar at the top of the page?**  
   - **Answer:**  
     ```css
     position: fixed;
     top: 0;
     width: 100%;
     ```

59. **What is the role of the `outline` property in CSS?**  
   - **Answer:** It draws a line outside the element’s border, often used for accessibility focus styles.

60. **How do you apply styles to multiple elements using the same rule?**  
   - **Answer:** Use comma-separated selectors, e.g., `h1, h2, p { color: red; }`.


61. **What is the difference between `min-width`, `max-width`, and `width`?**  
   - **Answer:**  
     - `width`: Sets a fixed width.  
     - `min-width`: Sets the minimum allowed width.  
     - `max-width`: Sets the maximum allowed width.

62. **What is the purpose of the `pointer-events` property?**  
   - **Answer:** It controls whether or not an element can be the target of mouse events. Useful for disabling interaction.

63. **How can you vertically align text inside a div?**  
   - **Answer:** Use Flexbox or line-height equal to height, e.g.,  
     ```css
     display: flex;
     align-items: center;
     ```

64. **What is the difference between `position: absolute` and `fixed`?**  
   - **Answer:**  
     - `absolute`: Positioned relative to the nearest positioned ancestor.  
     - `fixed`: Positioned relative to the viewport.

65. **How can you create a responsive image gallery using CSS?**  
   - **Answer:** Use `display: grid` or `flex`, and `media queries` to adjust layout on different screens.

66. **What does `box-sizing: border-box` do?**  
   - **Answer:** It includes padding and border within the element’s total width and height.

67. **What are the different values of `display` property?**  
   - **Answer:** Common values: `block`, `inline`, `inline-block`, `flex`, `grid`, `none`.

68. **How do you make a website layout responsive?**  
   - **Answer:** Use flexible units (`%`, `em`, `rem`), `media queries`, and layout techniques like Flexbox or Grid.

69. **What is a CSS reset?**  
   - **Answer:** A CSS file that removes default browser styles for consistency across browsers.

70. **What is the use of `clip-path` in CSS?**  
   - **Answer:** It defines a visible area of an element, allowing for complex shapes like circles or polygons.

71. **How can you make a text gradient in CSS?**  
   - **Answer:**  
     ```css
     background: linear-gradient(...);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     ```

72. **How can you make a div take up full height of the browser window?**  
   - **Answer:** Use `height: 100vh;`.

73. **What is the difference between `visibility: hidden` and `display: none`?**  
   - **Answer:**  
     - `hidden`: Element is invisible but takes up space.  
     - `none`: Element is removed from the document flow.

74. **What is the `currentColor` keyword in CSS?**  
   - **Answer:** It uses the current value of the `color` property wherever it's applied (e.g., border, background).

75. **How do you animate an element using CSS?**  
   - **Answer:** Use `@keyframes` and `animation` property:
     ```css
     @keyframes slide {
       from { left: 0; }
       to { left: 100px; }
     }
     ```

76. **How do you make an element appear only on hover?**  
   - **Answer:** Use the `:hover` pseudo-class and set properties like `opacity: 0;` initially.

77. **What is a sticky element in CSS?**  
   - **Answer:** `position: sticky;` allows an element to stick to the viewport edge within a scrollable area.

78. **How can you make a background image cover the entire container?**  
   - **Answer:** Use `background-size: cover;`.

79. **What’s the difference between `inline` and `inline-block`?**  
   - **Answer:**  
     - `inline`: No height/width allowed.  
     - `inline-block`: Behaves like inline but accepts height/width.

80. **What is the purpose of the `will-change` property?**  
   - **Answer:** It hints the browser about which properties are likely to change, improving performance.

81. **What are media queries in CSS?**  
   - **Answer:** Media queries allow CSS to be applied conditionally based on the device’s characteristics like screen width or resolution.

82. **How do you apply styles to an element only if it is the first child?**  
   - **Answer:** Use the `:first-child` pseudo-class.  
     ```css
     div:first-child { color: red; }
     ```

83. **What is the difference between `em` and `rem` units?**  
   - **Answer:**  
     - `em` is relative to the element’s parent.  
     - `rem` is relative to the root (`html`) element.

84. **How do you center a div horizontally and vertically using Flexbox?**  
   - **Answer:**
     ```css
     display: flex;
     justify-content: center;
     align-items: center;
     ```

85. **What is the difference between `nth-child` and `nth-of-type`?**  
   - **Answer:**  
     - `nth-child` matches any nth element regardless of type.  
     - `nth-of-type` matches nth element of the same tag type.

86. **What is the `z-index` in CSS?**  
   - **Answer:** It controls the stack order of overlapping elements. Higher values are on top.

87. **What does `object-fit: cover` do?**  
   - **Answer:** It ensures the image fills the container while maintaining aspect ratio, possibly cropping.

88. **What is the difference between `overflow: auto` and `overflow: scroll`?**  
   - **Answer:**  
     - `auto`: Scrollbar appears only when needed.  
     - `scroll`: Scrollbar always appears.

89. **How can you apply a different style when an element is focused?**  
   - **Answer:** Use the `:focus` pseudo-class:
     ```css
     input:focus { border-color: blue; }
     ```

90. **How do you make a gradient background in CSS?**  
   - **Answer:** Use `linear-gradient` or `radial-gradient`:
     ```css
     background: linear-gradient(to right, red, blue);
     ```

91. **What is a pseudo-element in CSS?**  
   - **Answer:** It allows you to style specific parts of elements, like `::before`, `::after`.

92. **How do you select all even rows in a table using CSS?**  
   - **Answer:**  
     ```css
     tr:nth-child(even) { background: #f2f2f2; }
     ```

93. **What is the `backface-visibility` property?**  
   - **Answer:** It hides or shows the back face of an element when rotated in 3D.

94. **How do you apply a shadow to text?**  
   - **Answer:** Use `text-shadow`:
     ```css
     text-shadow: 2px 2px 4px gray;
     ```

95. **How do you prevent text from wrapping in a container?**  
   - **Answer:** Use:
     ```css
     white-space: nowrap;
     ```

96. **How can you make a fixed header using CSS?**  
   - **Answer:**  
     ```css
     position: fixed;
     top: 0;
     width: 100%;
     ```

97. **What is the difference between `relative` and `absolute` positioning?**  
   - **Answer:**  
     - `relative`: Offsets the element from its normal position.  
     - `absolute`: Positions relative to nearest positioned ancestor.

98. **What are keyframes in CSS animations?**  
   - **Answer:** Keyframes define the steps in an animation.

99. **How do you add spacing between letters or words?**  
   - **Answer:**  
     - `letter-spacing` for letters.  
     - `word-spacing` for words.

100. **What is a CSS variable and how is it used?**  
   - **Answer:**
     ```css
     :root {
       --main-color: blue;
     }
     p {
       color: var(--main-color);
     }
     ```

# 🎯 Intermediate CSS MCQs 

1. **What is the effect of `position: sticky` in CSS?**  
   - A) The element scrolls normally  
   - B) The element is fixed in place at all times  
   - C) The element sticks to a position based on the scroll  
   - D) The element is hidden when scrolled  
   - **Answer:** C

2. **Which CSS property is used to change the point at which a transform originates?**  
   - A) transform-style  
   - B) transform-origin  
   - C) perspective-origin  
   - D) origin  
   - **Answer:** B

3. **How do you apply a 3D transform in CSS?**  
   - A) `rotateX()`  
   - B) `skew()`  
   - C) `translateZ()`  
   - D) Both A and C  
   - **Answer:** D

4. **What does the `opacity` property do?**  
   - A) Changes brightness  
   - B) Sets transparency  
   - C) Adjusts position  
   - D) Modifies visibility  
   - **Answer:** B

5. **Which value of `display` creates a flexible container?**  
   - A) block  
   - B) flex  
   - C) inline-block  
   - D) grid  
   - **Answer:** B

6. **How do you apply a style when hovering over an element?**  
   - A) `:hover`  
   - B) `@hover`  
   - C) `::hover`  
   - D) `hover()`  
   - **Answer:** A

7. **What is the default `position` value in CSS?**  
   - A) relative  
   - B) fixed  
   - C) static  
   - D) absolute  
   - **Answer:** C

8. **Which property is used to animate transitions smoothly?**  
   - A) animate  
   - B) transition  
   - C) transform  
   - D) animation  
   - **Answer:** B

9. **Which of these selectors has the highest specificity?**  
   - A) `#header`  
   - B) `.menu`  
   - C) `nav`  
   - D) `*`  
   - **Answer:** A

10. **Which keyword makes a CSS variable fallback to a default value?**  
    - A) `default()`  
    - B) `backup()`  
    - C) `var()` with fallback  
    - D) `inherit()`  
    - **Answer:** C

11. **Which unit is not relative in CSS?**  
    - A) em  
    - B) rem  
    - C) px  
    - D) %  
    - **Answer:** C

12. **What does `object-fit: contain` do to an image?**  
    - A) Fills the container without preserving aspect ratio  
    - B) Fills and may crop  
    - C) Scales the image to fit inside the container while preserving aspect ratio  
    - D) Stretches the image  
    - **Answer:** C

13. **How do you create a CSS variable?**  
    - A) `var-main: red;`  
    - B) `--main-color: red;`  
    - C) `$main-color: red;`  
    - D) `mainColor = red;`  
    - **Answer:** B

14. **Which pseudo-class targets an element being clicked?**  
    - A) `:focus`  
    - B) `:visited`  
    - C) `:active`  
    - D) `:checked`  
    - **Answer:** C

15. **Which of the following values can `z-index` accept?**  
    - A) only positive numbers  
    - B) only zero and positive  
    - C) any integer  
    - D) only negative numbers  
    - **Answer:** C

16. **How can you apply a style only on screen sizes below 600px?**  
    - A) `@screen (max-width: 600px)`  
    - B) `@media (max-width: 600px)`  
    - C) `@responsive 600px`  
    - D) `@if screen-width < 600`  
    - **Answer:** B

17. **What property controls how far children are spaced in Flexbox?**  
    - A) justify-content  
    - B) align-content  
    - C) padding  
    - D) margin  
    - **Answer:** A

18. **What will `visibility: hidden` do to an element?**  
    - A) Remove it from layout  
    - B) Make it invisible but still occupy space  
    - C) Hide and collapse  
    - D) Make it transparent  
    - **Answer:** B

19. **Which selector targets the third list item inside a `ul`?**  
    - A) `ul:nth-child(3)`  
    - B) `ul li:nth-of-type(3)`  
    - C) `ul > li:nth-child(3)`  
    - D) `ul + li:nth(3)`  
    - **Answer:** C

20. **Which function in CSS allows color transparency?**  
    - A) rgb()  
    - B) rgba()  
    - C) hex  
    - D) color-alpha()  
    - **Answer:** B

21. **What does `box-sizing: border-box` do?**  
   - A) Adds padding and border to the element's total width and height  
   - B) Excludes padding and border from total size  
   - C) Resets the box model  
   - D) Only affects margins  
   - **Answer:** A

22. **What will `overflow: scroll` do?**  
   - A) Hides overflowing content  
   - B) Clips content and disables scrolling  
   - C) Always adds scrollbars  
   - D) Adds scrollbars only when needed  
   - **Answer:** C

23. **What CSS property is used to control line spacing?**  
   - A) spacing  
   - B) text-spacing  
   - C) line-height  
   - D) word-spacing  
   - **Answer:** C

24. **Which property defines how a background image is repeated?**  
   - A) background-attachment  
   - B) background-repeat  
   - C) background-size  
   - D) background-image  
   - **Answer:** B

25. **Which pseudo-class selects an element with no children?**  
   - A) `:empty`  
   - B) `:blank`  
   - C) `:null`  
   - D) `:childless`  
   - **Answer:** A

26. **Which property defines the speed curve of a transition?**  
   - A) transition-delay  
   - B) transition-duration  
   - C) transition-curve  
   - D) transition-timing-function  
   - **Answer:** D

27. **How can you make a circle using CSS?**  
   - A) `border-radius: 100%` on a square  
   - B) `border-style: circle`  
   - C) `shape: circle`  
   - D) `circle: true`  
   - **Answer:** A

28. **Which of the following is *not* a valid media feature?**  
   - A) max-width  
   - B) orientation  
   - C) device-width  
   - D) text-align  
   - **Answer:** D

29. **Which selector targets all direct child `li` elements of a `ul`?**  
   - A) `ul li`  
   - B) `ul > li`  
   - C) `ul + li`  
   - D) `ul li:child`  
   - **Answer:** B

30. **How can you make an element unselectable (text)?**  
   - A) `text: none`  
   - B) `user-select: none`  
   - C) `selectable: false`  
   - D) `pointer-events: none`  
   - **Answer:** B

31. **What will `display: contents` do?**  
   - A) Hide content  
   - B) Make content scroll  
   - C) Render child elements without the parent box  
   - D) Hide children  
   - **Answer:** C

32. **What is the default value of `flex-direction`?**  
   - A) column  
   - B) row  
   - C) row-reverse  
   - D) column-reverse  
   - **Answer:** B

33. **Which property is used to align flex items vertically when using `flex-direction: row`?**  
   - A) align-items  
   - B) justify-content  
   - C) align-content  
   - D) vertical-align  
   - **Answer:** A

34. **How do you add a shadow to text?**  
   - A) `box-shadow`  
   - B) `text-glow`  
   - C) `text-shadow`  
   - D) `font-shadow`  
   - **Answer:** C

35. **Which CSS feature allows web fonts to be loaded?**  
   - A) `@include`  
   - B) `@font-face`  
   - C) `@font`  
   - D) `font-family`  
   - **Answer:** B

36. **What does the `clip-path` property do?**  
   - A) Cuts the border radius  
   - B) Clips the visible portion of an element  
   - C) Hides overflow  
   - D) Masks text  
   - **Answer:** B

37. **Which unit is relative to the viewport height?**  
   - A) em  
   - B) %  
   - C) vh  
   - D) rem  
   - **Answer:** C

38. **Which shorthand property sets margin for all sides?**  
   - A) padding  
   - B) spacing  
   - C) margin  
   - D) margin-all  
   - **Answer:** C

39. **How do you center a block element horizontally using margin?**  
   - A) `margin: auto;`  
   - B) `text-align: center;`  
   - C) `padding: auto;`  
   - D) `align: center;`  
   - **Answer:** A

40. **Which CSS function lightens or darkens a color?**  
   - A) `rgba()`  
   - B) `mix()`  
   - C) `hsl()`  
   - D) `brightness()`  
   - **Answer:** D

41. **Which value of `position` allows the element to scroll with the page?**  
   - A) fixed  
   - B) static  
   - C) absolute  
   - D) relative  
   - **Answer:** D

42. **What does `z-index` control?**  
   - A) The width of an element  
   - B) The vertical stacking order  
   - C) The padding  
   - D) The font size  
   - **Answer:** B

43. **Which property sets the order of flex items?**  
   - A) flex-direction  
   - B) flex-flow  
   - C) order  
   - D) align-order  
   - **Answer:** C

44. **Which keyword is used to inherit a CSS property from the parent?**  
   - A) default  
   - B) parent  
   - C) same  
   - D) inherit  
   - **Answer:** D

45. **Which property adds rounded corners to elements?**  
   - A) border-width  
   - B) border-radius  
   - C) corner-style  
   - D) outline-radius  
   - **Answer:** B

46. **What does `pointer-events: none` do?**  
   - A) Enables touch screen events  
   - B) Disables all pointer interactions  
   - C) Resets the cursor  
   - D) Disables keyboard events  
   - **Answer:** B

47. **Which CSS function applies filters like grayscale, blur, brightness?**  
   - A) `opacity()`  
   - B) `effect()`  
   - C) `filter()`  
   - D) `visual()`  
   - **Answer:** C

48. **Which property sets spacing between lines of text?**  
   - A) word-spacing  
   - B) letter-spacing  
   - C) line-height  
   - D) text-indent  
   - **Answer:** C

49. **What is the default `position` value of an element?**  
   - A) relative  
   - B) absolute  
   - C) static  
   - D) fixed  
   - **Answer:** C

50. **Which CSS unit is relative to the parent’s font size?**  
   - A) em  
   - B) vh  
   - C) %  
   - D) px  
   - **Answer:** A

51. **Which CSS function is used to define custom property values?**  
   - A) `property()`  
   - B) `var()`  
   - C) `set()`  
   - D) `define()`  
   - **Answer:** B

52. **What property controls the visibility of an element?**  
   - A) show  
   - B) visibility  
   - C) hidden  
   - D) display  
   - **Answer:** B

53. **How do you make a grid container in CSS?**  
   - A) `display: flex`  
   - B) `display: inline-grid`  
   - C) `display: grid`  
   - D) `grid-container: true`  
   - **Answer:** C

54. **Which CSS property sets the space between columns in a grid layout?**  
   - A) column-padding  
   - B) grid-gap  
   - C) column-gap  
   - D) gap  
   - **Answer:** D

55. **Which of these can `position: sticky` stick to?**  
   - A) The page footer  
   - B) The top of the viewport  
   - C) Any other element  
   - D) Only siblings  
   - **Answer:** B

56. **Which keyword stops a background image from repeating?**  
   - A) `repeat: none`  
   - B) `no-repeat`  
   - C) `repeat: false`  
   - D) `none`  
   - **Answer:** B

57. **What does `opacity: 0` do to an element?**  
   - A) Hides the element and removes it from layout  
   - B) Makes it transparent but still takes space  
   - C) Sets it to fully visible  
   - D) Moves it behind other elements  
   - **Answer:** B

58. **Which of these defines a transition delay?**  
   - A) `transition-duration`  
   - B) `transition-delay`  
   - C) `delay`  
   - D) `animation-delay`  
   - **Answer:** B

59. **Which unit scales with the root element’s font size?**  
   - A) em  
   - B) %  
   - C) px  
   - D) rem  
   - **Answer:** D

60. **What does `visibility: hidden` do?**  
   - A) Hides element completely  
   - B) Makes the element invisible but keeps layout space  
   - C) Removes from DOM  
   - D) Hides both visually and physically  
   - **Answer:** B

61. **Which of the following properties is used to animate an element?**  
   - A) transition  
   - B) animation  
   - C) transform  
   - D) display  
   - **Answer:** B

62. **Which value of `overflow` clips the content and hides it?**  
   - A) scroll  
   - B) visible  
   - C) auto  
   - D) hidden  
   - **Answer:** D

63. **Which CSS property applies shadow to text?**  
   - A) text-shadow  
   - B) box-shadow  
   - C) font-shadow  
   - D) shadow-text  
   - **Answer:** A

64. **What is the correct syntax for defining a CSS variable?**  
   - A) `var-name: --mainColor`  
   - B) `--mainColor: #333`  
   - C) `$mainColor = #333`  
   - D) `set-var: --mainColor`  
   - **Answer:** B

65. **Which CSS property can horizontally center a block element?**  
   - A) text-align: center  
   - B) margin: auto  
   - C) float: center  
   - D) align: center  
   - **Answer:** B

66. **What does `transform: scale(1.5)` do?**  
   - A) Moves the element  
   - B) Rotates the element  
   - C) Scales the element to 150%  
   - D) Hides the element  
   - **Answer:** C

67. **Which pseudo-class targets every other element starting with the first?**  
   - A) :nth-child(odd)  
   - B) :nth-child(even)  
   - C) :first-child  
   - D) :nth-type(2n)  
   - **Answer:** A

68. **Which of these is NOT a valid value for `display`?**  
   - A) inline-block  
   - B) grid  
   - C) block-inline  
   - D) flex  
   - **Answer:** C

69. **What does `cursor: pointer` do?**  
   - A) Hides the mouse pointer  
   - B) Displays a hand cursor  
   - C) Disables pointer clicks  
   - D) Locks cursor in place  
   - **Answer:** B

70. **Which property changes the size of background image?**  
   - A) background-size  
   - B) background-dimensions  
   - C) size  
   - D) image-size  
   - **Answer:** A

71. **Which shorthand property combines margin-top, margin-right, margin-bottom, and margin-left?**  
   - A) padding  
   - B) border  
   - C) margin  
   - D) spacing  
   - **Answer:** C

72. **Which CSS property is used to stack flex items vertically?**  
   - A) flex-direction: row  
   - B) flex-wrap  
   - C) flex-align  
   - D) flex-direction: column  
   - **Answer:** D

73. **Which property can be used to add space inside an element?**  
   - A) margin  
   - B) spacing  
   - C) padding  
   - D) border-spacing  
   - **Answer:** C

74. **What does `position: fixed` mean?**  
   - A) Stays in place even when scrolling  
   - B) Moves with content  
   - C) Fixed in container  
   - D) Inherits parent position  
   - **Answer:** A

75. **What is the default value of the `display` property for `<div>`?**  
   - A) inline  
   - B) block  
   - C) flex  
   - D) grid  
   - **Answer:** B

76. **Which of the following creates a flex container?**  
   - A) `display: flex`  
   - B) `position: flex`  
   - C) `flex-wrap: true`  
   - D) `container-type: flex`  
   - **Answer:** A

77. **Which of the following properties controls transition timing?**  
   - A) animation-speed  
   - B) transition-delay  
   - C) transition-timing-function  
   - D) delay-function  
   - **Answer:** C

78. **What is the effect of `text-transform: uppercase`?**  
   - A) Increases font-size  
   - B) Converts text to capital letters  
   - C) Applies bold style  
   - D) Changes font-family  
   - **Answer:** B

79. **Which property makes text italic?**  
   - A) font-style: italic  
   - B) font-weight: light  
   - C) text-style: slant  
   - D) font-transform: italic  
   - **Answer:** A

80. **What does the `:hover` pseudo-class do?**  
   - A) Applies styles when user clicks  
   - B) Applies styles on page load  
   - C) Applies styles when mouse is over the element  
   - D) Applies styles on scroll  
   - **Answer:** C

81. **Which CSS property adds a shadow to an element’s box?**  
   - A) text-shadow  
   - B) box-shadow  
   - C) shadow-box  
   - D) border-shadow  
   - **Answer:** B

82. **Which of these units is relative to the root element?**  
   - A) em  
   - B) rem  
   - C) %  
   - D) px  
   - **Answer:** B

83. **What does `z-index` control?**  
   - A) The transparency level  
   - B) The color scheme  
   - C) The stacking order of elements  
   - D) The zoom level  
   - **Answer:** C

84. **What is the default value of `position` in CSS?**  
   - A) static  
   - B) relative  
   - C) absolute  
   - D) fixed  
   - **Answer:** A

85. **Which CSS function lets you repeat a background image?**  
   - A) background-repeat  
   - B) repeat-image  
   - C) background-loop  
   - D) image-iteration  
   - **Answer:** A

86. **Which pseudo-element is used to insert content before an element?**  
   - A) :before  
   - B) ::before  
   - C) pre::  
   - D) ::first  
   - **Answer:** B

87. **What does `flex-grow` define?**  
   - A) The alignment of items  
   - B) The amount an item will grow relative to the rest  
   - C) The size of the container  
   - D) The spacing between rows  
   - **Answer:** B

88. **Which media feature detects the width of the display area?**  
   - A) screen-size  
   - B) max-height  
   - C) max-width  
   - D) resolution  
   - **Answer:** C

89. **What is the use of `object-fit: cover` in CSS?**  
   - A) Stretches image to fill  
   - B) Keeps aspect ratio while covering container  
   - C) Shrinks image  
   - D) Duplicates the image  
   - **Answer:** B

90. **What does the `clear` property do in CSS?**  
   - A) Hides floated elements  
   - B) Resets styling  
   - C) Prevents elements from wrapping around floats  
   - D) Removes overflow  
   - **Answer:** C

91. **Which shorthand property sets all background values?**  
   - A) background-set  
   - B) background-properties  
   - C) background  
   - D) bg-all  
   - **Answer:** C

92. **What is the effect of `white-space: nowrap`?**  
   - A) Adds space between words  
   - B) Forces text to the next line  
   - C) Prevents text from wrapping  
   - D) Resets white space  
   - **Answer:** C

93. **Which CSS selector matches all elements?**  
   - A) *  
   - B) &  
   - C) ^  
   - D) #  
   - **Answer:** A

94. **What does `visibility: hidden` do?**  
   - A) Hides and removes the element  
   - B) Hides element but keeps space  
   - C) Hides element and shows border only  
   - D) Makes it transparent  
   - **Answer:** B

95. **Which CSS property defines the thickness of text?**  
   - A) font-size  
   - B) text-weight  
   - C) font-weight  
   - D) weight  
   - **Answer:** C

96. **Which of the following allows grid-based layout in CSS?**  
   - A) flexbox  
   - B) grid-template  
   - C) display: grid  
   - D) layout: grid  
   - **Answer:** C

97. **Which CSS function lets you rotate an element?**  
   - A) rotate()  
   - B) transform: rotate()  
   - C) transition: rotate  
   - D) rotate-element()  
   - **Answer:** B

98. **What is the result of `overflow: scroll`?**  
   - A) Content is hidden  
   - B) Adds scrollbars regardless of need  
   - C) Adds scroll only if needed  
   - D) No effect  
   - **Answer:** B

99. **Which pseudo-class selects the input element in focus?**  
   - A) :hover  
   - B) :checked  
   - C) :focus  
   - D) :active  
   - **Answer:** C

100. **Which value of `position` lets you use `top`, `right`, `bottom`, and `left`?**  
   - A) static  
   - B) relative  
   - C) absolute  
   - D) All except static  
   - **Answer:** D
