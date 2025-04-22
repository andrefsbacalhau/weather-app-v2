import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="*"
            element={<Error text={`This URL doesn't exist.`} />}
          />
        </Routes>
      </BrowserRouter>
      {/* <App /> */}
    </QueryClientProvider>
  </StrictMode>
);
