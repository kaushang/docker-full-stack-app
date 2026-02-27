import { useEffect, useState } from "react";

function App() {
  const [backendStatus, setBackendStatus] = useState("checking...");
  const [dbStatus, setDbStatus] = useState("checking...");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setBackendStatus(data.status))
      .catch(() => setBackendStatus("unreachable"));

    fetch("http://localhost:5000/db-status")
      .then((res) => res.json())
      .then((data) => setDbStatus(data.database))
      .catch(() => setDbStatus("unreachable"));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>🐳 Docker Boilerplate</h1>
      <p>Backend: <strong>{backendStatus}</strong></p>
      <p>MongoDB: <strong>{dbStatus}</strong></p>
    </div>
  );
}

export default App;