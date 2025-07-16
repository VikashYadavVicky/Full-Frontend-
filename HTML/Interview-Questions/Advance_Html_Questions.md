## 🚀 Advanced HTML Q&A (1–20)

1. **What are Web Components in HTML?**  
   - **Answer:** Web Components are a set of standardized APIs that allow developers to create reusable, encapsulated HTML elements. They include Custom Elements, Shadow DOM, HTML Templates, and HTML Imports (deprecated).

2. **Explain the Shadow DOM and its use cases.**  
   - **Answer:** Shadow DOM provides encapsulation for HTML elements and their styles. It keeps a component’s structure and style separate from the rest of the document to prevent style leakage and conflicts.

3. **What is the difference between Light DOM and Shadow DOM?**  
   - **Answer:** Light DOM refers to the regular DOM structure, while Shadow DOM is an isolated subtree attached to an element, hidden from the main document's DOM.

4. **How do you create a custom HTML element?**  
   - **Answer:** Use the `customElements.define()` method with a class that extends `HTMLElement`. Example:  
     ```javascript
     class MyElement extends HTMLElement { ... }
     customElements.define('my-element', MyElement);
     ```

5. **What is a slot in Web Components?**  
   - **Answer:** A `<slot>` tag is a placeholder inside a Web Component’s shadow DOM where external (light DOM) content can be projected.

6. **What are ARIA landmarks and why are they important?**  
   - **Answer:** ARIA landmarks (e.g., `role="banner"`, `role="main"`, `role="navigation"`) help screen readers understand the page layout, improving accessibility.

7. **Explain the difference between synchronous and asynchronous script loading.**  
   - **Answer:**  
     - Synchronous (`<script>`): blocks rendering until the script loads.  
     - Asynchronous (`<script async>`): loads script independently.  
     - Deferred (`<script defer>`): loads in order after HTML parsing.

8. **What are microdata and why are they used?**  
   - **Answer:** Microdata is a way to embed metadata within HTML using attributes like `itemscope`, `itemprop`, and `itemtype`. It's used to enhance SEO and provide richer search results.

9. **How can you optimize HTML for performance?**  
   - **Answer:**  
     - Minify HTML  
     - Use semantic tags  
     - Defer or async scripts  
     - Preload key assets  
     - Compress images  
     - Use CDN

10. **What are data-* attributes in HTML?**  
    - **Answer:** Custom attributes that store private data for JavaScript use, prefixed with `data-`. Example: `<div data-user-id="123">`.

11. **How do you make a form accessible to screen readers?**  
    - **Answer:**  
        - Use `<label>` with `for` attributes  
        - Provide meaningful `alt`, `aria-label`, or `aria-labelledby`  
        - Use semantic structure and roles

12. **What’s the purpose of `aria-hidden="true"`?**  
    - **Answer:** It hides elements from screen readers without affecting visual layout.

13. **What are inert elements in HTML?**  
    - **Answer:** An inert element (via `inert` attribute or JavaScript API) is made non-interactive and hidden from assistive technologies.

14. **How can HTML be used in Progressive Web Apps (PWAs)?**  
    - **Answer:** HTML forms the base structure. Service workers, manifests, and caching APIs enhance it to work offline and provide app-like experiences.

15. **What’s the use of `<dialog>` and how do you open it?**  
    - **Answer:** `<dialog>` creates modal/pop-up dialogs. Use `dialog.show()` or `dialog.showModal()` via JavaScript to display it.

16. **Explain the use of `srcdoc` in `<iframe>`.**  
    - **Answer:** The `srcdoc` attribute lets you specify HTML content directly inside the `<iframe>`, instead of linking to an external file.

17. **What’s the difference between `<style scoped>` and global `<style>`?**  
    - **Answer:** `<style scoped>` (deprecated) was meant to apply styles only to the parent element. Regular `<style>` applies globally unless scoped via Shadow DOM or frameworks.

18. **What is the Accesskey attribute used for?**  
    - **Answer:** It assigns a keyboard shortcut to an element, improving keyboard accessibility. Example: `accesskey="h"`.

19. **What does the `<meta http-equiv="refresh">` tag do?**  
    - **Answer:** It refreshes the page or redirects after a given number of seconds. Example:  
      ```html
      <meta http-equiv="refresh" content="5;url=https://example.com">
      ```

20. **What’s the difference between `rel="stylesheet"` and `rel="preload"` in `<link>`?**  
    - **Answer:**  
        - `stylesheet` loads and applies CSS  
        - `preload` loads the resource early without applying it until needed

## 🚀 Advanced HTML Q&A (21–40)

21. **How does the `<meta charset="UTF-8">` tag affect the document?**  
   - **Answer:** It defines the character encoding for the HTML document, ensuring that special characters (like emojis, non-English alphabets) display correctly.

