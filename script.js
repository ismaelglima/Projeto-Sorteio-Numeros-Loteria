// MEGA SENA (6 NÚMEROS NÃO REPETIDOS)

var num = Number(prompt("Digite quantos números tem o sorteio"));

var ns1;
var ns2;
var ns3;
var ns4;
var ns5;
var ns6;

function sortear1() {
  ns1 = Math.floor(Math.random() * num + 1);
  document.getElementById("a").innerHTML = ns1;
  interval = setTimeout(sortear2, 1000);
}

function sortear2() {
  ns2 = Math.floor(Math.random() * num + 1);
  if (ns2 == ns1) {
    interval = setTimeout(sortear2, 1)
  }else {
    document.getElementById("b").innerHTML = ns2;
    interval = setTimeout(sortear3, 1000);
  }
  
}

function sortear3() {
  ns3 = Math.floor(Math.random() * num + 1);
  if (ns3 == ns1 || ns3 == ns2) {
    interval = setTimeout(sortear3, 1)
  }else {
    document.getElementById("c").innerHTML = ns3;
    interval = setTimeout(sortear4, 1000);
  }
}  

function sortear4() {
  ns4 = Math.floor(Math.random() * num + 1);
  if (ns4 == ns1 || ns4 == ns2 || ns4 == ns3) {
    interval = setTimeout(sortear4, 1)
  }else {
    document.getElementById("d").innerHTML = ns4;
    interval = setTimeout(sortear5, 1000);
  }
}  

function sortear5() {
  ns5 = Math.floor(Math.random() * num + 1);
  if (ns5 == ns1 || ns5 == ns2 || ns5 == ns3 || ns5 == ns4) {
    interval = setTimeout(sortear5, 1)
  }else {
    document.getElementById("e").innerHTML = ns5;
    interval = setTimeout(sortear6, 1000);
  }
}  

function sortear6() {
  ns6 = Math.floor(Math.random() * num + 1);
  if (ns6 == ns1 || ns6 == ns2 || ns6 == ns3 || ns6 == ns4 || ns6 == ns5) {
    interval = setTimeout(sortear6, 1)
  }else {
    document.getElementById("f").innerHTML = ns6;
  }
}  

function limpar() {
  let a = document.getElementById("a");
  a.innerText = "";

  let b = document.getElementById("b");
  b.innerText = "";

  let c = document.getElementById("c");
  c.innerText = "";

  let d = document.getElementById("d");
  d.innerText = "";

  let e = document.getElementById("e");
  e.innerText = "";

  let f = document.getElementById("f");
  f.innerText = "";
}



// Mudar display 'none' para 'inline-block'
/*
var none1 = document.getElementById("a");
var none2 = document.getElementById("b");
var none3 = document.getElementById("c");
var none4 = document.getElementById("d");
var none5 = document.getElementById("e");
var none6 = document.getElementById("f");

none1.addEventListener("click", function(event) {
none1.style.display = 'inline-block';
  none2.style.backgroundColor  = 'transparent';
  none3.style.backgroundColor  = 'transparent';
})
*/
/*
function resetar() {
  document.getElementById('a').remove('value');
  document.getElementById('b').remove('value');
  document.getElementById('c').remove('value');
  document.getElementById('d').remove('value');
  document.getElementById('e').remove('value');
  document.getElementById('f').remove('value');
}


/*
  h2.innerHTML += " " + ns;
  if (ns <= 6) {
    ns++;
  }
  else {
    clearInterval(interval);
  }
*/

/*
  function atualizarTexto() {
  let h = document.getElementsByTagName("h2");
  h.innerHTML += " " + numero;

}
*/

/*
function iniciar() {
  interval = setInterval(atualizarTexto, 500);
}
/*
/*
function sortear() {
let ns = Math.floor(Math.random() * num + 1);
document.getElementById("d").innerHTML = ns;
}
*/ 