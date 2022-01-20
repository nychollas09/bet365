import React from "react";
import { DadosBasicos } from "../../domain/models/dados-basicos";
import { DadosBasicosForm } from "./dados-basicos-form";

export const DadosBasicosGroup: React.FC = () => {
  const handleFormSubmit = (dadosBasicos: DadosBasicos) => {
    console.log(">>>", dadosBasicos);
  };

  return (
    <section>
      <h1 className="text-lg text-center mb-5">
        Calculadora do <label className="text-green-600">Funil</label>
      </h1>
      <DadosBasicosForm onSubmit={handleFormSubmit} />
    </section>
  );
};
