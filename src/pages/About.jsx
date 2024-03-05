import React from "react";
import { useEffect } from "react";
import logo from "../assets/logo/Logo-04.png";

function About() {
  useEffect(() => {
    document.title = "Holdhand | O nas";
  }, []);

  return (
    <div className="pt-16 container flex flex-col mx-auto">
      <div className="flex flex-row justify-between pt-24">
        <div className="text-6xl bold w-1/2">
          <span className="flex">Witaj w HoldHand</span>
          <span className="text-4xl">
            Twoim przewodniku po świecie międzynarodowych możliwości
            zatrudnienia.
          </span>
        </div>
        <img src={logo} alt="" className="h-48 flex m-auto" />
      </div>
      <div className="flex">
        <div className="w-1/2 flex mr-auto pt-8 flex-col">
          <span className="pb-4">
            Zlokalizowana w śródmieściu Lublina, agencja zatrudnienia, została
            założona przez dwoje przyjaciół, Bogusława Władykę i Damiana
            Siembidę, HoldHand, jest wyrazem pasji do odkrywania nowych
            horyzontów. Naszym celem jest łączenie ludzi i kultur, z
            wykorzystaniem technologii jako kluczowego narzędzia w tym procesie.
          </span>
          <span className="pb-4">
            W Naszej firmie stawiamy na współpracę ponad konkurencją, wierząc,
            że rynek oferuje wystarczająco dużo możliwości dla wszystkich.
            Dzielenie się wiedzą i zasobami nie tylko prowadzi do wzajemnych
            korzyści, ale także buduje silne, oparte na zaufaniu relacje
            międzyludzkie, które są dla nas fundamentem.
          </span>
          <span>
            Promujemy kulturę otwartości, zachęcając każdego do dzielenia się
            swoimi pomysłami. Nasze dążenie do zrozumienia i adaptacji innowacji
            pozwala nam nie tylko tworzyć nowe możliwości zatrudnienia, ale
            także wzmacniać więzi międzyludzkie i budować solidne fundamenty dla
            przyszłych sukcesów.
          </span>
        </div>
        <div className="flex m-auto">Flagi? Obrazek?</div>
      </div>
    </div>
  );
}

export default About;
