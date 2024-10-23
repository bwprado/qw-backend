/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvp2tw171elaaiu")

  // remove
  collection.schema.removeField("eqzjx3os")

  // remove
  collection.schema.removeField("djmgol8e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "afbmsrg1",
    "name": "map",
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
    "id": "q9zhmddf",
    "name": "times_played",
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
  const collection = dao.findCollectionByNameOrId("nvp2tw171elaaiu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eqzjx3os",
    "name": "map",
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
    "id": "djmgol8e",
    "name": "times_played",
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
  collection.schema.removeField("afbmsrg1")

  // remove
  collection.schema.removeField("q9zhmddf")

  return dao.saveCollection(collection)
})
