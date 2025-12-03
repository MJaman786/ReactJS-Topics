# 📘 useMemo Hook – Complete Guide (Simple → Production Level)

## ⭐ What is useMemo?
`useMemo` is a React Hook used to **optimize performance** by:

- **Memoizing (saving)** a value
- Preventing expensive calculations from running on every render
- Returning **cached results** until dependencies change

👉 Think of `useMemo` as **"Remember this calculation unless something changes."**

---

# 1️⃣ Syntax

```jsx
const memoizedValue = useMemo(() => {
  return someCalculation();
}, [dependencies]);
```

### 🔍 Explanation

* The function runs only when **dependencies change**
* If dependencies do NOT change → React **returns cached value**
* Used for **heavy calculations** or **large lists filtering**

---

# 2️⃣ Simple Example — Expensive Calculation

```jsx
import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Running expensive logic...");
    for (let i = 0; i < 200000000; i++) {} // Heavy loop
    return num * 2;
  };

  const memoValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <>
      <h2>Result: {memoValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default App;
```

### 🚀 Without useMemo

This calculation runs **every re-render** → app becomes slow

### ⚡ With useMemo

Runs only when **count changes**

---

# 3️⃣ Intermediate Example — Filtering Large List

```jsx
import { useMemo, useState } from "react";

const users = [
  "Aman", "Amar", "Rohit", "Rahul", "Deepak", "Dev", "Raj", "Ram", "Ramesh"
];

function SearchList() {
  const [query, setQuery] = useState("");

  const filteredList = useMemo(() => {
    return users.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <>
      <input placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
      {filteredList.map((name, i) => <p key={i}>{name}</p>)}
    </>
  );
}

export default SearchList;
```

### 🎯 Why useMemo?

Without useMemo, filtering runs on **every keystroke + every re-render**.
With useMemo, it runs only when query changes.

---

# 4️⃣ Real Production Example — Expensive Sorting + API Data

```jsx
import { useEffect, useMemo, useState } from "react";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("low-to-high");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const sortedProducts = useMemo(() => {
    console.log("Sorting...");
    return [...products].sort((a, b) =>
      sortType === "low-to-high"
        ? a.price - b.price
        : b.price - a.price
    );
  }, [products, sortType]);

  return (
    <>
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="low-to-high">Low → High</option>
        <option value="high-to-low">High → Low</option>
      </select>

      {sortedProducts.map((item) => (
        <p key={item.id}>{item.title} - ${item.price}</p>
      ))}
    </>
  );
}

export default ProductPage;
```

### 🧠 Why useMemo here?

* Sorting large data every re-render = slow
* useMemo ensures sorting only happens when sortType or products change

---

# 5️⃣ When Should You Use useMemo?

| Use useMemo                     | Don't use useMemo              |
| ------------------------------- | ------------------------------ |
| Expensive calculations          | Simple values                  |
| Large list filtering            | Normal state                   |
| Sorting large data              | Small arrays                   |
| Avoiding unnecessary re-renders | No visible performance problem |

👉 **useMemo improves performance only when used correctly**
❌ Overuse can make app more complex without benefit

---

# 6️⃣ useMemo vs useCallback — BIG INTERVIEW POINT

| Hook        | Caches                |
| ----------- | --------------------- |
| useMemo     | Result / Return value |
| useCallback | Function reference    |

Example:
`useMemo → returns a VALUE`
`useCallback → returns a FUNCTION`

---

# 7️⃣ Common Interview Questions

### ❓ What is useMemo?

A hook that memoizes a value and prevents expensive recalculations until dependencies change.

### ❓ Why do we need useMemo?

To optimize heavy operations like sorting, filtering, or mathematical calculations.

### ❓ Is useMemo a performance magic?

No. Overusing it can harm performance.

### ❓ Difference between useMemo and useCallback?

useMemo → returns value
useCallback → returns memoized function

### ❓ When NOT to use useMemo?

If calculation is small or simple, using useMemo adds unnecessary overhead.
