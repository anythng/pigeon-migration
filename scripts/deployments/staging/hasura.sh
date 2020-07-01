#!/bin/bash
hasura migrate apply --project hasura --envfile .staging.env --skip-update-check
hasura metadata apply --project hasura --envfile .staging.env --skip-update-check
