# Interactive Admin Dashboard

A modern, responsive admin dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Chart.js**.

## Features

* 🔹 **Responsive Layout:** Collapsible sidebar and adaptive header for desktop, tablet, and mobile.
* 🔹 **Data Visualization:** Line charts powered by Chart.js for key metrics.
* 🔹 **Reusable Components:** Sidebar, Header, Stat Cards, Chart Cards, Tables, and Notifications.
* 🔹 **API Integration:** Axios-based utilities for fetching and managing data.
* 🔹 **Code Quality:** ESLint and Prettier configured for consistent styling.

## Tech Stack

* [Next.js](https://nextjs.org)
* [TypeScript](https://www.typescriptlang.org)
* [Tailwind CSS](https://tailwindcss.com)
* [Chart.js](https://www.chartjs.org) via react-chartjs-2
* [Axios](https://axios-http.com)

## Getting Started

### Prerequisites

* Node.js v16+
* npm or Yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/brandononchain/dashboard-app.git
cd dashboard-app

# Install dependencies
npm install
# or
# yarn install
```

### Running Locally

```bash
# Start development server
npm run dev
# Open http://localhost:3000 in your browser
```

### Building for Production

```bash
# Build the app
npm run build

# Start the production server
npm start
```

## Folder Structure

```
dashboard-app/
├── public/             # Static assets
├── src/                # Source files
│   ├── components/     # Reusable UI components
│   ├── pages/          # Next.js pages
│   ├── styles/         # Global and Tailwind styles
│   ├── utils/          # API utilities
│   └── types/          # TypeScript definitions
├── .eslintrc.js        # ESLint config
├── .prettierrc         # Prettier config
├── tailwind.config.js  # Tailwind config
├── tsconfig.json       # TypeScript config
└── README.md           # Project overview
```

## Available Scripts

* `npm run dev` — Start development server
* `npm run build` — Create optimized production build
* `npm start` — Start production server
* `npm run lint` — Run ESLint

## Contributing

1. Fork this repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

Distributed under the MIT License. © Brandon Crenshaw
