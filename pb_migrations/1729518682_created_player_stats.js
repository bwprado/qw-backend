/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "drz9vls1frn6zbm",
    "created": "2024-10-21 13:51:22.117Z",
    "updated": "2024-10-21 13:51:22.143Z",
    "name": "player_stats",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wmrl7t37",
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
        "id": "60yfqzoc",
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
        "id": "j3fvtnd3",
        "name": "frags",
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
        "id": "nqwzpks7",
        "name": "kills",
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
        "id": "ucumvavl",
        "name": "deaths",
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
        "id": "ofztx7kp",
        "name": "teamkills",
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
        "id": "nw0dtcup",
        "name": "suicides",
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
        "id": "x9lgdrwx",
        "name": "matches",
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
        "id": "xkmsnmfb",
        "name": "wins",
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
        "id": "ijcsamyr",
        "name": "time_played",
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
        "id": "az9syncn",
        "name": "quads",
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
      "query": "WITH player_stats AS (\n    SELECT \n        s.player,\n        DATE(m.date) AS date,\n        SUM(m.duration) AS time_played,\n        SUM(s.frags) AS frags,\n        SUM(s.kills) AS kills,\n        SUM(s.deaths) AS deaths,\n        SUM(s.tk) AS teamkills,\n        SUM(s.suicides) AS suicides,\n        SUM(s.result = 'win') AS wins,\n        COUNT(DISTINCT s.match) AS matches,\n        SUM(i.quads) AS quads\n    FROM stats s\n    JOIN matches m ON s.match = m.id\n    LEFT JOIN items i ON s.player = i.player AND s.match = i.match\n    GROUP BY s.player, DATE(m.date)\n)\nSELECT \n    (ROW_NUMBER() OVER()) as id,\n    p.id AS player,\n    DATE(dps.date) AS date,\n    CAST(dps.frags AS INT) AS frags,\n    CAST(dps.kills AS INT) AS kills,\n    CAST(dps.deaths AS INT) AS deaths,\n    CAST(dps.teamkills AS INT) AS teamkills,\n    CAST(dps.suicides AS INT) AS suicides,\n    CAST(dps.matches AS INT) AS matches,\n    CAST(dps.wins AS INT) AS wins,\n    CAST(dps.time_played AS INT) AS time_played,\n    CAST(dps.quads AS INT) AS quads\nFROM player_stats dps\nJOIN players p ON dps.player = p.id\nORDER BY dps.date DESC, dps.frags DESC"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("drz9vls1frn6zbm");

  return dao.deleteCollection(collection);
})
