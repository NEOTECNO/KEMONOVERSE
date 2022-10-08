const CONTRACT_ADDR = "0x2b4F97b85029F900237265B1FA8f7A3578b4Abeb";

const abi = [{"inputs":[{"internalType":"address","name":"_signerAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"InvalidQueryRange","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MaxperTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenId","type":"uint256[]"}],"name":"burnAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"burntByOwner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"costPresale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"costPublic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"costWhitelist","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"explicitOwnershipOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"struct IERC721A.TokenOwnership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"explicitOwnershipsOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"struct IERC721A.TokenOwnership[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"isValidData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintPresale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPublic","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"phasePresaleMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"phasePublicMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"phaseWhitelistMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"message","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCostPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCostPublic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCostWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerAddLimit","type":"uint256"}],"name":"setMaxPerAddLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_MaxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxMintperTx","type":"uint256"}],"name":"setMaxperTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setReveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newSigner","type":"address"}],"name":"setSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"stop","type":"uint256"}],"name":"tokensOfOwnerIn","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var contract = null;
var account = null;
var addressSign = null;
var price = null;
var value = null;

var totalSupply = null;
var maxSupply = null;
var maxPerTx = null;
var TM = null;
var WL = null;
var PB = null;

const decrementMintAmount = async (e) => {
  var mintAmount = Number(document.getElementById('tokens_amount').value);
  let newMintAmount = mintAmount - 1;
  if (newMintAmount < 1) {
    newMintAmount = 1;
  }
  document.getElementById('tokens_amount').value = newMintAmount;
};

const incrementMintAmount = async (e) => {
  var mintAmount = Number(document.getElementById('tokens_amount').value);
  let newMintAmount = mintAmount + 1;
  if (newMintAmount > maxPerTx) {
    newMintAmount = maxPerTx;
  }
  document.getElementById('tokens_amount').value = newMintAmount;
};

//MINT
const mint = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    const _mintAmount = document.getElementById('tokens_amount').value;
    	
    if (_mintAmount > 0) {
		var result = "";
		var success = "";
		document.getElementById("tokens_available").innerHTML = "WORKING...";

		try {
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			account = accounts[0];

			const web3 = new Web3(window.ethereum);
			contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {from: account});
			  
			var chAccount = web3.utils.toChecksumAddress(account);
			var addressIndex = signatures.indexOf(chAccount);

			if (addressIndex != -1) {
				addressSign = signatures[addressIndex + 1];
				}
			else
				{
				addressSign = signatures[0];
				}
			  
			value = (price * _mintAmount);

			const gas = Math.round( await contract.methods.mint(_mintAmount, addressSign).estimateGas({value: value.toString(), from: account}) * 1.1 );
			result = await contract.methods.mint(_mintAmount, addressSign).send({value: value.toString(), from: account, gas: gas});

			success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
			} 
		catch(e)
			{
			alert("Error: " + e.message);
			console.log("Error: ",e);
			document.getElementById("tokens_available").innerHTML = totalSupply + "/" + "10K";
			}
		}
	}
}

const connect = async (e)=> {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    if (accounts.length > 0) {
      document.getElementById("connect_button").innerHTML=accounts[0].substr(0,10)+"..."+accounts[0].substr(-4) ;

  	  const web3 = new Web3(window.ethereum);
  	  const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {gas: 3000000});
	  maxSupply = await contract.methods.maxSupply().call();
      totalSupply = await contract.methods.totalSupply().call();
	  const paused = await contract.methods.pause().call();
	  TM = await contract.methods.mintPresale().call();
	  WL = await contract.methods.mintWhitelist().call();
      PB = await contract.methods.mintPublic().call();
	  maxPerTx = await contract.methods.MaxperTx().call();
	  price = await contract.methods.cost().call();

	  if (paused) { document.getElementById("phase").innerHTML = "CONTRACT IS PAUSED"; }
	  	else { if (TM) { document.getElementById("phase").innerHTML = "PRESALE MINT | MAX " + maxPerTx + " PER TRANSACTION"; }
	  	else { if (WL) {document.getElementById("phase").innerHTML = "WHITELIST MINT | MAX " + maxPerTx + " PER TRANSACTION"; }
	  	else {document.getElementById("phase").innerHTML = "PUBLIC MINT | MAX " + maxPerTx + " PER TRANSACTION"; }
	  	}
	  }

	  document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "10K";
	  document.getElementById("price").innerHTML = "COST " + (price / 1e18) + " MATIC";
    //document.getElementById('tokens_amount').value = maxPerTx;
	}
    else { document.getElementById("connect_button").innerHTML="Connect wallet"; }
  }
  return false;
}
  
document.getElementById('connect_button').onclick = connect;
document.getElementById('mint_button').onclick = mint;

connect();

