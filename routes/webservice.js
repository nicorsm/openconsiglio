var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var request = require('request');
var bodyParser = require('body-parser');

var Law = require("../models/law.js");
var Attachment = require("../models/attachment.js");
var Utils = require("../utils/utils.js");

const querystring = require('querystring');
var baseUrl = "http://www.consigliograndeegenerale.sm";
var url = baseUrl + "/on-line/home/archivio-leggi-decreti-e-regolamenti.html";
var documentsBaseUrl = baseUrl + "/on-line/home/archivio-leggi-decreti-e-regolamenti/";



router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

router.post('/laws', function (req, res, next) {

  var title = req.body.title;
  console.log(title)

  var pageNumber = req.body.pageNumber;
  if(pageNumber == null){
    pageNumber = 1;
  }
  console.log(pageNumber)
  
  var requestType = req.body.type;
  var type = "";
  var currentType = "";
  
  var documentTypes = Utils.documentTypes;
  for(var i = 0; i < documentTypes.length; i++){
    var element = documentTypes[i];
    if(element["short"] == requestType) {
      type = element["parameter"];
      break;
    }
  }
  console.log(type)

  var lawNumber = req.body.lawNumber;
  console.log(lawNumber)

  var lawYear = req.body.lawYear;
  console.log(lawYear)

  var lawStartingYear = req.body.lawStartingYear;
  console.log(lawStartingYear)

  var lawEndingYear = req.body.lawEndingYear;
  console.log(lawEndingYear)

  var day = req.body.day;
  console.log(day)

  var month = req.body.month;
  console.log(month)

  var year = req.body.year;
  console.log(year)

  var documentContent = req.body.documentContent;
  console.log(documentContent)

  var postUrl = url + "?" + querystring.stringify({

    "P0_path": "/home/tomcat/indicizzazione/indexleggi",
    "P0_paginazione": "15",
    "P0_pagina": pageNumber,
    "P0_orderBy": "index_lucene,data_ordered,numero",
    "P0_order": "asc,desc,desc",
    "P0_operatorMustBe": "yes",
    "P0_title": title,
    "P0_tipo": type,
    "P0_operatorMustBe": "yes",
    "P0_numero": lawNumber,
    "P0_anno": lawYear,
    "annoiniziale": lawStartingYear,
    "annofinale": lawEndingYear,
    "P0_data_gg": day,
    "P0_data_mm": month,
    "P0_data_aa": year,
    "P0_document": documentContent,
    "P0_data_ordered": "",
    "indicericerca": "-1",
    "x": "0",
    "y": "0"
  });

  console.log(postUrl);
  
  request({
    method: 'GET',
    url: postUrl,
    encoding: 'binary'
  }, function (err, response, body) {
    if (err){

      var response = {
        "success":false,
        "count":0,
        "cgegUrl":postUrl,
        "message":"There was a problem while fetching data from CGeG website.",
        "data":[]
      }

      res.send(response);
      return;
    } 

    var $ = cheerio.load(body);

    var laws = [];
    var current = null;
    var disclaimer = $(".avviso").first().text();
    
    $("#centercol").children().each(function (i, elem) {
      var node = $(this);

      var id = node.attr("id");

      if (id != null && id.startsWith("card_")) {

        if (current != null) {
          laws.push(current);
        }

        current = new Law();
        current.id = parseInt(id.replace("card_", ""))
        current.title = node.children().closest("h3").text();
        current.link = baseUrl + node.children().closest("div").children().closest("a").attr("href");
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

        if (node[0].name =="br") {
          //Closing current page and pushing the last element to the array
          laws.push(current);
          current = null;
        }
      }
    });

    var response = {
      "success":true,
      "count":laws.length,
      "cgegUrl":postUrl,
      "message":"Laws fetched successfully.",
      "disclaimer":disclaimer,
      "data":laws
    }

    res.send(response);
    console.log(response);

  });

});


router.get('/configuration', function (req, res, next) {


    var response = {
      "success":true,
      "documentTypes":Utils.documentTypes
    };

    res.send(response);
  
});

module.exports = router;
