/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2pa5wwx59itd3q1")

  // remove
  collection.schema.removeField("ofyyujqm")

  // remove
  collection.schema.removeField("vx0iy5xb")

  // remove
  collection.schema.removeField("dc9dhmak")

  // remove
  collection.schema.removeField("23btsyax")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7d4lqxp1",
    "name": "day_of_week",
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
    "id": "rji3qckq",
    "name": "date",
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
    "id": "iztbvcxv",
    "name": "match_count",
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
    "id": "jrakxres",
    "name": "total_frags",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2pa5wwx59itd3q1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ofyyujqm",
    "name": "day_of_week",
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
    "id": "vx0iy5xb",
    "name": "date",
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
    "id": "dc9dhmak",
    "name": "match_count",
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
    "id": "23btsyax",
    "name": "total_frags",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("7d4lqxp1")

  // remove
  collection.schema.removeField("rji3qckq")

  // remove
  collection.schema.removeField("iztbvcxv")

  // remove
  collection.schema.removeField("jrakxres")

  return dao.saveCollection(collection)
})
