import bgShadow from "../../assets/images/bg-shadow.png";

// Decorative blurred colour glow. Two crops of the same image are used in the design.
const crops = {
  left: "h-[345.34%] w-[361.66%] left-[-126.94%] top-[-52.33%]",
  right: "h-[229.83%] w-[275.1%] left-[-175.1%] top-[-18.79%]",
};

/**
 * `className` positions/sizes the glow box. When `rotate` is set (e.g. "-rotate-90"),
 * `className` positions the rotated bounding box and `innerClassName` sizes the unrotated glow.
 */
function BlurShadow({ crop = "left", className = "", rotate, innerClassName = "" }) {
  const glow = (
    <div className="absolute inset-0 overflow-hidden">
      <img src={bgShadow} alt="" className={`absolute max-w-none ${crops[crop]}`} />
    </div>
  );

  if (rotate) {
    return (
      <div className={`pointer-events-none absolute flex items-center justify-center ${className}`} aria-hidden>
        <div className={`flex-none ${rotate}`}>
          <div className={`relative ${innerClassName}`}>{glow}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden>
      {glow}
    </div>
  );
}

export default BlurShadow;