22. **What is the purpose of the `<base>` tag in HTML?**  
   - **Answer:** It sets a base URL for all relative URLs in a document. For example, `<base href="https://example.com/">` makes `/about` resolve to `https://example.com/about`.

23. **What is a document outline in HTML and why is it important?**  
   - **Answer:** The document outline is a hierarchical structure formed by headings (`<h1>` to `<h6>`) and sectioning elements (`<section>`, `<article>`, etc.). It improves SEO and accessibility.

24. **Explain how to use the `hidden` attribute effectively.**  
   - **Answer:** The `hidden` attribute hides an element from the document visually and from screen readers. Use it when content shouldn't be available in any context unless made visible via JavaScript.

25. **What’s the difference between `visibility: hidden` and `hidden` attribute?**  
   - **Answer:**  
     - `visibility: hidden`: Hides visually but still occupies space  
     - `hidden` attribute: Hides completely, no space reserved

26. **What is the `itemtype` attribute used for in microdata?**  
   - **Answer:** It specifies the schema type of the item using a URL (e.g., schema.org). It tells search engines what kind of object the item represents.

27. **How can the `rel` attribute affect SEO and link behavior?**  
   - **Answer:**  
     - `rel="nofollow"` tells search engines not to follow the link  
     - `rel="noopener"` prevents `window.opener` access (security)  
     - Other values (e.g., `canonical`, `alternate`) affect indexing

28. **What is the use of the `form` attribute on input elements?**  
   - **Answer:** It allows form controls to be associated with a `<form>` even if they are not inside the form element.

29. **How does the `inputmode` attribute enhance usability?**  
   - **Answer:** It hints the expected type of input, prompting appropriate virtual keyboard layouts on mobile devices (e.g., numeric, email, etc.).

30. **What is the use of the `is` attribute in HTML?**  
   - **Answer:** It’s used in custom built-in elements (e.g., `<button is="fancy-button">`) to extend native HTML elements in Web Components.

31. **How do scoped styles work inside a Web Component?**  
   - **Answer:** Styles inside a component's shadow DOM apply only within that component and don't leak to the global DOM.

32. **What is a `nonce` attribute in a `<script>` or `<style>` tag?**  
   - **Answer:** It's a cryptographic token used in Content Security Policy (CSP) to whitelist inline scripts/styles for secure execution.

33. **How can you preload fonts in HTML?**  
   - **Answer:** Use the `<link>` tag:  
     ```html
     <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin="anonymous">
     ```

34. **What is the difference between `<noscript>` and `type="module"` fallback?**  
   - **Answer:** `<noscript>` provides fallback for users with JavaScript disabled. `type="module"` can fall back to classic scripts using `<script nomodule>`.

35. **How does the `aria-live` attribute help dynamic content?**  
   - **Answer:** It notifies screen readers of dynamic changes (e.g., live announcements, chat updates) without needing user focus.

36. **What is progressive enhancement and how is it applied in HTML?**  
   - **Answer:** It is a strategy where basic content is provided with HTML, and enhancements like JS or CSS are layered on top for capable browsers.

37. **How can you use media queries in HTML (not CSS)?**  
   - **Answer:** You can use them in `<link>` and `<style>` tags. Example:  
     ```html
     <link rel="stylesheet" media="(max-width: 600px)" href="mobile.css">
     ```

38. **What is a `data-*` attribute and how is it accessed in JavaScript?**  
   - **Answer:** It stores custom data on elements. Accessed using `element.dataset.name`.  
     Example:  
     ```html
     <div data-user-id="42"></div>  
     document.querySelector('div').dataset.userId;
     ```

39. **What is the `integrity` attribute used for in `<script>` or `<link>`?**  
   - **Answer:** It ensures the resource hasn’t been tampered with by verifying its hash. It enhances security via Subresource Integrity (SRI).

40. **How does the `fetchpriority` attribute improve performance?**  
   - **Answer:** It allows control over the loading priority of resources (e.g., `fetchpriority="high"` for above-the-fold images).

## 🚀 Advanced HTML Q&A (41–60)

41. **What is the difference between `<b>` and `<strong>` in HTML5?**  
   - **Answer:** `<b>` is used for stylistic bold text without semantic meaning, while `<strong>` indicates importance and has semantic value, helping accessibility tools.

42. **How does the `<template>` element function?**  
   - **Answer:** `<template>` defines reusable HTML that is not rendered immediately. It is accessed and rendered dynamically via JavaScript.

43. **What’s the purpose of `srcset` and `sizes` attributes in `<img>`?**  
   - **Answer:** `srcset` provides multiple image sources for different screen resolutions, and `sizes` tells the browser what image size to select based on viewport conditions.

44. **How does the browser choose which image from `srcset` to load?**  
   - **Answer:** Based on the device’s screen width, resolution (DPR), and the value of the `sizes` attribute to pick the most appropriate image.

