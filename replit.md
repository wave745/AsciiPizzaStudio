# ASCII Pizza Co. - Terminal Edition

## Overview

ASCII Pizza Co. is a retro terminal-style web application that allows users to create, customize, and share ASCII pizza art. The application features an interactive pizza builder, gallery of pre-made pizza templates, animations, and a random pizza generator. Built with a modern tech stack while maintaining a nostalgic terminal aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with a clear separation between client and server components:

- **Frontend**: React-based SPA with modern UI components and animations
- **Backend**: Express.js server with TypeScript support
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Build System**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom terminal-themed design system

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Library**: Radix UI primitives with custom shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and interactions
- **Styling**: Tailwind CSS with custom terminal color palette

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Storage**: In-memory storage implementation with interface for future database integration
- **API**: RESTful endpoints with /api prefix convention

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Shared schema definitions between client and server
- **Validation**: Zod schemas for runtime type validation
- **Migrations**: Drizzle Kit for database migrations

### UI Component System
- **Design System**: Terminal-themed with retro aesthetics
- **Components**: Modular, reusable components built on Radix UI
- **Accessibility**: ARIA-compliant components with keyboard navigation
- **Responsive**: Mobile-first design with adaptive layouts

## Data Flow

1. **Client Interactions**: User interactions trigger React state updates and API calls
2. **API Communication**: TanStack Query manages server communication with caching
3. **Server Processing**: Express routes handle business logic and data operations
4. **Data Storage**: Currently uses in-memory storage, designed for easy database integration
5. **Response Handling**: Typed responses ensure type safety across the stack

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver for serverless environments
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for interactive elements
- **wouter**: Lightweight routing solution

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Utility for creating variant-based component APIs

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR on port 5000
- **Backend**: tsx for TypeScript execution with auto-restart
- **Database**: PostgreSQL 16 module in Replit environment

### Production Build
- **Client Build**: Vite builds optimized static assets to `dist/public`
- **Server Build**: esbuild bundles server code to `dist/index.js`
- **Deployment**: Autoscale deployment target on port 80
- **Database**: Environment-based PostgreSQL connection via DATABASE_URL

### Key Architectural Decisions

1. **Monorepo Structure**: Client, server, and shared code in single repository for easier development
2. **Shared Schema**: Single source of truth for data models using Drizzle and Zod
3. **Type Safety**: End-to-end TypeScript for catching errors at compile time
4. **Component Modularity**: Radix UI + shadcn/ui for accessible, customizable components
5. **Memory Storage**: Initial implementation uses in-memory storage for simplicity, with interface designed for easy database migration
6. **Terminal Aesthetic**: Custom CSS variables and Tailwind configuration for consistent retro styling