#OpenConsiglio

##Webservice

Fonte dati:

GET `http://www.consigliograndeegenerale.sm/on-line/home/archivio-leggi-decreti-e-regolamenti.html`

Parametri:

Chiave | Valore
-------|-------
`P0_path` | `/home/tomcat/indicizzazione/indexleggi`
`P0_paginazione` | `15`
`P0_pagina` | `1`
`P0_orderBy` | `index_lucene,data_ordered,numero`
`P0_order` | `asc,desc,desc`
`P0_operatorMustBe` | `yes`
`P0_title` | `rendiconto+generale`
`P0_tipo` | ` ` `+Legge` `+Legge AND +Costituzionale` `+Legge AND +Qualificata` `+Legge AND +Revisione AND +Costituziuonale` `+Decreto` `+Decreto AND +Reggenziale` `+Decreto AND +Legge` `+Decreto AND +Consiliare` `+Decreto AND +Delegato` `+Regolamento` `+Notifica` `+Statuto` `+Verbale` `+Ordinanza` `+Errata AND +Corrige` `+Non AND definito`
`P0_operatorMustBe` | `yes`
`P0_numero` | `143`
`P0_anno` | `2016`
`annoiniziale` | `2014`
`annofinale` | `2017`
`P0_data_gg` | `21`
`P0_data_mm` | `12`
`P0_data_aa` | `2016`
`P0_document` | `rendiconto+generale+dello+stato`
`P0_data_ordered` | `[20160101+TO+20161231]`
`indicericerca` | `-1`
`x` | `5`
`y` | `11`

Dati HTML:

`html -> body -> div[#container] -> div[#page] -> div[#columns] -> div[#centercol]`

- Titolo: `div[#card_NNNNNNNN] -> h3`
- Link documento in PDF: `div[#card_NNNNNNNN] -> div[.btn-link fr] -> a.href` (da aggiungere in testa URL base)
- Dati sul documento: `div[.fl]` senza link `a`
- Valutazione ricerca: `div[.fr] -> a` (1: buono, 0.8: medio)
- Altri documenti utili: `div[.list1 intest] -> ul -> li (foreach) -> a` (da prendere `href` e contenuto)

Termina con `<br/>`
