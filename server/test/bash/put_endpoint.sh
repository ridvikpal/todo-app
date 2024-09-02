#!/bin/bash

printf "Sending HTTP PUT request to update a todo\n\n"

curl \
    -H 'Content-Type: application/json' \
    -d  \
        '{ 
            "description": "updated data!"
        }' \
    -X PUT \
    "http://localhost:5000/2do/put/11" \
    -s \
| jq

exit 0