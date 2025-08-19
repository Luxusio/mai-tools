## ⚠️ Notice: Limited Maintenance

This project is no longer actively developed. Features may break at any time and may or may not receive fixes.

# Tools for maimai

## Use

Method 1. Follow https://myjian.github.io/mai-tools/#howto

Method 2. Install the userscript: https://github.com/myjian/mai-tools/blob/gh-pages/install-mai-tools.user.js . Your
browser must support Tampermonkey or other userscript managers before you can install the userscript. Once the
userscript is installed, mai-tools will be loaded automatically on every maimai-NET page.

## Development with DevContainer

### Prerequisites

- Docker and Docker Compose
- VS Code with Dev Containers extension OR IntelliJ IDEA/WebStorm

### Quick Start

**VS Code:**

1. Open this project in VS Code
2. When prompted, click "Reopen in Container" or use Command Palette: "Dev Containers: Reopen in Container"
3. Wait for the container to build and start
4. Install dependencies: `npm install`
5. Access the application at http://localhost:8080

**IntelliJ IDEA/WebStorm:**

1. Open this project in IntelliJ IDEA or WebStorm
2. Open `.devcontainer/devcontainer.json` file
3. Click the Docker icon (square) in the left margin next to the configuration
4. Select "Create Dev Container and Mount Sources"
5. Choose your preferred backend IDE
6. Wait for the container to build and start
7. Start development server: `npm start`
8. Access the application at http://localhost:8080

### Development Commands

```bash
# Install dependencies
npm install

# Start development server with hot reload (runs on port 8080)
npm start

# Build for production
npm run build

# Watch mode (alternative development)
npm run watch
```

## Code Search

Use [SourceGraph](https://sourcegraph.com/search?q=context%3Aglobal+repo%3A%5Egithub%5C.com%2Fmyjian%2Fmai-tools%24+GameRegion&patternType=standard&sm=1&groupBy=path) (
replace GameRegion with whatever you want to find )
