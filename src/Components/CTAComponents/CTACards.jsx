import Deck from "./PolaroidDeck/Deck";
import card1 from "../../assets/images/cta/CTA.png";


const fotos = [
  {
    url: card1,
    date: "Colección 2025",
    caption: "Tocado Aurora",
  }
];



export default function Galeria() {
  return <Deck cards={fotos} style={{ width: "100%", height: "100%" }} />;
}