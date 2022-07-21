var mysql = require("mysql");

const dummyData = [
  {
    id: 0,
    img: "https://ecanlitvizle.sitecozum.net/logo/trt-eba-tv-lise-canli.png",
    title: "Eba tv",
    hdr: true,
    dvr: false,
    page: 1,
    streamLink: "https://tv-e-okul00.medya.trt.com.tr/master.m3u8",
    guideKey: "trteba_ilkokul",
  },
  {
    id: 1,
    img: "https://ecanlitvizle.sitecozum.net/logo/d-max-canli.png",
    title: "Dmax",
    hdr: true,
    dvr: true,
    page: 1,
    streamLink:
      "https://dogus.daioncdn.net/dmax/dmax_720p.m3u8?sid=4km737syfwoo&app=5a02c599-d17e-4982-9b04-090934d51af7&ce=3",
    guideKey: "dmax",
  },
  {
    id: 2,
    img: "https://ecanlitvizle.sitecozum.net/logo/trt-belgesel-tv-izle.png",
    title: "Trt Belgesel",
    hdr: true,
    page: 1,

    dvr: false,
    streamLink: "http://tv-trtbelgesel.live.trt.com.tr/master.m3u8",
    guideKey: "trtbel",
  },

  {
    id: 3,
    img: "https://ecanlitvizle.sitecozum.net/logo/haberturk-izle.png",
    title: "Haber Türk",
    hdr: true,
    dvr: true,
    page: 1,

    streamLink:
      "https://dogus.daioncdn.net/dmax/dmax_720p.m3u8?sid=4km737syfwoo&app=5a02c599-d17e-4982-9b04-090934d51af7&ce=3",
    guideKey: "haberturk",
  },
  // news
  {
    id: 5,
    img: "https://ecanlitvizle.sitecozum.net/logo/kanal-24-izle.png",
    title: "24 TV HD",
    hdr: false,
    dvr: true,
    page: 1,

    streamLink:
      "https://mn-nl.mncdn.com/kanal24/smil:kanal24.smil/chunklist_b396000.m3u8",
    guideKey: "24_tr",
  },

  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYt5YsCztoXi2yWI5GwbjkMo2RurPRQ187TQ&usqp=CAU",
    title: "A2tv",
    hdr: true,
    dvr: false,
    page: 1,

    streamLink: "https://tv-e-okul00.medya.trt.com.tr/master.m3u8",
    guideKey: "a2tv",
  },
];

// heroku sunucu
// var mysql = require("mysql");
// var con = mysql.createConnection({
//   host: "us-cdbr-east-06.cleardb.net",
//   user: "bf8f8d03d8d15e",
//   password: "63538602",
//   database: "heroku_c20e16b2bea37d4",
// });

// sunucu
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Alomalo55.800",
  database: "uyanik",
});

// local
// var mysql = require("mysql");
// var con = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "",
//   database: "uyanik",
// });

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  dummyData.forEach((channel) => {
    const { id, title, img, guideKey, hdr, dvr, streamLink } = channel;
    var sql = `INSERT INTO channels (title, img,guideKey, hdr, dvr, streamLink) VALUES (?,?,?,?,?,?)`;
    con.query(
      sql,
      [title, img, guideKey, hdr, dvr, streamLink],
      function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      }
    );
  });
});
