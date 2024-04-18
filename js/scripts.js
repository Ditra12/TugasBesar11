// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// Data Daerah
const daerahLabels1 = ['Kep. Seribu', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Pusat', 'Jakarta Barat', 'Jakarta Utara'];

// BAR CHART - Jumlah Guru
const barChartGuru1Options = {
  series: [{
    name: 'Jumlah Guru',
    data: [36, 2900, 3522, 1286, 2297, 1773],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartGuru1 = new ApexCharts(document.querySelector('#bar-chart-guru1'), barChartGuru1Options);
barChartGuru1.render();

// BAR CHART - Jumlah Siswa
const barChartSiswa1Options = {
  series: [{
    name: 'Jumlah Siswa',
    data: [509, 46312, 60565, 20640, 34666, 27195],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartSiswa1 = new ApexCharts(document.querySelector('#bar-chart-siswa1'), barChartSiswa1Options);
barChartSiswa1.render();

// BAR CHART - Jumlah Sekolah
const barChartSekolah1Options = {
  series: [{
    name: 'Jumlah Sekolah',
    data: [1, 104, 122, 56, 118, 91,],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartSekolah1 = new ApexCharts(document.querySelector('#bar-chart-sekolah1'), barChartSekolah1Options);
barChartSekolah1.render();



// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Jumlah Siswa',
      data: [509, 46312, 60565, 20640, 34666, 27195],
    },
    {
      name: 'Jumlah Sekolah',
        data: [1, 104, 122, 56, 118, 91],
    },
    {
      name: 'Jumlah Guru',
      data: [36, 2900, 3522, 1286, 2297, 1732],
    },
  ],
  chart: {
    height: 550,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#f5b74f','#367952','#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Kep. Seribu', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Pusat', 'Jakarta Barat', 'Jakarta Utara'],
  markers: {
    size: 2,
  },
  yaxis: [
    {
      title: {
        text: 'Jumlah Siswa',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Jumlah Guru',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

// Data Daerah
const daerahLabels = ['Kep. Seribu', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Pusat', 'Jakarta Barat', 'Jakarta Utara'];

// PIE CHART - Jumlah Guru
const pieChartGuruOptions = {
  series:  [36, 2900, 3522, 1286, 2297, 1773],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Guru'
  }
};

const pieChartGuru = new ApexCharts(
  document.querySelector('#pie-chart-guru'),
  pieChartGuruOptions
);
pieChartGuru.render();

// PIE CHART - Jumlah Siswa
const pieChartSiswaOptions = {
  series: [509, 46312, 60565, 20640, 34666, 27195],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Siswa'
  }
};

const pieChartSiswa = new ApexCharts(
  document.querySelector('#pie-chart-Siswa'),
  pieChartSiswaOptions
);
pieChartSiswa.render();


// PIE CHART - Jumlah Sekolah
const pieChartSekolahOptions = {
  series: [1, 104, 122, 56, 118, 91],
  chart: {
    width: 300,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342'],
  title: {
    text: 'Jumlah Sekolah'
  }
};

const pieChartSekolah = new ApexCharts(
  document.querySelector('#pie-chart-sekolah'),
  pieChartSekolahOptions
);
pieChartSekolah.render();


// Inisialisasi peta dengan koordinat pusat DKI Jakarta
const map = L.map('map').setView([-6.2088, 106.8456], 11);

// Menampilkan peta dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Menambahkan marker untuk setiap titik SMA
for (const sma of smaLocations) {
  L.marker(sma.latlng).addTo(map).bindPopup(`<b>${sma.name}</b><br>${sma.type}`);
}

const smaLocations = [
  { name: 'SMA Negeri 1 Jakarta', type: 'Negeri', latlng: [-6.183191, 106.833972] },
  { name: 'SMA Negeri 2 Jakarta', type: 'Negeri', latlng: [-6.215864, 106.836785] },
  { name: 'SMA Negeri 3 Jakarta', type: 'Negeri', latlng: [-6.211049, 106.836547] },
  { name: 'SMA Negeri 4 Jakarta', type: 'Negeri', latlng: [-6.256226, 106.800099] },
  { name: 'SMA Negeri 5 Jakarta', type: 'Negeri', latlng: [-6.190329, 106.839460] },
  { name: 'SMA Negeri 6 Jakarta', type: 'Negeri', latlng: [-6.255499, 106.800084] },
  { name: 'SMA Negeri 7 Jakarta', type: 'Negeri', latlng: [-6.160232, 106.797375] },
  { name: 'SMA Negeri 8 Jakarta', type: 'Negeri', latlng: [-6.159145, 106.780598] },
  { name: 'SMA Negeri 9 Jakarta', type: 'Negeri', latlng: [-6.164154, 106.815706] },
  { name: 'SMA Negeri 10 Jakarta', type: 'Negeri', latlng: [-6.208252, 106.838083] },
  { name: 'SMA Negeri 11 Jakarta', type: 'Negeri', latlng: [-6.157448, 106.830450] },
  { name: 'SMA Negeri 12 Jakarta', type: 'Negeri', latlng: [-6.197011, 106.835450] },
  { name: 'SMA Negeri 13 Jakarta', type: 'Negeri', latlng: [-6.162672, 106.855267] },
  { name: 'SMA Negeri 14 Jakarta', type: 'Negeri', latlng: [-6.266552, 106.813393] },
  { name: 'SMA Negeri 15 Jakarta', type: 'Negeri', latlng: [-6.245829, 106.828304] },
  { name: 'SMA Negeri 16 Jakarta', type: 'Negeri', latlng: [-6.160492, 106.858006] },
  { name: 'SMA Negeri 17 Jakarta', type: 'Negeri', latlng: [-6.144137, 106.842197] },
  { name: 'SMA Negeri 18 Jakarta', type: 'Negeri', latlng: [-6.191886, 106.882648] },
  { name: 'SMA Negeri 19 Jakarta', type: 'Negeri', latlng: [-6.214732, 106.869204] },
  { name: 'SMA Negeri 20 Jakarta', type: 'Negeri', latlng: [-6.163894, 106.826108] },
  { name: 'SMA Labschool Kebayoran', type: 'Negeri', latlng: [-6.225372, 106.798960] },
  { name: 'SMA Labschool Rawamangun', type: 'Negeri', latlng: [-6.196751, 106.885992] },
  { name: 'SMA Taruna Nusantara', type: 'Swasta', latlng: [-6.396222, 107.437500] },
  { name: 'SMA Al-Azhar', type: 'Swasta', latlng: [-6.217078, 106.837345] },
  // Anda bisa menambahkan SMA lainnya di sini
];



