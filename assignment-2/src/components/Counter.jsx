import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function incrementHandler() {
    setCount(count + 1);
  }

  function decrementHandler() {
    setCount(count - 1);
  }

  return (
    <div
      style={{
        margin: "20px 0",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: "300px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <button
          onClick={decrementHandler}
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Decrement
        </button>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            minWidth: "50px",
            textAlign: "center",
          }}
        >
          {count}
        </p>
        <button
          onClick={incrementHandler}
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
