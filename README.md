# PEC 6: Frameworks: Servicios en Angular
Login UOC: agalanpa

Alumno: Adrián Galán Pacheco

## Descripción de la práctica
Esta práctica se compone de cinco ejercicios.

### Ejercicio 1: Preguntas teórcias sobre servicios Angular
Este ejercicio consiste en responder cinco preguntas teóricas sobre componentes, servicios, inyección de dependencias, programación reactiva, promesas y observables y la función `async`.

No me ha resultado complicado gracias a la documentación que hay por Internet. Para la primera pregunta [Componentes de Angular](https://v17.angular.io/guide/component-overview) y [Servicios de Angular](https://v17.angular.io/guide/architecture-services) me han resultado de gran ayuda para saber qué son y cuáles son las funciones de los componentes y servicios. Para la segunda pregunta, he leído [Inyección de dependencias de Angular](https://v17.angular.io/guide/architecture-services#dependency-injection-di) para saber qué es la inyección de dependencias y el decorador `@Injectable`. Para la tercera pregunta, he usado documentación de RxJS respecto a cada uno de los conceptos: [Observables](https://www.rxjs.es/conceptos/observables), [Subscription](https://www.rxjs.es/conceptos/subscription), [Operators](https://www.rxjs.es/conceptos/operators), [Subject](https://www.rxjs.es/conceptos/subjects) y [Schedulers](https://www.rxjs.es/conceptos/schedulers). Para la cuarta pregunta he usado información de la página de [Observables](https://www.rxjs.es/conceptos/observables) y mis conocimientos sobre promesas. Para la última pregunta he leído [AsyncPipe](https://angular.dev/api/common/AsyncPipe).

### Ejercicio 2: Servicios
Este ejercicio consiste en la creación de un nuevo servicio llamado `article-service` que contendrá la lógica de la aplicación. También se pide usar `observables` y `async`. Además, también se pide contestar a unas preguntas teóricas.

Leyendo el teoria proporcionada en el [Capítulo 8 de Learning O'Reilly](https://learning.oreilly.com/library/view/angular-up-and/9781491999820/ch08.html#idm139828124145984) me ha sido fácil incorporar un servicio y aplicar `observables` y `async`. Para contestar a las preguntas teóricas, he usado información sobre [Providers](https://angular.io/guide/providers) y he leído el [artículo de referencia del enunciado](https://dev.to/christiankohler/improved-dependeny-injection-with-the-new-pr
ovidedin-scopes-any-and-platform-30bb).

### Ejercicio 3: Preguntas teóricas sobre interceptores
Este ejercicio consiste en responder dos preguntas teóricas sobre interceptores y operadores de RxJS.

Para contestar la primera pregunta de interceptores, he usado el siguiente [artículo](https://www.jesuscuesta.blog/que-es-un-interceptor-en-angular/). Respecto a los operadores, he usado las siguientes páginas: [startWith](https://www.learnrxjs.io/learn-rxjs/operators/combination/startwith), [debounceTime](https://www.rxjs.es/operadores/filtering/debouncetime), [distinctUntilChanged](https://www.rxjs.es/operadores/filtering/distinctuntilchanged), [merge](https://www.rxjs.es/operadores/combination/merge), [switchMap](https://www.rxjs.es/operadores/transformation/switchmap).

### Ejercicio 4: HttpClient
Este ejercicio consiste en comprobar el correcto funcionamiento del servidor. Además, se pide cambiar el servicio de `article-service` para hacer peticiones HTTP, colocar imágenes a los artículos y agregar un buscador de artículos.

Este ejercicio me ha resultado un poco más complejo que el resto, pero leyendo el [Capítulo 9 de Learning O'Reilly](https://learning.oreilly.com/library/view/angular-up-and/9781491999820/ch09.html#idm139828120723600) y ejemplos por Internet, he sido capaz de realizar el ejercicio.

### Ejercicio 5: Pipes
Este ejercicio consiste en implementar pipes para que el precio de los artículos tenga dos decimales y se muestre el símbolo €. Además, también se pide crear una pipe personalizada para que si el campo imageUrl del servicio viene con una cadena vacía, muestre una imagen por defecto.

Implementar la primera pipe me ha resultado fácil. Para realizar el pipe personalizado me he inspirado en el siguiente [tutorial de Angular](https://angular.dev/tutorials/learn-angular/24-create-a-pipe).