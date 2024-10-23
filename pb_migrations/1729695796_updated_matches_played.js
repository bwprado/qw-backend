/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r1cub8f6d0kq6y7")

  // remove
  collection.schema.removeField("g8mwi6wi")

  // remove
  collection.schema.removeField("pjgw4aj9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fqjdxdab",
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
    "id": "wmirup9v",
    "name": "count",
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
  const collection = dao.findCollectionByNameOrId("r1cub8f6d0kq6y7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g8mwi6wi",
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
    "id": "pjgw4aj9",
    "name": "count",
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
  collection.schema.removeField("fqjdxdab")

  // remove
  collection.schema.removeField("wmirup9v")

  return dao.saveCollection(collection)
})
