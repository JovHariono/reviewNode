const fs = require("node:fs");

//readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//membuat folder data jika belum ada
if (!fs.existsSync("./data")) {
  fs.mkdirSync("./data");
}

//membuat file contacs.json jika belum ada
if (!fs.existsSync("./data/contacts.json")) {
  fs.writeFileSync("./data/contacts.json", "[]", "utf-8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, rejects) => {
    rl.question(pertanyaan, (data) => {
      resolve(data);
    });
  });
};

const simpanContact = (nama, email, noHp) => {
  const contact = { nama, email, noHp };

  const file = fs.readFileSync("data/contacts.json", "utf8");
  //supaya sifatnya menjadi seperti array bisa di push
  const contacts = JSON.parse(file);

  contacts.push(contact);

  //karena harus string maka diubah lagi ke string
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log("Terima kasih sudha memasukkan data");

  rl.close();
};

module.exports = {tulisPertanyaan, simpanContact}