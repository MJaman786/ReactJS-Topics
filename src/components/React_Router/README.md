
# 📘 React Router v6.4 — Full Guide (Simple → Production Examples)

## React Router v6.4 introduced **Data APIs** like:
- `createBrowserRouter()`
- `createRoutesFromElements()`
- `RouterProvider`
- **Loaders** (for data fetching)
- **Actions** (for form submission)
- `<Form />` component
- Error boundaries

These make routing easier, more scalable, and extremely production-friendly.

---

# ✅ 1. INSTALLATION

```bash
npm install react-router-dom
```

---

# ✅ 2. BASIC SETUP (v6.4+ Recommended)

```jsx
// main.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> }
    ] 
  }
]);

export default function Main() {
  return <RouterProvider router={router} />;
}
```

### ✔ Explanation

* `createBrowserRouter()` creates our full routing system.
* `<RouterProvider />` injects router into React.
* `App` acts like a **layout** using `<Outlet />`.

---

# ✅ 3. Layouts & `<Outlet />`

```jsx
// App.jsx
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>

      <Outlet />  {/* Renders nested routes */}
    </>
  );
}
```

---

# 🎯 4. SIMPLE EXAMPLE OF PAGES

```jsx
export default function Home() { 
  return <h1>Home Page</h1>;
}

export default function About() { 
  return <h1>About Page</h1>;
}
```

---

# 🚀 5. USING URL PARAMETERS (Dynamic Routes)

### routes

```jsx
{
  path: "users/:id",
  element: <UserDetails />
}
```

### component

```jsx
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}
```

---

# 🚀 6. NESTED ROUTES (Production-Level)

```jsx
{
  path: "dashboard",
  element: <DashboardLayout />,
  children: [
    { path: "profile", element: <Profile /> },
    { path: "orders", element: <Orders /> },
  ]
}
```

### Layout Component

```jsx
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet />
    </div>
  );
}
```

---

# 🔥 7. LOADER — DATA FETCHING BEFORE COMPONENT RUNS

**v6.4 introduced "Loaders"**, which fetch data before rendering pages.

### route

```jsx
{
  path: "products",
  element: <Products />,
  loader: async () => {
    const res = await fetch("https://dummyjson.com/products");
    return res.json();
  }
}
```

### component

```jsx
import { useLoaderData } from "react-router-dom";

export default function Products() {
  const data = useLoaderData();
  return (
    <>
      <h1>Products</h1>
      {data.products.map(p => <p key={p.id}>{p.title}</p>)}
    </>
  );
}
```

### ✔ Why loaders?

* Data loads *before* page renders → no empty states.
* Perfect for production apps.

---

# 🔄 8. ACTION — FORMS & MUTATIONS

### route

```jsx
{
  path: "contact",
  element: <ContactForm />,
  action: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");

    return { message: `Hello, ${name}` };
  }
}
```

### component

```jsx
import { Form, useActionData } from "react-router-dom";

export default function ContactForm() {
  const response = useActionData();

  return (
    <>
      <Form method="post">
        <input name="name" placeholder="Enter name" />
        <button type="submit">Submit</button>
      </Form>

      {response && <p>{response.message}</p>}
    </>
  );
}
```

---

# ❗ 9. ERROR BOUNDARIES (Production Must Have)

### route

```jsx
{
  path: "products",
  element: <Products />,
  loader: productsLoader,
  errorElement: <ErrorPage />
}
```

### component

```jsx
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const err = useRouteError();
  return <h2>Error: {err.statusText || err.message}</h2>;
}
```

---

# 🔐 10. PROTECTED ROUTES (Auth Guard)

### Wrapper

```jsx
import { Navigate } from "react-router-dom";

export default function Protected({ children }) {
  const isLoggedIn = localStorage.getItem("token");

  return isLoggedIn ? children : <Navigate to="/login" />;
}
```

### route

```jsx
{
  path: "dashboard",
  element: (
    <Protected>
      <Dashboard />
    </Protected>
  )
}
```

---

# 🧭 11. NAVIGATION — `useNavigate()`

```jsx
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/about")}>
      Go to About
    </button>
  );
}
```

---

# 📑 12. SEARCH PARAMS — `useSearchParams()`

```jsx
import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const [params, setParams] = useSearchParams();

  return (
    <div>
      <button onClick={() => setParams({ q: "react" })}>
        Set Query
      </button>

      <p>Query: {params.get("q")}</p>
    </div>
  );
}
```

---

# 🚀 13. PRODUCTION EXAMPLE — E-COMMERCE ROUTER SETUP

```jsx
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
        loader: productDetailLoader,
      },
      {
        path: "cart",
        element: (
          <Protected>
            <Cart />
          </Protected>
        ),
      },
      {
        path: "checkout",
        element: <Checkout />,
        action: checkoutAction,
      },
    ],
  },
]);
```

This is the **exact pattern used in real production apps** today.

---

# 🎤 INTERVIEW PERSPECTIVE (Important!)

### ⭐ What changed in React Router v6.4?

* Introduced **Data APIs** → loaders & actions
* Better error handling with **errorElement**
* Built-in `<Form>` component
* Declarative data fetching
* Smoother nested routing
* Removed many old APIs (`switch`, `redirect`, etc.)

### ⭐ Why loaders?

* Data loads **before rendering**
* Improves performance & UX
* Avoids multiple useEffect calls
* Perfect for SEO-friendly apps

### ⭐ What are actions?

* Handle form submissions
* Do CRUD operations
* Return results to the component

### ⭐ What is `<Outlet />`?

Used in layouts to render nested routes.

### ⭐ How to create protected routes?

Wrap the route element using `<Navigate />`.

### ⭐ How navigation works?

Using `useNavigate()` hook.