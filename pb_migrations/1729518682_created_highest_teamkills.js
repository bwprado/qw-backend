/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "um2gln8mgm1fiel",
    "created": "2024-10-21 13:51:22.116Z",
    "updated": "2024-10-21 13:51:22.125Z",
    "name": "highest_teamkills",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "f6vsgidr",
        "name": "player_id",
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
        "id": "hrt0ll2f",
        "name": "player_name",
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
        "id": "j8xhgkz5",
        "name": "matches_played",
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
        "id": "sanosjsv",
        "name": "total_teamkills",
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
        "id": "u7ob5iiu",
        "name": "avg_teamkills_per_match",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "WITH player_teamkills AS (\n    SELECT \n        s.player,\n        CAST(COUNT(DISTINCT s.match) AS INTEGER) AS matches_played,\n        CAST(SUM(s.tk) AS INTEGER) AS total_teamkills\n    FROM \n        stats s\n    JOIN \n        matches m ON s.match = m.id\n    GROUP BY \n        s.player\n)\nSELECT\n    (ROW_NUMBER() OVER()) as id,\n    p.id AS player_id,\n    p.name AS player_name,\n    pt.matches_played,\n    pt.total_teamkills,\n    CAST(ROUND(CAST(pt.total_teamkills AS REAL) / CASE WHEN pt.matches_played = 0 THEN 1 ELSE pt.matches_played END, 2) AS REAL) AS avg_teamkills_per_match\nFROM \n    player_teamkills pt\nJOIN\n    players p ON pt.player = p.id\nORDER BY \n    pt.total_teamkills DESC, pt.matches_played DESC"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("um2gln8mgm1fiel");

  return dao.deleteCollection(collection);
})
