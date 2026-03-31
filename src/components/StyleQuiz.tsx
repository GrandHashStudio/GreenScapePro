import React, { useState } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, CheckCircle2, Trees, Landmark, Compass, Palette } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type StyleResult = 'Modern Architectural' | 'English Heritage' | 'Zen Lush' | null;

interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    description: string;
    weight: {
      modern: number;
      heritage: number;
      zen: number;
    };
    icon: React.ReactNode;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "When you imagine your perfect morning outdoors, what do you see?",
    options: [
      {
        id: 'q1a',
        text: "Clean, geometric lines",
        description: "Polished concrete, architectural lighting, and sharp-edged planters.",
        weight: { modern: 10, heritage: 0, zen: 2 },
        icon: <Compass className="w-6 h-6" />
      },
      {
        id: 'q1b',
        text: "Overflowing romantic borders",
        description: "Timeless stone paths, antique ornaments, and a variety of English roses.",
        weight: { modern: 0, heritage: 10, zen: 1 },
        icon: <Landmark className="w-6 h-6" />
      },
      {
        id: 'q1c',
        text: "A serene, organic sanctuary",
        description: "Water features, smooth river stones, and cloud-pruned maples.",
        weight: { modern: 1, heritage: 0, zen: 10 },
        icon: <Trees className="w-6 h-6" />
      }
    ]
  },
  {
    id: 2,
    text: "How do you plan to entertain your guests?",
    options: [
      {
        id: 'q2a',
        text: "Sleek outdoor cocktail lounge",
        description: "Bespoke fire pits and integrated sound systems for networking.",
        weight: { modern: 10, heritage: 1, zen: 0 },
        icon: <Sparkles className="w-6 h-6" />
      },
      {
        id: 'q2b',
        text: "Traditional garden tea party",
        description: "Wrought iron furniture under the shade of a grandfather oak.",
        weight: { modern: 0, heritage: 10, zen: 1 },
        icon: <Landmark className="w-6 h-6" />
      },
      {
        id: 'q2c',
        text: "Intimate reflection and tea",
        description: "Low seating, quiet areas, and a focus on natural soundscapes.",
        weight: { modern: 1, heritage: 0, zen: 10 },
        icon: <Trees className="w-6 h-6" />
      }
    ]
  },
  {
    id: 3,
    text: "Which material palette resonates with your home's architecture?",
    options: [
      {
        id: 'q3a',
        text: "Glass, Steel, and Slate",
        description: "High-contrast materials that make a bold, contemporary statement.",
        weight: { modern: 10, heritage: 0, zen: 2 },
        icon: <Palette className="w-6 h-6" />
      },
      {
        id: 'q3b',
        text: "Reclaimed Brick and Limestone",
        description: "Natural, weathered textures that feel rooted in tradition.",
        weight: { modern: 0, heritage: 10, zen: 1 },
        icon: <Landmark className="w-6 h-6" />
      },
      {
        id: 'q3c',
        text: "Natural Wood and Mossy Stone",
        description: "Organic elements that blur the line between nature and home.",
        weight: { modern: 2, heritage: 1, zen: 10 },
        icon: <Trees className="w-6 h-6" />
      }
    ]
  }
];

