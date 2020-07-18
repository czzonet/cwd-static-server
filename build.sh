#!/bin/sh
echo 'clean ./dist ...'
rm -rf ./dist
echo 'clean done.'
echo 'compile typescript ...'
tsc
echo 'compile done.'
echo 'start tar  [dist...] to .tar.gz ...'
tar zcf dist`date +%Y%m%d%H%M%S`.tar.gz ./dist ./ecosystem.config.js ./package.json
echo 'output file: ' dist`date +%Y%m%d%H%M%S.tar.gz`
