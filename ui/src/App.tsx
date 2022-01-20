import React from "react";
import { DadosBasicosGroup } from "./components/dados-basicos/dados-basicos";

const App: React.FC = () => {
  return (
    <main className="container flex flex-col md:flex-row">
      <section className="w-full md:w-2/3">
        <DadosBasicosGroup />
      </section>
      <section className="w-full md:w-1/3">HELLO</section>
    </main>
  );
};

export default App;
