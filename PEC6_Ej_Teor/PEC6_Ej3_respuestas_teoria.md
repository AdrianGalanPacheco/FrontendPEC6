# ¿Qué son los interceptores?
Los interceptores son funciones que se ejecutan para cada solicitud y permiten modificar las solicitudes y respuestas HTTP. Los interceptores permiten modificar una petición saliente antes de que se envíe al servidor, interceptar una respuesta entrante antes de que llegue al componente, registrar, transformar y cancelar solicitudes o respuestas.

# Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los pasos que se están desarrollando y explica en qué caso usarías este código:
```
this.wines$ = this.searchSubject
  .startWith(this.searchTerm)
  .debounceTime(300)
  .distinctUntilChanged()
  .merge(this.reloadProductsList)
  .switchMap((query) => this.wineService.getWine(this.searchTerm));
```
* **`this.searchSubject`:** Permite emitir valores manualmente, ya que es un `Subject`.
* **`startWith(this.searchTerm)`:** Emite primero el valor inicial `this.searchTerm` antes de cualquier otro.
* **`debounceTime(300)`:** Espera 300 ms después del último valor emitido antes de continuar.
* **`distinctUntilChanged()`:** Emite solo cuando el valor emitido es diferente al anterior.
* **`merge(this.reloadProductsList)`:** Combina los valores actuales con los valores de entrada emitidos por `reloadProductsList`.
* **`switchMap((query) => this.wineService.getWine(this.searchTerm))`:** Transforma cada valor emitido en una nueva petición HTTP con `this.wineService.getWine(...)`.

Este código se usaría en búsquedas reactivas de productos, ya que hace peticiones HTTP solo cuando el usuario termina de escribir (`debounceTime()`), evita repetir búsquedas (`distinctUntilChanged()`), permite recargar la lista manualmente (`merge()`) y cancela automáticamente peticiones anteriores si se hace una nueva (`switchMap()`).