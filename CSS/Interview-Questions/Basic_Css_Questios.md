#🎓 Basic CSS Q&A

1. **What is CSS?**  
   - **Answer:** CSS stands for Cascading Style Sheets. It is used to style and layout web pages by applying rules to HTML elements.

2. **What are the types of CSS?**  
   - **Answer:** 
     1. Inline CSS  
     2. Internal CSS (within `<style>` tag)  
     3. External CSS (using `.css` files)

3. **How do you link a CSS file to an HTML file?**  
   - **Answer:** Use the `<link>` tag in the `<head>` section:  
     ```html
     <link rel="stylesheet" href="styles.css">
     ```

4. **What is the syntax of a CSS rule?**  
   - **Answer:**  
     ```css
     selector {
       property: value;
     }
     ```

5. **What is a CSS selector?**  
   - **Answer:** A selector is a pattern used to select HTML elements to style, like `p`, `.class`, `#id`.

6. **What is the difference between class and ID selectors in CSS?**  
   - **Answer:** 
     - `.class` can be used on multiple elements.
     - `#id` must be unique to one element.

7. **What is an inline CSS style?**  
   - **Answer:** A style written directly in the HTML element using the `style` attribute.  
     ```html
     <p style="color: red;">Hello</p>
     ```

8. **How do you apply the same style to multiple elements?**  
   - **Answer:** Use a group selector:  
     ```css
     h1, p, div {
       color: blue;
     }
     ```

9. **What is the Box Model in CSS?**  
   - **Answer:** It consists of four parts:
     1. Content
     2. Padding
     3. Border
     4. Margin

10. **What is the difference between `padding` and `margin`?**  
    - **Answer:**  
      - `Padding`: Space inside the element, between content and border.  
      - `Margin`: Space outside the element, between border and other elements.

11. **How can you center a block element horizontally?**  
    - **Answer:** Use `margin: 0 auto;` and set a width:  
      ```css
      div {
        width: 300px;
        margin: 0 auto;
      }
      ```

12. **What unit types can you use in CSS?**  
    - **Answer:** Common units include `px`, `em`, `rem`, `%`, `vw`, `vh`.

13. **What is the difference between `em` and `rem` units?**  
    - **Answer:**  
      - `em` is relative to the font size of its parent.  
      - `rem` is relative to the root (HTML) font size.

14. **How do you make text bold using CSS?**  
    - **Answer:**  
      ```css
      p {
        font-weight: bold;
      }
      ```

15. **How do you change the background color of an element?**  
    - **Answer:**  
      ```css
      div {
        background-color: yellow;
      }
      ```

16. **How do you apply styles to all elements on a page?**  
    - **Answer:** Use the universal selector `*`:  
      ```css
      * {
        margin: 0;
        padding: 0;
      }
      ```

17. **What is the `z-index` property in CSS?**  
    - **Answer:** It controls the stack order of elements. Higher `z-index` values appear on top.

18. **What is the difference between relative and absolute positioning?**  
    - **Answer:**  
      - `relative`: Positions relative to its normal place.  
      - `absolute`: Positions relative to the nearest positioned ancestor.

19. **How do you create a hover effect in CSS?**  
    - **Answer:** Use the `:hover` pseudo-class:  
      ```css
      a:hover {
        color: red;
      }
      ```

20. **What are pseudo-classes in CSS?**  
    - **Answer:** Special states of elements, like `:hover`, `:first-child`, `:visited`.

## 🎓 Basic CSS Q&A (21–40)

21. **What is the purpose of the `display` property in CSS?**  
   - **Answer:** It defines how an element is displayed on the page, such as `block`, `inline`, `flex`, `grid`, or `none`.

22. **What is the default display value of a `<div>` and `<span>`?**  
   - **Answer:**  
     - `<div>`: `block`  
     - `<span>`: `inline`

23. **How do you hide an element using CSS?**  
   - **Answer:**  
     ```css
     element {
       display: none;
     }
     ```

24. **What is the difference between `visibility: hidden` and `display: none`?**  
   - **Answer:**  
     - `visibility: hidden` hides the element but keeps its space.  
     - `display: none` removes the element and its space.

25. **What is a media query in CSS?**  
   - **Answer:** It is used for responsive design and applies styles based on screen size:  
     ```css
     @media (max-width: 600px) {
       body {
         background-color: lightblue;
       }
     }
     ```

26. **How do you make a website responsive using CSS?**  
   - **Answer:** Use flexible layouts, media queries, and relative units like `%`, `em`, `rem`.

27. **What is the difference between `position: fixed` and `position: absolute`?**  
   - **Answer:**  
     - `fixed`: Positions relative to the viewport; doesn't move when scrolling.  
     - `absolute`: Positions relative to the nearest positioned ancestor.

28. **How do you apply a background image using CSS?**  
   - **Answer:**  
     ```css
     body {
       background-image: url("image.jpg");
     }
     ```

29. **How can you make a background image cover the entire element?**  
   - **Answer:**  
     ```css
     background-size: cover;
     ```

30. **What is the `opacity` property used for?**  
   - **Answer:** It controls the transparency of an element. Value ranges from `0` (transparent) to `1` (opaque).

31. **How do you apply a border in CSS?**  
   - **Answer:**  
     ```css
     p {
       border: 1px solid black;
     }
     ```

