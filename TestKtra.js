function search() {
    const keyword = document.querySelector("header input").value.toLowerCase();
    const items = document.querySelectorAll(".item");
  
    items.forEach(item => {
      const text = item.querySelector(".data-keywords").innerText.toLowerCase();
      if (text.includes(keyword)) {
        item.style.display = "flex"; // Hiển thị lại
      } else {
        item.style.display = "none"; // Ẩn nếu không khớp
      }
    });
  }
  document.querySelector("header input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      search();
    }
  });
  