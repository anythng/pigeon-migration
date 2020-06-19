#! /bin/bash
docker run -d -p 8080:8080 \
    --env-file .env \
    hasura/graphql-engine:latest
