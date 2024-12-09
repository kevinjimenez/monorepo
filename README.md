# Micro frontend
## Inicio
### Projecto ejemplo de microfrontends en una artitetura de monorepos con native federation

1. Crear el workspace donde estaran los microd (projects)
```shell
ng new dragon-ball-workspace no-create-application
```

2. Crear el micro host
```shell
ng generate application layout
```

3. Crear el micro remote
```shell
ng generate application characters
```

4. Instalar el paquete de native federation dentro del workspace donde usaran los micros
```shell
npm i @angular-architects/native-federation
```

5. Dentro del micro host inicia el native federation, donde se reemplaza <name_project> por el nombre del projecto del host
```shell
ng g @angular-architects/native-federation:init --project <name_project> --port 4200 --type dynamic-host
```


6. Dentro del micro host inicia el native federation, donde se reemplaza <name_project> por el nombre del projecto del remote
```shell
ng g @angular-architects/native-federation:init --project <name_project> --port 4201 --type remote
```

## Estilos
1. Para los estilos se usa tailwindcss, se instala la libreria
```shell
npm install -D tailwindcss postcss autoprefixer
```

2. Iniciamos tailwindcss
```shell
npx tailwindcss init
```

3. Dentro del archivo ***tailwind.config.js*** se agrega el content:
```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Dentro de cada projecto en el directorio ./src/styles.css, agregar estos componentes
```css
// styles.css

/* You can add global styles to this file, and also import other style files */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