32. **What is the shorthand property for padding and margin?**  
   - **Answer:**  
     ```css
     margin: 10px 20px 15px 5px; /* top right bottom left */
     ```

33. **What are vendor prefixes in CSS?**  
   - **Answer:** They are browser-specific prefixes like `-webkit-`, `-moz-`, `-ms-` used for experimental or proprietary properties.

34. **What is the purpose of the `calc()` function in CSS?**  
   - **Answer:** It allows mathematical calculations:  
     ```css
     width: calc(100% - 50px);
     ```

35. **What does `inherit` mean in CSS?**  
   - **Answer:** It forces an element to inherit a property value from its parent element.

36. **What is the difference between `max-width` and `min-width`?**  
   - **Answer:**  
     - `max-width`: Maximum width an element can grow to.  
     - `min-width`: Minimum width an element can shrink to.

37. **How do you make a list horizontal using CSS?**  
   - **Answer:**  
     ```css
     li {
       display: inline;
     }
     ```

38. **How do you remove the underline from a link in CSS?**  
   - **Answer:**  
     ```css
     a {
       text-decoration: none;
     }
     ```

39. **What does the `overflow` property do?**  
   - **Answer:** It controls what happens when content overflows its container. Values: `visible`, `hidden`, `scroll`, `auto`.

40. **How do you apply a Google Font in CSS?**  
   - **Answer:**  
     1. Include the link in HTML:  
        ```html
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        ```  
     2. Apply in CSS:  
        ```css
        body {
          font-family: 'Roboto', sans-serif;
        }
        ```

41. **What is the difference between `em` and `rem` units in CSS?**  
   - **Answer:**  
     - `em` is relative to the font-size of the parent.  
     - `rem` is relative to the root (`html`) font-size.

42. **How do you apply styles to a specific element ID?**  
   - **Answer:**  
     ```css
     #myElement {
       color: red;
     }
     ```

43. **How do you apply styles to a specific class?**  
   - **Answer:**  
     ```css
     .myClass {
       font-size: 18px;
     }
     ```

44. **What is a pseudo-class in CSS?**  
   - **Answer:** It defines the special state of an element (like `:hover`, `:focus`, `:first-child`).

45. **How do you change the color of a link when the mouse hovers over it?**  
   - **Answer:**  
     ```css
     a:hover {
       color: green;
     }
     ```

46. **What is the `z-index` property used for?**  
   - **Answer:** It controls the stacking order of overlapping elements.

47. **How can you center a block element horizontally?**  
   - **Answer:**  
     ```css
     div {
       margin: 0 auto;
       width: 50%;
     }
     ```

48. **How do you apply multiple classes to an HTML element?**  
   - **Answer:**  
     ```html
     <div class="class1 class2"></div>
     ```

49. **What is the difference between `static` and `relative` positioning?**  
   - **Answer:**  
     - `static`: Default position; normal document flow.  
     - `relative`: Positioned relative to its normal position.

50. **What is the difference between `inline`, `block`, and `inline-block` elements?**  
   - **Answer:**  
     - `inline`: Does not start on a new line and only takes up as much width as necessary.  
     - `block`: Starts on a new line and takes up full width.  
     - `inline-block`: Like inline, but allows width and height to be set.

51. **How do you style a `<p>` tag that is the first child of a `<div>`?**  
   - **Answer:**  
     ```css
     div > p:first-child {
       color: blue;
     }
     ```

52. **What does the `box-sizing` property do?**  
   - **Answer:** It defines how the total width and height of an element is calculated.

53. **What is the difference between `auto` and `100%` width?**  
   - **Answer:**  
     - `auto` adjusts to content.  
     - `100%` fills the parent's width.

54. **How do you change the font of an element?**  
   - **Answer:**  
     ```css
     p {
       font-family: Arial, sans-serif;
     }
     ```

55. **What is the `line-height` property in CSS?**  
   - **Answer:** It sets the vertical spacing between lines of text.

56. **How do you make a fixed header that stays at the top of the page?**  
   - **Answer:**  
     ```css
     header {
       position: fixed;
       top: 0;
       width: 100%;
     }
     ```

57. **What is a CSS Grid?**  
   - **Answer:** It is a two-dimensional layout system used for arranging items in rows and columns.

58. **What is a Flexbox in CSS?**  
   - **Answer:** A one-dimensional layout system to align items along a row or column.

59. **How do you create a flex container in CSS?**  
   - **Answer:**  
     ```css
     .container {
       display: flex;
     }
     ```

60. **How do you align items to the center using Flexbox?**  
   - **Answer:**  
     ```css
     .container {
       display: flex;
       justify-content: center;
       align-items: center;
     }
     ```

61. **What does the `visibility` property control in CSS?**  
   - **Answer:** It controls whether an element is visible or hidden, without removing it from the layout.

62. **How do you hide an element and remove it from the document flow?**  
   - **Answer:** Use `display: none;`.

63. **What is the default `position` value of an HTML element?**  
   - **Answer:** `static`.

64. **How do you make text bold in CSS?**  
   - **Answer:**  
     ```css
     p {
       font-weight: bold;
     }
     ```

65. **How do you make text italic in CSS?**  
   - **Answer:**  
     ```css
     p {
       font-style: italic;
     }
     ```

66. **What does `overflow: hidden` do?**  
   - **Answer:** It hides any content that exceeds the boundaries of its container.

