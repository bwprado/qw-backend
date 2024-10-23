/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("um2gln8mgm1fiel")

  // remove
  collection.schema.removeField("f6vsgidr")

  // remove
  collection.schema.removeField("hrt0ll2f")

  // remove
  collection.schema.removeField("j8xhgkz5")

  // remove
  collection.schema.removeField("sanosjsv")

  // remove
  collection.schema.removeField("u7ob5iiu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kuhq48if",
    "name": "player_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "w0jjpq5ucemxjxy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qhx0imqt",
    "name": "player_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "85h53edl",
    "name": "matches_played",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jtagzg1y",
    "name": "total_teamkills",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "no9fer7s",
    "name": "avg_teamkills_per_match",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("um2gln8mgm1fiel")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f6vsgidr",
    "name": "player_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "w0jjpq5ucemxjxy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hrt0ll2f",
    "name": "player_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j8xhgkz5",
    "name": "matches_played",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sanosjsv",
    "name": "total_teamkills",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u7ob5iiu",
    "name": "avg_teamkills_per_match",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("kuhq48if")

  // remove
  collection.schema.removeField("qhx0imqt")

  // remove
  collection.schema.removeField("85h53edl")

  // remove
  collection.schema.removeField("jtagzg1y")

  // remove
  collection.schema.removeField("no9fer7s")

  return dao.saveCollection(collection)
})