45. **What is the benefit of the `<picture>` element?**  
   - **Answer:** It allows multiple image sources with different formats or media queries, giving developers full control over responsive images.

46. **How does the `<slot>` element help in Web Components?**  
   - **Answer:** `<slot>` is a placeholder in the shadow DOM that enables projection of light DOM content into the Web Component.

47. **What’s the purpose of `aria-labelledby`?**  
   - **Answer:** It connects elements to labels using `id` references, improving accessibility by giving screen readers a meaningful label.

48. **How can you make a component keyboard accessible?**  
   - **Answer:** Use `tabindex`, appropriate ARIA roles, and handle `keydown` events for interactions like Enter and Space.

49. **What are inert elements and how are they different from `aria-hidden`?**  
   - **Answer:** Inert elements are completely removed from focus and accessibility trees, while `aria-hidden="true"` only hides them from assistive tech.

50. **What are custom data attributes used for?**  
   - **Answer:** To embed additional data in elements (`data-*`) that JavaScript can access via `dataset`, useful for dynamic functionality without polluting global scope.

51. **What’s the role of `role="presentation"` or `role="none"`?**  
   - **Answer:** These roles remove the semantic meaning of an element for screen readers, useful for layout-only elements like tables used for styling.

52. **How does HTML5 handle document outlines compared to HTML4?**  
   - **Answer:** HTML5 introduces sectioning elements (`<section>`, `<article>`, etc.) that affect document outline independently, but browser support for automated outlines is inconsistent.

53. **What’s the use of `tabindex="-1"`?**  
   - **Answer:** Makes an element focusable via JavaScript but excludes it from sequential tab navigation.

54. **What’s the function of the `<output>` tag?**  
   - **Answer:** Displays the result of calculations or user interactions, often used in forms or scripts.

55. **How is the `<progress>` element different from `<meter>`?**  
   - **Answer:**  
     - `<progress>`: Shows task progress (e.g. loading bar)  
     - `<meter>`: Represents a scalar measurement within a range (e.g. disk usage)

56. **How do semantic elements improve SEO?**  
   - **Answer:** They provide meaningful structure that search engines can parse more accurately, enhancing visibility and relevance in search results.

57. **What are some HTML practices to improve performance and UX on mobile devices?**  
   - **Answer:**  
     - Use responsive design with `<meta name="viewport">`  
     - Lazy load images  
     - Minify HTML  
     - Optimize tap targets  
     - Preconnect and preload resources

58. **How can you make a modal dialog accessible?**  
   - **Answer:**  
     - Use `<dialog>` or `aria-modal="true"`  
     - Trap focus inside the modal  
     - Use `aria-labelledby` and `aria-describedby`  
     - Return focus to the trigger on close

59. **What is the `enterkeyhint` attribute and where is it used?**  
   - **Answer:** It hints the label for the virtual keyboard enter key on mobile (e.g., `"send"`, `"search"`). Used in inputs and textareas.

60. **How does the `<mark>` element benefit accessibility and UX?**  
   - **Answer:** It highlights text, often for search matches. It has semantic meaning and can be styled for high visibility without breaking structure.

## 🚀 Advanced HTML Q&A (61–80)

61. **What’s the difference between `<canvas>` and `<svg>` for graphics?**  
   - **Answer:**  
     - `<canvas>`: Pixel-based, ideal for real-time rendering (e.g., games).  
     - `<svg>`: Vector-based, better for static images, scales without loss of quality.

62. **How does the `aria-expanded` attribute work?**  
   - **Answer:** It indicates whether an element (e.g., a dropdown) is expanded or collapsed, helping assistive technologies understand UI state.

63. **What’s the function of the `<details>` and `<summary>` tags?**  
   - **Answer:** `<details>` creates an expandable/collapsible panel, and `<summary>` is the visible label that toggles it.

64. **How is the `<label>` tag used with form controls?**  
   - **Answer:**  
     - Associates a text label with an input.  
     - Use `for="id"` to link or wrap the input directly.

65. **What’s the difference between `readonly` and `disabled` inputs?**  
   - **Answer:**  
     - `readonly`: User can’t change value, but it is submitted with form.  
     - `disabled`: User can’t interact, and value is not submitted.

66. **What are sectioning elements in HTML5?**  
   - **Answer:** Elements that define scope for headings: `<section>`, `<article>`, `<nav>`, `<aside>`, `<main>`. Each creates a new document outline.

67. **What is fallback content in HTML and when is it used?**  
   - **Answer:** Content that displays if a feature fails to load (e.g., within `<object>`, `<video>`, `<canvas>`).

68. **How does `<meta name="viewport">` affect mobile display?**  
   - **Answer:** It controls the layout on mobile. Example:  
     ```html
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     ```

