import Deck from "./PolaroidDeck/Deck";
import card1 from "../../assets/images/cta/CTA.jpg";


const fotos = [
  {
    url: card1
  }
];



export default function Galeria() {
  return <Deck cards={fotos} style={{ width: "100%", height: "100%" }} />;
}