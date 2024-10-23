/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "djjt0cwh1ej2sv2",
    "created": "2024-10-21 13:51:22.117Z",
    "updated": "2024-10-21 13:51:22.148Z",
    "name": "rating_stats",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dbujkqbk",
        "name": "match",
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
        "id": "wqesiyzc",
        "name": "best_kills_player",
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
        "id": "c9rbg3mj",
        "name": "max_kills",
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
        "id": "kvm6gubf",
        "name": "best_kdr_player",
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
        "id": "luvwerk2",
        "name": "max_kdr",
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
        "id": "hwsb4tlm",
        "name": "most_deaths_player",
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
        "id": "6d6vkekk",
        "name": "max_deaths",
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
        "id": "sayuqwdr",
        "name": "best_frags_player",
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
        "id": "7n37fxzz",
        "name": "max_frags",
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
        "id": "1dhyyh4s",
        "name": "most_teamkills_player",
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
        "id": "wajsm2x3",
        "name": "max_teamkills",
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
        "id": "aixpq1jb",
        "name": "most_suicides_player",
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
        "id": "i6niyhci",
        "name": "max_suicides",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
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
      "query": "WITH RankedStats AS (\n    SELECT\n        match,\n        player,\n        kills,\n        kdr,\n        deaths,\n        frags,\n        tk AS teamkills,\n        suicides,\n        ROW_NUMBER() OVER (PARTITION BY match ORDER BY kills DESC) AS kills_rank,\n        ROW_NUMBER() OVER (PARTITION BY match ORDER BY kdr DESC) AS kdr_rank,\n        ROW_NUMBER() OVER (PARTITION BY match ORDER BY deaths DESC) AS deaths_rank,\n        ROW_NUMBER() OVER (PARTITION BY match ORDER BY frags DESC) AS frags_rank,\n        ROW_NUMBER() OVER (PARTITION BY match ORDER BY tk DESC) AS teamkills_rank,\n        ROW_NUMBER() OVER (PARTITION BY match ORDER BY suicides DESC) AS suicides_rank\n    FROM stats\n)\nSELECT\n    (ROW_NUMBER() OVER()) AS id,\n    match,\n    MAX(CASE WHEN kills_rank = 1 THEN player END) AS best_kills_player,\n    MAX(CASE WHEN kills_rank = 1 THEN kills END) AS max_kills,\n    MAX(CASE WHEN kdr_rank = 1 THEN player END) AS best_kdr_player,\n    MAX(CASE WHEN kdr_rank = 1 THEN kdr END) AS max_kdr,\n    MAX(CASE WHEN deaths_rank = 1 THEN player END) AS most_deaths_player,\n    MAX(CASE WHEN deaths_rank = 1 THEN deaths END) AS max_deaths,\n    MAX(CASE WHEN frags_rank = 1 THEN player END) AS best_frags_player,\n    MAX(CASE WHEN frags_rank = 1 THEN frags END) AS max_frags,\n    MAX(CASE WHEN teamkills_rank = 1 THEN player END) AS most_teamkills_player,\n    MAX(CASE WHEN teamkills_rank = 1 THEN teamkills END) AS max_teamkills,\n    MAX(CASE WHEN suicides_rank = 1 THEN player END) AS most_suicides_player,\n    MAX(CASE WHEN suicides_rank = 1 THEN suicides END) AS max_suicides\nFROM RankedStats\nGROUP BY match"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("djjt0cwh1ej2sv2");

  return dao.deleteCollection(collection);
})
