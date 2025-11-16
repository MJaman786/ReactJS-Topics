# 📘 **React Context API + useContext Hook – Full Guide**

# React Context API + useContext Hook

## 📌 Why Do We Need Context API?
Normally in React, data flows:  
**Parent → Child → Grandchild** through props.

This causes a problem called **"Prop Drilling"**  
= sending props through multiple components even if they don’t need it.

👉 Context API removes prop drilling  
👉 It allows **global data sharing** between components  
(like theme, user info, language, cart info)

---

# 1️⃣ What is Context API?

Context API is a system in React that allows you to:
- Create a **global data store**
- Share data to any component **without props**
- Manage **global state** cleanly

---

# 2️⃣ Steps to Use Context API

There are **3 main steps**:

### ✅ Step 1: Create Context  
### ✅ Step 2: Provide Context (like wrapping)  
### ✅ Step 3: Consume Context using `useContext`

---

# 3️⃣ Step-by-Step Basic Example

## 🔹 Step 1 — Create Context

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

---

## 🔹 Step 2 — Provide Context

```jsx
import { UserContext } from "./UserContext";

function App() {
  const user = "Aman";

  return (
    <UserContext.Provider value={user}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;
```

👉 Now the value `"Aman"` is globally available to all components inside `<UserContext.Provider>`.

---

## 🔹 Step 3 — Use Context (useContext hook)

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Home() {
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}

export default Home;
```

---

# 4️⃣ More Useful Example (Object Data)

```jsx
<UserContext.Provider value={{ name: "Aman", age: 20 }}>
```

Consume it:

```jsx
const { name, age } = useContext(UserContext);
```

---

# 5️⃣ Realistic Example (Simple → Production Style)

## 🌱 Simple Global Theme (Light / Dark)

### themeContext.js

```jsx
import { createContext } from "react";

export const ThemeContext = createContext();
```

---

### App.jsx

```jsx
import { ThemeContext } from "./themeContext";

function App() {
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      <Navbar />
    </ThemeContext.Provider>
  );
}
```

---

### Navbar.jsx

```jsx
import { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Navbar() {
  const theme = useContext(ThemeContext);

  return <div className={theme === "dark" ? "dark-nav" : "light-nav"}>Navbar</div>;
}
```

---

# 6️⃣ Production-Level Example

### **AuthContext (Login System)**

This is how REAL apps maintain authentication globally.

---

## 🔹 Step 1: Create Context

### AuthContext.jsx

```jsx
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => setUser({ username });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

---

## 🔹 Step 2: Wrap App

### App.jsx

```jsx
import { AuthProvider } from "./AuthContext";
import Dashboard from "./Dashboard";

function App() {
  return (
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  );
}

export default App;
```

---

## 🔹 Step 3: Consume Context

### Dashboard.jsx

```jsx
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Dashboard() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <>
          <h3>Welcome {user.username}</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("Aman")}>Login</button>
      )}
    </>
  );
}

export default Dashboard;
```

---

# 7️⃣ Folder Structure (Professional)

```
src/
 └── context/
      ├── AuthContext.jsx
      ├── ThemeContext.jsx
 └── components/
      ├── Navbar.jsx
      ├── Dashboard.jsx
```

This is how real React apps structure contexts.

---

# 8️⃣ When Should You Use Context API?

Use Context when:
✔ Authentication info
✔ Theme mode
✔ User language
✔ Shopping cart
✔ Global filters
✔ Notification system

Avoid Context when:
✘ Highly changing state (better use Redux or Zustand)
✘ Very large complex apps needing advanced state patterns

---

# 9️⃣ Interview Questions (With Answers)

### ❓ What is Context API?

A global state management system built inside React to avoid prop drilling.

### ❓ What is prop drilling?

Passing props through multiple levels even if intermediate components don’t need them.

### ❓ What does `useContext` do?

It allows functional components to access context values directly.

### ❓ Difference between Context API vs Redux?

| Context API                | Redux                                     |
| -------------------------- | ----------------------------------------- |
| Simple, built-in           | External library                          |
| Good for small/medium apps | Great for large apps                      |
| No boilerplate             | More structured                           |
| Limited advanced features  | Advanced debugging, time travel, devtools |

### ❓ Can Context replace Redux?

Sometimes yes, but not always.
Context is good for simple global state; Redux is for complex apps.

---

# 🎉 Summary

Context API + useContext lets you:

* Avoid prop drilling
* Build global data stores
* Share state easily
* Use production-ready patterns like Auth, Theme, Cart, etc.


---
# Part 2
---

**cleanest and simplest way** to use **useContext in one single file**, wrap your **App.jsx**, and access the data anywhere inside child components.

---

# ✅ **1. Create `MyContext.jsx` (Single File Context Setup)**

```jsx
// MyContext.jsx
import { createContext, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Aman",
        age: 23,
        course: "MERN"
    });

    return (
        <MyContext.Provider value={{ user, setUser }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContextProvider;
```

### 🔥 What this file does:

* Creates context
* Stores your data in **one place**
* Exposes `user` + `setUser` to all components
* Wraps everything inside `<MyContext.Provider>`

---

# ✅ **2. Wrap `App.jsx` with the Provider**

Your **main.jsx** (or index.js) should look like this:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MyContextProvider from "./MyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <MyContextProvider>
        <App />
    </MyContextProvider>
);
```

---

# ✅ **3. Now you can use the context anywhere**

### In any child component:

```jsx
import { useContext } from "react";
import { MyContext } from "../MyContext";

