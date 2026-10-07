import Container from "../ui/Container";
import PlayerCard from "../ui/PlayerCard";
import SelectedPlayerRow from "../ui/SelectedPlayerRow";

function PlayersSection({ players, selectedPlayers, maxPlayers, activeTab, onTabChange, onChoose, onRemove }) {
  const showingSelected = activeTab === "selected";
  const selectedIds = new Set(selectedPlayers.map((p) => p.id));

  const tabs = [
    { id: "available", label: "Available" },
    { id: "selected", label: `Selected (${selectedPlayers.length})` },
  ];

  return (
    <section className="mt-12 lg:mt-20">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold md:text-[28px]">
            {showingSelected ? `Selected Player (${selectedPlayers.length}/${maxPlayers})` : "Available Players"}
          </h2>

          <div className="join" role="tablist">
            {tabs.map((tab) => {
              const active = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onTabChange(tab.id)}
                  className={`join-item -ml-px cursor-pointer border border-ink/10 py-3.5 first:ml-0 first:rounded-l-xl last:rounded-r-xl ${
                    active ? "bg-lime px-7.5 font-bold text-ink" : "bg-white px-5 text-ink/60 hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {showingSelected ? (
          <div className="flex flex-col gap-6">
            {selectedPlayers.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-ink/15 py-16 text-center text-ink/60">
                No players selected yet. Choose players from the Available tab.
              </p>
            ) : (
              selectedPlayers.map((player) => (
                <SelectedPlayerRow key={player.id} player={player} onRemove={onRemove} />
              ))
            )}

            <div className="mt-3 self-start rounded-2xl border border-ink bg-white/5 p-2">
              <button
                type="button"
                onClick={() => onTabChange("available")}
                className="cursor-pointer rounded-xl bg-lime px-5 py-3.5 font-bold transition hover:brightness-95 active:scale-[0.98]"
              >
                Add More Player
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {players.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                actionLabel={selectedIds.has(player.id) ? "Selected" : "Choose Player"}
                disabled={selectedIds.has(player.id)}
                onAction={onChoose}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default PlayersSection;
