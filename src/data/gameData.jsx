export const gameData = {
  niveles: [
    {
      id: 'fundamentos',
      nombre: 'Nivel Fundamentos',
      icono: '🌱',
      color: 'pixel-green',
      descripcion: '¡Bienvenido al mundo de la programación!',
      industriaInfo: `En la industria tech, los fundamentos son la base de todo desarrollo profesional. 
      
Las empresas buscan programadores que comprendan los conceptos básicos sólidos antes de especializarse.

Este nivel representa el primer año de un desarrollador junior - aquí construyes las bases que te permitirán crecer.`,
      preguntas: [
        {
          pregunta: '¿Qué es una variable en Python?',
          opciones: [
            'Un contenedor que almacena datos en memoria',
            'Una función matemática compleja',
            'Un tipo de error en el código'
          ],
          correcta: 0,
          explicacion: '¡Exacto! Una variable es como una "caja" con etiqueta donde guardas información que tu programa necesita usar o modificar.'
        },
        {
          pregunta: '¿Cuál es la forma correcta de crear una variable en Python?',
          opciones: [
            'var nombre = "Juan"',
            'nombre = "Juan"',
            'let nombre: String = "Juan"'
          ],
          correcta: 1,
          explicacion: '¡Correcto! Python usa sintaxis simple: solo escribes el nombre de la variable seguido del valor. Sin palabras clave como "var" o "let".'
        },
        {
          pregunta: '¿Qué tipo de dato es "Hola Mundo"?',
          opciones: [
            'Integer (entero)',
            'String (cadena de texto)',
            'Boolean (booleano)'
          ],
          correcta: 1,
          explicacion: '¡Bien! Un String es una secuencia de caracteres entre comillas. Los strings representan texto en tu programa.'
        },
        {
          pregunta: '¿Qué operador se usa para multiplicar en Python?',
          opciones: [
            'x',
            '*',
            '#'
          ],
          correcta: 1,
          explicacion: '¡Exacto! El asterisco (*) es el operador de multiplicación en Python y en la mayoría de lenguajes de programación.'
        },
        {
          pregunta: '¿Qué hace la función print()?',
          opciones: [
            'Imprime en papel',
            'Muestra texto en la consola/terminal',
            'Crea un archivo PDF'
          ],
          correcta: 1,
          explicacion: '¡Correcto! print() muestra información en la pantalla (consola). Es fundamental para ver resultados y depurar código.'
        },
        {
          pregunta: '¿Cuál es el resultado de: 10 + 5 * 2?',
          opciones: [
            '30',
            '20',
            '15'
          ],
          correcta: 1,
          explicacion: '¡Bien pensado! Primero se evalúa 5*2=10 (precedencia), luego 10+10=20. El orden de operaciones es crucial en programación.'
        },
        {
          pregunta: '¿Qué es un comentario en Python?',
          opciones: [
            'Un error del programa',
            'Texto que Python ignora, usado para explicar el código',
            'Una función especial'
          ],
          correcta: 1,
          explicacion: '¡Exacto! Los comentarios (con #) son notas para humanos. El código se lee más fácilmente y es esencial para trabajar en equipo.'
        },
        {
          pregunta: '¿Cómo se crea un comentario en Python?',
          opciones: [
            '// Esto es un comentario',
            '<!-- Esto es un comentario -->',
            '# Esto es un comentario'
          ],
          correcta: 2,
          explicacion: '¡Correcto! Python usa el símbolo # para comentarios de una línea. Los comentarios documentan tu pensamiento como programador.'
        },
        {
          pregunta: '¿Qué tipo de dato es True?',
          opciones: [
            'String',
            'Boolean',
            'Integer'
          ],
          correcta: 1,
          explicacion: '¡Bien! Boolean representa verdadero (True) o falso (False). Es fundamental para tomar decisiones en tu código.'
        },
        {
          pregunta: '¿Qué función usas para saber el tipo de dato de una variable?',
          opciones: [
            'check()',
            'type()',
            'typeof()'
          ],
          correcta: 1,
          explicacion: '¡Exacto! type() te dice qué tipo de dato es una variable. Conocer tus datos es esencial para programar correctamente.'
        }
      ]
    },
    {
      id: 'intermedio',
      nombre: 'Nivel Intermedio',
      icono: '🚀',
      color: 'pixel-blue',
      descripcion: '¡Domina la lógica de programación!',
      industriaInfo: `En el nivel intermedio, desarrollas habilidades que las empresas valoran en desarrolladores mid-level.

La capacidad de estructurar lógica compleja y resolver problemas eficientemente es lo que separa a los juniors de los mid-levels.

Este nivel representa habilidades de un desarrollador con 2-3 años de experiencia.`,
      preguntas: [
        {
          pregunta: '¿Qué estructura usas para ejecutar código solo si una condición es verdadera?',
          opciones: [
            'for loop',
            'if statement',
            'def function'
          ],
          correcta: 1,
          explicacion: '¡Correcto! if permite ejecutar código condicionalmente. El control de flujo es el corazón de la lógica de programación.'
        },
        {
          pregunta: '¿Cuál es la sintaxis correcta para un if en Python?',
          opciones: [
            'if (x > 5) { }',
            'if x > 5:',
            'if x > 5 then:'
          ],
          correcta: 1,
          explicacion: '¡Bien! Python usa dos puntos (:) e indentación, no llaves. La sintaxis limpia de Python refleja su filosofía de legibilidad.'
        },
        {
          pregunta: '¿Qué es un bucle for?',
          opciones: [
            'Una función matemática',
            'Una estructura que repite código un número determinado de veces',
            'Un tipo de variable'
          ],
          correcta: 1,
          explicacion: '¡Exacto! Los bucles for iteran sobre secuencias. Automatizar tareas repetitivas es poder real en programación.'
        },
        {
          pregunta: '¿Qué hace range(5)?',
          opciones: [
            'Crea una lista [0, 1, 2, 3, 4]',
            'Crea una lista [1, 2, 3, 4, 5]',
            'Devuelve el número 5'
          ],
          correcta: 0,
          explicacion: '¡Correcto! range(5) genera números del 0 al 4. Python empieza en 0 por convención - entender esto evita bugs comunes.'
        },
        {
          pregunta: '¿Qué es una lista en Python?',
          opciones: [
            'Un tipo de bucle',
            'Una colección ordenada y mutable de elementos',
            'Una función especial'
          ],
          correcta: 1,
          explicacion: '¡Bien! Las listas almacenan múltiples valores. Las estructuras de datos son herramientas fundamentales para organizar información.'
        },
        {
          pregunta: '¿Cómo accedes al primer elemento de una lista?',
          opciones: [
            'lista[1]',
            'lista[0]',
            'lista.first()'
          ],
          correcta: 1,
          explicacion: '¡Exacto! Python usa indexación desde 0. El primer elemento está en posición 0, no en 1. Esto es consistente en muchos lenguajes.'
        },
        {
          pregunta: '¿Qué es una función?',
          opciones: [
            'Un tipo de variable',
            'Un bloque de código reutilizable que realiza una tarea específica',
            'Un error de sintaxis'
          ],
          correcta: 1,
          explicacion: '¡Correcto! Las funciones encapsulan lógica. El código reutilizable y modular es esencial en desarrollo profesional.'
        },
        {
          pregunta: '¿Qué palabra clave usas para definir una función en Python?',
          opciones: [
            'function',
            'def',
            'func'
          ],
          correcta: 1,
          explicacion: '¡Bien! def define funciones en Python. Los nombres claros (como def) hacen el código más legible - una prioridad en Python.'
        },
        {
          pregunta: '¿Qué es un diccionario en Python?',
          opciones: [
            'Una lista de palabras',
            'Una colección de pares clave-valor',
            'Un tipo de bucle'
          ],
          correcta: 1,
          explicacion: '¡Exacto! Los diccionarios almacenan datos como clave:valor. Son como bases de datos en miniatura - esenciales para datos estructurados.'
        },
        {
          pregunta: '¿Qué hace el operador ==?',
          opciones: [
            'Asigna un valor',
            'Compara si dos valores son iguales',
            'Suma dos valores'
          ],
          correcta: 1,
          explicacion: '¡Correcto! == compara igualdad (devuelve True/False). Distinguir entre = (asignar) y == (comparar) es fundamental.'
        }
      ]
    },
    {
      id: 'avanzado',
      nombre: 'Nivel Avanzado',
      icono: '💎',
      color: 'pixel-purple',
      descripcion: '¡Piensa como un ingeniero de software!',
      industriaInfo: `El nivel avanzado representa habilidades senior que las empresas buscan para roles de liderazgo técnico.

Los seniors no solo escriben código - diseñan soluciones, optimizan performance y anticipan problemas.

Este nivel refleja el pensamiento de un desarrollador senior o tech lead con 5+ años de experiencia.`,
      preguntas: [
        {
          pregunta: '¿Qué es la complejidad temporal?',
          opciones: [
            'Qué tan difícil es entender el código',
            'Cómo el tiempo de ejecución crece con el tamaño de entrada',
            'La cantidad de líneas de código'
          ],
          correcta: 1,
          explicacion: '¡Exacto! La complejidad temporal (Big O) mide eficiencia. Los seniors piensan en escalabilidad desde el inicio.'
        },
        {
          pregunta: '¿Qué es una lista por comprensión (list comprehension)?',
          opciones: [
            'Una forma larga de crear listas',
            'Una sintaxis concisa para crear listas en una línea',
            'Un tipo de error'
          ],
          correcta: 1,
          explicacion: '¡Correcto! Las list comprehensions son Pythonic - código conciso y legible. Python valora la elegancia en la solución.'
        },
        {
          pregunta: '¿Qué es un decorator en Python?',
          opciones: [
            'Un comentario especial',
            'Una función que modifica el comportamiento de otra función',
            'Un tipo de variable global'
          ],
          correcta: 1,
          explicacion: '¡Bien! Los decorators son funciones de orden superior. Este patrón permite código modular y reutilizable - clave en arquitecturas grandes.'
        },
        {
          pregunta: '¿Qué es PEP 8?',
          opciones: [
            'Una versión de Python',
            'La guía de estilo oficial de Python',
            'Un tipo de error común'
          ],
          correcta: 1,
          explicacion: '¡Exacto! PEP 8 define convenciones de estilo. El código consistente facilita el trabajo en equipo - crucial en la industria.'
        },
        {
          pregunta: '¿Qué es un generator en Python?',
          opciones: [
            'Una función que crea archivos',
            'Una función que produce valores uno a la vez usando yield',
            'Un tipo de clase'
          ],
          correcta: 1,
          explicacion: '¡Correcto! Los generators son eficientes en memoria. Los seniors optimizan recursos - importante con grandes volúmenes de datos.'
        },
        {
          pregunta: '¿Qué significa "Python es interpretado"?',
          opciones: [
            'Que Python habla muchos idiomas',
            'Que el código se ejecuta línea por línea sin compilación previa',
            'Que Python es más lento que otros lenguajes'
          ],
          correcta: 1,
          explicacion: '¡Bien! Ser interpretado permite desarrollo rápido y debugging interactivo. Cada tipo de lenguaje tiene sus ventajas.'
        },
        {
          pregunta: '¿Qué es el duck typing?',
          opciones: [
            'Un tipo de error en Python',
            'Un concepto donde importa lo que hace un objeto, no su tipo',
            'Una librería de Python'
          ],
          correcta: 1,
          explicacion: '¡Exacto! "Si camina como pato y hace cuac, es un pato". Python se enfoca en comportamiento, no tipos rígidos - flexibilidad poderosa.'
        },
        {
          pregunta: '¿Qué es un contexto manager (with statement)?',
          opciones: [
            'Una forma de manejar usuarios',
            'Un bloque que maneja automáticamente recursos (como archivos)',
            'Un tipo de decorator'
          ],
          correcta: 1,
          explicacion: '¡Correcto! with maneja recursos automáticamente (cierra archivos, etc.). La gestión proper de recursos previene bugs y memory leaks.'
        },
        {
          pregunta: '¿Qué es la recursividad?',
          opciones: [
            'Un error infinito',
            'Una función que se llama a sí misma',
            'Un tipo de bucle for'
          ],
          correcta: 1,
          explicacion: '¡Bien! La recursividad resuelve problemas dividiéndolos en subproblemas. Es un patrón mental poderoso en algoritmos avanzados.'
        },
        {
          pregunta: '¿Qué es GIL en Python?',
          opciones: [
            'Una librería gráfica',
            'Global Interpreter Lock - limita ejecución paralela de threads',
            'Un tipo de excepción'
          ],
          correcta: 1,
          explicacion: '¡Exacto! El GIL es una limitación de CPython. Los seniors entienden las limitaciones de sus herramientas y trabajan con/contra ellas.'
        }
      ]
    }
  ],
  finalSummary: {
    titulo: '¡Felicidades, Programador!',
    items: [
      {
        titulo: '🧩 Pensamiento Descompuesto',
        descripcion: 'Un programador divide problemas grandes en problemas pequeños y manejables. Esta habilidad se llama "descomposición" y es fundamental en cualquier lenguaje.'
      },
      {
        titulo: '🔍 Pensamiento Abstracto',
        descripcion: 'Los programadores identifican patrones y crean soluciones generales. La abstracción permite escribir código que funciona en múltiples situaciones.'
      },
      {
        titulo: '📝 Pensamiento Algorítmico',
        descripcion: 'Pensar paso a paso, secuencialmente. Un algoritmo es simplemente una serie de instrucciones para resolver un problema.'
      },
      {
        titulo: '🐛 Mentalidad de Debugging',
        descripcion: 'Los errores no son fracasos - son información. Los programadores ven bugs como pistas para entender mejor el sistema.'
      },
      {
        titulo: '🔄 Pensamiento Iterativo',
        descripcion: 'El código rara vez es perfecto al primer intento. Los programadores mejoran gradualmente sus soluciones mediante iteración.'
      },
      {
        titulo: '📚 Aprendizaje Continuo',
        descripcion: 'La tecnología cambia constantemente. Un programador exitoso es un aprendiz permanente que se adapta a nuevas herramientas.'
      }
    ],
    porQuePiensaAsi: `Un programador piensa así porque la complejidad del software moderno requiere estructuras mentales específicas.

La descomposición permite manejar sistemas de millones de líneas de código.
La abstracción evita tener que reinventar la rueda constantemente.
El pensamiento algorítmico asegura soluciones lógicas y reproducibles.

Este pensamiento no es innato - se desarrolla con práctica, exactamente como hiciste en este juego.`,
    paraQuePiensaAsi: `Un programador piensa así para:

✓ Resolver problemas del mundo real de manera eficiente
✓ Automatizar tareas repetitivas y liberar tiempo humano
✓ Crear sistemas que escalen y sirvan a millones de personas
✓ Innovar y construir el futuro digital

Tu viaje apenas comienza. Cada línea de código que escribas fortalecerá estas conexiones neuronales.

¡El mundo necesita más programadores que piensen críticamente!`
  }
};
