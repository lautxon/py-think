export const gameData = {
  niveles: [
    {
      id: 'fundamentos',
      nombre: 'Nivel Fundamentos',
      icono: '🌱',
      color: 'pixel-green',
      descripcion: '¡Bienvenido al mundo de la programación!',
      teoria: {
        titulo: 'Conceptos Fundamentales de Python',
        introduccion: 'Antes de comenzar, repasemos los conceptos básicos que necesitarás:',
        temas: [
          {
            titulo: 'Variables',
            contenido: 'Una variable es como una "caja" con etiqueta donde guardas información. En Python, se crea simplemente escribiendo el nombre seguido del valor: mi_variable = 5',
            ejemplo: 'nombre = "Juan"\nedad = 25\naltura = 1.75'
          },
          {
            titulo: 'Tipos de Datos',
            contenido: 'Python tiene varios tipos de datos básicos:\n• String (str): texto entre comillas\n• Integer (int): números enteros\n• Float: números con decimales\n• Boolean (bool): True o False',
            ejemplo: '"Hola"     # String\n42         # Integer\n3.14       # Float\nTrue       # Boolean'
          },
          {
            titulo: 'Operadores',
            contenido: 'Los operadores te permiten hacer cálculos:\n• + suma\n• - resta\n• * multiplicación\n• / división\n• % módulo (resto)',
            ejemplo: '10 + 5 = 15\n10 - 5 = 5\n10 * 5 = 50\n10 / 2 = 5.0\n10 % 3 = 1'
          },
          {
            titulo: 'Comentarios',
            contenido: 'Los comentarios son notas que Python ignora. Se usan con # para explicar tu código.',
            ejemplo: '# Esto es un comentario\nprint("Hola")  # También aquí'
          }
        ],
        consejo: '💡 Consejo: Practica escribiendo variables con nombres descriptivos. ¡Tu yo del futuro te lo agradecerá!'
      },
      industriaInfo: `En la industria tech, los fundamentos son la base de todo desarrollo profesional.

Las empresas buscan programadores que comprendan los conceptos básicos sólidos antes de especializarse.

Este nivel representa el primer año de un desarrollador junior - aquí construyes las bases que te permitirán crecer.`,
      conceptosClave: [
        { termino: 'Variable', definicion: 'Contenedor que almacena datos en memoria' },
        { termino: 'String', definicion: 'Secuencia de caracteres (texto)' },
        { termino: 'Integer', definicion: 'Número entero sin decimales' },
        { termino: 'Boolean', definicion: 'Valor verdadero (True) o falso (False)' },
        { termino: 'Print()', definicion: 'Función que muestra texto en consola' },
        { termino: 'Comentario', definicion: 'Texto ignorado por Python, usado para explicar código' }
      ],
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
      teoria: {
        titulo: 'Estructuras de Control y Funciones',
        introduccion: 'En este nivel aprenderás a controlar el flujo de tu programa:',
        temas: [
          {
            titulo: 'Condicionales (if)',
            contenido: 'Las estructuras if te permiten ejecutar código solo si se cumple una condición. En Python se usa indentación (espacios) para definir el bloque.',
            ejemplo: 'if edad >= 18:\n    print("Mayor de edad")\nelse:\n    print("Menor de edad")'
          },
          {
            titulo: 'Bucles (for)',
            contenido: 'Los bucles for repiten código un número determinado de veces. range(n) genera números del 0 al n-1.',
            ejemplo: 'for i in range(5):\n    print(i)\n# Imprime: 0, 1, 2, 3, 4'
          },
          {
            titulo: 'Listas',
            contenido: 'Las listas son colecciones ordenadas y mutables de elementos. Se accede por índice (desde 0).',
            ejemplo: 'frutas = ["manzana", "banana", "naranja"]\nprint(frutas[0])  # manzana\nfrutas.append("pera")'
          },
          {
            titulo: 'Funciones',
            contenido: 'Las funciones son bloques de código reutilizables. Se definen con "def" y pueden recibir parámetros.',
            ejemplo: 'def saludar(nombre):\n    return f"Hola, {nombre}"\n\nprint(saludar("Ana"))  # Hola, Ana'
          },
          {
            titulo: 'Diccionarios',
            contenido: 'Los diccionarios almacenan pares clave-valor. Son ideales para datos estructurados.',
            ejemplo: 'persona = {\n    "nombre": "Juan",\n    "edad": 30\n}\nprint(persona["nombre"])  # Juan'
          }
        ],
        consejo: '💡 Consejo: La indentación en Python es obligatoria. Usa 4 espacios consistentemente.'
      },
      industriaInfo: `En el nivel intermedio, desarrollas habilidades que las empresas valoran en desarrolladores mid-level.

La capacidad de estructurar lógica compleja y resolver problemas eficientemente es lo que separa a los juniors de los mid-levels.

Este nivel representa habilidades de un desarrollador con 2-3 años de experiencia.`,
      conceptosClave: [
        { termino: 'if/else', definicion: 'Estructura condicional para tomar decisiones' },
        { termino: 'for loop', definicion: 'Bucle que itera sobre una secuencia' },
        { termino: 'range()', definicion: 'Genera una secuencia de números' },
        { termino: 'Lista', definicion: 'Colección ordenada y mutable de elementos' },
        { termino: 'Función', definicion: 'Bloque de código reutilizable con def' },
        { termino: 'Diccionario', definicion: 'Colección de pares clave-valor' },
        { termino: 'Índice', definicion: 'Posición numérica de un elemento (desde 0)' },
        { termino: '==', definicion: 'Operador de comparación de igualdad' }
      ],
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
      teoria: {
        titulo: 'Conceptos Avanzados de Python',
        introduccion: 'Prepárate para pensar como un ingeniero senior:',
        temas: [
          {
            titulo: 'Complejidad Temporal (Big O)',
            contenido: 'Mide cómo crece el tiempo de ejecución con el tamaño de entrada. O(1) es constante, O(n) es lineal, O(n²) es cuadrático.',
            ejemplo: 'O(1): lista[0]     # Acceso directo\nO(n): for x in lista\nO(n²): bucles anidados'
          },
          {
            titulo: 'List Comprehensions',
            contenido: 'Forma concisa de crear listas en una línea. Es "Pythonic" y más eficiente que bucles tradicionales.',
            ejemplo: 'cuadrados = [x**2 for x in range(5)]\n# [0, 1, 4, 9, 16]\n\npares = [x for x in nums if x%2==0]'
          },
          {
            titulo: 'Decoradores',
            contenido: 'Funciones que modifican el comportamiento de otras funciones. Se usan con @ antes de la definición.',
            ejemplo: '@decorador\ndef mi_funcion():\n    pass\n\n# Equivale a:\nmi_funcion = decorador(mi_funcion)'
          },
          {
            titulo: 'Generadores (yield)',
            contenido: 'Funciones que producen valores uno a la vez, ahorrando memoria. Usan yield en lugar de return.',
            ejemplo: 'def contador():\n    n = 0\n    while True:\n        yield n\n        n += 1'
          },
          {
            titulo: 'Context Managers (with)',
            contenido: 'Manejan automáticamente recursos (archivos, conexiones). Se aseguran de cerrar/liberar recursos.',
            ejemplo: 'with open("archivo.txt") as f:\n    contenido = f.read()\n# El archivo se cierra automáticamente'
          },
          {
            titulo: 'PEP 8',
            contenido: 'Guía de estilo oficial de Python. Define convenciones para código legible y consistente.',
            ejemplo: '# Nombres claros\nusuario_activo = True\nMAX_INTENTOS = 3\n\ndef calcular_total():\n    pass'
          }
        ],
        consejo: '💡 Consejo: Un senior no solo escribe código que funciona, escribe código que otros pueden entender y mantener.'
      },
      industriaInfo: `El nivel avanzado representa habilidades senior que las empresas buscan para roles de liderazgo técnico.

Los seniors no solo escriben código - diseñan soluciones, optimizan performance y anticipan problemas.

Este nivel refleja el pensamiento de un desarrollador senior o tech lead con 5+ años de experiencia.`,
      conceptosClave: [
        { termino: 'Big O', definicion: 'Notación para complejidad algorítmica' },
        { termino: 'List Comprehension', definicion: 'Sintaxis concisa para crear listas' },
        { termino: 'Decorator', definicion: 'Función que modifica otra función' },
        { termino: 'Generator', definicion: 'Función que usa yield para iterar' },
        { termino: 'Context Manager', definicion: 'Maneja recursos con with statement' },
        { termino: 'PEP 8', definicion: 'Guía de estilo oficial de Python' },
        { termino: 'Duck Typing', definicion: 'Importa comportamiento, no el tipo' },
        { termino: 'GIL', definicion: 'Global Interpreter Lock limita threads' },
        { termino: 'Recursividad', definicion: 'Función que se llama a sí misma' }
      ],
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
