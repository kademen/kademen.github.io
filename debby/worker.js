self.onmessage = function(e) {
  var nama = e.data[0];
  var usia = e.data[1];
  var uang = e.data[2];
  var bunga = e.data[3];
  var lama = e.data[4];

  var total = 0;
  total = parseInt(uang);
  for(var i = 0; i<lama; i++){
  	total += total * (bunga/100);
  }
  total = Math.round(total);
  postMessage([total, nama, usia, lama]);
}
