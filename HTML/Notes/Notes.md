w## 🧱 What is HTML?

- HTML stands for **HyperText Markup Language**.
- It is the **standard markup language** used to create the **structure** of web pages.
- HTML uses **tags** to define elements like headings, paragraphs, links, images, etc.
- It forms the **skeleton** of a webpage, while CSS and JavaScript handle design and behavior.
- All modern websites use HTML as the foundation.

### 🔗 What is HyperText?

- **HyperText** refers to **text that contains links** to other texts.
- It allows users to **navigate between pages** or sections by clicking on hyperlinks.
- The "Hyper" in HyperText means **non-linear** — users can jump from one part to another easily.
- In HTML, hypertext is created using the `<a>` (anchor) tag.
- Example:
  ```html
  <a href="https://example.com">Visit Example</a>

### 📝 What is Markup Language?

- A **markup language** is a way to **annotate content** so that computers and browsers can interpret and display it properly.
- It uses **tags** to define elements in a document (like headings, paragraphs, images, etc.).
- Markup Lang. it’s a way to give instructions to a computer about how content should be organized and displayed.
  ```html
  <p>This is a <strong>bold</strong> text.</p>

- Markup does **not perform logic or behavior** — it only defines the structure and presentation.
- Examples of markup languages include:
  - HTML (HyperText Markup Language)
  - XML (eXtensible Markup Language)
  - Markdown
- In HTML, tags look like:
  ```html
  <p>This is a paragraph.</p>

### 🔗 What is a Hyperlink?

- A **hyperlink** is a clickable element that **connects one web page to another** or jumps to a specific section within the same page.
- Hyperlinks are usually created using the `<a>` (anchor) tag in HTML.
- Users can click on a hyperlink to **navigate** to a new document, webpage, file, or even an email.
- Hyperlinks can point to:
  - External websites
  - Internal sections of the same page
  - Downloadable files
  - Email addresses (using `mailto:`)
- Example:
  ```html
  <a href="https://example.com">Visit Example</a>

### 🕰️ History of HTML

- **HTML was invented by Tim Berners-Lee** in **1991** while working at CERN.
- The goal was to create a way to **share and link documents** over the internet.
- The first version was very basic, supporting only simple text formatting and linking.
- Over time, HTML evolved to support images, forms, tables, multimedia, and APIs.

#### 📜 HTML Versions Timeline:

- **HTML 1.0 (1991)** – Basic text and links.
- **HTML 2.0 (1995)** – Standardized tags like forms, tables, and text formatting.
- **HTML 3.2 (1997)** – Introduced scripting, applets, and more formatting.
- **HTML 4.01 (1999)** – Improved structure and style separation (CSS introduced).
- **XHTML (2000)** – Stricter syntax based on XML.
- **HTML5 (2014 - present)** – Modern features like `<video>`, `<audio>`, `<canvas>`, and APIs for offline storage, geolocation, etc.

> HTML5 is the current standard and is still actively maintained and improved.

---
## 🔣 HTML Syntax

- HTML is made up of **elements** that are defined using **tags**.
- An HTML element usually has an **opening tag**, **content**, and a **closing tag**.

### 🔹 Basic Syntax

```html
  <tagname>Content goes here</tagname>
  <p>This is a paragraph.</p>
  
  🔹 Parts of an HTML Element
  Opening Tag – <p>
  
  Content – This is a paragraph.
  
  Closing Tag – </p>
```
🔗 **[View Practical Example](../Practical-Examples/syntax.html)**

---
## 📄 HTML File Extension

- HTML files are saved with the **`.html`** or **`.htm`** extension.
- Both `.html` and `.htm` work the same way in modern browsers.

### 🔹 Common Usage

- `.html` → Preferred and more commonly used today.
- `.htm` → Used in older Windows systems that had a 3-character file extension limit.

### 🔹 Example Filenames

- `index.html`
- `about.html`
- `contact.htm` (rare today)

> ✅ Always save your HTML files with a `.html` extension for compatibility and consistency.  
> 📌 The file name must be `index.html` because it is the **default entry point (homepage)** of a website.  
> 🌐 When a user visits a domain (e.g., `www.example.com`), the server automatically looks for `index.html` in the root directory to load the homepage.

> 💡 In older operating systems like **MS-DOS** and **Windows 3.1**, filenames were limited to 8 characters for the name and 3 for the extension (known as the **8.3 filename format**).  
> That’s why extensions like `.htm` were commonly used instead of `.html`.

### 🗂️ Examples of common 3-letter extensions from that era:

- `.EXE` – Executable file  
- `.TXT` – Text file  
- `.DOC` – Document  
- `.BAT` – Batch file  
- `.COM` – Command file  
- `.ZIP` – Compressed archive
---
## 🏗️ HTML Document / Structure

Every HTML file follows a standard structure that defines how the content is organized. Below is the **basic structure** of an HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a basic HTML page.</p>
</body>
</html>
```
### 🧩 Explanation of Each Part

#### `<!DOCTYPE html>`
- Declares the document type and version of HTML (HTML5 here).
- It helps browsers render the page correctly.

#### `<html lang="en">`
- The root element of the HTML page.
- The `lang` attribute specifies the language (English here).

#### `<head>`
- Contains **meta-information** about the document (not visible to users).
- Includes:
  - `<meta charset="UTF-8">` → Character encoding
  - `<meta name="viewport">` → Makes page responsive
  - `<title>` → Title shown in the browser tab
  - May also include: `<link>`, `<style>`, `<script>`, etc.

#### `<body>`
- All **visible content** of the webpage goes inside this tag.
- Includes elements like:
  - Headings (`<h1>` to `<h6>`)
  - Paragraphs (`<p>`)
  - Images, links, lists, forms, etc.
 
#### `<html lang="en">`

- The `lang` attribute specifies the **language of the element's content**.
- It helps screen readers, browsers, and search engines understand the page's language.
- You can change the value based on the desired language code.

#### 🔤 Language Code Examples:

```html
<html lang="en">   <!-- English -->
<html lang="hi">   <!-- Hindi -->
<html lang="ko">   <!-- Korean -->
<html lang="fr">   <!-- French -->
```


> 📌 Every HTML page **must have one** `<html>`, one `<head>`, and one `<body>` section to be valid and well-structured.<br>
🔗 **[View Practical Example](../Practical-Examples/html_structure.html)**
---
## 🔖 HTML Attributes

- **Attributes** are used along with HTML tags to define the **characteristics** or **properties** of an element.
- They provide **additional information** about how an element should behave or be displayed.
- Attributes are always specified in the **opening tag** and usually come in **name-value pairs**.

### 🔹 Syntax:

```html
<tagname attribute="value">Content</tagname>
```

### 🌍 Example: `lang` Attribute in `<html>`

```html
<html lang="en">
```

- The lang attribute specifies the language code for the content of the element.

- It helps browsers, screen readers, and search engines understand the primary language of the page.

- It improves accessibility and SEO.

```html
<html lang="en">   <!-- English -->
<html lang="hi">   <!-- Hindi -->
<html lang="ko">   <!-- Korean -->
<html lang="fr">   <!-- French -->
```
---
## 🏷️ HTML Tags

HTML tags are the building blocks of any web page.  
They define the structure, formatting, and behavior of the content.

### 🔹 Basic HTML Tags

| Tag         | Description                         |
|-------------|-------------------------------------|
| `<html>`    | Root element of an HTML document    |
| `<head>`    | Contains meta and page setup info   |
| `<title>`   | Title shown in browser tab          |
| `<body>`    | Main content of the webpage         |
| `<h1>`–`<h6>` | Headings from highest to lowest     |
| `<p>`       | Paragraph                           |
| `<br>`      | Line break                          |
| `<hr>`      | Horizontal rule                     |
| `<b>` / `<strong>` | Bold text (semantic vs visual)     |
| `<i>` / `<em>`     | Italic text (semantic vs visual)   |
| `<u>`       | Underlined text                     |
| `<a>`       | Anchor (hyperlink)                  |
| `<img>`     | Image embed                         |
| `<div>`     | Division / block container          |
| `<span>`    | Inline container                    |

### 🔸 Medium-Level HTML Tags

| Tag           | Description                          |
|----------------|--------------------------------------|
| `<ul>` / `<ol>` / `<li>` | Lists (unordered, ordered, items) |
| `<table>` / `<tr>` / `<td>` / `<th>` | Table elements                |
| `<form>`       | Form container                      |
| `<input>`      | Input field                         |
| `<label>`      | Label for input                     |
| `<select>` / `<option>` | Dropdown and its items            |
| `<textarea>`   | Multi-line input                    |
| `<button>`     | Clickable button                    |
| `<iframe>`     | Embed external page or media        |
| `<fieldset>` / `<legend>` | Group form elements              |
| `<nav>` / `<section>` / `<article>` / `<aside>` / `<header>` / `<footer>` | Semantic layout elements |
| `<audio>` / `<video>` | Embed audio or video         |
| `<code>` / `<pre>` | Code blocks                      |
| `<abbr>` / `<cite>` | Abbreviations and citations     |

### 🔶 Advanced / Semantic HTML Tags

| Tag            | Description                             |
|----------------|-----------------------------------------|
| `<main>`       | Main content of the page                |
| `<figure>` / `<figcaption>` | Image/media and caption combo      |
| `<mark>`       | Highlighted/marked text                 |
| `<progress>`   | Progress bar                            |
| `<details>` / `<summary>` | Expandable content              |
| `<template>`   | Client-side content placeholder         |
| `<dialog>`     | Native popup/modal                      |
| `<canvas>`     | Graphics drawing area                   |
| `<noscript>`   | Fallback for users with JS disabled     |
| `<script>`     | JavaScript embed                        |
| `<link>`       | External resource link (CSS, icons)     |
| `<meta>`       | Metadata like charset, viewport, etc.   |
| `<style>`      | Embedded CSS styling                    |

> 🧠 **Tip:** Use this table for quick reference, and scroll down for detailed examples of each tag later in your notes.

---
## 🧩 Types of HTML Tags

- ✅ Self-closing tags

- ✅ Block-level tags

- ✅ Inline tags

- ✅ (Optional) Paired tags vs Unpaired tags

### 🔸 1. Self-Closing Tags (Void Elements)

- These tags **do not need a closing tag**.
- Used for elements that don’t wrap content — they just perform a function.
- Syntax ends with `>` (in HTML5, `/` is optional).

#### 🛠️ Examples:

These tags do not require a closing tag and are used for elements that do not wrap any content.

| Tag Example                                     | Description             |
|------------------------------------------------|-------------------------|
| `<br>`                                         | Line break              |
| `<hr>`                                         | Horizontal line         |
| `<img src="image.jpg" alt="Image">`            | Image                   |
| `<meta charset="UTF-8">`                       | Metadata                |
| `<link rel="stylesheet" href="style.css">`     | External resource (CSS) |
| `<input type="text">`                          | Form input              |
### 🔹 2. Block-Level Elements

- Block elements **start on a new line** and take up the **full width** available.
- They are used to build the **structure/layout** of a web page.

#### 🛠️ Examples:

| Tag                | Description              |
|--------------------|--------------------------|
| `<div>`            | Generic block container  |
| `<p>`              | Paragraph                |
| `<h1>`–`<h6>`       | Headings                 |
| `<ul>`, `<ol>`, `<li>` | Lists               |
| `<table>`          | Table                    |
| `<section>`, `<article>` | Semantic sections  |
| `<form>`           | Form container           |

### 🔹 3. Inline Elements

- Inline elements **do not start on a new line**.
- They take up **only as much width** as necessary.
- Usually used **inside block-level elements**.

#### 🛠️ Examples:

| Tag                | Description                    |
|--------------------|--------------------------------|
| `<span>`           | Generic inline container       |
| `<a>`              | Anchor (hyperlink)             |
| `<strong>`, `<b>`   | Bold text                      |
| `<em>`, `<i>`       | Italic text                    |
| `<img>`            | Image                          |
| `<input>`          | Form input (self-closing)      |
| `<label>`          | Label for input fields         |

---
## 🏷️ `<html>` Tag

The `<html>` tag is the **root element** of any HTML document.  
All other HTML elements must be nested inside this tag.

### 🔹 Purpose:

- Defines the beginning and end of an HTML document.
- Wraps both the `<head>` and `<body>` sections.
- Helps browsers understand that this is an HTML file.

### 🔧 Syntax:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Metadata goes here -->
  </head>
  <body>
    <!-- Visible content goes here -->
  </body>
</html>
```

