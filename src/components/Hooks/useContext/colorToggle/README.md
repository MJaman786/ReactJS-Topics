# #️⃣ File 1 — `ColorProvider.jsx`

### ✔ Purpose

This file creates a **Context** that stores the current theme (`light` or `dark`).
It also saves the theme in **localStorage** so it does not reset on page reload.

---

## ✅ **Code**

```jsx
import { createContext, useState, useEffect } from "react";

export const ColorContext = createContext();

export default function ColorProvider({ children }) {

  // Load theme from localStorage when app starts
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Toggle theme light <-> dark
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // Save theme in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ColorContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ColorContext.Provider>
  );
}
```

---

## 📝 **Simple Explanation (for README)**

* `createContext()` → creates a context to share the theme across components.
* `useState()` → stores the current theme.

  * It first checks localStorage for a saved theme.
  * If nothing is found, it uses `"light"` by default.
* `toggleTheme()` → switches between **light** and **dark** mode.
* `useEffect()` → every time the theme changes, it saves the new theme in **localStorage**.
* `<ColorContext.Provider>` → makes `theme` and `toggleTheme` available to all child components.
* `{children}` → whatever we wrap inside ColorProvider will receive the theme.

---

# #️⃣ File 2 — `App.jsx`

### ✔ Purpose

This file **uses** the theme from Context and applies different background/text colors based on the current theme.

---

## ✅ **Code**

```jsx
import { useContext } from 'react'
import './App.css'
import { ColorContext } from './context/colorContext'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

export default function App() {
  const { theme, toggleTheme } = useContext(ColorContext);

  // Styling based on theme
  let style = {
    backgroundColor: theme === 'light' ? '#fff' : '#000',
    color: theme === 'light' ? '#000' : '#fff'
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column main-container" style={style}>
        <h1>Click me To toggle</h1>

        <button
          className="p-2 rounded btn btn-primary"
          onClick={toggleTheme}
        >
          Switch to : {theme === 'light' ? 'dark' : 'light'}
        </button>
      </div>
    </>
  )
}
```

---

## 📝 **Simple Explanation (for README)**

* `useContext(ColorContext)` → gets the current theme and the function to toggle it.
* `style` → decides background and text color based on the theme.

  * Light theme → white background, black text
  * Dark theme → black background, white text
* The button calls `toggleTheme()` to switch theme.
* Bootstrap classes are used for styling.

---

# 🎉 Final Summary (README Ready)

### **What this project does**

* Toggles between **Light Mode** and **Dark Mode**.
* Saves the selected theme in **localStorage**.
* Theme stays the same even after page reload.

### **How it works**

1. `ColorProvider` creates a theme context and saves the theme in localStorage.
2. `App` reads the theme and updates UI colors based on it.
3. A button allows switching between themes.
4. After switching, the new theme is automatically saved.

---