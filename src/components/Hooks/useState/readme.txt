# 🟢 React `useState` Hook – Complete Guide

## 📘 Introduction

`useState` is the most basic and commonly used **React Hook** that allows functional components to **manage state**.  
It replaces the need for `this.state` and `this.setState` in class components.

**Key Points:**
- Introduced in React 16.8.
- Can be used multiple times in a single component.
- Returns an array with **2 values**: `[stateValue, setStateFunction]`.

---

## ⚙️ Syntax

```jsx
const [state, setState] = useState(initialValue);
````

**Explanation:**

* `state` → Current state value.
* `setState` → Function to update the state.
* `initialValue` → Optional initial state (number, string, boolean, array, object, etc.).
* Updating state using `setState` **re-renders the component**.

---

## ✅ Simple Example

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // initial value = 0

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
```

**Explanation:**

* Clicking a button calls `setCount(newValue)` → React updates the component with the new `count`.

---

## 🟡 Intermediate Example: Managing Multiple States

```jsx
import React, { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(25);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => setName("Jane Smith")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}

export default UserProfile;
```

**Explanation:**

* You can have **multiple `useState` hooks** for different state variables.
* Each `setState` only updates the corresponding state.

---

## 🟠 Advanced Example: State as Object (Production-Level)

```jsx
import React, { useState } from "react";

function TodoApp() {
  const [todo, setTodo] = useState({ task: "", list: [] });

  const handleChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const addTask = () => {
    if (todo.task.trim() !== "") {
      setTodo({
        task: "",
        list: [...todo.list, { id: Date.now(), name: todo.task }],
      });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo App</h2>
      <input
        type="text"
        value={todo.task}
        onChange={handleChange}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todo.list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

**Explanation:**

* State can be an **object** with multiple properties.
* Always use the **spread operator (`...`)** to maintain previous state when updating.

---

## 📁 Project Folder Structure

```
react-usestate-demo/
│
├── src/
│   ├── components/
│   │   ├── Counter.js
│   │   ├── UserProfile.js
│   │   └── TodoApp.js
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md
```

### `App.js` Example

```jsx
import React from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div>
      <h1>React useState Hook Demo</h1>
      <Counter />
      <UserProfile />
      <TodoApp />
    </div>
  );
}

export default App;
```

---

## 🧠 Interview Perspective

### 🔹 Q1: What is `useState`?

**Answer:**
`useState` is a React Hook used to manage state in functional components.

---

### 🔹 Q2: Can you have multiple `useState` hooks in one component?

**Answer:**
✅ Yes. Each hook manages a separate piece of state.

---

### 🔹 Q3: Difference between `useState` with primitive vs object/array?

**Answer:**

* Primitive: `setCount(newValue)` directly replaces the state.
* Object/Array: Always use **spread operator (`...`)** to preserve other values.

---

### 🔹 Q4: Does `useState` immediately update the state?

**Answer:**
❌ No. `setState` is asynchronous. The updated value is reflected on the next render.

---

### 🔹 Q5: Best practices

* Keep state as simple as possible.
* Use separate `useState` for unrelated values.
* Avoid unnecessary re-renders by splitting state logically.

---

## 🎯 Summary

* `useState` = State management in functional components.
* Syntax: `[state, setState] = useState(initialValue)`.
* Can be primitive, object, array, or multiple states.
* Combine with other hooks for real-world applications.

---

> 🧩 *“useState lets functional components behave like mini stateful classes, but cleaner.”*