FROM ubuntu

RUN apt-get update \
  && apt-get install -y python3 python3-pip \
  && ln -s /usr/bin/python3 /usr/bin/python 


RUN apt-get install -y curl


RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get install -y nodejs \
  && apt-get upgrade -y \
  && rm -rf /var/lib/apt/lists/*
  
RUN pip install numpy scipy scikit-learn --break-system-packages
RUN pip install scikit-learn==1.4.2 --break-system-packages

RUN apt-get update \
  && apt-get install -y \
    nginx \
    certbot \
    python3-certbot-nginx

COPY server server

WORKDIR /server

RUN npm install

COPY nginx.conf /etc/nginx/sites-available/default

# Step 7: Expose HTTP and HTTPS ports
EXPOSE 80 443

# Step 8: Add a script to automatically obtain SSL certificates using Certbot
COPY init-letsencrypt.sh /init-letsencrypt.sh
RUN chmod +x /init-letsencrypt.sh

# Step 9: Entrypoint script to start Nginx, obtain SSL, and start Node.js
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]