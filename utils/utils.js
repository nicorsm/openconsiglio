function Utils() {};

Utils.documentTypes = [
        {
            "short": "law",
            "parameter": "+Legge",
            "label_it": "Legge",
            "label_en": "Law"
        },
        {
            "short": "constitutionalLaw",
            "parameter": "+Legge AND +Costituzionale",
            "label_it": "Legge Costituzionale",
            "label_en": "Constitutional Law"
        },
        {
            "short": "qualifiedLaw",
            "parameter": "+Legge AND +Qualificata",
            "label_it": "Legge Qualificata",
            "label_en": "Qualified Law"
        },
        {
            "short": "constitutionalReviewLaw",
            "parameter": "+Legge AND +Revisione AND +Costituziuonale",
            "label_it": "Legge di Revisione Costituzionale",
            "label_en": "Law of Constitutional Review"
        },
        {
            "short": "decree",
            "parameter": "+Decreto",
            "label_it": "Decreto",
            "label_en": "Decree"
        },
        {
            "short": "regencyDecree",
            "parameter": "+Decreto AND +Reggenziale",
            "label_it": "Decreto Reggenziale",
            "label_en": "Regency Decree"
        },
        {
            "short": "legislativeDecree",
            "parameter": "+Decreto AND +Legge",
            "label_it": "Decreto Legge",
            "label_en": "Legislative Decree"
        },
        {
            "short": "councilDecree",
            "parameter": "+Decreto AND +Consiliare",
            "label_it": "Decreto Consiliare",
            "label_en": "Council Decree"
        },
        {
            "short": "delegatedDecree",
            "parameter": "+Decreto AND +Delegato",
            "label_it": "Decreto Delegato",
            "label_en": "Delegated Decree"
        },
        {
            "short": "regulation",
            "parameter": "+Regolamento",
            "label_it": "Regolamento",
            "label_en": "Regulation"
        },
        {
            "short": "notification",
            "parameter": "+Notifica",
            "label_it": "Notifica",
            "label_en": "notification"
        },
        {
            "short": "statute",
            "parameter": "+Statuto",
            "label_it": "Statuto",
            "label_en": "Statute"
        },
        {
            "short": "memorandum",
            "parameter": "+Verbale",
            "label_it": "Verbale",
            "label_en": "Memorandum"
        },
        {
            "short": "ordinance",
            "parameter": "+Ordinanza",
            "label_it": "Ordinanza",
            "label_en": "Ordinance"
        },
        {
            "short": "errata",
            "parameter": "+Errata AND +Corrige",
            "label_it": "Errata Corrige",
            "label_en": "Errata"
        },
        {
            "short": "undefined",
            "parameter": "+Non AND definito",
            "label_it": "Non definito",
            "label_en": "Undefined"
        }


    ];

module.exports = Utils;
