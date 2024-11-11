

const {BloomFilter }  = require("./bloom-filter")

const bloom = new BloomFilter(1000, 3);
bloom.add("wantedbear007")
bloom.add("wantedbear006")

console.log(bloom.checkExistance("wantedbear009"))