/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qpna0ymsa0bg2r6",
    "created": "2024-10-21 13:51:22.116Z",
    "updated": "2024-10-21 13:51:22.123Z",
    "name": "highest_kills",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n    stats.id,\n    stats.match,\n    stats.player,\n    MAX(kills) as kills\nFROM stats\nGROUP BY player\nORDER BY kills DESC;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qpna0ymsa0bg2r6");

  return dao.deleteCollection(collection);
})
