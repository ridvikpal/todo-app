#!/bin/bash

printf "\nSending HTTP GET request to get specific todo\n\n"

curl \
    "http://localhost:5000/2do/get/11" \
    -s \
| jq

exit 0