const rumus = require('./rumus')


const sisiPersegi= 5
const panjangPersegiPanjang = 3
const lebarPersegiPanjang = 5

const luasPersegi = rumus.hitungLuasPersegi(sisiPersegi);
const kelilingPersegi = rumus.hitungKelilingPersegi(sisiPersegi);
const luasPersegiPanjang = rumus.hitungLuasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
const kelilingPersegiPanjang = rumus.hitungKelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);

console.log('Luas Persegi:', luasPersegi);
console.log('Keliling Persegi:', kelilingPersegi);
console.log('Luas Persegi Panjang:', luasPersegiPanjang);
console.log('Keliling Persegi Panjang:', kelilingPersegiPanjang);