67. **How do you apply a background color to a page?**  
   - **Answer:**  
     ```css
     body {
       background-color: #f2f2f2;
     }
     ```

68. **What is the `:nth-child(n)` selector used for?**  
   - **Answer:** It selects elements based on their position in a parent (e.g., every 2nd, 3rd, etc.).

69. **How do you apply a shadow to text?**  
   - **Answer:**  
     ```css
     h1 {
       text-shadow: 2px 2px 4px gray;
     }
     ```

70. **How do you apply a shadow to a box element?**  
   - **Answer:**  
     ```css
     div {
       box-shadow: 2px 2px 8px #ccc;
     }
     ```

71. **What is the difference between `min-width`, `max-width`, and `width`?**  
   - **Answer:**  
     - `width`: Fixed size.  
     - `min-width`: Minimum allowed width.  
     - `max-width`: Maximum allowed width.

72. **What does `cursor: pointer;` do?**  
   - **Answer:** Changes the cursor to a pointer (hand icon) when hovering over an element.

73. **What is a CSS variable?**  
   - **Answer:** A reusable value declared with `--name`, e.g., `--main-color`.

74. **How do you declare and use a CSS variable?**  
   - **Answer:**  
     ```css
     :root {
       --main-color: blue;
     }
     h1 {
       color: var(--main-color);
     }
     ```

75. **What is the `transition` property in CSS?**  
   - **Answer:** It allows smooth changes between property values over time.

76. **How do you make an element responsive?**  
   - **Answer:** Use relative units (`%`, `em`, `rem`) and media queries.

77. **What is a media query in CSS?**  
   - **Answer:** A rule that applies styles based on screen size or device characteristics.

78. **Write a basic media query that targets screens smaller than 768px.**  
   - **Answer:**  
     ```css
     @media (max-width: 768px) {
       body {
         font-size: 14px;
       }
     }
     ```

79. **What does `inherit` do in CSS?**  
   - **Answer:** It forces a property to take the same value as its parent element.

80. **What is the purpose of the `important` declaration in CSS?**  
   - **Answer:** It forces a property to override all others, including inline styles:  
     ```css
     color: red !important;
     ```

81. **What is the `line-height` property used for?**  
   - **Answer:** It sets the amount of space between lines of text.

82. **How do you apply styles to multiple selectors at once?**  
   - **Answer:** Separate them with commas:  
     ```css
     h1, h2, p {
       color: navy;
     }
     ```

83. **What is the difference between `id` and `class` in CSS?**  
   - **Answer:**  
     - `id`: Unique, applies to one element, selector is `#id`.  
     - `class`: Reusable, applies to many, selector is `.class`.

84. **What is `flex-wrap` in CSS Flexbox?**  
   - **Answer:** It controls whether flex items wrap onto multiple lines.

85. **What does `justify-content: space-between;` do in Flexbox?**  
   - **Answer:** It places the first item at the start, the last item at the end, and evenly distributes space between.

86. **What is a pseudo-element in CSS?**  
   - **Answer:** It allows you to style parts of elements, e.g., `::before`, `::after`.

87. **Write an example using `::after`.**  
   - **Answer:**  
     ```css
     h1::after {
       content: " 🔥";
     }
     ```

88. **How do you center text horizontally?**  
   - **Answer:**  
     ```css
     p {
       text-align: center;
     }
     ```

89. **How do you set the font of a paragraph?**  
   - **Answer:**  
     ```css
     p {
       font-family: Arial, sans-serif;
     }
     ```

90. **What is the difference between `rem` and `em` units?**  
   - **Answer:**  
     - `rem`: Relative to root (`html`) font size.  
     - `em`: Relative to the parent element's font size.

91. **How do you make an element float to the right?**  
   - **Answer:**  
     ```css
     div {
       float: right;
     }
     ```

92. **What does `clear: both;` do in CSS?**  
   - **Answer:** It prevents an element from being affected by floated elements.

93. **What is the default display type of a `<div>` element?**  
   - **Answer:** `block`.

94. **What is the default display type of a `<span>` element?**  
   - **Answer:** `inline`.

95. **How do you select a child element in CSS?**  
   - **Answer:** Use the child combinator (`>`):  
     ```css
     div > p {
       color: blue;
     }
     ```

96. **What is a CSS grid?**  
   - **Answer:** A layout system for dividing content into rows and columns.

97. **How do you define a grid container?**  
   - **Answer:**  
     ```css
     .container {
       display: grid;
     }
     ```

98. **How do you set a background image in CSS?**  
   - **Answer:**  
     ```css
     body {
       background-image: url("bg.jpg");
     }
     ```

99. **What does `opacity: 0.5;` do?**  
   - **Answer:** Sets the transparency of an element to 50%.

100. **How do you round the corners of a box?**  
   - **Answer:**  
     ```css
     div {
       border-radius: 10px;
     }
     ```
---
# 🎯 Basic CSS MCQs

1. **What does CSS stand for?**  
   a) Computer Style Sheets  
   b) Cascading Style Sheets  
   c) Creative Style Sheets  
   d) Colorful Style Sheets  
   ✅ **Answer:** b) Cascading Style Sheets

2. **Which HTML tag is used to link an external CSS file?**  
   a) `<style>`  
   b) `<script>`  
   c) `<css>`  
   d) `<link>`  
   ✅ **Answer:** d) `<link>`

