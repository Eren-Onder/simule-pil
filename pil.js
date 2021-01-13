let sayac = 0;
let arttır = () => {
  sayac = sayac + 33;
  document.querySelector("#deger").innerhtml = sayac;
  if (sayac > 99) {
    sayac = 99;
    document.querySelector("#deger").innerhtml = 100;
  }
  if (sayac <= 33) {
    document.querySelector("#g3").style.backgroundColor = "red";
  } else if (sayac <= 66) {
    document.querySelector("#g3").style.backgroundColor = "yellow";
    document.querySelector("#g2").style.backgroundColor = "yellow";
  } else {
    document.querySelector("#g3").style.backgroundColor = "green";
    document.querySelector("#g2").style.backgroundColor = "green";
    document.querySelector("#g1").style.backgroundColor = "green";
  }
};

let azalt = () => {
  sayac = sayac - 33;
  document.querySelector("#deger").innerhtml = sayac;
  if (sayac < 00) {
    sayac = 0;
  }
  document.querySelector("#deger").innerhtml = sayac;
  if (sayac <= 33) {
    document.querySelector("#g3").style.backgroundColor = "red";
    document.querySelector("#g2").style.backgroundColor = "white";
    document.querySelector("#g1").style.backgroundColor = "white";
  } else if (sayac <= 66) {
    document.querySelector("#g3").style.backgroundColor = "yellow";
    document.querySelector("#g2").style.backgroundColor = "yellow";
    document.querySelector("#g1").style.backgroundColor = "white";
  } else {
    document.querySelector("#g3").style.backgroundColor = "green";
    document.querySelector("#g2").style.backgroundColor = "green";
    document.querySelector("#g1").style.backgroundColor = "green";
  }
};
console.log(sayac);
