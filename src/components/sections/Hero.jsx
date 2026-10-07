import bannerMain from "../../assets/images/banner-main.png";
import Container from "../ui/Container";
import Button from "../ui/Button";
import BlurShadow from "../ui/BlurShadow";

function Hero({ onClaimCredit }) {
  return (
    <section className="mt-6">
      <Container>
        <div className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-ink/10 bg-ink px-4 py-16">
          <BlurShadow crop="left" className="top-71.25 -left-74.25 h-115.25 w-165.25 blur-[125px]" />
          <BlurShadow crop="right" className="-top-56.75 -right-93.75 h-128 w-180.25 blur-[150px]" />

          <div className="relative flex flex-col items-center gap-6 text-center">
            <img src={bannerMain} alt="BPL Dream 11 cricket" className="h-50 w-62 object-cover" />

            <div className="flex flex-col items-center gap-4">
              <h1 className="max-w-242.5 text-3xl leading-tight font-bold text-white md:text-[40px] md:leading-15">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="font-inter text-lg font-medium text-white/70 md:text-2xl">
                Beyond Boundaries Beyond Limits
              </p>
            </div>

            <div className="rounded-2xl border border-lime bg-white/5 p-2">
              <Button variant="lime" onClick={onClaimCredit} className="rounded-xl px-5 py-3.5">
                Claim Free Credit
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
