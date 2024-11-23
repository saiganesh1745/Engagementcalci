import React, { useState } from "react";

const App = () => {
  const [engagements, setEngagements] = useState("");
  const [impressions, setImpressions] = useState("");
  const [result, setResult] = useState(null);

  const parseInput = (input) =>
    input
      .split(",")
      .map((value) => parseFloat(value.trim()))
      .filter((value) => !isNaN(value));

  const calculateEngagementRate = () => {
    const engagementArray = parseInput(engagements);
    const impressionArray = parseInput(impressions);

    const totalEngagements = engagementArray.reduce((sum, val) => sum + val, 0);
    const totalImpressions = impressionArray.reduce((sum, val) => sum + val, 0);

    const engagementRate =
      totalImpressions > 0
        ? ((totalEngagements / totalImpressions) * 100).toFixed(2)
        : 0;

    setResult(engagementRate);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Twitter Engagement Rate Calculator</h1>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Engagements (comma-separated):</label>
        <input
          type="text"
          value={engagements}
          onChange={(e) => setEngagements(e.target.value)}
          placeholder="e.g., 100, 200, 150"
          style={styles.input}
        />
        <p style={styles.description}>
          Enter multiple day engagement values separated by commas. They will be summed automatically.
        </p>
      </div>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Impressions (comma-separated):</label>
        <input
          type="text"
          value={impressions}
          onChange={(e) => setImpressions(e.target.value)}
          placeholder="e.g., 1000, 2000, 1500"
          style={styles.input}
        />
        <p style={styles.description}>
          Enter multiple day impression values separated by commas. They will be summed automatically.
        </p>
      </div>
      <button onClick={calculateEngagementRate} style={styles.button}>
        Calculate Engagement Rate
      </button>
      {result !== null && (
        <div style={styles.result}>
          <h3>Engagement Rate: {result}%</h3>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#F5F8FA",
    color: "#1DA1F2",
    borderRadius: "10px",
    maxWidth: "500px",
    margin: "50px auto",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#1DA1F2",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#657786",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #E1E8ED",
    outline: "none",
    transition: "border-color 0.3s",
  },
  description: {
    fontSize: "12px",
    color: "#657786",
    marginTop: "5px",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "10px",
    backgroundColor: "#1DA1F2",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  result: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#E8F5FE",
    borderRadius: "5px",
    textAlign: "center",
  },
};

// Add hover effects
styles.input[":focus"] = { borderColor: "#1DA1F2" };
styles.button[":hover"] = { backgroundColor: "#0d95e8" };

export default App;
