#!/bin/bash

# Stop Nginx to free up port 80 for Certbot


# Obtain SSL certificate from Let's Encrypt
echo "Obtaining SSL certificate for ondoc.info.gf..."
certbot certonly --standalone --non-interactive --agree-tos --email bangeradheeraj9@gmail.com -d ondoc.info.gf

# Check if Certbot was successful
if [ $? -eq 0 ]; then
    echo "SSL certificate obtained successfully."
else
    echo "Failed to obtain SSL certificate."
    exit 1
fi

# Start Nginx after obtaining SSL certificates
service nginx start

# Reload Nginx configuration to apply SSL certificates
nginx -s reload

# Check if Nginx started successfully
if [ $? -eq 0 ]; then
    echo "Nginx started successfully."
else
    echo "Failed to start Nginx."
    exit 1
fi
