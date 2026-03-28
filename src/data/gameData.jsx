export const gameData = {
  pythonIntro: {
    titulo: '¿Qué es Python?',
    introduccion: 'Antes de comenzar tu aventura, conozcamos el lenguaje que vas a aprender:',
    secciones: [
      {
        icono: '🐍',
        titulo: '¿Qué es Python?',
        contenido: `Python es un lenguaje de programación creado por Guido van Rossum a finales de 1989. Su nombre viene del grupo de comedia británico "Monty Python", no de la serpiente.

Es como aprender un nuevo idioma, pero en lugar de comunicarte con personas, te comunicás con la computadora. Python es conocido por su sintaxis clara y legible, casi como leer inglés.`
      },
      {
        icono: '📐',
        titulo: 'Tipo de Lenguaje',
        contenido: `Python es un lenguaje:

✓ **Formal**: Tiene reglas gramaticales estrictas (sintaxis) que deben seguirse exactamente.

✓ **De programación**: Permite escribir instrucciones que la computadora ejecuta.

✓ **De alto nivel**: Está más cerca del lenguaje humano que del código máquina. No necesitás gestionar memoria manualmente.

✓ **Orientado a objetos**: Todo en Python es un "objeto" con propiedades y comportamientos.

✓ **Interpretado**: El código se ejecuta línea por línea, sin necesidad de compilar primero.

✓ **Dinámico**: Las variables no tienen tipo fijo - Python lo detecta automáticamente.`
      },
      {
        icono: '🚀',
        titulo: '¿Por qué se usa Python?',
        contenido: `Python es uno de los lenguajes más populares del mundo porque:

✓ **Fácil de aprender**: Su sintaxis es clara y requiere menos código que otros lenguajes.

✓ **Versátil**: Sirve para web, datos, IA, automatización, juegos, y más.

✓ **Comunidad enorme**: Millones de desarrolladores crean librerías gratuitas para todo.

✓ **Productividad**: Podés construir prototipos rápidamente y probar ideas al instante.

✓ **Legible**: El código es fácil de entender, incluso meses después de escribirlo.`
      },
      {
        icono: '💼',
        titulo: '¿Para qué se usa Python?',
        contenido: `Python se usa en áreas diversas:

🌐 **Desarrollo Web**: Django, Flask (Instagram, Pinterest)

📊 **Ciencia de Datos**: Análisis, visualización, estadísticas

🤖 **Inteligencia Artificial**: Machine Learning, Deep Learning, ChatGPT

🔬 **Investigación Científica**: Física, biología, astronomía

💰 **Finanzas**: Trading algorítmico, análisis de riesgos

🎮 **Juegos**: Prototipado, herramientas de desarrollo

🤖 **Automatización**: Scripts que hacen tareas repetitivas

📱 **Aplicaciones Desktop**: Interfaces gráficas, herramientas`
      },
      {
        icono: '👨‍💻',
        titulo: '¿Cómo se usa Python?',
        contenido: `Python se usa escribiendo código en archivos con extensión **.py**:

\`\`\`python
# Mi primer programa
print("¡Hola, mundo!")

# Variables
nombre = "Juan"
edad = 25

# Condicionales
if edad >= 18:
    print("Mayor de edad")
else:
    print("Menor de edad")

# Bucles
for i in range(5):
    print(f"Número: {i}")
\`\`\`

El código se ejecuta con: **python archivo.py**

También podés usar Python en modo interactivo, Jupyter Notebooks, o entornos como VS Code.`
      },
      {
        icono: '🏢',
        titulo: '¿Quiénes usan Python?',
        contenido: `Las empresas más importantes del mundo usan Python:

🚀 **NASA**: Análisis de datos de telescopios, simulaciones de vuelo, procesamiento de imágenes satelitales.

🎵 **Spotify**: Sistema de recomendaciones de música, análisis de audio, backend de servicios.

🎬 **Netflix**: Algoritmos de recomendación, análisis de viewing, infraestructura de servidores.

🔍 **Google**: Búsqueda web, YouTube (está construido con Python), TensorFlow (IA).

📸 **Instagram**: Backend que maneja miles de millones de posts diarios.

🛒 **Amazon**: Recomendaciones de productos, logística, AWS (Amazon Web Services).

🚗 **Tesla**: Sistemas de auto-piloto, análisis de datos de vehículos.

💬 **Meta (Facebook)**: Infraestructura, IA, análisis de datos.

🏦 **JPMorgan Chase**: Trading algorítmico, detección de fraudes.`
      },
      {
        icono: '🤖',
        titulo: 'Python e Inteligencia Artificial',
        contenido: `Python es el lenguaje #1 para IA y Machine Learning:

🧠 **Librerías poderosas**: TensorFlow, PyTorch, scikit-learn, Keras.

📚 **Recursos educativos**: La mayoría de cursos de IA usan Python.

🔬 **Investigación**: Los papers de IA publican código en Python.

💼 **Industria**: ChatGPT, Midjourney, Stable Diffusion - todos usan Python.

**¿Por qué Python para IA?**
- Sintaxis simple para algoritmos complejos
- Ecosistema maduro de librerías de IA
- Integración con C++ para performance
- Comunidad activa en investigación

La IA está transformando el mundo, y Python es la herramienta principal para crearla.`
      },
      {
        icono: '🔮',
        titulo: 'Importancia de Python',
        contenido: `Python es crucial para el desarrollo actual y futuro:

📈 **Crecimiento**: Es el lenguaje más enseñado en universidades.

🌍 **Demanda laboral**: Millones de empleos requieren Python.

🚀 **Futuro**: IA, automatización, y ciencia de datos crecerán con Python.

🎓 **Educación**: Es el primer lenguaje para millones de estudiantes.

🔓 **Open Source**: Todo el ecosistema es gratuito y accesible.

**Aprender Python es una inversión en tu futuro.**

No es solo un lenguaje de programación - es una habilidad que te permitirá:
- Automatizar tareas aburridas
- Analizar datos y tomar mejores decisiones
- Crear productos digitales
- Entender el mundo tecnológico
- Trabajar en industrias del futuro

¡Estás a punto de comenzar un viaje increíble! 🚀`
      }
    ],
    consejo: '💡 Consejo: No necesitás memorizar todo ahora. La programación se aprende practicando. ¡Vamos a jugar!'
  },
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
            queEs: 'Una variable es un espacio en la memoria de la computadora donde guardamos información. Podés pensar en ella como una "caja" con una etiqueta (nombre) que contiene un valor.',
            queHace: 'Almacena datos para que tu programa pueda usarlos, modificarlos y recuperarlos más tarde.',
            comoLoHace: 'Python reserva un espacio en memoria y le asigna un nombre (identificador). Cuando usás ese nombre, Python accede al valor guardado.',
            paraQueLoHace: 'Permite escribir programas dinámicos que pueden trabajar con diferentes valores sin tener que reescribir el código. Es fundamental para cualquier operación.',
            sintaxis: 'nombre_variable = valor\n\n# Ejemplos:\nnombre = "María"\nedad = 25\naltura = 1.68\nes_estudiante = True',
            errorComun: 'Usar nombres que no describen el contenido o empezar con números:\n❌ 1nombre = "Juan"  # Error\n❌ mi-var = 5       # Error (el guión no está permitido)',
            ejemploCorrecto: '# Nombres descriptivos:\n✅ nombre_usuario = "Juan"\n✅ edad_usuario = 30\n✅ precio_final = 100.50\n\n# Reglas:\n# - Sin espacios (usá guión bajo: _)\n# - Sin empezar con números\n# - Distingue mayúsculas/minúsculas'
          },
          {
            titulo: 'Tipos de Datos',
            queEs: 'Los tipos de datos son categorías que definen qué tipo de información puede almacenar una variable. Python tiene varios tipos básicos.',
            queHace: 'Clasifica los datos para que Python sepa cómo operar con ellos (no podés sumar texto con números de la misma forma).',
            comoLoHace: 'Python detecta automáticamente el tipo según el valor asignado (tipado dinámico). Cada tipo tiene operaciones específicas.',
            paraQueLoHace: 'Permite validar operaciones, evitar errores y escribir código más predecible. Cada tipo se comporta de forma distinta.',
            sintaxis: '# String (texto):\nmensaje = "Hola Mundo"\n\n# Integer (entero):\ncantidad = 42\n\n# Float (decimal):\nprecio = 19.99\n\n# Boolean (lógico):\nes_activo = True\nesta_vacio = False',
            errorComun: 'Confundir strings con números:\n❌ edad = "25"  # Es texto, no número\n❌ print(edad + 5)  # Error: no podés sumar texto con número',
            ejemploCorrecto: '# Tipos correctos:\n✅ edad = 25           # Integer\n✅ precio = 19.99      # Float\n✅ nombre = "Ana"      # String\n✅ activo = True       # Boolean\n\n# Operaciones válidas:\n✅ print(edad + 5)     # 30\n✅ print(nombre + " López")  # "Ana López"'
          },
          {
            titulo: 'Operadores',
            queEs: 'Símbolos especiales que realizan operaciones con valores y variables. Son los "verbos" del lenguaje de programación.',
            queHace: 'Transforma, compara o combina datos. Permite hacer cálculos matemáticos y comparaciones lógicas.',
            comoLoHace: 'Python evalúa los operandos (valores a cada lado) y aplica la operación definida por el símbolo.',
            paraQueLoHace: 'Sin operadores, no podrías hacer cálculos, comparaciones ni tomar decisiones en tu código.',
            sintaxis: '# Aritméticos:\nsuma = 10 + 5       # 15\nresta = 10 - 5      # 5\nmultiplicacion = 10 * 5  # 50\ndivision = 10 / 3   # 3.333...\nmodulo = 10 % 3     # 1 (resto)\npotencia = 2 ** 3   # 8\n\n# Comparación:\n10 > 5   # True\n10 == 10 # True\n10 != 5  # True',
            errorComun: 'Confundir asignación con comparación:\n❌ if x = 5:     # Error: = es para asignar\n❌ print(x = 5)  # Error\n\n✅ if x == 5:    # Correcto: == compara\n✅ print(x == 5) # Devuelve True o False',
            ejemploCorrecto: '# Operaciones correctas:\n✅ precio = 100\n✅ descuento = 10\n✅ final = precio - descuento  # 90\n\n✅ cantidad = 5\n✅ precio_unitario = 20\n✅ total = cantidad * precio_unitario  # 100\n\n✅ es_mayor = edad >= 18  # True si edad >= 18'
          },
          {
            titulo: 'Comentarios',
            queEs: 'Texto en el código que Python ignora completamente. Son notas para humanos, no para la computadora.',
            queHace: 'Documenta el código, explica decisiones complejas, desactiva código temporalmente y mejora la legibilidad.',
            comoLoHace: 'Todo lo que sigue al símbolo # en una línea es ignorado por el intérprete de Python.',
            paraQueLoHace: 'Tu código será leído más veces del que será escrito (por vos y otros). Los comentarios hacen que sea entendible meses después.',
            sintaxis: '# Esto es un comentario de una línea\n\nprint("Hola")  # También al final de una línea\n\n"""\nEsto es un comentario\nmultilínea (docstring).\nSe usa para documentar funciones.\n"""\n\n# Sección: Variables\nnombre = "Juan"  # Guardamos el nombre',
            errorComun: '❌ Comentar lo obvio:\n   x = 5  # Asignamos 5 a x  (¡Esto no ayuda!)\n\n❌ No comentar lo complejo:\n   # 50 líneas de lógica complicada sin explicar\n\n✅ Comentar el POR QUÉ, no el QUÉ:\n   # Usamos bubble sort porque la lista es pequeña\n   # y necesitamos estabilidad en el orden',
            ejemploCorrecto: '# Buen uso de comentarios:\n\n# Calcular el precio final con IVA\nprecio_sin_iva = 100\niva = 0.21  # 21% de IVA en Argentina\nprecio_final = precio_sin_iva * (1 + iva)\n\n# Verificar si el usuario es mayor de edad\nif edad >= 18:\n    print("Acceso permitido")\nelse:\n    print("Acceso denegado - menor de edad")'
          }
        ],
        consejo: '💡 Consejo: Escribí código como si la próxima persona que lo lea sea un psicópata que sabe dónde vivís. Usá nombres descriptivos y comentá el POR QUÉ, no el QUÉ.'
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
            queEs: 'Una estructura que permite ejecutar diferentes bloques de código según se cumpla o no una condición.',
            queHace: 'Toma decisiones en tu programa. Ejecuta un bloque de código solo si la condición es verdadera.',
            comoLoHace: 'Evalúa una expresión booleana (True/False). Si es True, ejecuta el bloque del if. Si hay else y la condición es False, ejecuta el bloque del else.',
            paraQueLoHace: 'Permite crear programas que responden diferente según los datos de entrada. Es la base de la lógica de programación.',
            sintaxis: 'if condicion:\n    # Código si es True\n    print("Se cumple")\nelse:\n    # Código si es False\n    print("No se cumple")\n\n# Ejemplo:\nif edad >= 18:\n    print("Mayor de edad")\nelse:\n    print("Menor de edad")',
            errorComun: '❌ Olvidar los dos puntos:\n   if edad >= 18  # Error: faltan :\n   \n❌ Usar = en vez de ==:\n   if x = 5:  # Error: = asigna, == compara\n   \n❌ Mala indentación:\n   if True:\n   print("Hola")  # Error: debe estar indentado',
            ejemploCorrecto: '# Condicional correcto:\nif temperatura > 25:\n    print("Hace calor")\n    print("Tomar agua")  # Misma indentación\nelse:\n    print("Temperatura normal")\n\n# Múltiples condiciones:\nif nota >= 90:\n    print("Excelente")\nelif nota >= 70:\n    print("Aprobado")\nelse:\n    print("Reprobado")'
          },
          {
            titulo: 'Bucles (for)',
            queEs: 'Una estructura que repite un bloque de código un número determinado de veces.',
            queHace: 'Itera (recorre) sobre una secuencia de elementos, ejecutando el mismo código para cada uno.',
            comoLoHace: 'Toma cada elemento de la secuencia, lo asigna a una variable temporal y ejecuta el bloque. Se repite hasta agotar la secuencia.',
            paraQueLoHace: 'Automatiza tareas repetitivas. En lugar de escribir el mismo código 100 veces, lo escribís una vez dentro del bucle.',
            sintaxis: 'for variable in secuencia:\n    # Código a repetir\n    print(variable)\n\n# Con range():\nfor i in range(5):  # 0, 1, 2, 3, 4\n    print(i)\n\n# Con lista:\nfor fruta in ["manzana", "banana"]:\n    print(fruta)',
            errorComun: '❌ Olvidar los dos puntos:\n   for i in range(5)  # Error: faltan :\n   \n❌ Intentar modificar la lista mientras iteras:\n   for x in lista:\n       lista.append(x)  # ¡Peligro! Bucle infinito\n   \n❌ Usar range incorrectamente:\n   for i in range(1, 5):\n       print(i)  # Imprime 1,2,3,4 (NO incluye 5)',
            ejemploCorrecto: '# Bucle for correcto:\nfor numero in range(3):\n    print(f"Número: {numero}")\n# Salida: Número: 0, 1, 2\n\n# Recorrer una lista:\nfrutas = ["manzana", "pera", "naranja"]\nfor fruta in frutas:\n    print(f"Me gusta la {fruta}")\n\n# Con índice y valor:\nfor i, fruta in enumerate(frutas):\n    print(f"{i}: {fruta}")'
          },
          {
            titulo: 'Listas',
            queEs: 'Una colección ordenada y mutable (modificable) de elementos. Puede contener cualquier tipo de dato.',
            queHace: 'Almacena múltiples valores en una sola variable. Permite agregar, eliminar y modificar elementos.',
            comoLoHace: 'Python guarda los elementos en posiciones consecutivas de memoria. Cada posición tiene un índice numérico desde 0.',
            paraQueLoHace: 'Organiza datos relacionados. Permite trabajar con colecciones de elementos de forma eficiente.',
            sintaxis: '# Crear lista:\nmi_lista = [1, 2, 3, 4]\n\n# Acceder:\nprimer = mi_lista[0]      # 1\nultimo = mi_lista[-1]     # 4\n\n# Modificar:\nmi_lista[0] = 10\n\n# Métodos:\nmi_lista.append(5)        # Agrega al final\nmi_lista.insert(0, 0)     # Inserta en posición\nmi_lista.remove(3)        # Elimina elemento\nlongitud = len(mi_lista)  # Tamaño',
            errorComun: '❌ Índice fuera de rango:\n   lista = [1, 2, 3]\n   print(lista[3])  # Error: máximo índice es 2\n   \n❌ Copiar lista incorrectamente:\n   lista1 = [1, 2, 3]\n   lista2 = lista1  # ¡Referencia, no copia!\n   lista2.append(4)  # ¡Modifica lista1 también!\n   \n✅ Copia correcta:\n   lista2 = lista1.copy()',
            ejemploCorrecto: '# Lista correcta:\nnumeros = [10, 20, 30, 40, 50]\n\n# Acceder:\nprint(numeros[0])    # 10\nprint(numeros[-1])   # 50\nprint(numeros[1:3])  # [20, 30]\n\n# Operaciones:\nnumeros.append(60)           # [10, 20, 30, 40, 50, 60]\nnumeros.extend([70, 80])     # Agrega múltiples\nnumeros.pop()                # Elimina último\ndel numeros[0]               # Elimina por índice'
          },
          {
            titulo: 'Funciones',
            queEs: 'Un bloque de código reutilizable que realiza una tarea específica. Tiene un nombre y puede recibir parámetros.',
            queHace: 'Encapsula lógica para poder usarla múltiples veces sin repetir código. Puede devolver un resultado.',
            comoLoHace: 'Se define con "def". Cuando se llama, Python ejecuta el código dentro y opcionalmente devuelve un valor con "return".',
            paraQueLoHace: 'Organiza el código en partes lógicas. Facilita el mantenimiento, testing y reutilización. Es fundamental en programación profesional.',
            sintaxis: 'def nombre_funcion(param1, param2):\n    # Código de la función\n    resultado = param1 + param2\n    return resultado\n\n# Llamar:\nvalor = nombre_funcion(5, 3)\n\n# Ejemplo:\ndef saludar(nombre):\n    return f"Hola, {nombre}"\n\nprint(saludar("Ana"))  # Hola, Ana',
            errorComun: '❌ Olvidar return:\n   def sumar(a, b):\n       a + b  # Error: no devuelve nada\n   \n❌ Usar variable no definida:\n   def mi_func():\n       print(x)  # Error si x no está definida\n   \n❌ Confundir parámetro con argumento:\n   def func(x):  # x es parámetro\n       pass\n   func(5)       # 5 es argumento',
            ejemploCorrecto: '# Función completa:\ndef calcular_area_rectangulo(base, altura):\n    """Calcula el área de un rectángulo."""\n    area = base * altura\n    return area\n\n# Uso:\nresultado = calcular_area_rectangulo(5, 3)\nprint(f"Área: {resultado}")  # Área: 15\n\n# Con valor por defecto:\ndef saludar(nombre="Invitado"):\n    return f"Hola, {nombre}"'
          },
          {
            titulo: 'Diccionarios',
            queEs: 'Una colección de pares clave-valor. Las claves son únicas y permiten acceder a los valores.',
            queHace: 'Almacena datos estructurados donde cada valor tiene una etiqueta (clave) para identificarlo.',
            comoLoHace: 'Python usa una tabla hash interna. Las claves deben ser inmutables (strings, números, tuplas).',
            paraQueLoHace: 'Representa datos del mundo real (personas, productos, configuraciones). Es la estructura para datos JSON/APIs.',
            sintaxis: '# Crear:\npersona = {\n    "nombre": "Juan",\n    "edad": 30,\n    "ciudad": "Buenos Aires"\n}\n\n# Acceder:\nnombre = persona["nombre"]\n\n# Modificar:\npersona["edad"] = 31\n\n# Agregar:\npersona["email"] = "juan@email.com"\n\n# Eliminar:\ndel persona["ciudad"]',
            errorComun: '❌ Acceder a clave inexistente:\n   persona = {"nombre": "Juan"}\n   print(persona["edad"])  # Error: KeyError\n   \n✅ Usar get():\n   print(persona.get("edad"))  # None (no error)\n   print(persona.get("edad", 0))  # 0 (valor por defecto)\n   \n❌ Usar clave mutable:\n   dicc = {[1, 2]: "valor"}  # Error: lista no es hashable',
            ejemploCorrecto: '# Diccionario correcto:\nusuario = {\n    "id": 1,\n    "nombre": "María",\n    "activo": True,\n    "roles": ["admin", "editor"]\n}\n\n# Acceder seguro:\nnombre = usuario.get("nombre", "Desconocido")\n\n# Recorrer:\nfor clave, valor in usuario.items():\n    print(f"{clave}: {valor}")\n\n# Verificar existe:\nif "nombre" in usuario:\n    print("Nombre existe")'
          }
        ],
        consejo: '💡 Consejo: La indentación en Python es obligatoria. Usa 4 espacios consistentemente. Un error de indentación cambia completamente la lógica del programa.'
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
            queEs: 'Una notación matemática que describe cómo crece el tiempo de ejecución de un algoritmo según el tamaño de entrada (n).',
            queHace: 'Mide la eficiencia de un algoritmo. Permite comparar soluciones y predecir el rendimiento con datos grandes.',
            comoLoHace: 'Analiza el peor caso posible. Cuenta operaciones básicas en función de n. Se expresa como O(f(n)).',
            paraQueLoHace: 'Para elegir el algoritmo más eficiente. En la industria, con millones de usuarios, la diferencia entre O(n) y O(n²) es abismal.',
            sintaxis: '# O(1) - Constante (mejor):\nacceso = lista[0]\n\n# O(log n) - Logarítmica:\nbusqueda_binaria(lista, valor)\n\n# O(n) - Lineal (buena):\nfor elemento in lista:\n    procesar(elemento)\n\n# O(n²) - Cuadrática (lenta):\nfor i in lista:\n    for j in lista:\n        comparar(i, j)',
            errorComun: '❌ Ignorar la complejidad en bucles anidados:\n   for i in range(n):\n       for j in range(n):  # ¡O(n²)!\n           pass\n   \n❌ Usar lista cuando necesitás búsqueda rápida:\n   if elemento in lista:  # O(n) - lento\n   \n✅ Usar set para búsquedas:\n   if elemento in conjunto:  # O(1) - rápido',
            ejemploCorrecto: '# Elegir estructura según complejidad:\n\n# Búsqueda frecuente → usar set/dict\nbusqueda = {1, 2, 3, 4, 5}\nif 3 in busqueda:  # O(1)\n    print("Encontrado")\n\n# Datos ordenados → binary search\n# Datos pequeños → algoritmo simple está bien\n\n# Priorizar legibilidad primero,\noptimizar solo si es necesario'
          },
          {
            titulo: 'List Comprehensions',
            queEs: 'Una sintaxis concisa para crear listas transformando o filtrando elementos en una sola línea.',
            queHace: 'Crea listas de forma más legible y eficiente que los bucles for tradicionales.',
            comoLoHace: 'Evalúa una expresión para cada elemento en una secuencia, opcionalmente filtrando con una condición.',
            paraQueLoHace: 'Escribir código más "Pythonic". Es más rápido que bucles for (optimizado internamente) y más legible.',
            sintaxis: '# Sintaxis básica:\nnueva_lista = [expresion for elemento in secuencia]\n\n# Con condición:\npares = [x for x in numeros if x % 2 == 0]\n\n# Transformación:\ncuadrados = [x**2 for x in range(10)]\n\n# Anidada:\nmatriz = [[i*j for j in range(3)] for i in range(3)]',
            errorComun: '❌ Hacerlo muy complejo:\n   resultado = [x*y*z for x in lista1 for y in lista2 for z in lista3 if x>0 if y>0]\n   # ¡Ilegible! Usar bucles normales\n   \n❌ Efectos secundarios:\n   [print(x) for x in lista]  # Mal uso de comprehension\n   # Usar bucle for normal',
            ejemploCorrecto: '# List comprehension correcto:\n\n# Filtrar números positivos\npositivos = [x for x in numeros if x > 0]\n\n# Transformar a mayúsculas\nnombres = [nombre.upper() for nombre in lista]\n\n# Con condición y transformación\npares_cuadrado = [x**2 for x in range(20) if x % 2 == 0]\n\n# Legibilidad primero:\n# Si no cabe en una línea clara, usar for normal'
          },
          {
            titulo: 'Decoradores',
            queEs: 'Funciones que reciben otra función y extienden su comportamiento sin modificarla explícitamente.',
            queHace: 'Agrega funcionalidad extra a funciones (logging, validación, caching, autenticación).',
            comoLoHace: 'Envuelve (wraps) la función original. Se usa el símbolo @ antes de la definición.',
            paraQueLoHace: 'Separar preocupaciones. El código de logging/validación no se mezcla con la lógica principal. Esencial en frameworks como Flask.',
            sintaxis: '# Decorador básico:\n@decorador\ndef mi_funcion():\n    pass\n\n# Equivale a:\nmi_funcion = decorador(mi_funcion)\n\n# Con parámetros:\ndef mi_decorador(func):\n    def wrapper(*args, **kwargs):\n        print("Antes")\n        resultado = func(*args, **kwargs)\n        print("Después")\n        return resultado\n    return wrapper\n\n@mi_decorador\ndef saludar():\n    print("Hola")',
            errorComun: '❌ Olvidar functools.wraps:\n   def decorador(f):\n       def wrapper(*args): ...\n       return wrapper  # Pierde metadata de f\n   \n✅ Con wraps:\n   from functools import wraps\n   def decorador(f):\n       @wraps(f)\n       def wrapper(*args): ...\n       return wrapper\n   \n❌ Decoradores muy complejos:\n   # Si necesita 5 niveles, considerar una clase',
            ejemploCorrecto: '# Decorador útil - Logging:\nfrom functools import wraps\n\ndef loguear(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        print(f"Llamando a {func.__name__}")\n        resultado = func(*args, **kwargs)\n        print(f"Resultado: {resultado}")\n        return resultado\n    return wrapper\n\n@loguear\ndef sumar(a, b):\n    return a + b\n\nsumar(3, 5)  # Loguea automáticamente'
          },
          {
            titulo: 'Generadores (yield)',
            queEs: 'Funciones especiales que producen una secuencia de valores perezosamente (uno a la vez, bajo demanda).',
            queHace: 'Genera valores iterables sin almacenarlos todos en memoria. Ideal para secuencias infinitas o muy grandes.',
            comoLoHace: 'Usa yield en lugar de return. Cada yield pausa la función y guarda el estado. La próxima llamada continúa donde quedó.',
            paraQueLoHace: 'Ahorro masivo de memoria. Con millones de elementos, una lista ocupa GBs, un generator ocupa bytes.',
            sintaxis: '# Generator básico:\ndef contador():\n    n = 0\n    while True:\n        yield n  # Pausa y devuelve n\n        n += 1\n\n# Uso:\ngen = contador()\nprint(next(gen))  # 0\nprint(next(gen))  # 1\n\n# Generator expression:\ncuadrados = (x**2 for x in range(1000000))',
            errorComun: '❌ Intentar acceder por índice:\n   gen = (x for x in range(10))\n   print(gen[0])  # Error: no es indexable\n   \n❌ Recorrer múltiples veces:\n   gen = (x for x in range(10))\n   list(gen)  # [0,1,2...]\n   list(gen)  # [] ¡vacío! Se agotó\n   \n✅ Convertir a lista si necesitás reusar:\n   lista = list(gen)',
            ejemploCorrecto: '# Generator para archivo grande:\ndef leer_lineas(archivo):\n    with open(archivo) as f:\n        for linea in f:\n            yield linea.strip()\n\n# Uso eficiente de memoria:\nfor linea in leer_lineas("grande.txt"):\n    procesar(linea)\n\n# Generator expression:\nsuma = sum(x**2 for x in range(1000000))\n# No crea lista intermedia'
          },
          {
            titulo: 'Context Managers (with)',
            queEs: 'Objetos que manejan automáticamente la configuración y limpieza de recursos.',
            queHace: 'Garantiza que los recursos se liberen correctamente, incluso si hay excepciones.',
            comoLoHace: 'Implementa __enter__ (setup) y __exit__ (cleanup). El bloque with asegura que __exit__ se llame siempre.',
            paraQueLoHace: 'Prevenir memory leaks y recursos huérfanos. Archivos que no se cierran, conexiones abiertas, locks no liberados.',
            sintaxis: '# Uso básico:\nwith open("archivo.txt") as f:\n    contenido = f.read()\n# Archivo se cierra automáticamente\n\n# Múltiples recursos:\nwith open("in.txt") as entrada, open("out.txt", "w") as salida:\n    salida.write(entrada.read())\n\n# Crear context manager:\nfrom contextlib import contextmanager\n\n@contextmanager\ndef mi_recurso():\n    recurso = adquirir()\n    try:\n        yield recurso\n    finally:\n        liberar(recurso)',
            errorComun: '❌ Olvidar with y dejar archivo abierto:\n   f = open("archivo.txt")\n   contenido = f.read()\n   # ¡Nunca se cierra si hay error!\n   \n✅ Siempre usar with:\n   with open("archivo.txt") as f:\n       contenido = f.read()\n   # Se cierra automáticamente\n   \n❌ Anidar with innecesariamente:\n   with open("a.txt") as a:\n       with open("b.txt") as b:\n           pass\n   \n✅ Usar coma para múltiples:\n   with open("a.txt") as a, open("b.txt") as b:\n       pass',
            ejemploCorrecto: '# Context managers comunes:\n\n# Archivos:\nwith open("datos.txt") as f:\n    datos = f.read()\n\n# Locks (threading):\nwith lock:\n    # Sección crítica\n    compartir_recurso()\n\n# Conexiones database:\nwith conexion.cursor() as cursor:\n    cursor.execute(query)\n\n# Crear el tuyo:\nfrom contextlib import contextmanager\n\n@contextmanager\ndef timer():\n    inicio = time.time()\n    yield\n    print(f"Tiempo: {time.time() - inicio}s")'
          },
          {
            titulo: 'PEP 8',
            queEs: 'Python Enhancement Proposal #8. La guía de estilo oficial para código Python.',
            queHace: 'Define convenciones para escribir código legible y consistente.',
            comoLoHace: 'Establece reglas para nombres, indentación, espacios en blanco, comentarios, imports y más.',
            paraQueLoHace: 'Código consistente es más fácil de leer, mantener y colaborar. Las empresas lo exigen en code reviews.',
            sintaxis: '# Nombres:\nvariable_local = "valor"       # snake_case\nCONSTANTE_GLOBAL = 42          # UPPER_CASE\nClaseNombre = PascalCase         # PascalCase\n\n# Indentación: 4 espacios (NO tabs)\ndef funcion():\n    if condicion:\n        hacer_algo()\n\n# Espacios en blanco:\nresultado = suma(a, b)  # Bien\nresultado=suma(a,b)     # Mal\n\n# Imports: al inicio, ordenados\nimport os\nimport sys\nfrom collections import defaultdict',
            errorComun: '❌ Nombres inconsistentes:\n   usuarioActivo = True    # camelCase (mal)\n   usuario_activo = True   # snake_case (bien)\n   \n❌ Líneas muy largas:\n   resultado = funcion_muy_larga_que_hace_algo_complejo_con_muchos_parametros(a, b, c, d, e, f)\n   \n✅ Dividir en múltiples líneas:\n   resultado = funcion_muy_larga(\n       a, b, c,\n       d, e, f\n   )\n   \n❌ Imports desordenados:\n   from x import y\n   import os\n   from a import b',
            ejemploCorrecto: '# Código PEP 8 compliant:\n\n"""Módulo de ejemplo siguiendo PEP 8."""\n\nimport os\nimport sys\nfrom collections import defaultdict\n\nMAX_INTENTOS = 3\n\ndef calcular_promedio(numeros):\n    """Calcula el promedio de una lista de números."""\n    if not numeros:\n        return 0\n    return sum(numeros) / len(numeros)\n\nclass Calculadora:\n    """Calculadora básica."""\n    \n    def __init__(self, valor_inicial=0):\n        self.valor = valor_inicial\n    \n    def sumar(self, numero):\n        self.valor += numero\n        return self'
          }
        ],
        consejo: '💡 Consejo: Un senior no solo escribe código que funciona, escribe código que otros pueden entender y mantener. La simplicidad es sofisticación.'
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
  },
  carreraProfesional: {
    titulo: 'Tu Futuro con Python',
    introduccion: 'Completaste el juego. Ahora comienza tu verdadera aventura...',
    secciones: [
      {
        icono: '🤝',
        titulo: 'El Ecosistema Python',
        subtitulo: 'Librerías y Frameworks Esenciales',
        contenido: `Python no está solo - tiene un ecosistema masivo de librerías que extienden sus capacidades:

🌐 **Desarrollo Web:**
   • Django - Framework completo para aplicaciones robustas
   • Flask - Microframework ligero y flexible
   • FastAPI - Moderno y rápido para APIs

📊 **Ciencia de Datos:**
   • Pandas - Análisis y manipulación de datos
   • NumPy - Cálculo numérico y arrays
   • Matplotlib/Seaborn - Visualización de datos

🤖 **Inteligencia Artificial:**
   • TensorFlow - Deep Learning de Google
   • PyTorch - Deep Learning de Meta
   • scikit-learn - Machine Learning clásico

🔧 **Automatización y DevOps:**
   • Ansible - Automatización de infraestructura
   • Requests - HTTP para automatización web
   • BeautifulSoup - Web scraping`
      },
      {
        icono: '🛠️',
        titulo: 'Stack Tecnológico',
        subtitulo: 'Herramientas que necesitarás',
        contenido: `Para trabajar profesionalmente con Python, este es el stack actual:

💻 **Desarrollo:**
   • VS Code - Editor más popular (gratis)
   • PyCharm - IDE profesional de JetBrains
   • Jupyter Notebooks - Para data science

📦 **Control de Versiones:**
   • Git - Control de versiones
   • GitHub/GitLab - Repositorios y colaboración

🐳 **Contenedores y Deploy:**
   • Docker - Contenerización de aplicaciones
   • Kubernetes - Orquestación de contenedores
   • AWS/Azure/GCP - Cloud computing

🗄️ **Bases de Datos:**
   • PostgreSQL - Base de datos relacional
   • MongoDB - Base de datos NoSQL
   • Redis - Caché y mensajería

🧪 **Testing:**
   • pytest - Testing framework
   • unittest - Testing estándar
   • coverage - Medir cobertura de tests`
      },
      {
        icono: '🏢',
        titulo: 'Contextos de Trabajo',
        subtitulo: 'Dónde y cómo trabajar',
        contenido: `Python te abre puertas en diversos contextos laborales:

🏢 **Empresas Established:**
   • Grandes tech (Google, Meta, Amazon)
   • Bancos y fintech
   • Consultoras tecnológicas
   • Empresas de telecomunicaciones

🚀 **Startups:**
   • Ritmo rápido, aprendizaje intenso
   • Mayor responsabilidad temprana
   • Posibilidad de equity (acciones)

💻 **Trabajo Remoto:**
   • 100% remoto muy común en tech
   • Trabajar para empresas del exterior
   • Flexibilidad horaria

🎓 **Investigación:**
   • Universidades y laboratorios
   • Publicación de papers
   • Colaboración internacional

👨‍💼 **Freelance:**
   • Proyectos por contrato
   • Diversidad de industrias
   • Control de tu agenda`
      },
      {
        icono: '👥',
        titulo: 'Roles y Perfiles',
        subtitulo: 'Caminos profesionales disponibles',
        contenido: `Con Python podés especializarte en múltiples roles:

🔙 **Backend Developer:**
   • APIs y servicios web
   • Bases de datos
   • Salario: $60k - $150k USD

📊 **Data Scientist:**
   • Análisis de datos
   • Modelos predictivos
   • Salario: $80k - $180k USD

🤖 **ML/AI Engineer:**
   • Modelos de machine learning
   • Deep Learning
   • Salario: $100k - $250k+ USD

⚙️ **DevOps Engineer:**
   • Automatización de infraestructura
   • CI/CD pipelines
   • Salario: $80k - $160k USD

🔬 **Research Scientist:**
   • Investigación en IA
   • Publicaciones académicas
   • Salario: $70k - $200k USD

📈 **Data Analyst:**
   • Business intelligence
   • Dashboards y reportes
   • Salario: $50k - $120k USD`
      },
      {
        icono: '📈',
        titulo: 'La Industria Hoy',
        subtitulo: 'Demanda y tendencias del mercado',
        contenido: `El mercado laboral para Python está en crecimiento constante:

📊 **Demanda Actual:**
   • +2 millones de empleos que requieren Python (2025)
   • Crecimiento anual del 22%
   • Top 3 lenguajes más demandados

🌍 **Mercado Global:**
   • Estados Unidos: Mayor demanda
   • Europa: Crecimiento en Berlín, Ámsterdam
   • Latinoamérica: Hub emergente (Argentina, México, Brasil)
   • Asia: Singapore, India en expansión

💰 **Tendencias Salariales:**
   • Junior (0-2 años): $40k - $70k USD
   • Mid (2-5 años): $70k - $120k USD
   • Senior (5+ años): $120k - $250k+ USD
   • Staff/Principal: $200k - $500k+ USD

🔥 **Habilidades Más Buscadas:**
   1. Python + SQL
   2. Python + Cloud (AWS/Azure)
   3. Python + Machine Learning
   4. Python + Django/FastAPI
   5. Python + Docker/Kubernetes`
      },
      {
        icono: '🎓',
        titulo: 'Caminos de Aprendizaje',
        subtitulo: 'Cómo seguir creciendo',
        contenido: `Tu aprendizaje no termina aquí. Estas son las rutas:

📚 **Cursos y Certificaciones:**
   • Coursera - Especializaciones universitarias
   • edX - Cursos de MIT, Harvard
   • Udemy - Cursos prácticos económicos
   • Pluralsight - Tech skills

🎓 **Bootcamps Intensivos:**
   • General Assembly (12 semanas)
   • Le Wagon (9 semanas)
   • Ironhack (9 semanas)
   • Coderhouse (Latam)

🏆 **Certificaciones Oficiales:**
   • PCAP - Certified Associate Python Programmer
   • PCPP - Certified Professional Python Programmer
   • AWS Certified Developer
   • TensorFlow Developer Certificate

📖 **Recursos Gratuitos:**
   • Python.org - Documentación oficial
   • Real Python - Tutoriales
   • freeCodeCamp - Cursos completos
   • YouTube - Canales especializados`
      },
      {
        icono: '💼',
        titulo: 'Tu Primer Empleo',
        subtitulo: 'Cómo conseguir trabajo',
        contenido: `Pasos concretos para landing tu primer rol:

📁 **1. Armá tu Portfolio:**
   • 3-5 proyectos completos en GitHub
   • Incluí variedad (web, datos, automation)
   • Documentá bien cada proyecto
   • Deploy de al menos 1 proyecto

💾 **2. Optimizá tu GitHub:**
   • README profesional en cada repo
   • Código limpio y comentado
   • Commits frecuentes
   • Proyectos con tests

📄 **3. Tu CV Tech:**
   • Destacá proyectos, no solo educación
   • Incluí tecnologías específicas
   • Link a GitHub y LinkedIn
   • Sin foto (estándar en tech)

🔗 **4. LinkedIn:**
   • Perfil completo en inglés
   • Conectá con recruiters tech
   • Publicá sobre tu aprendizaje
   • Seguí empresas objetivo

🎯 **5. Dónde aplicar:**
   • LinkedIn Jobs
   • Indeed
   • Stack Overflow Jobs
   • RemoteOK (remoto)
   • Empresas directamente`
      },
      {
        icono: '🚀',
        titulo: 'Próximos Pasos',
        subtitulo: 'Tu hoja de ruta sugerida',
        contenido: `Basado en donde estás ahora, esta es la ruta recomendada:

**Mes 1-2: Fundamentos Sólidos**
   ✓ Completar este juego (¡lo lograste!)
   ✓ Practicar en HackerRank/LeetCode fácil
   ✓ Crear 2-3 scripts personales

**Mes 3-4: Primer Proyecto**
   ✓ Elegir un framework (Django o Flask)
   ✓ Construir una aplicación completa
   ✓ Deploy en Heroku/Railway

**Mes 5-6: Especialización**
   ✓ Elegir un camino (web, datos, IA)
   ✓ Curso especializado
   ✓ Proyecto más complejo

**Mes 7-9: Portfolio**
   ✓ 3 proyectos en GitHub
   ✓ Contribuir a open source
   ✓ Networking en LinkedIn

**Mes 10-12: Primer Empleo**
   ✓ Preparar CV y portfolio
   ✓ Aplicar a posiciones junior
   ✓ Practicar entrevistas técnicas

---

**Recordá:** Cada programador senior fue junior alguna vez. La consistencia le gana a la intensidad.

¡Tu viaje comienza ahora! 🎮→💼`
      }
    ],
    consejo: '💡 Consejo: No necesitás saber todo antes de empezar. Aprendé haciendo, fallá, iterá. El mercado laboral valora más proyectos reales que certificaciones.'
  },
  glosario: {
    titulo: 'Glosario de Términos',
    introduccion: 'Diccionario de términos esenciales de Python y programación:',
    categorias: [
      {
        nombre: '🐍 Python y Conceptos Generales',
        terminos: [
          { termino: 'Python', definicion: 'Lenguaje de programación de alto nivel, interpretado y de sintaxis clara. Creado en 1991 por Guido van Rossum.' },
          { termino: 'Lenguaje de programación', definicion: 'Sistema formal de comunicación con instrucciones para que una computadora ejecute tareas.' },
          { termino: 'Código', definicion: 'Conjunto de instrucciones escritas en un lenguaje de programación que la computadora puede ejecutar.' },
          { termino: 'Script', definicion: 'Programa pequeño o conjunto de instrucciones que se ejecuta automáticamente.' },
          { termino: 'Sintaxis', definicion: 'Conjunto de reglas que definen cómo escribir código correcto en un lenguaje de programación.' },
          { termino: 'Interpretado', definicion: 'Tipo de lenguaje que ejecuta el código línea por línea sin compilación previa (ej: Python, JavaScript).' },
          { termino: 'Compilado', definicion: 'Tipo de lenguaje que convierte todo el código a lenguaje máquina antes de ejecutar (ej: C++, Java).' },
          { termino: 'Variable', definicion: 'Espacio en memoria que almacena un valor. Tiene un nombre y un tipo de dato.' },
          { termino: 'Tipo de dato', definicion: 'Clasificación de datos que determina qué operaciones se pueden realizar (int, float, string, boolean).' },
          { termino: 'String', definicion: 'Secuencia de caracteres que representa texto. Se define con comillas: "Hola".' },
          { termino: 'Integer (int)', definicion: 'Número entero sin decimales. Ej: 42, -10, 0.' },
          { termino: 'Float', definicion: 'Número con decimales. Ej: 3.14, -0.5, 2.0.' },
          { termino: 'Boolean (bool)', definicion: 'Tipo de dato que solo puede ser True (verdadero) o False (falso).' },
          { termino: 'Lista', definicion: 'Colección ordenada y mutable de elementos. Se define con corchetes: [1, 2, 3].' },
          { termino: 'Diccionario', definicion: 'Colección de pares clave-valor. Se define con llaves: {"nombre": "Juan"}.' },
          { termino: 'Tupla', definicion: 'Colección ordenada e inmutable de elementos. Se define con paréntesis: (1, 2, 3).' },
          { termino: 'Función', definicion: 'Bloque de código reutilizable que realiza una tarea específica. Se define con "def".' },
          { termino: 'Parámetro', definicion: 'Variable que recibe una función para trabajar con datos de entrada.' },
          { termino: 'Return', definicion: 'Palabra clave que devuelve un valor desde una función.' },
          { termino: 'Condicional (if)', definicion: 'Estructura que ejecuta código solo si se cumple una condición.' },
          { termino: 'Bucle/Loop', definicion: 'Estructura que repite un bloque de código múltiples veces (for, while).' },
          { termino: 'Clase', definicion: 'Plantilla para crear objetos en programación orientada a objetos.' },
          { termino: 'Objeto', definicion: 'Instancia de una clase que contiene datos y métodos.' },
          { termino: 'Método', definicion: 'Función definida dentro de una clase que opera sobre objetos.' },
          { termino: 'Import', definicion: 'Palabra clave para importar módulos o librerías en Python.' },
          { termino: 'Módulo', definicion: 'Archivo Python que contiene funciones, clases y variables reutilizables.' },
          { termino: 'Librería', definicion: 'Conjunto de módulos que proporcionan funcionalidad específica.' },
          { termino: 'Exception', definicion: 'Error que ocurre durante la ejecución del programa y puede ser manejado.' },
          { termino: 'Debug', definicion: 'Proceso de encontrar y corregir errores en el código.' },
          { termino: 'Bug', definicion: 'Error o defecto en el código que causa comportamiento incorrecto.' }
        ]
      },
      {
        nombre: '🌐 Desarrollo Web',
        terminos: [
          { termino: 'Frontend', definicion: 'Parte del desarrollo que se encarga de lo que el usuario ve e interactúa (HTML, CSS, JavaScript).' },
          { termino: 'Backend', definicion: 'Parte del desarrollo que maneja la lógica del servidor, bases de datos y APIs.' },
          { termino: 'Full Stack', definicion: 'Desarrollador que trabaja tanto en frontend como en backend.' },
          { termino: 'API', definicion: 'Interfaz que permite que diferentes aplicaciones se comuniquen entre sí.' },
          { termino: 'REST', definicion: 'Estilo de arquitectura para diseñar APIs usando HTTP.' },
          { termino: 'HTTP', definicion: 'Protocolo de transferencia de hipertexto. Base de comunicación web.' },
          { termino: 'Servidor', definicion: 'Computadora o programa que proporciona servicios o recursos a otros programas.' },
          { termino: 'Cliente', definicion: 'Programa o computadora que solicita servicios a un servidor.' },
          { termino: 'Request', definicion: 'Petición que un cliente envía a un servidor.' },
          { termino: 'Response', definicion: 'Respuesta que un servidor envía a un cliente.' },
          { termino: 'Endpoint', definicion: 'URL específica de una API que realiza una operación determinada.' },
          { termino: 'JSON', definicion: 'Formato ligero de intercambio de datos. Clave-valor como los diccionarios de Python.' },
          { termino: 'Framework', definicion: 'Estructura que proporciona funcionalidad base para desarrollar aplicaciones más rápido.' },
          { termino: 'Django', definicion: 'Framework web de Python de alto nivel. Sigue el patrón MVT. "Batteries included".' },
          { termino: 'Flask', definicion: 'Microframework web de Python. Ligero y flexible, ideal para proyectos pequeños.' },
          { termino: 'FastAPI', definicion: 'Framework moderno de Python para construir APIs rápidas. Soporta async nativamente.' },
          { termino: 'ORM', definicion: 'Mapeo Objeto-Relacional. Permite trabajar con bases de datos usando objetos.' },
          { termino: 'Template', definicion: 'Archivo que define la estructura HTML de una página web con placeholders dinámicos.' }
        ]
      },
      {
        nombre: '🗄️ Bases de Datos',
        terminos: [
          { termino: 'Base de datos', definicion: 'Colección organizada de datos almacenados electrónicamente.' },
          { termino: 'SQL', definicion: 'Lenguaje de consulta estructurado para bases de datos relacionales.' },
          { termino: 'NoSQL', definicion: 'Tipo de base de datos no relacional. Flexible y escalable (ej: MongoDB).' },
          { termino: 'Tabla', definicion: 'Estructura de datos en bases de datos relacionales con filas y columnas.' },
          { termino: 'Query', definicion: 'Consulta para obtener o manipular datos de una base de datos.' },
          { termino: 'Primary Key', definicion: 'Campo único que identifica cada registro en una tabla.' },
          { termino: 'Foreign Key', definicion: 'Campo que referencia a la primary key de otra tabla (relación).' },
          { termino: 'Índice', definicion: 'Estructura que mejora la velocidad de búsqueda en una base de datos.' },
          { termino: 'PostgreSQL', definicion: 'Sistema de base de datos relacional open source. Potente y estable.' },
          { termino: 'MySQL', definicion: 'Sistema de base de datos relacional popular. Usado en muchas aplicaciones web.' },
          { termino: 'MongoDB', definicion: 'Base de datos NoSQL orientada a documentos. Usa formato similar a JSON.' },
          { termino: 'Redis', definicion: 'Base de datos en memoria. Usada como caché y mensajería.' }
        ]
      },
      {
        nombre: '🛠️ Herramientas y DevOps',
        terminos: [
          { termino: 'Git', definicion: 'Sistema de control de versiones distribuido. Permite rastrear cambios en el código.' },
          { termino: 'GitHub', definicion: 'Plataforma para alojar repositorios Git. Colaboración y versionado.' },
          { termino: 'Repositorio', definicion: 'Carpeta que contiene un proyecto Git con todo su historial.' },
          { termino: 'Commit', definicion: 'Guardado de cambios en el historial de Git.' },
          { termino: 'Branch', definicion: 'Rama de desarrollo paralela en Git.' },
          { termino: 'Merge', definicion: 'Combinar cambios de una rama a otra en Git.' },
          { termino: 'Pull Request', definicion: 'Solicitud para fusionar cambios de una rama a otra en GitHub.' },
          { termino: 'Terminal', definicion: 'Interfaz de línea de comandos para interactuar con el sistema.' },
          { termino: 'Consola', definicion: 'Interfaz para ejecutar comandos y ver resultados.' },
          { termino: 'IDE', definicion: 'Entorno de Desarrollo Integrado. Editor de código con herramientas avanzadas.' },
          { termino: 'VS Code', definicion: 'Editor de código de Microsoft. Gratuito, extensible y popular.' },
          { termino: 'PyCharm', definicion: 'IDE profesional para Python de JetBrains. Versión Community gratuita.' },
          { termino: 'Deploy', definicion: 'Proceso de publicar una aplicación en un servidor para producción.' },
          { termino: 'Docker', definicion: 'Plataforma para crear y ejecutar contenedores. Aísla aplicaciones del entorno.' },
          { termino: 'Container', definicion: 'Paquete que incluye una aplicación con todas sus dependencias.' },
          { termino: 'Cloud', definicion: 'Computación en la nube. Servicios ejecutados en servidores remotos.' },
          { termino: 'AWS', definicion: 'Amazon Web Services. Plataforma de cloud computing más grande.' },
          { termino: 'CI/CD', definicion: 'Integración y Entrega Continua. Automatización del deploy de código.' }
        ]
      },
      {
        nombre: '🧪 Testing y Calidad',
        terminos: [
          { termino: 'Test', definicion: 'Código que verifica que otro código funcione correctamente.' },
          { termino: 'Unit Test', definicion: 'Test que verifica una unidad individual de código (función, método).' },
          { termino: 'pytest', definicion: 'Framework de testing para Python. Simple y poderoso.' },
          { termino: 'unittest', definicion: 'Módulo estándar de Python para testing.' },
          { termino: 'Logging', definicion: 'Registro de eventos y mensajes durante la ejecución del programa.' },
          { termino: 'Coverage', definicion: 'Medida de cuánto código está cubierto por tests.' }
        ]
      },
      { termino: '💰 Contexto Laboral', definicion: 'Términos relacionados con el trabajo en tecnología.' },
      {
        nombre: '💼 Contexto Laboral',
        terminos: [
          { termino: 'Junior', definicion: 'Desarrollador con 0-2 años de experiencia. Enfocado en aprender.' },
          { termino: 'Mid-Level', definicion: 'Desarrollador con 2-5 años de experiencia. Más autonomía.' },
          { termino: 'Senior', definicion: 'Desarrollador con 5+ años de experiencia. Lidera y mientorea.' },
          { termino: 'Tech Lead', definicion: 'Líder técnico. Guía al equipo en decisiones de arquitectura.' },
          { termino: 'Remote', definicion: 'Trabajo a distancia. Sin oficina física.' },
          { termino: 'Stack', definicion: 'Conjunto de tecnologías usadas en un proyecto o empresa.' },
          { termino: 'Portfolio', definicion: 'Colección de proyectos que demuestran tus habilidades.' },
          { termino: 'Open Source', definicion: 'Código abierto. Proyectos públicos donde cualquiera puede contribuir.' },
          { termino: 'Networking', definicion: 'Red de contactos profesionales. Importante para oportunidades.' },
          { termino: 'Code Review', definicion: 'Revisión de código por otros desarrolladores antes de mergear.' }
        ]
      }
    ]
  }
};
