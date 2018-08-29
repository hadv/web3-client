const Web3 = require("web3")

web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/5rhaTHgnqnbTEFj1S1Ya'));
web3.eth.net.getNetworkType(function(err, res){
      console.log("Network Type: "+res); //Displaying undefined
});
