import { env } from "../utils/env.js";

function EnvTest() {
  return (
    <div style={{ padding: "1rem", background: "#f0f0f0", margin: "1rem" }}>
      <h3>Environment Variables Test:</h3>
      <p>
        <strong>API_BASE_TEST_URL:</strong> {env.API_BASE_TEST_URL}
      </p>
      <p>
        <strong>API_BASE_URL:</strong> {env.API_BASE_URL}
      </p>
      <p>
        <strong>MODE:</strong> {env.MODE}
      </p>
      <p>
        <strong>DEV:</strong> {env.DEV ? "true" : "false"}
      </p>
    </div>
  );
}

export default EnvTest;
