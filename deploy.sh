#!/usr/bin/env bash

set -e

EXIST=`git show-ref refs/heads/gh-pages`
if [[ -n "$EXIST" ]]; then
    git checkout gh-pages
fi

git checkout gh-pages

npm run production
git add demo -f
git commit -m 'deploy to github pages'
git push origin/gh-pages