69. **What is the purpose of the `spellcheck` attribute?**  
   - **Answer:** Enables or disables spellchecking in text fields (`spellcheck="true"` or `"false"`).

70. **How is the `<nav>` element different from a generic `<div>`?**  
   - **Answer:** `<nav>` is semantic and indicates a group of navigation links, enhancing SEO and accessibility.

71. **What is the purpose of the `<address>` element?**  
   - **Answer:** Represents contact information for its nearest `<article>` or document. Often used in footers.

72. **What does the `<cite>` tag represent semantically?**  
   - **Answer:** A reference to a creative work (book, website, article), not just italic text.

73. **What is the purpose of `aria-controls`?**  
   - **Answer:** Indicates that an element controls the content of another element, useful for UI relationships (e.g., toggle buttons).

74. **What’s the use of `aria-describedby`?**  
   - **Answer:** Associates an element with an additional description, read by screen readers, often used for form help text.

75. **How does HTML handle directional text (e.g., for Arabic)?**  
   - **Answer:** Use the `dir` attribute (`ltr` or `rtl`) on `<html>` or individual elements.

76. **What’s the difference between `type="button"` and `type="submit"`?**  
   - **Answer:**  
     - `submit`: Submits the form  
     - `button`: Just a button (no default behavior)

77. **What does `autocomplete="off"` do in a form?**  
   - **Answer:** Prevents the browser from suggesting previously entered values.

78. **How do you embed fallback text inside a `<canvas>` element?**  
   - **Answer:** Place text directly between the `<canvas>` tags. It will display if canvas is not supported.

79. **What is the purpose of the `formnovalidate` attribute?**  
   - **Answer:** Used on submit buttons to skip form validation when clicked.

80. **How does the `<abbr>` tag improve semantics?**  
   - **Answer:** Defines abbreviations and can include a `title` attribute for the full form, improving clarity and accessibility.


## 🚀 Advanced HTML Q&A (81–100)

81. **What does `aria-busy="true"` signify?**  
   - **Answer:** It tells assistive technologies that an element is currently being updated and its content may change soon.

82. **How can the `role="alert"` attribute improve accessibility?**  
   - **Answer:** It notifies screen readers immediately when content changes, used for important messages like form errors.

83. **What is the difference between `<kbd>`, `<code>`, and `<samp>`?**  
   - **Answer:**  
     - `<kbd>`: User input  
     - `<code>`: Code snippet  
     - `<samp>`: Output from a program

84. **What is the function of the `translate` attribute in HTML?**  
   - **Answer:** Indicates whether the content of an element should be translated by translation tools (e.g., `translate="no"`).

85. **What is the `lang` attribute used for?**  
   - **Answer:** Specifies the language of the element’s content, aiding search engines and screen readers. Example: `lang="fr"` for French.

86. **What is the significance of using semantic HTML?**  
   - **Answer:** It enhances SEO, improves accessibility, helps developers understand structure, and enables better browser behavior.

87. **How can you make a form field required without JavaScript?**  
   - **Answer:** Use the `required` attribute. Example:  
     ```html
     <input type="text" required>
     ```

88. **What’s the difference between `aria-label` and `aria-labelledby`?**  
   - **Answer:**  
     - `aria-label`: Directly defines a string as label  
     - `aria-labelledby`: Refers to another element’s content as label

89. **How do `<section>` and `<div>` differ semantically?**  
   - **Answer:** `<section>` is a meaningful block of related content with a heading, while `<div>` is a generic container with no semantics.

90. **What is a “polyfill” in the context of HTML/JS?**  
   - **Answer:** A script that emulates newer HTML/JS features in older browsers that don’t support them natively.

91. **What does `contenteditable="true"` do?**  
   - **Answer:** Makes any HTML element editable by the user directly in the browser.

92. **What’s the purpose of the `<time>` tag?**  
   - **Answer:** Represents a specific date/time. Helps with machine readability and can be used by calendars and search engines.

93. **How can you use the `<data>` tag in HTML?**  
   - **Answer:** Associates a machine-readable value with a human-readable element. Example:  
     ```html
     <data value="12345">Product ID</data>
     ```

94. **What is `tabindex="0"` used for?**  
   - **Answer:** Makes an element focusable in the normal tab order.

95. **What are `accesskey` limitations?**  
   - **Answer:** Keyboard shortcuts may conflict with OS/browser shortcuts and have inconsistent behavior across devices.

96. **What is the purpose of `<output>` in forms?**  
   - **Answer:** Displays calculated results based on user input, such as through JavaScript.

97. **How can `rel="canonical"` improve SEO?**  
   - **Answer:** Specifies the preferred version of a page, preventing duplicate content indexing by search engines.

98. **How can you make a `<video>` auto-play silently on page load?**  
   - **Answer:** Use the attributes:  
     ```html
     <video autoplay muted playsinline>
     ```

