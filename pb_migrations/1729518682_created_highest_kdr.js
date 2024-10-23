/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5jvmyi166gq2g74",
    "created": "2024-10-21 13:51:22.116Z",
    "updated": "2024-10-21 13:51:22.122Z",
    "name": "highest_kdr",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n    stats.id,\n    stats.match,\n    stats.player,\n    MAX(kdr) as kdr\nFROM stats\nGROUP BY player"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5jvmyi166gq2g74");

  return dao.deleteCollection(collection);
})
