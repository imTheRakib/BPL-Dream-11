import coinBottom from "../../assets/icons/coin-bottom.svg";
import coinShade from "../../assets/icons/coin-shade.svg";
import coinTop from "../../assets/icons/coin-top.svg";
import coinIcon from "../../assets/icons/coin-icon.svg";

// The coin is composed of four layered SVGs, positioned exactly as in the design.
const layers = [
  { src: coinBottom, inset: "inset-[0_2.15%]" },
  { src: coinShade, inset: "inset-[0_2.64%_6.76%_2.64%]" },
  { src: coinTop, inset: "inset-[10.74%_12.89%_15.04%_12.89%]" },
  { src: coinIcon, inset: "inset-[14.65%_19.04%_22.13%_16.8%]" },
];

function CoinIcon({ className = "" }) {
  return (
    <span className={`relative inline-block size-5 shrink-0 overflow-hidden ${className}`} aria-hidden>
      {layers.map(({ src, inset }) => (
        <img key={src} src={src} alt="" className={`absolute block size-full max-w-none ${inset}`} />
      ))}
    </span>
  );
}

export default CoinIcon;
