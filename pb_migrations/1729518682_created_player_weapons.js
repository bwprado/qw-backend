/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "a37yrxei7ltp8g1",
    "created": "2024-10-21 13:51:22.117Z",
    "updated": "2024-10-21 13:51:22.147Z",
    "name": "player_weapons",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hnaerhf3",
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
        "id": "hkaxlxfz",
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
        "id": "6za5z0px",
        "name": "sg_attacks",
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
        "id": "hc9qpew2",
        "name": "sg_hits",
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
        "id": "5h76zkti",
        "name": "sg_acc",
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
        "id": "tdg41yax",
        "name": "ssg_attacks",
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
        "id": "jgenfgpw",
        "name": "ssg_hits",
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
        "id": "beturaol",
        "name": "ssg_acc",
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
        "id": "az79qytj",
        "name": "ng_attacks",
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
        "id": "vgvl6kaj",
        "name": "ng_hits",
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
        "id": "9h4jclhs",
        "name": "ng_acc",
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
        "id": "cey3kiwj",
        "name": "sng_attacks",
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
        "id": "r4sr3wmp",
        "name": "sng_hits",
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
        "id": "gynzzx0f",
        "name": "sng_acc",
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
        "id": "qxerm7lt",
        "name": "gl_attacks",
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
        "id": "fvpn8lwy",
        "name": "gl_hits",
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
        "id": "qwmdarb8",
        "name": "gl_acc",
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
        "id": "jtfgxdyo",
        "name": "rl_attacks",
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
        "id": "qopuuhqv",
        "name": "rl_hits",
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
        "id": "0poaol6b",
        "name": "rl_acc",
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
        "id": "rfuxbgjf",
        "name": "lg_attacks",
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
        "id": "tddp6zdo",
        "name": "lg_hits",
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
        "id": "m0gz6gzh",
        "name": "lg_acc",
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
        "id": "rpifamrf",
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "WITH weapon_stats AS (\n    SELECT \n        w.player,\n        DATE(m.date) AS date,\n        SUM(COALESCE(CAST(json_extract(w.sg, '$.acc.attacks') AS INT), 0)) AS sg_attacks,\n        SUM(COALESCE(CAST(json_extract(w.sg, '$.acc.hits') AS INT), 0)) AS sg_hits,\n        SUM(COALESCE(CAST(json_extract(w.ssg, '$.acc.attacks') AS INT), 0)) AS ssg_attacks,\n        SUM(COALESCE(CAST(json_extract(w.ssg, '$.acc.hits') AS INT), 0)) AS ssg_hits,\n        SUM(COALESCE(CAST(json_extract(w.ng, '$.acc.attacks') AS INT), 0)) AS ng_attacks,\n        SUM(COALESCE(CAST(json_extract(w.ng, '$.acc.hits') AS INT), 0)) AS ng_hits,\n        SUM(COALESCE(CAST(json_extract(w.sng, '$.acc.attacks') AS INT), 0)) AS sng_attacks,\n        SUM(COALESCE(CAST(json_extract(w.sng, '$.acc.hits') AS INT), 0)) AS sng_hits,\n        SUM(COALESCE(CAST(json_extract(w.gl, '$.acc.attacks') AS INT), 0)) AS gl_attacks,\n        SUM(COALESCE(CAST(json_extract(w.gl, '$.acc.hits') AS INT), 0)) AS gl_hits,\n        SUM(COALESCE(CAST(json_extract(w.rl, '$.acc.attacks') AS INT), 0)) AS rl_attacks,\n        SUM(COALESCE(CAST(json_extract(w.rl, '$.acc.hits') AS INT), 0)) AS rl_hits,\n        SUM(COALESCE(CAST(json_extract(w.lg, '$.acc.attacks') AS INT), 0)) AS lg_attacks,\n        SUM(COALESCE(CAST(json_extract(w.lg, '$.acc.hits') AS INT), 0)) AS lg_hits,\n        COUNT(DISTINCT w.match) AS matches\n    FROM weapons w\n    JOIN matches m ON w.match = m.id\n    GROUP BY w.player, DATE(m.date)\n)\nSELECT \n    (ROW_NUMBER() OVER()) AS id,\n    p.id AS player,\n    DATE(ws.date) AS date,\n    CAST(ws.sg_attacks AS INT) AS sg_attacks,\n    CAST(ws.sg_hits AS INT) AS sg_hits,\n    COALESCE(CAST(ws.sg_hits AS FLOAT) / NULLIF(ws.sg_attacks, 0), 0) AS sg_acc,\n    CAST(ws.ssg_attacks AS INT) AS ssg_attacks,\n    CAST(ws.ssg_hits AS INT) AS ssg_hits,\n    COALESCE(CAST(ws.ssg_hits AS FLOAT) / NULLIF(ws.ssg_attacks, 0), 0) AS ssg_acc,\n    CAST(ws.ng_attacks AS INT) AS ng_attacks,\n    CAST(ws.ng_hits AS INT) AS ng_hits,\n    COALESCE(CAST(ws.ng_hits AS FLOAT) / NULLIF(ws.ng_attacks, 0), 0) AS ng_acc,\n    CAST(ws.sng_attacks AS INT) AS sng_attacks,\n    CAST(ws.sng_hits AS INT) AS sng_hits,\n    COALESCE(CAST(ws.sng_hits AS FLOAT) / NULLIF(ws.sng_attacks, 0), 0) AS sng_acc,\n    CAST(ws.gl_attacks AS INT) AS gl_attacks,\n    CAST(ws.gl_hits AS INT) AS gl_hits,\n    COALESCE(CAST(ws.gl_hits AS FLOAT) / NULLIF(ws.gl_attacks, 0), 0) AS gl_acc,\n    CAST(ws.rl_attacks AS INT) AS rl_attacks,\n    CAST(ws.rl_hits AS INT) AS rl_hits,\n    COALESCE(CAST(ws.rl_hits AS FLOAT) / NULLIF(ws.rl_attacks, 0), 0) AS rl_acc,\n    CAST(ws.lg_attacks AS INT) AS lg_attacks,\n    CAST(ws.lg_hits AS INT) AS lg_hits,\n    COALESCE(CAST(ws.lg_hits AS FLOAT) / NULLIF(ws.lg_attacks, 0), 0) AS lg_acc,\n    CAST(ws.matches AS INT) AS matches\nFROM weapon_stats ws\nJOIN players p ON ws.player = p.id\nORDER BY ws.date DESC, ws.sg_attacks DESC;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("a37yrxei7ltp8g1");

  return dao.deleteCollection(collection);
})
