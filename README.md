# search-comp

> Composant SearchAD


# Installation sur le poste de DEV
Prérequis : Installer nodejs


1 - Cloner le dépôt 
	```bash
	https://github.com/sclodysee/searchad.git
	```

2 - Lancer la commande
	```bash
		npm i
	```




# Build Setup
Ici le point d'entrée est le fichier *src/main.js*
Le fichier dist/app.js contient tout ce qu'il faut pour lancer l'application VueJS

``` bash
# installation des dépendances
npm install

# sert avec  'hot reload'  sur  localhost:8080
npm run dev

# build  production et minification
npm run build
```

# Créer un module indépendant
Ici le point d'entrée est le fichier 'src/components/SearchComp.vue'

le fichier résultant *dist/searchad.js* est le fichier contenant le composant autonome.
```bash
npm run build:umd
```
Il peut s'intégrer alors dans n'importe qu'elle autre application VueJS. 

Ou de façon autonome comme représenté dans le code ci-dessous


```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>search-comp!</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.2/vue.min.js"></script>
  </head>
  <body>
    Hello
    <div id="app">
      <search-comp></search-comp>
    </div>
    <script src="./dist/searchad.js"></script>
    <script>      
        new Vue({ el : '#app'})
    </script>  
  </body>
</html>

```



