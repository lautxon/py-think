# 🎮 Skill: Desarrollo de Juegos Educativos Interactivos

**Experiencia extraída del proyecto: "Python Code Puzzle - Aprende a Pensar como Programador"**

---

## 📋 ÍNDICE

1. [Visión General](#visión-general)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Flujo de Desarrollo](#flujo-de-desarrollo)
5. [Patrones de Implementación](#patrones-de-implementación)
6. [Checklist de Features](#checklist-de-features)
7. [Proceso de Deploy](#proceso-de-deploy)
8. [Comunicación Efectiva](#comunicación-efectiva)

---

## 🎯 VISIÓN GENERAL

Este Skill documenta la metodología probada para desarrollar **juegos educativos interactivos** con las siguientes características:

- ✅ **Rápido desarrollo** - De idea a producción en horas
- ✅ **Bajo costo** - Stack 100% gratuito (React + Vite + GitHub Pages)
- ✅ **Alto impacto** - UX pulida, animaciones fluidas, accesible
- ✅ **Escalable** - Fácil agregar contenido y features
- ✅ **Maintenable** - Código limpio, componentes reutilizables

---

## 🛠️ STACK TECNOLÓGICO

### Core
| Herramienta | Versión | Propósito |
|-------------|---------|-----------|
| **React** | 19.x | Framework UI |
| **Vite** | 6.x | Build tool + Dev server |
| **TailwindCSS** | 3.x | Estilos utilitarios |
| **GSAP** | 3.x | Animaciones profesionales |
| **Lucide Icons** | 0.x | Iconos modernos |

### Deploy
| Plataforma | Propósito |
|------------|-----------|
| **GitHub Pages** | Hosting estático gratuito |
| **GitHub Actions** | CI/CD automático |

### Estructura de Archivos
```
proyecto/
├── src/
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Entry point
│   ├── index.css            # Estilos globales + Tailwind
│   └── data/
│       └── gameData.jsx     # Contenido del juego
├── index.html               # HTML base
├── vite.config.js           # Config de Vite (base path)
├── tailwind.config.js       # Config de Tailwind
├── package.json             # Dependencias
└── .github/workflows/
    └── deploy.yml           # CI/CD (opcional)
```

---

## 📁 ESTRUCTURA DEL PROYECTO

### 1. **gameData.jsx** - El Corazón del Contenido

```javascript
export const gameData = {
  niveles: [
    {
      id: 'fundamentos',
      nombre: 'Nivel Fundamentos',
      icono: '🌱',
      color: 'pixel-green',
      descripcion: '¡Bienvenido!',
      
      // TEORÍA (nuevo)
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
      
      // CONCEPTOS CLAVE (para tooltips)
      conceptosClave: [
        { termino: 'Variable', definicion: '...' }
      ],
      
      // INFO INDUSTRIAL
      industriaInfo: `...`,
      
      // PREGUNTAS
      preguntas: [
        {
          pregunta: '¿Qué es...?',
          opciones: ['Opción 1', 'Opción 2', 'Opción 3'],
          correcta: 0,  // índice de la correcta
          explicacion: 'Explicación detallada...'
        }
      ]
    }
  ],
  
  // PANTALLA FINAL
  finalSummary: {
    titulo: '¡Felicidades!',
    items: [...],
    porQuePiensaAsi: `...`,
    paraQuePiensaAsi: `...`
  }
};
```

### 2. **App.jsx** - Componentes Principales

| Componente | Propósito |
|------------|-----------|
| `HomeScreen` | Pantalla de inicio con botón de inicio |
| `TheoryScreen` | Pantalla de teoría expandible (Q&A) |
| `QuestionScreen` | Pantalla de preguntas con terminal |
| `PauseScreen` | Pantalla de pausa (tecla P/ESC) |
| `FinalScreen` | Resumen final del juego |
| `NotesPanel` | Panel de apuntes consultable |
| `SettingsPanel` | Configuración (contraste, etc.) |
| `ConceptTooltip` | Tooltip para conceptos clave |

### 3. **index.css** - Estilos Globales

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
.pixel-btn { box-shadow: ...; transition: ...; }
.scanlines { background: repeating-linear-gradient(...); }
```

### 4. **tailwind.config.js** - Configuración de Tailwind

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

### 5. **vite.config.js** - Configuración de Vite

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/py-think/',  // IMPORTANTE: nombre del repo para GitHub Pages
})
```

---

## 🔄 FLUJO DE DESARROLLO

### Fase 1: Setup Inicial (15 min)
```bash
# 1. Crear proyecto con Vite
npm create vite@latest nombre-proyecto -- --template react
cd nombre-proyecto

# 2. Instalar dependencias
npm install
npm install gsap lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Configurar Tailwind (tailwind.config.js)
# 4. Agregar directivas Tailwind (src/index.css)
# 5. Configurar base path (vite.config.js)
```

### Fase 2: Estructura Base (30 min)
```bash
# 1. Crear src/data/gameData.jsx
# 2. Crear componentes en src/App.jsx
# 3. Agregar estilos personalizados en src/index.css
# 4. Probar con npm run dev
```

### Fase 3: Contenido (variable)
```javascript
// 1. Definir niveles en gameData.jsx
// 2. Agregar teoría con formato Q&A
// 3. Crear preguntas con explicaciones
// 4. Configurar pantalla final
```

### Fase 4: Features Extra (1-2 horas)
- [ ] Selector de contraste
- [ ] Barra de progreso visual
- [ ] Pantalla de pausa
- [ ] Sonidos 8-bit (opcional)
- [ ] Feedback dinámico

### Fase 5: Deploy (15 min)
```bash
# 1. Build de producción
npm run build

# 2. Crear rama gh-pages
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Initial deploy"
git push origin gh-pages --force

# 3. Configurar GitHub Pages
# Settings → Pages → Source: gh-pages branch → Save
```

---

## 🎨 PATRONES DE IMPLEMENTACIÓN

### Patrón 1: Componente con Estado y Animaciones
```jsx
function MiComponente({ onStart }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.mi-clase',
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center">
      {/* Contenido */}
    </div>
  );
}
```

### Patrón 2: Feedback Dinámico
```jsx
// Calcular tiempo según longitud del texto
const feedbackMessage = 'Texto de feedback...';
const palabras = feedbackMessage.split(/\s+/).length;
const tiempoDinamico = Math.min(
  Math.max(2000 + (palabras * 150), 3000),
  10000
);

setTimeout(() => {
  onAnswer(isCorrect);
}, tiempoDinamico);
```

### Patrón 3: Persistencia de Configuración
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

### Patrón 4: Atajos de Teclado
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

### Patrón 5: Barra de Progreso 8-bit
```jsx
<div className="flex gap-1 justify-center">
  {Array.from({ length: totalPreguntas }, (_, i) => (
    <div
      key={i}
      className={`w-4 h-6 border-2 transition-all ${
        i < numeroPregunta
          ? 'bg-pixel-green border-white'
          : 'bg-pixel-dark border-pixel-blue'
      }`}
    />
  ))}
</div>
```

---

## ✅ CHECKLIST DE FEATURES

### Esenciales
- [ ] Pantalla de inicio con botón "INICIAR"
- [ ] Pantalla de teoría antes de cada nivel
- [ ] Pantalla de preguntas con input
- [ ] Feedback visual (correcto/incorrecto)
- [ ] Pantalla final con resumen
- [ ] Progreso entre preguntas

### Recomendadas
- [ ] Selector de contraste (accesibilidad)
- [ ] Barra de progreso visual
- [ ] Panel de apuntes consultable
- [ ] Tooltips de conceptos clave
- [ ] Feedback de tiempo dinámico
- [ ] Pantalla de pausa (tecla P/ESC)

### Opcionales
- [ ] Sonidos 8-bit
- [ ] Animaciones GSAP avanzadas
- [ ] Sistema de puntaje
- [ ] Logros/medallas
- [ ] Modo oscuro/claro

---

## 🚀 PROCESO DE DEPLOY

### Opción A: Manual (Recomendado para desarrollo)
```bash
# 1. Build
npm run build

# 2. Checkout a gh-pages
git checkout gh-pages

# 3. Reemplazar contenido
rm -rf *
cp -r ../dist/* .

# 4. Commit y push
git add .
git commit -m "Deploy new version"
git push origin gh-pages --force

# 5. Volver a main
git checkout main
```

### Opción B: GitHub Actions (Automático)
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
```

---

## 💬 COMUNICACIÓN EFECTIVA (Usuario ↔ IA)

### Para el Usuario
1. **Sé específico** - "Quiero X feature con Y comportamiento"
2. **Proporciona contexto** - "Es para un juego educativo de Python"
3. **Da feedback** - "Funciona, pero necesito ajustar Z"
4. **Prioriza** - "Empecemos por lo esencial, luego lo extra"

### Para la IA
1. **Explica el porqué** - No solo el cómo
2. **Ofrece opciones** - "Podemos hacer A, B o C"
3. **Confirma entendimiento** - "¿Querés decir que...?"
4. **Documenta decisiones** - "Elegimos X porque Y"

### Flujo de Trabajo Recomendado
```
1. Usuario: Describe feature/objectivo
2. IA: Analiza y propone plan
3. Usuario: Aprueba/ajusta plan
4. IA: Implementa paso a paso
5. Usuario: Prueba y da feedback
6. IA: Ajusta según feedback
7. Repetir hasta completar
```

---

## 📊 MÉTRICAS DE ÉXITO

| Métrica | Objetivo | Cómo Medir |
|---------|----------|------------|
| **Tiempo de desarrollo** | < 8 horas | Desde `npm create vite` hasta deploy |
| **Tamaño del bundle** | < 500 KB | `npm run build` muestra tamaños |
| **Performance** | < 3s carga | Lighthouse en Chrome DevTools |
| **Accesibilidad** | > 90 score | Lighthouse Accessibility |
| **Contenido** | 3 niveles × 10 preguntas | Contar en gameData.jsx |

---

## 🔧 ADAPTACIONES PARA OTROS PROYECTOS

### Para cambiar el tema visual
```javascript
// tailwind.config.js
colors: {
  'primary': '#tu-color',
  'secondary': '#tu-color-2',
  // ...
}
```

### Para cambiar la estética
| Estética | Font | Colores | Efectos |
|----------|------|---------|---------|
| **8-bit** | Press Start 2P | Neón | Scanlines |
| **Moderno** | Inter | Pasteles | Glassmorphism |
| **Retro** | Courier | Sepia | Papel viejo |
| **Minimal** | System UI | Blanco/Negro | Sombras suaves |

### Para cambiar la mecánica
| Mecánica | Modificación |
|----------|--------------|
| **Opción múltiple** | Cambiar input por botones |
| **Arrastrar y soltar** | Usar @dnd-kit |
| **Completar espacios** | Input con validación |
| **Ordenar elementos** | Array con drag-drop |

---

## 📝 NOTAS DE LA EXPERIENCIA

### Lo que funcionó bien ✅
- **TailwindCSS** - Rápido para prototipar
- **GSAP** - Animaciones profesionales sin dolor
- **gameData.jsx separado** - Fácil editar contenido sin tocar lógica
- **Deploy en GitHub Pages** - Gratis y automático
- **Feedback dinámico** - Mejora UX significativamente

### Lo que aprendimos 🎓
- **Contraste es crítico** - Accesibilidad no es opcional
- **Teoría antes de práctica** - Los usuarios necesitan contexto
- **Pausa es esencial** - La vida real interrumpe
- **Persistencia importa** - localStorage para configuraciones

### Errores comunes a evitar ⚠️
- No probar en móvil temprano
- Olvidar el base path en vite.config.js
- No hacer hard refresh después de deploy
- Ignorar los tiempos de lectura

---

## 🎯 PRÓXIMOS PASOS (Para futuros proyectos)

1. **Copiar este Skill** a la carpeta del nuevo proyecto
2. **Adaptar** stack y estructura según necesidades
3. **Seguir** el flujo de desarrollo documentado
4. **Iterar** basado en feedback del usuario
5. **Documentar** nuevos aprendizajes

---

**Skill creado:** Marzo 2026  
**Proyecto base:** Python Code Puzzle  
**Estado:** ✅ Probado en producción
