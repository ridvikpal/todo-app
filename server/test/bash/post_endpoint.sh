#!/bin/bash

curl \
    -H 'Content-Type: application/json' \
    -d  \
        '{ 
            "description": "This is just a test"
        }' \
    -X POST \
    "http://localhost:5000/todos"

exit 0