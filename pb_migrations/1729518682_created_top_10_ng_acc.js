/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8lnnkhu784cj7du",
    "created": "2024-10-21 13:51:22.118Z",
    "updated": "2024-10-21 13:51:22.154Z",
    "name": "top_10_ng_acc",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cqprln6a",
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
        "id": "szigygq0",
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
        "id": "1rrm4604",
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
        "id": "wy4juujk",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  p.id AS player,\n  SUM(CAST(json_extract(w.ng, '$.acc.attacks') AS INTEGER)) AS total_attacks,\n  SUM(CAST(json_extract(w.ng, '$.acc.hits') AS INTEGER)) AS total_hits,\n  CAST(SUM(CAST(json_extract(w.ng, '$.acc.hits') AS FLOAT)) / \n       SUM(CAST(json_extract(w.ng, '$.acc.attacks') AS FLOAT)) AS FLOAT) AS accuracy\nFROM \n  weapons w\n  JOIN players p ON w.player = p.id\nWHERE \n  w.ng IS NOT NULL\nGROUP BY \n  p.id\nHAVING \n  COUNT(w.id) > 10\nORDER BY \n  accuracy DESC\nLIMIT 10;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8lnnkhu784cj7du");

  return dao.deleteCollection(collection);
})
