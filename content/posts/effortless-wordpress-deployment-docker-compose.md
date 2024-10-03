---
title: Effortless WordPress Deployment with Docker-Compose
description: Learn how to streamline WordPress setup and management using Docker-Compose for a fast, scalable, and containerized environment.
date: 2024-10-03
draft: false
slug: effortless-wordpress-deployment-docker-compose
image: https://github.com/user-attachments/assets/f735787d-0617-4dc4-885e-86929986c7f2
tags:
  - Wordpress
  - Docker
  - Nginx
---

Keeping up with and setting up a WordPress site can be hard, especially when you have to deal with dependencies, server setups, and problems with compatibility. Docker-Compose makes this process easier, letting you run WordPress and its services, like MySQL, in separate, simple containers. If you're a developer looking for a consistent work environment or a site owner looking for a secure and scalable setup, Docker-Compose is a quick and easy way to install WordPress. This guide will show you how to use Docker-Compose to easily set up and run your WordPress site.

Make sure you have [Docker](https://docker.com/) and [Composer](https://getcomposer.org/download/) installed. We'll start by breaking down the Docker-Compose configuration file. Here's the full code you’ll use to set up WordPress with MySQL:

```yaml
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: wordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress
   wordpress:
     depends_on:
       - db
     image: wordpress:latest
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```

Open a terminal and create a new directory for your project. Inside this directory, create a file named docker-compose.yml and paste the above code into it. 
```bash
mkdir wordpress-docker
cd wordpress-docker
nano docker-compose.yml
```

With the file saved, run the following command to start the containers:
```bash
docker-compose up -d
```
This command will pull the necessary images (WordPress and MySQL) and start the services in detached mode (in the background).

Once the containers run, open your browser and go to [http://localhost:8000](http://localhost:8000). You should see the WordPress installation page where you can set up your site.

Now that you’ve learned the basics of running WordPress with Docker-Compose, try extending the setup by adding services like Nginx or Redis, or explore Docker’s networking capabilities to improve the performance and reliability of your WordPress site!
