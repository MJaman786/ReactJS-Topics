# 📘 useReducer Hook – Full Guide (Simple → Production-Level)

## ⭐ What is useReducer?
`useReducer` is a React Hook used for **state management** when:
- State is **complex**
- Multiple state updates depend on **previous state**
- Many actions update the same state
- You want Redux-like structure but simpler

It is an alternative to `useState`.

---

# 1️⃣ Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### 🔍 Explanation

* **state** → contains the current state
* **dispatch** → function used to send “actions”
* **reducer** → a function that decides how to update the state
* **initialState** → starting value of the state

---

# 2️⃣ Reducer Function Syntax

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "SOME_ACTION":
      return { ...state, value: action.payload };

    default:
      return state;
  }
}
```

---

# 3️⃣ Simple Example (Counter App)

## reducer.js

```jsx
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

export default counterReducer;
```

---

## App.jsx

```jsx
import { useReducer } from "react";
import counterReducer from "./reducer";

function App() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      <h1>Count: {state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
    </>
  );
}

export default App;
```

---

# 4️⃣ Adding Payload (Intermediate Example)

If you want to increment by any value:

### reducer.js

```jsx
function counterReducer(state, action) {
  switch (action.type) {
    case "increaseBy":
      return { count: state.count + action.payload };

    default:
      return state;
  }
}
```

### App.jsx

```jsx
<button onClick={() => dispatch({ type: "increaseBy", payload: 5 })}>
  Increase by 5
</button>
```

---

# 5️⃣ Form Handling Example (Very Common)

## reducer.js

```jsx
function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };

    case "SET_EMAIL":
      return { ...state, email: action.payload };

    case "RESET":
      return { name: "", email: "" };

    default:
      return state;
  }
}

export default formReducer;
```

---

## Form.jsx

```jsx
import { useReducer } from "react";
import formReducer from "./formReducer";

function Form() {
  const [state, dispatch] = useReducer(formReducer, {
    name: "",
    email: ""
  });

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
      />

      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

      <p>{JSON.stringify(state)}</p>
    </>
  );
}

export default Form;
```

---

# 6️⃣ Real Production Example – Todo App with useReducer

## todoReducer.js

```jsx
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false }
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
```

---

## TodoApp.jsx

```jsx
import { useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState("");

  const addTodo = () => {
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  return (
    <>
      <input
        value={text}
        placeholder="Add Todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoApp;
```

---

# 7️⃣ useReducer With Context (Production-Standard Architecture)

## store.jsx

```jsx
import { createContext, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
```

---

## Using in components

```jsx
const { todos, dispatch } = useContext(TodoContext);
dispatch({ type: "ADD_TODO", payload: "Learn React" });
```

This is exactly how **Redux-like architecture** works but without Redux.

---

# 8️⃣ When to Use useReducer (Very Important for Interviews)

### Use `useState` when:

✔ State is simple
✔ Only 1–2 fields
✔ Updates are simple

### Use `useReducer` when:

✔ State is **complex**
✔ Many different actions
✔ Multiple fields depend on each other
✔ You want a cleaner update logic
✔ You want something like Redux but simpler

---

# 9️⃣ Interview Questions

### ❓ What is useReducer?

A React hook used for complex state logic and managing state transitions using actions.

### ❓ useState vs useReducer?

| useState              | useReducer                                |
| --------------------- | ----------------------------------------- |
| Simple state          | Complex state                             |
| Unstructured          | Structured like Redux                     |
| Few updates           | Many update conditions                    |
| Local component state | Can combine with Context for global state |

### ❓ What is a reducer?

A pure function `(state, action) → newState`
It decides how state changes based on action type.

### ❓ What is dispatch?

A function used to **send actions** to the reducer.

### ❓ Why reducers must be pure functions?

Because React must be able to predict the state; no side effects allowed.
