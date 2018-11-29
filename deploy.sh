#!/usr/bin/env bash

set -e

 1539  git checkout -b gh-pages
 1540  npm run production
 1541  git add demo
 1542  git add demo -f
 1543  git status
 1544  git commit -m 'deploy to github pages'


