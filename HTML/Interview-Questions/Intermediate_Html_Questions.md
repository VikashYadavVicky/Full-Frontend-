## 🔷 Intermediate HTML Interview Questions and Answers (Short & Long)

### ✅ Questions 1–20

1. **What is semantic HTML?**  
   - **Answer:** Semantic HTML uses HTML5 tags that convey meaning about the content inside them, such as `<article>`, `<header>`, `<footer>`, and `<section>`. These improve accessibility, SEO, and code readability.

2. **How does the `<fieldset>` and `<legend>` tag improve form accessibility?**  
   - **Answer:** `<fieldset>` groups related elements, and `<legend>` gives a caption to that group. Screen readers use these to provide better context for users with disabilities.

3. **What is the difference between `<div>` and `<section>`?**  
   - **Answer:** `<div>` is a generic container with no semantic meaning. `<section>` represents a standalone block of related content and should ideally have a heading.

4. **How is the `<details>` tag used in HTML5?**  
   - **Answer:** The `<details>` tag is used to create a collapsible content block. It is often paired with the `<summary>` tag to define the visible summary.

5. **What is the purpose of the `aria-*` attributes in HTML?**  
   - **Answer:** ARIA (Accessible Rich Internet Applications) attributes improve accessibility by providing additional context to assistive technologies like screen readers.

6. **Explain the difference between `<strong>` and `<b>`.**  
   - **Answer:** `<strong>` adds importance (semantic emphasis) to text, while `<b>` simply makes text bold without semantic meaning.

7. **What does the `contenteditable` attribute do?**  
   - **Answer:** When set to `true`, it makes an element editable by the user directly in the browser.

8. **How is the `<template>` tag used in HTML?**  
   - **Answer:** It holds reusable HTML code fragments that are not rendered until activated via JavaScript. Useful for client-side rendering.

9. **What is the difference between `<input type="button">` and `<button>`?**  
   - **Answer:** `<input type="button">` is self-closing and can’t have child elements. `<button>` is more flexible as it can include text, HTML, or images inside it.

10. **How does HTML5 handle audio and video elements?**  
    - **Answer:** HTML5 introduced `<audio>` and `<video>` tags that support native playback without plugins. Attributes like `controls`, `autoplay`, and `loop` enhance functionality.

11. **Explain the difference between `defer` and `async` script loading.**  
    - **Answer:** `defer` delays script execution until after HTML parsing is complete. `async` executes the script as soon as it is downloaded, potentially interrupting parsing.

12. **What is a polyfill in the context of HTML?**  
    - **Answer:** A polyfill is a piece of JavaScript code used to provide modern functionality on older browsers that do not support it natively.

13. **Why should we avoid inline styling in HTML?**  
    - **Answer:** Inline styles mix content with presentation, making code harder to maintain and override. It's better to use external CSS for separation of concerns.

14. **What is the purpose of the `hidden` attribute?**  
    - **Answer:** It hides the element from view without removing it from the DOM. Useful for toggling visibility with JavaScript.

15. **How can you make a form field required?**  
    - **Answer:** By adding the `required` attribute to input elements, browsers will prevent form submission if the field is empty.

16. **What is the difference between `<article>` and `<section>`?**  
    - **Answer:** `<article>` is for self-contained content like blog posts, while `<section>` is for grouping related content. Articles can be standalone; sections often need context.

17. **What are void elements in HTML?**  
    - **Answer:** Void elements do not have closing tags or content, such as `<br>`, `<img>`, `<input>`, and `<hr>`.

18. **What is the `<output>` element used for?**  
    - **Answer:** It represents the result of a calculation or user action, often used with JavaScript or forms.

19. **Explain the difference between `<label for="id">` and placing the `<input>` inside the `<label>`.**  
    - **Answer:** Both are valid. Using `for` links the label to the input via `id`. Nesting places the input inside the label for implicit association.

20. **How can you make an image responsive in HTML?**  
    - **Answer:** By setting the `width` to `100%` and `height` to `auto` via CSS or using `picture` and `srcset` for adaptive images.

### ✅ Questions 21–40

21. **What does the `<progress>` element represent?**  
   - **Answer:** It displays the progress of a task such as a download or upload. You can control it using the `value` and `max` attributes.

22. **How does the `<meter>` element differ from `<progress>`?**  
   - **Answer:** `<meter>` shows a scalar value within a known range (like disk space or battery level), while `<progress>` indicates task completion progress.

23. **What is the function of the `<figure>` and `<figcaption>` tags?**  
   - **Answer:** `<figure>` groups media content (like images or charts), and `<figcaption>` adds a caption to describe it.

24. **How is the `autocomplete` attribute used in forms?**  
   - **Answer:** It controls whether the browser should auto-fill the input field based on previous entries. Values: `on` or `off`.

