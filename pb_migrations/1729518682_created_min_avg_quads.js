/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "o89iygjzgacov8g",
    "created": "2024-10-21 13:51:22.117Z",
    "updated": "2024-10-21 13:51:22.138Z",
    "name": "min_avg_quads",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "laibwotz",
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
        "id": "biuiqo9a",
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
      "query": "SELECT\n  (ROW_NUMBER() OVER ()) as id,\n  i.player,\n  CAST(AVG(i.quads) AS REAL) AS value\nFROM\n  items i\nGROUP BY\n  i.player\nHAVING\n  COUNT(i.match) > 20\nORDER BY\n  value ASC\nLIMIT\n  1;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("o89iygjzgacov8g");

  return dao.deleteCollection(collection);
})
