# syntax=docker/dockerfile:1

FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# SMTP credentials for the /api/book-demo route (send demo requests by
# email). Not baked into the image — pass real values at `docker run`
# time with -e or --env-file, e.g.:
#   docker run --env-file .env.local -p 3000:3000 pravaro-website
ENV SMTP_HOST=""
ENV SMTP_PORT="587"
ENV SMTP_SECURE="false"
ENV SMTP_USER=""
ENV SMTP_PASS=""

CMD ["node", "server.js"]