25. **What are custom data attributes in HTML5?**  
   - **Answer:** Attributes prefixed with `data-`, e.g., `data-id="123"`, store extra data for use in JavaScript without affecting layout or behavior.

26. **What does the `<mark>` element do?**  
   - **Answer:** It highlights text by applying a yellow background to indicate relevance or search result match.

27. **What is the use of the `spellcheck` attribute?**  
   - **Answer:** When set to `true`, it enables spell checking on textual input fields or contenteditable elements.

28. **What is the difference between `readonly` and `disabled` attributes?**  
   - **Answer:** `readonly` lets the user see but not change the input. `disabled` grays out the field and prevents interaction entirely.

29. **How do you open a link in a new browser tab or window?**  
   - **Answer:** Use the `target="_blank"` attribute inside the `<a>` tag.

30. **What is the difference between `<nav>` and `<menu>` tags?**  
   - **Answer:** `<nav>` is used for major navigation links. `<menu>` is for tool menus or context menus (less commonly used).

31. **What is the role of the `<address>` tag?**  
   - **Answer:** It contains contact information for the nearest `<article>` or the site owner. Often used in footers.

32. **What are the advantages of using semantic tags over non-semantic tags?**  
   - **Answer:** Semantic tags improve readability, accessibility, SEO, and structure, whereas non-semantic tags like `<div>` don't convey meaning.

33. **What are web components in HTML?**  
   - **Answer:** A set of technologies that allow you to create reusable custom elements: Custom Elements, Shadow DOM, and HTML templates.

34. **How does the `tabindex` attribute improve user experience?**  
   - **Answer:** It controls the order of focus when using the Tab key for navigation, improving accessibility and keyboard usability.

35. **Explain Shadow DOM in the context of HTML.**  
   - **Answer:** Shadow DOM allows encapsulation of DOM and styles, letting you hide internal implementation of custom elements from the main document.

36. **What does the `draggable` attribute do?**  
   - **Answer:** It enables drag-and-drop functionality for an element when set to `true`.

37. **How do you define a base URL for all relative links in a document?**  
   - **Answer:** Use the `<base href="https://example.com/">` tag inside the `<head>` section.

38. **What is the role of the `<time>` element?**  
   - **Answer:** It represents a specific time or duration, useful for events, schedules, or machine-readable timestamps.

39. **What is the difference between inline and block elements in HTML?**  
   - **Answer:** Block elements take full width and start on a new line. Inline elements take only as much width as needed and stay in the same line.

40. **How can HTML support responsive design natively?**  
   - **Answer:** Through the `<meta name="viewport">` tag and use of elements like `<picture>`, `srcset`, and semantic layout tags.


### ✅ Questions 41–60

41. **What is the `<dialog>` element in HTML5?**  
   - **Answer:** It represents a dialog box or popup window. It can be opened with JavaScript using the `.show()` or `.showModal()` methods.

42. **How can you add fallback content for unsupported HTML5 features?**  
   - **Answer:** Place alternative content between opening and closing tags. For example, in `<video>`, you can include a message or link inside the tag if the browser doesn’t support it.

43. **What is the use of the `<source>` element?**  
   - **Answer:** It defines multiple media resources for `<audio>`, `<video>`, or `<picture>`. The browser chooses the best one it supports.

44. **How does the `<picture>` element improve responsive image loading?**  
   - **Answer:** It allows you to define multiple sources for an image, with conditions (like screen width) using `<source media="...">`.

45. **What is the purpose of the `<track>` element?**  
   - **Answer:** It provides subtitles, captions, descriptions, and metadata for `<video>` and `<audio>` elements.

46. **How do you make an image load faster or more efficiently in HTML?**  
   - **Answer:** Use `loading="lazy"` for deferred loading, compress the image, and use modern formats like WebP.

47. **How can HTML5 elements improve SEO?**  
   - **Answer:** Semantic elements like `<header>`, `<main>`, `<article>`, and `<footer>` help search engines understand the structure and relevance of content.

48. **What does the `sandbox` attribute do in an `<iframe>`?**  
   - **Answer:** It applies extra restrictions to the content inside the iframe, enhancing security by disabling forms, scripts, and more.

49. **What is an accessibility tree in HTML context?**  
   - **Answer:** It is a structure built by the browser that represents the semantic elements and ARIA attributes to assistive technologies like screen readers.

50. **How is `role` used in HTML for accessibility?**  
   - **Answer:** The `role` attribute defines the purpose of an element, helping screen readers interpret and announce elements correctly (e.g., `role="navigation"`).

51. **What’s the use of the `<main>` tag in HTML5?**  
   - **Answer:** It represents the dominant content of the page, excluding sidebars, footers, or navigation. There should only be one `<main>` per page.

