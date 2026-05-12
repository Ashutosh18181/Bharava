'use client';

import { useState } from 'react';
import { QuizQuestion } from '@/data/types';
import { Lightbulb, CheckCircle2, XCircle } from 'lucide-react';
import './QuizStrip.css';

interface QuizStripProps {
  quiz: QuizQuestion;
}

export default function QuizStrip({ quiz }: QuizStripProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
  };

  return (
    <div className="quiz-strip glass">
      <div className="quiz-header">
        <Lightbulb size={20} className="text-gold" />
        <h4>Quick Knowledge Check</h4>
      </div>
      
      <p className="quiz-question">{quiz.question}</p>
      
      <div className="quiz-options">
        {quiz.options.map((opt, i) => {
          let className = 'quiz-option';
          let Icon = null;
          
          if (showResult) {
            if (i === quiz.correctIndex) {
              className += ' correct';
              Icon = CheckCircle2;
            } else if (i === selected) {
              className += ' incorrect';
              Icon = XCircle;
            } else {
              className += ' disabled';
            }
          }
          
          return (
            <button 
              key={i} 
              className={className} 
              onClick={() => handleSelect(i)}
              disabled={showResult}
            >
              <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
              <span className="opt-text">{opt}</span>
              {Icon && <Icon size={16} className="opt-icon" />}
            </button>
          );
        })}
      </div>
      
      {showResult && (
        <div className={`quiz-explanation animate-fade-up ${selected === quiz.correctIndex ? 'success' : 'error'}`}>
          <p>{quiz.explanation}</p>
        </div>
      )}
    </div>
  );
}
