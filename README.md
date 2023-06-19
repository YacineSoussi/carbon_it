## Stack technique

- Node.js
- TypeScript
- Mocha
- Chai

## Installation

1. Clonez ce dépôt de code sur votre machine locale:

```bash

git clone https://github.com/YacineSoussi/carbon_it.git

```

2. Accédez au dossier de votre projet nouvellement cloné:

```bash

cd carbon_it

```

3. Installez les dépendances du projet:

```bash

npm install

```

## Compilation:

Le code source est écrit en TypeScript et doit être compilé avant d'être exécuté. Vous pouvez utiliser la commande suivante pour compiler le code :

```bash

tsc ./presentation/index.ts

```

## Exécution:

Pour exécuter la simulation, vous devez préparer un fichier input.txt contenant les informations nécessaires sur la carte, les montagnes, les trésors et les aventuriers. Assurez-vous que le fichier input.txt est bien présent dans le répertoire du projet.

Ensuite, vous pouvez lancer la simulation en utilisant la commande suivante :

```bash

node ./presentation/index.js

```

## Tests unitaires:

Pour exécuter les tests unitaires, vous pouvez utiliser la commande suivante :

```bash

npx mocha --require ts-node/register tests/**/*.test.ts

```
