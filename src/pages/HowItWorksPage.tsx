import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">How It Works</h1>
            <p className="text-xl text-muted-foreground">Simple steps to get your treatment</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;