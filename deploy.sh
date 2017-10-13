#!/bin/bash

cd client
rm -rf dist
ng build --env=prod

cd ..
rm -rf ./server/public
cp -r ./client/dist/ ./server/public

git add .
git commit -m "commit pre-deploy"

git subtree push --prefix=server heroku master
