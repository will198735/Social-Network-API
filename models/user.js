const { Schema, model } = require("mongoose");

const userSchema = new Schema (
    {
        userName: {
            type: String,
            unique: true,
            trime: true,
            required: "Userename is required",

        },
        
            email: {
                type: String,
                required: "Email is required",
                unique: true,
                match:[],

            },
            thougths: {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
            friends: [
                {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
       toJson: {
        virtuals: true,
       },
       id: false
    }

);
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });
  const user = model("user", userSchema);
  module.exports = user;