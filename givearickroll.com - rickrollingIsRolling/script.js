let youtubeList = [
    "https://www.youtube.com/watch?v=j5a0jTc9S10",
    "https://www.youtube.com/watch?v=dPmZqsQNzGA",
    "https://www.youtube.com/watch?v=xfr64zoBTAQ",
    "https://www.youtube.com/watch?v=Uj1ykZWtPYI",
    "https://www.youtube.com/watch?v=Dh-CW22axyY",
    "https://www.youtube.com/watch?v=-lmhJOhQHWc",
    "https://www.youtube.com/watch?v=fZi4JxbTwPo",
    "https://www.youtube.com/watch?v=oHg5SJYRHA0"
];

let iframeList = [
    "lankami.tk",
    "pelgaflox.tk",
    "kambun.tk",
    "gammarini.tk",
    "lavrafez.tk",
    "ommayo.tk",
    "mindifuli.tk",
    "bugremixen.tk",
    "almuranne.tk",
    "wargobux.tk",
    "admalona.tk",
    "burgemix.tk",
    "lzmarux.tk",
    "adalzaim.tk",
    "purgamen.tk",
    "dorifam.tk",
    "desketic.tk",
    "kalvonum.tk",
    "nommartaz.tk",
    "twirnex.tk"
];

let qrcodeList = [
    "/images/qrCodes/01.png",
    "/images/qrCodes/02.png",
    "/images/qrCodes/03.png",
    "/images/qrCodes/04.png",
    "/images/qrCodes/05.png",
    "/images/qrCodes/06.png",
    "/images/qrCodes/07.png",
    "/images/qrCodes/08.png",
    "/images/qrCodes/09.png",
    "/images/qrCodes/10.png",
    "/images/qrCodes/11.png",
    "/images/qrCodes/12.png",
    "/images/qrCodes/13.png",
    "/images/qrCodes/14.png",
    "/images/qrCodes/15.png",
    "/images/qrCodes/16.png",
    "/images/qrCodes/17.png",
    "/images/qrCodes/18.png",
    "/images/qrCodes/19.png",
    "/images/qrCodes/20.png",
]


function newYoutube(){
    document.getElementById("youtube").innerHTML = youtubeList[myRandom(0,youtubeList.length-1)];
}

function newIframe(){
    document.getElementById("iframe").innerHTML = iframeList[myRandom(0,iframeList.length-1)];
}

function newQrcode(){
    document.getElementById("qrcode").src=qrcodeList[myRandom(0,qrcodeList.length-1)];
    qrImage.style.display = block;
}

function myRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
