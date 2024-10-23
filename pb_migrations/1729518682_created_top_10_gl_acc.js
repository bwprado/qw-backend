/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3mqa4vz8uj2qifl",
    "created": "2024-10-21 13:51:22.117Z",
    "updated": "2024-10-21 13:51:22.151Z",
    "name": "top_10_gl_acc",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tablxck7",
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
        "id": "tt5gu9ci",
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
        "id": "bylcovl4",
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
        "id": "qywtyza5",
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
      "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  p.id AS player,\n  SUM(CAST(json_extract(w.gl, '$.acc.attacks') AS INTEGER)) AS total_attacks,\n  SUM(CAST(json_extract(w.gl, '$.acc.hits') AS INTEGER)) AS total_hits,\n  CAST(SUM(CAST(json_extract(w.gl, '$.acc.hits') AS FLOAT)) / \n       SUM(CAST(json_extract(w.gl, '$.acc.attacks') AS FLOAT)) AS FLOAT) AS accuracy\nFROM \n  weapons w\n  JOIN players p ON w.player = p.id\nWHERE \n  w.gl IS NOT NULL\nGROUP BY \n  p.id\nHAVING \n  COUNT(w.id) > 10\nORDER BY \n  accuracy DESC\nLIMIT 10;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3mqa4vz8uj2qifl");

  return dao.deleteCollection(collection);
})
