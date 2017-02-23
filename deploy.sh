#!/usr/bin/env bash

echo "Gerando build"
ng build --prod

echo "Apagando scripts"
cd ../evento.lfdev.tk
rm -f *.js *.css *.html *.ico *.gz

echo "Apagando assets"
rm -fR assets

echo "Copiando novos arquivos"
cd ../evento-lfdev
cp -fR dist/*.* ../evento.lfdev.tk/

echo "Copiando assets"
cp -fR dist/assets ../evento.lfdev.tk/

echo "Fazendo commit"
cd ../evento.lfdev.tk
git add --all
git commit -m deploy
git push

echo "Concluido"
#cd ../viva-ads-module
