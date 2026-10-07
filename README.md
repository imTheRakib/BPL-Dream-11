# BPL Dream 11

A fantasy cricket landing page where you claim free coins, browse available players, and build a squad of up to six. Built with React, Tailwind CSS and DaisyUI from a Figma design.

**🔗 Live demo:** [bpl-dream-11-black.vercel.app](https://bpl-dream-11-black.vercel.app/)

## Features

- **Claim free credit** – the hero button adds 6,000,000 coins; the balance is shown in the navbar.
- **Choose players** – each player card has a price; choosing one deducts coins and adds them to your squad.
- **Available / Selected tabs** – switch between the full player grid and your selected squad (`Selected Player (n/6)`).
- **Remove players** – the trash icon on a selected player removes them and refunds their price.
- **Squad rules** – a maximum of 6 players, and you can't choose a player you can't afford or have already picked.
- **Toast notifications** – every action gives feedback via [react-toastify](https://fkhadra.github.io/react-toastify/).
- **Newsletter forms** – in the newsletter card and the footer.
- **Responsive** – the layout adapts from desktop down to phone width, with a dropdown menu on small screens.

## Tech stack

| Tool | Purpose |
| --- | --- |
| [React 19](https://react.dev) | UI and state |
| [Vite 8](https://vite.dev) | Dev server and build |
| [Tailwind CSS 4](https://tailwindcss.com) | Styling (via `@tailwindcss/vite`) |
| [DaisyUI 5](https://daisyui.com) | `join`, `dropdown` and `menu` components |
| [react-toastify 11](https://github.com/fkhadra/react-toastify) | Toast notifications |
| ESLint | Linting |

## Getting started

Requires Node.js 20.19+ or 22.12+ (needed by Vite 8).

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├─ assets/
│  ├─ icons/            SVG icons (logos, coin layers, user, flag, delete, divider)
│  └─ images/           Hero banner, player photo, glow background, button gradient
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.jsx     Logo, nav links, coin balance, mobile menu
│  │  └─ Footer.jsx     Overlapping newsletter card, link columns, copyright
│  ├─ sections/
│  │  ├─ Hero.jsx             Banner with "Claim Free Credit"
│  │  ├─ PlayersSection.jsx   Tabs, player grid and selected list
│  │  └─ Newsletter.jsx       Newsletter card
│  └─ ui/
│     ├─ BlurShadow.jsx         Decorative blurred glow
│     ├─ Button.jsx             Lime / gradient button
│     ├─ CoinIcon.jsx           Layered coin icon
│     ├─ Container.jsx          1320px page container
│     ├─ EmailForm.jsx          Email input + subscribe button
│     ├─ PlayerCard.jsx         Player card for the Available tab
│     └─ SelectedPlayerRow.jsx  Compact row for the Selected tab
├─ data/
│  └─ players.js        Player list
├─ App.jsx              App state: coins, selected players, active tab
├─ index.css            Tailwind/DaisyUI setup and design tokens
└─ main.jsx             Entry point
```

## Customisation

- **Players** – edit [`src/data/players.js`](src/data/players.js). Each player has `id`, `name`, `country`, `role`, `image` (or `null` for a placeholder), `battingStyle`, `bowlingStyle` and `price`.
- **Credit amount and squad size** – change `FREE_CREDIT` and `MAX_PLAYERS` at the top of [`src/App.jsx`](src/App.jsx).
- **Colours and fonts** – design tokens live in the `@theme` block of [`src/index.css`](src/index.css):

  | Token | Value | Used for |
  | --- | --- | --- |
  | `ink` | `#131313` | Text, hero background |
  | `lime` | `#E7FE29` | Primary buttons, active tab |
  | `navy` | `#06091A` | Footer background |
  | `placeholder` | `#D9D9D9` | Missing player images |
  | `font-sora` / `font-inter` | Sora, Inter | Loaded from Google Fonts in `index.html` |
