/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "e79qf9jrlcuq70q",
    "created": "2024-10-21 13:51:22.117Z",
    "updated": "2024-10-21 13:51:22.132Z",
    "name": "max_avg_kills",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qnidulvo",
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
        "id": "g2n2f5ze",
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
      "query": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  s.player, \n  CAST(AVG(s.kills) AS REAL) as value\nFROM \n  stats s\nGROUP BY \n  s.player\nHAVING \n  COUNT(s.match) > 20\nORDER BY \n  value DESC\nLIMIT 10;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("e79qf9jrlcuq70q");

  return dao.deleteCollection(collection);
})
