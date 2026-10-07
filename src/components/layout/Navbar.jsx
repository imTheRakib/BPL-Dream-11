import logo from "../../assets/icons/logo.svg";
import Container from "../ui/Container";
import CoinIcon from "../ui/CoinIcon";

const navLinks = ["Home", "Fixture", "Teams", "Schedules"];

function Navbar({ coins = 0 }) {
  return (
    <header className="pt-6 lg:pt-12.5">
      <Container className="flex items-center justify-between gap-4">
        <a href="#" aria-label="BPL Dream 11 home" className="shrink-0">
          <img src={logo} alt="BPL Dream 11" width="73.1588" height="72" />
        </a>

        <nav className="flex items-center gap-4 lg:gap-12">
          <ul className="hidden items-center gap-12 text-ink/70 lg:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition hover:text-ink">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5 rounded-xl border border-ink/10 bg-white px-5 py-4 font-semibold whitespace-nowrap">
            <span>{coins.toLocaleString()} Coin</span>
            <CoinIcon />
          </div>

          {/* Mobile menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <button type="button" tabIndex={0} aria-label="Open menu" className="btn btn-ghost btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu dropdown-content z-20 mt-3 w-48 rounded-box bg-white p-2 shadow">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