3. **Where in an HTML document is the correct place to refer to an external CSS file?**  
   a) At the end of the document  
   b) In the `<head>` section  
   c) In the `<footer>`  
   d) Inside the `<body>`  
   ✅ **Answer:** b) In the `<head>` section

4. **Which symbol is used to select an ID in CSS?**  
   a) `.`  
   b) `#`  
   c) `*`  
   d) `&`  
   ✅ **Answer:** b) `#`

5. **Which property is used to change the text color of an element?**  
   a) `font-color`  
   b) `text-color`  
   c) `color`  
   d) `background-color`  
   ✅ **Answer:** c) `color`

6. **How do you apply a style to all `<p>` elements?**  
   a) `p {}`  
   b) `#p {}`  
   c) `.p {}`  
   d) `*p {}`  
   ✅ **Answer:** a) `p {}`

7. **Which CSS property controls the text size?**  
   a) `font-style`  
   b) `text-size`  
   c) `font-size`  
   d) `text-style`  
   ✅ **Answer:** c) `font-size`

8. **What does the `background-color` property do?**  
   a) Changes the border color  
   b) Changes the text color  
   c) Changes the background color  
   d) Changes the font  
   ✅ **Answer:** c) Changes the background color

9. **Which value of `position` makes an element stick to its place in the layout?**  
   a) `absolute`  
   b) `fixed`  
   c) `relative`  
   d) `static`  
   ✅ **Answer:** d) `static`

10. **Which of the following is used to make text bold in CSS?**  
    a) `font-weight: bold;`  
    b) `text-decoration: bold;`  
    c) `font-style: bold;`  
    d) `weight: bold;`  
    ✅ **Answer:** a) `font-weight: bold;`

11. **Which selector selects all elements on a page?**  
    a) `*`  
    b) `.`  
    c) `#`  
    d) `$`  
    ✅ **Answer:** a) `*`

12. **How do you add space inside the border of an element?**  
    a) `margin`  
    b) `border-spacing`  
    c) `padding`  
    d) `space`  
    ✅ **Answer:** c) `padding`

13. **Which property is used to set the height of an element?**  
    a) `height`  
    b) `line-height`  
    c) `min-height`  
    d) `set-height`  
    ✅ **Answer:** a) `height`

14. **What does `text-align: center;` do?**  
    a) Aligns text to the left  
    b) Aligns text to the right  
    c) Centers the text  
    d) Justifies the text  
    ✅ **Answer:** c) Centers the text

15. **Which property sets the spacing between letters?**  
    a) `letter-spacing`  
    b) `line-spacing`  
    c) `text-spacing`  
    d) `spacing`  
    ✅ **Answer:** a) `letter-spacing`

16. **How do you make a list not show bullets?**  
    a) `list: none;`  
    b) `bullet: none;`  
    c) `list-style: none;`  
    d) `ul-style: none;`  
    ✅ **Answer:** c) `list-style: none;`

17. **Which CSS property sets the transparency of an element?**  
    a) `visibility`  
    b) `opacity`  
    c) `transparent`  
    d) `alpha`  
    ✅ **Answer:** b) `opacity`

18. **Which property defines the space outside an element?**  
    a) `padding`  
    b) `border`  
    c) `margin`  
    d) `spacing`  
    ✅ **Answer:** c) `margin`

19. **Which unit is relative to the root HTML font size?**  
    a) `em`  
    b) `px`  
    c) `rem`  
    d) `%`  
    ✅ **Answer:** c) `rem`

20. **Which CSS property adds shadow to text?**  
    a) `font-shadow`  
    b) `text-shadow`  
    c) `shadow-text`  
    d) `box-shadow`  
    ✅ **Answer:** b) `text-shadow`

21. **Which CSS property is used to round the corners of an element’s box?**  
    a) `border-radius`  
    b) `corner-radius`  
    c) `box-round`  
    d) `radius`  
    ✅ **Answer:** a) `border-radius`

22. **Which of the following is the correct syntax to comment in CSS?**  
    a) `// comment`  
    b) `<!-- comment -->`  
    c) `/* comment */`  
    d) `# comment`  
    ✅ **Answer:** c) `/* comment */`

23. **What is the default position value in CSS?**  
    a) `absolute`  
    b) `static`  
    c) `relative`  
    d) `fixed`  
    ✅ **Answer:** b) `static`

24. **What does the `z-index` property control?**  
    a) Zoom level of text  
    b) Stack order of elements  
    c) Font size  
    d) Margin spacing  
    ✅ **Answer:** b) Stack order of elements

25. **Which property changes the type of cursor when hovering over an element?**  
    a) `pointer`  
    b) `cursor`  
    c) `hover`  
    d) `mouse`  
    ✅ **Answer:** b) `cursor`

26. **Which property would you use to control line spacing?**  
    a) `line-spacing`  
    b) `line-height`  
    c) `text-spacing`  
    d) `spacing`  
    ✅ **Answer:** b) `line-height`

27. **What is the correct way to apply multiple CSS classes to a single HTML element?**  
    a) `class="class1 class2"`  
    b) `class="class1, class2"`  
    c) `class="class1.class2"`  
    d) `class="class1+class2"`  
    ✅ **Answer:** a) `class="class1 class2"`

