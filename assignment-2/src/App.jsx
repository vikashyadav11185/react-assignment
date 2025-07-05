import "./App.css";
import Counter from "./components/Counter";
import InputField from "./components/InputField";
import ToggleVisibility from "./components/ToggleVisibility";

function App() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>
        React Components Demo
      </h1>
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ textAlign: "center", color: "#555" }}>
          A Counter with Increment and Decrement buttons
        </h3>
        <Counter />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ textAlign: "center", color: "#555" }}>
          An Input field that displays the typed text live below it
        </h3>
        <InputField />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ textAlign: "center", color: "#555" }}>
          A Visibility toggle for showing/hiding a paragraph
        </h3>
        <ToggleVisibility />
      </div>
    </div>
  );
}

export default App;
