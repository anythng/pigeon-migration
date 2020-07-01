#!/bin/bash
hasura migrate apply --project hasura --envfile .staging.env
hasura metadata apply --project hasura --envfile .staging.env