99. **What is the purpose of the `defer` attribute in `<script>`?**  
   - **Answer:** It loads the script in the background and executes it after the document has been parsed.

100. **How can you lazy load images in HTML?**  
   - **Answer:** Use the `loading="lazy"` attribute in `<img>` tags.  
     ```html
     <img src="image.jpg" loading="lazy" alt="description">
     ```


## 🎯 Advanced HTML MCQs (1–20)

1. **Which element provides a way to create your own HTML tags?**  
   - a) `<custom>`  
   - b) `<my-element>`  
   - c) Web Components ✅  
   - d) `<define>`

2. **What does the Shadow DOM primarily offer?**  
   - a) Styling support  
   - b) Performance improvement  
   - c) Encapsulation ✅  
   - d) Accessibility

3. **Which tag defines reusable, inert chunks of HTML?**  
   - a) `<script>`  
   - b) `<template>` ✅  
   - c) `<shadow>`  
   - d) `<fragment>`

4. **Which attribute is used to specify cryptographic verification for a script?**  
   - a) `nonce`  
   - b) `hash`  
   - c) `integrity` ✅  
   - d) `secure`

5. **Which tag allows embedding HTML directly in an `<iframe>`?**  
   - a) `src`  
   - b) `srcdoc` ✅  
   - c) `innerhtml`  
   - d) `frame-html`

6. **What does `aria-hidden="true"` do?**  
   - a) Visually hides the element  
   - b) Removes element from accessibility tree ✅  
   - c) Disables the element  
   - d) Makes content bold

7. **Which tag defines a modal dialog box in HTML5?**  
   - a) `<popup>`  
   - b) `<dialog>` ✅  
   - c) `<modal>`  
   - d) `<div modal>`

8. **What does the `<picture>` element allow?**  
   - a) Animations  
   - b) Responsive image switching ✅  
   - c) Background settings  
   - d) Embedding videos

9. **Which is not a valid ARIA landmark?**  
   - a) `role="banner"`  
   - b) `role="footer"` ❌  
   - c) `role="main"`  
   - d) `role="navigation"`

10. **Which HTML feature helps improve load performance by delaying image loading?**  
    - a) `data-src`  
    - b) `loading="lazy"` ✅  
    - c) `defer`  
    - d) `delay`

11. **What is the purpose of the `fetchpriority` attribute?**  
    - a) Sets script load order  
    - b) Controls request priority ✅  
    - c) Avoids DNS lookups  
    - d) Batches AJAX calls

12. **Which input type is ideal for entering a month and year only?**  
    - a) `type="date"`  
    - b) `type="month"` ✅  
    - c) `type="time"`  
    - d) `type="calendar"`

13. **Which tag would you use to represent machine-readable content?**  
    - a) `<meta>`  
    - b) `<object>`  
    - c) `<data>` ✅  
    - d) `<mark>`

14. **Which ARIA role defines an element that triggers expandable content?**  
    - a) `role="toggle"`  
    - b) `role="controller"`  
    - c) `aria-expanded`  
    - d) `button` ✅

15. **Which tag is used to specify fallback content inside `<canvas>`?**  
    - a) `<fallback>`  
    - b) `<text>`  
    - c) Plain text ✅  
    - d) `<caption>`

16. **Which attribute hints what kind of keyboard to display on mobile?**  
    - a) `inputmode` ✅  
    - b) `keyboard`  
    - c) `type`  
    - d) `mobiletype`

17. **Which HTML element is best for creating a command output display?**  
    - a) `<kbd>`  
    - b) `<samp>` ✅  
    - c) `<code>`  
    - d) `<pre>`

18. **Which is a valid custom element name?**  
    - a) `<custom>`  
    - b) `<usercard>`  
    - c) `<my-element>` ✅  
    - d) `<customelement>`

19. **What is the effect of `contenteditable="true"`?**  
    - a) Makes an element hidden  
    - b) Allows inline editing ✅  
    - c) Locks content  
    - d) Enables accessibility

20. **Which element lets you project light DOM into Shadow DOM?**  
    - a) `<inject>`  
    - b) `<content>`  
    - c) `<slot>` ✅  
    - d) `<project>`

## 🎯 Advanced HTML MCQs (21–40)

21. **Which attribute allows you to skip built-in validation on form submission?**  
   - a) `novalidate`  
   - b) `validate="false"`  
   - c) `formnovalidate` ✅  
   - d) `skipvalidate`

22. **Which tag provides a visual gauge of a task’s progress?**  
   - a) `<range>`  
   - b) `<progress>` ✅  
   - c) `<meter>`  
   - d) `<status>`

23. **Which tag represents a scalar value within a known range?**  
   - a) `<progress>`  
   - b) `<range>`  
   - c) `<meter>` ✅  
   - d) `<scale>`

