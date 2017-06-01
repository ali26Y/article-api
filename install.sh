#!/bin/sh

if [ ! -f ./src/config/config.json ]; then
  echo "./src/config/config.json not found!"
else
  yarn install
  ln -s ../../pre-commit.sh .git/hooks/pre-commit
fi