### 🌐 Attributes

| Attribute | Description                                 |
|-----------|---------------------------------------------|
| `lang`    | Specifies the language of the page content  |

### ✅ Example:

```html
<html lang="en">   <!-- English -->
<html lang="hi">   <!-- Hindi -->
<html lang="fr">   <!-- French -->
<html lang="ko">   <!-- Korean -->

```
> 📌 Use correct lang codes for accessibility, SEO, and screen reader support.

### ⚠️ Notes
#### Rule / Best Practice
- The <html> tag is required in every HTML document.
- It must follow immediately after <!DOCTYPE html>.
- Only one <html> element is allowed per HTML page.

#### 🔗 **[View Practical Example](../Practical-Examples/html_tag.html)**
---
## 🧠 `<head>` Tag

The `<head>` tag contains **meta-information** about the HTML document.  
It is not displayed on the page but is essential for SEO, responsiveness, and page setup.

### 📍 Placement

It is placed **between** `<html>` and `<body>` tags.

### 🌐 Common Tags Inside `<head>`

| Tag                                                      | Description                                 |
|-----------------------------------------------------------|---------------------------------------------|
| `<title>`                                                 | Sets the title shown in the browser tab     |
| `<meta charset="UTF-8">`                                  | Defines character encoding (UTF-8 recommended) |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Makes the page responsive on mobile |
| `<link rel="stylesheet" href="style.css">`                | Links an external CSS file                  |
| `<style>`                                                 | Internal CSS styling                        |
| `<script>`                                                | Internal or external JavaScript             |
| `<meta name="description" content="...">`                 | Page description (for SEO)                  |
| `<meta name="author" content="...">`                      | Author of the page                          |

### ✅ Example

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <link rel="stylesheet" href="style.css">
</head>
```

### ⚠️ Notes
#### Best Practice
- The <head> tag must be placed before <body>
- Use <meta> and <title> tags for better SEO
- Avoid adding visible content inside <head>

#### 🔗 **[View Practical Example](../Practical-Examples/head_tag.html)**
---

## 🏷️ `<title>` Tag

The `<title>` tag defines the **title of the HTML document**.  
It is displayed in the **browser tab**, **search engine results**, and when users bookmark the page.


### 📍 Placement

The `<title>` tag is placed **inside the `<head>`** section of an HTML document.

### 🎯 Purpose

- Helps users identify the page from browser tabs or history.
- Used by **search engines** for page listings and indexing.
- Improves **SEO** and **user accessibility**.

### ✅ Syntax

```html
<title>Your Page Title</title>
```
### ✅ Example
```html
<head>
  <title>My Portfolio Website</title>
</head>
```
### ⚠️ Notes

| Best Practice                                                   |
| --------------------------------------------------------------- |
| Keep titles **short and descriptive** (around 50–60 characters) |
| Use **relevant keywords** to improve SEO                        |
| Do **not leave** the `<title>` tag empty                        |
| Only **one `<title>` tag** is allowed per document              |
🔗 **[View Practical Example](../Practical-Examples/title_tag.html)**
---
## 🏷️ `<body>` Tag

The `<body>` tag contains the **visible content** of an HTML document — everything the user sees in the browser.

All elements like text, images, buttons, links, headings, forms, etc., are placed inside the `<body>`.

### 📍 Placement

It is placed **after the `<head>` tag** and **inside the `<html>` tag**.

### 🎯 Purpose

- Holds the **entire content** shown on the webpage.
- Only one `<body>` tag is allowed in a document.
- All visual content and elements are nested inside it.

### ✅ Syntax

```html
<body>
  <!-- Visible content goes here -->
</body>
```

### ✅ Example
```html
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph inside the body tag.</p>
  <img src="profile.jpg" alt="Profile Picture">
</body>
```
### ⚠️ Notes
| Best Practice                                                    |
| ---------------------------------------------------------------- |
| Only **one `<body>` tag** is allowed per document                |
| Keep structure **organized** with headings, sections             |
| Don't place `<body>` inside other elements                       |
| Use semantic tags inside `<body>` for better readability and SEO |
🔗 **[View Practical Example](../Practical-Examples/body%20_tag.html)**
---
## 🏷️ HTML Heading Tags

- HTML provides six levels of headings, from `<h1>` (most important) to `<h6>` (least important).
- Headings are used to define the **structure** and **hierarchy** of content on a web page.
- Search engines and screen readers use headings to understand the content structure.
- Only one `<h1>` tag should be used per page, typically for the **main title**.

### 🔹 Syntax & Output Example:

```html
<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading 4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6</h6>
```

### 🔢 Default Heading Sizes (Approximate)

| Tag    | Size Range  | Importance      |
| ------ | ----------- | --------------- |
| `<h1>` | 24px – 36px | Main title      |
| `<h2>` | 18px – 30px | Section heading |
| `<h3>` | 16px – 24px | Sub-section     |
| `<h4>` | 14px – 20px | Minor heading   |
| `<h5>` | 12px – 18px | Smaller heading |
| `<h6>` | 10px – 16px | Least important |


> 📝 Note: These values vary across browsers and depend on default styles. You can always customize them using CSS.


### 📐 Visual Importance:

- `<h1>` → Largest and most important

- `<h2>` to `<h6>` → Decreasing size and priority

- Browsers apply default styles: larger font sizes and bold weight for higher-level headings.

### 📌 Best Practices
- Use headings in order (h1 → h2 → h3...) to maintain semantic structure.

- Don’t skip levels (e.g., don’t go from `<h1>` directly to `<h4>`).

- ❌ Don’t use headings just to make text bigger — use CSS for styling instead.

- ✅ Use only one `<h1>` per page — it improves SEO and semantic structure.
  
### 🎯 Example in a Real Page:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Heading Example</title>
</head>
<body>
  <h1>My Personal Blog</h1>
  <h2>About Me</h2>
  <h3>Education</h3>
  <h4>School</h4>
  <h5>Subjects</h5>
  <h6>Notes</h6>
</body>
</html>
```
#### 🔗 **[View Practical Example](../Practical-Examples/heading_tag.html)**
---
## 🏷️ `<p>` – Paragraph Tag

The `<p>` tag defines a **paragraph of text** in HTML.  
It is a **block-level element**, meaning it starts on a new line and adds vertical spacing before and after the content.

### 🎯 Purpose

- Used to display **plain text** or **paragraphs of content**.
- Helps structure and format readable text in HTML documents.
- Automatically adds spacing between other elements.

### 🔧 Syntax

```html
<p>This is a paragraph.</p>
```

### ✅ Example

```html
<body>
  <p>Hello! This is the first paragraph.</p>
  <p>This is another paragraph of text.</p>
</body>
```

### ⚙️ Formatting Behavior

- Text inside a `<p>` tag **wraps automatically** when it reaches the end of the container.
- **Multiple spaces and line breaks** inside a `<p>` are ignored in the output.
- To break a line inside a paragraph, use the `<br>` tag.

### 📌 Best Practices

| ✅ Do This                                | ❌ Don’t Do This                                  |
|-------------------------------------------|--------------------------------------------------|
| Use `<p>` to wrap logical content         | Don’t place **block-level elements** inside `<p>` |
| Use `<br>` for small line breaks          | Don’t rely on `<p>` for layout/spacing only       |
| Apply CSS for styling and spacing         | Don’t use multiple `<p>` tags just for gaps       |

### ⚠️ Notes

- You can style paragraphs using **CSS** (e.g., `margin`, `font`, `line-height`).
- `<p>` cannot contain **other block-level elements** like `<div>`, `<table>`, etc.

### 🎨 CSS Styling Example

```html
<style>
  p {
    font-size: 16px;
    color: #333;
    line-height: 1.6;
    margin-bottom: 1em;
  }
</style>
```
---
## 🧱 `<br>` – Line Break

Inserts a **single line break**. It’s a **self-closing tag**.

```html
<p>Hello<br>World</p>
```

✅ Use inside paragraphs or where line breaks are needed without starting a new block.<br>
#### 🔗 **[View Practical Example](../Practical-Examples/br_hr_b_strong_i_em_u_tags.html)**
---
## 🧱 `<hr>` – Horizontal Rule

Adds a **thematic horizontal line** or divider. Also self-closing.

```html
<hr>
```

✅ Commonly used to separate sections of content.<br>
#### 🔗 **[View Practical Example](../Practical-Examples/br_hr_b_strong_i_em_u_tags.html)**
---
## 🏷️ `<b>` vs `<strong>` – Bold Text

- `<b>`: Renders text bold **without semantic meaning**.
- `<strong>`: Renders bold **with emphasis/importance**.

```html
<p>This is <b>bold</b> text.</p>
<p>This is <strong>important</strong> text.</p>
```

✅ Prefer `<strong>` for accessibility and SEO.<br>
#### 🔗 **[View Practical Example](../Practical-Examples/br_hr_b_strong_i_em_u_tags.html)**
---

## 🏷️ `<i>` vs `<em>` – Italic Text

- `<i>`: Italic style with **no emphasis** (e.g., technical terms).
- `<em>`: Italic style **with emphasis** (semantic meaning).

```html
<p>This is <i>italic</i> text.</p>
<p>This is <em>emphasized</em> text.</p>
```

✅ Use `<em>` when you want screen readers to apply emphasis.<br>
#### 🔗 **[View Practical Example](../Practical-Examples/br_hr_b_strong_i_em_u_tags.html)**
---

## 🏷️ `<u>` – Underlined Text

Displays text with an underline.

```html
<p>This is <u>underlined</u> text.</p>
```

⚠️ Often replaced with CSS: `text-decoration: underline;`<br>
#### 🔗 **[View Practical Example](../Practical-Examples/br_hr_b_strong_i_em_u_tags.html)**
---

## 🔗 `<a>` – Anchor Tag

The `<a>` tag is used to create **hyperlinks** in HTML.  
It allows users to **navigate to other web pages, files, sections, or email addresses**.

### 🧠 Meaning

The "a" stands for **"anchor"**.  
It "anchors" a clickable link to a given destination using the `href` attribute.

### 🔧 Syntax

