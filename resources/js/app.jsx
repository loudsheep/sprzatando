import "./bootstrap";
import "../css/app.css";
import { GlobalStyle } from "./assets/styles/GlobalStyles";
import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { Provider } from "react-redux";
import store from "./store/index";

const appName =
  window.document.getElementsByTagName("title")[0]?.innerText || "Sprzątando";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob("./Pages/**/*.jsx")
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App {...props} />
        </ThemeProvider>
      </Provider>
    );
  },
  progress: {
    color: "#4B5563",
  },
});
