
# Priyanath Bhukta - Portfolio Website

A modern, dark-themed portfolio website for Priyanath Bhukta, a Computer Science Engineer.

## Features

- Responsive design that works on all devices
- Dark theme with modern aesthetics
- Multiple pages for different content sections
- Resume download functionality
- Project showcase
- Contact form with validation

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- shadcn/ui Components
- React Router
- Lucide Icons

## Directory Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── NavBar.tsx
│   │   └── PageLayout.tsx
│   ├── ui/
│   │   └── ... (shadcn components)
│   └── TechLogos.tsx
├── hooks/
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── pages/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Index.tsx
│   ├── NotFound.tsx
│   └── Projects.tsx
├── types/
│   ├── data.ts
│   └── index.ts
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Build for production: `npm run build`
5. Preview the production build: `npm run preview`

## Customization

The portfolio is designed to be easily customizable:

- Change colors in `tailwind.config.ts`
- Update personal information in `src/types/data.ts`
- Add or remove pages by updating routes in `App.tsx`

## License

MIT
