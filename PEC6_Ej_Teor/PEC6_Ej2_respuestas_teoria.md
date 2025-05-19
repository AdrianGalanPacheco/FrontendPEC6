# ¿Cuál es la diferencia entre definir un servicio usando el decorador `@Injectable` o `@NgModule`?
`@Injectable` permite inyectar el servicio en cualquier clase que lo necesite. Además, Angular puede optimizar el proyecto eliminando el servicio de la aplicación si no se utiliza.

`@NgModule` solo permite instanciar el servicio en los componentes del `NgModule` en cuestión.

# ¿Qué otras opciones admiten el decorador `@Injectable` para la propiedad `ProvidedIn`? ¿Para qué sirven las otras configuraciones?
Estas son las opciones que admite `@Injectable`:
* **`root`:** El servicio se registra en el inyector a nivel de raíz. Permite crear una instancia única global compartida en toda la aplicación.
* **`platform`:** El servicio se registra en el inyector a nivel de plataforma. Permite compartir el servicio entre aplicaciones en una misma página.
* **`any`:** El servicio se registra en el inyector del módulo que lo importa. Permite el uso de librerías que se usan en aplicaciones con múltiples módulos y es útil para servicios que deben ser aislados por módulo.