FROM nginx:1.15.2-alpine

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY nginx-default.conf /etc/nginx/conf.d

RUN mv /etc/nginx/conf.d/nginx-default.conf /etc/nginx/conf.d/default.conf

COPY ./dist/ /usr/share/nginx/html/

EXPOSE 80
