/* eslint-disable linebreak-style */
import React from 'react';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';
import { QuizContainter } from '.';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainter>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h3>
              Pergunta 1 de
              {` ${db.questions.length}`}
            </h3>
          </Widget.Header>
          <img
            alt="Descrição"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
            }}
            src="https://placehold.it/400x400"
          />
        </Widget>
      </QuizContainter>
    </QuizBackground>
  );
}
