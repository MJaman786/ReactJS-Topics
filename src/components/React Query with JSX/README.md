# 📘 React Query (TanStack Query)

---

## 1️⃣ Definition (What is React Query?)

### 🔹 Simple Definition

**React Query** is a library that helps you:

* Fetch data from APIs
* Cache server data
* Keep UI and backend data in sync
* Handle loading, error, refetching automatically

👉 React Query manages **SERVER STATE**, not local UI state.

---

### 🔹 Why React Query Exists?

Without React Query:

* You manually use `useEffect`
* You manually manage `loading`, `error`
* You manually refetch after update/delete
* No caching → repeated API calls

With React Query:

* Caching is automatic
* Refetching is automatic
* Code is cleaner and scalable

---

## 2️⃣ Installation

### Install React Query

```bash
npm install @tanstack/react-query
```

(Optional – Devtools)

```bash
npm install @tanstack/react-query-devtools
```

---

## 3️⃣ Integrating React Query in App.jsx / main.jsx

### 🔹 Step 1: Create QueryClient

```js
// queryClient.js
import { QueryClient } from "@tanstack/react-query";

// QueryClient controls caching, retries, refetching, etc.
export const queryClient = new QueryClient();
```

---

### 🔹 Step 2: Wrap App with QueryClientProvider

📍 `main.jsx` or `index.jsx`

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Makes React Query available in entire app
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

⚠️ Without this → `useQuery` & `useMutation` **will not work**

---

## 4️⃣ useQuery Hook (Fetching Data)

### 🔹 Purpose

`useQuery` is used to:

* Fetch data from API
* Cache the result
* Refetch automatically when needed

---

### 🔹 Basic Syntax

```js
useQuery({
  queryKey: [],
  queryFn: () => {}
});
```

---

### 🔹 Complete Example (With Explanation)

```js
import { useQuery } from "@tanstack/react-query";

// API function (separate from component)
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json(); // data returned to useQuery
};

function Posts() {

  const {
    data,        // API response (cached)
    isLoading,   // true when fetching for first time
    isError,     // true if API fails
    error,       // error object
    isFetching   // true when background refetching
  } = useQuery({

    // 🔑 Unique key to identify this query in cache
    queryKey: ["posts"],

    // 🔄 Function that fetches data
    queryFn: fetchPosts,

    // ⏱️ Cache will stay fresh for 5 minutes
    staleTime: 1000 * 60 * 5,

    // ❌ Retry API 1 time if it fails
    retry: 1
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

---

### 🔹 Important `useQuery` Parameters

| Parameter   | Meaning                              |
| ----------- | ------------------------------------ |
| `queryKey`  | Unique cache identifier              |
| `queryFn`   | API function                         |
| `staleTime` | Time before data is considered stale |
| `cacheTime` | How long unused cache stays          |
| `enabled`   | Conditional fetching                 |
| `retry`     | Retry count on failure               |

---

## 5️⃣ useMutation Hook (Create / Update / Delete)

### 🔹 Purpose

`useMutation` is used for:

* POST
* PUT
* PATCH
* DELETE

Mutations **change data on server**.

---

### 🔹 Basic Syntax

```js
useMutation({
  mutationFn: () => {},
  onSuccess: () => {},
  onError: () => {}
});
```

---

### 🔹 Update (PATCH) Example with Explanation

```js
import { useMutation } from "@tanstack/react-query";

// API function
const updatePost = async ({ id, title, body }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body })
    }
  );

  return response.json();
};

function UpdateExample() {

  const mutation = useMutation({

    // 🔄 API function
    mutationFn: updatePost,

    // ✅ Runs when mutation succeeds
    onSuccess: (updatedPost) => {
      console.log("Updated:", updatedPost);
    },

    // ❌ Runs when mutation fails
    onError: (error) => {
      console.error("Error:", error);
    }
  });

  return (
    <button
      onClick={() =>
        mutation.mutate({
          id: 1,
          title: "New Title",
          body: "Updated Body"
        })
      }
    >
      Update Post
    </button>
  );
}
```

---

### 🔹 Important `useMutation` Properties

| Property    | Meaning              |
| ----------- | -------------------- |
| `mutate()`  | Trigger mutation     |
| `isLoading` | Mutation in progress |
| `isError`   | Mutation failed      |
| `isSuccess` | Mutation success     |

---

## 6️⃣ useQueryClient Hook (Cache Control)

### 🔹 Purpose

`useQueryClient` lets you:

* Access cache
* Update cache manually
* Refetch queries
* Invalidate cache

---

### 🔹 Basic Usage

```js
import { useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();
```

---

### 🔹 Updating Cache After Mutation

```js
const queryClient = useQueryClient();

const updateMutation = useMutation({
  mutationFn: updatePost,

  onSuccess: (updatedPost) => {

    // 🔥 Update cached posts manually
    queryClient.setQueryData(["posts"], (oldPosts) => {

      // Safety check
      if (!oldPosts) return [];

      return oldPosts.map(post =>
        post.id === updatedPost.id
          ? { ...post, ...updatedPost }
          : post
      );
    });
  }
});
```

---

### 🔹 invalidateQueries (Alternative)

```js
queryClient.invalidateQueries(["posts"]);
```

| Method              | When to Use         |
| ------------------- | ------------------- |
| `setQueryData`      | Fast UI update      |
| `invalidateQueries` | Refetch from server |

---

## 🔁 Data Flow (Important Concept)

React is **unidirectional**:

``` bash
Server → React Query Cache → Component → Child
                     ↑
                  Mutation
```

✔ Data always flows **down**
✔ Events flow **up via callbacks**
✔ Cache is the single source of truth

---