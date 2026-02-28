fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(error => console.error("Error loading footer:", error)); // ผมเพิ่มบรรทัดนี้เผื่อไว้เช็ค error ให้ด้วยครับ