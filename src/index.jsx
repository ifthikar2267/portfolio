import React from "react";
import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <Helmet>
      <title>Ifthikar | Full-Stack & AI Developer — Dubai, UAE</title>
      <meta
        name="description"
        content="Portfolio of Ifthikar — Full-Stack Developer and AI Engineer specializing in React, Next.js, RAG architecture, and AI-powered web applications. Based in Dubai, UAE."
      />
    </Helmet>
    <App />
  </>
);