```html
<a href="URL">Link Text</a>
```
### ✅ Basic Example
`<a href="https://www.google.com">Visit Google</a>`
- Clicking the above will open Google in the same tab.

### 🌐 Common Attributes
| Attribute         | Description                                                               |
| ----------------- | ------------------------------------------------------------------------- |
| `href`            | Specifies the URL or destination                                          |
| `target="_blank"` | Opens the link in a **new tab**                                           |
| `title`           | Tooltip text shown on hover                                               |
| `download`        | Prompts user to **download** the linked file                              |
| `rel="noopener"`  | Prevents the new page from accessing `window.opener` (used with `_blank`) |
| `id`              | Target an anchor link (`#section-id`) within the page                     |


### 🔗 Internal vs External Links
#### 📍 Internal (same website/page):
```html
<a href="#about">Go to About Section</a>
<!-- And somewhere in the page -->
<h2 id="about">About Us</h2>
```
#### 🌐 External:
```html
<a href="https://youtube.com" target="_blank" rel="noopener">YouTube</a>
```
### 📝 Best Practices
- Always add title for better accessibility.

- Use target="_blank" + rel="noopener noreferrer" for external links.

- Avoid using vague texts like "Click Here" — use meaningful descriptions.


### 🚫 Don’t Do This
```html
<a>Broken Link</a> <!-- Missing href -->

<a href="">Empty href</a> <!-- Leads to current page (not useful) -->
```

### 🎯 Complete Example
```html
<a href="https://openai.com" target="_blank" title="OpenAI Website" rel="noopener">
  Visit OpenAI
</a>
```
### ⚠️ Notes
- The default link color is blue, and purple if visited.

- Can be styled using CSS:
```html
a {
  text-decoration: none;
  color: red;
}
```
#### 🔗 **[View Practical Example](../Practical-Examples/anchor_tag.html)**
---
## 🖼️ `<img>` – Image Tag

