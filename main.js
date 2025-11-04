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
  // Langkah 3:menghitung pajak
  // Langkah 4:Hitung total
  
  // Langkah 5: menampilkan hasil
  document.getElementById("hasil").innerHTML=`Subtotal:Rp ${subtotal}<br>`
  
}