28. **How do you select all `<div>` elements with class “box”?**  
    a) `div .box`  
    b) `.box div`  
    c) `div.box`  
    d) `#div .box`  
    ✅ **Answer:** c) `div.box`

29. **Which unit is *relative* to the parent element’s font size?**  
    a) `px`  
    b) `em`  
    c) `rem`  
    d) `%`  
    ✅ **Answer:** b) `em`

30. **How can you make an element hidden but still take up space?**  
    a) `display: none;`  
    b) `opacity: 0;`  
    c) `visibility: hidden;`  
    d) `hidden: true;`  
    ✅ **Answer:** c) `visibility: hidden;`

31. **Which property is used to add a shadow to a box?**  
    a) `box-shadow`  
    b) `shadow-box`  
    c) `element-shadow`  
    d) `shadow`  
    ✅ **Answer:** a) `box-shadow`

32. **How do you apply a style to all elements of a specific class?**  
    a) `#className`  
    b) `.className`  
    c) `*className`  
    d) `class:className`  
    ✅ **Answer:** b) `.className`

33. **Which declaration will center a block element horizontally?**  
    a) `align: center;`  
    b) `text-align: center;`  
    c) `margin: auto;`  
    d) `float: center;`  
    ✅ **Answer:** c) `margin: auto;`

34. **Which CSS property is used to control the layout direction in Flexbox?**  
    a) `flex-direction`  
    b) `direction`  
    c) `layout`  
    d) `flex-align`  
    ✅ **Answer:** a) `flex-direction`

35. **What is the purpose of the `overflow` property in CSS?**  
    a) Resize font  
    b) Control content spilling outside the box  
    c) Control borders  
    d) Set background images  
    ✅ **Answer:** b) Control content spilling outside the box

36. **Which shorthand property sets margin in all four directions?**  
    a) `margin-all`  
    b) `margin-box`  
    c) `margin`  
    d) `margin-full`  
    ✅ **Answer:** c) `margin`

37. **What does `display: none;` do?**  
    a) Makes an element invisible but keeps its space  
    b) Hides the element and removes it from layout  
    c) Sets display to block  
    d) Minimizes the element  
    ✅ **Answer:** b) Hides the element and removes it from layout

38. **Which property is used to make an element inline?**  
    a) `display: inline`  
    b) `position: inline`  
    c) `float: inline`  
    d) `type: inline`  
    ✅ **Answer:** a) `display: inline`

39. **Which CSS property is used to specify italic text?**  
    a) `font-weight`  
    b) `text-align`  
    c) `font-style`  
    d) `font-variant`  
    ✅ **Answer:** c) `font-style`

40. **Which of these is a valid color value in CSS?**  
    a) `rgb(255,0,0)`  
    b) `#FF0000`  
    c) `red`  
    d) All of the above  
    ✅ **Answer:** d) All of the above

41. **What does the `position: relative;` declaration do?**  
    a) Positions the element off-screen  
    b) Positions the element relative to its parent  
    c) Positions the element based on normal flow but allows offsetting  
    d) Makes the element scrollable  
    ✅ **Answer:** c) Positions the element based on normal flow but allows offsetting

42. **Which CSS property is used to control spacing between characters?**  
    a) `letter-spacing`  
    b) `word-spacing`  
    c) `character-spacing`  
    d) `line-spacing`  
    ✅ **Answer:** a) `letter-spacing`

43. **What is the use of `text-transform` in CSS?**  
    a) Translates text  
    b) Makes text bold  
    c) Changes the case of text  
    d) Rotates text  
    ✅ **Answer:** c) Changes the case of text

44. **What does the `:hover` pseudo-class do?**  
    a) Targets elements clicked by the user  
    b) Targets elements when mouse hovers over them  
    c) Targets all elements  
    d) Targets the first element  
    ✅ **Answer:** b) Targets elements when mouse hovers over them

45. **Which property removes the underline from hyperlinks?**  
    a) `text-align: none;`  
    b) `text-decoration: none;`  
    c) `link-decoration: none;`  
    d) `font-style: none;`  
    ✅ **Answer:** b) `text-decoration: none;`

46. **What does the `float` property do?**  
    a) Makes an element transparent  
    b) Moves the element to top of the page  
    c) Pushes an element to the left or right  
    d) Adds animation  
    ✅ **Answer:** c) Pushes an element to the left or right

47. **Which property is used to make text bold?**  
    a) `font-style: bold;`  
    b) `font-weight: bold;`  
    c) `text-weight: bold;`  
    d) `text-style: bold;`  
    ✅ **Answer:** b) `font-weight: bold;`

48. **How do you apply a background image using CSS?**  
    a) `image: url(bg.jpg);`  
    b) `background-image: url(bg.jpg);`  
    c) `bg: url(bg.jpg);`  
    d) `background: image(bg.jpg);`  
    ✅ **Answer:** b) `background-image: url(bg.jpg);`

49. **Which CSS rule makes a list display horizontally?**  
    a) `list-style: horizontal;`  
    b) `display: inline;`  
    c) `float: right;`  
    d) `text-align: left;`  
    ✅ **Answer:** b) `display: inline;`

50. **Which of the following is not a valid value for `display`?**  
    a) `block`  
    b) `inline`  
    c) `center`  
    d) `none`  
    ✅ **Answer:** c) `center`

