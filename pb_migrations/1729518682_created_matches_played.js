/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "r1cub8f6d0kq6y7",
    "created": "2024-10-21 13:51:22.117Z",
    "updated": "2024-10-21 13:51:22.127Z",
    "name": "matches_played",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "g8mwi6wi",
        "name": "date",
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
        "id": "pjgw4aj9",
        "name": "count",
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
      "query": "SELECT\n  (ROW_NUMBER() OVER()) AS id,  -- Generate a unique sequential ID\n  DATE(date) AS date,  -- Extract the date (YYYY-MM-DD) from the timestamp\n  COUNT(*) AS count  -- Count the number of matches per day\nFROM matches\nGROUP BY DATE(date)  -- Group by just the date part\nORDER BY date DESC;\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r1cub8f6d0kq6y7");

  return dao.deleteCollection(collection);
})
