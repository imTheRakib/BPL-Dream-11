import deleteIcon from "../../assets/icons/delete.svg";

function SelectedPlayerRow({ player, onRemove }) {
  const { name, image, battingStyle } = player;

  return (
    <article className="flex items-center gap-6 rounded-2xl border border-ink/10 p-6">
      <div className="size-20 shrink-0 overflow-hidden rounded-2xl bg-placeholder">
        {image && <img src={image} alt={name} className="size-full object-cover" />}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <h3 className="truncate text-xl font-semibold md:text-2xl">{name}</h3>
        <p className="text-ink/60">{battingStyle}</p>
      </div>

      <button
        type="button"
        onClick={() => onRemove(player)}
        aria-label={`Remove ${name}`}
        className="shrink-0 cursor-pointer rounded-lg p-1 transition hover:bg-red-50"
      >
        <img src={deleteIcon} alt="" width="24" height="24" />
      </button>
    </article>
  );
}

export default SelectedPlayerRow;
