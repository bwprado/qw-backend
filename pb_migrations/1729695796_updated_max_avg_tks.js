/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qn3yfzx1ioi841a")

  // remove
  collection.schema.removeField("mxvzymqs")

  // remove
  collection.schema.removeField("kddnzh0p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w3tsdxwv",
    "name": "player",
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
    "id": "azbinhri",
    "name": "value",
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
  const collection = dao.findCollectionByNameOrId("qn3yfzx1ioi841a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mxvzymqs",
    "name": "player",
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
    "id": "kddnzh0p",
    "name": "value",
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
  collection.schema.removeField("w3tsdxwv")

  // remove
  collection.schema.removeField("azbinhri")

  return dao.saveCollection(collection)
})
