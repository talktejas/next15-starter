# Next.js Theme Requirements v1

## Core Features

### Base Architecture
- Next.js 15 with App Router
- React 19
- Tailwind CSS
- Shadcn UI components
- Zustand for state management

### Layout Components
- Header with navigation
- Footer
- Responsive sidebar/navigation
- Mobile-friendly menu

### i18n & RTL Support
- English and Arabic language support
- RTL layout switching
- Language switcher component
- Separate translation files

### Theming
- Light/dark mode support
- Theme switcher component
- Global theme configuration
- Base color scheme presets

## Technical Requirements

### Performance
- Server-side rendering optimization
- Image optimization
- Font optimization
- Bundle size optimization

### Code Quality
- TypeScript
- ESLint configuration
- Prettier setup
- Husky for pre-commit hooks

### Project Structure
```
src/
├── app/
├── components/
│   ├── layout/
│   ├── ui/
│   └── shared/
├── lib/
│   ├── i18n/
│   └── store/
├── styles/
└── types/
```

## Out of Scope for v1
- Component-level theme customization
- Brand colors configuration
- Storybook
- Testing setup
- CI/CD
- Documentation
- Additional languages
