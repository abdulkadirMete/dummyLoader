const dummyData = [
  {
    id: 0,
    img: "https://ecanlitvizle.sitecozum.net/logo/atv-tv-canli.png",
    title: "Atv hd",
    hdr: true,
    dvr: false,
    page: 1,
    streamLink: "http://tv-trtbelgesel.live.trt.com.tr/master.m3u8",
  },
  {
    id: 1,
    img: "https://ecanlitvizle.sitecozum.net/logo/cnn-turk-canli-izle.png",
    title: "Cnn Türk",
    hdr: true,
    dvr: true,
    page: 1,
    streamLink: "https://tv-e-okul00.medya.trt.com.tr/master.m3u8",
  },
  {
    id: 2,
    img: "https://ecanlitvizle.sitecozum.net/logo/show-tv-izle.png",
    title: "Show tv",
    hdr: true,
    page: 1,

    dvr: false,
    streamLink: "http://tv-trtbelgesel.live.trt.com.tr/master.m3u8",
  },

  {
    id: 3,
    img: "https://ecanlitvizle.sitecozum.net/logo/haberturk-izle.png",
    title: "Haber Türk",
    hdr: true,
    dvr: true,
    page: 1,

    streamLink: "https://tv-e-okul00.medya.trt.com.tr/master.m3u8",
  },
  {
    id: 4,
    img: "https://ecanlitvizle.sitecozum.net/logo/bloomberg-ht-izle.png",
    title: "Bloomberg Tv",
    hdr: true,
    dvr: true,
    page: 1,

    streamLink: "https://tv-e-okul00.medya.trt.com.tr/master.m3u8",
  },

  // again
];

var mysql = require("mysql");
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

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  dummyData.forEach((channel) => {
    const { id, title, img, hdr, dvr, streamLink } = channel;
    var sql = `INSERT INTO channels (title, img, hdr, dvr, streamLink) VALUES (?,?,?,?,?)`;
    con.query(sql, [title, img, hdr, dvr, streamLink], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
});
