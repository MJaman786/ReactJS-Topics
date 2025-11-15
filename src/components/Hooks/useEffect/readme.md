# ⚡ React `useEffect` Hook – Complete Guide

## 📘 Introduction

`useEffect` is a React Hook used to perform **side effects** in functional components.

A *side effect* means anything that happens **outside** the normal UI rendering cycle:
- Fetching API data  
- Updating document title  
- Setting timers (setInterval, setTimeout)  
- Subscribing/unsubscribing events  
- Working with browser APIs (localStorage, window events, etc.)

Before hooks, this was done using lifecycle methods like:
- componentDidMount  
- componentDidUpdate  
- componentWillUnmount  

`useEffect` combines all of them into **one powerful hook**.

---

# ⚙ Syntax

```jsx
useEffect(() => {
  // side effect logic here

  return () => {
    // cleanup code here (optional)
  };
}, [dependencies]);
```

### 🔍 Explanation

| Part                   | Meaning                                            |
| ---------------------- | -------------------------------------------------- |
| `() => { ... }`        | Main effect callback (runs after render)           |
| `return () => { ... }` | Cleanup function (runs before re-run & on unmount) |
| `[dependencies]`       | When any dependency changes → effect runs          |

---

# ✅ 1. Simple Example — Run on Every Render

```jsx
useEffect(() => {
  console.log("Component rendered!");
});
```

👉 No dependency array = runs **after every re-render**.

---

# ✅ 2. Run Only Once — On Mount (ComponentDidMount)

```jsx
useEffect(() => {
  console.log("Component mounted!");
}, []); // empty dependency array
```

👉 Runs once when component loads.

---

# 🟡 Intermediate Example — Run When State Changes

```jsx
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`The count is now: ${count}`);
  }, [count]); // effect runs only when 'count' changes

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

---

# 🔥 Intermediate Example — Cleanup (ComponentWillUnmount)

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer running...");
  }, 1000);

  // cleanup
  return () => clearInterval(timer);
}, []);
```

👉 Cleanup prevents memory leaks.

---

# 🟠 Production-Level Example — Fetch API Data

```jsx
import React, { useState, useEffect } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []); // fetch runs only once

  return (
    <div>
      <h2>User List</h2>

      {loading ? <p>Loading...</p> : null}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
```

### ✔ Production Concepts included:

* async/await inside useEffect
* cleanup (if needed)
* loading state
* API fetching pattern used in real apps

---

# 🧩 Production-Level Example — Listening to Window Events

```jsx
import React, { useState, useEffect } from "react";

function WindowTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    window.addEventListener("resize", updateWidth);

    // cleanup
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return <h2>Window Width: {width}px</h2>;
}

export default WindowTracker;
```

This is how real projects handle event listeners.

---

# 🚀 Example — useEffect With LocalStorage (Real Production Use)

```jsx
function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]); // runs only when theme changes

  return (
    <>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </>
  );
}
```

---

# 📁 Project Folder Structure

```
react-useeffect-demo/
│
├── src/
│   ├── components/
│   │   ├── Counter.js
│   │   ├── UsersList.js
│   │   ├── WindowTracker.js
│   │   └── ThemeSwitcher.js
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md
```

---

# 🧠 Interview Perspective (Very Important)

### 🔹 Q1: Why do we use `useEffect`?

**Answer:**
To perform side effects like API calls, subscriptions, updating DOM, timers, or cleaning up resources.

---

### 🔹 Q2: When does `useEffect` run?

**Answer:**

* After every render (no dependency array)
* Only on mount (`[]`)
* On specific state changes (`[dep1, dep2]`)

---

### 🔹 Q3: Why do we need cleanup in useEffect?

**Answer:**
To avoid memory leaks from:

* timers
* event listeners
* subscriptions
* intervals

---

### 🔹 Q4: Why is `async` not allowed directly in useEffect?

**Answer:**
Because the effect callback should return either **nothing** or a **cleanup function**, not a Promise.

Correct way:

```jsx
useEffect(() => {
  async function fetchData() { ... }
  fetchData();
}, []);
```

---

### 🔹 Q5: Difference between `useEffect` and `useLayoutEffect`?

| useEffect                  | useLayoutEffect               |
| -------------------------- | ----------------------------- |
| Runs **after** paint       | Runs **before** paint         |
| Non-blocking               | Blocking                      |
| Used for API calls, timers | Used for measuring DOM layout |
| Faster                     | More performance cost         |

---

# 🟢 Best Practices

✔ Keep dependency array accurate
✔ Use cleanup functions to prevent memory leaks
✔ Don’t put async directly in useEffect
✔ Split multiple concerns into multiple useEffect hooks
✔ Prefer `useEffect` for API calls, not inside event handlers

---

# 🎯 Summary

* `useEffect` handles **side effects** in functional components.
* Acts like **componentDidMount + componentDidUpdate + componentWillUnmount**.
* Powerful for real-world apps (API calls, timers, event listeners, localStorage).
* Cleanup prevents memory issues.
* Dependency array controls when effect runs.

---

> 🧩 *“useEffect controls everything that happens outside React’s UI — it’s the brain of side effects.”*
