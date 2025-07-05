import React, { useState } from "react";

const ToggleVisibility = () => {
  const [textarea, setTextarea] = useState("");
  const [visibility, setVisibility] = useState(false);

  function changeHandler(event) {
    setTextarea(event.target.value);
  }

  function visibilityHandler() {
    setVisibility((prev) => !prev);
  }

  return (
    <div
      style={{
        margin: "20px 0",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <div>
        <textarea
          name="textarea"
          value={textarea}
          onChange={changeHandler}
          rows={5}
          cols={35}
          style={{
            width: "100%",
            padding: "8px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
          placeholder="Type something to show/hide..."
        />
      </div>
      <br />
      <button
        onClick={visibilityHandler}
        style={{
          padding: "8px 16px",
          fontSize: "16px",
          backgroundColor: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        {visibility ? "Hide" : "Show"}
      </button>
      {visibility && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#e3f2fd",
            borderRadius: "4px",
            border: "1px solid #bbdefb",
          }}
        >
          {textarea || "Nothing to show"}
        </div>
      )}
    </div>
  );
};

export default ToggleVisibility;
