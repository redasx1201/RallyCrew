# RallyCrew
RallyCrew is a cross-platform web and mobile application designed to help players find others to play pickleball with, coordinate games, communicate in real time, and participate in events. The platform is built with a modern, scalable full-stack architecture that supports both web and mobile clients with a unified backend.

## Overview

RallyCrew provides:

- User authentication with Google OAuth
- Player profiles with skill level and availability
- Location-based player discovery
- One-to-one and group messaging
- Event creation and participation
- Payment processing for events or other offerings

The system is designed to support expansion into additional racquet sports in the future.

## Technology Stack

### Web
- Next.js

### Mobile
- Expo (Managed Workflow)
- expo-router

### Authentication
- Supabase Auth
- Google OAuth

### Database
- Supabase (PostgreSQL)

### Realtime Communication
- Supabase Realtime (Postgres + realtime subscriptions)

### Payments
- Stripe Checkout (hosted)
- Integrated via Next.js API routes

## Architecture

RallyCrew uses a unified backend powered by Supabase. Both the web application (Next.js) and the mobile application (Expo) share:

- A single authentication system
- A single Postgres database
- Shared TypeScript types where applicable
- Centralized API logic

This architecture ensures consistency across platforms and simplifies long-term maintenance.

## Running the Project
To run your project, navigate to the directory and run one of the following pnpm commands.

- cd mobile
- pnpm run android
- pnpm run ios
- pnpm run web
- pnpm --filter mobile start