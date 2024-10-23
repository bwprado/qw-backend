/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0xu718522qwuyio",
    "created": "2024-10-21 13:51:22.117Z",
    "updated": "2024-10-21 13:51:22.153Z",
    "name": "top_10_lg_acc",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hqi1ctwb",
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
        "id": "inhmivvy",
        "name": "total_attacks",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "hgzyhgvw",
        "name": "total_hits",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "dfhkebvd",
        "name": "accuracy",
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
      "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  p.id AS player,\n  SUM(CAST(json_extract(w.lg, '$.acc.attacks') AS INTEGER)) AS total_attacks,\n  SUM(CAST(json_extract(w.lg, '$.acc.hits') AS INTEGER)) AS total_hits,\n  CAST(SUM(CAST(json_extract(w.lg, '$.acc.hits') AS FLOAT)) / \n       SUM(CAST(json_extract(w.lg, '$.acc.attacks') AS FLOAT)) AS FLOAT) AS accuracy\nFROM \n  weapons w\n  JOIN players p ON w.player = p.id\nWHERE \n  w.lg IS NOT NULL\nGROUP BY \n  p.id\nHAVING \n  COUNT(w.id) > 10\nORDER BY \n  accuracy DESC\nLIMIT 10;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0xu718522qwuyio");

  return dao.deleteCollection(collection);
})