52. **How do you prevent an input field from being submitted?**  
   - **Answer:** Use the `disabled` attribute or prevent default submission in JavaScript using `event.preventDefault()`.

53. **How can you group HTML form inputs visually and semantically?**  
   - **Answer:** Use `<fieldset>` to group them and `<legend>` to describe the group. This enhances both visual clarity and accessibility.

54. **What is the difference between `<script defer>` and `<script async>`?**  
   - **Answer:** `defer` delays script execution until after parsing; `async` executes the script as soon as it's downloaded, possibly before parsing is done.

55. **What are HTML Microdata attributes used for?**  
   - **Answer:** They embed metadata into HTML using `itemscope`, `itemtype`, and `itemprop` for use by search engines and web crawlers.

56. **What’s the use of the `novalidate` attribute in `<form>`?**  
   - **Answer:** It disables default HTML5 form validation, letting developers handle validation manually via JavaScript.

57. **How does the `<data>` tag work in HTML?**  
   - **Answer:** It binds a machine-readable value to content. For example, `<data value="12345">Product</data>`.

58. **What is the difference between `<code>`, `<kbd>`, `<samp>`, and `<pre>`?**  
   - **Answer:**  
     - `<code>`: for programming code  
     - `<kbd>`: user keyboard input  
     - `<samp>`: sample output  
     - `<pre>`: preformatted text (preserves spacing and line breaks)

59. **How do HTML imports work (deprecated)?**  
   - **Answer:** HTML imports used `<link rel="import">` to include HTML documents, but they’re deprecated in favor of modules and templates.

60. **What is the difference between `<header>` and `<head>`?**  
   - **Answer:**  
     - `<head>`: metadata and external resources for the document  
     - `<header>`: content introduction inside `<body>`, like titles or navigation

### ✅ Questions 61–80

61. **What is the `<aside>` element used for?**  
   - **Answer:** `<aside>` represents content that is tangentially related to the main content, such as sidebars, pull quotes, or related links.

62. **How does the `accept` attribute work on file input elements?**  
   - **Answer:** It specifies the types of files that the server accepts. Example: `<input type="file" accept=".jpg, .png">`.

63. **How can you control the direction of text in HTML?**  
   - **Answer:** Use the `dir` attribute with values like `ltr` (left-to-right) or `rtl` (right-to-left) on elements.

64. **What is the `<bdi>` element used for?**  
   - **Answer:** It stands for "Bi-Directional Isolation" and ensures that the text inside it is displayed in the correct direction independently of surrounding text.

65. **What’s the use of the `<bdo>` tag?**  
   - **Answer:** It overrides the current text direction. For example, `<bdo dir="rtl">text</bdo>` forces right-to-left display.

66. **How do you embed a PDF or other documents in HTML?**  
   - **Answer:** Use `<embed>` or `<iframe>`. Example: `<embed src="file.pdf" width="500" height="600">`.

67. **What is the difference between `<embed>` and `<object>`?**  
   - **Answer:** `<embed>` is a self-contained tag for embedding external resources like media or PDFs. `<object>` is more versatile, allowing fallback content and additional parameters.

68. **What are the limitations of the `<marquee>` tag?**  
   - **Answer:** `<marquee>` is obsolete and not recommended. It causes accessibility and usability issues and should be replaced with CSS animations.

69. **What is the `<noscript>` tag used for?**  
   - **Answer:** It provides fallback content if JavaScript is disabled or not supported in the browser.

70. **How does the `<canvas>` element work in HTML5?**  
   - **Answer:** `<canvas>` creates a drawable region in the browser, which can be manipulated with JavaScript to draw graphics, charts, games, etc.

71. **What’s the difference between `<canvas>` and `<svg>`?**  
   - **Answer:**  
     - `<canvas>` is bitmap-based and great for dynamic graphics.  
     - `<svg>` is vector-based and better for static or interactive graphics.

72. **How do you track user interactions with form inputs?**  
   - **Answer:** Use JavaScript event listeners like `onchange`, `oninput`, `onfocus`, `onblur`, or `onsubmit`.

73. **What is form validation in HTML5?**  
   - **Answer:** HTML5 provides built-in form validation using attributes like `required`, `pattern`, `min`, `max`, `maxlength`, `type`, etc.

74. **What are the benefits of the `pattern` attribute in forms?**  
   - **Answer:** It allows you to define regular expressions to validate user input directly in HTML without needing JavaScript.

75. **How does `autocomplete` help users in forms?**  
   - **Answer:** It enables browsers to suggest or fill in values previously entered, improving user experience and reducing typing errors.