24. **Which attribute improves the experience for users of screen readers by describing an element?**  
   - a) `aria-label`  
   - b) `aria-description`  
   - c) `aria-describedby` ✅  
   - d) `aria-notify`

25. **Which HTML element provides a summary line for a collapsible section?**  
   - a) `<legend>`  
   - b) `<summary>` ✅  
   - c) `<title>`  
   - d) `<label>`

26. **Which element is recommended for marking contact information?**  
   - a) `<footer>`  
   - b) `<cite>`  
   - c) `<address>` ✅  
   - d) `<contact>`

27. **What does the `type="module"` attribute in `<script>` do?**  
   - a) Adds dynamic imports  
   - b) Enables JS modules with `import/export` ✅  
   - c) Defers all scripts  
   - d) Creates global scope

28. **Which attribute is used with `<link>` to improve performance of font loading?**  
   - a) `rel="stylesheet"`  
   - b) `rel="font"`  
   - c) `rel="preload"` ✅  
   - d) `rel="import"`

29. **Which attribute is used to prevent external pages from accessing `window.opener`?**  
   - a) `rel="nofollow"`  
   - b) `rel="noopener"` ✅  
   - c) `rel="external"`  
   - d) `rel="noopener noreferrer"`

30. **Which input type should you use to let users pick both date and time?**  
   - a) `type="datetime"`  
   - b) `type="datetime-local"` ✅  
   - c) `type="date"`  
   - d) `type="timestamp"`

31. **Which attribute determines if a user can interact with an element?**  
   - a) `interactable`  
   - b) `focusable`  
   - c) `disabled` ✅  
   - d) `deactivated`

32. **Which HTML5 element groups navigation links semantically?**  
   - a) `<nav>` ✅  
   - b) `<ul>`  
   - c) `<aside>`  
   - d) `<main>`

33. **What does `role="dialog"` communicate to assistive technology?**  
   - a) This is a heading  
   - b) This is an interactive button  
   - c) This is a modal or popup window ✅  
   - d) This is a new page

34. **What does the `<track>` tag provide in a `<video>`?**  
   - a) Playlists  
   - b) Subtitles and captions ✅  
   - c) Audio streams  
   - d) Poster images

35. **What does `aria-live="polite"` do?**  
   - a) Silently announces changes  
   - b) Announces changes when user is idle ✅  
   - c) Requires screen reader toggle  
   - d) Disables live updates

36. **Which tag helps define the document outline in HTML5?**  
   - a) `<div>`  
   - b) `<section>` ✅  
   - c) `<b>`  
   - d) `<span>`

37. **What’s the best tag to use for quoting an entire paragraph?**  
   - a) `<q>`  
   - b) `<quote>`  
   - c) `<blockquote>` ✅  
   - d) `<cite>`

38. **What is `tabindex="-1"` commonly used for?**  
   - a) Remove element from DOM  
   - b) Hide element  
   - c) Allow programmatic focus but exclude from tab order ✅  
   - d) Lock keyboard input

39. **Which HTML feature is now deprecated in HTML5?**  
   - a) `<section>`  
   - b) `<b>`  
   - c) `<font>` ✅  
   - d) `<code>`

40. **Which HTML element allows content editing by the user in-browser?**  
   - a) `<input type="edit">`  
   - b) `<edit>`  
   - c) Any element with `contenteditable="true"` ✅  
   - d) `<texteditor>`

## 🎯 Advanced HTML MCQs (41–60)

41. **Which tag allows you to defer execution until after the page has parsed?**  
   - a) `<script async>`  
   - b) `<script nowait>`  
   - c) `<script defer>` ✅  
   - d) `<script loadlater>`

42. **Which attribute provides alternative text for images?**  
   - a) `text`  
   - b) `description`  
   - c) `alt` ✅  
   - d) `title`

43. **Which HTML element is used for text direction overrides?**  
   - a) `<dir>`  
   - b) `<bdo>` ✅  
   - c) `<direction>`  
   - d) `<textdir>`

44. **Which tag is used to display the result of a calculation?**  
   - a) `<result>`  
   - b) `<output>` ✅  
   - c) `<value>`  
   - d) `<eval>`

45. **Which input type helps users pick a numeric value in a range with a slider?**  
   - a) `type="range"` ✅  
   - b) `type="number"`  
   - c) `type="scale"`  
   - d) `type="scroll"`

46. **What does `role="status"` signify?**  
   - a) Static information  
   - b) Important notification that updates politely ✅  
   - c) Button status  
   - d) Screen title

47. **Which element is used to indicate sample output from a program?**  
   - a) `<kbd>`  
   - b) `<samp>` ✅  
   - c) `<code>`  
   - d) `<out>`

48. **What’s the purpose of `lang` attribute in HTML?**  
   - a) It localizes the browser window  
   - b) It sets the language for translation tools ✅  
   - c) It defines a new character set  
   - d) It disables scripts

