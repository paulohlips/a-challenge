const csv = require("csv-parser");
const fs = require("fs");

const c1 = [10],
  c2 = [],
  c3 = [],
  c4 = [],
  c5 = [],
  c6 = [],
  match = [];

const values = ["5", "05", "10", "60"];
let five = 0,
  zeroFive = 0,
  ten = 0,
  sixtieth = 0;

fs.createReadStream("./megasena.csv")
  .pipe(csv())
  .on("data", (row) => {
    c1.push(row.c1);
    c2.push(row.c2);
    c3.push(row.c3);
    c4.push(row.c4);
    c5.push(row.c5);
    c6.push(row.c6);
  })
  .on("end", () => {
    function isMatch(value) {
      switch (value) {
        case "5":
          five++;
          break;
        case "05":
          zeroFive++;
          break;
        case "10":
          ten++;
          break;
        case "60":
          sixtieth++;
          break;
        default:
          break;
      }
    }

    const arrays = [c1, c2, c3, c4, c5, c6];

    arrays.forEach((array) => {
      var filtered = array.filter(isMatch);
    });

    console.log(
      `Quantidade de "05": ${zeroFive}\nQuantidade de  "5": ${five}\nQuantidade de "10": ${ten}\nQuantidade de "60": ${sixtieth}`
    );
  });
