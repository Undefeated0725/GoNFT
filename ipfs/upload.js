const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "Go",
      attributes: [
        {
          "trait_type": "Record",
          "value": "100"
        }
      ],
      // if you want to upload your own IPFS image, you can do so here:
      // https://github.com/ChainShot/IPFS-Upload
      image: "https://gateway.ipfs.io/ipfs/QmXqe2hE7Xv1wVRe6JPpRZFZ4kX25MhH2g7YTDzAVuxS9p",
      description: "The value record of Go played"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
