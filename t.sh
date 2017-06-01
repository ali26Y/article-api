#!/bin/bash

NODE_ENV=test ./node_modules/.bin/tap -c --reporter='tap' $1 | ./node_modules/.bin/tap-colorize --pass '#4CC552' --fail red --info '#5388FF'

# ./node_modules/.bin/tap -c --reporter='tap' $1