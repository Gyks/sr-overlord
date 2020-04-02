db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nickname", "fullName", "seasonStatus", "links"],
      properties: {
        nickname: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        fullName: {
          bsonType: "object",
          required: ["firstName"],
          properties: {
            firstName: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            secondName: {
              bsonType: "string",
              description: "must be a string if exists"
            }
          }
        },
        seasonStatus: {
          bsonType: "object",
          required: ["current", "lastUpdated"],
          properties: {
            current: {
              enum: ["Active", "Inactive", "Trainee", "Support"],
              description: "can only be one of the enum values and is required"
            },
            lastUpdated: {
              bsonType: "date",
              description: "required and must be date"
            }
          }
        },
        links: {
          bsonType: "object",
          required: ["vk", "discord"],
          properties: {
            discord: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            vk: {
              bsonType: "string",
              description: "must be a string if exists"
            }
          }
        }
      }
    }
  }
});

db.createCollection("titles", {
  bsonType: "object",
  required: [
    "name",
    "altNames",
    "episodies",
    "translators",
    "editors",
    "links"
  ],
  properties: {
    name: {
      bsonType: "string",
      description: "must be a string and is required"
    },
    altNames: {
      bsonType: "array"
    },
    episodies: {
      bsonType: "array"
    },
    links: {
      bsonType: "object",
      required: ["mal", "shiki"],
      properties: {
        mal: {
          bsonType: "string"
        },
        shiki: {
          bsonType: "string"
        }
      }
    }
  }
});

db.createCollection("episodes", {
  bsonType: "object",
  required: [
    "number",
    "translators",
    "editors",
    "engSubDate",
    "animeId",
    "finishTime"
  ],
  properties: {
    number: {
      bsonType: "int",
      description: "must be a int and is required"
    },
    translators: {
      bsonType: "array"
    },
    editors: {
      bsonType: "array"
    },
    engSubDate: {
      bsonType: "date"
    },
    finishTime: {
      bsonType: "date"
    }
  }
});
