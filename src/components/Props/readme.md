# 🎁 Props in React – Complete Guide

## 📘 Introduction

**Props (short for "properties")** are the way to **pass data from one component to another** in React.

- Props are **read-only**  
- Props **cannot be modified** by the component receiving them  
- Props help React components become **reusable and dynamic**

Think of props like **function arguments**, and components like **functions**.

---

# ⚙ Basic Syntax

### ✅ Passing Props (Parent → Child)

```jsx
<ChildComponent name="John" age={25} />
````

### ✅ Receiving Props (Child Component)

```jsx
function ChildComponent(props) {
  return <p>Name: {props.name}</p>;
}
```

---

# 📌 Simple Example – Passing Single Prop

### **Parent Component**

```jsx
function App() {
  return <Greeting name="Aman" />;
}
```

### **Child Component**

```jsx
function Greeting(props) {
  return <h2>Hello {props.name}!</h2>;
}
```

---

# 📌 Using Destructuring (Recommended)

```jsx
function Greeting({ name }) {
  return <h2>Hello {name}!</h2>;
}
```

---

# 🟡 Passing Multiple Props

### **Parent**

```jsx
<UserDetails name="Aman" age={22} city="Pune" />
```

### **Child**

```jsx
function UserDetails({ name, age, city }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </>
  );
}
```

---

# 🟠 Passing Objects as Props (Production-Useful)

### **Parent**

```jsx
const user = {
  name: "Aman",
  age: 22,
  city: "Pune",
};

<UserCard info={user} />;
```

### **Child**

```jsx
function UserCard({ info }) {
  return <h3>{info.name} - {info.city}</h3>;
}
```

---

# 🧩 Passing Arrays as Props

### **Parent**

```jsx
const fruits = ["Apple", "Mango", "Banana"];

<FruitList items={fruits} />;
```

### **Child**

```jsx
function FruitList({ items }) {
  return (
    <ul>
      {items.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
  );
}
```

---

# 🔥 Passing Functions as Props (VERY Important in Production)

### Why?

To send data **from child → parent** using callback functions.

### **Parent Component**

```jsx
function App() {
  const getData = (value) => {
    console.log("Received from child:", value);
  };

  return <Child sendData={getData} />;
}
```

### **Child Component**

```jsx
function Child({ sendData }) {
  return (
    <button onClick={() => sendData("Hello Parent!")}>
      Send Data
    </button>
  );
}
```

✔ This is the **ONLY** way to pass data **from child to parent**.

---

# 🌐 Passing Children (Special Prop called `children`)

React automatically passes anything inside a component as `children`.

### **Parent**

```jsx
<Card>
  <h2>Hello World</h2>
</Card>
```

### **Child**

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

✔ Very common in UI libraries (like modals, cards, layouts).

---

# 🧨 Real Production-Level Example (Reusable Card Component)

### **Parent**

```jsx
<ProductCard
  title="Apple iPhone"
  price={69999}
  specifications={{ ram: "8GB", storage: "128GB" }}
/>
```

### **Child**

```jsx
function ProductCard({ title, price, specifications }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Price: ₹{price}</p>

      <ul>
        <li>RAM: {specifications.ram}</li>
        <li>Storage: {specifications.storage}</li>
      </ul>
    </div>
  );
}
```

✔ This pattern is used in **every e-commerce website**.

---

# 🚀 Passing Data Child → Parent (Another Real Example)

### **Parent**

```jsx
function App() {
  const handleLogin = (username) => {
    alert("Logged in as: " + username);
  };

  return <LoginForm onLogin={handleLogin} />;
}
```

### **Child**

```jsx
function LoginForm({ onLogin }) {
  const [user, setUser] = useState("");

  return (
    <>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={() => onLogin(user)}>Login</button>
    </>
  );
}
```

✔ Used in **authentication forms** and **dashboards**.

---

# 📚 All Ways to Pass Data in Components

| Direction         | Method                                              |
| ----------------- | --------------------------------------------------- |
| Parent → Child    | Props                                               |
| Child → Parent    | Callback function passed as props                   |
| Sibling → Sibling | Using Parent + Props                                |
| Any → Any         | useContext, Redux, Zustand, Recoil (state managers) |

---

# 📁 Project Folder Structure (As Reference)

```
react-props-demo/
│
├── src/
│   ├── components/
│   │   ├── Greeting.js
│   │   ├── UserDetails.js
│   │   ├── FruitList.js
│   │   ├── ProductCard.js
│   │   └── LoginForm.js
│   ├── App.js
│   ├── index.js
│   └── index.css
│
└── package.json
```

---

# 🧠 Interview Questions & Answers

### 🔹 Q1: What are props?

**Props are inputs to a component** used to pass data from parent to child.

---

### 🔹 Q2: Are props mutable?

❌ No, props are **read-only**.
If you need mutable data → use `useState`.

---

### 🔹 Q3: How does child send data to parent?

Using **callback functions** passed as props.

---

### 🔹 Q4: props vs state?

| Props              | State                    |
| ------------------ | ------------------------ |
| Passed from parent | Managed inside component |
| Read-only          | Changeable               |
| External data      | Internal data            |

---

### 🔹 Q5: What is `children` prop?

Everything between the opening and closing tag of a component.

---

# 🟢 Best Practices

✔ Use **destructuring** always
✔ Use **camelCase** props
✔ Pass only the needed data
✔ Prefer objects for grouped data
✔ Use callback props for child → parent communication

---

# 🎯 Summary

* Props help pass dynamic data between components
* Used for Parent → Child and Child → Parent (via functions)
* Props are read-only
* Make components reusable and clean
* Crucial for real-world React apps

---

> 🧩 “Props make components flexible — they turn one component into a reusable template.”