51. **What does `background-size: cover;` do?**  
    a) Stretches image outside the container  
    b) Ensures background image fills container while preserving aspect ratio  
    c) Repeats the background image  
    d) Crops the background image  
    ✅ **Answer:** b) Ensures background image fills container while preserving aspect ratio

52. **Which CSS rule is used to hide overflowing content?**  
    a) `overflow: hide;`  
    b) `hide-overflow: true;`  
    c) `overflow: hidden;`  
    d) `visibility: hidden;`  
    ✅ **Answer:** c) `overflow: hidden;`

53. **Which of the following sets the spacing between words?**  
    a) `letter-spacing`  
    b) `text-spacing`  
    c) `word-spacing`  
    d) `spacing`  
    ✅ **Answer:** c) `word-spacing`

54. **What does the `min-height` property do?**  
    a) Sets the maximum height of an element  
    b) Sets the minimum height of an element  
    c) Hides the height of an element  
    d) Aligns element to the bottom  
    ✅ **Answer:** b) Sets the minimum height of an element

55. **Which property makes a box's width include padding and border?**  
    a) `box-size: full;`  
    b) `box-model: border;`  
    c) `box-sizing: border-box;`  
    d) `box-width: full;`  
    ✅ **Answer:** c) `box-sizing: border-box;`

56. **What is the default display value for `<span>`?**  
    a) `block`  
    b) `inline`  
    c) `flex`  
    d) `grid`  
    ✅ **Answer:** b) `inline`

57. **Which property would you use to align text to the right?**  
    a) `text-align: right;`  
    b) `align-text: right;`  
    c) `float: right;`  
    d) `text-position: right;`  
    ✅ **Answer:** a) `text-align: right;`

58. **What is the correct way to apply a CSS style to all `<p>` tags?**  
    a) `#p {}`  
    b) `.p {}`  
    c) `p {}`  
    d) `*p {}`  
    ✅ **Answer:** c) `p {}`

59. **What does `font-size: 1.5em;` mean?**  
    a) Sets font size to 150px  
    b) Sets font size to 150% of browser default  
    c) Sets font size 1.5 times the parent’s font size  
    d) Fixed font size  
    ✅ **Answer:** c) Sets font size 1.5 times the parent’s font size

60. **Which selector targets an element with a specific ID?**  
    a) `#element`  
    b) `.element`  
    c) `element`  
    d) `*element`  
    ✅ **Answer:** a) `#element`

61. **Which CSS property controls the space between lines of text?**  
    a) `line-spacing`  
    b) `text-spacing`  
    c) `line-height`  
    d) `text-height`  
    ✅ **Answer:** c) `line-height`

62. **How do you make an element’s background color red?**  
    a) `color: red;`  
    b) `bgcolor: red;`  
    c) `background-color: red;`  
    d) `background: red-color;`  
    ✅ **Answer:** c) `background-color: red;`

63. **What value of `position` places the element out of normal flow and relative to the viewport?**  
    a) `absolute`  
    b) `relative`  
    c) `fixed`  
    d) `sticky`  
    ✅ **Answer:** c) `fixed`

64. **Which CSS property allows elements to be stacked above or below each other?**  
    a) `position`  
    b) `layer`  
    c) `z-index`  
    d) `stack-order`  
    ✅ **Answer:** c) `z-index`

65. **What unit is relative to the font-size of the root element?**  
    a) `%`  
    b) `rem`  
    c) `em`  
    d) `vh`  
    ✅ **Answer:** b) `rem`

66. **How can you select all `<h1>` and `<p>` elements?**  
    a) `h1 p {}`  
    b) `h1, p {}`  
    c) `h1.p {}`  
    d) `h1 + p {}`  
    ✅ **Answer:** b) `h1, p {}`

67. **Which of the following defines the distance between the element’s border and content?**  
    a) `margin`  
    b) `padding`  
    c) `spacing`  
    d) `border-spacing`  
    ✅ **Answer:** b) `padding`

68. **What will `visibility: hidden;` do?**  
    a) Hides element and removes from layout  
    b) Makes element fully transparent  
    c) Hides element but keeps space reserved  
    d) Removes element from HTML  
    ✅ **Answer:** c) Hides element but keeps space reserved

69. **Which of the following will apply styles only to `<div>` elements with class “box”?**  
    a) `div .box`  
    b) `.div .box`  
    c) `.box`  
    d) `div.box`  
    ✅ **Answer:** d) `div.box`

70. **How do you set a custom font using CSS?**  
    a) `font: "Open Sans";`  
    b) `font-name: Open Sans;`  
    c) `font-family: "Open Sans";`  
    d) `font-type: sans;`  
    ✅ **Answer:** c) `font-family: "Open Sans";`

71. **Which property sets the width of an element?**  
    a) `element-width`  
    b) `width`  
    c) `max-width`  
    d) `content-width`  
    ✅ **Answer:** b) `width`

72. **Which property makes text italic?**  
    a) `text-style: italic;`  
    b) `font-weight: italic;`  
    c) `font-style: italic;`  
    d) `text-italic: true;`  
    ✅ **Answer:** c) `font-style: italic;`

73. **What does the `inherit` keyword do?**  
    a) Disables styling  
    b) Applies default browser styles  
    c) Inherits the property value from the parent  
    d) Resets all properties  
    ✅ **Answer:** c) Inherits the property value from the parent

