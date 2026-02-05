# ePayco Wallet Front

Este es el frontend de la billetera digital ePayco, construido con tecnologías modernas para ofrecer una experiencia rápida y segura.

## 🚀 Cómo levantar el proyecto

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Instalar dependencias:**
    Asegúrate de tener instalado Node.js. Luego ejecuta:
    ```bash
    npm install
    # o
    pnpm install
    # o
    yarn install
    ```

2.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`.

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    El proyecto estará disponible en `http://localhost:5173` (por defecto).

## 🔑 Variables de Entorno y API

El proyecto requiere la configuración de la conexión con el backend. Crea un archivo `.env` con las siguientes variables:

```env
VITE_URL_API=http://localhost:3001/api
```

-   `VITE_URL_API`: La URL base de la API del backend. Asegúrate de que apunte al servidor correcto.

## 🏗 Arquitectura del Proyecto

El proyecto sigue una arquitectura basada en **Features** (Características), lo que permite escalar y mantener el código de manera eficiente.

```
src/
├── features/         # Módulos principales de la aplicación
│   ├── wallet/       # Lógica y componentes de la billetera (Saldo, Recargas, Pagos)
│   ├── clients/      # Gestión de clientes y perfiles
│   └── welcome/      # Pantallas de bienvenida y onboard
├── components/       # Componentes UI reutilizables (Botones, Inputs, Modales)
├── hooks/            # Hooks personalizados
├── lib/              # Utilidades y funciones auxiliares
├── pages/            # Páginas de la aplicación (Rutas)
└── types/            # Definiciones de tipos TypeScript globales
```

Cada *feature* contiene sus propios componentes, servicios, tipos y hooks, manteniendo el código desacoplado.

## 📦 Paquetes Utilizados

A continuación se detallan las principales librerías utilizadas y su propósito:

### Core & Framework
-   **React**: Librería principal para construir la interfaz de usuario.
-   **Vite**: Entorno de desarrollo y bundler ultrarrápido.
-   **TypeScript**: Superset de JavaScript que añade tipado estático para mayor seguridad.
-   **React Router**: Manejo de rutas y navegación en la aplicación.

### UI & Estilos
-   **TailwindCSS**: Framework de utilidades CSS para diseño rápido y responsivo.
-   **Radix UI**: Primitivas de componentes accesibles y sin estilos (base para componentes UI).
-   **Lucide React**: Conjunto de iconos ligeros y consistentes.
-   **Next Themes**: Manejo de temas (modo oscuro/claro).
-   **clsx / tailwind-merge**: Utilidades para combinar clases de Tailwind condicionalmente.
-   **Sonner**: Librería para notificaciones tipo "toast" elegantes.

### Gestión de Estado y Formularios
-   **React Hook Form**: Manejo eficiente de formularios con validación.
-   **Zod**: Esquemas de validación de datos (integrado con React Hook Form).

### Comunicación
-   **Axios**: Cliente HTTP para realizar peticiones a la API.

### Otros
-   **Input OTP**: Componente especializado para entradas de códigos OTP.
-   **ESLint / Prettier**: Herramientas para asegurar la calidad y formato del código.