The `<img>` tag is used to **embed images** into a webpage.  
It is a **self-closing tag** (doesn't require a closing `</img>`).

### 🔧 Syntax

```html
<img src="image.jpg" alt="Description of image">
```
### 📂 Common Attributes

| Attribute   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `src`       | Path/URL of the image to be displayed                                       |
| `alt`       | Alternative text (shown if image fails to load; also aids accessibility)    |
| `width`     | Specifies the width of the image (in px or %)                               |
| `height`    | Specifies the height of the image (in px or %)                              |
| `title`     | Tooltip text shown when hovered                                              |
| `loading`   | Suggests how the browser should load the image (`lazy`, `eager`)            |
| `style`     | Inline CSS styling                                                          |

### ✅ Example

```html
<img src="nature.jpg" alt="Beautiful Nature" width="400" height="300">
```

### 🛡️ Why `alt` is Important

- Improves **accessibility** for screen readers.
- Shows text when image **fails to load**.
- Helps **SEO** (search engine optimization).

```html
<img src="logo.png" alt="Company Logo">
```

### ⚠️ Notes

- The `<img>` tag **does not have a closing tag**.
- Use optimized image sizes to **improve loading speed**.
- Always use **relative paths** for local files (`images/photo.png`) and **absolute URLs** for web images (`https://...`).

### 🎨 Styling with CSS

```html
<img src="pic.jpg" alt="Styled Image" style="border-radius: 10px; box-shadow: 0 0 10px #aaa;">
```

```css
img {
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
}
```

### 🌍 Real World Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Image Example</title>
</head>
<body>
  <h1>My Pet</h1>
  <img src="cat.jpg" alt="Cute cat" width="300">
</body>
</html>
```
#### 🔗 **[View Practical Example](../Practical-Examples/img_tag.html)**
---
## 📦 `<div>` – Block-Level Container

The `<div>` tag is a **block-level element** commonly used to group related elements for styling or scripting.

### 🔧 Syntax

```html
<div>
  <!-- Block content here -->
</div>
```

### ✅ Example
```html
<div>
  <h2>Welcome</h2>
  <p>This is a block inside a div.</p>
</div>
```

### 📂 Common Attributes
| Attribute | Description                              |
| --------- | ---------------------------------------- |
| `class`   | Applies CSS class styling                |
| `id`      | Unique identifier for styling/JS         |
| `style`   | Inline CSS (e.g., `style="color:blue;"`) |

### 🎯 Use Cases
- Wrapping sections like headers, footers, and articles.

- Grouping form fields or layout areas.

- Creating grid or flexbox layouts.

### 🎨 CSS Example
```html
This is html part
<div class="box">This is a box</div>

this is css part
.box {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
}
```
#### 🔗 **[View Practical Example](../Practical-Examples/div_span_tags.html)**
---
## 🧩 `<span>` – Inline Container
- The <span> tag is an inline element used to style or manipulate small parts of text or elements.

### 🔧 Syntax
```<span>Inline content</span>```

### ✅ Example
```<p>This is a <span style="color: red;">red</span> word.</p>```

### 📂 Common Attributes
| Attribute | Description                      |
| --------- | -------------------------------- |
| `class`   | Applies CSS class styling        |
| `id`      | Unique identifier for styling/JS |
| `style`   | Inline CSS                       |

### 🎯 Use Cases
- Highlighting or styling words inside a sentence.

- Wrapping icons or emojis.

- Targeting part of a string with JavaScript.

### ⚠️ Notes
- <div> is a block-level element (starts on a new line).

- <span> is an inline-level element (flows with surrounding content).

- Use <div> for layout and containers.

- Use <span> for styling small content chunks.

### 🆚 Quick Comparison Div and span
| Feature        | `<div>`            | `<span>`               |
| -------------- | ------------------ | ---------------------- |
| Display Type   | Block-level        | Inline                 |
| Breaks Line?   | Yes                | No                     |
| Use Case       | Layout/Structure   | Inline styling/effects |
| Common Content | Paragraphs, images | Words, icons           |


#### 🔗 **[View Practical Example](../Practical-Examples/div_span_tags.html)**

---
## 📋 HTML List Tags – `<ul>`, `<ol>`, `<li>`

HTML provides tags to create **lists** for grouping related items.  
There are two main types of lists:

- **Unordered List** (`<ul>`)
- **Ordered List** (`<ol>`)
- **List Item** (`<li>`)

---
### 🔹 `<ul>` – Unordered List

Creates a **bulleted** list.  
Best for items where order doesn’t matter (e.g., groceries, features, steps without sequence).

#### ✅ Syntax

```html
<ul>
  <li>Item One</li>
  <li>Item Two</li>
</ul>
```

📌 Output  
- Item One  
- Item Two  

#### 📌 Unordered List (`<ul>`) Bullet Styles

You can customize how bullet points appear using the `list-style-type` CSS property.

| Style  | CSS Value                   | Appearance           |
|--------|-----------------------------|----------------------|
| 🔘 Disc    | `list-style-type: disc;`    | ● Default solid bullet |
| ⚪ Circle  | `list-style-type: circle;`  | ○ Hollow bullet        |
| ◼️ Square | `list-style-type: square;`  | ■ Square bullet        |
| 🚫 None    | `list-style-type: none;`    | No bullets at all      |

---
### 🔸 `<ol>` – Ordered List

Creates a numbered or alphabetically ordered list.  
Used when the order matters, like steps in a recipe or instructions.

#### ✅ Syntax

```html
<ol>
  <li>Step One</li>
  <li>Step Two</li>
</ol>
```

📌 Output  
1. Step One  
2. Step Two  

#### 🔢 Ordered List (`<ol>`) Numbering Styles

The appearance of ordered lists can be customized using the `list-style-type` CSS property.

| Style Type          | CSS Value                   | Example Output         |
|---------------------|-----------------------------|------------------------|
| Decimal             | `list-style-type: decimal;`     | 1, 2, 3                |
| Lowercase Letters   | `list-style-type: lower-alpha;`  | a, b, c                |
| Uppercase Letters   | `list-style-type: upper-alpha;`  | A, B, C                |
| Lowercase Roman     | `list-style-type: lower-roman;`  | i, ii, iii             |
| Uppercase Roman     | `list-style-type: upper-roman;`  | I, II, III             |

---
### 🟩 `<li>` – List Item

Defines an individual item inside `<ul>` or `<ol>`.  
It must be a direct child of one of these tags.

### Example

```html
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>
```

### ⚙️ Common Attributes

| Attribute | Applies To | Description                             |
|-----------|------------|-----------------------------------------|
| `type`    | `<ol>`     | Changes the number style (1, A, i)      |
| `start`   | `<ol>`     | Defines the starting number             |
| `reversed`| `<ol>`     | Reverses the order                      |
| `value`   | `<li>`     | Specifies custom numbering in `<ol>`    |

#### 🔠 Example with Attributes

```html
<ol type="A" start="3" reversed>
  <li value="5">First</li>
  <li>Second</li>
  <li>Third</li>
</ol>
```

📌 Output  
C. First  
B. Second  
A. Third  

---
### 🧠 Nesting Lists

Lists can be nested inside each other.

```html
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
```
### ✅ Best Practices

- Use `<ul>` for unordered content like features, ingredients, etc.
- Use `<ol>` for steps or instructions in a specific order.
- Always keep list items inside `<li>`.
- Avoid using lists for layout — use CSS Flexbox/Grid for that.

### ❌ Common Mistakes

```html
<ul>
  Apple
  Banana
</ul>
```

🚫 Incorrect: Text must be wrapped in `<li>`

✅ Correct:

```html
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>
```

### 🎯 Real Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>List Example</title>
</head>
<body>
  <h2>Shopping List</h2>
  <ul>
    <li>Milk</li>
    <li>Eggs</li>
    <li>Bread</li>
  </ul>

  <h2>Steps to Bake a Cake</h2>
  <ol>
    <li>Preheat oven</li>
    <li>Mix ingredients</li>
    <li>Bake for 30 minutes</li>
  </ol>
</body>
</html>
```
#### 🔗 **[View Practical Example](../Practical-Examples/ul_ol_li_tags.html)**

---
## 📋 HTML Table Tags – `<table>`, `<tr>`, `<td>`, `<th>`, `<thead>`, `<tbody>`

HTML tables are used to display data in rows and columns.

---
### 🔹 `<table>` – Table Element

Defines the main table structure.  
It wraps all the rows and cells.

#### ✅ Syntax

```html
<table>
  <!-- Rows go here -->
</table>
```

---
### 🔸 `<tr>` – Table Row

Defines a **row** in the table.  
Each row contains one or more cells.

#### ✅ Syntax

```html
<tr>
  <!-- Cells go here -->
</tr>
```

---
### 🟩 `<td>` – Table Data Cell

Defines a **data cell** in a table row.  
Used for regular content.

#### ✅ Syntax

```html
<td>Cell Data</td>
```

---
### 🟥 `<th>` – Table Header Cell

Defines a **header cell** in a table row.  
Usually used inside the first row to describe the column contents.  
Text inside `<th>` is bold and centered by default.

#### ✅ Syntax

```html
<th>Header</th>
```

---
### 🧩 `<thead>` – Table Head Section

Groups the header content of the table.  
Improves structure and accessibility.

#### ✅ Syntax

```html
<thead>
  <tr>
    <th>Heading 1</th>
    <th>Heading 2</th>
  </tr>
</thead>
```

---
### 🧱 `<tbody>` – Table Body Section

Groups the main content (body rows) of the table.

#### ✅ Syntax

```html
<tbody>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
</tbody>
```

---
### 📊 Example Table with `<thead>` and `<tbody>`

```html
<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>25</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>30</td>
      <td>London</td>
    </tr>
  </tbody>
</table>
```

📌 Output: A table with separate head and body sections.

---
### ⚙️ Common Table Attributes

| Attribute  | Tag        | Description                              |
|------------|------------|------------------------------------------|
| `border`   | `<table>`  | Sets the border size of the table        |
| `colspan`  | `<td>`, `<th>` | Merges multiple columns into one     |
| `rowspan`  | `<td>`, `<th>` | Merges multiple rows into one        |
| `width`    | `<table>`, `<td>` | Sets width of the table or cell   |
| `align`    | `<td>`, `<th>` | Aligns text inside the cell           |

---
### 🔠 Merged Cells Example

```html
<table border="1">
  <thead>
    <tr>
      <th rowspan="2">Name</th>
      <th colspan="2">Details</th>
    </tr>
    <tr>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>28</td>
      <td>Paris</td>
    </tr>
  </tbody>
</table>
```

📌 Output: Header cell “Name” spans two rows, and “Details” spans two columns.

### ✅ Best Practices

- Always use `<th>` for headers to improve accessibility.
- Use `<thead>` and `<tbody>` to structure your table properly.
- Keep table structures simple and semantic.
- Use CSS for styling instead of HTML attributes when possible.

### ❌ Common Mistakes

```html
<table>
  <tr>
    Name
    Age
  </tr>
</table>
```

🚫 Incorrect: Text must be placed inside `<td>` or `<th>`

✅ Correct:

```html
<table>
  <tr>
    <td>Name</td>
    <td>Age</td>
  </tr>
</table>
```

### 🎯 Real Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Table Example</title>
</head>
<body>
  <h2>Student Data</h2>
  <table border="1">
    <thead>
      <tr>
        <th>Roll No</th>
        <th>Name</th>
        <th>Marks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Rahul</td>
        <td>85</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Anjali</td>
        <td>90</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```
#### 🔗 **[View Practical Example](../Practical-Examples/table.html)**

---
## 📋 HTML Form Tags – `<form>`, `<input>`, `<label>`, `<textarea>`, `<select>`, `<option>`, `<button>`

HTML forms are used to collect user input. The data can then be sent to a server for processing.

---
### 🔹 `<form>` – Form Container

Defines the beginning and end of a form. It can include various input elements.

#### ✅ Syntax

```html
<form action="/submit" method="post">
  <!-- Form elements go here -->
</form>
```

| Attribute | Description                         |
|-----------|-------------------------------------|
| `action`  | URL where form data is sent         |
| `method`  | HTTP method (`get` or `post`)       |
| `target`  | Where to display response (`_self`, `_blank`, etc.) |

---
### 🔸 `<label>` – Form Label

Defines a label for an input element. Improves accessibility.

#### ✅ Syntax

```html
<label for="name">Name:</label>
<input type="text" id="name" name="name">
```

---
### 🟩 `<input>` – Input Field

Used to create various form controls like text fields, checkboxes, radio buttons, etc.

#### ✅ Common Types

```html
<input type="text">
<input type="password">
<input type="email">
<input type="checkbox">
<input type="radio">
<input type="file">
<input type="submit">
```

| Attribute | Description |
|----------|-------------|
| `type`   | Specifies the input type |
| `name`   | Name of the input field |
| `value`  | Initial/default value |
| `required` | Makes input mandatory |
| `placeholder` | Hint text inside the field |

---
### 🧾 `<textarea>` – Multi-line Text Input

Used for longer text inputs like comments or messages.

#### ✅ Syntax

```html
<textarea name="message" rows="4" cols="30">Enter text here...</textarea>
```

---
### 🔽 `<select>` and `<option>` – Dropdown Menu

Creates a dropdown menu for multiple predefined options.

#### ✅ Syntax

```html
<select name="city">
  <option value="delhi">Delhi</option>
  <option value="mumbai">Mumbai</option>
  <option value="jaipur" selected>Jaipur</option>
</select>
```

| Attribute | Tag | Description |
|-----------|-----|-------------|
| `value`   | `<option>` | Value sent on form submit |
| `selected`| `<option>` | Makes an option preselected |

---
### 🔘 Radio Buttons

```html
<label><input type="radio" name="gender" value="male"> Male</label>
<label><input type="radio" name="gender" value="female"> Female</label>
```

📝 All radio buttons with the same `name` are grouped.

---
### ☑️ Checkboxes

```html
<label><input type="checkbox" name="skills" value="html"> HTML</label>
<label><input type="checkbox" name="skills" value="css"> CSS</label>
```

📝 Users can select multiple options.

---
### 🔲 `<button>` – Button Element

Used for form submission or actions.

#### ✅ Syntax

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button">Click Me</button>
```

| Type       | Description                          |
|------------|--------------------------------------|
| `submit`   | Submits the form                     |
| `reset`    | Resets form fields                   |
| `button`   | Performs an action (JavaScript, etc) |

---
### ❗ Required Field Example

```html
<input type="email" name="email" required>
```

### 🧠 Best Practices

- Always use `<label>` for accessibility.
- Use `name` attributes to identify form data on the server.
- Use `required`, `minlength`, `maxlength`, etc. for validation.
- Group related inputs with `<fieldset>` and `<legend>`.

### ❌ Common Mistakes

```html
<form>
  Name: <input>
</form>
```

🚫 Incorrect: Missing `type` and `name`

✅ Correct:

```html
<form>
  Name: <input type="text" name="username">
</form>
```

### 🎯 Real Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Form Example</title>
</head>
<body>
  <h2>Contact Form</h2>
  <form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" cols="30"></textarea><br><br>

    <label for="city">City:</label>
    <select name="city" id="city">
      <option value="delhi">Delhi</option>
      <option value="mumbai">Mumbai</option>
      <option value="jaipur">Jaipur</option>
    </select><br><br>

    <label>Gender:</label>
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female<br><br>

    <label>Skills:</label>
    <input type="checkbox" name="skills" value="html"> HTML
    <input type="checkbox" name="skills" value="css"> CSS<br><br>

    <button type="submit">Submit</button>
  </form>
</body>
</html>
```
#### 🔗 **[View Practical Example](../Practical-Examples/form.html)**
---
## 📋 HTML `<iframe>` Tag – Inline Frame

The `<iframe>` tag is used to embed another HTML page or external content within the current page.

---
### 🔹 Purpose of `<iframe>`

- Embed web pages
- Display videos (e.g., YouTube)
- Load maps (e.g., Google Maps)
- Embed documents

### ✅ Basic Syntax

```html
<iframe src="https://example.com"></iframe>
```

### ⚙️ Common Attributes

| Attribute   | Description                                           |
|-------------|-------------------------------------------------------|
| `src`       | URL of the page to embed                             |
| `width`     | Width of the iframe in pixels or percentage          |
| `height`    | Height of the iframe                                 |
| `title`     | Describes the content for accessibility              |
| `allowfullscreen` | Allows fullscreen for videos                   |
| `loading`   | Can be `lazy` or `eager` to control loading behavior |
| `frameborder`| Sets the border thickness (deprecated in HTML5)     |
| `referrerpolicy` | Controls referrer info sent with requests       |
| `sandbox`   | Restricts capabilities of the content within iframe  |

### 🔠 Example: Embedding a Website

```html
<iframe src="https://www.wikipedia.org" width="800" height="400" title="Wikipedia Homepage"></iframe>
```

### ▶️ Example: Embedding a YouTube Video

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
title="YouTube video" frameborder="0" allowfullscreen></iframe>
```

### 🛡️ `sandbox` Attribute

Adds security restrictions to iframe content.

#### ✅ Example

```html
<iframe src="https://example.com" sandbox></iframe>
```

| Value               | Description                                  |
|--------------------|----------------------------------------------|
| `allow-scripts`    | Allows JavaScript                            |
| `allow-forms`      | Allows form submissions                      |
| `allow-same-origin`| Treat content as being from the same origin |
| `allow-popups`     | Allows popups                                |
| `allow-modals`     | Allows modal dialogs                         |

You can combine multiple values using space:

```html
<iframe src="..." sandbox="allow-scripts allow-forms"></iframe>
```

### 🧠 Best Practices

- Always add a `title` for accessibility.
- Use `loading="lazy"` to improve performance.
- Avoid embedding untrusted sources.
- Set `sandbox` to limit potential vulnerabilities.

### ❌ Common Mistakes

```html
<iframe>https://example.com</iframe>
```

🚫 Incorrect: The `src` should be an attribute, not inner text.

✅ Correct:

```html
<iframe src="https://example.com"></iframe>
```

## 🎯 Real Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Iframe Example</title>
</head>
<body>
  <h2>Embedded Page</h2>
  <iframe src="https://www.wikipedia.org" width="800" height="400" title="Wikipedia Homepage" loading="lazy"></iframe>

  <h2>Embedded YouTube Video</h2>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video" frameborder="0" allowfullscreen></iframe>
</body>
</html>
```
#### 🔗 **[View Practical Example](../Practical-Examples/iframe.html)**
---
## 📋 HTML `<fieldset>` and `<legend>` Tags

The `<fieldset>` and `<legend>` tags are used to group and label related elements within a form, improving organization and accessibility.

---
### 🔹 `<fieldset>` – Group Form Elements

Used to group related form fields.  
It visually draws a box around the grouped fields.

#### ✅ Syntax

```html
<fieldset>
  <!-- Grouped form elements -->
</fieldset>
```

---
### 🔸 `<legend>` – Caption for `<fieldset>`

Defines a **title** or **caption** for the `<fieldset>` block.

#### ✅ Syntax

```html
<fieldset>
  <legend>Personal Info</legend>
  <!-- Related inputs -->
</fieldset>
```

### 📋 Example with Form Elements

```html
<form>
  <fieldset>
    <legend>Personal Information</legend>
    
    <label for="fname">First Name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    
    <label for="lname">Last Name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
  </fieldset>
</form>
```

📌 Output: A labeled box around the grouped inputs.

### ⚙️ Why Use `<fieldset>` and `<legend>`?

- Groups related form fields logically
- Improves accessibility for screen readers
- Enhances form readability
- Can be styled using CSS for a better UI

### 🧠 Best Practices

- Use `<fieldset>` to group fields like personal info, payment, address, etc.
- Use `<legend>` to label each group meaningfully.
- Avoid putting unrelated inputs inside a single `<fieldset>`.

### ❌ Common Mistakes

```html
<fieldset>
  Name:
  <input type="text" name="name">
</fieldset>
```

🚫 Missing `<label>` and `<legend>`

✅ Correct:

```html
<fieldset>
  <legend>User Info</legend>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</fieldset>
```

### 🎯 Real Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Fieldset Example</title>
</head>
<body>
  <h2>Registration Form</h2>
  <form>
    <fieldset>
      <legend>Account Info</legend>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password">
    </fieldset>

    <fieldset>
      <legend>Contact Details</legend>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br><br>
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone">
    </fieldset>
  </form>
</body>
</html>
```
#### 🔗 **[View Practical Example](../Practical-Examples/form.html)**

---
## 📋 HTML `<audio>` and `<video>` Tags

The `<audio>` and `<video>` tags are used to embed media files (sound and video) into a web page.

---
### 🔊 `<audio>` – Embed Sound

Allows you to embed and control audio playback.

#### ✅ Syntax

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

#### 🎛️ Common Attributes

| Attribute   | Description                                |
|-------------|--------------------------------------------|
| `controls`  | Displays playback controls (play, pause)   |
| `autoplay`  | Starts playing automatically (muted)       |
| `loop`      | Repeats the audio                          |
| `muted`     | Starts audio muted                         |
| `preload`   | Indicates how audio should be loaded       |

---
### 🎥 `<video>` – Embed Video

Allows you to embed and control video playback.

#### ✅ Syntax

```html
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

#### 🎛️ Common Attributes

| Attribute   | Description                                |
|-------------|--------------------------------------------|
| `src`       | Video file path                            |
| `controls`  | Displays playback controls                 |
| `autoplay`  | Starts playing automatically (muted)       |
| `loop`      | Repeats the video                          |
| `muted`     | Starts video muted                         |
| `poster`    | Image shown before video plays             |
| `preload`   | Indicates how video should be loaded       |
| `width`     | Width of the video                         |
| `height`    | Height of the video                        |

### 🔠 Example: Audio with Multiple Formats

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

### 🔠 Example: Video with Poster Image

```html
<video width="640" height="360" controls poster="thumbnail.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

### 🧠 Best Practices

- Use multiple `<source>` tags for wider browser compatibility.
- Add fallback text for unsupported browsers.
- Use `controls` for better user experience.
- Optimize file sizes for faster load times.

### ❌ Common Mistakes

```html
<audio>audio.mp3</audio>
```

🚫 Incorrect: File should be in a `<source>` tag or set as `src`.

✅ Correct:

```html
<audio controls src="audio.mp3"></audio>
```

### 🎯 Real Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Audio and Video Example</title>
</head>
<body>
  <h2>Audio Player</h2>
  <audio controls>
    <source src="song.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

  <h2>Video Player</h2>
  <video width="640" height="360" controls poster="preview.jpg">
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</body>
</html>
```
#### 🔗 **[View Practical Example](../Practical-Examples/audio_video_tags.html)**
---
## 🖼️ `<picture>` Tag in HTML

The `<picture>` element gives you **flexibility** to define multiple versions of an image for different screen sizes, resolutions, or formats.

It is mainly used for **responsive images** and modern **image optimization** (e.g., using WebP when supported).

### 🧱 Syntax

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="fallback.jpg" alt="Description of image">
</picture>
```
#### ✅ Example with Responsive Media Query
```html
<picture>
  <source media="(min-width: 800px)" srcset="large.jpg">
  <source media="(min-width: 400px)" srcset="medium.jpg">
  <img src="small.jpg" alt="A responsive image">
</picture>
```
- <source>: Specifies different image sources based on media type or format.

- <img>: A fallback image that is displayed if none of the <source> tags match or are supported.

🔹 Attributes of `<source>`
| Attribute | Description                                               |
| --------- | --------------------------------------------------------- |
| `srcset`  | URL of the image file                                     |
| `type`    | MIME type (e.g., `image/webp`, `image/png`, `image/jpeg`) |
| `media`   | (Optional) Media query (e.g., `min-width: 600px`)         |


### 🧠 How it works:

- If screen ≥ 800px → large.jpg

- If screen ≥ 400px → medium.jpg

- Otherwise → small.jpg (from <img>)

### 📌 Why Use <picture>?
- Optimize performance by loading smaller images on smaller devices.

- Deliver modern formats like WebP for supported browsers.

- Handle art direction (i.e., different crops for different screen sizes).

### ⚠️ Notes
- Always include an <img> tag as a fallback inside <picture>.

- Ensure all images are relevant and visually aligned.

- Combine with alt attributes for accessibility.
#### 🔗 **[View Practical Example](../Practical-Examples/picture.html)**

---

## 📋 HTML `<code>`, `<pre>`, `<abbr>`, and `<cite>` Tags

These HTML tags are used to enhance the semantic meaning and formatting of text in a document.

---
### 🧱 `<code>` – Code Snippet

Displays text as computer code (usually monospace). Best for inline code.

#### ✅ Syntax

```html
<p>Use the <code>printf()</code> function to display output.</p>
```

📌 Output: Use the `printf()` function to display output.

---

### 🧾 `<pre>` – Preformatted Text

Preserves **spaces**, **line breaks**, and **tabs** exactly as typed.

#### ✅ Syntax

```html
<pre>
Line one
    Line two (indented)
        Line three (more indent)
</pre>
```

📌 Output:
```
Line one
    Line two (indented)
        Line three (more indent)
```

---

### 🧠 Using `<pre>` with `<code>`

These can be combined to display code blocks.

```html
<pre><code>
def greet(name):
    print("Hello, " + name)
</code></pre>
```

---

### 🔤 `<abbr>` – Abbreviation

Defines an abbreviation or acronym. Shows a tooltip when hovered.

#### ✅ Syntax

```html
<abbr title="World Health Organization">WHO</abbr>
```

📌 Output: WHO (hover to see “World Health Organization”)

---

### 📚 `<cite>` – Citation

Represents the title of a creative work (book, movie, article, etc.). Typically rendered in *italic*.

#### ✅ Syntax

```html
<cite>Hamlet</cite> by William Shakespeare
```

📌 Output: *Hamlet* by William Shakespeare

### 🧠 Best Practices

- Use `<code>` for inline code snippets.
- Use `<pre>` to preserve text formatting (e.g., ASCII art, code blocks).
- Use `<abbr>` for accessibility and clarity.
- Use `<cite>` to indicate creative titles in articles or papers.

### ❌ Common Mistakes

🚫 Using `<pre>` without closing:  
```html
<pre>
Text starts here
<!-- forgot to close -->
```

🚫 Using `<abbr>` without `title` attribute:  
```html
<abbr>HTML</abbr> <!-- No tooltip -->
```

✅ Correct:
```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

### 🎯 Real Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Text Tags Example</title>
</head>
<body>
  <p>Example of <code>inline code</code> usage.</p>

  <pre><code>
function greet(name) {
  console.log("Hello " + name);
}
  </code></pre>

  <p>This is an acronym: <abbr title="Cascading Style Sheets">CSS</abbr>.</p>

  <p><cite>The Lord of the Rings</cite> is a classic fantasy novel.</p>
</body>
</html>
```
#### 🔗 **[View Practical Example](../Practical-Examples/code_pre_abbr_cite_tags.html)**

---
## 📋 HTML `<figure>` and `<figcaption>` Tags

The `<figure>` and `<figcaption>` tags are used to group self-contained media content (like images, diagrams, videos) along with a caption.

---
### 🖼️ `<figure>` – Media Group Container

Wraps content that is referenced from the main content (e.g., images, charts, code blocks).  
It is a semantic element indicating self-contained content.

#### ✅ Syntax

```html
<figure>
  <!-- Media content like <img>, <video>, <pre><code>, etc. -->
</figure>
```

---
### 📝 `<figcaption>` – Caption for the `<figure>`

Describes or captions the content inside the `<figure>`.  
Usually placed as the first or last child of `<figure>`.

#### ✅ Syntax

```html
<figure>
  <img src="photo.jpg" alt="Sunset over the hills">
  <figcaption>A beautiful sunset in the hills of Manali.</figcaption>
</figure>
```

📌 Output: Image with a caption beneath it.

### 🔠 Example: Using `<figure>` with Image

```html
<figure>
  <img src="cat.jpg" alt="Cute cat" width="300">
  <figcaption>A sleepy cat enjoying the sunlight.</figcaption>
</figure>
```

---

### 🎞️ Example: `<figure>` with `<video>`

```html
<figure>
  <video controls width="400">
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption>Short clip from the travel documentary.</figcaption>
</figure>
```

### 🧠 Best Practices

- Use `<figure>` to group media content with its description.
- `<figcaption>` should describe the media clearly.
- Improves semantic HTML and accessibility.

### ❌ Common Mistakes

🚫 Using `<figcaption>` outside `<figure>`:

```html
<img src="pic.jpg">
<figcaption>This is incorrect</figcaption>
```

✅ Correct:

```html
<figure>
  <img src="pic.jpg" alt="Example Image">
  <figcaption>This is correct</figcaption>
</figure>
```

### 🎯 Real Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Figure Example</title>
</head>
<body>
  <h2>Gallery</h2>

  <figure>
    <img src="flower.jpg" alt="A red rose" width="300">
    <figcaption>A red rose blooming in the garden.</figcaption>
  </figure>

  <figure>
    <pre><code>
def hello():
    print("Hello, World!")
    </code></pre>
    <figcaption>Python code example.</figcaption>
  </figure>
</body>
</html>
```

### ✅ When to Use

- For images with descriptions
- For code blocks with explanations
- For videos or charts that need context

#### 🔗 **[View Practical Example](../Practical-Examples/figure_figcaption_tags.html)**
---
## 📋 HTML `<mark>` and `<progress>` Tags

These tags are used for highlighting text and displaying task progress visually.

---

### ✍️ `<mark>` – Highlight Text

The `<mark>` tag is used to highlight or mark text within a document.  
It typically renders with a yellow background to draw attention.

##### ✅ Syntax

```html
<p>This is a <mark>highlighted</mark> word.</p>
```

📌 Output: This is a <mark>highlighted</mark> word.

### 🧠 Use Cases for `<mark>`

- Emphasizing search results
- Highlighting keywords
- Drawing user attention in a paragraph

### ❌ Common Mistakes

🚫 Using `<mark>` for styling only (use CSS instead for that purpose).  
✅ Use it to give **semantic meaning** — to show importance or relevance.
---
### 📊 `<progress>` – Display Task Progress

Represents the completion progress of a task.

#### ✅ Syntax

```html
<progress value="70" max="100">70%</progress>
```

📌 Output: A progress bar showing 70% complete.

### ⚙️ Attributes

| Attribute | Description                                 |
|-----------|---------------------------------------------|
| `value`   | Current progress value                      |
| `max`     | Maximum value (default is 1 if omitted)     |

### 🧠 Use Cases for `<progress>`

- File upload progress
- Quiz completion percentage
- Installation or loading processes

### ❌ Common Mistakes

🚫 Omitting `max` and expecting full bar scaling.

✅ Always set a meaningful `max`:

```html
<progress value="3" max="10"></progress>
```

### 🎯 Real Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Mark and Progress Example</title>
</head>
<body>

  <h2>Search Result Highlight</h2>
  <p>The word <mark>HTML</mark> stands for HyperText Markup Language.</p>

  <h2>Progress Indicator</h2>
  <label for="task">Loading Task:</label>
  <progress id="task" value="45" max="100">45%</progress>

</body>
</html>
```

### ✅ Best Practices

- Use `<mark>` only when highlighting adds meaning.
- Use `<progress>` for non-interactive visual feedback (not to be confused with `<meter>`).

#### 🔗 **[View Practical Example](../Practical-Examples/mark_progress_tags.html)**


---
## 📋 HTML `<details>` and `<summary>` Tags

These tags are used to create expandable/collapsible content sections on a webpage.

---
### 🔽 `<details>` – Toggleable Container

The `<details>` element creates a disclosure widget that users can open or close to hide/show content.

#### ✅ Syntax

```html
<details>
  <summary>More Info</summary>
  <p>This is additional information that can be hidden or shown.</p>
</details>
```

📌 Output: An expandable block with "More Info" as the toggle text.

---
### 📌 `<summary>` – Visible Label for `<details>`

Defines the summary or title visible to the user. Clicking it toggles the visibility of the `<details>` content.

#### ✅ Syntax

```html
<details>
  <summary>Click to expand</summary>
  <p>Here is the hidden content!</p>
</details>
```

### 🧠 Use Cases

- FAQs sections
- Extra information or hints
- Hiding lengthy descriptions or documentation
- Read-more/read-less content

### ⚙️ Behavior and Styling

- Clicking the `<summary>` toggles visibility of the `<details>` content.
- Can be styled using CSS (`details[open]` for open state).

#### Example with Styling

```html
<style>
details[open] summary {
  font-weight: bold;
}
</style>

<details open>
  <summary>Default Open</summary>
  <p>This section starts expanded.</p>
</details>
```

### ❌ Common Mistakes

🚫 Omitting `<summary>` tag (makes content harder to toggle):

```html
<details>
  <p>This cannot be toggled properly.</p>
</details>
```

✅ Always include `<summary>` as the toggle element.

### 🎯 Real Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Details and Summary Example</title>
</head>
<body>

  <h2>FAQ Section</h2>

  <details>
    <summary>What is HTML?</summary>
    <p>HTML stands for HyperText Markup Language. It structures web content.</p>
  </details>

  <details>
    <summary>What is CSS?</summary>
    <p>CSS stands for Cascading Style Sheets. It styles web content.</p>
  </details>

</body>
</html>
```

### ✅ Best Practices

- Use `<details>` and `<summary>` to improve user interaction and content structure.
- Always provide descriptive text inside `<summary>`.
- Avoid overusing it for critical content—use it mainly for optional or extended information.

#### 🔗 **[View Practical Example](../Practical-Examples/details_summary_tags.html)**

---
## 📋 HTML `<template>`, `<dialog>`, and `<canvas>` Tags

These tags provide advanced functionalities like reusable HTML blocks, modals, and graphics rendering.

---

### 🧩 `<template>` – Hidden HTML Content for Reuse

The `<template>` tag holds HTML code that is not rendered immediately but can be cloned via JavaScript.

#### ✅ Syntax

```html
<template id="my-template">
  <div class="card">
    <h3>Card Title</h3>
    <p>Reusable card content</p>
  </div>
</template>
```

#### 📌 Usage Example

```html
<script>
  const template = document.getElementById("my-template");
  const clone = template.content.cloneNode(true);
  document.body.appendChild(clone); // inserts the template into the page
</script>
```

📝 Commonly used in dynamic apps and JavaScript rendering.

---
### 💬 `<dialog>` – Modal Dialog Box

Defines a popup dialog that can be shown/hidden using JavaScript.

#### ✅ Syntax

```html
<dialog id="myDialog">
  <p>This is a dialog box!</p>
  <button onclick="document.getElementById('myDialog').close()">Close</button>
</dialog>
<button onclick="document.getElementById('myDialog').showModal()">Open Dialog</button>
```

#### ⚙️ Common Methods

| Method         | Description                      |
|----------------|----------------------------------|
| `show()`       | Shows the dialog non-modally     |
| `showModal()`  | Shows it modally (disables background) |
| `close()`      | Closes the dialog                |

---
### 🧠 Use Cases for `<dialog>`

- Confirmation boxes
- Login modals
- Alerts and prompts

✅ Best with styling and accessibility support.

---
### 🎨 `<canvas>` – Drawing Surface

Creates an area for graphics rendering (via JavaScript). Used for games, charts, animations, etc.

#### ✅ Syntax

```html
<canvas id="myCanvas" width="400" height="200"></canvas>
```

#### 📌 Drawing Example

```html
<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "blue";
  ctx.fillRect(20, 20, 150, 100); // x, y, width, height
</script>
```

📝 The actual drawing logic is handled in JavaScript using a 2D or WebGL context.

---
### ❌ Common Mistakes

🚫 Using `<template>` outside of JavaScript: content won’t render.

🚫 Using `<dialog>` without calling `show()` or `showModal()`.

🚫 Expecting `<canvas>` to render without JS logic.

### 🎯 Real Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Template, Dialog, and Canvas</title>
</head>
<body>

  <h2>Template Demo</h2>
  <template id="cardTemplate">
    <div style="border:1px solid #ccc;padding:10px;margin:5px;">
      <h4>Card</h4>
      <p>This is a reusable template card.</p>
    </div>
  </template>
  <button onclick="addCard()">Add Card</button>

  <h2>Dialog Demo</h2>
  <button onclick="document.getElementById('myDialog').showModal()">Open Dialog</button>
  <dialog id="myDialog">
    <p>Hello! I am a dialog box.</p>
    <button onclick="document.getElementById('myDialog').close()">Close</button>
  </dialog>

  <h2>Canvas Demo</h2>
  <canvas id="demoCanvas" width="300" height="150" style="border:1px solid #000;"></canvas>

  <script>
    function addCard() {
      const template = document.getElementById("cardTemplate");
      const clone = template.content.cloneNode(true);
      document.body.appendChild(clone);
    }

    const ctx = document.getElementById("demoCanvas").getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 100, 50);
  </script>

</body>
</html>
```

### ✅ Summary

| Tag        | Purpose                                      |
|------------|----------------------------------------------|
| `<template>` | Define reusable HTML fragments             |
| `<dialog>`   | Create modal or popup dialog boxes         |
| `<canvas>`   | Draw graphics with JS (2D or WebGL)        |


#### 🔗 **[View Practical Example](../Practical-Examples/template_dialog_canvas_tags.html)**


---
## 📋 HTML `<script>` and `<noscript>` Tags

These tags are used for handling JavaScript functionality and providing fallbacks for users without JavaScript enabled.

---
### 📜 `<script>` – Embed or Link JavaScript

The `<script>` tag is used to define client-side JavaScript.

#### ✅ Syntax: External Script

```html
<script src="script.js"></script>
```

#### ✅ Syntax: Inline Script

```html
<script>
  alert("Hello, world!");
</script>
```

---
### ⚙️ Common `<script>` Attributes

| Attribute   | Description                                           |
|-------------|-------------------------------------------------------|
| `src`       | URL of the external script file                      |
| `type`      | Script type (e.g., `text/javascript`) (optional)     |
| `defer`     | Delays script execution until after HTML is parsed   |
| `async`     | Executes script asynchronously                       |


### 🧠 Best Practices for `<script>`

- Place scripts **at the bottom of `<body>`** or use `defer`/`async` for better performance.
- Use external scripts for better code management.
- Avoid inline JS in HTML for security (XSS) and readability.


### ❌ Common Mistakes

🚫 Forgetting to close the tag:

```html
<script src="file.js"> <!-- no closing tag -->
```

✅ Correct:

```html
<script src="file.js"></script>
```


### 🚫 `<noscript>` – Fallback for No JavaScript

Provides alternate content for users with JavaScript **disabled** or unsupported.

#### ✅ Syntax

```html
<noscript>
  <p>Your browser does not support JavaScript. Please enable it for full experience.</p>
</noscript>
```

### 🧠 Use Cases for `<noscript>`

- Informing users that JavaScript is required
- Providing alternative navigation or links
- Adding static content when JavaScript cannot run

### 🎯 Real Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Script and Noscript Example</title>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("js-status").textContent = "JavaScript is enabled ✅";
    });
  </script>
