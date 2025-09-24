FROM nginx:latest as builder

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/app.conf


FROM nginx:stable-alpine3.21-perl

COPY --from=builder /etc/nginx/conf.d /etc/nginx/conf.d