76. **What is a data list and how is it implemented?**  
   - **Answer:** `<datalist>` provides predefined options for an `<input>` field. It's like an autocomplete dropdown. Example:  
     ```html
     <input list="browsers">
     <datalist id="browsers">
       <option value="Chrome">
       <option value="Firefox">
     </datalist>
     ```

77. **How do `min`, `max`, and `step` attributes work in numeric inputs?**  
   - **Answer:** They define the minimum, maximum, and increment values allowed for number, range, date, and time inputs.

78. **What is the use of the `form` attribute in form controls?**  
   - **Answer:** It associates a form control with a form element by ID, even if the input is placed outside the `<form>` tag.

79. **How does the `multiple` attribute work in `<input>` and `<select>`?**  
   - **Answer:** It allows users to select more than one file (in file inputs) or multiple options (in select dropdowns).

80. **What are media queries and how are they related to HTML?**  
   - **Answer:** Though defined in CSS, media queries work with HTML layout to apply styles based on device characteristics (screen size, resolution, etc.), enabling responsive design.

### ✅ Questions 81–100

81. **What is the purpose of the `<link rel="preload">` tag?**  
   - **Answer:** It tells the browser to preload a resource (like fonts, images, scripts) early for better performance.

82. **How does the `crossorigin` attribute work in media tags?**  
   - **Answer:** It controls how browsers handle cross-origin requests for `<audio>`, `<video>`, and `<img>`, typically for CORS-enabled resources.

83. **What is the difference between inline and block-level semantic elements?**  
   - **Answer:** Inline semantic elements (`<strong>`, `<em>`) don't break the flow. Block-level semantic elements (`<article>`, `<section>`, `<nav>`) define structural regions and stack vertically.

84. **How can you prevent form submission with invalid fields?**  
   - **Answer:** Use built-in HTML5 validation attributes like `required`, `type`, `pattern`, and prevent submission with JavaScript if validation fails.

85. **How can you visually hide content while keeping it accessible?**  
   - **Answer:** Use CSS like `position: absolute; left: -9999px;` or utility classes from frameworks like Bootstrap’s `.sr-only`.

86. **What’s the use of the `required` attribute in HTML forms?**  
   - **Answer:** It ensures that users cannot submit a form without filling in the marked field.

87. **What is the difference between `<input type="submit">` and `<button type="submit">`?**  
   - **Answer:** Both submit forms, but `<button>` allows inner HTML and more customization, while `<input>` is more limited.

88. **Can `<label>` elements wrap input elements?**  
   - **Answer:** Yes. Wrapping an input with a `<label>` eliminates the need for the `for` attribute and still links them correctly.

89. **What is the `<output>` element used for in forms?**  
   - **Answer:** It displays the result of calculations or interactions, often updated dynamically via JavaScript.

90. **What is the difference between `hidden` and `display: none`?**  
   - **Answer:** `hidden` is an HTML attribute; `display: none` is CSS. Both hide elements, but `display: none` allows conditional CSS changes.

91. **What is feature detection in HTML/JS?**  
   - **Answer:** Checking if a browser supports a specific feature (like a tag or API) before using it, often using JavaScript or libraries like Modernizr.

92. **What is the difference between `localStorage`, `sessionStorage`, and cookies?**  
   - **Answer:**  
     - `localStorage`: persistent storage, no expiration  
     - `sessionStorage`: cleared when session ends  
     - Cookies: sent with every HTTP request and can expire

93. **What is the use of the `<template>` tag in modern web apps?**  
   - **Answer:** It allows you to define reusable chunks of HTML that are not rendered until inserted with JavaScript.

94. **How can you validate an email input in HTML5?**  
   - **Answer:** Use `<input type="email">` which validates format automatically. You can also use `pattern` for additional rules.

95. **What is a placeholder and how is it used?**  
   - **Answer:** The `placeholder` attribute shows hint text in input fields until the user enters a value.

96. **How do ARIA roles differ from native HTML semantics?**  
   - **Answer:** ARIA roles enhance or replicate accessibility features when native semantics are not sufficient or available.

97. **What is the use of `itemprop`, `itemscope`, and `itemtype` in HTML?**  
   - **Answer:** They are microdata attributes that define structured data for search engines (used in schema.org).

98. **Can an element have multiple classes in HTML?**  
   - **Answer:** Yes. Use a space-separated list in the `class` attribute. Example: `class="btn primary large"`.

99. **How do you make an entire HTML element a clickable link?**  
   - **Answer:** Wrap the entire content in an `<a>` tag. For example:  
     ```html
     <a href="https://example.com"><div class="card">Click Me</div></a>
     ```

100. **Why should you use semantic HTML for web applications?**  
   - **Answer:** It improves accessibility, SEO, code clarity, and compatibility with tools like screen readers and search engines.



