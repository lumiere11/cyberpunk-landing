#!/bin/bash

# Build the project
pnpm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy out
