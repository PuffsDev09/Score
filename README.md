# SCORE

SCORE es una aplicación orientada a celulares y tablets para crear rúbricas y evaluar competencias.

Actualmente incluye la base técnica del proyecto con React, TypeScript y Vite, una pantalla de bienvenida adaptable, pruebas de componentes, comprobaciones de calidad y una integración continua básica.

## Requisitos previos

- [Node.js 24.15.0](https://nodejs.org/) (incluye npm).
- Git.

## Instalación y ejecución

```bash
git clone https://github.com/PuffsDev09/Score.git
cd Score
npm ci
npm run dev
```

Vite mostrará la dirección local para abrir la aplicación en el navegador. Para exponerla a otros dispositivos de la misma red, ejecuta `npm run dev -- --host`.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Comprueba tipos y genera la compilación en `dist/`. |
| `npm run preview` | Previsualiza la compilación generada. |
| `npm run typecheck` | Comprueba todos los proyectos TypeScript configurados. |
| `npm run lint` | Ejecuta ESLint. |
| `npm run test` | Ejecuta Vitest en modo interactivo. |
| `npm run test:ci` | Ejecuta las pruebas una sola vez. |

## Estructura

```text
src/
├── application/  # Casos de uso y coordinación futura
├── data/
│   ├── local/    # Persistencia local futura
│   └── remote/   # Servicios remotos futuros
├── domain/       # Reglas y modelos de negocio futuros
├── features/     # Funcionalidades de la interfaz futuras
├── platform/     # Adaptadores de plataforma futuros
├── App.tsx       # Pantalla inicial
└── main.tsx      # Punto de entrada
```

## Integración continua

GitHub Actions se ejecuta en cada `push` y `pull_request`. Usa Node.js `24.15.0`, instala las dependencias reproduciblemente con `npm ci` y ejecuta `typecheck`, `lint`, `test:ci` y `build`. El flujo no publica ni necesita secretos.