## 🎯 Intermediate HTML MCQs (1–20)

1. **Which tag is used to embed custom, reusable HTML components?**  
   - a) `<component>`  
   - b) `<custom>`  
   - c) `<template>` ✅  
   - d) `<embed>`

2. **What is the correct use of the `<picture>` element?**  
   - a) Display a background image  
   - b) Embed interactive maps  
   - c) Provide multiple image sources for different resolutions ✅  
   - d) Animate image transitions

3. **Which element is used to associate a caption with a media group like an image or chart?**  
   - a) `<caption>`  
   - b) `<figcaption>` ✅  
   - c) `<label>`  
   - d) `<summary>`

4. **Which HTML attribute allows editable content directly in the browser?**  
   - a) `editable`  
   - b) `content`  
   - c) `contenteditable` ✅  
   - d) `edit-mode`

5. **Which of the following is a valid ARIA role?**  
   - a) `main-nav`  
   - b) `button` ✅  
   - c) `hyperlink`  
   - d) `fieldbox`

6. **Which tag is used to define the result of a user interaction or calculation?**  
   - a) `<result>`  
   - b) `<data>`  
   - c) `<output>` ✅  
   - d) `<value>`

7. **What does the `defer` attribute do in a `<script>` tag?**  
   - a) Delays loading the script forever  
   - b) Runs script immediately  
   - c) Executes after parsing is complete ✅  
   - d) Runs before the page starts loading

8. **What element is used to group related form elements together?**  
   - a) `<formset>`  
   - b) `<group>`  
   - c) `<fieldset>` ✅  
   - d) `<inputgroup>`

9. **Which HTML attribute provides additional metadata about a form control?**  
   - a) `meta`  
   - b) `tooltip`  
   - c) `title` ✅  
   - d) `placeholder`

10. **Which input type allows users to pick a color?**  
    - a) `input type="rgb"`  
    - b) `input type="color"` ✅  
    - c) `input type="hue"`  
    - d) `input type="picker"`

11. **Which HTML element defines a self-contained piece of content, like a blog post?**  
    - a) `<section>`  
    - b) `<article>` ✅  
    - c) `<div>`  
    - d) `<content>`

12. **What tag would you use to build collapsible content sections?**  
    - a) `<summary>`  
    - b) `<details>` ✅  
    - c) `<dialog>`  
    - d) `<section>`

13. **Which attribute disables default browser validation for a form?**  
    - a) `no-check`  
    - b) `disable-validation`  
    - c) `novalidate` ✅  
    - d) `noverify`

14. **Which of the following is not a semantic HTML element?**  
    - a) `<article>`  
    - b) `<section>`  
    - c) `<div>` ✅  
    - d) `<header>`

15. **Which input type allows selecting a number within a range using a slider?**  
    - a) `input type="number"`  
    - b) `input type="range"` ✅  
    - c) `input type="slider"`  
    - d) `input type="bar"`

16. **What does the `<time>` element represent?**  
    - a) A stopwatch  
    - b) Current server time  
    - c) A date/time or duration ✅  
    - d) Loading time of a page

17. **Which tag is used for media that plays in the browser without plugins?**  
    - a) `<movie>`  
    - b) `<media>`  
    - c) `<video>` ✅  
    - d) `<film>`

18. **Which HTML tag is best suited for showing fallback text for `<canvas>`?**  
    - a) `<fallback>`  
    - b) `<noscript>`  
    - c) Inner text inside `<canvas>` ✅  
    - d) `<note>`

19. **What is the use of the `pattern` attribute in forms?**  
    - a) Apply CSS patterns  
    - b) Define input format using regex ✅  
    - c) Add visual decoration  
    - d) Limit font choices

20. **Which element defines user keyboard input in HTML?**  
    - a) `<kbd>` ✅  
    - b) `<key>`  
    - c) `<code>`  
    - d) `<input type="keyboard">`

### ✅ Intermediate HTML MCQs (21–40)

21. **Which attribute is used to set the default focus on a form control?**  
   - a) `autofocus` ✅  
   - b) `focus`  
   - c) `setfocus`  
   - d) `default`

22. **Which element represents a section of navigation links?**  
   - a) `<nav>` ✅  
   - b) `<menu>`  
   - c) `<aside>`  
   - d) `<header>`

23. **Which of the following elements supports the `srcset` attribute?**  
   - a) `<object>`  
   - b) `<picture>`  
   - c) `<img>` ✅  
   - d) `<figure>`

24. **What element is used to define a scalar measurement within a known range?**  
   - a) `<scale>`  
   - b) `<range>`  
   - c) `<meter>` ✅  
   - d) `<value>`