</head>
<body>

  <h2>JavaScript Check</h2>
  <p id="js-status">Checking JavaScript status...</p>

  <noscript>
    <p style="color: red;">JavaScript is disabled or not supported in your browser.</p>
  </noscript>

</body>
</html>
```

### ✅ Summary

| Tag         | Purpose                                         |
|-------------|--------------------------------------------------|
| `<script>`  | Run or link to JavaScript for interactivity     |
| `<noscript>`| Provide fallback content if JavaScript is disabled |


#### 🔗 **[View Practical Example](../Practical-Examples/link_meta_style_script_nosctipt_tags.html)**


---
## 📋 HTML `<link>`, `<meta>`, and `<style>` Tags

These tags are placed in the `<head>` section of HTML documents to manage metadata, external resources, and internal styles.

### 🔗 `<link>` – External Resource Link

The `<link>` tag is used to link external resources like stylesheets, icons, or fonts.

#### ✅ Syntax

```html
<link rel="stylesheet" href="styles.css">
```

#### ⚙️ Common Attributes

| Attribute | Description                              |
|-----------|------------------------------------------|
| `rel`     | Specifies the relationship (e.g., stylesheet, icon) |
| `href`    | URL/path of the linked file              |
| `type`    | MIME type (optional, usually inferred)   |

#### 📌 Examples

- Link CSS:
  ```html
  <link rel="stylesheet" href="styles.css">
  ```

- Favicon:
  ```html
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  ```

---
### 🧾 `<meta>` – Page Metadata

Provides metadata like character encoding, description, keywords, author, viewport, etc.

#### ✅ Syntax

```html
<meta charset="UTF-8">
<meta name="description" content="HTML tag guide">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### ⚙️ Common Attributes

