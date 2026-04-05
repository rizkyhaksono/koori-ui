# create-koori-app

Scaffold a new [Koori UI](https://github.com/rizkyhaksono/koori-ui) project in seconds.

## Usage

```bash
npx create-koori-app my-app
```

Or with a specific package manager:

```bash
npx create-koori-app
# → prompts for project name, theme, and package manager
```

## What you get

- **Next.js 15** app with App Router
- **Koori UI** pre-installed with `KooriProvider` configured
- **Dark/Light/System** theme switching out of the box
- **TypeScript** with strict mode
- Ambient glassmorphism background effects
- A starter page ready to edit

## Options

| Prompt | Choices | Default |
|---|---|---|
| Project name | any string | `my-koori-app` |
| Default theme | Dark, Light, System | Dark |
| Package manager | npm, pnpm, yarn, bun | npm |

You can also pass the project name directly:

```bash
npx create-koori-app my-app
```

## After scaffolding

```bash
cd my-app
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start building.

## License

MIT
