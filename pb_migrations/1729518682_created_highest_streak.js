/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "f0awayn3e9h273c",
    "created": "2024-10-21 13:51:22.116Z",
    "updated": "2024-10-21 13:51:22.124Z",
    "name": "highest_streak",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n    spree.id,\n    spree.match,\n    spree.player,\n    MAX(spree.max) as max\nFROM spree\nGROUP BY player"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("f0awayn3e9h273c");

  return dao.deleteCollection(collection);
})
