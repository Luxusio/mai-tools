# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mai-tools is a collection of browser-based tools for analyzing maimai DX game data. The project operates on two main fronts:
1. **Standalone web pages** for rating calculations, visualizations, and plate progress tracking
2. **Browser userscripts** that enhance the official maimai DX NET website with additional functionality

⚠️ **Important**: This project is in limited maintenance mode - features may break without fixes.

## Development Commands

```bash
# Install dependencies
npm install

# Build all tools for production
npm run build

# Development mode with file watching
npm run watch

# Serve built files locally (requires build first)
npm start
```

**Testing**: Manual testing is required using the checklist in `TESTING.md`. There are no automated tests.

## Architecture Overview

### Multi-Entry Webpack Build
The project uses a single webpack configuration that builds multiple independent applications:

- **Web pages**: `src/{module}/main.ts(x)` → `build/{module}/main.bundle.js`
- **Userscripts**: `src/scripts/*.ts` → `build/scripts/*.js`

Each module is self-contained with its own React components, styles, and entry point.

### Core Modules

1. **rating-calculator**: Analyzes player ratings and recommends target songs
2. **rating-visualizer**: Visual representation of rating progression
3. **plate-progress**: Tracks completion of maimai plate challenges
4. **classic-layout**: Converts DX scores to classic FiNALE format
5. **dx-achievement**: Calculates DX achievement from FiNALE scores
6. **chart-info**: Displays detailed chart information

### Shared Common Layer (`src/common/`)

Critical shared modules include:
- **game-region.ts**: Handles JP vs International game regions
- **chart-record.ts**: Core data structures for song records
- **rating-functions.ts**: Rating calculation algorithms
- **song-props.ts**: Song metadata and level information
- **infra/**: API clients for data fetching

### Data Management

Game data is stored in `public/data/`:
- **chart-levels/**: Internal difficulty levels by game version
- **song-info/**: Song metadata by region (JP/International) 
- **plate-info/**: Plate challenge requirements by region and version

Data files follow strict schemas documented in `public/data/README.md`.

### Userscript System

The all-in-one userscript (`src/scripts/all-in-one.ts`) conditionally loads different tools based on the current maimai NET page path, enhancing the official website with:
- Score downloading and analysis
- Rating calculations
- Photo album management
- Play history enhancements

## Key Technical Details

- **TypeScript**: Strict mode enabled with comprehensive type checking
- **React 18**: Used for all UI components
- **Game Regions**: Code must handle both Japanese and International versions
- **Chart Types**: Support both "standard" and "dx" chart formats
- **Rating System**: Complex algorithms for calculating player ratings from achievements

## Important Conventions

- Game data updates require following specific procedures in `public/data/README.md`
- Internal levels use negative numbers when exact values are unknown
- All userscripts validate they're running on official maimai NET domains
- Region-specific logic is centralized in `game-region.ts`