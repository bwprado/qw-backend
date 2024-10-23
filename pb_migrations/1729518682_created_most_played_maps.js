/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nvp2tw171elaaiu",
    "created": "2024-10-21 13:51:22.117Z",
    "updated": "2024-10-21 13:51:22.141Z",
    "name": "most_played_maps",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eqzjx3os",
        "name": "map",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "djmgol8e",
        "name": "times_played",
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
      "query": "SELECT\n  matches.id,\n  matches.map,\n  COUNT(matches.map) AS times_played  -- Count how many times each map was played\nFROM matches\nGROUP BY matches.map;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nvp2tw171elaaiu");

  return dao.deleteCollection(collection);
})