74. **What is the default value of `position` in CSS?**  
    a) `relative`  
    b) `absolute`  
    c) `static`  
    d) `fixed`  
    ✅ **Answer:** c) `static`

75. **Which property changes the shape of the cursor?**  
    a) `cursor-shape`  
    b) `mouse-type`  
    c) `cursor`  
    d) `pointer-type`  
    ✅ **Answer:** c) `cursor`

76. **What does `opacity: 0.5;` mean?**  
    a) Fully transparent  
    b) 50% transparent  
    c) 50% visible, 50% grayscale  
    d) 100% visible  
    ✅ **Answer:** b) 50% transparent

77. **Which unit is based on the height of the viewport?**  
    a) `vh`  
    b) `em`  
    c) `vw`  
    d) `rem`  
    ✅ **Answer:** a) `vh`

78. **How do you make a border with rounded corners?**  
    a) `border-corner: round;`  
    b) `rounded-border: true;`  
    c) `border-radius`  
    d) `border-shape`  
    ✅ **Answer:** c) `border-radius`

79. **What is the value of `font-weight` for bold text?**  
    a) `400`  
    b) `300`  
    c) `normal`  
    d) `700`  
    ✅ **Answer:** d) `700`

80. **Which of the following CSS properties controls the stacking order?**  
    a) `position`  
    b) `display`  
    c) `z-index`  
    d) `order`  
    ✅ **Answer:** c) `z-index`

81. **Which property is used to change the left margin of an element?**  
    a) `indent-left`  
    b) `margin-left`  
    c) `padding-left`  
    d) `left-margin`  
    ✅ **Answer:** b) `margin-left`

82. **What is the correct syntax to set a background image?**  
    a) `background-img: "image.jpg";`  
    b) `image: url("image.jpg");`  
    c) `background: image("image.jpg");`  
    d) `background-image: url("image.jpg");`  
    ✅ **Answer:** d) `background-image: url("image.jpg");`

83. **Which property changes the text color inside an element?**  
    a) `text-color`  
    b) `font-color`  
    c) `color`  
    d) `style-color`  
    ✅ **Answer:** c) `color`

84. **Which shorthand property can be used to set margin for all sides?**  
    a) `margin-all`  
    b) `margin`  
    c) `spacing`  
    d) `padding`  
    ✅ **Answer:** b) `margin`

85. **Which value is used to make an element a flex container?**  
    a) `display: grid;`  
    b) `display: inline-block;`  
    c) `display: flex;`  
    d) `display: container;`  
    ✅ **Answer:** c) `display: flex;`

86. **Which property sets the spacing between letters?**  
    a) `text-spacing`  
    b) `letter-spacing`  
    c) `character-spacing`  
    d) `font-spacing`  
    ✅ **Answer:** b) `letter-spacing`

87. **How do you prevent an element from floating beside a floated element?**  
    a) `float: none;`  
    b) `clear: both;`  
    c) `display: block;`  
    d) `visibility: hidden;`  
    ✅ **Answer:** b) `clear: both`

88. **What does `text-transform: uppercase;` do?**  
    a) Converts all text to bold  
    b) Converts all text to italic  
    c) Converts all letters to uppercase  
    d) Adds underlines to text  
    ✅ **Answer:** c) Converts all letters to uppercase

89. **Which property is used to apply shadow to text?**  
    a) `text-effect`  
    b) `font-shadow`  
    c) `text-shadow`  
    d) `shadow-text`  
    ✅ **Answer:** c) `text-shadow`

90. **How do you apply multiple classes to an HTML element in CSS?**  
    a) `.class1 + .class2 {}`  
    b) `class1, class2 {}`  
    c) `.class1.class2 {}`  
    d) `#class1 #class2 {}`  
    ✅ **Answer:** c) `.class1.class2 {}`

91. **Which property changes the indentation of the first line of text?**  
    a) `line-indent`  
    b) `text-indent`  
    c) `indent`  
    d) `text-padding`  
    ✅ **Answer:** b) `text-indent`

92. **Which of the following defines how far the background extends within the element?**  
    a) `background-clip`  
    b) `background-range`  
    c) `background-border`  
    d) `background-area`  
    ✅ **Answer:** a) `background-clip`

93. **Which property controls the visibility of an element?**  
    a) `opacity`  
    b) `display`  
    c) `visibility`  
    d) `hide`  
    ✅ **Answer:** c) `visibility`

94. **What value of `display` hides the element but does not reserve space?**  
    a) `display: hide;`  
    b) `display: block;`  
    c) `display: visible;`  
    d) `display: none;`  
    ✅ **Answer:** d) `display: none;`

95. **Which CSS property is used to rotate an element?**  
    a) `transform: rotate();`  
    b) `rotate: degrees();`  
    c) `change-angle: rotate;`  
    d) `animation: rotate();`  
    ✅ **Answer:** a) `transform: rotate();`

96. **How do you make a list with no bullet points?**  
    a) `list-style-type: none;`  
    b) `bullet: none;`  
    c) `list: false;`  
    d) `list-mark: hide;`  
    ✅ **Answer:** a) `list-style-type: none;`

