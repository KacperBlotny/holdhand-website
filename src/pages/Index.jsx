import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import mainphoto from "../assets/holdhand-mainpage.jpg";
import worker from "../assets/worker.jpg";
import Button from "../components/shared/Button";
import ScrollButton from "../components/shared/ScrollButton";
import Footer from "../components/shared/Footer";

function Index() {
  useEffect(() => {
    document.title = "Holdhand";
  }, []);

  return (
    <div className="">
      <div className="mainPhoto"></div>
      <div className="container mx-auto flex flex-col py-24">
        <p className="p-4 text-5xl">Coś tu wymyślić</p>

        <div className="mx-auto flex justify-between p-4">
          <div className="my-auto flex w-1/2 flex-col">
            <p className="py-2">
              HoldHand, z siedzibą w Lublinie, to agencja zatrudnienia, która
              wykorzystuje nowoczesne technologie, aby oferować najwyższej
              jakości usługi dla naszych klientów.
            </p>
            <p className="py-2">
              Skupiamy się na tworzeniu wartości poprzez innowacyjne
              rozwiązania, które umożliwiają skuteczną rekrutację i budowanie
              solidnych relacji opartych na zaufaniu. Promujemy kulturę
              otwartości i ciągłego rozwoju, dążąc do tego, aby każda współpraca
              przynosiła wymierne korzyści i wzmacniała więzi międzyludzkie.
            </p>
            <p className="py-2">
              W HoldHand łączymy profesjonalizm z pasją, co pozwala nam wspierać
              rozwój zarówno pracowników, jak i partnerów biznesowych.
            </p>
            <div className="pt-4">
              <Button text="O nas" link="about-us" type="main" />
              <ScrollButton text="Kontakt" location="#contact" type="" />
              {/* <Button text="Kontakt" link="about-us" type="" /> */}
            </div>
          </div>
          <img src={worker} className="h-72 pr-16" />
        </div>
      </div>
      <div className="my-16 w-full bg-light">
        <div className="container mx-auto flex flex-col py-16">
          <div className="mx-auto flex flex-col">
            <p className="bold mx-auto flex pb-8 text-2xl">Dla pracodawców</p>
            <ul className="flex justify-evenly">
              <li className="min-w-fit">Leasing pracowniczy</li>
              <li className="min-w-fit px-16">Rekrutacja na zlecenie</li>
              <li className="min-w-fit">Praca tymczasowa</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto flex flex-col py-16">
          <div className="mx-auto flex flex-col">
            <p className="bold mx-auto flex pb-8 text-2xl">Dla Agencji pracy</p>
            <ul className="flex justify-evenly">
              <li className="min-w-fit">Pozyskiwanie pracownikówy</li>
              <li className="min-w-fit px-16">Leasing pracowniczy</li>
              <li className="min-w-fit">Rekrutacja na zlecenie</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="extender"></div>
      <div id="test"></div>
    </div>
  );
}

export default Index;
