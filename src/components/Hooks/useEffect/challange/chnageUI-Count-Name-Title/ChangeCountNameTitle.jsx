import { useEffect, useState } from "react";

export default function UseEffectChallengeUI() {
  // state for count
  const [count, setCount] = useState(0);

  // state for name
  const [name, setName] = useState('');

  // now useEffect for updating the title when count chnages
  useEffect(() => {
    document.title = `count: ${count}`
  }, [count])
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#062241",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "800" }}>
        useEffect Challenge
      </h1>

      <h2 style={{ fontSize: "1.3rem" }}>
        Count: <span style={{ fontWeight: "bold" }}>{count}</span>
      </h2>

      <button
        style={{
          background: "#22c55e",
          padding: "10px 25px",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
          border: "none",
          color: "white",
          fontWeight: "600"
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <h2 style={{ fontSize: "1.2rem" }}>Name: 
        <span
          style={{
            fontWeight: "bold"
          }}
        >{name === '' ? ` Your Name will appear here` : name}
        </span>
      </h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
        style={{
          padding: "12px 16px",
          width: "280px",
          borderRadius: "6px",
          border: "none",
          outline: "none",
          fontSize: "1rem"
        }}
      />
    </div>
  );
}