97. **Which property makes a box scrollable when its content overflows?**  
    a) `scroll: auto;`  
    b) `overflow: auto;`  
    c) `scrollable: yes;`  
    d) `content-overflow: scroll;`  
    ✅ **Answer:** b) `overflow: auto;`

98. **How do you apply a linear gradient as a background in CSS?**  
    a) `background-style: gradient;`  
    b) `gradient: linear();`  
    c) `background: linear-gradient();`  
    d) `background-image: linear;`  
    ✅ **Answer:** c) `background: linear-gradient();`

99. **Which of the following properties is used to change the style of a border?**  
    a) `border-style`  
    b) `border-shape`  
    c) `border-type`  
    d) `border-change`  
    ✅ **Answer:** a) `border-style`

100. **What does `box-sizing: border-box;` do?**  
    a) Adds borders outside the element box  
    b) Makes margin count as part of width  
    c) Includes padding and border in the element’s total width and height  
    d) Ignores padding and border  
    ✅ **Answer:** c) Includes padding and border in the element’s total width and height

81. **Which CSS function is used to apply transparency to a color?**  
    a) `rgb()`  
    b) `opacity()`  
    c) `rgba()`  
    d) `transparent()`  
    ✅ **Answer:** c) `rgba()`

82. **How can you hide an element but keep it in the HTML source?**  
    a) `display: none;`  
    b) `visibility: hidden;`  
    c) `opacity: 0;`  
    d) `b and c`  
    ✅ **Answer:** d) `b and c`

83. **Which property is used to set the shadow of text?**  
    a) `text-shadow`  
    b) `box-shadow`  
    c) `shadow-text`  
    d) `font-shadow`  
    ✅ **Answer:** a) `text-shadow`

84. **How do you center an element horizontally using margin?**  
    a) `margin: auto;`  
    b) `margin: 50%;`  
    c) `margin-left: 50%;`  
    d) `margin-center: true;`  
    ✅ **Answer:** a) `margin: auto;`

85. **Which property sets the outer space of an element?**  
    a) `padding`  
    b) `margin`  
    c) `border`  
    d) `spacing`  
    ✅ **Answer:** b) `margin`

86. **What does `overflow: hidden;` do?**  
    a) Hides content outside the box  
    b) Enlarges the container  
    c) Makes the element invisible  
    d) Adds scrollbars  
    ✅ **Answer:** a) Hides content outside the box

87. **Which selector matches an element with a specific attribute?**  
    a) `.class[attr]`  
    b) `element[attr]`  
    c) `#id.attr`  
    d) `element.value`  
    ✅ **Answer:** b) `element[attr]`

88. **Which property affects how flex items wrap?**  
    a) `wrap`  
    b) `flex-wrap`  
    c) `flex-direction`  
    d) `flex-order`  
    ✅ **Answer:** b) `flex-wrap`

89. **How do you specify a minimum width for an element?**  
    a) `min-size`  
    b) `width-min`  
    c) `min-width`  
    d) `limit-width`  
    ✅ **Answer:** c) `min-width`

90. **Which pseudo-class selects the first child of a parent?**  
    a) `:first`  
    b) `:first-child`  
    c) `:first-element`  
    d) `:child:first`  
    ✅ **Answer:** b) `:first-child`

91. **Which property defines the thickness of a border?**  
    a) `border-thickness`  
    b) `border-size`  
    c) `border-width`  
    d) `border`  
    ✅ **Answer:** c) `border-width`

92. **Which property lets you apply an image as a background?**  
    a) `img-background`  
    b) `background-image`  
    c) `image-url`  
    d) `bg-img`  
    ✅ **Answer:** b) `background-image`

93. **How do you prevent elements from overlapping with `float`?**  
    a) `clear`  
    b) `overflow: auto`  
    c) `float: none`  
    d) All of the above  
    ✅ **Answer:** d) All of the above

94. **Which of these is a valid CSS comment?**  
    a) `<!-- comment -->`  
    b) `# This is a comment`  
    c) `// comment`  
    d) `/* comment */`  
    ✅ **Answer:** d) `/* comment */`

95. **What is the purpose of `max-width` in CSS?**  
    a) Prevents element from growing beyond a value  
    b) Hides extra width  
    c) Makes container fixed  
    d) Sets both width and height  
    ✅ **Answer:** a) Prevents element from growing beyond a value

96. **What is the initial value of `display` for a `<div>` element?**  
    a) `inline`  
    b) `block`  
    c) `inline-block`  
    d) `none`  
    ✅ **Answer:** b) `block`

97. **Which property affects the spacing between characters?**  
    a) `text-spacing`  
    b) `word-spacing`  
    c) `letter-spacing`  
    d) `font-spacing`  
    ✅ **Answer:** c) `letter-spacing`

98. **Which of these is NOT a valid value for `display`?**  
    a) `block`  
    b) `inline`  
    c) `flex`  
    d) `center`  
    ✅ **Answer:** d) `center`

99. **How do you make a list horizontal in CSS?**  
    a) `display: inline;` on `<li>`  
    b) `float: left;`  
    c) `display: flex;` on `<ul>`  
    d) All of the above  
    ✅ **Answer:** d) All of the above

100. **What does `box-sizing: border-box;` do?**  
    a) Ignores padding and border  
    b) Includes padding and border in total width/height  
    c) Doubles the box size  
    d) Sets default box size  
    ✅ **Answer:** b) Includes padding and border in total width/height
