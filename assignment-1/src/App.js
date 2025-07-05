import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "32px" }}>
        User Details
      </h1>
      <div className="app-container">
        <UserCard name="Vikash Yadav" role="SE" location="Indore" />
        <UserCard name="Amit Kardwal" role="SE" location="Indore" />
        <UserCard name="Rohit Sharma" role="SE" location="Indore" />
        <UserCard name="Shivam Anand Bhushan" role="SE" location="Indore" />
      </div>
    </div>
  );
}

export default App;
