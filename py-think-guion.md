# 🎭 Guión en Espejo: Interacción Usuario-IA

**Proyecto:** Python Code Puzzle (py-think)  
**Fecha:** Marzo 2026  
**Participantes:** Usuario (desarrollador) + IA (Qwen Code)

---

## 📋 ÍNDICE

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Cronología de la Interacción](#cronología-de-la-interacción)
3. [Momentos de Alta Eficacia](#momentos-de-alta-eficacia)
4. [Momentos de Ineficacia (y su reversión)](#momentos-de-ineficacia-y-su-reversión)
5. [Patrones Exitosos](#patrones-exitosos)
6. [Lecciones para Futuras Interacciones](#lecciones-para-futuras-interacciones)

---

## 1️⃣ RESUMEN EJECUTIVO

### Contexto
Desarrollo de un juego educativo interactivo para enseñar Python, con estética 8-bit, usando React + Vite + TailwindCSS + GSAP.

### Objetivo Principal
Corregir bugs de producción y optimizar la experiencia de usuario.

### Resultados Obtenidos
- ✅ 5 bugs corregidos
- ✅ Documentación actualizada (README + SKILL)
- ✅ Proceso de construcción documentado
- ✅ Guión de interacción analizado

### Tiempo Total Aproximado
2-3 horas de interacción efectiva

---

## 2️⃣ CRONOLOGÍA DE LA INTERACCIÓN

### Fase 1: Diagnóstico Inicial

**Usuario:**
> "Este es el proyecto en que hay un par de cosas que no están funcionando: 'py-think'. Lee el README-md, y SKILL-Desarrollo-Juegos-Educativos.md."

**IA:**
- Lee archivos solicitados
- Identifica estructura del proyecto
- Solicita acceso al código fuente (App.jsx, gameData.jsx)

**Usuario:**
> "Adelante, por favor."

**IA:**
- Analiza el código
- Identifica 2 problemas principales:
  1. Formato del feedback (prefijos redundantes)
  2. Cursor no vuelve al terminal

---

### Fase 2: Implementación de Correcciones

**Problema 1: Feedback con prefijos**

**IA:**
> "Las explicaciones en gameData.jsx tienen prefijos como: '¡Exacto!', '¡Correcto!', '¡Bien!'... El título ya hace el trabajo."

**Acción:**
- Limpiar 30 explicaciones en gameData.jsx
- Remover prefijos redundantes

**Resultado:**
```javascript
// Antes
explicacion: '¡Exacto! Una variable es como una "caja"...'

// Después
explicacion: 'Una variable es como una "caja"...'
```

---

**Problema 2: Cursor no vuelve al terminal**

**IA:**
> "El autoFocus en el input solo funciona en el mount inicial. Necesitamos un useEffect con ref."

**Acción:**
- Agregar `inputRef = useRef(null)`
- Agregar `useEffect` que hace foco cuando cambia `numeroPregunta`
- Reemplazar `autoFocus` por `ref={inputRef}`

**Resultado:**
```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    inputRef.current?.focus();
  }, 50);
  return () => clearTimeout(timer);
}, [numeroPregunta]);
```

---

### Fase 3: Instalación del Entorno

**Usuario:**
> "¿Que extensión de npm instalo?"

**IA:**
- Proporciona instrucciones para instalar Node.js
- Detecta que npm no está disponible
- Intenta múltiples rutas de instalación

**Momento de ineficacia:**
- Varios intentos fallidos con nvm
- Paths incorrectos
- Comandos que no se ejecutan

**Resolución:**
- Instalación manual de Node.js v20.11.0
- Configuración del PATH en .bashrc
- Verificación exitosa: `node --version` → `v20.11.0`

---

### Fase 4: Testing y Nuevos Bugs

**Usuario:**
> "Texto explicativo, corregido y funcionando. El cursor no vuelve al terminal. Cuando hay un error: escribís algo distinto a 1, 2 o 3 para enviar respuesta, aparece un card que no cierra después de un tiempo lógico de lectura."

**IA:**
- Identifica que el useEffect del foco necesita dependencias adicionales
- Agrega timeout para cerrar el error card automáticamente

**Correcciones:**
```jsx
// Foco con feedback como dependencia
useEffect(() => {
  const timer = setTimeout(() => {
    inputRef.current?.focus();
  }, 50);
  return () => clearTimeout(timer);
}, [numeroPregunta, feedback]);

// Error card con auto-cierre
setTimeout(() => {
  setFeedback(null);
  inputRef.current?.focus();
}, 2000);
```

---

### Fase 5: Bug de Navegación

**Usuario:**
> "En la página final: el botón 'Volver al resúmen' te lleva al Inicio."

**IA:**
- Investiga la navegación entre pantallas
- Encuentra el bug en GlossaryScreen
- El botón usa `onRestart` en lugar de `onBack` cuando viene del Final

**Corrección:**
```jsx
// Antes
onClick={fromLevel !== null ? onBack : onRestart}

// Después
onClick={onBack}

// Y en el render:
onBack={glossaryFromLevel !== null ? backToTheory : backToFinal}
```

---

### Fase 6: Mejora de Contraste

**Usuario:**
> "Mejorá el contraste de los títulos en las respuestas correctas, se pierde un poco con el fondo."

**IA:**
- Identifica que `text-pixel-green` es muy oscuro sobre `bg-green-900/90`
- Cambia a `text-green-300` (verde claro)

**Resultado:**
```jsx
// Antes
className={feedback.type === 'success' ? 'text-pixel-green' : 'text-pixel-blue'}

// Después
className={feedback.type === 'success' ? 'text-green-300' : 'text-pixel-blue'}
```

---

### Fase 7: Documentación

**Usuario:**
> "Actualiza el README.md y el SKILL-Desarrollo-Juegos-Educativos.md. Escribí en un archivo md el proceso de construcción del sitio. Después, crea un texto con el Guión en espejo de nuestra interacción."

**IA:**
- Actualiza README.md con bugs corregidos y estructura actual
- Actualiza SKILL con lecciones de producción y patrones nuevos
- Crea PROCESO-CONSTRUCCION.md con metodología validada
- Crea este documento (py-think-guion.md)

---

## 3️⃣ MOMENTOS DE ALTA EFICACIA

### ✅ Análisis Inicial Preciso

**Lo que pasó:**
- Usuario pide leer 2 archivos específicos
- IA inmediatamente solicita App.jsx y gameData.jsx
- Identifica ambos problemas en la primera revisión

**Por qué funcionó:**
- Contexto claro desde el inicio
- IA pidió los archivos correctos sin divagar
- Diagnóstico rápido y preciso

**Patrón replicable:**
```
Usuario: "Lee X y Y, hay problemas con Z"
IA: "Necesito ver A y B para diagnosticar"
→ Solución en 1-2 iteraciones
```

---

### ✅ Corrección de Prefijos en Feedback

**Lo que pasó:**
- IA identifica redundancia: título "¡Correcto!" + mensaje "¡Exacto!..."
- Propone solución clara: limpiar prefijos
- Ejecuta 30 edits de una vez

**Por qué funcionó:**
- Problema bien definido
- Solución obvia una vez identificado
- IA ejecutó sin pedir permiso excesivo

**Patrón replicable:**
```
Problema: Redundancia en textos
Solución: Separar título del contenido
Ejecución: Edit masivo, sin iteraciones innecesarias
```

---

### ✅ Foco Automático con useEffect

**Lo que pasó:**
- IA identifica que `autoFocus` no funciona en re-renders
- Propone usar `useRef` + `useEffect`
- Implementa con delay de 50ms para timing correcto

**Por qué funcionó:**
- Patrón de React bien conocido
- IA explicó el porqué, no solo el cómo
- Timing ajustado (50ms) evita race conditions

**Patrón replicable:**
```
Problema: Input no recibe foco después de actualizar estado
Solución: useRef + useEffect con timeout corto
Clave: Cleanup con clearTimeout
```

---

### ✅ Navegación entre Pantallas

**Lo que pasó:**
- Bug: "Volver al resumen" lleva al Inicio en lugar del Final
- IA rastrea el flujo: FinalScreen → GlossaryScreen → ?
- Encuentra que `onBack` estaba hardcodeado a `backToTheory`

**Por qué funcionó:**
- IA leyó el código completo, no solo fragmentos
- Entendió la estructura de estados (`gameState`)
- Corrigió en 2 lugares simultáneamente

**Patrón replicable:**
```
Problema: Navegación incorrecta entre pantallas anidadas
Solución: Conditional en el handler según origen
Clave: Estado compartido (glossaryFromLevel)
```

---

## 4️⃣ MOMENTOS DE INEFICACIA (Y SU REVERSIÓN)

### ❌ Instalación de Node.js - Múltiples Intentos Fallidos

**Lo que pasó:**
```
Intento 1: "export PATH=.../vsodium.../node/bin:$PATH" → npm no encontrado
Intento 2: "nvm install 20" → nvm no encontrado
Intento 3: "curl ... | bash" → curl se cortó
Intento 4: Varios comandos sin resultado
```

**Tiempo perdido:** ~15-20 minutos

**Reversión (cómo debería haber sido):**
```
IA: "Tu sistema no tiene npm. Hay 3 opciones:
     1. sudo apt-get install nodejs npm (más rápido)
     2. Instalación manual con curl (intermedio)
     3. nvm (más flexible pero más complejo)
     
     ¿Cuál preferís?"

Usuario: "Opción 1"

IA: "Ejecutá: sudo apt-get update && sudo apt-get install -y nodejs npm"

→ Instalación en 2 minutos
```

**Lección:**
- Ofrecer opciones claras desde el inicio
- Priorizar la más simple primero
- No asumir que el usuario tiene permisos de sudo

---

### ❌ Diagnóstico Inicial del Cursor

**Lo que pasó:**
```
IA: "El problema es que el useEffect depende de numeroPregunta,
     pero cuando cambia, el input aún no está disponible."

Primera solución: useEffect con dependencias [numeroPregunta, feedback]

Usuario: "El cursor no vuelve al terminal."

IA: "El feedback se setea en null antes de onAnswer,
     pero el modal todavía está en el DOM."

Segunda solución: Reducir a solo [numeroPregunta] con delay de 50ms
```

**Tiempo perdido:** 1 iteración extra

**Reversión:**
```
IA (desde el inicio): "El foco necesita un delay porque el modal
     de feedback debe desaparecer primero. Vamos a usar 50ms."

→ Solución en 1 iteración
```

**Lección:**
- Anticipar problemas de timing en UI
- Explicar la limitación técnica (DOM async)
- Dar la solución completa desde el inicio

---

### ❌ Error Card sin Timeout

**Lo que pasó:**
```
Usuario reporta: "Error card no cierra"

IA: "El mensaje de error no tiene timeout."
```

**Tiempo perdido:** El usuario tuvo que reportar el bug después de testing

**Reversión:**
```
IA (durante la implementación del foco): 
  "También noté que el mensaje de error no tiene auto-cierre.
   ¿Querés que lo agregue ahora?"

→ Bug prevenido antes del testing
```

**Lección:**
- Pensar en casos edge durante la implementación
- Preguntar proactivamente sobre features relacionados
- Revisar TODO el flujo, no solo el problema reportado

---

## 5️⃣ PATRONES EXITOSOS

### Patrón 1: Diagnóstico → Plan → Ejecución

```
1. Usuario describe problema
2. IA analiza código relevante
3. IA propone plan con opciones
4. Usuario aprueba
5. IA ejecuta
6. Usuario testea
7. IA ajusta si es necesario
```

**Ejemplo exitoso:** Corrección de prefijos en feedback

---

### Patrón 2: Múltiples Correcciones en Paralelo

```
IA identifica 2 problemas relacionados:
1. Foco no funciona
2. Error no se cierra

Los implementa juntos porque:
- Mismo componente (QuestionScreen)
- Mismo patrón (setTimeout + focus)
- Testing simultáneo
```

**Ejemplo exitoso:** Correcciones de UX en QuestionScreen

---

### Patrón 3: Documentación Inmediata

```
Después de cada corrección:
- IA explica el cambio
- Muestra diff antes/después
- Da instrucciones de testing
```

**Ejemplo exitoso:** Todas las correcciones incluyeron:
- Explicación del problema
- Código antes/después
- Instrucciones de build/test

---

### Patrón 4: Contexto Preservado

```
IA mantiene contexto durante toda la sesión:
- Recuerda archivos modificados
- Referencia correcciones anteriores
- Construye sobre trabajo previo
```

**Ejemplo exitoso:** Navegación entre pantallas
- IA recordó que GlossaryScreen se usa desde Final y desde niveles
- Implementó conditional basado en `glossaryFromLevel`

---

## 6️⃣ LECCIONES PARA FUTURAS INTERACCIONES

### Para el Usuario

| Hacer | No Hacer |
|-------|----------|
| ✅ Dar contexto específico al inicio | ❌ Asumir que la IA conoce el proyecto |
| ✅ Reportar bugs inmediatamente | ❌ Acumular bugs para reportar juntos |
| ✅ Confirmar cuando algo funciona | ❌ Solo reportar cuando falla |
| ✅ Pedir explicaciones si no entiende | ❌ Aceptar soluciones sin entender |
| ✅ Priorizar problemas críticos | ❌ Mezclar bugs críticos con features opcionales |

---

### Para la IA

| Hacer | No Hacer |
|-------|----------|
| ✅ Pedir archivos específicos que necesita | ❌ Asumir que conoce el código |
| ✅ Ofrecer opciones de solución | ❌ Imponer una sola vía |
| ✅ Anticipar problemas edge | ❌ Solo solucionar lo reportado |
| ✅ Explicar el porqué técnico | ❌ Solo dar el código |
| ✅ Confirmar entendimiento antes de actuar | ❌ Asumir que entendió correctamente |
| ✅ Documentar cambios mientras hace | ❌ Dejar documentación para el final |

---

### Protocolo Óptimo Propuesto

```
1. USUARIO: "Tengo X problema en Y contexto. Archivos relevantes: A, B"

2. IA: "Para diagnosticar, necesito ver: C, D. ¿Los abro?"

3. USUARIO: "Sí" (o proporciona más contexto)

4. IA: "Diagnóstico: [problema]. Opciones:
     - Opción A: [solución rápida, trade-offs]
     - Opción B: [solución completa, más tiempo]
     ¿Cuál preferís?"

5. USUARIO: "Opción B"

6. IA: "Voy a hacer: [pasos específicos]. ¿Procedo?"

7. USUARIO: "Sí"

8. IA: [Ejecuta + documenta]

9. USUARIO: "Funciona" o "No funciona, pasa X"

10. IA: [Ajusta o confirma éxito]
```

---

## 📊 MÉTRICAS DE LA INTERACCIÓN

| Métrica | Valor |
|---------|-------|
| **Tiempo total** | ~2-3 horas |
| **Bugs corregidos** | 5 |
| **Archivos modificados** | 3 (App.jsx, gameData.jsx, README.md, SKILL.md) |
| **Archivos creados** | 3 (PROCESO-CONSTRUCCION.md, py-think-guion.md, este) |
| **Iteraciones efectivas** | ~15 |
| **Iteraciones perdidas** | ~5 (instalación de Node) |
| **Eficiencia estimada** | 75% |

---

## 🎯 RECOMENDACIONES FINALES

### Para Maximizar Eficiencia

1. **Setup del entorno ANTES de empezar**
   - Tener Node.js instalado
   - Tener el proyecto corriendo localmente
   - Verificar que build funciona

2. **Contexto completo al inicio**
   - Links a archivos relevantes
   - Descripción clara del objetivo
   - Restricciones conocidas

3. **Testing incremental**
   - Testear después de cada corrección
   - Reportar inmediatamente si falla
   - Confirmar cuando funciona

4. **Documentación paralela**
   - Documentar mientras se desarrolla
   - No dejar para el final
   - IA puede generar docs automáticamente

5. **Comunicación asíncrona efectiva**
   - Mensajes completos, no fragmentados
   - Una solicitud por mensaje
   - Confirmaciones explícitas

---

## 📝 CHECKLIST PARA PRÓXIMO PROYECTO

### Antes de Empezar

- [ ] Entorno de desarrollo configurado
- [ ] Proyecto corriendo localmente
- [ ] Build funciona sin errores
- [ ] Archivos relevantes identificados

### Durante el Desarrollo

- [ ] Contexto claro al inicio de cada tarea
- [ ] IA pide archivos que necesita
- [ ] IA propone plan antes de ejecutar
- [ ] Usuario confirma antes de proceder
- [ ] Testing después de cada cambio
- [ ] Documentación actualizada incrementalmente

### Al Finalizar

- [ ] Todos los bugs corregidos verificados
- [ ] Build de producción sin errores
- [ ] README actualizado
- [ ] Lecciones documentadas
- [ ] Guión de interacción revisado

---

**Documento creado:** Marzo 2026  
**Proyecto:** Python Code Puzzle (py-think)  
**Participantes:** Usuario + Qwen Code  
**Estado:** ✅ Completado
