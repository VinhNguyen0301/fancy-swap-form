import { Card } from "./components/atoms/Card/Card";
import { Hero } from "./components/organisms/HeroSection/HeroSection";
import { SwapForm } from "./components/organisms/SwapForm/SwapForm";
import { SwapPageLayout } from "./components/templates/SwapPageLayout/SwapPageLayout";

function App() {
  return (
    <SwapPageLayout>
      <Hero />
      <Card>
        <SwapForm />
      </Card>
    </SwapPageLayout>
  );
}

export default App;
