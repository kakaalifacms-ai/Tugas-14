function hitung() {
  // menampung nilai harga
  let Harga =Number(document.getElementById("Harga").value) 
  
  // menumpang nilai jumlah
 let jumlah = Number(document.getElementById("jumlah").value)
  
  // menumpang nilai diskon
  let diskon =Number(document.getElementById("diskon").value)
  
  // langkah 1: hitung subtotal
  let subtotal = Harga*jumlah 
  
  // Langkah 2:menghitung diskon
  let potongan = subtotal*(diskon / 100)
  // Langkah 3:menghitung pajak, misal 11%
  let pajak = subtotal*(diskon / 100)
  
  // Langkah 4:Hitung total
  let total = subtotal-potongan+pajak
  
  // Langkah 5: menampilkan hasil
  document.getElementById("hasil").innerHTML=
  `Subtotal:Rp ${subtotal}<br>
   diskon (${diskon}%): -Rp ${potongan}<br>
   pajak (11%) : +Rp ${pajak} <br>
   Total bayar : Rp ${total}
  `
}
