import userIcon from "../../assets/icons/user.svg";
import flagIcon from "../../assets/icons/flag.svg";
import divider from "../../assets/icons/divider.svg";

function PlayerCard({ player, actionLabel = "Choose Player", onAction, disabled = false }) {
  const { name, country, role, image, battingStyle, bowlingStyle, price } = player;

  return (
    <article className="flex flex-col gap-6 rounded-2xl border border-ink/10 p-6">
      <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-placeholder">
        {image && <img src={image} alt={name} className="size-full object-cover" />}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img src={userIcon} alt="" width="25.0634" height="28" className="shrink-0" />
            <h3 className="text-xl font-semibold">{name}</h3>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 opacity-50">
              <img src={flagIcon} alt="" width="17.5781" height="20" className="shrink-0" />
              <span>{country}</span>
            </div>
            <span className="rounded-lg bg-ink/5 px-4 py-2.25 text-sm">{role}</span>
          </div>
        </div>

        <img src={divider} alt="" width="376" height="1" className="block h-px w-full" />

        <div className="flex flex-col gap-4">
          <p className="font-bold">Rating</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold">{battingStyle}</span>
              <span className="text-ink/70">{bowlingStyle}</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold">Price: ${price}</span>
              <button
                type="button"
                onClick={() => onAction?.(player)}
                disabled={disabled}
                className="cursor-pointer rounded-lg border border-ink/10 px-4 py-2.25 text-sm transition hover:bg-lime disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
              >
                {actionLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PlayerCard;
