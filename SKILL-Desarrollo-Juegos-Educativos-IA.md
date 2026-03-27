# 🤖 Skill: Desarrollo de Juegos Educativos Interactivos (Versión Genérica para IAs)

**Metodología extraída de proyectos educativos con React + Vite**

---

## 📋 ÍNDICE

1. [Propósito del Skill](#propósito-del-skill)
2. [Arquitectura Base](#arquitectura-base)
3. [Componentes Estándar](#componentes-estándar)
4. [Patrones Reutilizables](#patrones-reutilizables)
5. [Flujo de Implementación](#flujo-de-implementación)
6. [Checklist de Calidad](#checklist-de-calidad)
7. [Adaptación por Contexto](#adaptación-por-contexto)

---

## 🎯 PROPÓSITO DEL SKILL

Este Skill proporciona una **metodología estandarizada** para desarrollar aplicaciones educativas interactivas con las siguientes características:

- **Rápida iteración** - De concepto a MVP en una sesión
- **Código mantenible** - Separación clara entre contenido y lógica
- **UX pulida** - Animaciones, feedback, accesibilidad
- **Deploy sencillo** - GitHub Pages o similar
- **Escalable** - Fácil agregar contenido sin refactorizar

---

## 🏗️ ARQUITECTURA BASE

### Estructura de Directorios
```
proyecto/
├── src/
│   ├── App.jsx              # Componente principal + sub-componentes
│   ├── main.jsx             # Entry point de React
│   ├── index.css            # Estilos globales + utilidades
│   └── data/
│       └── content.jsx      # TODO el contenido (preguntas, teoría, etc.)
├── index.html               # HTML base
├── vite.config.js           # Configuración del build
├── tailwind.config.js       # Configuración de estilos
└── package.json             # Dependencias
```

### Separación de Responsabilidades
| Archivo | Contiene | ¿Lo edita el usuario? |
|---------|----------|----------------------|
| `content.jsx` | Datos del curso/juego | ✅ Sí (frecuente) |
| `App.jsx` | Lógica y componentes | ❌ No (una vez creado) |
| `tailwind.config.js` | Tema visual | ⚠️ Ocasionalmente |
| `vite.config.js` | Configuración de build | ❌ No |

---

## 🧩 COMPONENTES ESTÁNDAR

### 1. Pantalla de Inicio
**Propósito:** Presentar el juego/curso y botón de inicio.

**Elementos clave:**
- Título llamativo
- Descripción breve
- Botón "COMENZAR"
- Instrucciones mínimas
- Opcional: botón de configuración

**Estado:** `gameState === 'home'`

---

### 2. Pantalla de Teoría
**Propósito:** Enseñar conceptos antes de la práctica.

**Elementos clave:**
- Título del tema
- Introducción
- Temas en formato grid (clickeables)
- Contenido expandible por sección
- Ejemplos de código
- Errores comunes
- Consejo final

**Estado:** `gameState === 'theory'`

---

### 3. Pantalla de Preguntas
**Propósito:** Evaluar comprensión del usuario.

**Elementos clave:**
- Barra de progreso
- Pregunta visible
- Opciones de respuesta
- Input o botones de selección
- Terminal/área de respuesta
- Botón de apuntes (opcional)
- Botón de pausa (opcional)
- Feedback inmediato

**Estado:** `gameState === 'question'`

---

### 4. Pantalla de Feedback
**Propósito:** Informar si la respuesta fue correcta.

**Elementos clave:**
- Indicador visual (✅/❌)
- Mensaje personalizado
- Explicación detallada
- Tiempo de lectura adecuado
- Transición automática

**Duración:** Dinámica según longitud del texto

---

### 5. Pantalla Final
**Propósito:** Resumir aprendizaje y cerrar experiencia.

**Elementos clave:**
- Mensaje de felicitación
- Resumen de logros
- Conceptos aprendidos
- Reflexión final
- Botón "REINICIAR"

**Estado:** `gameState === 'final'`

---

## 🔄 PATRONES REUTILIZABLES

### Patrón 1: Gestión de Estados del Juego
```javascript
const [gameState, setGameState] = useState('home');
// Estados posibles: 'home' | 'theory' | 'question' | 'final'

const [currentLevel, setCurrentLevel] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState({ correct: 0, total: 0 });
```

### Patrón 2: Estructura de Datos de Contenido
```javascript
export const content = {
  niveles: [
    {
      id: 'nivel-1',
      nombre: 'Nombre del Nivel',
      teoria: { /* ... */ },
      conceptosClave: [/* ... */],
      preguntas: [/* ... */]
    }
  ],
  finalSummary: { /* ... */ }
};
```

### Patrón 3: Navegación entre Estados
```javascript
const handleAnswer = (isCorrect) => {
  // 1. Actualizar puntaje
  setScore(prev => ({
    correct: prev.correct + (isCorrect ? 1 : 0),
    total: prev.total + 1
  }));
  
  // 2. Verificar si hay más preguntas
  if (currentQuestion < totalPreguntas - 1) {
    setCurrentQuestion(prev => prev + 1);
  } else if (currentLevel < totalLevels - 1) {
    // 3. Siguiente nivel
    setCurrentLevel(prev => prev + 1);
    setGameState('theory');
  } else {
    // 4. Juego completado
    setGameState('final');
  }
};
```

### Patrón 4: Animaciones con GSAP
```javascript
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo('.elemento',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, ref);
  return () => ctx.revert();
}, []);
```

### Patrón 5: Feedback con Tiempo Dinámico
```javascript
const calcularTiempoFeedback = (texto) => {
  const palabras = texto.split(/\s+/).length;
  return Math.min(
    Math.max(2000 + (palabras * 150), 3000),
    10000
  );
};
```

### Patrón 6: Persistencia de Configuración
```javascript
const [config, setConfig] = useState(() => {
  return localStorage.getItem('config-key') || valorPorDefecto;
});

useEffect(() => {
  localStorage.setItem('config-key', config);
}, [config]);
```

---

## 📝 FLUJO DE IMPLEMENTACIÓN

### Fase 1: Setup (15 minutos)
```bash
npm create vite@latest proyecto -- --template react
cd proyecto
npm install
npm install gsap lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Configuraciones:**
1. `tailwind.config.js` - Agregar colores y fuentes personalizadas
2. `src/index.css` - Agregar `@tailwind` directives
3. `vite.config.js` - Configurar `base: '/nombre-repo/'`

---

### Fase 2: Estructura de Datos (30 minutos)
Crear `src/data/content.jsx` con:
- [ ] 3 niveles definidos
- [ ] Teoría para cada nivel (4-6 temas)
- [ ] 10 preguntas por nivel
- [ ] Conceptos clave (6-9 por nivel)
- [ ] Pantalla final (resumen)

---

### Fase 3: Componentes Principales (1 hora)
Crear en `src/App.jsx`:
- [ ] `HomeScreen` - Pantalla de inicio
- [ ] `TheoryScreen` - Pantalla de teoría
- [ ] `QuestionScreen` - Pantalla de preguntas
- [ ] `FinalScreen` - Pantalla final
- [ ] `App` - Componente principal con estado

---

### Fase 4: Features Extra (1-2 horas)
Implementar según prioridad:
- [ ] Barra de progreso visual
- [ ] Panel de apuntes
- [ ] Selector de contraste
- [ ] Pantalla de pausa
- [ ] Tooltips de conceptos
- [ ] Feedback dinámico

---

### Fase 5: Testing y Deploy (30 minutos)
```bash
# Test local
npm run dev

# Build producción
npm run build

# Deploy a GitHub Pages
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Initial deploy"
git push origin gh-pages --force
```

---

## ✅ CHECKLIST DE CALIDAD

### Funcionalidad
- [ ] Todas las pantallas navegan correctamente
- [ ] Las respuestas se procesan correctamente
- [ ] El progreso se guarda entre preguntas
- [ ] La pantalla final muestra al completar

### UX
- [ ] Las animaciones son suaves (60fps)
- [ ] El feedback es claro e inmediato
- [ ] Los tiempos de lectura son adecuados
- [ ] Hay indicadores de progreso visibles

### Accesibilidad
- [ ] Contraste de colores es adecuado (WCAG AA)
- [ ] Hay múltiples formas de navegar (click + teclado)
- [ ] Los textos son legibles (tamaño, fuente)
- [ ] Hay opciones de configuración de contraste

### Performance
- [ ] Bundle total < 500 KB
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] Lighthouse score > 90

### Código
- [ ] Componentes son reutilizables
- [ ] El contenido está separado de la lógica
- [ ] No hay console.log en producción
- [ ] El código está comentado donde es necesario

---

## 🔧 ADAPTACIÓN POR CONTEXTO

### Para cambiar el Tema Visual
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'primary': '#color-principal',
      'secondary': '#color-secundario',
      'accent': '#color-acento',
    }
  }
}
```

### Para cambiar la Estética
| Estética | Font Family | Efectos | Colores |
|----------|-------------|---------|---------|
| Retro 8-bit | 'Press Start 2P' | Scanlines, pixel art | Neón |
| Moderno | 'Inter', system-ui | Glassmorphism, gradientes | Pasteles |
| Académico | 'Georgia', serif | Bordes clásicos, sombras | Sobrios |
| Minimal | System UI | Espacio negativo, líneas finas | Blanco/Negro |

### Para cambiar la Mecánica de Juego
| Mecánica | Implementación |
|----------|----------------|
| Opción múltiple | Botones con onClick |
| Completar espacio | Input con validación de string |
| Arrastrar y soltar | @dnd-kit library |
| Ordenar elementos | Array + drag-drop |
| Emparejar | Grid de cards con estado |

### Para cambiar el Tipo de Contenido
| Tipo | Estructura de Datos |
|------|---------------------|
| Curso de programación | Código + explicación + ejercicios |
| Idiomas | Vocabulario + gramática + práctica |
| Matemáticas | Teoría + ejemplos + problemas |
| Historia | Línea de tiempo + eventos + quiz |

---

## 📊 PREGUNTAS DE DIAGNÓSTICO (Para entender el proyecto)

Antes de comenzar, preguntar al usuario:

1. **¿Cuál es el tema del curso/juego?** (Python, matemáticas, historia, etc.)
2. **¿Qué edad tiene tu audiencia?** (niños, adolescentes, adultos)
3. **¿Qué estética prefieres?** (8-bit, moderno, minimal, etc.)
4. **¿Cuántos niveles/capítulos tendrá?**
5. **¿Qué tipo de preguntas usarás?** (opción múltiple, completar, etc.)
6. **¿Necesitas features especiales?** (sonidos, pausa, puntaje, etc.)
7. **¿Dónde lo vas a deployar?** (GitHub Pages, Vercel, Netlify)

---

## 🚨 ERRORES COMUNES Y CÓMO EVITARLOS

| Error | Síntoma | Solución |
|-------|---------|----------|
| `base` incorrecto en vite.config.js | Assets 404 en production | Usar `base: '/nombre-repo/'` |
| No hacer hard refresh | Cambios no se ven | Ctrl+Shift+R después de deploy |
| Contenido en App.jsx | Difícil editar preguntas | Mover a `data/content.jsx` |
| No limpiar estado al reiniciar | Puntaje no se resetea | Resetear todos los states en restart |
| Tiempos de feedback fijos | Muy corto/largo para algunos | Usar fórmula dinámica |

---

## 📈 MÉTRICAS DE ÉXITO DEL PROYECTO

| Métrica | Excelente | Aceptable | Necesita Mejora |
|---------|-----------|-----------|-----------------|
| Tiempo desarrollo | < 6 horas | 6-12 horas | > 12 horas |
| Bundle size | < 300 KB | 300-500 KB | > 500 KB |
| Lighthouse | > 95 | 80-95 | < 80 |
| Contenido | 30+ preguntas | 15-30 | < 15 |
| Features | 6+ | 3-5 | < 3 |

---

## 🎓 APRENDIZAJES CLAVE (Para mejorar iteraciones futuras)

### Lo que siempre funciona ✅
- Separar contenido de lógica
- Feedback inmediato al usuario
- Progreso visual claro
- Configuración persistente

### Lo que a veces es necesario ⚠️
- Sonidos (depende de la audiencia)
- Animaciones complejas
- Sistema de logros

### Lo que raramente vale la pena ❌
- Autenticación de usuarios
- Backend complejo
- Base de datos (para contenido estático)

---

## 📝 TEMPLATE DE RESPUESTA INICIAL (Para IAs)

Cuando un usuario pide crear un juego educativo:

```
¡Excelente proyecto! Para crear tu [TIPO DE JUEGO/CURSO] de [TEMA], 
voy a seguir esta metodología:

**Stack:** React + Vite + TailwindCSS + GSAP
**Deploy:** GitHub Pages (gratis, automático)
**Tiempo estimado:** 4-8 horas

**Estructura propuesta:**
1. [X] niveles con teoría y preguntas
2. Pantallas: Inicio → Teoría → Preguntas → Final
3. Features: [LISTAR FEATURES RELEVANTES]

**¿Te parece si empezamos con el setup inicial?**

Primero necesito saber:
1. ¿Cuántos niveles querés?
2. ¿Qué tipo de preguntas prefieres?
3. ¿Tenés preferencia de estética/colores?
```

---

**Skill creado:** Marzo 2026  
**Basado en:** Python Code Puzzle y proyectos similares  
**Versión:** 1.0 (Genérica para IAs)  
**Estado:** ✅ Probado en producción
