import React, { useState, ChangeEvent, FormEvent } from "react";
import { DadosBasicos } from "../../domain/models/dados-basicos";

const StyleDadosBasicosInput =
  " mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";

const SpanComment: React.FC = ({ children }) => {
  return (
    <span className="text-sm font-light text-slate-500 italic block">
      {children}
    </span>
  );
};

export const DadosBasicosForm: React.FC<{
  onSubmit: (dadosBasicos: DadosBasicos) => any;
}> = ({ onSubmit }) => {
  const [dadosBasicos, setDadosBasicos] = useState<DadosBasicos>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDadosBasicos(new DadosBasicos({ ...dadosBasicos, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(new DadosBasicos(dadosBasicos));
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="ataques">Ataques</label>
            <input
              type="text"
              name="qtdAtaques"
              id="ataques"
              className={StyleDadosBasicosInput}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="ataquesPerigosos">Ataques Perigosos</label>
            <input
              type="text"
              name="qtdAtaquesPerigosos"
              id="ataquesPerigosos"
              className={StyleDadosBasicosInput}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="posseDeBola">% de Posse</label>
            <input
              type="text"
              name="perDePosso"
              id="posseDeBola"
              className={StyleDadosBasicosInput}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div>
            <label htmlFor="chutesBaliza">Chutes Baliza</label>
            <SpanComment>Chutes ao Gol</SpanComment>
            <input
              type="text"
              name="qtdChutesBaliza"
              id="chutesBaliza"
              className={StyleDadosBasicosInput}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="chutesAoLado">Chutes ao Lado</label>
            <SpanComment>Chutes fora</SpanComment>
            <input
              type="text"
              name="qtdChutesFora"
              id="chutesAoLado"
              className={StyleDadosBasicosInput}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-5 py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Calcular
        </button>
      </form>
    </>
  );
};
