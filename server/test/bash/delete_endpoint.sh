#!/bin/bash

printf "Sending HTTP DELETE request to delete a todo\n\n"

curl \
    -X DELETE \
    "http://localhost:5000/2do/delete/11" \
    -s \
| jq

exit 0