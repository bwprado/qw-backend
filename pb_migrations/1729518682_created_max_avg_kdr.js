/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0183xvw1nsfvjmd",
    "created": "2024-10-21 13:51:22.117Z",
    "updated": "2024-10-21 13:51:22.131Z",
    "name": "max_avg_kdr",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "n6xbxboi",
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
        "id": "8lvdi9i3",
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
      "query": "SELECT\n  (ROW_NUMBER() OVER ()) as id,\n  s.player,\n  CAST(AVG(s.kdr) AS REAL) AS value\nFROM\n  stats s\nGROUP BY\n  s.player\nHAVING\n  COUNT(s.match) > 20\nORDER BY\n  kdr DESC\nLIMIT\n  1;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0183xvw1nsfvjmd");

  return dao.deleteCollection(collection);
})
