import BlurShadow from "../ui/BlurShadow";
import EmailForm from "../ui/EmailForm";

function Newsletter({ onSubscribe }) {
  return (
    <div className="mx-auto w-full max-w-335 px-4 xl:px-0">
      <div className="rounded-3xl border-2 border-white bg-white/15 p-3 md:p-6">
        <div className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-ink/10 bg-white px-4 py-16 md:py-22">
          <BlurShadow
            crop="left"
            rotate="-rotate-90"
            className="top-38 -left-15.75 h-211.25 w-115.25"
            innerClassName="h-[461px] w-[845px] blur-[100px]"
          />
          <BlurShadow
            crop="right"
            rotate="rotate-90"
            className="-top-71.5 -right-61.75 h-149 w-105.75"
            innerClassName="h-[423px] w-[596px] blur-[100px]"
          />

          <div className="relative flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col items-center gap-4">
              <h2 className="max-w-204.75 text-2xl font-bold md:text-[32px]">Subscribe to our Newsletter</h2>
              <p className="font-inter text-base font-medium text-ink/70 md:text-xl">
                Get the latest updates and news right in your inbox!
              </p>
            </div>
            <EmailForm onSubscribe={onSubscribe} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
