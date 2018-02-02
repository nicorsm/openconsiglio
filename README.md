![](logo.png)

# 🇸🇲 OpenConsiglio

**OpenConsiglio** è un progetto mirato a rendere fruibile a tutti delle API _(Application Programming Interface)_ di ricerca del materiale prodotto dal Consiglio Grande e Generale (leggi, decreti, regolamenti, ecc.), pubblicamente disponibile tramite il sito web ufficiale, in un formato standard leggibile da altri software (JSON).

## 🤔 Come funziona

Dal momento che non esistono servizi pubblicamente accessibili in maniera standard, **OpenConsiglio** effettua le ricerche utilizzando il [sito web ufficiale del Consiglio Grande e Generale](https://www.consigliograndeegenerale.sm) ed eseguendo le stesse chiamate web effettuate dal motore di ricerca leggi, parsando poi i risultati restituiti.

## 👊 Getting Started

### 💾 Installazione

Clonare la repository o effettuare una fork:

```
git clone git@github.com:nicorsm/openconsiglio.git
```

Installare:

- [Node.js](https://nodejs.org/en/download/)
- [Heroku CLI](https://www.heroku.com/) nel caso si volesse effettuare il deploy su Heroku
- Un editor testuale (es. [Visual Studio Code](https://code.visualstudio.com/))

### 🚀 Esecuzione

Posizionarsi nella cartella ed eseguire:

```
npm start
```

Il servizio verrà eseguito in localhost sulle porte di default (es. 3000). In tal caso, per accedere al servizio basterà aprire il browser su [http://localhost:3000](http://localhost:3000).

### 🧠 Endpoint disponibili

- `/api/laws`, utilizzato per la ricerca delle leggi
- `/api/configuration`, utilizzato per ricevere le impostazioni (es. parametri da utilizzare nella ricerca).

## 📝 Licenza

```
Copyright 2018 Nicola Giancecchi

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```


