import React, { useState } from "react";

const InputField = () => {
  const [text, setText] = useState("");

  function changeHandler(event) {
    setText(event.target.value);
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
        <input
          type="text"
          value={text}
          name="text"
          onChange={changeHandler}
          style={{
            padding: "8px",
            fontSize: "16px",
            width: "100%",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
          placeholder="Type something..."
        />
        <br />
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#f5f5f5",
            borderRadius: "4px",
            minHeight: "20px",
            border: "1px dashed #999",
          }}
        >
          {text || "Text will appear here..."}
        </div>
        <br />
      </div>
    </div>
  );
};

export default InputField;
