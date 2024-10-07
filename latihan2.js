class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ${this.nama} adalah jenis kapal ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`;
    }

    latihanKapal() {
        return `${this.nama} sedang melakukan latihan navigasi.`;
    }

    periksaKeberangkatan() {
        return `${this.nama} siap untuk berangkat.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, panjang, lebar, kapasitasPenumpang) {
        super(nama, "Penumpang", panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infoKapal() {
        return `${super.infoKapal()} Memuat kapasitas penumpang sebanyak: ${this.kapasitasPenumpang}.`;
    }
}

class InfoTiket extends Kapal {
    constructor(nama, panjang, lebar, kapasitas, jumlahTiket) {
        super(nama, "Tiket", panjang, lebar);
        this.kapasitas = kapasitas;
        this.jumlahTiket = jumlahTiket;
    }

    cekTiketTersedia() {
        return this.jumlahTiket > 0 ? "Tiket tersedia." : "Tiket tidak tersedia.";
    }

    pesanTiket(jumlah) {
        if (this.jumlahTiket >= jumlah) {
            this.jumlahTiket -= jumlah;
            return `${jumlah} tiket telah dipesan. Sisa tiket: ${this.jumlahTiket}.`;
        } else {
            return "Jumlah tiket yang diminta melebihi ketersediaan.";
        }
    }

    infoKapal() {
        return `${super.infoKapal()} Memiliki kapasitas: ${this.kapasitas}, Jumlah tiket yang tersedia: ${this.jumlahTiket}.`;
    }
}

class KapalKargo extends Kapal {
    constructor(nama, panjang, lebar, kapasitasKargo) {
        super(nama, "Kargo", panjang, lebar);
        this.kapasitasKargo = kapasitasKargo;
    }

    infoKapal() {
        return `${super.infoKapal()} Memuat kapasitas kargo sebanyak: ${this.kapasitasKargo} ton.`;
    }

    muatKargo(jumlah) {
        return `${this.nama} sedang memuat ${jumlah} ton kargo.`;
    }
}

class KapalPerang extends Kapal {
    constructor(nama, panjang, lebar, jenisPersenjataan) {
        super(nama, "Perang", panjang, lebar);
        this.jenisPersenjataan = jenisPersenjataan;
    }

    infoKapal() {
        return `${super.infoKapal()} Dikenal dengan persenjataan: ${this.jenisPersenjataan}.`;
    }

    siagaPerang() {
        return `${this.nama} dalam keadaan siaga perang!`;
    }
}


class KapalPesiar extends Kapal {
    constructor(nama, panjang, lebar, fasilitas) {
        super(nama, "Pesiar", panjang, lebar);
        this.fasilitas = fasilitas;
    }

    infoKapal() {
        return `${super.infoKapal()} Dikenal dengan fasilitas: ${this.fasilitas}.`;
    }

    periksaKeberangkatan() {
        return `${this.nama} siap untuk berlayar dan menikmati fasilitas.`;
    }
}

class KapalTanker extends Kapal {
    constructor(nama, panjang, lebar, kapasitasMinyak) {
        super(nama, "Tanker", panjang, lebar);
        this.kapasitasMinyak = kapasitasMinyak;
    }

    infoKapal() {
        return `${super.infoKapal()} Memuat minyak sebanyak: ${this.kapasitasMinyak} ton.`;
    }

    muatMinyak(jumlah) {
        return `${this.nama} sedang memuat ${jumlah} ton minyak.`;
    }
}

class KapalRiset extends Kapal {
    constructor(nama, panjang, lebar, tipeRiset) {
        super(nama, "Riset", panjang, lebar);
        this.tipeRiset = tipeRiset;
    }

    infoKapal() {
        return `${super.infoKapal()} Digunakan untuk riset: ${this.tipeRiset}.`;
    }

    lakukanRiset() {
        return `${this.nama} sedang melakukan riset ${this.tipeRiset}.`;
    }
}

class KapalKapalang extends Kapal {
    constructor(nama, panjang, lebar, tujuan) {
        super(nama, "Kapal Angkut", panjang, lebar);
        this.tujuan = tujuan;
    }

    infoKapal() {
        return `${super.infoKapal()} Tujuan kapal: ${this.tujuan}.`;
    }

    berlayar() {
        return `${this.nama} berlayar menuju ${this.tujuan}.`;
    }
}

const kapal1 = new KapalPenumpang("Kapal Laut Milik Nadila", 120, 30, 500);
console.log(kapal1.infoKapal());
console.log(kapal1.latihanKapal());
console.log(kapal1.periksaKeberangkatan());

const infoTiketKapal = new InfoTiket("Kapal Wisata", 150, 40, 100, 50);
console.log(infoTiketKapal.infoKapal());
console.log(infoTiketKapal.cekTiketTersedia());
console.log(infoTiketKapal.pesanTiket(10));

const kapalKargo = new KapalKargo("Kapal Kargo Jokowi", 200, 50, 1000);
console.log(kapalKargo.infoKapal());
console.log(kapalKargo.muatKargo(500));

const kapalPerang = new KapalPerang("Kapal Perang Prabowo", 250, 60, "Rudal dan Torpedo");
console.log(kapalPerang.infoKapal());
console.log(kapalPerang.siagaPerang());

const kapalPesiar = new KapalPesiar("Kapal Pesiar Indah", 150, 40, "Kolam Renang, Spa");
const kapalTanker = new KapalTanker("Kapal Tanker Merah", 200, 50, 3000);
const kapalRiset = new KapalRiset("Kapal Riset Laut", 180, 45, "Biologi Laut");
const kapalKapalang = new KapalKapalang("Kapal Angkut Kota", 160, 35, "Kota A");

const kapalArray = [kapal1, kapalPesiar, kapalTanker, kapalRiset, kapalKapalang];

kapalArray.forEach(kapal => {
    console.log(kapal.infoKapal());
    console.log(kapal.periksaKeberangkatan());
});
