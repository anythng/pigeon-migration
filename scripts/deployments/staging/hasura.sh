#!/bin/bash
if [[ -z "${HASURA_STAGING_ADMIN_SECRET}" ]]; then
  echo 'HASURA_STAGING_ADMIN_SECRET not set!';
else
  hasura migrate apply --project hasura \
    --envfile .staging.env \
    --admin-secret $HASURA_STAGING_ADMIN_SECRET \
    --skip-update-check
  hasura metadata apply --project hasura \
    --envfile .staging.env \
    --admin-secret $HASURA_STAGING_ADMIN_SECRET \
    --skip-update-check
fi
