const sqlite3 = require("sqlite3").verbose();
const ToCsv = require("sqlite-to-csv");

// open the database
let db = new sqlite3.Database("./file");

// .csv config
let filePath = "./file";
let outputPath = "./megasena_csv";

let sql = `SELECT * FROM megasena`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    //console.log(row);
  });
});

/* // convert .db into .csv
let sqliteToCsv = new ToCsv(filePath, outputPath);
sqliteToCsv
  .convert()
  .then((result) => {
    console.log("Everything ok, let's code!");
  })
  .catch((err) => {
    console.log(`Oh man, we have a problem...${err}`);
  });
 */

// close the database connection
db.close();
