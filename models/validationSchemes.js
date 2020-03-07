// https://stackoverflow.com/questions/10656574/how-do-i-manage-mongodb-connections-in-a-node-js-web-application
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
