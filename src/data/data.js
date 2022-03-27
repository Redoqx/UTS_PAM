const Pelabuhan=[
    {
        id_pelabuhan : 'P-00',
        nama_pelabuhan : 'Bakauheni'
    },
    {
        id_pelabuhan : 'P-01',
        nama_pelabuhan : 'Merak'
    },
    {
        id_pelabuhan : 'P-10',
        nama_pelabuhan : 'Ketapang'
    },
    {
        id_pelabuhan : 'P-11',
        nama_pelabuhan : 'Gilimanuk'
    }, 
];

const Jalur=[
    {
        id_jalur: 'J-0',
        pelabuhan_I: 'P-00',
        pelabuhan_II: 'P-01',
    },
    {
        id_jalur: 'J-1',
        pelabuhan_I: 'P-10',
        pelabuhan_II: 'P-11',
    },
    
];

const Jadwal=[
    {
        id_jadwal: 'Jd-01',
        jam_jadwal: '01.00',
    },
    {
        id_jadwal: 'Jd-02',
        jam_jadwal: '03.30',
    },
    {
        id_jadwal: 'Jd-03',
        jam_jadwal: '06.00',
    },
    {
        id_jadwal: 'Jd-04',
        jam_jadwal: '08.30',
    },
    {
        id_jadwal: 'Jd-05',
        jam_jadwal: '11.00',
    },
    {
        id_jadwal: 'Jd-06',
        jam_jadwal: '13.30',
    },
    {
        id_jadwal: 'Jd-07',
        jam_jadwal: '16.00',
    },
    {
        id_jadwal: 'Jd-08',
        jam_jadwal: '18.30',
    },
    {
        id_jadwal: 'Jd-09',
        jam_jadwal: '21.00',
    },
    {
        id_jadwal: 'Jd-10',
        jam_jadwal: '23.30',
    },
];

const Kelas=[
    {
        id_kelas: 'K-0',
        nama_kelas: 'Express',
        harga: 98,
    },
    {
        id_kelas: 'K-1',
        nama_kelas: 'Reguler',
        harga: 65,
    },
];

let PesananNya=[
    {
        id_pesanan: 'Ps-00',
        jumlah_orang: 2,
        dari: 'P-00',
        ke: 'P-01',
        kelas: 'K-0',
        jadwal: 'Jd-09',
        batal: false,
    },
];


export{Jadwal,Jalur,Kelas,Pelabuhan,PesananNya};