/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import Button from '../src/components/Button';
import Input from '../src/components/Input';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainter = styled.div`
  width:100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
      </Head>
      <QuizContainter>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.name}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Submissão');
            }}
            >
              <Input
                name="nomeUsuario"
                onChange={(e) => setName(e.target.value)}
                placeholder="Escreva seu Nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar: ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>

          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p> </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainter>
      <GitHubCorner projectUrl="https://github.com/gordodemoniaco/aluraquiz-rpg" />
    </QuizBackground>
  );
}
