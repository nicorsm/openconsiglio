var express = require('express');
var router = express.Router();

var cheerio = require('cheerio');
var request = require('request');

const querystring = require('querystring');
var baseUrl = "http://www.consigliograndeegenerale.sm";
var url = baseUrl + "/on-line/home/archivio-leggi-decreti-e-regolamenti.html";
var documentsBaseUrl = baseUrl + "/on-line/home/archivio-leggi-decreti-e-regolamenti/";
var Law = require("../models/law.js");
var Attachment = require("../models/attachment.js");

/* GET users listing. */
router.get('/laws/:search', function (req, res, next) {

  var term = req.params.search;

  url += "?" + querystring.stringify({

    "P0_path": "/home/tomcat/indicizzazione/indexleggi",
    "P0_paginazione": "15",
    "P0_pagina": "1",
    "P0_orderBy": "index_lucene,data_ordered,numero",
    "P0_order": "asc,desc,desc",
    "P0_operatorMustBe": "yes",
    "P0_title": term,
    "P0_tipo": "+Legge",
    "P0_operatorMustBe": "yes",
    "P0_numero": "",
    "P0_anno": "",
    "annoiniziale": "",
    "annofinale": "",
    "P0_data_gg": "",
    "P0_data_mm": "",
    "P0_data_aa": "",
    "P0_document": "",
    "P0_data_ordered": "",
    "indicericerca": "-1",
    "x": "5",
    "y": "11"
  });

  request({
    method: 'GET',
    url: url
  }, function (err, response, body) {
    if (err) return console.error(err);

    var $ = cheerio.load(body);

    var laws = [];
    var current = null;

    $('#centercol').children().each(function (i, elem) {
      var node = $(this);

      var id = node.attr("id");

      if (id != null && id.startsWith("card_")) {

        if (current != null) {
          laws.push(current);
        }

        current = new Law();
        current.title = node.children().closest("h3").text();
        current.link = baseUrl + node.children().closest("div").children().closest("a").attr("href");

        //find($(".btn-link fr")).closest("a").attr("href");
        //console.log(node.find($(".btn-link fr")));

        //current.link = "";

      } else if (current != null) {
        if (node.attr("class") == "fl") {
          //Document description
          current.description = node.text().replace("(Visualizza dettagli)","")
          .replace("�"," ")
           .replace("�"," ")
           .replace("��","");
        }

        if (node.attr("class") == "fr") {
          //Document rating
          current.rating = parseFloat(node.find("a").text());
        }

        if(node.attr("class") == "list1 intest") {
          
          current.attachments = new Array();
          var ul = node.children().first()
          ul.children().each(function (i,elem) {
            var li = $(this);
            var a = li.children("a");
            var attachment = new Attachment();
            attachment.title = a.text();
            attachment.link = documentsBaseUrl + a.attr("href");
            current.attachments.push(attachment);
          });

        }
        

        if (node == $("br")) {
          //Closing current page and pushing the last element to the array
          laws.push(current);
        }

      }

    });


    res.send(laws);

    console.log(laws);

  });

});

module.exports = router;



  /*

Dati HTML:

`html -> body -> div[#container] -> div[#page] -> div[#columns] -> div[#centercol]`

- Titolo: `div[#card_NNNNNNNN] -> h3`
- Link documento in PDF: `div[#card_NNNNNNNN] -> div[.btn-link fr] -> a.href` (da aggiungere in testa URL base)
- Dati sul documento: `div[.fl]` senza link `a`
- Valutazione ricerca: `div[.fr] -> a` (1: buono, 0.8: medio)
- Altri documenti utili: `div[.list1 intest] -> ul -> li (foreach) -> a` (da prendere `href` e contenuto)

Termina TUTTO con `<br/>`
*/