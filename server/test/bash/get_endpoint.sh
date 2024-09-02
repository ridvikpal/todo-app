#!/bin/bash

printf "Sending HTTP GET request\n\n"

curl \
    "http://localhost:5000/2do/get" \
    -s \
| jq

exit 0