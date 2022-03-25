const os = require("os");
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.type());

const fm = os.freemem();
console.log(`${fm / 1024/1024/1024}`);

const tm = os.totalmem();
console.log(`${tm / 1024/1024/1024}`);