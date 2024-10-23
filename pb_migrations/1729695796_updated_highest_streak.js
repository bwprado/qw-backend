/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f0awayn3e9h273c")

  // remove
  collection.schema.removeField("urknlnjm")

  // remove
  collection.schema.removeField("m4tdauxe")

  // remove
  collection.schema.removeField("w6vp8g3z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bnqip1r5",
    "name": "match",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "lvew069zzxfz58l",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iaystdr6",
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
    "id": "sb0jwaz8",
    "name": "max",
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
  const collection = dao.findCollectionByNameOrId("f0awayn3e9h273c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "urknlnjm",
    "name": "match",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "lvew069zzxfz58l",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m4tdauxe",
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
    "id": "w6vp8g3z",
    "name": "max",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("bnqip1r5")

  // remove
  collection.schema.removeField("iaystdr6")

  // remove
  collection.schema.removeField("sb0jwaz8")

  return dao.saveCollection(collection)
})
