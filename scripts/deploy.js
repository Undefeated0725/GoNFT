async function main() {
  const GoTestnet = await hre.ethers.getContractFactory("GoTestnet");
  const nft = await GoTestnet.deploy();

  await nft.deployed();

  console.log("GoTestnet deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })