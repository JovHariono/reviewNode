const fs = require("node:fs");

//menuliskan file secara synchronus
// try {
//   fs.writeFileSync("data/test.txt", "Hello world secara synchronus!");
// } catch (error) {
//     console.log(error)
// }

//menuliskan file async
// fs.writeFile('data/test.txt', 'Hello world secara async', (err) => {
//     console.log(err)
// })

//membaca isi file secara sync
// const data = fs.readFileSync('data/test.txt', 'utf-8')
// console.log(data)

//membaca isi file secara async
// fs.readFile("data/test.txt", "utf-8", (e, data) => {
//   if (e) throw e;
//   console.log(data);
// });

//readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda: ", (nama) => {
  rl.question("Masukkan no HP anda: ", (noHp) => {
    const contact = {
      nama,
      noHp,
    };

    const file = fs.readFileSync("data/contacts.json", "utf8");
    //supaya sifatnya menjadi seperti array bisa di push
    const contacts = JSON.parse(file)

    contacts.push(contact)

    //karena harus string maka diubah lagi ke string
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts))

    console.log("Terima kasih sudha memasukkan data")

    rl.close();
  });
});
