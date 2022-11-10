
function moeda(atual) {
  return atual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function total() {
  let c = document.getElementById("valor").value;
  let j = document.getElementById("juros").value;
  let t = document.getElementById("meses").value;
  let r = moeda;


  if (!Number(c)) {

    alert("O capital deve ser um numero.");
    document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
    return;
  }

  if (!Number(j)) {
    alert("O juros deve ser um numero.");
    document.getElementById("juros").value = "";
    document.getElementById("juros").focus();
    return;
  }

  if (!Number(t)) {
    alert("O meses deve ser um numero.");
    document.getElementById("meses").value = "";
    document.getElementById("meses").focus();
    return;
  }
  let mes = "";

  for (let i = 1; i <= t; i++) {
    r = c * (1 + (j / 100));
    mes += "Mês " + i + " valor: " + moeda(r) + "<br>";
    //document.write("Mês " + i + " valor: " + moeda(r) + "<br>");
    c = r;
  }
  document.getElementById("mes").innerHTML=mes;
  
  document.getElementById("total").innerHTML="Total: "+moeda(r);
  //document.write("Resultado: " + moeda(r));
}

function limpar(){
  document.getElementById("mes").innerHTML = "";
  document.getElementById("total").innerHTML = "0,00";
  document.getElementById("valor").value = "";
  document.getElementById("juros").value = "";
  document.getElementById("meses").value = ""; 
}
