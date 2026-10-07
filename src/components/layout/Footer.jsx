import logoFooter from "../../assets/icons/logo-footer.svg";
import Container from "../ui/Container";
import EmailForm from "../ui/EmailForm";
import Newsletter from "../sections/Newsletter";

const quickLinks = ["Home", "Services", "About", "Contact"];

function FooterColumn({ title, className = "", children }) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {children}
    </div>
  );
}

function Footer({ onSubscribe }) {
  return (
    // The newsletter card overlaps the top of the footer by 178px, as in the design.
    <footer className="mt-89.5 flex flex-col bg-navy">
      <div className="relative z-10 -mt-44.5">
        <Newsletter onSubscribe={onSubscribe} />
      </div>

      <div className="mt-6 flex flex-col items-center gap-18 pt-0">
        <Container className="flex flex-col items-center gap-16">
          <img src={logoFooter} alt="BPL Dream 11" width="142.253" height="140" />

          <div className="grid w-full gap-10 md:grid-cols-3 md:gap-6 lg:flex lg:items-start lg:justify-between">
            <FooterColumn title="About Us" className="lg:w-72.75">
              <p className="leading-6.5 text-white/60">
                We are a passionate team dedicated to providing the best services to our customers.
              </p>
            </FooterColumn>

            <FooterColumn title="Quick Links" className="lg:w-72.75">
              <ul className="list-disc text-white/60">
                {quickLinks.map((link) => (
                  <li key={link} className="ms-6 leading-9">
                    <a href="#" className="transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <div className="flex flex-col gap-5.25 lg:w-[384px]">
              <FooterColumn title="Subscribe" className="lg:w-72.75">
                <p className="leading-6.5 text-white/60">Subscribe to our newsletter for the latest updates.</p>
              </FooterColumn>
              <EmailForm joined onSubscribe={onSubscribe} />
            </div>
          </div>
        </Container>

        <div className="w-full border-t border-white/15 py-8 text-center leading-6.5 text-white/60">
          @2024 Your Company All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
