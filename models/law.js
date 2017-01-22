var title = "";
var link = "";
var description = "";
var rating = 0.0;
var attachments = new Array();

function Law(){
}

module.exports = Law;



  /*

Dati HTML:

`html -> body -> div[#container] -> div[#page] -> div[#columns] -> div[#centercol]`

- Titolo: `div[#card_NNNNNNNN] -> h3`
- Link documento in PDF: `div[#card_NNNNNNNN] -> div[.btn-link fr] -> a.href` (da aggiungere in testa URL base)
- Dati sul documento: `div[.fl]` senza link `a`
- Valutazione ricerca: `div[.fr] -> a` (1: buono, 0.8: medio)
- Altri documenti utili: `div[.list1 intest] -> ul -> li (foreach) -> a` (da prendere `href` e contenuto)

Termina con `<br/>`
*/