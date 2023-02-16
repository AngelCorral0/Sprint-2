//Create Database 'Optica_mongoDB'

use('Optica_mongoDB');db.createCollection('Client',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "nom",
    "adreça_postal",
    "email",
    "data_register"
  ],
  "properties": {
    "adreça_postal": {
      "bsonType": "string"
    },
    "telefon": {
      "bsonType": "int"
    },
    "data_register": {
      "bsonType": "timestamp"
    },
    "nom": {
      "bsonType": "string"
    },
    "email": {
      "bsonType": "string"
    },
    "recomanat": {
      "bsonType": "string"
    }
  }
} }});

use('Optica_mongoDB');db.createCollection('Proveidor',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "nom",
    "telefon",
    "nif",
    "email"
  ],
  "properties": {
    "Adreça": {
      "bsonType": "object",
      "required": [
        "carrer",
        "ciutat",
        "codi_postal",
        "numero",
        "pais",
        "pis",
        "porta"
      ],
      "properties": {
        "numero": {
          "bsonType": "int"
        },
        "ciutat": {
          "bsonType": "string"
        },
        "carrer": {
          "bsonType": "string"
        },
        "codi_postal": {
          "bsonType": "int"
        },
        "pis": {
          "bsonType": "int"
        },
        "porta": {
          "bsonType": "int"
        },
        "pais": {
          "bsonType": "string"
        }
      }
    },
    "telefon": {
      "bsonType": "int"
    },
    "nif": {
      "bsonType": "string"
    },
    "fax": {
      "bsonType": "int"
    },
    "nom": {
      "bsonType": "string"
    },
    "email": {
      "bsonType": "string"
    }
  }
} }});

use('Optica_mongoDB');db.createCollection('Ulleres',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "marca",
    "graduacio_vidre1",
    "graduacio_vidre2",
    "color_muntura",
    "color_v1",
    "color_v2",
    "preu",
    "muntura"
  ],
  "properties": {
    "marca": {
      "bsonType": "string"
    },
    "color_v1": {
      "bsonType": "string"
    },
    "muntura": {
      "bsonType": "object",
      "required": [
        "pasta",
        "metalica",
        "flotant"
      ],
      "properties": {
        "metalica": {
          "bsonType": "bool"
        },
        "flotant": {
          "bsonType": "bool"
        },
        "pasta": {
          "bsonType": "bool"
        }
      }
    },
    "preu": {
      "bsonType": "int"
    },
    "color_muntura": {
      "bsonType": "string"
    },
    "color_v2": {
      "bsonType": "string"
    },
    "graduacio_vidre2": {
      "bsonType": "int"
    },
    "graduacio_vidre1": {
      "bsonType": "int"
    }
  }
} }});

use('Optica_mongoDB');db.createCollection('Ventes',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "clients",
    "ulleres",
    "empleat",
    "data_venta"
  ],
  "properties": {
    "clients": {
      "bsonType": "string"
    },
    "ulleres": {
      "bsonType": "string"
    },
    "empleat": {
      "bsonType": "string"
    },
    "data_venta": {
      "bsonType": "date"
    }
  }
} }});

