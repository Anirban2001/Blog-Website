const fs = require('fs');

// reading files
// fs.readFile('./docs/blog1.txt',(err, data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line'); // as readfile can take some time...so js will execute the next code i.e this line


// writing files
// fs.writeFile('./docs/blog1.txt', 'hello, baban', () =>{
//     console.log('file was written');
// }); // if the file is not created...it will create the file and write on it


//directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     })
// }
// else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }



//deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}
else {
    console.log('file does not exist')
}