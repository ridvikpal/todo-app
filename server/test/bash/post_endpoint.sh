#!/bin/bash

printf "Sending HTTP POST request\n\n"

curl \
    -H 'Content-Type: application/json' \
    -d  \
        '{ 
            "description": "This is just a test again"
        }' \
    -X POST \
    "http://localhost:5000/2do/post" \
    -s \
| jq

exit 0