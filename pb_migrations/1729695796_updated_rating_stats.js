/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("djjt0cwh1ej2sv2")

  // remove
  collection.schema.removeField("dbujkqbk")

  // remove
  collection.schema.removeField("wqesiyzc")

  // remove
  collection.schema.removeField("c9rbg3mj")

  // remove
  collection.schema.removeField("kvm6gubf")

  // remove
  collection.schema.removeField("luvwerk2")

  // remove
  collection.schema.removeField("hwsb4tlm")

  // remove
  collection.schema.removeField("6d6vkekk")

  // remove
  collection.schema.removeField("sayuqwdr")

  // remove
  collection.schema.removeField("7n37fxzz")

  // remove
  collection.schema.removeField("1dhyyh4s")

  // remove
  collection.schema.removeField("wajsm2x3")

  // remove
  collection.schema.removeField("aixpq1jb")

  // remove
  collection.schema.removeField("i6niyhci")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mlstvawq",
    "name": "match",
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
    "id": "ttenwyeg",
    "name": "best_kills_player",
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
    "id": "retrzmgi",
    "name": "max_kills",
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
    "id": "hkgczk7o",
    "name": "best_kdr_player",
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
    "id": "wwajnzcx",
    "name": "max_kdr",
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
    "id": "qxxb1fju",
    "name": "most_deaths_player",
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
    "id": "do2dsipv",
    "name": "max_deaths",
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
    "id": "ccnjwcir",
    "name": "best_frags_player",
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
    "id": "rywih552",
    "name": "max_frags",
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
    "id": "aerfrvkd",
    "name": "most_teamkills_player",
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
    "id": "wuvmwwwu",
    "name": "max_teamkills",
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
    "id": "k31rneqr",
    "name": "most_suicides_player",
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
    "id": "fb4bb2zd",
    "name": "max_suicides",
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
  const collection = dao.findCollectionByNameOrId("djjt0cwh1ej2sv2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dbujkqbk",
    "name": "match",
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
    "id": "wqesiyzc",
    "name": "best_kills_player",
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
    "id": "c9rbg3mj",
    "name": "max_kills",
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
    "id": "kvm6gubf",
    "name": "best_kdr_player",
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
    "id": "luvwerk2",
    "name": "max_kdr",
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
    "id": "hwsb4tlm",
    "name": "most_deaths_player",
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
    "id": "6d6vkekk",
    "name": "max_deaths",
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
    "id": "sayuqwdr",
    "name": "best_frags_player",
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
    "id": "7n37fxzz",
    "name": "max_frags",
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
    "id": "1dhyyh4s",
    "name": "most_teamkills_player",
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
    "id": "wajsm2x3",
    "name": "max_teamkills",
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
    "id": "aixpq1jb",
    "name": "most_suicides_player",
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
    "id": "i6niyhci",
    "name": "max_suicides",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("mlstvawq")

  // remove
  collection.schema.removeField("ttenwyeg")

  // remove
  collection.schema.removeField("retrzmgi")

  // remove
  collection.schema.removeField("hkgczk7o")

  // remove
  collection.schema.removeField("wwajnzcx")

  // remove
  collection.schema.removeField("qxxb1fju")

  // remove
  collection.schema.removeField("do2dsipv")

  // remove
  collection.schema.removeField("ccnjwcir")

  // remove
  collection.schema.removeField("rywih552")

  // remove
  collection.schema.removeField("aerfrvkd")

  // remove
  collection.schema.removeField("wuvmwwwu")

  // remove
  collection.schema.removeField("k31rneqr")

  // remove
  collection.schema.removeField("fb4bb2zd")

  return dao.saveCollection(collection)
})
