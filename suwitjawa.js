function pilihankomputer() {
  let komputer = Math.round(Math.random() * 9 + 1);
  if (komputer <= 3) {
    return "gajah";
  } else if (komputer > 3 && komputer <= 6) {
    return "semut";
  } else {
    return "orang";
  }
}

function rules(player, komputer) {
  if (player == komputer) return "SERI";
  if (player == "gajah") return komputer == "semut" ? "KALAH" : "MENANG";
  if (player == "semut") return komputer == "orang" ? "KALAH" : "MENANG";
  if (player == "orang") return komputer == "gajah" ? "KALAH" : "MENANG";
}

function putar() {
  let gambarkomputer = document.getElementById("gambarkomputer");
  let gambar = ["gajah.png", "orang.png", "semut.png"];
  let i = 0;
  let waktumulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktumulai > 2000) {
      clearInterval;
      return;
    }
    gambarkomputer.src = gambar[i++];
    if (i == gambar.length) i = 0;
  }, 100);
}

let pilihanplayer = document.querySelectorAll("li img");
let skorplayer = 0;
let skorkomputer = 0;

pilihanplayer.forEach(function (pilihan) {
  pilihan.addEventListener("click", function () {
    let pilihankomputerr = pilihankomputer();
    let pilihanplayer = pilihan.id;
    let hasil = rules(pilihanplayer, pilihankomputerr);

    document.getElementById("gajah").style.cursor = "not-allowed";
    document.getElementById("semut").style.cursor = "not-allowed";
    document.getElementById("orang").style.cursor = "not-allowed";

    document.getElementById("gajah").style.pointerEvents = "none";
    document.getElementById("semut").style.pointerEvents = "none";
    document.getElementById("orang").style.pointerEvents = "none";

    putar();

    setTimeout(function () {
      document.getElementById("gambarkomputer").src = pilihankomputerr + ".png";
      document.getElementById("info").innerHTML = hasil;
      if (hasil == "KALAH") {
        skorkomputer += 1;
      } else if (hasil == "MENANG") {
        skorplayer += 1;
      } else {
        skorkomputer += 0;
      }
      document.getElementById("skorplayer").innerHTML = skorplayer;
      document.getElementById("skorkomputer").innerHTML = skorkomputer;
      document.getElementById("gajah").style.cursor = "";
      document.getElementById("semut").style.cursor = "";
      document.getElementById("orang").style.cursor = "";

      document.getElementById("gajah").style.pointerEvents = "";
      document.getElementById("semut").style.pointerEvents = "";
      document.getElementById("orang").style.pointerEvents = "";
    }, 2000);
  });
});
