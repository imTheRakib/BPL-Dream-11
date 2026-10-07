import btnGradient from "../../assets/images/btn-gradient.png";

const variants = {
  // Solid lime button used in the hero CTA
  lime: "bg-lime",
  // Gradient image fill used by the subscribe buttons
  gradient: "bg-[length:203%_524%] bg-center bg-no-repeat",
};

function Button({ variant = "lime", className = "", style, children, ...props }) {
  const gradientStyle = variant === "gradient" ? { backgroundImage: `url(${btnGradient})` } : undefined;

  return (
    <button
      type="button"
      className={`inline-flex cursor-pointer items-center justify-center whitespace-nowrap font-sora text-base font-bold text-ink shadow-inset-soft transition hover:brightness-95 active:scale-[0.98] ${variants[variant]} ${className}`}
      style={{ ...gradientStyle, ...style }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
