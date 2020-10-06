# docker build -t davidcastellanos101/allkets:2.0 -f Dockerfile .
# Stage 1
FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# Stage 2

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/allket /usr/share/nginx/html