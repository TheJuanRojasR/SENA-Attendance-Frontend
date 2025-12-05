# Estructura del proyecto

Explicación rápida de para qué sirve cada carpeta del proyecto. Esta es una `ESTRUCTURA POR TIPO DE ARCHIVO`.

## Raíz del proyecto

- `index.html`: HTML base donde Vite monta la app de React.
- `package.json`: Dependencias y scripts (dev, build, preview, etc.).
- `pnpm-lock.yaml`: Bloquea versiones de dependencias para todos.
- `tsconfig*.json`: Configuración de TypeScript.
- `vite.config.ts`: Configuración de Vite (dev server y build).
- `eslint.config.js`: Reglas de ESLint para mantener el código limpio.
- `public/`: Archivos estáticos que se sirven tal cual (icons, imágenes públicas).
- `dist/`: Carpeta generada automáticamente al hacer el build de producción.
- `README.md`: Resumen del proyecto y cómo ejecutarlo.

## `src/` (código de la aplicación)

Todo el código de la app vive aquí.

- `main.tsx`: Punto de entrada de React. Monta la app en el DOM.
- `App.tsx`: Componente raíz donde normalmente se conecta el router.

### `src/assets/`
Recursos estáticos usados dentro de la app (imágenes, íconos, etc.).

### `src/components/`
Componentes reutilizables que se usan en varias pantallas.

- `src/components/ui/`: Componentes de interfaz básicos (botones, inputs, selects, etc.).

### `src/pages/`
Pantallas principales de la app, normalmente asociadas a rutas.

- `src/pages/admin/`: Vistas para el rol administrador.
- `src/pages/apprentice/`: Vistas para aprendices.
- `src/pages/auth/`: Vistas públicas de autenticación (login, registro, recuperación).
- `src/pages/instructor/`: Vistas para instructores.

### `src/layouts/`
Estructuras de layout compartidas (por ejemplo, layouts con navbar y/o sidebar).

### `src/router/`
Configuración de las rutas de la app (qué página se muestra en cada URL).

### `src/services/`
Capa de acceso a datos y APIs.

- `api.ts`: Configuración del cliente HTTP para hablar con el backend.

### `src/hooks/`
Custom hooks de React para lógica reutilizable (formularios, datos, etc.).

### `src/styles/`
Estilos globales y variables de diseño.

- `index.css`: Estilos globales de la aplicación.
- `variables.css`: Variables de colores, tipografías, tamaños, etc.

### `src/types/`
Tipos e interfaces TypeScript compartidos (ej: tipos de usuario, asistencia, etc.).

### `src/utils/`
Funciones de ayuda genéricas (formatear fechas, validar datos, etc.).

### `src/stores/`
Aquí vivirán los stores de estado global (por ejemplo, con Zustand),
como `useAuthStore`, `useAttendanceStore`, etc.

