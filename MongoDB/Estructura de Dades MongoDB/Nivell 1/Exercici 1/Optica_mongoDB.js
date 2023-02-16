
use('Optica_mongoDB');db.createCollection('Adreça',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "carrer",
    "numero",
    "pis",
    "porta",
    "ciutat",
    "codi_postal",
    "pais"
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
} }});

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

use('Optica_mongoDB');db.createCollection('Muntura',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "flotant",
    "pasta",
    "metalica"
  ],
  "properties": {
    "metalica": {
      "bsonType": "string"
    },
    "flotant": {
      "bsonType": "string"
    },
    "pasta": {
      "bsonType": "string"
    }
  }
} }});

use('Optica_mongoDB');db.createCollection('Proveidor',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "nom",
    "adreça",
    "telefon",
    "nif"
  ],
  "properties": {
    "telefon": {
      "bsonType": "int"
    },
    "nif": {
      "bsonType": "string"
    },
    "adreça": {
      "bsonType": "string"
    },
    "fax": {
      "bsonType": "int"
    },
    "nom": {
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
    "muntura",
    "color_muntura",
    "color_v1",
    "color_v2",
    "preu"
  ],
  "properties": {
    "marca": {
      "bsonType": "string"
    },
    "color_v1": {
      "bsonType": "string"
    },
    "muntura": {
      "bsonType": "string"
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

