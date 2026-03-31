# 🏗️ Proceso de Construcción de Juegos Educativos

**Metodología probada en producción: Python Code Puzzle**

Este documento describe el proceso **efectivo y validado** para desarrollar juegos educativos interactivos desde cero hasta producción.

---

## 📋 ÍNDICE

1. [Preparación del Entorno](#preparación-del-entorno)
2. [Setup del Proyecto](#setup-del-proyecto)
3. [Estructura Base](#estructura-base)
4. [Desarrollo del Contenido](#desarrollo-del-contenido)
5. [Implementación de Features](#implementación-de-features)
6. [Testing y Correcciones](#testing-y-correcciones)
7. [Deploy](#deploy)

---

## 1️⃣ PREPARACIÓN DEL ENTORNO

### Requisitos Previos

**Node.js con npm** es el único requisito obligatorio.

#### Instalación en Linux (Ubuntu/Mint/Debian)

```bash
# Opción recomendada: Instalación manual directa
cd /tmp
curl -fsSL https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.xz -o node.tar.xz
tar -xf node.tar.xz

# Mover a directorio permanente
mkdir -p $HOME/nodejs
mv node-v20.11.0-linux-x64/* $HOME/nodejs/

# Agregar al PATH permanentemente
echo 'export PATH="$HOME/nodejs/bin:$PATH"' >> ~/.bashrc
export PATH="$HOME/nodejs/bin:$PATH"

# Verificar instalación
node --version  # v20.11.0
npm --version   # 10.2.4
```

#### Verificación

```bash
node --version
npm --version
```

**Salida esperada:**
```
v20.11.0
10.2.4
```

---

## 2️⃣ SETUP DEL PROYECTO

### Paso 1: Crear Proyecto con Vite

```bash
# Navegar al directorio de trabajo
cd /ruta/de/trabajo

# Crear proyecto React con Vite
npm create vite@latest nombre-proyecto -- --template react

# Entrar al directorio
cd nombre-proyecto
```

### Paso 2: Instalar Dependencias Base

```bash
# Instalar dependencias de producción
npm install gsap lucide-react

# Instalar dependencias de desarrollo
npm install -D tailwindcss postcss autoprefixer

# Inicializar Tailwind
npx tailwindcss init -p
```

### Paso 3: Configurar Tailwind CSS

**tailwind.config.js:**
```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'mono': ['"Courier New"', 'monospace'],
      },
      colors: {
        'pixel-green': 'var(--pixel-green, #008042)',
        'pixel-dark': '#0a0a0a',
        'pixel-gray': '#1a1a2e',
        'pixel-blue': '#00d4ff',
        'pixel-purple': '#9d4edd',
        'pixel-yellow': '#ffd60a',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'float': 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
```

### Paso 4: Configurar index.css

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Variables para temas dinámicos */
:root, [data-contrast="normal"] { --pixel-green: #00ff88; }
[data-contrast="soft"] { --pixel-green: #008042; }
[data-contrast="high"] { --pixel-green: #00cc6a; }

/* Estilos personalizados */
.font-pixel { font-family: 'Press Start 2P', cursive; }

.pixel-btn {
  box-shadow: 0 4px 0 rgba(0,0,0,0.5);
  transition: all 0.2s;
}

.pixel-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 0 rgba(0,0,0,0.5);
}

.pixel-btn:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0 rgba(0,0,0,0.5);
}

.scanlines {
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #1a1a2e;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #00d4ff;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #00ff88;
}
```

### Paso 5: Configurar Vite

**vite.config.js:**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nombre-repo/',  // IMPORTANTE: para GitHub Pages
})
```

### Paso 6: Actualizar index.html

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <title>Nombre del Juego</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### Paso 7: Verificar Setup

```bash
npm run dev
```

Abrir `http://localhost:5173` - Debería verse la app React por defecto.

---

## 3️⃣ ESTRUCTURA BASE

### Paso 1: Crear Directorio de Datos

```bash
mkdir -p src/data
```

### Paso 2: Crear gameData.jsx

**src/data/gameData.jsx:**
```javascript
export const gameData = {
  pythonIntro: {
    titulo: '¿Qué es Python?',
    introduccion: 'Antes de comenzar...',
    secciones: [...],
    consejo: '...'
  },
  niveles: [
    {
      id: 'fundamentos',
      nombre: 'Nivel Fundamentos',
      icono: '🌱',
      color: 'pixel-green',
      descripcion: '...',
      teoria: {...},
      conceptosClave: [...],
      industriaInfo: '...',
      preguntas: [...]
    }
  ],
  finalSummary: {...},
  carreraProfesional: {...},
  glosario: [...]
};
```

### Paso 3: Crear App.jsx Base

**src/App.jsx:**
```jsx
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { gameData } from './data/gameData';

function App() {
  const [gameState, setGameState] = useState('home');

  return (
    <div className="min-h-screen bg-pixel-dark text-pixel-green font-pixel">
      {gameState === 'home' && (
        <HomeScreen onStart={() => setGameState('intro')} />
      )}
      {/* Más estados... */}
    </div>
  );
}

export default App;
```

### Paso 4: Crear Componentes Base

Crear en **src/App.jsx**:
- `HomeScreen` - Pantalla de inicio
- `QuestionScreen` - Pantalla de preguntas
- `FinalScreen` - Resumen final

---

## 4️⃣ DESARROLLO DEL CONTENIDO

### Paso 1: Definir Estructura de Niveles

```javascript
niveles: [
  {
    id: 'fundamentos',
    nombre: 'Nivel Fundamentos',
    icono: '🌱',
    color: 'pixel-green',
    descripcion: '¡Bienvenido!',
    
    teoria: {
      titulo: 'Conceptos Fundamentales',
      introduccion: 'Antes de comenzar...',
      temas: [
        {
          titulo: 'Variables',
          queEs: '...',
          queHace: '...',
          comoLoHace: '...',
          paraQueLoHace: '...',
          sintaxis: '...',
          errorComun: '...',
          ejemploCorrecto: '...'
        }
      ],
      consejo: '💡 Consejo...'
    },
    
    conceptosClave: [
      { termino: 'Variable', definicion: '...' }
    ],
    
    industriaInfo: '...',
    
    preguntas: [
      {
        pregunta: '¿Qué es...?',
        opciones: ['Opción 1', 'Opción 2', 'Opción 3'],
        correcta: 0,
        explicacion: 'Explicación sin prefijos.'
      }
    ]
  }
]
```

### Paso 2: Crear 10 Preguntas por Nivel

**Reglas para las explicaciones:**
- ❌ NO usar prefijos: "¡Correcto!", "¡Exacto!", "¡Bien!"
- ✅ SÍ usar: Explicación directa del concepto

**Ejemplo correcto:**
```javascript
{
  pregunta: '¿Qué es una variable?',
  opciones: [
    'Un contenedor que almacena datos',
    'Una función matemática',
    'Un tipo de error'
  ],
  correcta: 0,
  explicacion: 'Una variable es como una "caja" con etiqueta donde guardas información.'
}
```

### Paso 3: Agregar Introducción Educativa

```javascript
pythonIntro: {
  titulo: '¿Qué es Python?',
  introduccion: 'Antes de comenzar tu aventura...',
  secciones: [
    {
      icono: '🐍',
      titulo: '¿Qué es Python?',
      contenido: '...'
    },
    {
      icono: '🚀',
      titulo: '¿Por qué se usa Python?',
      contenido: '...'
    }
  ],
  consejo: '...'
}
```

---

## 5️⃣ IMPLEMENTACIÓN DE FEATURES

### Feature 1: Selector de Contraste

```jsx
const [contrast, setContrast] = useState(() => {
  const saved = localStorage.getItem('mi-proyecto-contrast');
  return saved || 'soft';
});

useEffect(() => {
  document.documentElement.setAttribute('data-contrast', contrast);
  localStorage.setItem('mi-proyecto-contrast', contrast);
}, [contrast]);
```

### Feature 2: Feedback con Tiempo Dinámico

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  
  const isCorrect = (answer - 1) === correctIndex;
  
  const feedbackTitle = isCorrect ? '¡Correcto!' : `Opción correcta ${correctIndex + 1}`;
  const feedbackMessage = pregunta.explicacion;
  
  setFeedback({
    type: isCorrect ? 'success' : 'info',
    title: feedbackTitle,
    message: feedbackMessage,
  });
  
  // Calcular tiempo dinámico
  const palabras = feedbackMessage.split(/\s+/).length;
  const tiempoDinamico = Math.min(
    Math.max(2000 + (palabras * 150), 3000),
    10000
  );
  
  setTimeout(() => {
    setFeedback(null);
    onAnswer(isCorrect);
  }, tiempoDinamico);
};
```

### Feature 3: Foco Automático en Input

```jsx
function QuestionScreen({ pregunta, numeroPregunta }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
    return () => clearTimeout(timer);
  }, [numeroPregunta]);

  return (
    <input
      ref={inputRef}
      type="text"
      maxLength={1}
    />
  );
}
```

### Feature 4: Mensaje de Error con Auto-Cierre

```jsx
if (isNaN(answer) || answer < 1 || answer > 3) {
  setFeedback({
    type: 'error',
    message: '⚠️ Ingresa un número válido (1, 2 o 3)'
  });
  
  setTimeout(() => {
    setFeedback(null);
    inputRef.current?.focus();
  }, 2000);
  return;
}
```

### Feature 5: Atajos de Teclado

```jsx
useEffect(() => {
  const handleKeyPress = (e) => {
    if (e.key === 'p' || e.key === 'P' || e.key === 'Escape') {
      e.preventDefault();
      onPause();
    }
  };
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [onPause]);
```

### Feature 6: Barra de Progreso 8-bit

```jsx
<div className="flex gap-1 justify-center">
  {Array.from({ length: totalPreguntas }, (_, i) => (
    <div
      key={i}
      className={`w-4 h-6 md:w-6 md:h-8 border-2 transition-all duration-300 ${
        i < numeroPregunta
          ? 'bg-pixel-green border-white'
          : 'bg-pixel-dark border-pixel-blue'
      }`}
      style={{
        boxShadow: i < numeroPregunta ? '0 0 8px var(--pixel-green)' : 'none'
      }}
    />
  ))}
</div>
```

### Feature 7: Navegación entre Pantallas

```jsx
// En App.jsx
const [glossaryFromLevel, setGlossaryFromLevel] = useState(null);

const backToFinal = () => {
  setGlossaryFromLevel(null);
  setGameState('final');
};

const backToTheory = () => {
  setGlossaryFromLevel(null);
  setGameState('theory');
};

// Render
{gameState === 'glossary' && (
  <GlossaryScreen
    onBack={glossaryFromLevel !== null ? backToTheory : backToFinal}
    fromLevel={glossaryFromLevel}
  />
)}
```

---

## 6️⃣ TESTING Y CORRECCIONES

### Checklist de Testing

```bash
# 1. Build de producción
npm run build

# Verificar que no hay errores
# Tamaño del bundle < 500 KB
```

### Bugs Comunes y Soluciones

| Problema | Solución |
|----------|----------|
| Cursor no vuelve al terminal | Agregar `useEffect` con `focus()` y delay de 50ms |
| Error card no cierra | Agregar `setTimeout` de 2 segundos |
| Feedback con prefijos redundantes | Limpiar textos en `gameData.jsx` |
| "Volver al resumen" va al inicio | Corregir handler en `GlossaryScreen` |
| Contraste bajo en título correcto | Cambiar a `text-green-300` |

### Testing de Contraste

Verificar en los 3 modos:
- **Soft**: Verde #008042
- **Normal**: Verde #00ff88
- **High**: Verde #00cc6a

---

## 7️⃣ DEPLOY

### Paso 1: Build de Producción

```bash
npm run build
```

### Paso 2: Deploy Manual a GitHub Pages

```bash
# 1. Crear rama gh-pages
git checkout --orphan gh-pages

# 2. Limpiar directorio
git rm -rf .

# 3. Copiar build
cp -r dist/* .

# 4. Commit
git add .
git commit -m "Deploy"

# 5. Push
git push origin gh-pages --force

# 6. Volver a main
git checkout main
```

### Paso 3: Configurar GitHub Pages

1. Ir a **Settings** del repositorio
2. Sección **Pages**
3. **Source**: Deploy from a branch
4. **Branch**: gh-pages → Save

### Paso 4: Verificar Deploy

Esperar 1-2 minutos y visitar:
```
https://usuario.github.io/nombre-repo/
```

---

## 📊 TIEMPOS ESTIMADOS

| Fase | Tiempo |
|------|--------|
| Preparación del entorno | 15 min |
| Setup del proyecto | 30 min |
| Estructura base | 30 min |
| Desarrollo del contenido | 2-4 horas |
| Implementación de features | 1-2 horas |
| Testing y correcciones | 30 min |
| Deploy | 15 min |
| **TOTAL** | **5-8 horas** |

---

## ✅ CHECKLIST FINAL

### Antes de Deploy

- [ ] Build sin errores
- [ ] Bundle < 500 KB
- [ ] Contraste verificado en los 3 modos
- [ ] Foco automático funciona
- [ ] Error card cierra automáticamente
- [ ] Feedback sin prefijos redundantes
- [ ] Navegación entre pantallas correcta
- [ ] Base path configurado en vite.config.js

### Después de Deploy

- [ ] Hard refresh en el navegador (Ctrl+Shift+R)
- [ ] Verificar en móvil
- [ ] Verificar en desktop
- [ ] Probar todos los niveles
- [ ] Probar glosario
- [ ] Probar selector de contraste

---

## 🎯 PRÓXIMO PROYECTO

Para iniciar un nuevo proyecto:

1. **Copiar este documento** a la carpeta del nuevo proyecto
2. **Seguir los pasos** en orden
3. **Adaptar** contenido y features según necesidades
4. **Documentar** nuevos aprendizajes

---

**Documento creado:** Marzo 2026  
**Basado en:** Python Code Puzzle  
**Estado:** ✅ Validado en producción
