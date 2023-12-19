const {simpanContact, tulisPertanyaan} = require("./contacts")

const main = async () => {
  const nama = await tulisPertanyaan("Masukkan nama anda: ")
  const email = await tulisPertanyaan("Masukkan email anda: ")
  const noHp = await tulisPertanyaan("Masukukan noHp anda: ")  

  simpanContact(nama, email, noHp)
}

main();
