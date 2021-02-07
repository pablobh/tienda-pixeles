# Tienda Pixeles

Sitio de eCommerce creado con `create-react-app` para el curso de ReactJS de Coder House.

Herramientas/tecnologías utilizadas:
- React 17.0.1
- React Router 5.2.0
- Bulma 0.9.1
- React Icons 4.1.0

## Estructura del proyecto
### SCSS
- En la carpeta `src/styles` hay 2 archivos que componen la configuración general de los estilos usados en el proyecto:
    - `App.scss` - Aquí están todos los módulos de Bulma, solo se importan los que se necesiten/usen en el proyecto, adicionalmente aquí se deben llamar los scss adicionales que se usen en el proyecto.
    - `_settings.scss` - Define las variables de Bulma y la configuración de fuentes, colores, márgenes, etc que se usan en el proyecto.




## ¿Cómo trabajar en el proyecto?

1. Clonar el repositorio
`git clone `

2. Cambiamos el directorio al de repositorio que acabamos de clonar
`cd tienda-pixeles``

3. Instalamos las dependencias con Yarn:
`yarn install`

4. 




---
## Comandos disponibles

`yarn start`

Para arrancar el proyecto en modo desarrollo. El proyecto estará disponible en [http://localhost:3000](http://localhost:3000) y se recargará automáticamente cada vez que se edite algún archivo, adicionalmente en la consola mostrará los errores de linting.

`yarn build`

Compila la aplicación para producción en la carpeta `build`\
Esta versión estará con React en modo de producción con todas las optimizaciones y minificaciones necesarias. Después de compilarla, la aplicación quedará lista para el deploy. 