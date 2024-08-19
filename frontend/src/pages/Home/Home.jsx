import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardDescription, setNewCardDescription] = useState("");
  const [createError, setCreateError] = useState("");

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

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateCard = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_HOST}/cards`,
        {
          title: newCardTitle,
          description: newCardDescription,
        }
      );

      if (response.status === 201) {
        setCards((prevCards) => [...prevCards, response.data.card]);
        setNewCardTitle("");
        setNewCardDescription("");
      }
    } catch (err) {
      setCreateError(err.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-80 bg-violet-100 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-semibold">How can we help?</h1>
        <input
          className="px-4 py-4 rounded-md w-[37rem] mt-8"
          type="text"
          placeholder="Search Cards"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div
        className={`flex justify-around flex-wrap pt-10 ${
          filteredCards.length > 0 ? "pb-20" : "pb-10"
        }`}
      >
        <h1 className="text-center w-full font-bold text-3xl mb-5">Cards</h1>
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <Card
              title={card.title}
              description={card.description}
              key={card._id}
            />
          ))
        ) : (
          <h1 className="text-2xl font-semibold">No Cards To Display :(</h1>
        )}
      </div>

      <div className="flex justify-center py-10 bg-violet-100">
        <form
          className="bg-white p-6 rounded-md shadow-md w-[37rem]"
          onSubmit={handleCreateCard}
        >
          <h2 className="text-3xl font-semibold mb-4">Create a New Card</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Card Title</label>
            <input
              className="px-4 py-2 rounded-md w-full border border-gray-300"
              type="text"
              value={newCardTitle}
              onChange={(e) => {
                setNewCardTitle(e.target.value);
                setCreateError("");
              }}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Card Description</label>
            <textarea
              className="px-4 py-2 rounded-md w-full border border-gray-300"
              value={newCardDescription}
              onChange={(e) => setNewCardDescription(e.target.value)}
              required
            ></textarea>
          </div>
          {createError.length > 0 ? (
            <h1 className="text-red-400 mb-5">{createError}</h1>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create Card
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
