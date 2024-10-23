/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qn3yfzx1ioi841a",
    "created": "2024-10-21 13:51:22.117Z",
    "updated": "2024-10-21 13:51:22.134Z",
    "name": "max_avg_tks",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mxvzymqs",
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
        "id": "kddnzh0p",
        "name": "value",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
      "query": "SELECT\n  (ROW_NUMBER() OVER ()) as id,\n  s.player,\n  CAST(AVG(s.tk) AS REAL) AS value\nFROM\n  stats s\nGROUP BY\n  s.player\nHAVING\n  COUNT(s.match) > 20\nORDER BY\n  value DESC\nLIMIT\n  1;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qn3yfzx1ioi841a");

  return dao.deleteCollection(collection);
})
