/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2pa5wwx59itd3q1",
    "created": "2024-10-21 13:51:22.117Z",
    "updated": "2024-10-21 13:51:22.126Z",
    "name": "last_matches",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ofyyujqm",
        "name": "day_of_week",
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
        "id": "vx0iy5xb",
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
        "id": "dc9dhmak",
        "name": "match_count",
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
        "id": "23btsyax",
        "name": "total_frags",
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
      "query": "WITH RECURSIVE\nweek_start AS (\n    SELECT DATE('now', 'weekday 1') AS start_date\n),\ndays(day_number, date) AS (\n    SELECT 0, (SELECT start_date FROM week_start)\n    UNION ALL\n    SELECT day_number + 1, DATE(date, '+1 day')\n    FROM days WHERE day_number < 6\n)\nSELECT\n    (ROW_NUMBER() OVER()) as id,\n    days.day_number AS day_of_week,\n    strftime('%Y-%m-%d', days.date) AS date,\n    COALESCE(COUNT(matches.date), 0) AS match_count,\n    COALESCE(CAST(SUM(score_score) AS INT), 0) AS total_frags\nFROM days\nLEFT JOIN (\n    SELECT\n        date,\n        json_extract(value, '$.score') AS score_score\n    FROM matches,\n    json_each(score)\n    WHERE date >= (SELECT start_date FROM week_start)\n      AND date < DATE((SELECT start_date FROM week_start), '+7 days')\n) matches ON DATE(matches.date) = days.date\nGROUP BY days.day_number, days.date\nORDER BY days.day_number;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2pa5wwx59itd3q1");

  return dao.deleteCollection(collection);
})
