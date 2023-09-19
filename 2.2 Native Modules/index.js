const fs = require("fs")
// fs.writeFile("message.txt","Hello i am kailash",(err) => {
//     if(err) throw err;
//     console.log(err);
// });

fs.readFile('message.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});
