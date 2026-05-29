import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initSentry, Sentry } from "@/lib/sentry";

// Initialize observability before render so the bootstrap path is also
// covered. No-op when VITE_SENTRY_DSN is set to an empty string.
initSentry();

const rootElement = document.getElementById("root")!;

const tree = (
  <Sentry.ErrorBoundary
    fallback={({ resetError }) => (
      <div
        role="alert"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem",
          textAlign: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "1.25rem", margin: 0 }}>Something went wrong.</h1>
        <p style={{ color: "#666", margin: 0, maxWidth: "32rem" }}>
          We've been notified and are looking into it. Refresh the page to try again.
        </p>
        <button
          onClick={() => {
            resetError();
            window.location.reload();
          }}
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid #ddd",
            borderRadius: "0.5rem",
            background: "white",
            cursor: "pointer",
          }}
        >
          Refresh
        </button>
      </div>
    )}
  >
    <App />
  </Sentry.ErrorBoundary>
);

// Use hydrateRoot when prerendered HTML exists, createRoot otherwise
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, tree);
} else {
  createRoot(rootElement).render(tree);
}
