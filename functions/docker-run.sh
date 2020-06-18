#! /bin/bash
docker run -d -p 8080:8080 \
       -e HASURA_GRAPHQL_DATABASE_URL=postgres://hasurauser:hasurauser@192.168.0.58:5432/anythng \
       -e HASURA_GRAPHQL_ENABLE_CONSOLE=true \
       -e HASURA_GRAPHQL_ADMIN_SECRET=myadminsecretkey \
       # TODO: Move secrets out
       -e HASURA_GRAPHQL_JWT_SECRET='{"type":"HS256","key":"cbSgdqVO/e2pEkNzmN6ozFPMDpnZJrz2"}' \
       -e HASURA_GRAPHQL_UNAUTHORIZED_ROLE=anonymous \
       hasura/graphql-engine:latest
