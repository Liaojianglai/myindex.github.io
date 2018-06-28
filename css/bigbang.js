var nav = document.getElementById("se");
var wa = document.getElementById("wa");

//用户点击按钮时，将列表隐藏或显示
nav.addEventListener('click', () => {
  if (wa.style.display === "none") {
    wa.style.display = 'block';
    
  } else {
    wa.style.display = 'none';
    
  }
});