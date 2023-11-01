# Dokumentasi Tugas

## Ide

Aplikasi ini menggunakan API dari Ticketmaster untuk menampilkan beberapa event yang ada, dan dapat mencari event spesifik, dan menampilkan event berdasarkan kategori

## Fitur

Aplikasi terbagi menjadi 4 pages, yaitu:

- Landing page (index.html)
  Landing page terbagi menjadi 4 bagian yaitu:
  - Top bar: Berisi logo dan sistem login dari aplikasi
  - Search bar: Berisi salam serta kolom pencarian yang dapat diisi lalu tekan "Enter" untuk melakukan pencarian spesifik, atau pengguna dapat memilih salah satu dari 4 Kategori event yang ada
  - Suggested: Merupakan bagian rekomendasi event, data didapatkan dari API Ticketmaster
  - Attractions: Merupakan bagian atraksi atau hal menarik yang dapat dikunjungi, data didapatkan dari API Ticketmaster

- Searched page (search.html)
  searched page terdiri dari 2 bagian yaitu:
  - Top bar: Berisi logo, navigasi website, serta sistem login dari aplikasi, dan juga search bar
  - Event List: Berisi list event yang sesuai dengan hasil pencarian, data didapatkan dari API Ticketmaster

- Categorical page (type.html)
  Categorical page terdiri dari 2 bagian yaitu:
  - Top bar: Berisi logo, navigasi website, serta sistem login dari aplikasi, dan juga search bar, top bar bersifat sticky
  - Event List: Berisi list event yang sesuai dengan hasil pencarian, data didapatkan dari API Ticketmaster

- Event Page (event.html)
  Event Page menampilkan event secara spesifik beserta detail nya, page ini terdiri dari beberapa bagian seperti:
  - Top bar: Berisi logo, navigasi website, serta sistem login dari aplikasi, dan juga search bar, top bar bersifat sticky
  - Event Image : Merupakan gambar dari event
  - Event Info : Menampung informasi dari event
  - Event Description : Menampung deskripsi dan syarat dan ketentuan event
  - Buy Button : Menampung tombol untuk membeli (belum berfungsi)
  - Suggested : Merupakan bagian rekomendasi event, data didapatkan dari API Ticketmaster

## Pengembangan

Aplikasi dikembangkan dengan memisahkan beberapa pages agar tampilan page lebih spesifik dan lebih mudah dilihat, Aplikasi sendiri menggunakan [Ticketmaster Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) untuk mendapatkan data seperti nama event, tanggal, foto, dan semacamnya, hal tersebut dilakukan melalui masing masing script yang akan mengolah data tersebut untuk dirender ke Website

## Penggunaan

Aplikasi dapat digunakan dengan mengakses [Aplikasi](https://randytunru.github.io/ticketing-app-ticketmasterAPI/index.html), sederhana nya aplikasi dapat digunakan untuk melihat Event apa saja yang ada, dan dapat dicari secara spesifik melalui search bar yang tersedia atau dengan memilih salah satu kategori yang ada
