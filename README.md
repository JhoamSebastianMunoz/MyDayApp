<!-- prettier-ignore -->
<div align="center">

# My Day

**Captura lo que quieres hacer hoy. Una sola lista, un solo lugar.**

[![Demo en Vercel](https://img.shields.io/badge/Demo-Vercel-black?style=flat-square&logo=vercel)](https://my-day-app-mu.vercel.app)
[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router-6-ca4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com)

[Demo](#demo) • [Características](#características) • [Empezar](#empezar) • [Estructura](#estructura-del-proyecto) • [Tecnologías](#tecnologías)

</div>

**My Day** es una aplicación de tareas (to-do) para organizar tu día. Agrega lo que necesitas hacer, márcalo al terminarlo y mantén todo en una sola lista, sin cuentas ni servidores: los datos viven en tu navegador.

La interfaz sigue un lenguaje visual de agenda: la fecha del día abre la página, las tareas corren en una única columna, y un solo acento de color señala lo activo y lo completado.

> [!NOTE]
> Tus tareas se guardan en `localStorage` bajo la clave `mydayapp-reactjs`. Nada sale de tu dispositivo y la lista se conserva entre sesiones.

## Características

- Agregar tareas desde el formulario (Enter o botón **Add**).
- Marcar y desmarcar tareas como completadas.
- Editar una tarea con doble clic (Enter para guardar, Escape para cancelar).
- Eliminar tareas individuales.
- Filtrar por **All**, **Pending** y **Completed**.
- Vaciar las tareas completadas con **Clear completed**.
- Contador de tareas pendientes.
- Persistencia automática en el navegador.
- Diseño responsive, con foco de teclado visible y respeto por `prefers-reduced-motion`.

## Demo

La aplicación está desplegada en Vercel: **https://my-day-app-mu.vercel.app**

## Empezar

### Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm (incluido con Node.js)

### Instalación

```bash
git clone https://github.com/JhoamSebastianMunoz/my-day-react.git
cd my-day-react
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre la URL que imprime Vite (por defecto `http://localhost:5173`).

### Build de producción

```bash
npm run build
npm run preview
```

> [!TIP]
> `npm run preview` sirve localmente el resultado de `npm run build` para que verifiques el bundle antes de desplegar.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga en caliente. |
| `npm run build` | Genera el bundle de producción en `dist/`. |
| `npm run preview` | Sirve localmente el bundle de producción. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |

## Estructura del proyecto

```
my-day-react/
├── public/
├── src/
│   ├── Components/
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── TaskInput/
│   │   │   ├── TaskInput.css
│   │   │   └── TaskInput.jsx
│   │   └── TaskList/
│   │       ├── TaskList.css
│   │       └── TaskList.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Cómo funciona

- **Estado y persistencia.** `App.jsx` mantiene la lista de tareas y la sincroniza con `localStorage`, así que la lista sobrevive a recargas y cierres del navegador.
- **Filtros.** Los filtros se apoyan en las rutas de React Router: `/all`, `/pending` y `/completed`. La ruta activa determina qué tareas se muestran.
- **Composición.** La interfaz se divide en tres componentes: `TaskInput` (captura), `TaskList` (revisión y edición) y `Footer` (conteo, filtros y limpieza).

## Tecnologías

- **React 18** — interfaz basada en componentes y hooks.
- **Vite 5** — servidor de desarrollo y build.
- **React Router 6** — rutas para los filtros de la lista.
- **CSS por componente** — hojas de estilo co-locadas, sobre un sistema de tokens en `src/index.css`.
- **ESLint** — reglas de estilo y detección de errores.

## Despliegue

El proyecto está desplegado en Vercel. Para publicar tus propios cambios, conecta el repositorio en [Vercel](https://vercel.com/new) y usa la configuración detectada por defecto:

| Ajuste | Valor |
| --- | --- |
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
