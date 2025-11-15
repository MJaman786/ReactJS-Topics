## 📘 Introduction to HOOKS

**Hooks** are special functions in React that let you **use state and other React features without writing a class component**.

Hooks were introduced in **React 16.8** to make functional components more powerful.  
Before hooks, only class components could manage state or use lifecycle methods.  
Now, with hooks — **functional components can do everything** that class components can.

---

## ⚙️ Why Hooks?

Traditionally, we used class components like this:

```jsx
class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
````

This works, but is **verbose** and harder to reuse logic.

Hooks make this simpler 👇

---

## ✅ Example: Using Hooks in a Functional Component

Here’s the same counter example using the **`useState`** hook.

```jsx
import React, { useState } from "react";

function Counter() {
  // useState returns an array with two values:
  // 1️⃣ current state value
  // 2️⃣ function to update it
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Counter using Hooks</h2>
      <p>Count Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
```

That’s it! No classes, no `this`, just clean functional code.

---

## 📁 Project Folder Structure (Example)

```bash
react-hooks-demo/
│
├── src/
│   ├── components/
│   │   └── Counter.js
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md
```

### `App.js`

```jsx
import React from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>React Hooks Demo</h1>
      <Counter />
    </div>
  );
}

export default App;
```

### `index.js`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

---

## 🧠 Commonly Used Hooks

| Hook                  | Purpose                                                          |
| --------------------- | ---------------------------------------------------------------- |
| `useState`            | Manage state in functional components                            |
| `useEffect`           | Handle side effects (API calls, subscriptions, timers, etc.)     |
| `useContext`          | Access global data without props drilling                        |
| `useRef`              | Access DOM elements or store mutable values                      |
| `useMemo`             | Optimize performance by memoizing calculations                   |
| `useCallback`         | Optimize re-rendering by memoizing functions                     |
| `useReducer`          | Manage complex state logic (alternative to `useState`)           |
| `useLayoutEffect`     | Similar to `useEffect`, but runs synchronously after DOM updates |
| `useImperativeHandle` | Customize ref behavior in child components                       |

---

## 💡 Example: Combining Hooks

Here’s a small example using **`useState`** + **`useEffect`**.

```jsx
import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // cleanup function (runs when component unmounts)
    return () => clearInterval(timer);
  }, []);

  return <h3>Timer: {count} seconds</h3>;
}

export default Timer;
```

---

## 🚀 Rules of Hooks

1. **Only call hooks at the top level**

   * ❌ Don’t call inside loops, conditions, or nested functions.
   * ✅ Always call them in the main body of the component.

2. **Only call hooks inside React functions**

   * ❌ Don’t call hooks in regular JavaScript functions.
   * ✅ Call inside a React function component or custom hook.

3. **Custom Hooks** start with `use`

   * Example: `useFetch()`, `useToggle()`, etc.

---

## 🧩 Custom Hook Example

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
}

export default useFetch;
```

Usage:

```jsx
import React from "react";
import useFetch from "./useFetch";

function Users() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users &&
          users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default Users;
```

---

## 🗣️ Hooks – Interview Perspective

### 🔹 Q1: Why were hooks introduced?

**Answer:**
To simplify state management and side effects in functional components without needing classes.

---

### 🔹 Q2: What are the rules of hooks?

**Answer:**

1. Call hooks only at the top level.
2. Call hooks only in React function components or custom hooks.

---

### 🔹 Q3: Difference between `useEffect` and `useLayoutEffect`?

**Answer:**
`useEffect` runs **after** the DOM updates (asynchronously).
`useLayoutEffect` runs **before** the browser paints the screen (synchronously).
Use `useLayoutEffect` only when you need to measure DOM layout before painting.

---

### 🔹 Q4: Can we use hooks inside class components?

**Answer:**
❌ No. Hooks only work in functional components.

---

### 🔹 Q5: What are custom hooks?

**Answer:**
Custom hooks are **user-defined hooks** that encapsulate reusable logic and start with `use`.

---

## 🧭 Best Practices

✅ Use hooks to simplify and reuse logic.
✅ Keep hook dependencies accurate in `useEffect` arrays.
✅ Prefer `useReducer` for complex state logic.
✅ Extract repetitive logic into custom hooks.
✅ Don’t overuse hooks — keep components readable.

---

## 🎯 Summary

* Hooks make functional components powerful.
* Common hooks: `useState`, `useEffect`, `useContext`.
* Follow the **Rules of Hooks**.
* Use **Custom Hooks** for reusable logic.
* Hooks = cleaner, reusable, testable React code.

---

> 🧩 *“Hooks don’t replace classes — they replace the need for them.”*

