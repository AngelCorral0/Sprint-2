//CREATE DATABASE 'Pizzeria_mongoDB'

use('Pizzeria_mongoDB');db.createCollection('Clients',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "nom",
    "cognoms",
    "adreça",
    "codi_postal",
    "localitat",
    "provincia",
    "telefon"
  ],
  "properties": {
    "cognoms": {
      "bsonType": "string"
    },
    "telefon": {
      "bsonType": "int"
    },
    "codi_postal": {
      "bsonType": "int"
    },
    "localitat": {
      "bsonType": "string"
    },
    "adreça": {
      "bsonType": "string"
    },
    "provincia": {
      "bsonType": "string"
    },
    "nom": {
      "bsonType": "string"
    }
  }
} }});

use('Pizzeria_mongoDB');db.createCollection('Collection',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "comandas"
  ],
  "properties": {
    "comandas": {
      "bsonType": "string"
    }
  }
} }});

use('Pizzeria_mongoDB');db.createCollection('Comandes',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "productes"
  ],
  "properties": {
    "productes": {
      "bsonType": "object",
      "required": [
        "Pizza",
        "Hamburguesa",
        "Begudes"
      ],
      "properties": {
        "Pizza": {
          "bsonType": "object",
          "required": [
            "nom",
            "descripcio",
            "imatge",
            "preu"
          ],
          "properties": {
            "descripcio": {
              "bsonType": "string"
            },
            "preu": {
              "bsonType": "int"
            },
            "nom": {
              "bsonType": "string"
            },
            "imatge": {
              "bsonType": "symbol"
            }
          }
        },
        "Begudes": {
          "bsonType": "object",
          "required": [
            "nom",
            "descripcio",
            "imatge",
            "preu"
          ],
          "properties": {
            "descripcio": {
              "bsonType": "string"
            },
            "preu": {
              "bsonType": "int"
            },
            "nom": {
              "bsonType": "string"
            },
            "imatge": {
              "bsonType": "symbol"
            }
          }
        },
        "Hamburguesa": {
          "bsonType": "object",
          "required": [
            "nom",
            "descripcio",
            "imatge",
            "preu"
          ],
          "properties": {
            "descripcio": {
              "bsonType": "string"
            },
            "preu": {
              "bsonType": "int"
            },
            "nom": {
              "bsonType": "string"
            },
            "imatge": {
              "bsonType": "symbol"
            }
          }
        }
      }
    }
  }
} }});

use('Pizzeria_mongoDB');db.createCollection('botiga',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "adreça",
    "codi_post",
    "localitat",
    "provincia",
    "empleats",
    "clients",
    "comanda"
  ],
  "properties": {
    "empleats": {
      "bsonType": "object",
      "required": [
        "nom",
        "cognoms",
        "NIF",
        "telefon",
        "tipus_empleat"
      ],
      "properties": {
        "cognoms": {
          "bsonType": "string"
        },
        "tipus_empleat": {
          "bsonType": "object",
          "required": [
            "cuiner",
            "repartidor"
          ],
          "properties": {
            "repartidor": {
              "bsonType": "object",
              "required": [
                "id_empleat",
                "liurament"
              ],
              "properties": {
                "liurament": {
                  "bsonType": "timestamp"
                },
                "id_empleat": {
                  "bsonType": "int"
                }
              }
            },
            "cuiner": {
              "bsonType": "bool"
            }
          }
        },
        "telefon": {
          "bsonType": "int"
        },
        "NIF": {
          "bsonType": "string"
        },
        "nom": {
          "bsonType": "string"
        }
      }
    },
    "clients": {
      "bsonType": "string"
    },
    "codi_post": {
      "bsonType": "int"
    },
    "localitat": {
      "bsonType": "string"
    },
    "comanda": {
      "bsonType": "string"
    },
    "adreça": {
      "bsonType": "string"
    },
    "provincia": {
      "bsonType": "string"
    }
  }
} }});

