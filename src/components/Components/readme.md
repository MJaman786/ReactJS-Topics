# 📘 **React Components – Complete Guide**

# React Components

## 📌 What Are Components?
Components in React are **reusable pieces of UI**.  
A component is like a **function** that returns **HTML (JSX)**.

They help you break down your UI into **small, manageable, reusable pieces**.

There are **two main types of components**:
1. **Function Components (Modern, Recommended)**
2. **Class Components (Older, Legacy)**

---

# 1️⃣ Function Components (Most Common)

## ✅ Syntax
```jsx
function ComponentName() {
  return (
    <div>UI here</div>
  );
}

export default ComponentName;
```

### 🔍 Explanation

* The component is just a **JavaScript function**.
* Must start with a **capital letter**.
* Must **return JSX** (HTML-like code).

---

# 2️⃣ Simple Example

## **App.jsx**

```jsx
function Welcome() {
  return <h1>Hello User!</h1>;
}

export default Welcome;
```

---

# 3️⃣ Passing Props to Components

### Parent → Child

## Parent.jsx

```jsx
function Parent() {
  return <Child name="Aman" />;
}
```

## Child.jsx

```jsx
function Child(props) {
  return <h2>Welcome {props.name}</h2>;
}
```

---

# 4️⃣ Ways to Receive Props

## (A) `props` Object

```jsx
function Child(props) {
  return <p>{props.age}</p>;
}
```

## (B) Destructuring in Function Parameters (Most Used)

```jsx
function Child({ age }) {
  return <p>{age}</p>;
}
```

## (C) Destructuring Inside Component Body

```jsx
function Child(props) {
  const { age } = props;
  return <p>{age}</p>;
}
```

---

# 5️⃣ Passing Different Types of Props

### (A) String / Number

```jsx
<Profile name="Aman" age={20} />
```

### (B) Boolean

```jsx
<Button isDisabled={true} />
```

### (C) Array

```jsx
<List items={[1, 2, 3]} />
```

### (D) Object

```jsx
<User data={{ id: 1, username: "aman" }} />
```

### (E) Passing Functions

```jsx
<Child onClickHandler={handleSubmit} />
```

### Receiving Function Prop

```jsx
function Child({ onClickHandler }) {
  return <button onClick={onClickHandler}>Click</button>;
}
```

---

# 6️⃣ **Reusable Component Example**

This is how components are used in real production UIs.

## Button.jsx

```jsx
function Button({ text, onClick, type = "primary" }) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
```

## Using it:

```jsx
<Button text="Login" onClick={loginUser} type="success" />
<Button text="Delete" onClick={deleteItem} type="danger" />
<Button text="Submit" onClick={submitForm} />
```

---

# 7️⃣ **Parent → Child → Parent Communication**

Props normally flow **top → bottom**,
but we can send **data upward** using callback functions.

## Parent.jsx

```jsx
function Parent() {
  const getDataFromChild = (value) => {
    console.log("Child Data:", value);
  };

  return <Child sendData={getDataFromChild} />;
}
```

## Child.jsx

```jsx
function Child({ sendData }) {
  return (
    <button onClick={() => sendData("Hello from Child")}>
      Send Data
    </button>
  );
}
```

---

# 8️⃣ Components Folder Structure (Production Standard)

```
src/
 └── components/
       ├── Button/
       │     ├── index.jsx
       │     ├── Button.css
       │     └── Button.test.js
       ├── Navbar/
       │     └── Navbar.jsx
       └── Card/
             └── Card.jsx
```

This keeps code **clean, scalable, professional**.

---

# 9️⃣ Class Components (Legacy)

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

export default Welcome;
```

Used less now because Hooks replaced them.

---

# 🔥 Interview Perspective

## ❓ What are Components?

A component is a **reusable, independent piece of UI** built using a function or class.

## ❓ Why do we use Components?

* Reusability
* Clean code structure
* Split complex UI into smaller parts
* Easy to maintain

## ❓ Functional vs Class Components?

| Functional           | Class                 |
| -------------------- | --------------------- |
| Use Hooks            | Use lifecycle methods |
| Short, clean code    | Longer & complex      |
| Fast and recommended | Mostly legacy         |

## ❓ What are props?

Props are **inputs** to a component.
Used to **pass data from parent to child**.

## ❓ Are props mutable?

No ❌ props are **read-only**.

## ❓ How can a child send data to parent?

By using a **callback function passed from parent**.

---

# 🎉 Summary

React components:

* Are the **building blocks of UI**
* Support **props** for communication
* Can be **simple** or **highly reusable**
* Should follow a **clean folder structure** for production apps

This knowledge (syntax + examples + interview topics) is **exactly what React developers use in real projects**.
