# Build image
FROM node:16.18.1 AS BUILD_IMAGE

# Install dependencies
WORKDIR /server
COPY package.json tsconfig*.json /server/

COPY . .

# Install dependencys
RUN yarn global add @nestjs/cli \
    && yarn install --production=true --pure-lockfile \
    && yarn run build service-gateway

# Remove development dependencies
# RUN curl -sf https://gobinaries.com/tj/node-prune | sh \
#     && node-prune

# Production images
FROM node:16.18.1-alpine3.16
WORKDIR /server

COPY --from=BUILD_IMAGE /server/dist ./dist
COPY --from=BUILD_IMAGE /server/node_modules ./node_modules

# Command
CMD ["node", "dist/apps/service-gateway/main.js"]
 
