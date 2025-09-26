FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/app.conf

# Otimizando a imagem, porém n é aceito no desafio
# FROM nginx:stable-alpine3.21-perl

# COPY --from=builder /etc/nginx/conf.d /etc/nginx/conf.d