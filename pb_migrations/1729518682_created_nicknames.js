/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gy1kve879u369b0",
    "created": "2024-10-21 13:51:22.116Z",
    "updated": "2024-10-21 13:51:22.116Z",
    "name": "nicknames",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ckj3ogwi",
        "name": "nick",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gy1kve879u369b0");

  return dao.deleteCollection(collection);
})
