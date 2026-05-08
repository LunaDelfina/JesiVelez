import { Deck } from "@ikefakis/react-polaroid-photo-deck";
import "@ikefakis/react-polaroid-photo-deck/style.css";
import card1 from "../../assets/images/cards/card1.png";
import card2 from "../../assets/images/cards/card2.png";
import card3 from "../../assets/images/cards/card3.png";

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
  return <Deck cards={fotos} style={{ width: "40vw", height: "100%" }} />;
}