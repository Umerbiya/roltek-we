import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* ── Main Two Column Section ── */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left Column: Info Cards */}
            <div className="lg:col-span-4 lg:col-start-1 h-full">
              <ContactInfo />
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section className="bg-muted border-t border-border/50">
        <div className="w-full h-[400px] md:h-[500px]">
          {/* We use an iframe mapped to Addis Ababa (Gotera area approximation) */}
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26416.19448877704!2d38.755829753503434!3d8.983418525177354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858a5a0b99cd%3A0x130571f1027e121f!2sR%C3%B6ltek%20Trading%20PLC!5e1!3m2!1sen!2set!4v1777803627203!5m2!1sen!2set"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RÖLTEK TRADING PLC Location"
          ></iframe>
        </div>
      </section>
    </>
  );
}