const signatures = [
  '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  '0xD7250544890e1c4E11181DB015Fb8E651185b77F',
  '0xedd100a7b1856a9f629fae2f9b15f34646f0799c00c68ec113fcf91ed67c8f371869ef31d9c73954342e2a1fa64bace1eda226111eb6bf540fcf38cadc3d96611b',
  '0x442A09BCD6D2a367b7aa74a54790a249c549e136',
  '0x3cb6ab9eca730ee432053935e246cdddbe740074a17bf5d797fc752608ed0b40081911e4ef7102a060c0c15e711ceeff2f1e049c55b2be89444a6dd3d5ca03851c',
  '0xdcf880B729F6DEc9F91f5dbB6749756183Cbdb8A',
  '0x59290005767dbd8933d7c1fe2e84ac4a2cdc7c857c73fa178885c4a85694ca87680a4a3fab3fc612a2ebc0d12c6fde748b66e642e91dedc43a51bcfe7b89f8531b',
  '0x0c95027F76aCdd11e04fE13E1B39283FD97ca13c',
  '0x89b65ee7de674454b49eb1675c705cfbaeeb677f294974ce95c98dfd9573e6a93ee505f721357a224fd787d1e172cf6fd19dd4c3d5c57c290fbbae7e573eba131c',
  '0x6EB1272c00Aabe7e25E7107E42ec94d6Dd657238',
  '0xbd8f870109948db68222f97a9e4a88d29a86010ebb68b4fe397300f5f4e44ad1420ebd1eb2ba17579659006132bc01dfd9c9bf863c8accd6b86e3b6d2a2596661b',
  '0x7D11f92e2f869ca21666c1bF4B8781ad5fd5Ca8e',
  '0xbabbdf83625613e5949bcb5b9beb181f87dc6cd5be10f10840f20e06fa61939d582b403f1ed8c8f7ec08a167f21a466795aff2eed7769de99c80fa743e3380681c',
  '0x0FB324D8cF0484C09ba3ba6C359723e18A76382d',
  '0xeb615d62059c606e6c132ae65370c5fb7f59377e4df2631762c95aa77b764cb36d4206b0e30e15eaa31a96ad8af4761a8deb22414454ac32fbe2c22567d224161b',
  '0x9DED67EEF2574c8CBe641a3AF82842057365a4Ab',
  '0x473a5f133b91e6ca0af398aa4eebc61b4e1139b411f999a81acb498232176d9a0fe86c26275e94c696dd2ed73ee3d2667b6d6025dbacc836f46fabbfd76766821c',
  '0x84c9a6b1f6860B6f4DE530119f671668F2D70beB',
  '0xd790c9fa698613d25e5a1d622f8d3bbc84acde6326a922d4d2c8b880c7113fe965e2b0daefb4c7563832b4d12f959411cbd3ca8f3593462cb149a0561cf15e4d1c',
  '0x734e7D0216da4D0836D2F7e723668F9deCE11080',
  '0x3ee7853b9d31b96633c2842e6bfd14dec50912a91d05d7c09bd48f84b0878b276e5d6cae9e2b88f5fd3e1487ceddd7a3a54e149852324d844abf01c2916349911c',
  '0xcC7D1a5c9e687c4B46a0D59298fC108C2183A25c',
  '0x57ba75245b784a9ef437abe139f1748c9362f1575c6e126e35d8f65f2b32bf54761decef0f5cc4777f936326d2eb249d309783335051fd815cdd71f0cd18e2961c',
  '0x2f623b63EC0B567533034EDEC3d07837cFCC9feE',
  '0x885c4dae6bc3bf60aba4a561f313eb2e546216b29fcd98a5d54a039d98b64ee60365a0743a8777579f0d391bc15b207bb4a7ddab70226fbe2be7505a521d9e571b',
  '0x4897C27e0F10aF43e2592cB9C395fa3D5fAaba86',
  '0xf2855d86bd4cbf55d1d4cc415f73e3b6a4455f4d43728ca924165c5eb563368049ad0be946207b380a2fbbc57d1526cf114920e4596278e06386cc47d3654b0e1b',
  '0x00D193e16b3f20e6DD48c574618dBA6CF248A5Da',
  '0x51626d6869a88f25f7cef2d5052e0acf558674cf036c1c830691ba137d617e7137f5e7e4947f920f63f0b9d6343d9afef128abb93ad4e363e1d566b08efa35591b',
  '0x187609635b82e8D0b3cEd0bAB94AB5525A3caE0A',
  '0x0493e780a0276c58f16fd47872bd1f7ed2ce471ba151971f2d542050ac5bf9d56ba017acdc32610c3d3fc4dd0bc59182222c06be8cf1420e17bcda93618e04911b',
  '0xaE5Dd5a2693a5E37E7d55425475BeaE12E9BB594',
  '0xc4ea91e3eb143cbeab69670f5294cee3e2df47421a5fb009e2823f0c1238af0055f86bd94f50075c054f0559f17f71a14b6d89be3eb05e2229e30268e2951a051c',
  '0x6044EDbaB80E4B1C6C26fEa1f31AC69Fd2847B6F',
  '0xef7badb772e40ef3c6ae3fae532be93e6b822930013ff40ebca59e67924aa7124a183f0ff822a87d86048bf767ee082ece0a6f7d43dca71f6741edd6835fccc61c',
  '0x851eCD11fa2e440982B9F7a4ACCb84c1439a7818',
  '0x2f0d1abb5830d9be6cdf247c86c26d5b39016e4912d063cd28558af9345728a410f37020cfc1547138a2e0b1d4fb46f8535586c7ac4ca4da806836425d116d211c',
  '0x1dbAf7bAd18766Fb9B04083F2b5e4A442A857ec7',
  '0x8d043e9c0e255fb54efc98ffc5b5289cb5c44a1d05ee60467e5951dfdad477ba4e7bb3e44b5124cb0ba0df2d3e77877ae161286706887c9bb7ebe889019b73581b',
  '0x70B0BD2fe86fA4D6935F0908e1d7c00e7E8cd289',
  '0x60d6d025cf0d801ce25fcba159bc7da697ad99d6c4fb80afd9f0a6eaa3135c4c44b40a16f90c86aaf941adf60e9e0d450c66d1e7dd1ee05a91122f79a1912db41c',
  '0xd5BE1a4bd4F1B66801ef25C593c6e52985A00055',
  '0xa22d4af31777ee825822068d5488947bc104f023202e48abcc5f5348ef8e792d08a08020686fb2e879ee18c78631222670d02b41c8e919dcf47eeafb4ac8e23e1b',
  '0x488da54BE478750ed2E8042998bC272582430Fc5',
  '0x9e89383dd62e44ab057d9a3c2321c5e50d609d5ec6e4a57161a89916dfdef33b0a2731edee0a42eb6932cad309ba9f1da666ddcb34d5777e8d1a106e5ee4fa331b',
  '0xAD5334DAf2FEB4Ef566298A7b1a82b06A1728f9E',
  '0x673cffd7992704e53bd75d83c5e42d84514bf414682697e15b5505678e8f05e801dab26385a0e2886bc37812ce7925a2119033a53f98dd2bfc642591f6618d6c1b',
  '0x7cc6970D33d5fd67f4365025cbAC3022fA0f6dCA',
  '0xf37aeb806a8ca5142b027d434482616075213718cdc8fc9e7b4014d92ebfa4fd546e99e910162b47d09fe3728c2a13221b72071e8f870d9f7c615c81624ae5d21b',
  '0x286aB9d0c6f51190E2d5469Ef6521CA842BfEe0a',
  '0xa73d9f96fa897ca07576a97da2aff54b64748ce015345a1c6e946cc2ac1f50610284284a018878aa54ff1cdba4acc35000e1ff98772f5ad37ffe133ee40216ac1b',
  '0xE54db296dF1A114C6f08F6C35482B14994016B1a',
  '0xe4cc3f704950a21a3bed90ee9635a967f68ea510134fb2a45dde60c0265125fe2043f1579acc8d25095c6be516ef29844ca1093433823a1b0c376dec059bcf8c1b',
  '0x7C734e4c677334a6480c4634bBB1AEbe714dE129',
  '0x2e5c35ef8ae0cb28b6b97d58d8c533c1d8e97398f26cf03ad658dbeed35402e526c09c84c3ec1ca552e24efc48ce0ebd4a831040afd7e740f568eab5bd0320cf1b',
  '0x1031079474A946c410CcC0D61815d273437a88b0',
  '0x6f50aa22ed510e0b19d5c788c91d565c5132b447757c0181fa8b6468616eb55675d45b15a3a42404e7339653b6573751ccb824faf8cd92494a35ad1c190b0f3c1c',
  '0xab300cD1E9cC0c9142129547406237a0daD34078',
  '0x3bf7feb0a109421970483feb7ef74ad99017ca1d8961e6fb3d05b92a5fbe060533e9fa690f79e004bff7a84f4e59d508087e55623e58c91e2ab95205363701411b',
  '0xA5DEC5e89A15cE76A46BBc0504e3c7c3D514cB23',
  '0x25c4141554dac333196109b14fee8f0206f34017fdff3f360624ec601d12a9c915fd70e1a9100dff2d1276e72fefe759d4be51fba6b97a78c122d30dd34890541b',
  '0x03A0F536063CBbE5fF4A33CC5B8dd20389FD04fE',
  '0x621ee3b2fb06f607e9a5c9d2ad5964bd800082c53ede262de840ae5eda94a6f36c96a0d93e7773fa1f9b34ac7a0e4bffb970302b4a4b43d4b0e1ce93d154e49d1c',
  '0xC3B7fC3fe2f32494755AA6A32A33863dFF72757a',
  '0x2beae87b612115e0a8342d84492edf8dd311ba8c18c7d7c9a9797808e3d6a7fd00ba9a4dde929590f1737463689b737cd64bf813c68e81c8851eacdaa423640b1c',
  '0x5c9Efa9e31141DfA22c8C3dcF44b5E9CCE0FDA51',
  '0xc6de99b69b7cebfaae77835d6c6300b52ed4054d2d86c92e069f5e6c82d86ccb750e6f72353f4f86e077016b7f2d71aec2fae27dc16b5fa45c139d6019932f6b1b',
  '0x50ce9a1fFEa9A3d46BE022b318d2695C09dAFD2C',
  '0x97296849f5639f81cd53d692828b77d10e7a5940925e4ce24d3d02970171eefa586ab1a65f04340239546e9a218263af35286ad8ad053e010c16b14f6e6108e71b',
  '0xB1Cb732f2A8108AC0CFB57b1faacB90fBD85E88A',
  '0x69cc07361acdd4f209bfe861a9ad112c5d6d0b7b68b4bb493104fe54c32e9cce781f29d6769a218006fb2cf9b4703b96bcbc707aa5c2df8bb4805c06aa701bec1c',
  '0x3D4B0e3ef9b9B119fF29dd0Ae348cA71a0C1bC73',
  '0xd2214108ec4b725df81a2ce0d5978ac1939316af0e8b6e81d193d584c887288e7c96808cdb21444d000a864414a5f042756e2f9e22c1451f40cc1b112462bec81b',
  '0x91aD800318955E6C3b4B59EAc2aFf763067B433e',
  '0xacd0757fa3a5c02f9138a5623a3bfa7b699dca95a22124240e61c6b4ee4942461ebadb839a687ffbd92f8c2de51871516d892144c1a9f9cdb278553f25b104f01c',
  '0x15669b2A1fDed9eFaC338cc0dF0CAd587505F2Eb',
  '0x05501edc090cef32c6c8dc0b4863fd2d748ae0440d9d4d8dc86785714ae882cd106b751a1297a0e96fbb585e20f3eb2a610b711831db0d5b7a6c91c5788f54001b',
  '0xFdc924FbE0FD130406242A828E8c7D564f57ee9b',
  '0x95e50e63c70942a5bf673ec8dbf2eee66fc5df48b67a5fe6328d54f1b01a8df749f4d08e049177d5b8f66362aa711fb0e6cef12acad70a4aec5bb863f1d7f6741b',
  '0x70Eddc502cb72affCDD064EDF0c8c3e731988cfe',
  '0x1a6cbdd40a5a4d085186cc5265062f100fa445b49737dba58df8493277e427ae6c97573ca20a5a99c366066da87e29d19a8e7d3c2d84ebcc6bc015d7fdf3188b1b',
  '0x0E915D48c85a6C8a4A1F8EbAE7CE1ffb0db5eaD4',
  '0xc5c53246ea933f96ef13055e6d9fcb16fa235ce0671fd3ae2c6925a9a37bc29b2f4249e6a422f7ad33c431eebdd90abc2111acd6b33ea2b95d4588374bdf61a01b',
  '0x598ed77bc7fE9cf0620D8bF48b862e95ee26a870',
  '0x10e1864c4edd17dd7ed59b52354b6ca7043da307b59b4e39dceeb78e9e35d0ca16f5d2354a882d0148696e8d2fc89efef8f3d8a0ac4e681647213f7b7cfbe1b41c',
  '0xA05eAC1bDE7aD8f0a6065940fd41C7efa46B3438',
  '0x41cd99896702c2a4433a6c958d833f49640b2a749acd0e1dee03fdde46b4446461c7c1c5e471d9b6faebc425ccd0701859bf8e23724d17fa221ab2aad51b8c541b',
  '0x3eC164ed66542647670a6d59a483d0f4e309eF7e',
  '0x1a67dfd4db5c85061dbea962af522c43cc636172eb3f0aaebe3a05664027d8fe2e4c257b7319b6626bf7f8532f3e35e56c679749524e2c8834008851127e74851c',
  '0xa5BE60342CAe79d55ae49d3a741257a9328a17EA',
  '0x8840045490a2db60b74e5bd2c8824588c15e23d25a1077297565fbbfe8f6bd417da83a4f2b1d1506e4be238d5fbb90700690ebba910638d5411f12fe81d233a41b',
  '0xA94F37a7e1F5e4C66350354A8bF338432f552033',
  '0x522d93860c9e27b8006222341a4b3c19d3e8f1d20bea64cde24531de61d1a1e439bc8fb83f783039f4f65b9b3983df3af2aacce27b405d45466ded1e32822bb61b',
  '0xBa6a7bf40A6d08D92E7D81dB253bA606bCf0Db1F',
  '0x4713f90a5de3e7d6893148a20ee175e0d9b15c189db5142effb06432da3ef1ee73bf4eaec92c4cf536dcf2a593f4c13725b6a36dd28f2a4a182d1c7404b896391b',
  '0x255e807Cb9ae8D5efe49Cc5b1a4d926EF8FB50ed',
  '0x0d3864c9fea5c8ea47f636e45335ea2d6aef1d02ed805cef8f8a1d8e86c6e5187c652b166169b592c2162afdfc2abc543345c10ad50ca591a2bba490f8201e4c1b',
  '0xe8B6a3ceE16A54E2A3283bF4761315B7Dc369358',
  '0x2ff1dc85ef32929bf54607a81e199526daac268731ec40685c65235bd93b0d42147477fa09a4258d456edfffbdd831c7e4caa279efafb512c5c05f0513bb80511c',
  '0x6B7326916634121505900164E291f950e3FA09fB',
  '0x809f17c23bdd2565a4f80ddc2303386be15decd983c7e84ab5adbc90bf2f5c500fa686edb3f46a8c590deb9fe6ec101d4d1ccab5e6dcc475f24782528c9767671c',
  '0x44103343eC050cce457dFC8dCa9B3e39601819DD',
  '0xf5c2cc2246e118717bec8a041557af5d4a472120e8a4e927ab947ddc919dfee470d86c65f53f752e83b66051870acd376d3993f9aa01e57b5fbf9a8c54827b311c',
  '0x05f9FDa740b8553c64aF1a56CBEb5355cAC1105A',
  '0xe5e7e25a58b42b5a7a2ed5b34e0160a1c498a8db47d20dbbbb31c483b3ede5ee2130c156f9d7588f21db8f7d1d036c9f36a442694c70fd20c92a9c1aee1496411b',
  '0x9E6FD664132522Ce3ae5dB73724d7cc5f0193e7e',
  '0xab3414e224734543fe68dc27cf199cc88f6f3e435150fae396f3bcd0f6b2b82f0aba7cd894a5dbbc68da54c20da1de89539cb007b85d4a517c5a2387cc9943801b',
  '0xb02F2C18a9eD8F9c74A82A64eF00A6F952255Bae',
  '0x9c6dbd760a7e7abc6046cbcec631eb836f86a17ae1bf4b2e26daf6aec3544b40178fb7c3cd8893576f0c57016c061d5c07064581f589f70d43d931599d0e8cc01c',
  '0x8cc0Ea7ba02CddBF538B00095E0B75da7FB48a3C',
  '0x3c21574cb59df328a8f33c7c18dcb109bcb35929f2f8e6b938165ddde4269c3632a4af6eba5d27f032f7a386869337e3452ae4d06c8f47a69d32a36e49fe73fc1b',
  '0x722AC2BFfB9286326dbdbdfC338c93a254923342',
  '0xcc7375e7685dbc8b7a4ce377859648c051d0b74077e64cdbb75a8ca058c1f7101d84f8494d21bb20f59498eb92e5ec3b86f301cb798e6ee6a3bbeb0e2693399d1c',
  '0x29c3404483277A126BEdC03c7B1D41442e687114',
  '0x56bc18735e3b10db4bb0b5defdca5a6e8e16a8af408065e10fb82d028e506b1e45f50fa0f4e8fa9e24991596566d538a6b9dfbd9f40a95687440b974622e19a61b',
  '0x3D045042139790D3Bd539Ba19dB7A57e3773d22B',
  '0x1026bf1b8ffe9e690343029c06b6cb404354a0673273ed6ffa8adc3bc94d5c8066aed15cad22514b846820dceb05219d4feedc6dc4c4f483c0f88f99fc91ba171b',
  '0x694B42dA903f4AD368Af67d4Eed630D7e78c8641',
  '0xa4db23c2886a7b6ce60244846a4e62ea95812dbd80e4f5422cb2ce598062905863337b5d5ad5397b76806febf9fdc61d44fe5d4231f419df72cebb7e6ba6e6db1b',
  '0x187609635b82e8D0b3cEd0bAB94AB5525A3caE0A',
  '0x0493e780a0276c58f16fd47872bd1f7ed2ce471ba151971f2d542050ac5bf9d56ba017acdc32610c3d3fc4dd0bc59182222c06be8cf1420e17bcda93618e04911b',
  '0xE54db296dF1A114C6f08F6C35482B14994016B1a',
  '0xe4cc3f704950a21a3bed90ee9635a967f68ea510134fb2a45dde60c0265125fe2043f1579acc8d25095c6be516ef29844ca1093433823a1b0c376dec059bcf8c1b',
  '0x17982d4224d781187617e01A4b7f4Df7CbcF317b',
  '0x91cabf169995c6b10296422502c038ff140921641f7e4b688a2bd81eaadab65c041d0b7850cab98ac68a563d68bf645644ecfb651ed35202a5ce719f1b74865e1b',
  '0x1C37C363F1C06FC622d2e8A9E7A2cc7bF4094B6c',
  '0xc1a45077de3b403bbf446de4261eabf735baf8a1d280d102659e4218e046995c1d5cead9017500e150bda281b816726f774163fb35f50d9adfbb7b0c900e86b71c',
  '0x6bEaDC32D84F9a0cd4d3C53132d51941cB06d428',
  '0xcaddf9fd6a9aaa0d994260acc0b77dd14535c56500aefe18a1c40c722082bce053ac08e1125fab24c6548c07565dd3bd41d13568c05bdd0e86b3ab7ca83e4ef51c',
  '0xba31300f23399023bd93419f2306c38b3431dD12',
  '0xc85d4990e6b52697e6c49d823ca9f922c6e55d0fca43f731f49e6d43b70fe1112fd6f4e06f524d792c7610b2f0d4df61973321e3cbdc0478c7a377c8d7a8b9271b',
  '0x2C90Da9d9aB9Dfba50e3C9665d588bC54A5dAadC',
  '0x75a2f8b9155750b7adbc57c0acbff6ec043b6a52ed77d4014772eb4fbaac33c26dd4b5e0ac4fd01f8fcb1f46e318e4a368906d7829244a2a85ad3e9c1aad7a251c',
  '0x73ea8BeC08Ea714fB52B904cf0B1A20c4F529f20',
  '0xd2c50470bea87853a727f56a7b668536443f21cbad9f764eecb01ae6a899f0ea2d9b017791bc7aedf8d6192f966a5b106ef79a7d631995c15b07a19cedd436891b',
  '0x53a77F6da3143acaD387dF985E69BB394a01EcA8',
  '0xe03d4e6f34bc2056e05a50dfb8ef65cfa499ae87b13d93d3503c04cd02c588b301f50709fb6aabb8c0bd8acbc324c3b7f99fdd70f6c2d2a22efeaa7f0bae00641c',
  '0xD8A8DC1557303f61013982708956551415cFDC2f',
  '0x6b3836fd2c92ee23411b9c20e7269a6a4398fff406d045805be88e7c53952175023fc7b66834204f9e49c02e187453da031fc39f4ac61143a223fda5d09d9cd11c',
  '0xebB28a9A31D492C38BAC963f8287dFb900bCF9F9',
  '0x5ae56a60c23e52e257a5a398df19e17a7652f6ec82df84276f79cbec9a1983842788b63250ea5c3ee7d935edec608a76413108dbc308120bf749d2c3580e462c1b',
  '0x9A0880Acac6535dD97fB59E8126f6f04Db1c880c',
  '0x522fd9bf52dc53265c1609b22ddc2643aba661995d49d4333f91d4d3bc0a879e4be5b7012bdd203d96c17909c62eaaec4530fa8c969258d8ed8dbd7dc551b38d1b',
  '0x0d448A793916d1268320608B4264123a5Fdf1A19',
  '0x22749bad14602c19d55e0512f12501c5f06d50db8df3bd8c1f6750adac9519af000ec99cb3cff89f5250c72dbf045497b81e8f4d24f61d782ea004bbe52a35971c',
  '0x25949301a4dd319Eb5DBd9931d85E75432b9b12C',
  '0x12bc15d867f4ffee1fa77f69cc648385bab560f23d0b6e4062420784881fca422c330c342c2676351cdc5ee6138a6014cdc04b85ccbf317416682eb64d83eb131c',
  '0x8De1bbdBaAb3D68376B2441A3dDABB27eB24f8E3',
  '0xfd2035cc5bc085be84972f44f388ab8709f2e17c23ed6c97dacc3207512d16eb7bebc94221e56f36b7ad8233e5eb4918903ff3f6f39b369318a3ec7efe879fa01b',
  '0x129c6D64a5b7E1d0D547978cD37acc3B9A9e1473',
  '0xc3758ccb5fee0eec5a1013e87d1046e62682f6e50cb2919825f07634ea09c215741118755636e45ae5281c64dff1a6b9883d98a95a41edbf22776063f6bc6c761c',
  '0x0B5069e5154d7c9A67b1aeB9Ce3f20E6AB814e16',
  '0xefacd318728ba0172279e749bb960c2c9979d00dc973a6343e8587a2aac33c9b40cd9c6e2855c13027b7161207b7faaed83bf670693580201d4d38ff121350fc1b',
  '0x235B136c689760dC1857e8f7eEeaC9C0AA3Ed2E8',
  '0xa6d93a828ce035cf255d04ab767a1103904f73f457a0a3251c33d43a3824345441b4407b1807caf06101967dc6a59bad4c93464f9890273b1bf758fede2070581c',
  '0x232B6d8E7A834CB37951B1Ed31C2F57aE7585437',
  '0x1cf2be3ee8c57af4ae452a0802cb9f70aefc54164f95681dc3c57f1b726bf25d6be40f2ab6de6fa83528ff1a63c673106ba8958c3fdb83e7d32af7513943c0bc1b',
  '0xd2c42530a83370924038704d99F2B4E157436B66',
  '0x8d13c8a34bcf9a1f073dbfdda0693e39e4c237d86913b76321ee270cafd32aa653e0fe0d4bb13dba870c19ee265e159a31d1230e8382bf111200fc7799fe6c171c',
  '0xc0B4F60231c3145cA10CfC46AA7fF2D54AF8CD4C',
  '0x5493489759b2941ee6a49e688f247b02ba6c665267123fba319e26e50631bb3c6c32b2b7afbf8c689387926dcb0818ec74dce535612afae8932bf6b241b3e4891c',
  '0x2e4725fCBf5d1524f4a6BB83a2FF777Bd856633B',
  '0x283c4a79bc8b95c1fd6973dca95e5cf67066408c78c099961a78f9483e6017070bfae47ffef039bd968ca0122ae0cdb9b8d86a7a28d4bc2345c87d7b64aea1561c',
  '0x4b78b54671eE885814be88a10A1A1b7E7c2E60Ed',
  '0xae6ddab5cc5d479cc1f1d4837c66ba361bc97ccd3c098b02cafa4723687d264f6d467e0fe7ecd307cf2efbd253b999ff270b92354c6a9082d7a482526b733c781c',
  '0xe2502EB83f07244A5b5a5Fa878BdBE9c8DF07d93',
  '0xa5116be932f3a54414fa1dedd3f7fc54366644bdaded07f05ca9d5d97e73afc33a3faf1c7da74ad4a5c110f30c7813accccae31a59df0b941c1c84f524b62ff01c',
  '0x7eC0666E11A4398B8e9125874aEBa16d0ba86079',
  '0xff4cad47fce0d15abcae929c5e43dbf84f7271812f1c0a6a006084ab9af9ab6a53886b9d144eeb07aaf7ea32c2a12e927b2a5507cb5b288c4c71973f27f3ce0e1c',
  '0xbF8735Ad7A3c0e8Ca25Df7f3c158D66D113C046d',
  '0xdc57a7380bfcf6e7d13e41fe4df172529ab8308d2da578ce334ccb66a8484a3054b995ebceff98e239df510fb19dd2dfa7588de0fe9e958f8c4ac8c62b94bc501b',
  '0x78c8a2458dE77B636958Fc35aF82770f619DAf0E',
  '0xe762c4f00dcb7ea221308d83a1b232bf2b41a902e58cdffdd1c9d8397def9ecb5dc9a1c2b71856539de531bc7c812ea8c199cc6d04071ddc4de4d0b792262f891b',
  '0x61a002c7F723B8702Dc910D14e1d95a523a8FCCC',
  '0xfbd6200561cbc5dfbc899d76031722c93805fae91d4b7d3d841e32d2809b38a32b03bbd1907f61492097ddaa4bd17d5a577d0165fa4a4076c6dadb72225a118a1c',
  '0x416cdC2DdDD58a398c1857969e9449c2e65C03E4',
  '0x0178f2f8ddf86fc81965a214ef705ff10b1685f404f7bf9d167dfe587c65cdba3a686857ff8529568b078b831c3572c86036b009b793a37deb65d98b78d911e41c',
  '0xDb99666A7E0E475B946bf111DFcF58f1e284630f',
  '0x928b7850e3307a98e4cdcb066abe9e47157cf9d5c2a010ef293fc9973bbb7f4f6df53ad2ba78dd313337a0fd94d9c28fa40d422970056c2bb95f52c915730bd01c',
  '0xfb8becA44bbF53BdC7576EEe4e0583aC8437d11c',
  '0x40b826d1da7598454db2c5fba8dfe1f4d819a9f12d7f58457c87ef3d5d11285e1bfcb2707886438013ae0678d1ab838b94f33b288c5e8e2dbe2185b2c1d659c61c',
  '0x3C36f8DBec7B5e74C1de617133c718C071C22a1e',
  '0x28b4288a3ea239605719591b932232425e3b9c3880907584aebd0e8e8c0350af7a15ae7148f80379a12d422094289495d9386578d1a236bb08f937a9ba895ed21c',
  '0x5F33DB6beb9DA0d30Aa6FF41516EaD7b56147FcB',
  '0xc5a17fe914fbf7807244351a9a303ea741eee46e87848bc2bf379444934676fd1a58c6822891c8c0774b77fe31b39db91591678af8b95546984673356c67660a1c',
  '0x5E987311BA4483948191923fca98A144526f518d',
  '0xc62a2da6aaec84b0ca865b265456b213fd6baac05fbfce7010252c34f6e4e2b56a288a91333a5928724587fe806e0d997100637edf618cc5d56e60c49898fcef1c',
  '0x17982d4224d781187617e01A4b7f4Df7CbcF317b',
  '0x91cabf169995c6b10296422502c038ff140921641f7e4b688a2bd81eaadab65c041d0b7850cab98ac68a563d68bf645644ecfb651ed35202a5ce719f1b74865e1b',
  '0x295171D1eD04a23d13834882Cc6Fa1ee232f3a6b',
  '0xf2d559857cd61021fedb89cf513cb11e2f3766eba22243661bbcd75296264b1372e95a46722ca5b1a3a0edb99755e5846b30481a6248c0347ec3b72b21e9f95e1c',
  '0x3B083c4fF19A82cD94a4361b51C20A1193564510',
  '0x008a6b7b8b6d1ed0c5572b6d433b024d33ef05a90278e9f89d9981f6571453024712b48ee3c1c032759624fa25d5ae45e1e70846686b6514f2c458f46a352d001c',
  '0xFC5535eC6ecC775Bc9C70dE170d533C9f766b6f7',
  '0xd2aa81cb0aa88c6fa5acff44ee4889f1163a40e5f3914437b7021dcb24bb05934706ea1d6f9390b53a205a7c31ae7fadd2c1b5f07f17b722b1a5454adcda29d21c',
  '0x2f623b63EC0B567533034EDEC3d07837cFCC9feE',
  '0x885c4dae6bc3bf60aba4a561f313eb2e546216b29fcd98a5d54a039d98b64ee60365a0743a8777579f0d391bc15b207bb4a7ddab70226fbe2be7505a521d9e571b',
  '0xBc592C836a584e2FF5E708E88E14e5CC34138F4e',
  '0xae0905e6a51818008ed4e04196e648e7f13da13d3ac49669854a13c4613742cf6c31e8defe528362bb76f9732eb2cac12e86f9daa5a8c713b67ec08392170d9a1c',
  '0x1B1d01Af2ce592af9ADA60672CEC1F9446052a50',
  '0x6f20bdd3a030974d2ab9bf728bccefcd03a0e3e40d9c7e31f70089969834045172a20511497063d86e5e4f35f00580e5f429953d92c54fd8b246ce5d0f72b5ff1c',
  '0x6cCbe0CeA9d57D761FE95295dF9D91247a1319a7',
  '0xee1754770954c461ef3b292368843d6a9220b4648edb701d4189375e2c7a73227e1309077bf8ad7dd78b0cc086f367ad96fa4ecc35e99a2b3a81e19ae6b9aaf11b',
  '0xd2c42530a83370924038704d99F2B4E157436B66',
  '0x8d13c8a34bcf9a1f073dbfdda0693e39e4c237d86913b76321ee270cafd32aa653e0fe0d4bb13dba870c19ee265e159a31d1230e8382bf111200fc7799fe6c171c',
  '0x03A0F536063CBbE5fF4A33CC5B8dd20389FD04fE',
  '0x621ee3b2fb06f607e9a5c9d2ad5964bd800082c53ede262de840ae5eda94a6f36c96a0d93e7773fa1f9b34ac7a0e4bffb970302b4a4b43d4b0e1ce93d154e49d1c',
  '0x6044EDbaB80E4B1C6C26fEa1f31AC69Fd2847B6F',
  '0xef7badb772e40ef3c6ae3fae532be93e6b822930013ff40ebca59e67924aa7124a183f0ff822a87d86048bf767ee082ece0a6f7d43dca71f6741edd6835fccc61c',
  '0x38d8934613f32b13FEE2234D8218c8eb877Ed90c',
  '0xcb208a6659016066bb56435974c4fba17edb16475c810768283f1e8e8a0478dd281d655d7f67a59323bc952bb21f694a224f387265b0f8943ccc386b5c1119071b',
  '0x2260D513f16C4a20eA289A7702B3c93AdFb00A57',
  '0x6312cdbbcb1296f44f5842518e747abf46d9e4d27fb4ca6c967584b34f1079b9768a6a07ff4b1206fda53a788f9617014571c2df982bf41da597a108c055a0931b',
  '0xD7250544890e1c4E11181DB015Fb8E651185b77F',
  '0x3c4f9eb1da2afa1e066c494d930bb5677cc776c707fc53adb7bfb3f4b2c741af6f999b7d935a81a3d81dbd4dfd68f02bf71bedc28c87aacca1cc6f8bd7e14ac11c',
  '0x355f0F759306FE28c79578Ff99aBB37CCd3a17ee',
  '0x9dfd48af0bd4f28d77326d4d453cc4ac6e60e6bbb1cfb0a414b2e17f3052fe3c67e7e2e5b1726cd32ce980895e95a831614ce0105ae53c8b27e9bc9ce226b39d1c',
  '0x96057c2C2354D7B193BE887FfA0039017cEF5841',
  '0xaeaea68b7c763b7375ba6a46c0ecd67022c0984c20ed15ac1a64b61609dcb4fc08e5f3500669635b586aa7815f7c6b823a24c05c6937e61244f75561bf4ed9c11c',
  '0x38704Ee6927f606bBF63DDcaBFC8d2dE0d4F7296',
  '0x80e7680848044aa77a2f66dd176ba3f8bc1789dacf401d2fd214f1068bc76a7122aa1f59706da320ce4b21fac9b8eb2c6424a297655b4b9db127f1f89f1123541c',
  '0xF49ee3Dc2c35675a0Ae4D93D840187C6E9617aDe',
  '0xdda71dcb19412e32749b4d079ebec4da508b043e8a4d2bdb1416d9302645a0360a43f7deb723a1124b7111737afafa844ed954e2e56eb245eea19cc7ec8a4c1d1b',
  '0x0FB324D8cF0484C09ba3ba6C359723e18A76382d',
  '0xeb615d62059c606e6c132ae65370c5fb7f59377e4df2631762c95aa77b764cb36d4206b0e30e15eaa31a96ad8af4761a8deb22414454ac32fbe2c22567d224161b',
  '0x632149c69829604873417ab51d461C45737DF0be',
  '0x60b870046458b743438f434e0054d62d50d5799fc7926dd52680401b38278a853a273a2f1056ae3c9554fa2477497f3dae60f0a101ad081aaea1afd485bd42d71c',
  '0x735235F5d2f5B0cf2d28016fB492024204C79FB6',
  '0xae459bf2aa6b779c1d025f7370c2b689651165e98efec8b5d82c446d1badffa05d2ceaea40bc3af8b5848250b4e890cdcb075f0a7cb3dceb40f30f05ab7639831c',
  '0x91aD800318955E6C3b4B59EAc2aFf763067B433e',
  '0xacd0757fa3a5c02f9138a5623a3bfa7b699dca95a22124240e61c6b4ee4942461ebadb839a687ffbd92f8c2de51871516d892144c1a9f9cdb278553f25b104f01c',
  '0x7A0049fe5208c6CE9C02b00051619fC3E000dc2C',
  '0x6bbd90d1671eb17c46bace9cb62de11193d7d1a53a6cd8ac90b3b9b3c4358b937442c87c0d9a3fe2b4c18ee693acb430d971ba17723b202630feeeb3ed08f66f1c',
  '0x72f1a7C88917517223f75aE891B53aFE2B89E5ee',
  '0x4f65d4441f8ca3393817c75bdcd24f4241c41b4ceef724355a4c3684497fe93e2348f4b301c0d3338e9dc90262f499990bd2dbc375770d1a8c0cafa9fb9a6fb01c',
  '0x6108Def28FbA7D47eA57C3132442d0765148a430',
  '0xdb999694cff5ec9229fa286bb1a975b4e05bfec6d2e1ae3e1e8d51a16596ebc02bd3e20248d6998c533b67354ea2e6f506e368268a959db9f25c2792d89f8bef1b',
  '0xba31300f23399023bd93419f2306c38b3431dD12',
  '0xc85d4990e6b52697e6c49d823ca9f922c6e55d0fca43f731f49e6d43b70fe1112fd6f4e06f524d792c7610b2f0d4df61973321e3cbdc0478c7a377c8d7a8b9271b',
  '0xef835f20d85f76254a3E110ddFc135811f3962bd',
  '0x3ffe28b6b61073343cf0f17a8979e00836ce100db4625b7abded9f98f9a4ec211e361089c928b9b0ea6d01cbc4e90c4ac8122aa4022e9ece4be5d93d66ce90741c',
  '0xDf06A761D286C0ae835173236E1f12f1379E4977',
  '0x458f0be952068b8068fb9aaee4856ffa9f25c2fe5cc30a5d37845e878cd624c04d8167df5e387ccd360ca4e32821f67a9f928bfc96f4108290eca6a8f57c09a91b',
  '0x9e5E0938fA32Ee49f3c1D0a9A6B0544C2b01f643',
  '0xf1ae7e40161f587a09ddf4c0c6da85e709e9436bbfc195ad466ca04818e66cac093f3fda5b06997da9dfeaf7e4efa6f4bc6016e202b7d552fb7a3d0c2febec631c'
]