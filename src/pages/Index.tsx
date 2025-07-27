import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
          <p className="text-xl text-muted-foreground">Your footer is ready below!</p>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