const Profile = () => {
    const { user } = useContext(MyContext);

    return (
        <div>
            <h1>User Name: {user.name}</h1>
            <h2>Age: {user.age}</h2>
            <h3>Course: {user.course}</h3>
        </div>
    );
};

export default Profile;
```

---

# 📝 **4. If you want to update data**

```jsx
const { user, setUser } = useContext(MyContext);

setUser({ ...user, name: "Rahul" });
```

---

# 🎉 Summary (Super Simple)

| What You Want         | How                          |
| --------------------- | ---------------------------- |
| All context in 1 file | ✔ `MyContext.jsx`            |
| Wrap entire app       | ✔ Wrap `App` inside provider |
| Access data anywhere  | ✔ `useContext(MyContext)`    |
| Modify data globally  | ✔ `setUser()`                |

---

# ✅ Question you are asking:

**How does `<MyContextProvider>App</MyContextProvider>` become `{ children }` inside the function?**

You’re confused because:

* In props we do: `function Card({ name, age })`
* But here we do: `function MyContextProvider({ children })`

So how does React send `children`?

---

# 🧠 **React automatically injects `children` just like props**

When you use a component like this:

```jsx
<MyComponent>
    <h1>Hello</h1>
</MyComponent>
```

React internally converts it into:

```jsx
<MyComponent children={<h1>Hello</h1>} />
```

Meaning:

👉 Whatever is inside the tags **is passed as a prop named `children`**.

---

# 🎦 VISUAL EXAMPLE (Very Simple)

### You write:

```jsx
<MyContextProvider>
    <App />
</MyContextProvider>
```

### React converts to:

```jsx
<MyContextProvider children={<App />} />
```

### So inside the function:

```jsx
const MyContextProvider = ({ children }) => {
    console.log(children);  // <App />
}
```

---

# 🔥 **So `{ children }` is NOT magic. It’s just a prop.**

Exactly like:

```jsx
function Card({ title, desc }) { ... }
```

Except here:

```jsx
function MyContextProvider({ children }) { ... }
```

---

# 🧩 **Compare Props and Children**

### Props example:

```jsx
<Card title="Hello" desc="World" />
```

React passes:

```jsx
{ title: "Hello", desc: "World" }
```

### Children example:

```jsx
<MyContextProvider>
    <App />
</MyContextProvider>
```

React passes:

```jsx
{ children: <App /> }
```

💥 SAME CONCEPT — **just another prop**.

---

# 🟦 So your function is simply:

```jsx
const MyContextProvider = ({ children }) => {
    return (
        <MyContext.Provider>
            {children}   // this displays <App />
        </MyContext.Provider>
    );
};
```

---

# 📌 One-Line Summary

**Everything between `<MyContextProvider> ... </MyContextProvider>` is automatically passed as `children` prop.**