#!/bin/bash

echo "Waiting for 30 minutes before obtaining SSL certificates..."
sleep 1000


#Step 2: Wait for 30 minutes before obtaining SSL certificates
/init-letsencrypt.sh

# Step 3: Start the Node.js application
node /server/index.js
