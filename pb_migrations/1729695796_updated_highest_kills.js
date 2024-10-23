/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qpna0ymsa0bg2r6")

  // remove
  collection.schema.removeField("h0v97rhm")

  // remove
  collection.schema.removeField("hobhiss2")

  // remove
  collection.schema.removeField("asqwdigp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9a11uavh",
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
    "id": "wy492vwa",
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
    "id": "uyfthd0s",
    "name": "kills",
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
  const collection = dao.findCollectionByNameOrId("qpna0ymsa0bg2r6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h0v97rhm",
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
    "id": "hobhiss2",
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
    "id": "asqwdigp",
    "name": "kills",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("9a11uavh")

  // remove
  collection.schema.removeField("wy492vwa")

  // remove
  collection.schema.removeField("uyfthd0s")

  return dao.saveCollection(collection)
})
