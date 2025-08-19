FROM node:22

# Install global npm packages for development
RUN npm install -g serve
RUN npm install -g @anthropic-ai/claude-code@1.0.82

# Use the default node user
USER node

# Set working directory
WORKDIR /workspaces/mai-tools

# Expose development ports
EXPOSE 8080
