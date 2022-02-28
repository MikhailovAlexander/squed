FROM ubuntu/apache2
RUN apt update
RUN apt install php8.0 libapache2-mod-php8.0 -y
RUN apt install php-mysql -y
RUN mkdir /etc/squed
COPY ./ /var/www/html/