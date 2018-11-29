#!/usr/bin/env bash

set -e

npm run prod
git checkout -b gh-pages