25. **Which tag is used to group options inside a `<select>` dropdown?**  
   - a) `<optiongroup>`  
   - b) `<optgroup>` ✅  
   - c) `<grouplist>`  
   - d) `<selectgroup>`

26. **What attribute tells a browser not to preload a video?**  
   - a) `preload="no"`  
   - b) `preload="none"` ✅  
   - c) `autopreload="false"`  
   - d) `preload="false"`

27. **What is the use of the `<summary>` tag?**  
   - a) Summary at the end of an article  
   - b) Provides a label for `<details>` ✅  
   - c) Used inside `<footer>`  
   - d) Adds tooltips

28. **Which HTML5 element is used to embed audio content?**  
   - a) `<sound>`  
   - b) `<media>`  
   - c) `<audio>` ✅  
   - d) `<mp3>`

29. **What does the `download` attribute in an `<a>` tag do?**  
   - a) Starts audio download  
   - b) Displays a download icon  
   - c) Forces file download on click ✅  
   - d) Links to a download manager

30. **Which of the following is a void (self-closing) element?**  
   - a) `<span>`  
   - b) `<p>`  
   - c) `<img>` ✅  
   - d) `<div>`

31. **Which of these tags is used for machine-readable date/time?**  
   - a) `<time>` ✅  
   - b) `<clock>`  
   - c) `<date>`  
   - d) `<meta>`

32. **What does the `<track>` tag provide for video elements?**  
   - a) Background music  
   - b) Metadata for scripts  
   - c) Captions and subtitles ✅  
   - d) Related images

33. **Which input type allows multiple files to be uploaded at once?**  
   - a) `type="file" multiple` ✅  
   - b) `type="upload-all"`  
   - c) `type="multi"`  
   - d) `type="archive"`

34. **Which attribute prevents users from modifying a form field?**  
   - a) `disabled` ✅  
   - b) `inactive`  
   - c) `readonly`  
   - d) `locked`

35. **What does the `sandbox` attribute in an `<iframe>` do?**  
   - a) Disables iframe content  
   - b) Isolates the content for security ✅  
   - c) Enlarges the iframe  
   - d) Allows plugins

36. **Which tag is used to mark up user input?**  
   - a) `<inputtext>`  
   - b) `<kbd>` ✅  
   - c) `<mark>`  
   - d) `<samp>`

37. **What attribute would you use to suggest input values in an input field?**  
   - a) `autofill`  
   - b) `valueset`  
   - c) `list` ✅  
   - d) `dropdown`

38. **Which tag is used to define client-side image maps?**  
   - a) `<imagemap>`  
   - b) `<map>` ✅  
   - c) `<area>`  
   - d) `<img usemap>`

39. **Which HTML element is best for showing command output?**  
   - a) `<result>`  
   - b) `<output>` ✅  
   - c) `<show>`  
   - d) `<command>`

40. **Which attribute allows you to control the tabbing order of elements?**  
   - a) `taborder`  
   - b) `tabpriority`  
   - c) `tabindex` ✅  
   - d) `focusindex`

### ✅ Intermediate HTML MCQs (41–60)

41. **What is the purpose of the `<fieldset>` element?**  
   - a) To style form inputs  
   - b) To group related form controls ✅  
   - c) To submit forms  
   - d) To encrypt form data

42. **Which HTML element is used to embed external applications or interactive content?**  
   - a) `<object>` ✅  
   - b) `<embed>`  
   - c) `<iframe>`  
   - d) `<external>`

43. **Which element defines a caption for a `<fieldset>`?**  
   - a) `<caption>`  
   - b) `<label>`  
   - c) `<title>`  
   - d) `<legend>` ✅

44. **What attribute enables spell checking in editable content?**  
   - a) `checkspell`  
   - b) `spellcheck="true"` ✅  
   - c) `spelling="on"`  
   - d) `spell="yes"`

45. **Which tag helps define a dialog box or modal in HTML5?**  
   - a) `<popup>`  
   - b) `<dialog>` ✅  
   - c) `<modal>`  
   - d) `<window>`

46. **What’s the function of the `readonly` attribute in form fields?**  
   - a) Hides the field from view  
   - b) Makes the field non-editable but still submit with the form ✅  
   - c) Disables the field entirely  
   - d) Encrypts field content

47. **Which input type allows users to pick a time (without date)?**  
   - a) `type="clock"`  
   - b) `type="time"` ✅  
   - c) `type="datetime"`  
   - d) `type="hour"`

48. **Which tag is used to mark a section of text with strong importance?**  
   - a) `<em>`  
   - b) `<bold>`  
   - c) `<strong>` ✅  
   - d) `<highlight>`

49. **What attribute specifies the URL that processes form submission?**  
   - a) `src`  
   - b) `submit`  
   - c) `action` ✅  
   - d) `process`

