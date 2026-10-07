import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import PlayersSection from "./components/sections/PlayersSection";
import players from "./data/players";

const FREE_CREDIT = 6000000;
const MAX_PLAYERS = 6;

function App() {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [activeTab, setActiveTab] = useState("available");
  const handleClaimCredit = () => {
    setCoins((c) => c + FREE_CREDIT);
    toast.success(`${FREE_CREDIT.toLocaleString()} coins added to your account!`);
  };

  const handleChoose = (player) => {
    if (selectedPlayers.length >= MAX_PLAYERS) return toast.warning(`You can select up to ${MAX_PLAYERS} players.`);
    if (coins < player.price) return toast.error("Not enough coins. Claim some free credit first!");

    setCoins((c) => c - player.price);
    setSelectedPlayers((list) => [...list, player]);
    toast.success(`${player.name} added to your squad.`);
  };

  const handleRemove = (player) => {
    setCoins((c) => c + player.price);
    setSelectedPlayers((list) => list.filter((p) => p.id !== player.id));
    toast.info(`${player.name} removed from your squad.`);
  };

  return (
    <>
      <Navbar coins={coins} />
      <main>
        <Hero onClaimCredit={handleClaimCredit} />
        <PlayersSection
          players={players}
          selectedPlayers={selectedPlayers}
          maxPlayers={MAX_PLAYERS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onChoose={handleChoose}
          onRemove={handleRemove}
        />
      </main>
      <Footer onSubscribe={(email) => toast.success(`Subscribed with ${email}`)} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
