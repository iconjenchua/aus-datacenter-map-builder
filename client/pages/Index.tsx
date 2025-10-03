import DataTable from "@/components/DataTable";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AdBanner from "@/components/AdBanner";
import ColocationCarousel from "@/components/ColocationCarousel";
import ContactForm from "@/components/ContactForm";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <Hero />
      <DataTable />
      <AdBanner />
      <ColocationCarousel />
      <ContactForm />
    </div>
  );
}
