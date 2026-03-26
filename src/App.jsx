import { useState, useEffect, useRef } from 'react';
import { Terminal, Play, ChevronRight, RotateCcw, Trophy, Brain, Code2, Sparkles, BookOpen, Lightbulb, X, HelpCircle, Settings } from 'lucide-react';
import { gsap } from 'gsap';
import { gameData } from './data/gameData';

// Pantalla de Inicio
function HomeScreen({ onStart, onOpenSettings }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const characterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current.children,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
      );

      gsap.to(characterRef.current, {
        y: -15,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.fromTo('.start-btn',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, delay: 1, ease: 'back.out(1.7)' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 scanlines opacity-20 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-2 h-2 bg-pixel-green animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-pixel-blue animate-pulse delay-700 pointer-events-none"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-pixel-purple animate-pulse delay-500 pointer-events-none"></div>

      {/* Settings Button */}
      <button
        onClick={onOpenSettings}
        className="absolute top-4 right-4 p-3 bg-pixel-dark border-2 border-pixel-blue text-pixel-blue hover:border-pixel-green hover:text-pixel-green transition-colors z-50"
        title="Configuración"
      >
        <Settings size={24} />
      </button>

      {/* Main Card */}
      <div className="relative z-50 max-w-4xl w-full bg-pixel-gray/90 border-4 border-pixel-green p-8 md:p-12 rounded-lg shadow-2xl">
        {/* 8-bit Character */}
        <div ref={characterRef} className="text-6xl md:text-8xl text-center mb-8">
          <span className="drop-shadow-lg">👨‍💻</span>
        </div>

        {/* Title */}
        <div ref={titleRef} className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl text-pixel-green mb-6 drop-shadow-lg">
            PYTHON CODE PUZZLE
          </h1>
          <div className="w-48 md:w-64 h-1 bg-gradient-to-r from-pixel-green via-pixel-blue to-pixel-purple mx-auto mb-6"></div>
          <p className="text-pixel-blue text-base md:text-xl animate-blink">
            &gt; Aprende a pensar como programador_
          </p>
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="start-btn pixel-btn w-full bg-pixel-green text-pixel-dark px-8 py-4 text-lg font-bold flex items-center justify-center gap-3 hover:bg-pixel-blue transition-colors mb-8"
        >
          <Play size={24} />
          INICIAR JUEGO
          <ChevronRight size={24} />
        </button>

        {/* Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm text-gray-400">
          <div className="bg-pixel-dark p-4 border-2 border-pixel-blue">
            <p className="text-pixel-green mb-2">📟</p>
            <p>Responde preguntas</p>
          </div>
          <div className="bg-pixel-dark p-4 border-2 border-pixel-purple">
            <p className="text-pixel-green mb-2">🎮</p>
            <p>Terminal virtual</p>
          </div>
          <div className="bg-pixel-dark p-4 border-2 border-pixel-green">
            <p className="text-pixel-green mb-2">🏆</p>
            <p>3 Niveles</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Pantalla de Introducción de Nivel
function LevelIntroScreen({ nivel, onStart }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.level-card', 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
      );

      gsap.fromTo('.level-info', 
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, delay: 0.3 }
      );

      gsap.fromTo('.start-level-btn', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.8, ease: 'back.out(1.7)' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="scanlines absolute inset-0 opacity-20 pointer-events-none"></div>
      
      <div className="level-card max-w-4xl w-full bg-pixel-gray border-4 border-pixel-green p-6 md:p-8 relative z-10">
        {/* Level Header */}
        <div className="text-center mb-8">
          <div className="text-5xl md:text-7xl mb-4">{nivel.icono}</div>
          <h2 className="text-xl md:text-2xl text-pixel-green mb-3">{nivel.nombre}</h2>
          <p className="text-pixel-blue text-sm md:text-base">{nivel.descripcion}</p>
        </div>

        {/* Industry Info */}
        <div className="level-info bg-pixel-dark p-6 border-2 border-pixel-blue mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="text-pixel-purple flex-shrink-0" size={24} />
            <h3 className="text-base md:text-lg text-pixel-purple">📊 En la Industria</h3>
          </div>
          <div className="text-xs md:text-sm text-gray-300 space-y-3 font-mono leading-relaxed">
            {nivel.industriaInfo.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Question Count */}
        <div className="level-info flex items-center justify-center gap-2 mb-6 text-pixel-yellow text-sm md:text-base">
          <Code2 size={20} />
          <span>{nivel.preguntas.length} preguntas te esperan</span>
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="start-level-btn pixel-btn w-full bg-pixel-green text-pixel-dark px-8 py-4 text-lg md:text-xl font-bold flex items-center justify-center gap-3 hover:bg-pixel-blue transition-colors"
        >
          <Terminal size={24} />
          COMENZAR NIVEL
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

// Componente de Pregunta
function QuestionScreen({ pregunta, numeroPregunta, totalPreguntas, onAnswer, nivelColor, conceptosClave }) {
  const containerRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [showNotes, setShowNotes] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState(null);

  // Resetear estado cuando cambia la pregunta
  useEffect(() => {
    setInputValue('');
    setSubmitted(false);
    setFeedback(null);
  }, [pregunta]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.question-card',
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      );

      gsap.fromTo('.options-list',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, delay: 0.3 }
      );

      gsap.fromTo('.terminal-input',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, delay: 0.5 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitted) return;

    const answer = parseInt(inputValue.trim());

    if (isNaN(answer) || answer < 1 || answer > 3) {
      setFeedback({
        type: 'error',
        message: '⚠️ Ingresa un número válido (1, 2 o 3)'
      });
      return;
    }

    setSubmitted(true);
    const isCorrect = (answer - 1) === pregunta.correcta;

    const feedbackMessage = isCorrect
      ? '✅ ¡Correcto! ' + pregunta.explicacion
      : `❌ La respuesta correcta era la opción ${pregunta.correcta + 1}. ${pregunta.explicacion}`;

    setFeedback({
      type: isCorrect ? 'success' : 'info',
      message: feedbackMessage,
      isCorrect
    });

    // Calcular tiempo dinámico según longitud del feedback
    // Fórmula: base (2000ms) + palabras × 150ms
    // Mínimo: 3000ms, Máximo: 10000ms
    const palabras = feedbackMessage.split(/\s+/).length;
    const tiempoDinamico = Math.min(
      Math.max(2000 + (palabras * 150), 3000),
      10000
    );

    setTimeout(() => {
      onAnswer(isCorrect);
    }, tiempoDinamico);
  };

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center p-4 md:p-8 relative">
      <div className="scanlines absolute inset-0 opacity-20 pointer-events-none"></div>

      <div className="question-card max-w-4xl w-full relative z-10">
        {/* Header con botón de apuntes */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-pixel-blue text-sm">
            Pregunta {numeroPregunta} de {totalPreguntas}
          </div>
          <button
            onClick={() => setShowNotes(true)}
            className="pixel-btn bg-pixel-dark border-2 border-pixel-green text-pixel-green px-4 py-2 text-sm flex items-center gap-2 hover:bg-pixel-green hover:text-pixel-dark transition-colors"
          >
            <BookOpen size={16} />
            Apuntes
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 bg-pixel-gray p-4 border-2 border-pixel-green">
          <div className="flex justify-between text-sm text-pixel-blue mb-2">
            <span>Pregunta {numeroPregunta} de {totalPreguntas}</span>
            <span>{Math.round((numeroPregunta / totalPreguntas) * 100)}%</span>
          </div>
          <div className="h-4 bg-pixel-dark border-2 border-pixel-gray">
            <div
              className={`h-full bg-${nivelColor} transition-all duration-500`}
              style={{ width: `${(numeroPregunta / totalPreguntas) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-pixel-gray border-4 border-pixel-green p-6 md:p-8">
          <h3 className="text-base md:text-lg text-pixel-green mb-6 leading-relaxed">
            {pregunta.pregunta}
          </h3>

          {/* Options */}
          <div className="options-list space-y-3 mb-8">
            {pregunta.opciones.map((opcion, idx) => (
              <div
                key={idx}
                className="bg-pixel-dark p-4 border-2 border-pixel-blue hover:border-pixel-green transition-colors cursor-default"
              >
                <span className="text-pixel-yellow font-bold mr-3">{idx + 1}.</span>
                <span className="text-gray-300 text-sm md:text-base">{opcion}</span>
              </div>
            ))}
          </div>

          {/* Terminal Input */}
          <form onSubmit={handleSubmit} className="terminal-input">
            <div className="bg-pixel-dark border-2 border-pixel-green p-4 font-mono">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="text-pixel-green flex-shrink-0" size={20} />
                <span className="text-pixel-green text-sm">Python Terminal</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-pixel-blue">{'>>>'}</span>
                <span className="text-gray-400 text-sm">Ingresa tu respuesta (1-3):</span>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={submitted}
                  className="flex-1 min-w-[60px] bg-transparent border-b-2 border-pixel-green text-pixel-green text-xl px-2 py-1 focus:outline-none"
                  autoFocus
                  maxLength={1}
                />
                <span className="terminal-cursor text-pixel-green">▋</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitted || !inputValue.trim()}
              className="pixel-btn w-full mt-4 bg-pixel-green text-pixel-dark px-6 py-3 font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pixel-blue transition-colors"
            >
              {submitted ? 'Procesando...' : 'ENVIAR RESPUESTA'}
            </button>
          </form>

          {/* Feedback */}
          {feedback && (
            <div className={`mt-6 p-4 border-4 ${
              feedback.type === 'success'
                ? 'bg-green-900/30 border-pixel-green'
                : feedback.type === 'error'
                ? 'bg-red-900/30 border-red-500'
                : 'bg-blue-900/30 border-pixel-blue'
            }`}>
              <p className={`text-sm md:text-base ${
                feedback.type === 'error' ? 'text-red-400' : 'text-gray-300'
              }`}>
                {feedback.message}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Panel de Apuntes */}
      {showNotes && (
        <NotesPanel
          conceptosClave={conceptosClave}
          onClose={() => setShowNotes(false)}
          onSelectConcept={(concepto) => {
            setSelectedConcept(concepto);
          }}
        />
      )}

      {/* Tooltip de Concepto */}
      {selectedConcept && (
        <ConceptTooltip
          concepto={selectedConcept}
          onClose={() => setSelectedConcept(null)}
        />
      )}
    </div>
  );
}

// Pantalla de Teoría
function TheoryScreen({ nivel, onStart }) {
  const containerRef = useRef(null);
  const [activeTema, setActiveTema] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.theory-card',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
      );

      gsap.fromTo('.theory-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3 }
      );

      gsap.fromTo('.start-theory-btn',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.8, ease: 'back.out(1.7)' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const teoria = nivel.teoria;
  const temaActual = teoria.temas[activeTema];

  const secciones = [
    { key: 'queEs', titulo: '¿Qué es?', icono: '📖' },
    { key: 'queHace', titulo: '¿Qué hace?', icono: '⚙️' },
    { key: 'comoLoHace', titulo: '¿Cómo lo hace?', icono: '🔧' },
    { key: 'paraQueLoHace', titulo: '¿Para qué lo hace?', icono: '🎯' },
    { key: 'sintaxis', titulo: 'Sintaxis', icono: '💻' },
    { key: 'errorComun', titulo: '⚠️ Error común', icono: '❌' },
    { key: 'ejemploCorrecto', titulo: '✅ Ejemplo correcto', icono: '✓' }
  ];

  return (
    <div ref={containerRef} className="min-h-screen p-4 md:p-8 overflow-y-auto">
      <div className="scanlines absolute inset-0 opacity-20 pointer-events-none"></div>

      <div className="theory-card max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 bg-pixel-gray border-4 border-pixel-green p-6">
          <BookOpen className="text-pixel-green mx-auto mb-4" size={48} />
          <h2 className="text-xl md:text-2xl text-pixel-green mb-2">{teoria.titulo}</h2>
          <p className="text-pixel-blue text-sm md:text-base">{teoria.introduccion}</p>
        </div>

        {/* Temas Grid - Selectores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {teoria.temas.map((tema, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveTema(idx);
                setExpandedSection(null);
              }}
              className={`theory-item p-4 border-2 text-left transition-all ${
                activeTema === idx
                  ? 'bg-pixel-green text-pixel-dark border-pixel-green'
                  : 'bg-pixel-dark border-pixel-blue hover:border-pixel-green'
              }`}
            >
              <h3 className="font-bold text-sm md:text-base mb-1">{tema.titulo}</h3>
            </button>
          ))}
        </div>

        {/* Contenido del Tema Activo - Secciones Expandibles */}
        <div className="theory-item bg-pixel-dark border-2 border-pixel-purple p-4 md:p-6 mb-6">
          <h3 className="text-lg md:text-xl text-pixel-purple mb-4 flex items-center gap-2">
            <Lightbulb size={24} />
            {temaActual.titulo}
          </h3>

          {/* Secciones expandibles */}
          <div className="space-y-2">
            {secciones.map((seccion) => (
              <div key={seccion.key} className="border border-pixel-blue rounded">
                <button
                  onClick={() => setExpandedSection(expandedSection === seccion.key ? null : seccion.key)}
                  className="w-full p-3 flex items-center justify-between bg-pixel-gray hover:bg-pixel-gray/70 transition-colors"
                >
                  <span className="text-pixel-green text-sm md:text-base font-bold">
                    {seccion.icono} {seccion.titulo}
                  </span>
                  <ChevronRight
                    size={20}
                    className={`text-pixel-blue transition-transform ${
                      expandedSection === seccion.key ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                
                {expandedSection === seccion.key && (
                  <div className="p-4 bg-pixel-dark border-t border-pixel-blue">
                    <p className="text-gray-300 text-sm md:text-base whitespace-pre-line leading-relaxed">
                      {temaActual[seccion.key]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Consejo */}
        <div className="theory-item bg-pixel-green/10 border-2 border-pixel-yellow p-4 mb-6">
          <p className="text-pixel-yellow text-sm md:text-base">{teoria.consejo}</p>
        </div>

        {/* Conceptos Clave - Mini tooltips preview */}
        <div className="theory-item bg-pixel-dark border-2 border-pixel-blue p-4 mb-6">
          <h4 className="text-pixel-blue text-sm md:text-base mb-3 flex items-center gap-2">
            <HelpCircle size={20} />
            Conceptos Clave (disponibles como apuntes durante el juego)
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {nivel.conceptosClave.map((concepto, idx) => (
              <div
                key={idx}
                className="bg-pixel-gray p-2 border border-pixel-green text-xs text-pixel-green"
              >
                <span className="font-bold">{concepto.termino}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="start-theory-btn pixel-btn w-full bg-pixel-green text-pixel-dark px-8 py-4 text-lg md:text-xl font-bold flex items-center justify-center gap-3 hover:bg-pixel-blue transition-colors"
        >
          <Terminal size={24} />
          ¡ENTENDIDO! COMENZAR NIVEL
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

// Tooltip para conceptos clave
function ConceptTooltip({ concepto, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-md w-full bg-pixel-dark border-4 border-pixel-blue p-6" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-pixel-green text-lg font-bold">{concepto.termino}</h3>
          <button onClick={onClose} className="text-pixel-blue hover:text-pixel-green">
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{concepto.definicion}</p>
      </div>
    </div>
  );
}

// Pantalla de Apuntes (Notas consultables)
function NotesPanel({ conceptosClave, onClose, onSelectConcept }) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-2xl w-full max-h-[80vh] overflow-y-auto bg-pixel-dark border-4 border-pixel-green p-6" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl text-pixel-green flex items-center gap-2">
            <BookOpen size={28} />
            Apuntes del Nivel
          </h2>
          <button onClick={onClose} className="text-pixel-blue hover:text-pixel-green">
            <X size={28} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {conceptosClave.map((concepto, idx) => (
            <button
              key={idx}
              onClick={() => onSelectConcept(concepto)}
              className="bg-pixel-gray p-4 border-2 border-pixel-blue hover:border-pixel-green transition-all text-left"
            >
              <h3 className="text-pixel-green font-bold text-sm mb-1">{concepto.termino}</h3>
              <p className="text-gray-400 text-xs">{concepto.definicion}</p>
            </button>
          ))}
        </div>
        
        <p className="text-center text-pixel-blue text-xs mt-6">
          💡 Hacé clic en un concepto para ver más detalles
        </p>
      </div>
    </div>
  );
}

// Panel de Configuración (Contraste)
function SettingsPanel({ onClose, contrast, setContrast }) {
  const options = [
    { value: 'normal', label: 'Normal', color: '#00ff88', description: 'Verde neón original (estilo 8-bit)' },
    { value: 'soft', label: 'Suave', color: '#008042', description: 'Verde más oscuro (recomendado)' },
    { value: 'high', label: 'Alto', color: '#00cc6a', description: 'Máximo contraste (accesibilidad)' }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-md w-full bg-pixel-dark border-4 border-pixel-green p-6" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl text-pixel-green flex items-center gap-2">
            <Settings size={28} />
            Configuración
          </h2>
          <button onClick={onClose} className="text-pixel-blue hover:text-pixel-green">
            <X size={28} />
          </button>
        </div>
        
        <div className="mb-6">
          <h3 className="text-pixel-blue text-sm mb-4">Contraste del Verde</h3>
          
          <div className="space-y-3">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => setContrast(option.value)}
                className={`w-full p-4 border-2 text-left transition-all ${
                  contrast === option.value
                    ? 'border-pixel-green bg-pixel-green/10'
                    : 'border-pixel-blue bg-pixel-gray hover:border-pixel-green'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-6 h-6 rounded border-2 border-white"
                    style={{ backgroundColor: option.color }}
                  ></div>
                  <span className={`font-bold ${
                    contrast === option.value ? 'text-pixel-green' : 'text-pixel-blue'
                  }`}>
                    {option.label}
                  </span>
                </div>
                <p className="text-gray-400 text-xs ml-9">{option.description}</p>
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-pixel-gray p-4 border-2 border-pixel-blue mb-6">
          <p className="text-pixel-blue text-xs">
            💡 La configuración se guarda automáticamente y persiste entre sesiones.
          </p>
        </div>
        
        <button
          onClick={onClose}
          className="pixel-btn w-full bg-pixel-green text-pixel-dark px-6 py-3 font-bold hover:bg-pixel-blue transition-colors"
        >
          CERRAR
        </button>
      </div>
    </div>
  );
}

// Pantalla Final
function FinalScreen({ onRestart }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.final-card', 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
      );

      gsap.fromTo('.final-title', 
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );

      gsap.fromTo('.summary-item', 
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, delay: 0.3 }
      );

      gsap.fromTo('.restart-btn', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.8, ease: 'back.out(1.7)' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const { finalSummary } = gameData;

  return (
    <div ref={containerRef} className="min-h-screen p-4 md:p-8 overflow-y-auto">
      <div className="scanlines absolute inset-0 opacity-20 pointer-events-none"></div>

      <div className="final-card max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="final-title text-center mb-12 bg-pixel-gray border-4 border-pixel-yellow p-8">
          <Trophy className="text-pixel-yellow mx-auto mb-4" size={64} />
          <h1 className="text-2xl md:text-4xl text-pixel-green mb-4">
            {finalSummary.titulo}
          </h1>
          <div className="w-48 h-1 bg-gradient-to-r from-pixel-green via-pixel-blue to-pixel-purple mx-auto"></div>
        </div>

        {/* Summary Items */}
        <div className="grid gap-4 md:gap-6 mb-8">
          {finalSummary.items.map((item, idx) => (
            <div 
              key={idx}
              className="summary-item bg-pixel-gray border-2 border-pixel-green p-4 md:p-6"
            >
              <h3 className="text-sm md:text-lg text-pixel-blue mb-3 flex items-center gap-2">
                <Sparkles size={20} />
                {item.titulo}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Why Think Like This */}
        <div className="summary-item bg-pixel-dark border-2 border-pixel-purple p-4 md:p-6 mb-4">
          <h3 className="text-base md:text-xl text-pixel-purple mb-4 flex items-center gap-2">
            <Brain size={24} />
            ¿Por qué un programador piensa así?
          </h3>
          <div className="text-gray-300 text-xs md:text-sm space-y-3 leading-relaxed">
            {finalSummary.porQuePiensaAsi.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* What For */}
        <div className="summary-item bg-pixel-dark border-2 border-pixel-blue p-4 md:p-6 mb-8">
          <h3 className="text-base md:text-xl text-pixel-blue mb-4 flex items-center gap-2">
            <Code2 size={24} />
            ¿Para qué un programador piensa así?
          </h3>
          <div className="text-gray-300 text-xs md:text-sm space-y-3 leading-relaxed">
            {finalSummary.paraQuePiensaAsi.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="restart-btn pixel-btn w-full bg-pixel-green text-pixel-dark px-8 py-4 text-lg font-bold flex items-center justify-center gap-3 hover:bg-pixel-blue transition-colors mb-8"
        >
          <RotateCcw size={24} />
          JUGAR DE NUEVO
        </button>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 pb-8">
          <p>🎮 Python Code Puzzle - Aprende a Pensar como Programador</p>
          <p className="mt-2">Hecho con ❤️ para futuros desarrolladores</p>
        </div>
      </div>
    </div>
  );
}

// Componente Principal App
function App() {
  const [gameState, setGameState] = useState('home'); // home, theory, question, final
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showSettings, setShowSettings] = useState(false);
  const [contrast, setContrast] = useState(() => {
    // Load from localStorage or default to 'soft'
    const saved = localStorage.getItem('pcp-contrast');
    return saved || 'soft';
  });

  // Apply contrast setting to document
  useEffect(() => {
    document.documentElement.setAttribute('data-contrast', contrast);
    localStorage.setItem('pcp-contrast', contrast);
  }, [contrast]);

  const startGame = () => {
    setGameState('theory');
  };

  const startLevel = () => {
    setCurrentQuestion(0);
    setGameState('question');
  };

  const handleAnswer = (isCorrect) => {
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));

    const nivelActual = gameData.niveles[currentLevel];

    if (currentQuestion < nivelActual.preguntas.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Nivel completado
      if (currentLevel < gameData.niveles.length - 1) {
        setCurrentLevel(prev => prev + 1);
        setGameState('theory'); // Mostrar teoría del siguiente nivel
      } else {
        // Juego completado
        setGameState('final');
      }
    }
  };

  const restartGame = () => {
    setCurrentLevel(0);
    setCurrentQuestion(0);
    setScore({ correct: 0, total: 0 });
    setGameState('home');
  };

  const nivelActual = gameData.niveles[currentLevel];
  const preguntaActual = nivelActual?.preguntas[currentQuestion];

  return (
    <div className="min-h-screen bg-pixel-dark text-pixel-green font-pixel">
      {gameState === 'home' && (
        <HomeScreen
          onStart={startGame}
          onOpenSettings={() => setShowSettings(true)}
        />
      )}

      {gameState === 'theory' && nivelActual && (
        <TheoryScreen
          nivel={nivelActual}
          onStart={startLevel}
        />
      )}

      {gameState === 'question' && preguntaActual && (
        <QuestionScreen
          pregunta={preguntaActual}
          numeroPregunta={currentQuestion + 1}
          totalPreguntas={nivelActual.preguntas.length}
          onAnswer={handleAnswer}
          nivelColor={nivelActual.color}
          conceptosClave={nivelActual.conceptosClave}
        />
      )}

      {gameState === 'final' && (
        <FinalScreen onRestart={restartGame} />
      )}

      {/* Settings Panel */}
      {showSettings && (
        <SettingsPanel
          onClose={() => setShowSettings(false)}
          contrast={contrast}
          setContrast={setContrast}
        />
      )}
    </div>
  );
}

export default App;
