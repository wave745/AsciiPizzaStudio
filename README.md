# ASCII Pizza Co. - Terminal Edition 🍕

A retro terminal-style web application for creating and sharing ASCII pizza art.

## Features

- **Pizza Gallery**: Browse pre-made ASCII pizza templates
- **Interactive Builder**: Customize your own ASCII pizzas with different toppings
- **Animations**: Watch pizzas spin, cook, and steam
- **Random Generator**: Create surprise pizza combinations
- **Copy to Clipboard**: Easy sharing of ASCII art

## Deployment to Netlify

### Quick Deploy

1. Fork or download this repository
2. Connect your GitHub repo to Netlify
3. Use these build settings:
   - **Build command**: `npx vite build`
   - **Publish directory**: `dist/public`
   - **Node version**: 20

### Manual Deploy

1. Run `npx vite build` locally
2. Upload the `dist/public` folder to Netlify
3. Configure redirects for SPA routing

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5000` to see your ASCII pizza paradise!

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- Wouter for routing

## Pizza Art Credits

All ASCII pizza art is original and crafted with love for the retro computing aesthetic.

---

*Serving fresh ASCII art since 1985* 🖥️🍕