49. **What attribute do you use for associating a label with a form control?**  
   - a) `for` ✅  
   - b) `target`  
   - c) `value`  
   - d) `labelledby`

50. **Which HTML element is used to enclose an external application?**  
   - a) `<iframe>` ✅  
   - b) `<embed>`  
   - c) `<object>`  
   - d) `<container>`

51. **Which tag provides a container for SVG graphics?**  
   - a) `<img>`  
   - b) `<vector>`  
   - c) `<svg>` ✅  
   - d) `<canvas>`

52. **Which tag supports semantic emphasis without changing appearance?**  
   - a) `<em>` ✅  
   - b) `<b>`  
   - c) `<strong>`  
   - d) `<span>`

53. **What does `rel="canonical"` help prevent?**  
   - a) Page reloads  
   - b) Duplicate content indexing ✅  
   - c) Phishing  
   - d) CSS conflicts

54. **Which attribute lets a text field suggest known input values?**  
   - a) `placeholder`  
   - b) `default`  
   - c) `list` ✅  
   - d) `hint`

55. **What does `<wbr>` tag do?**  
   - a) Adds word wrapping  
   - b) Forces a space  
   - c) Suggests optional line break ✅  
   - d) Embeds a web resource

56. **Which HTML tag lets you specify a legal contact or author?**  
   - a) `<info>`  
   - b) `<author>`  
   - c) `<contact>`  
   - d) `<address>` ✅

57. **What does `<noscript>` do?**  
   - a) Skips scripting logic  
   - b) Provides fallback for no JavaScript ✅  
   - c) Disables all scripts  
   - d) None of the above

58. **What does `draggable="true"` do to an HTML element?**  
   - a) Makes it resizable  
   - b) Enables dragging with the mouse ✅  
   - c) Freezes it  
   - d) Centers it

59. **Which attribute enables browsers to treat a form control as part of a specific form?**  
   - a) `for`  
   - b) `action`  
   - c) `form` ✅  
   - d) `target`

60. **Which HTML tag groups elements that share a common theme in forms?**  
   - a) `<fieldset>` ✅  
   - b) `<group>`  
   - c) `<section>`  
   - d) `<theme>`

## 🎯 Advanced HTML MCQs (61–100)

61. **Which attribute helps enforce security by restricting script origins?**  
   - a) `secure`  
   - b) `referrerpolicy`  
   - c) `crossorigin` ✅  
   - d) `referrer`

62. **Which tag defines a machine-readable date/time value?**  
   - a) `<time>` ✅  
   - b) `<date>`  
   - c) `<datetime>`  
   - d) `<calendar>`

63. **What does the `novalidate` attribute do?**  
   - a) Skips form submission  
   - b) Turns off browser’s form validation ✅  
   - c) Disables required fields  
   - d) Prevents focus

64. **What’s the purpose of the `<legend>` tag?**  
   - a) Describes a section  
   - b) Labels grouped form elements ✅  
   - c) Adds a title  
   - d) Provides tooltips

65. **Which HTML tag is used to insert text that is no longer accurate?**  
   - a) `<removed>`  
   - b) `<old>`  
   - c) `<del>` ✅  
   - d) `<past>`

66. **Which attribute makes an element unavailable to all users?**  
   - a) `disabled` ✅  
   - b) `readonly`  
   - c) `hidden`  
   - d) `invisible`

67. **Which HTML tag represents keyboard input?**  
   - a) `<kbd>` ✅  
   - b) `<key>`  
   - c) `<input>`  
   - d) `<code>`

68. **What does `<mark>` tag do?**  
   - a) Emphasizes bold text  
   - b) Strikes text  
   - c) Highlights text ✅  
   - d) Quotes text

69. **What does the `hidden` attribute do?**  
   - a) Renders text as a comment  
   - b) Hides the element from all devices ✅  
   - c) Encrypts content  
   - d) Fades the element

70. **What does the `<summary>` element do inside `<details>`?**  
   - a) Adds a title  
   - b) Acts as a toggle label ✅  
   - c) Shows tooltips  
   - d) Defines section heading

71. **What is the purpose of the `sandbox` attribute on `<iframe>`?**  
   - a) Optimizes speed  
   - b) Enables offline access  
   - c) Restricts iframe behavior for security ✅  
   - d) Scales content

72. **Which HTML attribute disables right-click menu on an element?**  
   - a) `norightclick`  
   - b) Requires JavaScript ✅  
   - c) `contextmenu="false"`  
   - d) `disabledcontext`

73. **Which input type lets users choose a file to upload?**  
   - a) `type="upload"`  
   - b) `type="file"` ✅  
   - c) `type="browse"`  
   - d) `type="submit"`

