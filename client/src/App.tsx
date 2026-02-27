import { useEffect, useState } from "react";

function App() {
  const [backendStatus, setBackendStatus] = useState("checking...");
  const [dbStatus, setDbStatus] = useState("checking...");

  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => setBackendStatus(data.status))
      .catch(() => setBackendStatus("unreachable"));

    fetch("/api/db-status")
      .then((res) => res.json())
      .then((data) => setDbStatus(data.database))
      .catch(() => setDbStatus("unreachable"));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Docker Boilerplate</h1>
      <p>Backend: <strong>{backendStatus}</strong></p>
      <p>MongoDB: <strong>{dbStatus}</strong></p>
    </div>
  );
}

export default App;