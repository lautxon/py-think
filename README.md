# Python Code Puzzle 🎮

**Aprende a Pensar como Programador** - Un juego educativo 2D estilo 8-bit que enseña Python.

## 🌟 Características Principales

### Introducción a Python
Antes de comenzar el juego, encontrarás una página educativa que explica:
- **¿Qué es Python?**: Historia y características del lenguaje
- **Tipo de lenguaje**: Formal, de programación, de alto nivel, orientado a objetos
- **¿Por qué y para qué se usa?**: Casos de uso en la industria
- **¿Cómo se usa?**: Sintaxis básica y ejemplos
- **¿Quiénes lo usan?**: NASA, Spotify, Netflix, Google, Instagram, Amazon, Tesla, Meta
- **Python e IA**: Su importancia en Inteligencia Artificial y Machine Learning
- **Importancia para el futuro**: Demanda laboral y aplicaciones

### 🎯 3 Niveles de Aprendizaje

1. **Nivel Fundamentos** 🌱
   - Conceptos básicos de Python
   - Variables, tipos de datos, operadores, comentarios
   - 10 preguntas educativas

2. **Nivel Intermedio** 🚀
   - Estructuras de control (if, for)
   - Funciones, listas, diccionarios
   - 10 preguntas desafiantes

3. **Nivel Avanzado** 💎
   - Complejidad temporal, Big O
   - Decorators, generators, PEP 8
   - Duck typing, recursividad, GIL
   - 10 preguntas de nivel senior

### ✨ Experiencia Visual
- Estética 8-bit retro
- Animaciones fluidas con GSAP
- Terminal virtual interactiva
- Feedback educativo sin frustración
- Selector de contraste (accesibilidad)

### 📚 Contenido Industrial
Cada nivel incluye:
- Relevancia en la industria tech
- Expectativas por nivel de experiencia
- Habilidades valoradas por empresas

---

## 🛠️ Stack Tecnológico

| Herramienta | Versión | Propósito |
|-------------|---------|-----------|
| **React** | 19.x | Framework UI |
| **Vite** | 6.x | Build tool + Dev server |
| **TailwindCSS** | 3.4.17 | Estilos utilitarios |
| **GSAP** | 3.x | Animaciones profesionales |
| **Lucide Icons** | 0.x | Iconos modernos |

---

## 📦 Instalación

### Requisitos previos
- **Node.js** v20.x (incluye npm)
- **npm** v10.x

### Pasos de instalación

```bash
# 1. Clonar o navegar al directorio del proyecto
cd pcp

# 2. Instalar dependencias
npm install
```

---

## 🚀 Comandos Disponibles

```bash
# Desarrollo (con hot reload)
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview
```

---

## 📁 Estructura del Proyecto

```
pcp/
├── src/
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Entry point
│   ├── index.css            # Estilos globales + Tailwind
│   ├── i18n.js              # Configuración de internacionalización
│   └── data/
│       └── gameData.jsx     # Contenido del juego (preguntas, teoría)
├── index.html               # HTML base
├── package.json             # Dependencias
├── tailwind.config.js       # Configuración de Tailwind
├── postcss.config.js        # Configuración de PostCSS
└── vite.config.js           # Configuración de Vite
```

---

## 🎮 Cómo Jugar

1. **Inicio**: Hacé clic en "INICIAR JUEGO"
2. **Introducción a Python**: Leé la información sobre Python
3. **Niveles**: Leé la información industrial de cada nivel
4. **Teoría**: Explorá los conceptos clave antes de cada nivel
5. **Preguntas**: Escribí 1, 2 o 3 en la terminal virtual
6. **Feedback**: Recibí explicaciones educativas
   - ✅ **Correcto**: Título + explicación
   - 💡 **Incorrecto**: Opción correcta + explicación
7. **Progreso**: Avanzá completando los 3 niveles
8. **Resumen**: Aprendé cómo piensa un programador
9. **Futuro Profesional**: Descubrí tu potencial con Python

---

## ⚙️ Configuración

### Selector de Contraste
El juego incluye 3 modos de contraste accesibles:
- **Soft** (default): Verde suave (#008042)
- **Normal**: Verde brillante (#00ff88)
- **High**: Verde alto contraste (#00cc6a)

La configuración se guarda en `localStorage` y persiste entre sesiones.

### Atajos de Teclado
| Tecla | Acción |
|-------|--------|
| `P` o `ESC` | Pausar juego |
| `N` | Ver apuntes (durante preguntas) |

---

## 🎨 Personalización

### Cambiar colores del tema
Editar `tailwind.config.js`:
```javascript
colors: {
  'pixel-green': 'var(--pixel-green, #008042)',
  'pixel-blue': '#00d4ff',
  'pixel-purple': '#9d4edd',
  // ...
}
```

### Modificar contenido
Editar `src/data/gameData.jsx`:
- Agregar/editar preguntas
- Modificar teoría
- Cambiar textos industriales

---

## 🌐 Deploy a GitHub Pages

### Opción A: Manual
```bash
# 1. Build
npm run build

# 2. Crear rama gh-pages
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Deploy"
git push origin gh-pages --force

# 3. Configurar en GitHub
# Settings → Pages → Source: gh-pages
```

### Opción B: GitHub Actions (Automático)
Ver `.github/workflows/deploy.yml`

---

## 📊 Métricas del Proyecto

| Métrica | Valor |
|---------|-------|
| **Niveles** | 3 |
| **Preguntas totales** | 30 |
| **Tamaño del bundle** | ~434 KB |
| **Tiempo de carga** | < 3s |

---

## 🐛 Bugs Conocidos y Soluciones

| Problema | Solución |
|----------|----------|
| Cursor no vuelve al terminal | ✅ Corregido en v1.1 |
| Feedback con texto redundante | ✅ Corregido en v1.1 |
| Error card no cierra | ✅ Corregido en v1.1 |
| Botón "Volver al resumen" va al inicio | ✅ Corregido en v1.1 |
| Contraste bajo en título correcto | ✅ Corregido en v1.1 |

---

## 📝 Licencia

Proyecto educativo de código abierto.

---

**Hecho con ❤️ para futuros desarrolladores**

*Última actualización: Marzo 2026*
