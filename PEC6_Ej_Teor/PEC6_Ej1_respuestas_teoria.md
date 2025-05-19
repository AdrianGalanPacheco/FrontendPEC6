# ¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)
Los componentes son el contenido principal de las aplicaciones Angular. Son responsables de la interfaz de usuario y de gestionar la lógica visual de una parte específica de un proyecto. Contienen HTML (estructura), CSS (apariencia) y TypeScript (lógica). Se encargan de mostrar datos al usuario, recibir eventos y comunicarse con otros componentes.

Los servicios son clases con un propósito específico. Son responsables de la lógica que no involucra la vista ni la lógica de la aplicación y de manejar los datos compartidos entre componentes. Contienen métodos para acceder a bases de datos y lógica reutilizable no relacionada con la interfaz. Se encargan de abstraer la lógica de datos y de inyectarse en los componentes con la inyección de dependencias.

# ¿Qué es la <inyección de dependencias>? ¿Para qué sirve el decorador `@Injectable`?
La inyección de dependencias es un patrón de diseño que proporciona a los componentes acceso a servicios y otros recursos.

`@Injectable` es un decorador usado para marcar una clase de servicio, permitiendo que pueda ser inyectada en un componente como una dependencia.

# Explica los siguientes conceptos de la programación reactiva que se usan en RxJS.
 * **`Observable`:** Flujo de datos asíncrono que puede emitir múltiples valores a lo largo del tiempo. Permite emitir y observar eventos.
 * **`Subscription`:** Objeto que representa la ejecución de un `Observable`. Permite controlar el flujo de datos y cancelar la suscripción.
 * **`Operators`:** Funciones que permiten transformar, filtrar, combinar y controlar los valores emitidos por un `Observable`. Hay dos tipos: el operador de tubería (no modifica la instancia `Observable` existente) y el operador de creación (crea un nuevo `Observable`).
 * **`Subject`:** Tipo especial de `Observable` que permite la multidifusión de valores a muchos `Observable`. Permite emitir datos manualmente, escuchar datos y comunicar componentes enviando datos a múltiples observadores.
 * **`Scheduler`:** Controla cuándo y dónde se ejecuta un `Observable`. Permite gestionar cuándo comienza una suscripción y cuándo se envían las notificaciones.

# ¿Cuál es la diferencia entre promesas y observables?
Hay múltiples diferencias entre promesas y observables. La principal es el número de valores que pueden emitir: las promesas solo pueden enviar un único valor, mientras que los observables pueden enviar múltiples valores a lo largo del tiempo. Además, las promesas se ejecutan en el instante de crearse y no pueden ser canceladas, mientras que los observables se ejecutan al suscribirse y pueden cancelarse desuscribiéndose.

# ¿Cuál es la función de la tubería (`pipe`) `async`?
La tubería `async` permite suscribirse automáticamente a un `Observable` o `Promise` y mostrar su valor directamente. Esta tubería permite suscribirse automáticamente, extraer el valor emitido y mostrarlo, cancelar la suscripción al destruirse el componente y actualizarse automáticamente cuando se emiten nuevos valores.