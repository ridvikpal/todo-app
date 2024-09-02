#!/bin/bash

printf "Sending HTTP GET request to get all todos\n\n"

curl \
    "http://localhost:5000/2do/get" \
    -s \
| jq

printf "\nSending HTTP GET request to get specific todo\n\n"

curl \
    "http://localhost:5000/2do/get/11" \
    -s \
| jq

exit 0