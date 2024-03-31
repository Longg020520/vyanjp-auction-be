
# Define a build-time ARG
ARG SERVICE=service-gateway

# Build image
FROM node:21.3.0 AS BUILD_IMAGE

# Use the ARG value in your Dockerfile
ARG SERVICE

# Install dependencies
WORKDIR /server
COPY package.json tsconfig*.json /server/

COPY . .

# Install dependencies
RUN yarn global add @nestjs/cli \
    && yarn install --production=true --pure-lockfile \
    && yarn run build $SERVICE \
    && mv dist/apps/$SERVICE/* dist \
    && rm -rf dist/apps

# Remove development dependencies
# Nếu để thì sẽ remove một số phần trong nodemodule dẫn tới lỗi khi chạy
# RUN curl -sf https://gobinaries.com/tj/node-prune | sh \
#     && node-prune

# Production images
FROM node:21.3.0

WORKDIR /server

COPY --from=BUILD_IMAGE /server/dist ./dist
COPY --from=BUILD_IMAGE /server/node_modules ./node_modules

# Command
CMD sh -c "node dist/main.js"
 
