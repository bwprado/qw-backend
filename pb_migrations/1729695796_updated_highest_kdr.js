/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5jvmyi166gq2g74")

  // remove
  collection.schema.removeField("jsain59w")

  // remove
  collection.schema.removeField("is1wwwrt")

  // remove
  collection.schema.removeField("08yniqa3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uie7nxnm",
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
    "id": "zrs14dpm",
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
    "id": "jm0yp7hl",
    "name": "kdr",
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
  const collection = dao.findCollectionByNameOrId("5jvmyi166gq2g74")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jsain59w",
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
    "id": "is1wwwrt",
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
    "id": "08yniqa3",
    "name": "kdr",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("uie7nxnm")

  // remove
  collection.schema.removeField("zrs14dpm")

  // remove
  collection.schema.removeField("jm0yp7hl")

  return dao.saveCollection(collection)
})