50. **Which tag is used to add machine-readable metadata to a web page?**  
   - a) `<meta>` ✅  
   - b) `<data>`  
   - c) `<info>`  
   - d) `<mark>`

51. **What is the correct tag for inserting line breaks?**  
   - a) `<br>` ✅  
   - b) `<lb>`  
   - c) `<break>`  
   - d) `<nl>`

52. **Which tag is used to define a footer for a section or page?**  
   - a) `<bottom>`  
   - b) `<footer>` ✅  
   - c) `<section-footer>`  
   - d) `<end>`

53. **Which HTML tag should be used for navigation menus?**  
   - a) `<menu>`  
   - b) `<nav>` ✅  
   - c) `<list>`  
   - d) `<directory>`

54. **Which tag allows you to draw graphics on a web page?**  
   - a) `<svg>`  
   - b) `<canvas>` ✅  
   - c) `<graphics>`  
   - d) `<vector>`

55. **What tag should you use to highlight search results in a text?**  
   - a) `<highlight>`  
   - b) `<mark>` ✅  
   - c) `<search>`  
   - d) `<span class="highlight">`

56. **Which input type lets users select a specific week?**  
   - a) `type="week"` ✅  
   - b) `type="date-week"`  
   - c) `type="select-week"`  
   - d) `type="weekday"`

57. **What tag is used to define alternative media resources for `<audio>` or `<video>`?**  
   - a) `<option>`  
   - b) `<source>` ✅  
   - c) `<file>`  
   - d) `<alt>`

58. **What input type would be used for entering a phone number?**  
   - a) `type="number"`  
   - b) `type="tel"` ✅  
   - c) `type="text"`  
   - d) `type="mobile"`

59. **Which HTML attribute enables lazy loading of images?**  
   - a) `loading="lazy"` ✅  
   - b) `lazyload="true"`  
   - c) `defer="img"`  
   - d) `src="lazy"`

60. **Which tag defines a block of preformatted text?**  
   - a) `<code>`  
   - b) `<block>`  
   - c) `<pre>` ✅  
   - d) `<format>`

### ✅ Intermediate HTML MCQs (61–80)

61. **Which tag defines a term in a description list?**  
   - a) `<desc>`  
   - b) `<dt>` ✅  
   - c) `<dl>`  
   - d) `<dd>`

62. **Which tag is used to define the description of a term in a description list?**  
   - a) `<dt>`  
   - b) `<desc>`  
   - c) `<dl>`  
   - d) `<dd>` ✅

63. **Which tag defines a list of terms and descriptions?**  
   - a) `<ul>`  
   - b) `<dl>` ✅  
   - c) `<list>`  
   - d) `<ol>`

64. **What does the `type` attribute define in the `<input>` element?**  
   - a) Input data  
   - b) Input type like text, number, etc. ✅  
   - c) Input label  
   - d) Input size

65. **Which tag is used to define superscript text?**  
   - a) `<super>`  
   - b) `<sup>` ✅  
   - c) `<upper>`  
   - d) `<s>`

66. **Which tag is used for subscript text?**  
   - a) `<sub>` ✅  
   - b) `<low>`  
   - c) `<down>`  
   - d) `<small>`

67. **Which element represents the main content of the document?**  
   - a) `<content>`  
   - b) `<main>` ✅  
   - c) `<section>`  
   - d) `<body>`

68. **Which input type allows users to select a month and year?**  
   - a) `type="calendar"`  
   - b) `type="month"` ✅  
   - c) `type="date-month"`  
   - d) `type="year"`

69. **Which tag is used for short inline quotations?**  
   - a) `<quote>`  
   - b) `<q>` ✅  
   - c) `<cite>`  
   - d) `<blockquote>`

70. **Which tag is used for long quotations?**  
   - a) `<quote>`  
   - b) `<q>`  
   - c) `<blockquote>` ✅  
   - d) `<cite>`

71. **Which tag defines the title of an HTML document (shown in the browser tab)?**  
   - a) `<heading>`  
   - b) `<title>` ✅  
   - c) `<head>`  
   - d) `<caption>`

72. **Which of the following is a metadata tag used in `<head>`?**  
   - a) `<data>`  
   - b) `<link>` ✅  
   - c) `<header>`  
   - d) `<script>` (incorrect for metadata only)

73. **Which tag is used to link external CSS files?**  
   - a) `<css>`  
   - b) `<style>`  
   - c) `<link>` ✅  
   - d) `<script>`

74. **What is the default display type of a `<div>` element?**  
   - a) `inline`  
   - b) `inline-block`  
   - c) `block` ✅  
   - d) `flex`

75. **What does the `<abbr>` tag represent?**  
   - a) A styled button  
   - b) A navigation menu  
   - c) An abbreviation or acronym ✅  
   - d) A table header

