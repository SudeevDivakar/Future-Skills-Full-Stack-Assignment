import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [cards, setCards] = useState();

  useEffect(() => {
    async function getCards() {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_HOST}/cards`
      );
      const cardsResponse = response.data.cards;
      setCards(cardsResponse);
    }
    getCards();
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-80 bg-violet-100 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-semibold">How can we help?</h1>
        <input
          className="px-4 py-4 rounded-md w-[37rem] mt-8"
          type="text"
          placeholder="Search"
        />
      </div>
      <div
        className={`flex justify-around flex-wrap pt-10 ${
          cards && (cards.length > 0 ? "pb-20" : "pb-10")
        }`}
      >
        {cards && cards.length > 0 ? (
          cards.map((card, index) => {
            return (
              <Card
                title={card.title}
                description={card.description}
                key={card._id}
              />
            );
          })
        ) : (
          <h1 className="text-2xl font-semibold">No Cards To Display :(</h1>
        )}
      </div>
      <Footer />
    </>
  );
}