| Attribute   | Description                          |
|-------------|--------------------------------------|
| `charset`   | Character encoding (e.g., UTF-8)     |
| `name`      | Type of metadata (description, author, etc.) |
| `content`   | Value of the metadata                |
| `http-equiv`| Simulate HTTP headers                |

---
### 🎨 `<style>` – Internal CSS

Defines internal CSS rules directly in the HTML document.

#### ✅ Syntax

```html
<style>
  body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
  }
</style>
```

📌 Best placed inside `<head>`.

### 🧠 Best Practices

- Use `<link>` for reusable CSS files.
- Use `<meta>` to improve SEO, accessibility, and responsiveness.
- Use `<style>` for quick internal styling (not recommended for large-scale projects).

### ❌ Common Mistakes

🚫 Linking external CSS using `<style>`:
```html
<style src="style.css"></style> <!-- Wrong -->
```

✅ Correct:
```html
<link rel="stylesheet" href="style.css">
```

🚫 Forgetting `name` or `content` in `<meta>`.

✅ Correct:
```html
<meta name="author" content="John Doe">
```

### 🎯 Real Page Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Demo page for head tags">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Jane Doe">

  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico" type="image/x-icon">

  <style>
    h1 { color: darkblue; }
    p { font-size: 18px; }
  </style>

  <title>Head Elements Example</title>
</head>
<body>

  <h1>Welcome</h1>
  <p>This page demonstrates the use of link, meta, and style tags.</p>

</body>
</html>
```

### ✅ Summary

| Tag      | Purpose                                      |
|----------|----------------------------------------------|
| `<link>` | Load external resources (CSS, fonts, icons)  |
| `<meta>` | Define metadata about the document           |
| `<style>`| Add internal CSS styling                     |


#### 🔗 **[View Practical Example](../Practical-Examples/link_meta_style_script_nosctipt_tags.html)**
---
## 📋 HTML5 Semantic Elements

HTML5 introduced semantic elements to give meaning to the structure of web pages. These tags help organize content logically and improve accessibility and SEO.

---
### 🔗 `<nav>` – Navigation Section

Defines a block of navigation links.

#### ✅ Syntax

```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

🧠 Use for site or in-page navigation menus.