export default function StyleQuiz() {
  const [ref, isVisible] = useIntersectionObserver();
  const [step, setStep] = useState(0); // 0 is landing, 1-3 are questions, 4+ is result
  const [scores, setScores] = useState({ modern: 0, heritage: 0, zen: 0 });
  const [result, setResult] = useState<StyleResult>(null);

  const handleAnswer = (weight: { modern: number; heritage: number; zen: number }) => {
    setScores(prev => ({
      modern: prev.modern + weight.modern,
      heritage: prev.heritage + weight.heritage,
      zen: prev.zen + weight.zen
    }));

    if (step < questions.length) {
      setStep(step + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const { modern, heritage, zen } = scores;
    let finalResult: StyleResult = 'Modern Architectural';
    
    if (heritage > modern && heritage > zen) {
      finalResult = 'English Heritage';
    } else if (zen > modern && zen > heritage) {
      finalResult = 'Zen Lush';
    }
    
    setResult(finalResult);
    setStep(questions.length + 1);
  };

  const resetQuiz = () => {
    setStep(1);
    setScores({ modern: 0, heritage: 0, zen: 0 });
    setResult(null);
  };

  return (
    <section 
      id="style-quiz" 
      ref={ref}
      className={`py-24 relative overflow-hidden bg-brand-stone/30 dark:bg-brand-forest/10 transition-colors duration-500`}
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-forest/5 rounded-full blur-3xl"></div>

      <div className={`max-w-4xl mx-auto px-4 relative z-10 animate-bloom ${isVisible ? 'show' : ''}`}>
        
        {step === 0 && (
          <div className="text-center">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Personalized Vision</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              Discover Your <br /> 
              <span className="text-brand-gold">Signature Landscape Style</span>
            </h2>
            <p className="text-xl text-brand-slate/80 dark:text-gray-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Every masterpiece starts with a vision. Take our interactive discovery quiz to reveal the architectural philosophy that aligns with your lifestyle.
            </p>
            <button 
              onClick={() => setStep(1)}
              className="btn-primary group inline-flex items-center"
            >
              Start the Discovery
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {step >= 1 && step <= questions.length && (
          <div className="transition-all duration-500">
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Question {step} of {questions.length}</span>
                <div className="h-2 w-full max-w-[200px] bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden ml-4">
                  <div 
                    className="h-full bg-brand-gold transition-all duration-700 ease-out" 
                    style={{ width: `${(step / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-10 leading-tight">{questions[step - 1].text}</h3>
              
              <div className="grid grid-cols-1 gap-5">
                {questions[step - 1].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.weight)}
                    className="flex text-left p-6 md:p-8 rounded-3xl border-2 border-white dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:border-brand-gold/50 hover:bg-white dark:hover:bg-white/10 transition-all group relative overflow-hidden"
                  >
                    <div className="bg-brand-stone dark:bg-white/10 p-5 rounded-2xl mr-6 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shrink-0">
                      {option.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-2 flex items-center">
                        {option.text}
                      </h4>
                      <p className="text-brand-slate dark:text-gray-400 font-bold leading-relaxed">{option.description}</p>
                    </div>
                    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => setStep(step - 1)}
              className="flex items-center text-brand-slate font-bold hover:text-brand-forest dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back
            </button>
          </div>
        )}

        {step > questions.length && result && (
          <div className="text-center pt-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-gold/20 rounded-full mb-10 relative">
              <CheckCircle2 className="w-12 h-12 text-brand-gold relative z-10" />
              <div className="absolute inset-0 bg-brand-gold rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Your Aesthetic Match</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">{result}</h2>
            
            <div className="p-10 glass-card border-none bg-white/70 dark:bg-white/5 rounded-[3rem] mb-12 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold"></div>
              <p className="text-2xl text-brand-slate dark:text-gray-200 leading-relaxed font-bold italic">
                {result === 'Modern Architectural' && "“Your vision is defined by precision, luxury, and the bold interplay of structure and nature. You appreciate clear focal points and seamless indoor-outdoor transitions.”"}
                {result === 'English Heritage' && "“You are drawn to the timeless elegance of tradition. Your ideal space is a tapestry of perennial color, hidden nooks, and historical textures that tell a story.”"}
                {result === 'Zen Lush' && "“Tranquility is your priority. You seek a landscape that acts as a sensory retreat, balanced by organic materials and the calming presence of water.”"}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary min-w-[280px]"
              >
                Design My {result} Estate
              </button>
              <button 
                onClick={resetQuiz}
                className="text-brand-forest dark:text-white font-black uppercase tracking-widest text-sm hover:text-brand-gold dark:hover:text-brand-gold transition-colors"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
