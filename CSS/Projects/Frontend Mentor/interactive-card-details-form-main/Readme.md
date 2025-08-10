# 💳 Interactive Card Details Form

An **Interactive Card Details Form** built with **HTML5**, **CSS3**, and **JavaScript**.  
The project dynamically updates a card preview as the user fills in the form, formats card numbers, and displays a confirmation message upon submission.

## 💳 Live Preview
- [Live Link](https://vicky-yadav-01.github.io/interactive-card-details-form-main/)

---

## 🚀 Features

- **Real-time Card Preview** – Updates card number, holder name, expiration date, and CVC as the user types.
- **Input Formatting** –  
  - Card number automatically formatted in groups of 4 digits.  
  - Expiration date restricted to MM/YY format.  
  - CVC allows only numeric values.
- **Responsive Design** – Works seamlessly on both desktop and mobile devices.
- **Form Validation** – Required fields prevent empty submissions.
- **Confirmation Screen** – Displays a "Thank You" message after form submission with a reset option.
---

## 📂 Project Structure

```
├── index.html       # Main HTML file
├── style.css        # Styling and responsive layout
├── script.js        # Interactive functionality
├── images/          # Frontend Images
├── Designs/         # Final Designs
└── README.md        # Project documentation
```

---

## 🛠️ Technologies Used

- **HTML5** – Structure and semantic markup
- **CSS3** – Styling, layout, and responsive design
- **JavaScript (ES6)** – DOM manipulation and event handling
- **Google Fonts** – Space Grotesk font family

---

## 📋 How It Works

1. **Card Number Input**
   - Removes non-numeric characters
   - Formats as `0000 0000 0000 0000`
2. **Card Holder Name**
   - Updates in uppercase
3. **Expiration Date**
   - Separates month and year inputs
   - Restricts to numeric values
4. **CVC**
   - Allows only numbers
5. **Confirm Button**
   - Hides the form
   - Shows "Thank You" message
6. **Continue Button**
   - Resets all inputs
   - Restores default card preview

---

## 📱 Responsive Design

- **Desktop:** `1440px` layout with card images on the left and form on the right.
- **Mobile:** `375px` layout with stacked cards and form below.

---

## 🎯 Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/interactive-card-form.git
   ```
2. Navigate to the project folder:
   ```bash
   cd interactive-card-form
   ```
3. Open `index.html` in your browser.

---

## 📌 Future Improvements

- Add full form validation for incorrect inputs
- Support for more card types (Visa, MasterCard detection)
- Smooth animations between form and confirmation state

---

## 📜 License

This project is for **educational purposes** and inspired by the  
[Frontend Mentor – Interactive Card Details Form Challenge](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).

---


## 🖼️ Screenshots

### Desktop View
![Desktop View](./Designs/Desktop%20View.png)
![Desktop Active](./Designs/Desktop%20Active.png)
![Desktop Complete](./Designs/Desktop%20Complete.png)

### Mobile View
![Mobile View](./Designs/Mobile%20View.jpg)
![Mobile Active](./Designs/Mobile%20Active.jpg)
![Mobile Complete](./Designs/Mobile%20Complete.jpg)
