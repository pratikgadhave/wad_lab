document.getElementById("btn").onclick = function() {loadDoc()};
const parent=document.getElementById("demo");
function loadDoc() {
  
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      
     
      var arr=new Array(JSON.parse(this.responseText));
      arr[0].forEach(myfun)
     
      
    }
    xhttp.open("GET", "ajax.json");
    xhttp.send();
  }
  function myfun(item){
 
        const para = document.createElement("p");
        parent.appendChild(para);
        para.innerHTML=item;
  }


  //post method
  document.getElementById("btn2").onclick = function() {loadDoc2()};
  function loadDoc2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo2").innerHTML = this.responseText;
      }
    };
    xhttp.open("POST", "dom.php");
    xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhttp.send("name=PRATIK & message=HEY THERE");
  }