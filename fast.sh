#!/usr/bin/env bash

echo "Gerando build"
ng build --prod

echo "clonando repositorio"
cd ..
git clone webserver@wgbn.com.br:repos/evento-lfdev.git temp-lfdev

echo "Apagando scripts"
cd temp-lfdev
rm -f *.js *.css *.html *.ico *.gz

echo "Apagando assets"
rm -fR assets

echo "Copiando novos arquivos"
cd ../evento-lfdev
cp -fR dist/*.* ../temp-lfdev

echo "Copiando assets"
cp -fR dist/assets ../temp-lfdev

echo "Fazendo commit"
cd ../temp-lfdev
git add --all
git commit -m deploy
git push

echo "Concluido"
cd ..
rm -fR temp-lfdev
