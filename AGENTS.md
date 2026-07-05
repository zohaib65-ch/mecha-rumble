<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Mecha Rumble Guidelines
- **Component modularity:** Keep landing page blocks separate (e.g. `Ticker.tsx`, `Navbar.tsx`, `Hero.tsx`, `Countdown.tsx`, `ScrollButton.tsx`) in the `app/components/` folder.
- **Styling:** Follow the dark-card on light-background design. Use `#f8f9fa` for page background, and dark rounded cards (`bg-black`) for containers. Use Tailwind CSS v4 styling rules.
- **Responsiveness:** Maintain full mobile compatibility, including hamburger menu in Navbar and flexible flex grids in Hero and Countdown.

