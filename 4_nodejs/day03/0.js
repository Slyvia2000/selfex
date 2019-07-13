const fs=require('fs');
if (fs.existsSync('02.txt')){
	fs.unlinkSync('02.txt');
}
if (!fs.existsSync('mydir2')){
	fs.mkdirSync('mydir2');
}