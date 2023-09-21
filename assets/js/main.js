function calculate() {
  // Daten holen
  const aufschlagen = document.querySelector("#nettoToBrutto").checked;
  const abziehen = document.querySelector("#bruttoToNetto").checked;
  const neunzehn = document.querySelector("#neunzehn").checked;
  const sieben = document.querySelector("#sieben").checked;
  const betrag = Number(document.querySelector("#betrag").value);
  console.log(betrag);

  //   Outputfelder definieren
  const outputMwSt = document.querySelector(".outputMwSt");
  const outputBetrag = document.querySelector(".outputBetrag");

  // -wenn 19% MwSt aufgeschlagen werden soll
  if (aufschlagen === true && neunzehn === true) {
    document.querySelector(".labelForBetrag").innerHTML =
      "Nettobetrag (Preis ohne MwSt) in Euro*";
    document.querySelector(".outputH4").innerHTML = "Bruttobetrag (Endpreis)";
    outputMwSt.innerHTML = (betrag * 0.19).toFixed(2) + " €";
    outputBetrag.innerHTML = (betrag * 1.19).toFixed(2) + " €";

    // -wenn 7% MwSt aufgeschlagen werden soll
  } else if (aufschlagen === true && sieben === true) {
    document.querySelector(".labelForBetrag").innerHTML =
      "Nettobetrag (Preis ohne MwSt) in Euro*";
    document.querySelector(".outputH4").innerHTML = "Bruttobetrag (Endpreis)";
    outputMwSt.innerHTML = (betrag * 0.07).toFixed(2) + " €";
    outputBetrag.innerHTML = (betrag * 1.07).toFixed(2) + " €";

    // -wenn 19% MwSt abgezogen werden soll
  } else if (abziehen === true && neunzehn === true) {
    document.querySelector(".labelForBetrag").innerHTML =
      "Bruttobetrag (Preis inklusive MwSt) in Euro*";
    document.querySelector(".outputH4").innerHTML = "Nettobetrag";
    outputMwSt.innerHTML = ((betrag / 119) * 19).toFixed(2) + " €";
    outputBetrag.innerHTML = ((betrag / 119) * 100).toFixed(2) + " €";

    // -wenn 7% MwSt abgezogen werden soll
  } else if (abziehen === true && sieben === true) {
    document.querySelector(".labelForBetrag").innerHTML =
      "Bruttobetrag (Preis inklusive MwSt) in Euro*";
    document.querySelector(".outputH4").innerHTML = "Nettobetrag";
    outputMwSt.innerHTML = ((betrag / 107) * 7).toFixed(2) + " €";
    outputBetrag.innerHTML = ((betrag / 107) * 100).toFixed(2) + " €";
  }
}
