# Projet de développement du composant SearchAD


## Installation sur le poste de DEV

1. Installer nodejs

2. Installer git

3. Cloner le dépôt 

	```bash
	git clone https://github.com/sclodysee/searchad.git  ./searchad
	```

4. Lancer la commande permettant d'installer les dépendances

	```bash
	npm i
	```

## Création d'une application VueJS
Ici le point d'entrée est le fichier *src/main.js*  
Le fichier résultant *dist/app.js* contient tout ce qu'il faut pour lancer l'application VueJS  

### Développement de l'application
Durant cette phase, un serveur http est lancée sur le port 8080.  
Toute modification d'un des fichiers du projet provoque le reload du serveur.  
```bash
npm run dev
```

### Production  de l'application
```bash
npm run build
```

## Création du module indépendant
Ici le point d'entrée est le fichier 'src/components/SearchComp.vue'

```html
<template>
	<div>
		Composant Search AD
	</div>
</template>


<script>
	export default {
		name : "search-comp"
	}
</script>
```

Un fois compilé par VueJS, le fichier résultant  *dist/searchad.js*, permet d'accéder de façon globale au composant.  
Dans le navigateur le composant est accessible sous le nom *SearchAD.default*.
```bash
npm run build:umd
```  
Un console.log du composant donne le résultat suivant:  

```javascript
console.log(SearchAD.default)
```  
Résultat :  

```javascript
Object { name: "search-comp", render: r(), staticRenderFns: Array[0], _compiled: true }
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
