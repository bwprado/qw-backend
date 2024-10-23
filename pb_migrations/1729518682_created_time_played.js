/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y6nlul117a4pecu",
    "created": "2024-10-21 13:51:22.117Z",
    "updated": "2024-10-21 13:51:22.149Z",
    "name": "time_played",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kaej0vn5",
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
        "id": "mk5p2fq3",
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
        "id": "eq5qe8ko",
        "name": "match_date",
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
        "id": "padzcimz",
        "name": "matches_played",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "4vmgiibr",
        "name": "total_playtime",
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
      "query": "WITH player_playtime AS (\n    SELECT \n        s.player,\n        DATE(m.date) AS match_date,\n        COUNT(DISTINCT s.match) AS matches_played,\n        SUM(m.duration) AS total_playtime\n    FROM \n        stats s\n    JOIN \n        matches m ON s.match = m.id\n    GROUP BY \n        s.player, DATE(m.date)\n)\nSELECT\n    (ROW_NUMBER() OVER()) as id,\n    p.id AS player_id,\n    p.name AS player_name,\n    pp.match_date,\n    CAST(pp.matches_played AS INT) AS matches_played,\n    CAST(pp.total_playtime AS INT) AS total_playtime\nFROM \n    player_playtime pp\nJOIN\n    players p ON pp.player = p.id\nORDER BY \n    pp.match_date DESC, pp.total_playtime DESC"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y6nlul117a4pecu");

  return dao.deleteCollection(collection);
})