74. **Which attribute improves accessibility by announcing changes immediately?**  
   - a) `aria-role`  
   - b) `aria-live="assertive"` ✅  
   - c) `aria-hidden`  
   - d) `aria-label="alert"`

75. **What does the `<object>` tag do?**  
   - a) Embeds custom objects  
   - b) Embeds multimedia files  
   - c) Embeds external resources like PDFs or Flash ✅  
   - d) Defines inline scripts

76. **Which tag would you use for external subtitles in a `<video>`?**  
   - a) `<sub>`  
   - b) `<track>` ✅  
   - c) `<source>`  
   - d) `<text>`

77. **What attribute ensures only trusted inline scripts/styles execute under CSP?**  
   - a) `nonce` ✅  
   - b) `secure`  
   - c) `hash`  
   - d) `trusted`

78. **Which element is used to semantically group standalone content?**  
   - a) `<div>`  
   - b) `<section>`  
   - c) `<article>` ✅  
   - d) `<aside>`

79. **What is `autofocus` used for in form inputs?**  
   - a) Focuses on tab  
   - b) Highlights element  
   - c) Automatically focuses input on page load ✅  
   - d) Enables zoom

80. **Which element indicates tangential or side content?**  
   - a) `<section>`  
   - b) `<aside>` ✅  
   - c) `<div>`  
   - d) `<extra>`

81. **Which HTML tag provides machine-readable metadata in the head?**  
   - a) `<info>`  
   - b) `<meta>` ✅  
   - c) `<data>`  
   - d) `<link>`

82. **Which element is typically used for advertisements or sponsorships?**  
   - a) `<aside>` ✅  
   - b) `<div>`  
   - c) `<sponsor>`  
   - d) `<ad>`

83. **What is the correct element for scalable 2D graphics in HTML?**  
   - a) `<svg>` ✅  
   - b) `<canvas>`  
   - c) `<gfx>`  
   - d) `<vector>`

84. **What’s the best tag for a logo in the header?**  
   - a) `<img>` inside `<header>` ✅  
   - b) `<title>`  
   - c) `<figure>`  
   - d) `<meta>`

85. **What is the default character encoding in HTML5?**  
   - a) ISO-8859-1  
   - b) UTF-8 ✅  
   - c) ASCII  
   - d) Unicode-16

86. **What does `role="presentation"` do?**  
   - a) Adds tooltip  
   - b) Hides from screen readers ✅  
   - c) Animates the element  
   - d) Sets opacity

87. **Which HTML5 attribute tells the browser a script should run only on first visit?**  
   - a) No such attribute ✅  
   - b) `sessiononly`  
   - c) `once`  
   - d) `memory="single"`

88. **Which is a semantic container for primary page content?**  
   - a) `<body>`  
   - b) `<section>`  
   - c) `<main>` ✅  
   - d) `<article>`

89. **Which attribute lets a form field accept multiple files?**  
   - a) `files`  
   - b) `multiple` ✅  
   - c) `many`  
   - d) `select-all`

90. **What does the `pattern` attribute enforce on inputs?**  
   - a) Display style  
   - b) Text casing  
   - c) Regex validation ✅  
   - d) Keyboard layout

91. **Which input type is used for secret characters?**  
   - a) `type="text"`  
   - b) `type="hidden"`  
   - c) `type="password"` ✅  
   - d) `type="secure"`

92. **Which element is not recommended in modern HTML5?**  
   - a) `<span>`  
   - b) `<font>` ✅  
   - c) `<strong>`  
   - d) `<code>`

93. **What is the function of `autocomplete` attribute?**  
   - a) Validates data  
   - b) Fills user values based on history ✅  
   - c) Adds JavaScript hints  
   - d) Prevents input

94. **What does the `<dl>` element define?**  
   - a) Dynamic list  
   - b) Description list ✅  
   - c) Data list  
   - d) Detail list

95. **Which tag indicates an important note?**  
   - a) `<strong>` ✅  
   - b) `<note>`  
   - c) `<b>`  
   - d) `<attention>`

96. **What does `dir="rtl"` do?**  
   - a) Hides the text  
   - b) Aligns text to the left  
   - c) Sets text direction right-to-left ✅  
   - d) Makes font italic

97. **Which attribute gives a field a tooltip text?**  
   - a) `label`  
   - b) `title` ✅  
   - c) `data-hint`  
   - d) `tooltip`

98. **What does `spellcheck="true"` do?**  
   - a) Disables typos  
   - b) Highlights spelling mistakes ✅  
   - c) Adds grammar  
   - d) Capitalizes words

99. **Which HTML5 API enables offline web applications?**  
   - a) Storage API  
   - b) Application Cache ✅  
   - c) Web Worker  
   - d) DOM Storage

100. **Which tag semantically identifies the bottom of a page?**  
   - a) `<bottom>`  
   - b) `<footer>` ✅  
   - c) `<section>`  
   - d) `<aside>`