76. **Which HTML element is used to display a contact address?**  
   - a) `<contact>`  
   - b) `<info>`  
   - c) `<footer>`  
   - d) `<address>` ✅

77. **Which tag is used for defining text that has been deleted?**  
   - a) `<strike>`  
   - b) `<del>` ✅  
   - c) `<s>`  
   - d) `<removed>`

78. **Which tag defines inserted text (new additions)?**  
   - a) `<ins>` ✅  
   - b) `<add>`  
   - c) `<insert>`  
   - d) `<u>`

79. **What is the purpose of the `<cite>` tag?**  
   - a) To define citations for creative work ✅  
   - b) To create links  
   - c) To mark notes  
   - d) To insert footnotes

80. **Which HTML attribute allows you to assign a unique identifier to an element?**  
   - a) `ref`  
   - b) `tag`  
   - c) `id` ✅  
   - d) `name`

### ✅ Intermediate HTML MCQs (81–100)

81. **Which HTML element is used to add comments in the code?**  
   - a) `<!-- comment -->` ✅  
   - b) `<comment>`  
   - c) `// comment`  
   - d) `/* comment */`

82. **Which of the following input types is used for email input validation?**  
   - a) `type="mail"`  
   - b) `type="text"`  
   - c) `type="email"` ✅  
   - d) `type="address"`

83. **Which input type is used to enter a website URL?**  
   - a) `type="text"`  
   - b) `type="web"`  
   - c) `type="uri"`  
   - d) `type="url"` ✅

84. **Which of the following is the correct nesting of HTML elements?**  
   - a) `<p><b><i>Text</p></i></b>`  
   - b) `<b><i><p>Text</p></i></b>`  
   - c) `<p><b><i>Text</i></b></p>` ✅  
   - d) `<p><i><b>Text</i></b></p>`

85. **What does the `<noscript>` tag do?**  
   - a) Defines hidden JavaScript  
   - b) Executes code with no script  
   - c) Provides content if JavaScript is disabled ✅  
   - d) Prevents script execution

86. **Which attribute is used to group radio buttons together?**  
   - a) `group`  
   - b) `radio`  
   - c) `set`  
   - d) `name` ✅

87. **Which tag is used to insert a horizontal line?**  
   - a) `<line>`  
   - b) `<hr>` ✅  
   - c) `<hl>`  
   - d) `<border>`

88. **Which attribute specifies where to open the linked document?**  
   - a) `open`  
   - b) `location`  
   - c) `target` ✅  
   - d) `href-target`

89. **Which tag represents a container for external resources like scripts and styles?**  
   - a) `<import>`  
   - b) `<resource>`  
   - c) `<link>` ✅  
   - d) `<include>`

90. **What does the `<wbr>` tag do?**  
   - a) Inserts white space  
   - b) Breaks text formatting  
   - c) Suggests a line break opportunity ✅  
   - d) Wraps bold text

91. **Which tag defines emphasized text (usually italic)?**  
   - a) `<strong>`  
   - b) `<b>`  
   - c) `<i>`  
   - d) `<em>` ✅

92. **What does the `draggable` attribute do?**  
   - a) Makes an element resizable  
   - b) Makes an element clickable  
   - c) Allows the element to be dragged ✅  
   - d) Prevents dragging

93. **What is the default method used in form submission?**  
   - a) POST  
   - b) PUT  
   - c) GET ✅  
   - d) DELETE

94. **What does the `rel="noopener"` attribute prevent?**  
   - a) Redirection  
   - b) Performance issues  
   - c) Access to the `window.opener` object ✅  
   - d) Image loading

95. **Which tag is not supported in HTML5?**  
   - a) `<big>` ✅  
   - b) `<small>`  
   - c) `<strong>`  
   - d) `<aside>`

96. **Which element allows video captions in multiple languages?**  
   - a) `<caption>`  
   - b) `<subtitle>`  
   - c) `<track>` ✅  
   - d) `<lang>`

97. **Which HTML feature improves screen reader support?**  
   - a) ARIA attributes ✅  
   - b) Meta tags  
   - c) Inline styles  
   - d) Viewport scaling

98. **Which HTML tag specifies inline code?**  
   - a) `<script>`  
   - b) `<code>` ✅  
   - c) `<cmd>`  
   - d) `<kbd>`

99. **Which tag would you use for a multiline text input?**  
   - a) `<input type="text">`  
   - b) `<input type="textarea">`  
   - c) `<textarea>` ✅  
   - d) `<multitext>`

100. **Which input type lets users pick a date and time?**  
   - a) `type="datetime"`  
   - b) `type="datetime-local"` ✅  
   - c) `type="timestamp"`  
   - d) `type="calendar"`
