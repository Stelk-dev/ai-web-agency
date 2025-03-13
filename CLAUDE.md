# CLAUDE.md - Development Guide

## Commands
- Start dev server: `npm start`
- Build for production: `npm run build`
- Run all tests: `npm test`
- Run specific test: `npm test -- --testNamePattern="test name pattern"`
- Lint: `npm run lint` (if available)

## Code Style
- **Components**: Use functional components with hooks
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Imports**: React first, third-party libraries, then local imports
- **Aliases**: Use `@/` path aliases configured in jsconfig.json
- **Styling**: CSS files in src/style, component-specific CSS modules preferred
- **File Structure**:
  - pages/: Route components
  - components/: Reusable UI components
  - views/: Layout components
  - assets/: Static files
- **Error Handling**: Use try/catch for async operations
- **Types**: Document prop types with JSDoc or PropTypes
- **State Management**: React hooks (useState, useContext) for local state

This document serves as reference for automated agents to understand development patterns and key commands.