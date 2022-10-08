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
	'0xdcf880B729F6DEc9F91f5dbB6749756183Cbdb8A',
	'0x6c18cd73e62b645cf24f7ac91b150b1ae372f3d9cf82959c11a9025863ee83b522f589b926a122bd781b2bd8d880d10d2332c47de545c660c3af3961739974331c',
	'0x0c95027F76aCdd11e04fE13E1B39283FD97ca13c',
	'0x9bf15e1041a871e8d3d6b99041c74126209ccb1f573d1d1d7926bd0cc7db31b056e50de70bf045622f893f7e2dadac958498fc29e1306376c40b63c5c3a020bd1b',
	'0x6EB1272c00Aabe7e25E7107E42ec94d6Dd657238',
	'0xefc1e310a4fe3e7886b0b8a665731e923007d467f2edb7ae6cad3ba00aae02955f419e4bbb4f20736fcf2513ad5e0175e175367298b3b8a02b93e734d5eb40121c',
	'0x7D11f92e2f869ca21666c1bF4B8781ad5fd5Ca8e',
	'0xc75f64abf3eecdfa5ef4972794ec39ec5e53316c89ffc2cca74a030ab3089ef8668159aeb3b962ae65d2b70bfe77115a72b55f062338374562a1d9a7c54a43a31b',
	'0x0FB324D8cF0484C09ba3ba6C359723e18A76382d',
	'0xd939695b4633cf9cb3c292717d5728fcc10dfdaf714754f11f6a91f48dad3aab267f7dddfdf57df2e7ff8caf358994bfbd3a06316afbe1517f0683d37b00c4581c',
	'0x9DED67EEF2574c8CBe641a3AF82842057365a4Ab',
	'0xb741f0c47d4162beae07b139af80a1f9b5d769807fc7479c21566afabae29f5f106a40ad65e371ca731ad0beddbc71dc1c02619e59a3dbf04395216179fb47981b',
	'0x84c9a6b1f6860B6f4DE530119f671668F2D70beB',
	'0xc1b3f6d9b8a101213a0d5803fc2bee38d260e06e8ebbc9386bf5a42b4a9116965575f3bec830f41f5665576ec6c88c4764225620762f93633c765dbf1a2987911c',
	'0x734e7D0216da4D0836D2F7e723668F9deCE11080',
	'0x741c4ad2bc3a90a7d2046e83c39a3c9f91ae5878dde39cb2914b6b8201a2d56f6bc15a2322fb1bcc99f96a9edf09e8cd266b7621d9235a34dfdeef8646ae8b671b',
	'0xcC7D1a5c9e687c4B46a0D59298fC108C2183A25c',
	'0x3cd1f1459e28b070a11d7dcd449242198f0192bb4d54c1aaa21747823a7b90aa45deb0ea9d6e7f7c1c8380c347846138071c9d77059b5165d235748b0a50ee3f1b',
	'0x2f623b63EC0B567533034EDEC3d07837cFCC9feE',
	'0xf6b0c95be40f62f61a96bd626fce7d655387b1507c7c65e3e9e30635474fcbaf31392888e032af405725ac663fa5cececcef5e003c683122cc7153592d55edf41c',
	'0x4897C27e0F10aF43e2592cB9C395fa3D5fAaba86',
	'0xd1dfea46d2245b8d9c64e7c7438018657d42b0d6b6e31de63e2ecfb9397f26255b3c281d333195ed944e70c1de69bcb7a2692087762568d626aaba9171b28e0d1b',
	'0x00D193e16b3f20e6DD48c574618dBA6CF248A5Da',
	'0x1d14fe8351a0bd2a3e2baea6c377534154c4a6f7f3eea78466cbfd8500f59c2e21af0041b41f6dd6b7200be6543721162d35c7ba8fb7a785a61ff3e19a1eaecf1c',
	'0x187609635b82e8D0b3cEd0bAB94AB5525A3caE0A',
	'0x0db092a7bf7f50e4cb650b2e86a309561df8b2ed565a9fda8b84c9e7a8a969cd7daf3348f9ab67c7a2f3c29f4769dc1fd991aafa48c1991530a4aea19483e04b1c',
	'0xaE5Dd5a2693a5E37E7d55425475BeaE12E9BB594',
	'0x771202f25888879679b75e640593b65c7d696b897fe4dc5dec5c639cab013404383d264d43da1755f17a77e7855bd226c9e68c8d77b4fc16ff252818942a9ef91c',
	'0x6044EDbaB80E4B1C6C26fEa1f31AC69Fd2847B6F',
	'0xa1f5247a49760938359b35f854f41767f3e53212d5f8619325ac4690723acb856137ed5babb2349657a7b5dee78ef17a896eee5d895f892ab6dd61c5e9af970a1c',
	'0x851eCD11fa2e440982B9F7a4ACCb84c1439a7818',
	'0xb1ca1944984410fe94e16f8c7bbf1379573a839ab62dbc8e40e494e62b1d45ea5b83ef9b3c0abef96f5e247550b0ec60ff88b5c5538eadee7b3314ef2d30df7d1b',
	'0x1dbAf7bAd18766Fb9B04083F2b5e4A442A857ec7',
	'0xcae280b05dec5424c9b7a2e15add43a519701b0018c3bf1f7dc921ed1a9928432401c0b076bb12fcf2571c03c70c8b8928aa17573eff7a838c1011f1d5dee8c91c',
	'0x70B0BD2fe86fA4D6935F0908e1d7c00e7E8cd289',
	'0x20c77e2267d682f1413fe1be93caa1aac57b00ca8122e4dc1fff3fedee033ce1043caeded115acdb97d154a4bb347db06ef912c7938000012553d4abc092b5431c',
	'0xd5BE1a4bd4F1B66801ef25C593c6e52985A00055',
	'0xaf659b38fa8cd2cf8267a9978e1cb80421a0b18a9de7cc65acbd7708005306a055c4022ea3440ae04bbbbb526125e564e7435bd2d0857d3ac57188a114e7160b1c',
	'0x488da54BE478750ed2E8042998bC272582430Fc5',
	'0x317ceaaf0beb2b7969962f69523dd3470a9f5b110fdc4909edcfca569bf58cd9294e8645fb92f0304f70da73d330d2e18662aa2b39e678481214edef804490cd1b',
	'0xAD5334DAf2FEB4Ef566298A7b1a82b06A1728f9E',
	'0x8ba69c07df23c3259eda7f1861571eb55d5c3358c39b3044db3c40e4108187730a9f51805af6005a921e6a0170b8d649d71542d0e920a81d02e9567bda5901e01c',
	'0x7cc6970D33d5fd67f4365025cbAC3022fA0f6dCA',
	'0x186ae8854eb5f4d2e0114a635101cabf5fdb1b2eacc98314292e75142c5012b27e05c7a03bee105036bfbc32c5a267be4e454257c54f8636b0a3f850489da2981c',
	'0x286aB9d0c6f51190E2d5469Ef6521CA842BfEe0a',
	'0x2465f958b0faac7489f512e007e487aeb776f3fab9800229ebefffa7be22c7261d73ae9ca5cca4605805163000846e4a57446564ce7665d947be144f6aa3bbdb1b',
	'0xE54db296dF1A114C6f08F6C35482B14994016B1a',
	'0xd70c5800cea036fe4cb633d7520dac12ac1070f98fb26ac175605f03f49e540f4dea062d34f9ddda4d435a00e3c40399b4ceee2f029cb8567987c2402c131c0f1c',
	'0x7C734e4c677334a6480c4634bBB1AEbe714dE129',
	'0x3b471a1402b61c9cf651f675e2c4fc0a6ff3aa5eb5a2ee535daceeb5e74ec4862972646ace932fb9553f0ce8317f68856e060765936ecdfdee1f66133ae7c98f1b',
	'0x1031079474A946c410CcC0D61815d273437a88b0',
	'0x7ee2ca8e29ad35cd1fead486c462fd3b819de500eb783ca491e00a7ef6d5323a2f0a67edc4626d87221b1fae5d9c00342ef0a0338265fa65f081cb2535baab2d1c',
	'0xab300cD1E9cC0c9142129547406237a0daD34078',
	'0x42719477996f00d9dd5d68a47ec0bed11c633b04edc439cfad8096aacdcb3d2a2a296da7bd286a1cfb1f5a083836955feac72a5c990323fafd6446b341dc4d991b',
	'0xA5DEC5e89A15cE76A46BBc0504e3c7c3D514cB23',
	'0xb7a5669e2128153779befd935bd0e52b319727574b0cdbe1449295044824abb64af86e9556fdafcea6f6954ec970d861ea2a36d1ef8c5ae6cfbab32b805c2e811b',
	'0x03A0F536063CBbE5fF4A33CC5B8dd20389FD04fE',
	'0xd15dd0ac7b800fa45f1136b1a75abe8392f9110e0d5aab653bca0579bb8fe7b91f19ab80fd9309220fcda48dacb3f8685c0afdc809b80c3e2d7b450c2fc62efa1c',
	'0xC3B7fC3fe2f32494755AA6A32A33863dFF72757a',
	'0x83056d0aa09636596e87219c48bbe0fa9cea400ed758a23ff48a5ec33c021d9512d661eebb947d8ca4451203f7c707394de25269a802dbfd2d1d127f92ba7f3c1c',
	'0x5c9Efa9e31141DfA22c8C3dcF44b5E9CCE0FDA51',
	'0xfcd2f0248b71366b903e186627eef4c309d36a2e90bce15b4d5a4036cbf7af6b03b3de64ba73f8ee300341dc11d6183ac8680bb80fad3e8852676d3b164e32ed1b',
	'0x50ce9a1fFEa9A3d46BE022b318d2695C09dAFD2C',
	'0x1d121d83cfc6bbb7e9312b61571b744a310f3426871f7f4e5aa77962aae1e59b1e747687797e88c4a9d43d9ee6802a5075687590048ae559bb9fde2ec1c73dc01b',
	'0xB1Cb732f2A8108AC0CFB57b1faacB90fBD85E88A',
	'0x83b8dc46c454b5217f2394c7521714d43171d1ccdc98a16074a022bc31cc8ee308f3607303a9a60f39624425a32faf40715138c806688b06973555d85c4b48761b',
	'0x3D4B0e3ef9b9B119fF29dd0Ae348cA71a0C1bC73',
	'0xa2677350534ec96256ed4acfacb23dc151996408ba474939e485df714f931a8b2be3658b071db2712221fd5772fc6e4db4a1280062954308ce175bf94875b29c1b',
	'0x91aD800318955E6C3b4B59EAc2aFf763067B433e',
	'0xcd39669b831ed9019ebc25f8b15b407d2c293f66fae87811f7d34c6c019950a0410afabc4e7364f3f9b5371d9963db3d4fbaa8c00c07921a8d6fabb995cb1eeb1c',
	'0x15669b2A1fDed9eFaC338cc0dF0CAd587505F2Eb',
	'0x7e154be30cd97eda72cf61352bd41e90b1ef31dc476fd66cf52da6fb1ef6b9a54b79a0853903910b66743bb304247051a27f94b01af3de781510a0bba6ddf3d51b',
	'0xFdc924FbE0FD130406242A828E8c7D564f57ee9b',
	'0x11c5ae376b5d2548d16697e5863a5b71ef5f14cc8fdd26ad546242670ead6fad3c69af4a856e3429b9aaa8644b350ca29c9e11cc1207b024141613b9b8c94bb31b',
	'0x70Eddc502cb72affCDD064EDF0c8c3e731988cfe',
	'0xa88720a706f38b948e2175961dcd157a0186a20a3378fccf82822734736a2e1212473fc7506cb7ed9cf7b2c43533aa65c091733cf2a2355e618d65923c6476d51c',
	'0x0E915D48c85a6C8a4A1F8EbAE7CE1ffb0db5eaD4',
	'0x89a5b0eba4792288f9f789945969109005b4ab3a3ada32662e463ee98cbfae721585e31182d51d44b82de226dec60dfa797f1f2fadd1cc9b91438d6e22c944881c',
	'0x598ed77bc7fE9cf0620D8bF48b862e95ee26a870',
	'0xb95431578b52380e4d2965c92d0cf3034070fc7db757d8497fad48a82cf81d463d04889cbaa73b93ff3464a3d5344146be93a0390e3a16db259b9c05a8f048411c',
	'0xA05eAC1bDE7aD8f0a6065940fd41C7efa46B3438',
	'0x8461fa18ac8264ccdd8e1354bf389493ff6360cb206f3f0aad06089b2914ecea43d7116bbbcd948b62d6175047558456e3a0827616de5f01a5649bfd603d03621c',
	'0x3eC164ed66542647670a6d59a483d0f4e309eF7e',
	'0x80c29362052c5e682c70cb254e430ec69c5597d92c901203c62c03734fd164fa2d57a0d15a95f06792f638d748bbedf8ae8feda908a1732d7def339209487cb51c',
	'0xa5BE60342CAe79d55ae49d3a741257a9328a17EA',
	'0xe709c5c05c1e68ccd829950d6943e4d6db9681f569f993aa4e63b2279ac33f4f2c0d9a5a44ad550f84858176081cdda4ef8fd140008311f5bd3675cfb59ffc431b',
	'0xA94F37a7e1F5e4C66350354A8bF338432f552033',
	'0x70bd3bf407a926ad2ae694227e79962d614c2b4c7336e7dbb5d6f2ceb2252dcf11a2bbaa94a35e133c2b1f4da8d93f8958d1b518a1491cc92df46089852eae661b',
	'0xBa6a7bf40A6d08D92E7D81dB253bA606bCf0Db1F',
	'0x6c3d0e8737f47f1b9ed6c56fa646d60d3ff24a616013ef21b03dab9709be642d12dbf0bb9d9b4ab64f1ed9cdefd9a312d5ec7815ea9def67677c1383177060191c',
	'0x255e807Cb9ae8D5efe49Cc5b1a4d926EF8FB50ed',
	'0xf51cb9d501fd7a268fc6a869309455e47e63b305d0da457438de54f2849e151647f7f0202e790f51d3a3d93923ff1e1a04a028a2dc3250b546e35e4d84a9b9df1b',
	'0xe8B6a3ceE16A54E2A3283bF4761315B7Dc369358',
	'0xa473eba669d591f3292bc320061c872c42ccdeb4d51cce96779e312aa23b0cc177a6f423ccb38c4bf8666fcc51172d41f71c68095156dda0558dc6f84d473a9f1b',
	'0x6B7326916634121505900164E291f950e3FA09fB',
	'0x4f0640d66950211b4674d20a402491cac89d254c0899c7b899d8b9307a3e34ae58c85581fffeab08dfb713d845860f8cf481dc0af3c05070a5aa0905c12165061b',
	'0x44103343eC050cce457dFC8dCa9B3e39601819DD',
	'0x7b9043e708da32a1ca79aaeb79c8810b67308b69c152e165fc2312379ddd2dcc45a47098b5a47b956908cd3ce5cf736a975f75861d45b2940785fe26a15c23601b',
	'0x05f9FDa740b8553c64aF1a56CBEb5355cAC1105A',
	'0x96c619977bffa43ac3ce0db4e5a6323543df6f9c71474093b367392e0f25f2e76088b392ec034bea0e55d35d0d1a9fa2788ba29d457aba576c1e3889843acdb91b',
	'0x9E6FD664132522Ce3ae5dB73724d7cc5f0193e7e',
	'0x269e99b28b9bc2a91d0f1801e618ef93185891b99d380f42220d881f381297f7512b6e3bad2b1ba1bae7545dd9269e8ae3a43ee197cc482d0f813bf848db0cb81b',
	'0xb02F2C18a9eD8F9c74A82A64eF00A6F952255Bae',
	'0x13a59bb96f0490334d9db5ab9a362d864541df8d6ff2191a6e68abbf04d5e06642d016a996ab524dee66d42e74fbdb2e9d8499a5e267dce43bd824dc61e1369d1c',
	'0x8cc0Ea7ba02CddBF538B00095E0B75da7FB48a3C',
	'0x810fd4ca4e1d5716d1271997d0af1c19b8fe08adfa8b8bebb9da6e7839a7159e06aabd6222489801d4d88a3379882db44c72e463a57fa15d6e86eeac945f6c2f1b',
	'0x722AC2BFfB9286326dbdbdfC338c93a254923342',
	'0xe630f911907495bc4c904733b4c122f2e0882840054eed72a403fbddfd9adefd46f34dadb807582eb7f22201fb58a8b4ab52b1b5c63b98a3ba9a03371650e2901b',
	'0x29c3404483277A126BEdC03c7B1D41442e687114',
	'0xa5d21c2dcab08eefd8301c4f3afd6785da8a58524a211c70f0bc02b72886063b088ba7b8d25d1402c5981e5208cb4dbcefe8f5bfc0585d18ec73e6d83dd56fb91c',
	'0x3D045042139790D3Bd539Ba19dB7A57e3773d22B',
	'0xfcdc7d827ccd8f4ac72fcdee96761f3676f7a40bbdfc24bd32480ce6ca7463a14d8ab4b4c04cb2796900b7ae4f5982cd7dac88b5cf1b82c1dcb316033f13b9341b',
	'0x694B42dA903f4AD368Af67d4Eed630D7e78c8641',
	'0x939b5464abb7dd94c562925948faacd725d8741ff4abe9b0ddd6a79485073d8406a2fa0232cad64a0a4583c386809b35c9d87df70ec6d1f1f2b80b14f04a6ebd1c',
	'0x187609635b82e8D0b3cEd0bAB94AB5525A3caE0A',
	'0x0db092a7bf7f50e4cb650b2e86a309561df8b2ed565a9fda8b84c9e7a8a969cd7daf3348f9ab67c7a2f3c29f4769dc1fd991aafa48c1991530a4aea19483e04b1c',
	'0xE54db296dF1A114C6f08F6C35482B14994016B1a',
	'0xd70c5800cea036fe4cb633d7520dac12ac1070f98fb26ac175605f03f49e540f4dea062d34f9ddda4d435a00e3c40399b4ceee2f029cb8567987c2402c131c0f1c',
	'0x17982d4224d781187617e01A4b7f4Df7CbcF317b',
	'0x369be238d3ca1b21576528d992d15dd9fded194843af878e859787fd7e0b62cb75d02b8871b9f895009169662ec9522f7893139df66250ebbc8c18e0d78cd4ce1c',
	'0x1C37C363F1C06FC622d2e8A9E7A2cc7bF4094B6c',
	'0xd45103ef3478b783c2b3e02fc1323cca4028513b15be1637e018f1b9227e94377af88dab1d6100a68d561ea0aa6041504efbbf5d8106aa81ceb7a7611e7a883c1b',
	'0x6bEaDC32D84F9a0cd4d3C53132d51941cB06d428',
	'0x8a5aee6b53fe9a2bfb2404fa2b5eca08d2c402c88c812f671da181cd2b114ff902c5ac6f468eb523490fdc68447ff533c337af8f260b3e42af3b1a32cb94cff41c',
	'0xba31300f23399023bd93419f2306c38b3431dD12',
	'0xb2e9138be554c3455df7dfd1cb1604b1fc5d6e3a399bb4ab3cbeb374a51d3a2045e5d6cefa69b7b92f2988fc22cd836214a9589fed01731d8e095bba95c5f4fe1c',
	'0x2C90Da9d9aB9Dfba50e3C9665d588bC54A5dAadC',
	'0x184fb618588edd32e9e7226bc9bbb727cdbbf2f37b4018034f4475eeae60168262fe6085385379b3c76055127b32e46053db96ec3d52631ae5b19dc63ca161801b',
	'0x73ea8BeC08Ea714fB52B904cf0B1A20c4F529f20',
	'0x4d08b8767f2172fd890e4bf20953461f28b4a975c838488f8e045393b30d3863308f7c958083699e90c4f2445e277420a45a3be0d824ba73268ae131d5d7de571c',
	'0x53a77F6da3143acaD387dF985E69BB394a01EcA8',
	'0x346be6536da0c81ce73754ff5c0b177fbb4992b56540c34ec67b637b8204465d7d6288250c01d9448bce9bb717fae2f78c7725e3a311ca9e9556cb304782476d1b',
	'0xD8A8DC1557303f61013982708956551415cFDC2f',
	'0x2fb6bea8d52c0cfccefee2c88628a7ea263dfc761ce05a63f55f28b7d29f30cd730033d8f89016e9944f885898317aa602ff202a297ebe43142fc96d99ec50641b',
	'0xebB28a9A31D492C38BAC963f8287dFb900bCF9F9',
	'0x3a5196146d73bf82b1620ecf26f4b4e55550d20e7baef93ff69846d8bdbd9b396d4ba3cfbce5758fddaca1ecd226a372f113dd1e5ed7b488e3d19ebf02eb48a71b',
	'0x9A0880Acac6535dD97fB59E8126f6f04Db1c880c',
	'0x822beea963f52e49616d8f15a2600d2856b3373d40519ba64da2f1b8bd90d0af319cffbe7f434091285ed1373ba21dc293414f12a4056838d82386337f9f4ec21c',
	'0x0d448A793916d1268320608B4264123a5Fdf1A19',
	'0xb862cfe94decd39c186fc696fb03abac3b9d2fc2b0d1bde7552b890480198be544335fc0ed10fe43204d1969fd44f28f898766b116895a493ab85a52ac104c7e1b',
	'0x25949301a4dd319Eb5DBd9931d85E75432b9b12C',
	'0x0fe48700f16472bd6241b0a0036bf68ba577aa41ac8f7bce11f29a50648f94d175839b2ede5d61308663195916eb0ea1d4e8a445369350c35484b637ba0f240e1b',
	'0x8De1bbdBaAb3D68376B2441A3dDABB27eB24f8E3',
	'0x40ba9316a52b8ff744b0b44b11a40d28c5d1acd9e4585150ac6019113154386b62d5e28ddcb7e789d3219410cb6a5a6335d001c9cd76ee2e558ab5c4790070701c',
	'0x129c6D64a5b7E1d0D547978cD37acc3B9A9e1473',
	'0x4a360adebd04e1ba19a7a6cb111b5d191853a7c0349d25c684e33afe23e7242a714a21ebdf69badcff71f1ddc8e7d1e6a357edd8871727cc65bae1c65494fbdd1b',
	'0x0B5069e5154d7c9A67b1aeB9Ce3f20E6AB814e16',
	'0xcee46dbe5887861c280be82f5612df7eab20b13b1fbd2e39553ea1fd38b412276e0a29df38bd80b7b4c20b93dc4976e6794d233569fb88fcbca171128773b27b1c',
	'0x235B136c689760dC1857e8f7eEeaC9C0AA3Ed2E8',
	'0x36bf1648c5b3afd900117a8d6e911aa8ee3beca6ffa54ae7366f8992d00f1313724a5d41705ad2ce004f488343c9c5653dd215ff5cc1d71d0d2defdc0dc26eba1c',
	'0x232B6d8E7A834CB37951B1Ed31C2F57aE7585437',
	'0xd9cb9959a7c6f196fdf5d332014aff5041b73b9c15b5d429b830a04a81ad41b903a5bf23b752dabc2bfbade61e06055c681bce9d1f3db5dacd66857d5105e8b61c',
	'0xd2c42530a83370924038704d99F2B4E157436B66',
	'0x0b3cba6f08361e3f2502bf66794ff5675e7bce0a763a544007bfb5c6dd23bff80675bf395a1af8a4bb25ab55b068b73304ffedae3fd825c4707279ec7ee029451b',
	'0xc0B4F60231c3145cA10CfC46AA7fF2D54AF8CD4C',
	'0x2c6237294057b901b8e85c6ad2f1b01e4697f66d7b41b2d580ed778bec60acd91ba3ea1a9ba39cb92f033816389d24a8a7b11d7b4519309158bc75a205b0585e1c',
	'0x2e4725fCBf5d1524f4a6BB83a2FF777Bd856633B',
	'0x416ff37811ccb5b51c7c924f8319588ae7e802679e2b1ecc938f4a7652d50d794bcf0032a01b31cf98ef7a007191c42516868f08d33b917ec6261c30280281371c',
	'0x4b78b54671eE885814be88a10A1A1b7E7c2E60Ed',
	'0xd3245a7237e9b1774e4cb33b57b85d8811665adc37fc27b17a2b43e8889b11b30be396781702c85d3489eb84eaa23bbead987dd1600b315a43446b6f162ae6101b',
	'0xe2502EB83f07244A5b5a5Fa878BdBE9c8DF07d93',
	'0xfc25694dc8af95c59de1ffed56858de6ccf425468fa6e2839d101c05ee57aff514418b0201e57c9c9c769c5cfc41e78117aebab3ccad77308d928765657628881b',
	'0x7eC0666E11A4398B8e9125874aEBa16d0ba86079',
	'0xa06c7ed5ccd18acf4958fb0769159b4ebbf4d16a998f82c36eb8d7a39911dfab0633447df5b6c6191a136703793f732e2beb275cfc4e04572cb88be906bba90a1b',
	'0xbF8735Ad7A3c0e8Ca25Df7f3c158D66D113C046d',
	'0xf825ce04e2777778663c551f2a2780d517915ddd470ac44178899b4682bf84590ef265fc7a1bc2c64739a5038a6096e4775ea8a0aff27b72031c4094b84b9bbc1c',
	'0x78c8a2458dE77B636958Fc35aF82770f619DAf0E',
	'0xae5d68b676991bac5e79d36b8f218b2c32070596739b9b50b42fc5a984b85e1b072a0acc9327d59226868f9e50f9c6a6d2f324188164f8fe292d6b24a7f026b61b',
	'0x61a002c7F723B8702Dc910D14e1d95a523a8FCCC',
	'0xb3875795412b51f6a96d651a09db7d0e3f43115f26a34d270b452178aac4f67256106aa960f80df395ffa833a30777fba12b9640b053ffe2a383dfca87b874971b',
	'0x416cdC2DdDD58a398c1857969e9449c2e65C03E4',
	'0x694c8205047c90117f9d3dfd05e6ae795b679aec66e53cab9a19021c3d1d9f3d16474c1ec51b9d5b79f6bfbb072817437cdd620cbf8d8e6511d33e7f6ab688301c',
	'0xDb99666A7E0E475B946bf111DFcF58f1e284630f',
	'0x3e53a184ac1aff96c8bf7d1496ea8677bdb63c46aa14b3825387f25650169d27557c2bc80f85142ee8fb3a3042bd26886db9d8e79d94c22b676db3dbd550e5c81b',
	'0xfb8becA44bbF53BdC7576EEe4e0583aC8437d11c',
	'0x0d1ce20ce1761a2e6baae9ca6c2d418fc561509c2975aa1671c617624cdcaa10472cecdac86ce82235d1b70404b477098f65601361156612c091f0fb03d12a671c',
	'0x3C36f8DBec7B5e74C1de617133c718C071C22a1e',
	'0x89bc6560da8e521d41a513e345a8ab7231638d42cc1a28f40b454670498842ca5143c8d79a3fc45a9d8f8eb57b762661a153c0de813c4a25e2d9bca747787da71c',
	'0x5F33DB6beb9DA0d30Aa6FF41516EaD7b56147FcB',
	'0x0f65c62ced7da9527ebe1c0de8ae48e0e8da891c1394d6de2fbb09cb569a8ff672183f94b9e19fb27f899aade57dfdbe713b1e1e41f0dcfa114768fb0c4c5f451c',
	'0x5E987311BA4483948191923fca98A144526f518d',
	'0xe791af3ba69ede737c840ae796252a4af21c3d41cce1a5a2cff10be97a3927194efd378733b16f86ffaf6d43c7c718ab793ddc520adf17392c86d1f2b8125a421c',
	'0x17982d4224d781187617e01A4b7f4Df7CbcF317b',
	'0x369be238d3ca1b21576528d992d15dd9fded194843af878e859787fd7e0b62cb75d02b8871b9f895009169662ec9522f7893139df66250ebbc8c18e0d78cd4ce1c',
	'0x295171D1eD04a23d13834882Cc6Fa1ee232f3a6b',
	'0xb4f1ef398a1b12e28beab285711a644a3c4ed05a7e76cf60d764b0f886b3909e53258a07290e67b1338871887257a66d32ff24a35e466d5dc2531ccf8f0970c01c',
	'0x3B083c4fF19A82cD94a4361b51C20A1193564510',
	'0x97e0e2e0b3e36cc81457b8702eca890c081a3a7bdead99c0b7a71f5e5227fd313d5deaad500a859006246d5bd2a07acf40876a5a6c740d8087d6c62392eade6c1b',
	'0xFC5535eC6ecC775Bc9C70dE170d533C9f766b6f7',
	'0x7c6f35c6d25206fba04184f5ba347c558a5cd7b9eb47db6f538a317237caca2b75386e3bc43ed50bd63bfe90510e9e699a6f96cc0391053e6d1d6a57b66582051c',
	'0x2f623b63EC0B567533034EDEC3d07837cFCC9feE',
	'0xf6b0c95be40f62f61a96bd626fce7d655387b1507c7c65e3e9e30635474fcbaf31392888e032af405725ac663fa5cececcef5e003c683122cc7153592d55edf41c',
	'0xBc592C836a584e2FF5E708E88E14e5CC34138F4e',
	'0xe81fbe0afb9de4dc46f0e5243d494b95fb06c8d2a07972b78d2a0b0530469ab02390b4a578392386da2caf5f41b3e59425145d76e7ec8491f72875c5c69c58451b',
	'0x1B1d01Af2ce592af9ADA60672CEC1F9446052a50',
	'0xfee2a1add2aed7f39a5081df41ab0074be742e9a096719da2586f9a066745b9f25d022bebf109e0479c21a1622b7da0b853a23549c454df4e73b1b1b856313061c',
	'0x6cCbe0CeA9d57D761FE95295dF9D91247a1319a7',
	'0xff3ec72ba9f156581853ab200c73cf19f302c45e05ab56965c4f8f4495d96eb80841e7cc776287fc935d6a68e37cd9fe83f765790999e32bf4a18020894d5bb21b',
	'0xd2c42530a83370924038704d99F2B4E157436B66',
	'0x0b3cba6f08361e3f2502bf66794ff5675e7bce0a763a544007bfb5c6dd23bff80675bf395a1af8a4bb25ab55b068b73304ffedae3fd825c4707279ec7ee029451b',
	'0x03A0F536063CBbE5fF4A33CC5B8dd20389FD04fE',
	'0xd15dd0ac7b800fa45f1136b1a75abe8392f9110e0d5aab653bca0579bb8fe7b91f19ab80fd9309220fcda48dacb3f8685c0afdc809b80c3e2d7b450c2fc62efa1c',
	'0x6044EDbaB80E4B1C6C26fEa1f31AC69Fd2847B6F',
	'0xa1f5247a49760938359b35f854f41767f3e53212d5f8619325ac4690723acb856137ed5babb2349657a7b5dee78ef17a896eee5d895f892ab6dd61c5e9af970a1c',
	'0x38d8934613f32b13FEE2234D8218c8eb877Ed90c',
	'0xfece1bb51516a27e03656c77e949a47863613cfa058f9b6fcf9c1871915d15236d495bab58cbfe90347e9c551682c536cfb524cf3dd27e1ed67d717424b6a4671c',
	'0x2260D513f16C4a20eA289A7702B3c93AdFb00A57',
	'0xd38a0a2e08e041639c9e8e84d88f18b8700e51b6751aec3685a351277e93f1e338825b9e8e6921e334a623b0585a08bc0d940bb62a75bb7b758f04ca1efbabca1c',
	'0xD7250544890e1c4E11181DB015Fb8E651185b77F',
	'0xf5a71dfe3b10297f49a110331965af5d4ecc08dd261c8f2513e875e8e4260596004c3950ea5be5b3292ddcefea54065f493828081cff8dd5a603c03f2281887b1c',
	'0x355f0F759306FE28c79578Ff99aBB37CCd3a17ee',
	'0xb83daa4c2b24b672c81b918c03b2c50109b336ab7ef3ad077f64e2118f1530b34eaeedba33aeca47d3120618e23536a00cc0ca14d304de5809748c734870c54f1c',
	'0x96057c2C2354D7B193BE887FfA0039017cEF5841',
	'0xc4e81986f2cf9e894e12cd8c60e59dfa3311b78c01dac02a4ca4223f0ba62a1154ee0c8a73c4860a2f321c59544bbc9d5a5ab57509fa390f249d33fc80dfb4991b',
	'0x38704Ee6927f606bBF63DDcaBFC8d2dE0d4F7296',
	'0xaf69c8a872fde8dbaaae393c63208b2d5602a488d8b45fbb1158555fa999205f4b284be74e174264eeb015011ebdcdda610d4c5f8cffca8bb916dd9d92e0acfe1c',
	'0xF49ee3Dc2c35675a0Ae4D93D840187C6E9617aDe',
	'0x8f2b805e8c89e370eba9d5c24b73ec4351b007b0cbfae6b4d78b93d493afa51e1741641af00f46c47a4faa82812a921a2c99b3ad4e43872489e7a20d868025c71c',
	'0x0FB324D8cF0484C09ba3ba6C359723e18A76382d',
	'0xd939695b4633cf9cb3c292717d5728fcc10dfdaf714754f11f6a91f48dad3aab267f7dddfdf57df2e7ff8caf358994bfbd3a06316afbe1517f0683d37b00c4581c',
	'0x632149c69829604873417ab51d461C45737DF0be',
	'0x56c4518be9e4e22d9a7ca72ad6a59d8cad05a6eed373dc726b17d9ab4e3209b805f9cd56c9a87c98feee168131b739c9baf1fa59f0d131bec183138031a5653f1b',
	'0x735235F5d2f5B0cf2d28016fB492024204C79FB6',
	'0x5b4a68e5a239c45cfa90e87824435042ecb6631120e61d198eaf26f56b9f7dc32c63bdc26be6af24cd98ba8bfe313d5bcc7ebd2b7e5e92b6529e8179546354ca1c',
	'0x91aD800318955E6C3b4B59EAc2aFf763067B433e',
	'0xcd39669b831ed9019ebc25f8b15b407d2c293f66fae87811f7d34c6c019950a0410afabc4e7364f3f9b5371d9963db3d4fbaa8c00c07921a8d6fabb995cb1eeb1c',
	'0x7A0049fe5208c6CE9C02b00051619fC3E000dc2C',
	'0x7b428a26808f2ab39f814f840f8a3d9d207ff216d24c66433736cbbbf70a92ca4d546df4ef04810a2ee5ab0e46b8a48e0ca969f14e59cfe1caa49cc0888838c21b',
	'0x72f1a7C88917517223f75aE891B53aFE2B89E5ee',
	'0x1fc0450401075181c184c1a4a79f562c8bd085793612a6a5bb90cb0e972433592721c5096b0b895a295fb1600812c05b3125a8621520861d20550a189774e02a1b',
	'0x6108Def28FbA7D47eA57C3132442d0765148a430',
	'0x53710803358c73a718262dc1718330b711c85c09e58e63a125a301ea6ab53f445a3b709031ca8fe364eb4ecc6686505577f195bd2f2811b807bad51976f8e77a1c',
	'0xba31300f23399023bd93419f2306c38b3431dD12',
	'0xb2e9138be554c3455df7dfd1cb1604b1fc5d6e3a399bb4ab3cbeb374a51d3a2045e5d6cefa69b7b92f2988fc22cd836214a9589fed01731d8e095bba95c5f4fe1c',
	'0xef835f20d85f76254a3E110ddFc135811f3962bd',
	'0xfa529776aa1007abfebc805f2b47131a49d62184fa550119d8ecb0baea6d3a7f5410d707e8867661f4dd50c61a388031563d5bd91e4f67e802564e7230eba2911b',
	'0xDf06A761D286C0ae835173236E1f12f1379E4977',
	'0x2c20169dbfce29984a30874198857da042d3cc38d900a2a63e1001c69f6f525820158680bc2c01c279a2d64c5e244f3e667b74a48ee83d959991c9e3e52cc5721c'
  ]