---
### 📦 `<section>` – Thematic Group of Content

Represents a standalone section with a heading.

#### ✅ Syntax

```html
<section>
  <h2>About Us</h2>
  <p>We are a company that values ...</p>
</section>
```

🧠 Best for grouping related content (like chapters, services, etc.).

---
### 📰 `<article>` – Self-contained Content Block

Represents independent, reusable content (e.g., blog posts, news articles).

#### ✅ Syntax

```html
<article>
  <h2>News Headline</h2>
  <p>This is a news article...</p>
</article>
```

🧠 Use when content could stand alone (like in RSS feeds).

---
### 📋 `<aside>` – Tangential Content

Holds content indirectly related to the main content (e.g., ads, side notes).

#### ✅ Syntax

```html
<aside>
  <h3>Related Links</h3>
  <ul>
    <li><a href="#">Resource 1</a></li>
  </ul>
</aside>
```

🧠 Appears in sidebars or secondary panels.

---
### 🎫 `<header>` – Introductory Content

Represents the header of a page or section (can contain logo, nav, titles).

#### ✅ Syntax

```html
<header>
  <h1>Website Title</h1>
  <nav>...</nav>
</header>
```

🧠 Can be used multiple times for page and section headers.

---
### 🧾 `<footer>` – Footer Section

Defines footer content for a section or page (like contact info, copyright).

#### ✅ Syntax

```html
<footer>
  <p>&copy; 2025 My Website. All rights reserved.</p>
</footer>
```

🧠 Also reusable per section or full document.

---
### 📌 `<main>` – Primary Page Content

Represents the dominant content of a web page.

#### ✅ Syntax

```html
<main>
  <h2>Main Content</h2>
  <p>This content is unique to this page.</p>
</main>
```

🧠 Should only be used **once** per page.

### 🎯 Real Page Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic Tags Example</title>
</head>
<body>

  <header>
    <h1>My Blog</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#posts">Posts</a>
    </nav>
  </header>

  <main>
    <section>
      <article>
        <h2>First Blog Post</h2>
        <p>This is the content of the blog post...</p>
      </article>
    </section>

    <aside>
      <h3>Recommended Articles</h3>
      <ul>
        <li><a href="#">Post A</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>Contact: info@example.com</p>
  </footer>

</body>
</html>
```

### ✅ Summary Table

| Tag       | Purpose                                      |
|-----------|----------------------------------------------|
| `<nav>`   | Navigation links                             |
| `<section>`| Thematic grouping with heading              |
| `<article>`| Standalone, reusable content                |
| `<aside>` | Indirectly related side content              |
| `<header>`| Page or section header                       |
| `<footer>`| Page or section footer                       |
| `<main>`  | Main content of the page (used once)         |


#### 🔗 **[View Practical Example](../Practical-Examples/symantic_tags.html)**
---
## ✍️ HTML Text Formatting Tags

HTML provides various tags to format, emphasize, and display text content in structured and meaningful ways.

### 🗂️ Summary Table of Text Formatting Tags

| Tag         | Purpose                             |
|--------------|--------------------------------------|
| `<strong>`   | Bold, semantically important text    |
| `<em>`       | Italic, emphasized text              |
| `<b>`        | Bold (no semantic importance)        |
| `<i>`        | Italic (no semantic importance)      |
| `<u>`        | Underlined text                      |
| `<s>`        | Strikethrough (deprecated meaning)   |
| `<mark>`     | Highlighted text                     |
| `<small>`    | Smaller text                         |
| `<del>`      | Deleted text                         |
| `<ins>`      | Inserted text                        |
| `<sub>`      | Subscript text                       |
| `<sup>`      | Superscript text                     |
| `<abbr>`     | Abbreviation with tooltip            |
| `<kbd>`      | Keyboard input                       |
| `<pre>`      | Preformatted (whitespace-preserved)  |
| `<code>`     | Inline code                          |
| `<var>`      | Variable in programming/Math         |
| `<time>`     | Machine-readable time value          |

### 🔹 Bold & Italic

| Tag         | Description                             |
|-------------|-----------------------------------------|
| `<strong>`  | Bold and semantically important text    |
| `<em>`      | Italic and emphasized text              |
| `<b>`       | Bold without semantic meaning           |
| `<i>`       | Italic without semantic meaning         |

```html
<strong>This is bold</strong>
<em>This is italic</em>
<b>This is also bold</b>
<i>This is also italic</i>
```

### 🔹 Underline & Strikethrough

| Tag   | Description                      |
|--------|----------------------------------|
| `<u>`  | Underlined text                  |
| `<s>`  | Strikethrough (no longer relevant) |
| `<del>`| Deleted content                  |
| `<ins>`| Inserted content (underlined)    |

```html
<u>Underlined</u>
<s>Deprecated Text</s>
<del>Old Price</del>
<ins>New Text</ins>
```

### 🔹 Highlighting, Small, and Time

| Tag        | Description                      |
|-------------|----------------------------------|
| `<mark>`    | Highlights part of the text      |
| `<small>`   | Smaller font size text           |
| `<time>`    | Machine-readable datetime        |

```html
<mark>Important</mark>
<small>Note: terms apply</small>
<time datetime="2025-07-15">July 15, 2025</time>
```

### 🔹 Subscript & Superscript

| Tag     | Description                              |
|----------|------------------------------------------|
| `<sub>`  | Subscript text (e.g., H<sub>2</sub>O)    |
| `<sup>`  | Superscript text (e.g., E = mc<sup>2</sup>) |


### 🔹 Code, Keyboard, and Variables

| Tag     | Description                         |
|----------|-------------------------------------|
| `<code>`| Inline code snippet                 |
| `<kbd>` | Keyboard input                      |
| `<var>` | Variable name or placeholder        |

```html
<code>console.log("Hello")</code>
<kbd>Ctrl</kbd> + <kbd>C</kbd>
<var>x</var> = <var>y</var> + 10
```

### 🔹 Abbreviations & Preformatted Text

| Tag       | Description                                   |
|------------|-----------------------------------------------|
| `<abbr>`   | Abbreviation with tooltip via `title`         |
| `<pre>`    | Preserves whitespace and line breaks          |

```html
<abbr title="HyperText Markup Language">HTML</abbr>

<pre>
This is
    exactly how
        it looks!
</pre>
```

### 🎨 Inline Style Example (Avoid in production)

```html
<p style="color: red; font-weight: bold;">This is red and bold</p>
```

> 📝 Use CSS for maintainability. Use inline styles for quick testing only.

### ✅ Summary

- Use semantic tags like `<strong>`, `<em>`, `<mark>` for meaning.
- Prefer CSS for styling.
- Avoid deprecated or purely visual tags unless necessary.

🔗 **[View Practical Example](../Practical-Examples/text_formatting_tags.html)**
--- 
## 🚫 HTML Empty Elements (Self-Closing Tags)

HTML **empty elements** (also called **self-closing tags**) do not have any content or closing tag. They are written in the form:

```html
<tagname />
```
### 📋 List of Common HTML Empty Elements
| Tag        | Description                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------- |
| `<area>`   | Defines a clickable area inside an image map                                                      |
| `<base>`   | Specifies the base URL for all relative URLs in the document                                      |
| `<br>`     | Inserts a single line break                                                                       |
| `<col>`    | Specifies column properties for a group of columns in a table                                     |
| `<embed>`  | Embeds external resources like multimedia or plugins                                              |
| `<hr>`     | Represents a horizontal rule or thematic break                                                    |
| `<img>`    | Embeds an image                                                                                   |
| `<input>`  | Creates interactive input controls in forms                                                       |
| `<link>`   | Defines the relationship between the current document and an external resource (e.g., stylesheet) |
| `<meta>`   | Provides metadata such as character set, author, viewport, etc.                                   |
| `<param>`  | Specifies parameters for embedded plugins                                                         |
| `<source>` | Specifies multiple media resources for `<audio>` or `<video>` elements                            |
| `<track>`  | Specifies text tracks for media elements (e.g., subtitles for `<video>`)                          |
| `<wbr>`    | Suggests a line break opportunity inside a word                                                   |

> ✅ These tags are essential for layout, multimedia, metadata, and enhancing the behavior of web content.

---
## 🧩 Final HTML Essentials – Small but Crucial Topics

These are the often-overlooked but highly important parts of writing clean, accessible, and well-performing HTML documents.

---
### ✅ 1. `<!DOCTYPE html>` – Doctype Declaration

```html
<!DOCTYPE html>
```

- Declares the document as **HTML5**.
- Must be the **very first line** in an HTML file.
- Helps browsers render the page in **standards mode**.

---
### 💬 2. HTML Comments

```html
<!-- This is a comment -->
```

- Used to **explain code** or leave notes for developers.
- **Ignored by browsers**.
- Not shown to users.

#### 🔗 **[View Practical Example](../Practical-Examples/self_closing_tags.html)**
---
### 📌 3. HTML Entities (Extended)
Used to display reserved characters, special punctuation, symbols, and accents.

| Entity     | Output | Description                    |
| ---------- | ------ | ------------------------------ |
| `&nbsp;`   |        | Non-breaking space             |
| `&lt;`     | <      | Less-than symbol               |
| `&gt;`     | >      | Greater-than symbol            |
| `&amp;`    | &      | Ampersand                      |
| `&quot;`   | "      | Double quote                   |
| `&apos;`   | '      | Apostrophe / single quote      |
| `&cent;`   | ¢      | Cent sign                      |
| `&pound;`  | £      | Pound sign                     |
| `&yen;`    | ¥      | Yen sign                       |
| `&euro;`   | €      | Euro sign                      |
| `&copy;`   | ©      | Copyright                      |
| `&reg;`    | ®      | Registered trademark           |
| `&trade;`  | ™      | Trademark                      |
| `&deg;`    | °      | Degree symbol                  |
| `&plusmn;` | ±      | Plus-minus sign                |
| `&para;`   | ¶      | Paragraph mark                 |
| `&sect;`   | §      | Section symbol                 |
| `&hellip;` | …      | Horizontal ellipsis            |
| `&mdash;`  | —      | Em dash                        |
| `&ndash;`  | –      | En dash                        |
| `&bull;`   | •      | Bullet symbol                  |
| `&lsquo;`  | ‘      | Left single quotation mark     |
| `&rsquo;`  | ’      | Right single quotation mark    |
| `&ldquo;`  | “      | Left double quotation mark     |
| `&rdquo;`  | ”      | Right double quotation mark    |
| `&laquo;`  | «      | Left-pointing angle quotation  |
| `&raquo;`  | »      | Right-pointing angle quotation |
| `&times;`  | ×      | Multiplication sign            |
| `&divide;` | ÷      | Division sign                  |

#### 🔗 **[View Practical Example](../Practical-Examples/entities.html)**
--- 
### 🌐 4. Meta Tags in `<head>`

Commonly used for SEO, responsiveness, and page metadata.

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Learn HTML with full notes">
<meta name="author" content="Your Name">
```

| Meta Name       | Purpose                        |
|------------------|-------------------------------|
| `charset`        | Character encoding             |
| `viewport`       | Responsive behavior on devices |
| `description`    | SEO description for the page   |
| `author`         | Page creator's name            |

---
### 📐 5. Semantic vs Non-Semantic Tags

