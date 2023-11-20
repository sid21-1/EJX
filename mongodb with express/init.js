const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "preeti",
    msg: "send me notes for the exam",
    created_at: new Date(),
  },
  {
    from: "rohit",
    to: "mohit",
    msg: "teach me JS callbacks",
    created_at: new Date(),
  },
  {
    from: "siddhanth",
    to: "shahbaz",
    msg: "find me some clients",
    created_at: new Date(),
  },
  {
    from: "ravi",
    to: "shahank",
    msg: "start studying for the exams",
    created_at: new Date(),
  },
  {
    from: "rony",
    to: "rintoo",
    msg: "upload the files in the webiste",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
