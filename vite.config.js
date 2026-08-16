import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed to https://maddiepst.github.io/ (a GitHub user/organization page),
// so the site is served from the domain root -> base stays "/".
// If you ever move this to a *project* page instead (e.g.
// https://maddiepst.github.io/portfolio/), change base to "/portfolio/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
