# Leadhub task - zadání DnD Editor

<img src="https://leadhub-assets.s3.eu-central-1.amazonaws.com/lh-task.png" width="250" alt="DnD Editor">

Implementujte základní funkcionalitu "drag and drop" editoru. Editor by měl umožňovat vložení widgetu z levého menu do plochy editoru pomocí "drag and drop" funkcionality.

Vložený element by se měl zobrazit zarovnaný na střed v místě, kde byl umístěn kurzor v průběhu upuštění elementu.

Implementujte 3 typy widgetů - text, image a video. Pro každý si zvolte libovolná statická data. Kupříkladu pro video si zvolte libovolné video o Vámi předem zvolených rozměrech.

Každý element v ploše by měl jít pomocí "drag and drop" funkcionality posunout.

Každý element by mělo jít označit kliknutím a následně smazat pomocí klávesové zkratky delete či backspace. Pro mazání elementů můžete také vykreslit křížek do rohu elementu, pokud je vybraný, a smazat element kliknutím na tento křížek.

Datový model editoru si zvolte tak, aby jej bylo možné serializovat do localstorage.

Editor by se měl automaticky ukládat do localstorage a při prvotním načtení z localstorage opět obnovit - stav editoru by měl přežít stisknutí klávesy F5.

Pro přetahování widgetů do pracovní plochy doporučuji použít knihovnu react-dnd. Pro pohyb elementy v pracovní ploše doporučuji využít obyčejné eventy myši. Implementace je však plně na Vás, mužete použít libovolných knihoven ke splnění úkolu.

## Install: `yarn`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run: `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
