let Mcp = require("mcp.js");
// let mcp = new Mcp();    // Use by default 127.0.0.1:8765

// If you want to modify the node IP address and port, please set the following
// Example
const options = {
    host: "18.182.45.18",
    port: 8765
};
let mcp = new Mcp(options);

// Now you can use the mcp object
// Example
mcp.request.status().then(function (res) {
    console.log(`status`,res);
}).catch(function(error){
    console.log("accountList catch",error)
});


    
mcp.accounts.create(123456).then(res => {
    console.log("Create account result\n", res);//res.account
    console.log(`res.account:${JSON.stringify(res)}`);
}).catch(err => {
    console.log("err===>", err);
});

var keystore = {
    account: '0xEf8489b77963ADf606E753F513941c427724044B',
    kdf_salt: '9E66282C2C24E104D6FE31AA5D9AA8AD',
    iv: '8EAFBE360D846C3901F74693D00D0EB6',
    ciphertext: 'C95B08F98169B40D421637B72CCEF5A767B3F6409319B637F4B76228072CCE1F'
  }

mcp.accounts.decrypt(keystore,123456).then(res => {
    console.log("Result\n", res);
}).catch(err => {
    console.log("err===>", err);
});