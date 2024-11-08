import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export const Main = styled.main`
  background-image: url("https://img.freepik.com/vetores-gratis/fundo-gradiente-de-galaxia_52683-64649.jpg");
`;

export const Section = styled.section`
  background-color: rgb(122, 122, 255, 0.43);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  color: #311432;
  font-size: 50px;
  margin: 8px;
  margin-top: 30px;

  @media (max-width: 600px) {
    margin-top: 5px;
  }
`;

export const Input = styled.input`
  width: 30vw;
  border: solid #8A2BE2;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;

  &::placeholder {
    color: #8A2BE2;
    text-align: center;
    font-size: 17px;
  }

  @media (max-width: 600px) {
    width: 50vw;
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 10px 15px;
  color: purple;
  border-radius: 5px;
  margin: 15px;
  background-color: #E6E6FA;
  display: inline;

  &:hover {
    background-color: #311432;
    color: #E6E6FA;
  }
`;

export const Resultado = styled.h2`
  border-radius: 50%;
  padding: 10px;
  color: #311432;
  margin: 10px;
  font-size: 60px;
`;

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <Main>
      <GlobalStyle />
      <Section>
        <H1>Calculadora</H1>
        <Input
          type="number"
          placeholder="Insira um número"
          onChange={capturandoPrimeiroValor}
        />
        <Input
          type="number"
          placeholder="Insira um número"
          onChange={capturandoSegundoValor}
        />
        <div>
          <Button onClick={soma}>+</Button>
          <Button onClick={subtracao}>-</Button>
          <Button onClick={multiplicacao}>x</Button>
          <Button onClick={divisao}>/</Button>
        </div>
        <Resultado>{resultado}</Resultado>
      </Section>
    </Main>
  );
}
