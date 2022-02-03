const address = require("/Users/Cardioid/Desktop/nft/airdrop-nft/IPFS-Upload/index.js")

const friends = [
  address
];

console.log(friends);

const existingContractAddr = "0x56263cbf97F4d013f4Ab86137b47Ca84CaB346Cb";

async function main() {
  const nft = await hre.ethers.getContractAt("GoTestnet", existingContractAddr);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  for(let i = 0; i < friends.length; i++) {
    const tokenURI = "https://gateway.ipfs.io/ipfs/Qmcz7eFQV3rJKhdAcNAmuMU1WFd3ncZbGkmJNAn5qQap5i";
    await nft.awardItem(friends[i], tokenURI,  {
      nonce: nonce + i
    });
  }

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