| Semantic Tag    | Purpose                              |
|------------------|---------------------------------------|
| `<header>`       | Defines page or section header        |
| `<footer>`       | Footer section                        |
| `<nav>`          | Navigation menu                       |
| `<main>`         | Main content area                     |
| `<article>`      | Independent content block             |
| `<section>`      | Thematic grouping of content          |

**Non-Semantic Examples:** `<div>`, `<span>` – no meaning by themselves.

> ✅ Use semantic tags for better SEO and accessibility.

---
### ♿ 6. Accessibility Basics

### ✅ Important Attributes

| Attribute   | Use Case                               |
|-------------|-----------------------------------------|
| `alt`       | Describes images for screen readers     |
| `aria-label`| Gives screen readers context            |
| `role`      | Helps define the role of elements       |

**Example:**

```html
<img src="cat.jpg" alt="A cute orange cat">
```
---
### 🚫 7. Deprecated Tags
These tags are outdated and should not be used in modern HTML. Use CSS and semantic HTML elements instead.
| Deprecated Tag           | Use Instead Of                                     |
| ------------------------ | -------------------------------------------------- |
| `<font>`                 | CSS: `font-family`, `font-size`, `color`           |
| `<center>`               | CSS: `text-align: center`                          |
| `<big>` / `<small>`      | CSS: `font-size`                                   |
| `<b>`                    | `<strong>` or CSS: `font-weight`                   |
| `<i>`                    | `<em>` or CSS: `font-style`                        |
| `<u>`                    | CSS: `text-decoration: underline`                  |
| `<strike>`               | CSS: `text-decoration: line-through`               |
| `<tt>`                   | CSS: `font-family: monospace`                      |
| `<marquee>`              | CSS animations (`@keyframes`)                      |
| `<blink>`                | CSS animations (discouraged effect)                |
| `<s>`                    | `<del>` or CSS                                     |
| `<dir>`                  | `<ul>` or `<ol>`                                   |
| `<applet>`               | `<object>` or `<embed>`                            |
| `<acronym>`              | `<abbr>`                                           |
| `<basefont>`             | CSS                                                |
| `<frame>` / `<frameset>` | Use `<iframe>` or modern layout (CSS Grid/Flexbox) |


> ⚠️ These tags may still work in some browsers but are not supported in HTML5.
> ✅ Always prefer semantic HTML and CSS for styling and structure.<br>

#### 🔗 **[View Practical Example](../Practical-Examples/Deprecated_Tags.html)**
---
### 📱 8. Responsive Design Basics

- Use the viewport meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- Use **relative units** (%, em, rem) instead of fixed (px).
- Use **media queries** in CSS:

```css
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

---
### 🔄 9. Best Practices for Clean HTML

- Use semantic tags.
- Indent properly.
- Use lowercase for tag and attribute names.
- Close all tags.
- Use `alt` on images.
- Keep your code readable and maintainable.

✅ These final topics complete your foundational HTML learning. Master them, and you'll write code that's clean, accessible, and ready for the modern web!


---
# Some Important Topic
---
## 🔗 Anchor Tag with Clickable Image

You can use the `<a>` tag to make an image clickable, allowing users to navigate to another page or website when they click the image.

### ✅ HTML Example

```html
<!-- Clickable Image -->
<a href="https://www.example.com" target="_blank">
  <img src="logo.png" alt="Clickable Logo" width="200" height="100">
</a>
```

### 🔍 Explanation

| Element                    | Description                                                    |
|----------------------------|----------------------------------------------------------------|
| `<a href="...">`           | Anchor tag to wrap the image and make it clickable             |
| `target="_blank"`          | Opens the link in a new tab (optional but common)              |
| `<img src="..." alt="...">`| Image to be displayed and made clickable                       |
| `width` / `height`         | Control the size of the image (can also be done via CSS)       |

### 🎯 Real-World Example

```html
<a href="https://youtube.com" target="_blank">
  <img src="youtube-logo.png" alt="YouTube Logo" width="150">
</a>
```

### 📝 Best Practices

- Always use meaningful `alt` text for accessibility.
- Use `target="_blank"` with `rel="noopener noreferrer"` for external links.
- Keep image sizes optimized for fast loading.

### 💡 Bonus: Combine with Image Map (Optional)

You can combine the `<a>` tag with an image map (`<map>`) for multiple clickable areas within a single image. Let me know if you'd like that too!
#### 🔗 **[View Practical Example](../Practical-Examples/img_tag.html)**

---
## 🗺️ HTML Image Map with `<map>` and `<area>` Tags

HTML image maps allow you to define clickable areas within a single image using the `<map>` and `<area>` elements.

### 🔧 Syntax

```html
<img src="world-map.jpg" alt="World Map" usemap="#worldmap">

<map name="worldmap">
  <area shape="rect" coords="34,44,270,350" href="https://example.com/usa" alt="USA">
  <area shape="circle" coords="400,200,60" href="https://example.com/brazil" alt="Brazil">
  <area shape="poly" coords="130,160,180,200,160,240,100,220" href="https://example.com/india" alt="India">
</map>
```

### 📌 Attributes of `<area>`

| Attribute | Description |
|-----------|-------------|
| `shape`   | The shape of the area (`rect`, `circle`, `poly`) |
| `coords`  | Coordinates for the area (based on shape) |
| `href`    | The link to navigate when area is clicked |
| `alt`     | Alternative text for the area |
| `target`  | Where to open the link (`_blank`, `_self`) |

### 🎯 Shape and Coords Guide

- **Rectangle (`rect`)**: `coords="x1,y1,x2,y2"` (top-left to bottom-right)
- **Circle (`circle`)**: `coords="x,y,radius"` (center and radius)
- **Polygon (`poly`)**: `coords="x1,y1,x2,y2,x3,y3,...,xn,yn"`

### ✅ Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Image Map Example</title>
</head>
<body>

  <h2>Clickable World Map</h2>
  <img src="world-map.jpg" alt="World Map" usemap="#worldmap">

  <map name="worldmap">
    <area shape="rect" coords="34,44,270,350" href="https://example.com/usa" alt="USA" target="_blank">
    <area shape="circle" coords="400,200,60" href="https://example.com/brazil" alt="Brazil" target="_blank">
    <area shape="poly" coords="130,160,180,200,160,240,100,220" href="https://example.com/india" alt="India" target="_blank">
  </map>

</body>
</html>
```

📝 **Tip**: Use image editing tools or online HTML image map generators to get coordinates.
#### 🔗 **[View Practical Example](../Practical-Examples/img_tag.html)**




# 🚀 Emmet Shortcuts for HTML (With Examples)

> Emmet is a powerful toolkit that allows you to write HTML faster using abbreviations.

---

## 🔹 Basic HTML Tags

| Abbreviation | Description                     | Output Example                             |
|--------------|----------------------------------|---------------------------------------------|
| `html:5`     | Basic HTML5 boilerplate          | `<!DOCTYPE html> ... </html>`               |
| `!`          | Shorthand for `html:5`           | HTML5 skeleton                             |
| `p`          | Paragraph tag                    | `<p></p>`                                   |
| `h1`         | Heading                          | `<h1></h1>`                                 |
| `img`        | Image tag with src and alt       | `<img src="" alt="">`                       |
| `a`          | Anchor tag                       | `<a href=""></a>`                           |
| `input`      | Input tag                        | `<input type="text">`                       |

---

## 🔹 Tag with Class / ID

| Abbreviation       | Description                  | Output                             |
|--------------------|-------------------------------|-------------------------------------|
| `div.container`    | `div` with a class            | `<div class="container"></div>`    |
| `p#para`           | `p` with an id                | `<p id="para"></p>`                |
| `span.red.bold`    | `span` with two classes       | `<span class="red bold"></span>`  |

---

## 🔹 Nesting Tags

| Abbreviation     | Description                     | Output                                          |
|------------------|----------------------------------|-------------------------------------------------|
| `ul>li`          | `li` inside `ul`                | `<ul><li></li></ul>`                           |
| `div>p`          | `p` inside `div`                | `<div><p></p></div>`                           |
| `section>h1+p`   | `h1` and `p` inside `section`   | `<section><h1></h1><p></p></section>`          |

---

## 🔹 Multiplication (*)

| Abbreviation     | Description                     | Output                                           |
|------------------|----------------------------------|--------------------------------------------------|
| `ul>li*3`        | 3 `li` tags inside `ul`         | `<ul><li></li><li></li><li></li></ul>`          |
| `p*2`            | Two paragraphs                  | `<p></p><p></p>`                                |

---

## 🔹 Siblings (+)

| Abbreviation     | Description                     | Output                                         |
|------------------|----------------------------------|------------------------------------------------|
| `h1+p`           | `h1` followed by `p`            | `<h1></h1><p></p>`                             |
| `ul+ol`          | `ul` then `ol`                  | `<ul></ul><ol></ol>`                           |

---

## 🔹 Grouping ( )

| Abbreviation         | Description                        | Output                                                  |
|----------------------|-------------------------------------|----------------------------------------------------------|
| `(header>h1)+footer` | Group `header>h1` then add `footer` | `<header><h1></h1></header><footer></footer>`          |

---

## 🔹 Attributes in Elements

| Abbreviation                    | Description                        | Output                                      |
|---------------------------------|-------------------------------------|---------------------------------------------|
| `a[href="https://example.com"]` | Anchor with href                   | `<a href="https://example.com"></a>`        |
| `input[type=checkbox]`          | Input with type checkbox           | `<input type="checkbox">`                   |
| `img[src="image.jpg" alt="pic"]`| Image with src and alt             | `<img src="image.jpg" alt="pic">`           |

---

## 🔹 Text Content

| Abbreviation       | Description                    | Output                                      |
|--------------------|-------------------------------|---------------------------------------------|
| `p{Hello World}`   | Paragraph with text            | `<p>Hello World</p>`                         |
| `a{Click Here}`    | Link with text                 | `<a href="">Click Here</a>`                 |
| `button{Submit}`   | Button text                    | `<button>Submit</button>`                   |

---

## 🔹 Lists, Tables, and Forms

| Abbreviation       | Description                     | Output                                        |
|--------------------|----------------------------------|-----------------------------------------------|
| `ul>li.item$*3`    | List with class + numbering      | `<li class="item1"></li><li class="item2"></li>` |
| `table>tr*2>td*3`  | 2 rows, each with 3 columns      | Standard table structure                     |
| `form>input:text+input:submit` | Form with text and submit fields | `<form><input type="text"><input type="submit"></form>` |

---

## 🔹 Special Inputs

| Abbreviation        | Output                                       |
|---------------------|----------------------------------------------|
| `input:password`    | `<input type="password">`                   |
| `input:email`       | `<input type="email">`                      |
| `input:radio`       | `<input type="radio">`                      |
| `input:checkbox`    | `<input type="checkbox">`                   |
| `input:submit`      | `<input type="submit">`                     |
| `input:text`        | `<input type="text">`                       |

---

## 💡 Bonus: Common Patterns

```emmet
div#main.container>header>h1{Welcome}+nav>ul>li*3>a{Link $}
```

```html
<div id="main" class="container">
  <header>
    <h1>Welcome</h1>
    <nav>
      <ul>
        <li><a href="">Link 1</a></li>
        <li><a href="">Link 2</a></li>
        <li><a href="">Link 3</a></li>
      </ul>
    </nav>
  </header>
</div>
```



