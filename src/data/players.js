import viralKohli from "../assets/images/player-viral-kohli.png";

const defaults = {
  country: "India",
  role: "All-Rounder",
  battingStyle: "Left-Hand-Bat",
  bowlingStyle: "Left-Hand-Bat",
  price: 1500000,
};

// Content mirrors the Figma design; players without an image render a placeholder.
const players = [
  { id: 1, name: "Viral Kohli", image: viralKohli, ...defaults },
  ...Array.from({ length: 11 }, (_, i) => ({
    id: i + 2,
    name: "Darrell Steward",
    image: null,
    ...defaults,
  })),
];

export default players;
