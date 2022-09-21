# BLOQUES FUNDAMENALES DE ANGULAR

`COMPONENTES`
Es un bloque de codigo que tiene su `HTML` integrado y tiene su `TS` que usual mente es una clase que tiene un decorador `@nombre_funcion`

`RUTAS`
Mostrar diferetes componentes basados en el `URL` del navegador web o cliente

`DIRECTIVAS`
# .COMPONENTES
contiene HTML reutilizable al cual tu puedes injectar en tu codigo y te crea ese HTML con cierta fucnionalidad

# .ESTRUCTURALES
modifican el `DOM`(HTML), añadiendo elementos o removiendo elementos

# .ATRIBUTOS
cambian la apariencia o el comportamiento de elementos, componentes o directivas

`SERVICIOS`(http://blog.enriqueoriol.com/2018/08/que-es-redux.html)

# ¿Qué es la gestión de estado (state management)?
En programación, se podría definir «estado» como el conjunto de todos los valores almacenados por la aplicación mediante propiedades o variables en cualquier momento de ejecución.

En frontend, el estado puede incluir las respuestas del servidor y la información cacheada, así como datos generados directamente en local que no se han guardado en servidor. A eso hay que añadirle el estado de la interfaz: rutas activas, tabs seleccionados, spinners, controles de paginación…

# La gestión de estado consiste en asegurar que la UI muestre correctamente el estado actual de la aplicación y es un pilar fundamental en frontend.

Para apps pequeñas no es un problema, todos los frameworks modernos (Angular, React, Vue) proporcionan sus propios mecanismos para almacenar el estado, al margen de Redux.

# ¿Tiene sentido usar Redux con Angular?

A nivel organizativo, Angular tiene bastante bien solucionada la gestión de estados, pero donde realmente puede ayudar Redux es en el proceso de desarrollo y debuging.

Déjame aclarar algunas diferencias de la gestión de estado original de Angular frente a la de React.

Si prescindes de Redux, en React tienes componentes con estado, que para comunicarlo, pasan el valor de padres a hijos a través de sus propiedades. Eso significa que si tienes un árbol muy grande de componentes, para pasar el estado del componente superior al componente inferior tienes que irlo pasando componente a componente por todos los nodos intermedios. Y eso no mola nada.

# En Angular, la forma habitual de almacenar el estado es a través de servicios, que son objetos singleton a los que puede acceder cualquier componente mediante la inyección de dependencias YA QUE SON LOS LUGARES CENTRALES DE INFORMACIÓN. Volviendo al ejemplo, para pasar el estado del componente superior al inferior en Angular, solo necesitas que ambos inyecten el servicio que contiene dicho estado.

# Esta diferencia hace que en Angular no sea tan necesario el uso de Redux hasta que la aplicación no se vuelve realmente grande.

`MODULOS`

Modulariza todo el proyecto como en `PYTHON`

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# COMANDOS DE CONSOLA
`ng new NAME`.- Crea el proyecto de ANGULAR
`ng serve -o`.- Tras pilar el codigo a JS, monta un servidor mediante WEBPACK y lo habre en cuanto termina
`ng g c heroes/listado`.- Crea un nuevo componente (evitat pruebas y estilos: --skip-tests -s)
`ng g m NOMBRE`.- Crea un nuevo modulo (evitat pruebas: --skip-tests)
`ng g s gifs/services/gifs` .- Crea un nuevo Servicio
`debugger`.- Es como un Breakpoint en el JS al momento de su ejecucion
`ng build --configuration=production` .- Poner en produccion el proyecto
# -------------------------NOTAS DE COMPONENTS.HTML-----------------------------------------------------------------------
`[]`.- Establecer (emitir) algun valor de JS a una propiedad de HTML
`()`.- Escuchar eventos de los Modules.ts
`.trim()`.- Elimina espacios en blanco en JS
# Formularios
`[(ngModel)]="nuevo.nombre"` Emite(escribe) y escucha(obtiene) el valor de la propiedad, y la almacena en la pripiedad con el mismo nombre 