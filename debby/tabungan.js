class Tabungan {
	constructor(nama, id, jumlah_uang){
		this.nama = nama;
		this.id = id;
		this.jumlah_uang = jumlah_uang;
	}
	set setNama(nama){
		this.nama = nama;
	}
	set setId(id){
		this.id = id;
	}
	set setJumlahUang(jumlah_uang){
		this.jumlah_uang = jumlah_uang;
	}
	get getNama(){
		return `${this.nama}`
	}
	get getId(){
		return `${this.id}`	
	}
	get getJumlahUang(){
		return `${this.jumlah_uang}`	
	}
	hitungbunga(bunga, lama){
		var total = parseInt(this.jumlah_uang);
		var bunga = parseInt(bunga);
		var lama = parseInt(lama);

		for(var i=0; i<lama; i++){
			total += total * (bunga/100);
		}
		return Math.round(total);
	}
}

var tab = new Tabungan("debby", 12, 10000);
console.log("Nama : " + tab.getNama);
console.log("ID : " + tab.getId);
console.log("Jumlah Uang : " + tab.getJumlahUang);
console.log("Hasil : " + tab.hitungbunga(10, 5));
