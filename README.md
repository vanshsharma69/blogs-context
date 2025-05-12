Here's a professional and detailed `README.md` for your blog project using React Context API and Tailwind CSS. It includes descriptions, setup instructions, and embedded screenshots.

---

## 📝 BLOGZ WEBSITE

A responsive blog listing web application built using **React**, the **Context API** for state management, and **Tailwind CSS** for styling. The project showcases pagination, dynamic data rendering with `useContext()`, and mobile responsiveness.

---

### 📸 Screenshots

## ✅ Deskstop View 

![Mobile Screenshot](/Screenshot%202025-05-12%20104305.png)

![Tablet Screenshot](/Screenshot%202025-05-12%20104339.png)

## ✅ Mobile View

![Desktop Screenshot](/Screenshot%202025-05-12%20104402.png)

---

### 🛠️ Features

* ⚛️ React with functional components
* 📦 Global state management using `Context API`
* 🔄 Pagination support with previous/next buttons
* 🎨 Tailwind CSS for responsive styling
* 📱 Mobile-first responsive design
* 🧠 Uses the `useContext()` hook for accessing global state

---

### 📁 Project Structure

```bash
src/
│
├── components/
│   ├── Blogs.jsx        # Blog listing UI
│   ├── Spinner.jsx      # Loading spinner
│
├── Context/
│   └── AppContext.jsx   # Global state using Context API
│
├── App.js               # Main app with routing and layout
└── index.js             # App entry point
```

---

### 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/blogz-website.git
cd blogz-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
# or
npm start
```

---

### 🧩 Technologies Used

* **React JS** – Frontend framework
* **Context API** – Global state management
* **Tailwind CSS** – Utility-first CSS framework
* **JavaScript (ES6+)**

---

### 📱 Responsive Design Notes

This project follows **mobile-first design** using Tailwind’s responsive breakpoints. Styles without a prefix apply to mobile by default.

Example:

```jsx
<p className="text-[11px] sm:text-[9px]">
  {/* 11px on small screens, 9px on screens ≥640px */}
</p>
```

---

### 🙌 Author

* **Your Name**
* GitHub: [@vanshsharma69](https://github.com/vanshsharma69)