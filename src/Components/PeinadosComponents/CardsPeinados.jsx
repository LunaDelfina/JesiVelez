import Deck from "./PolaroidDeck/Deck";
import card1 from "../../assets/images/homePhotos/C6.jpg";
import card2 from "../../assets/images/homePhotos/T1.jpg";
import card3 from "../../assets/images/homePhotos/C7.jpg";

const fotos = [
  {
    url: card1,
    date: "Colección 2025",
    caption: "Tocado Aurora",
  },
  {
    url: card2,
    date: "Colección 2025",
    caption: "Pin de porcelana",
  },
  {
    url: card3,
    caption: "Velo Crystals",
  },
];



export default function Galeria() {
  return <Deck cards={fotos} style={{ width: "100%", height: "100%" }} />;
}