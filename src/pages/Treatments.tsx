import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Treatments = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">ED Treatments</h1>
            <p className="text-xl text-muted-foreground">Browse our FDA-approved medications</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Treatments;