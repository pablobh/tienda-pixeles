# Tienda Pixeles
![Vercel](https://vercelbadge.vercel.app/api/pablobh/tienda-pixeles?style=plastic)

Sitio de eCommerce creado con `create-react-app` para el curso de ReactJS de Coder House.

Herramientas/tecnologías utilizadas:
- [React v17.0.1](https://reactjs.org/)
- [React Router v5.2.0](https://reactrouter.com/)
- [Bulma v0.9.1](https://bulma.io/)
- [Bulma Badge v1.0.1](https://github.com/CreativeBulma/bulma-badge)
- [React Icons v4.1.0](https://react-icons.github.io/react-icons)
- [Firebase](https://firebase.google.com/)

## Instrucciones para arrancar el proyecto

1. Clonar el repositorio
```sh
git clone https://github.com/pablobh/tienda-pixeles.git
```

2. Cambiamos el directorio al de repositorio que acabamos de clonar
```sh
cd tienda-pixeles
```

3. Instalamos las dependencias con Yarn:
```sh
yarn install
```

4. Creamos el archivo `.env` donde estarán todos los datos de configuración de Firebase (puedes tomar como base el archivo `.env.example`), tu archivo debería quedar así:

```dosini
REACT_APP_API_KEY=Aquí-va-tu-apiKey
REACT_APP_AUTH_DOMAIN=Aquí-va-tu-authDomain
REACT_APP_PROJECT_ID=Aquí-va-tu-projectId
REACT_APP_BUCKET=Aquí-va-tu-storageBucket
REACT_APP_MSG_SENDER_ID=Aquí-va-tu-messagingSenderId
REACT_APP_APP_ID=Aquí-va-tu-appId
```

### ¿Y el CSS dónde está?
- En la carpeta `src/styles` hay 2 archivos que componen la configuración general de los estilos usados en el proyecto:
    - `App.scss` - Aquí están todos los módulos de Bulma, solo se importan los que se necesiten/usen en el proyecto, adicionalmente aquí se deben llamar los scss adicionales que se usen en el proyecto.
    - `_settings.scss` - Define las variables de Bulma y la configuración de fuentes, colores, márgenes, etc que se usan en el proyecto.

---
## Scripts disponibles

`yarn start`

Para arrancar el proyecto en modo desarrollo. El proyecto estará disponible en [http://localhost:3000](http://localhost:3000) y se recargará automáticamente cada vez que se edite algún archivo, adicionalmente en la consola mostrará los errores de linting.

`yarn build`

Compila la aplicación para producción en la carpeta `build`\
Esta versión estará con React en modo de producción con todas las optimizaciones y minificaciones necesarias. Después de compilarla, la aplicación quedará lista para el deploy. 