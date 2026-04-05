#!/usr/bin/env node
import { execSync } from "node:child_process";
import { cpSync, mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import prompts from "prompts";
import kleur from "kleur";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const TEMPLATE_DIR = resolve(__dirname, "../template");

async function main() {
    console.log();
    console.log(kleur.bold().cyan("  ✦ create-koori-app"));
    console.log(kleur.dim("  Glassmorphism UI starter powered by Koori UI + Next.js\n"));

    const args = process.argv.slice(2);
    let projectName = args[0]?.trim();

    if (!projectName) {
        const res = await prompts({
            type: "text",
            name: "projectName",
            message: "Project name:",
            initial: "my-koori-app",
        });
        if (!res.projectName) {
            console.log(kleur.red("  Cancelled."));
            process.exit(1);
        }
        projectName = res.projectName.trim();
    }

    const { defaultTheme } = await prompts({
        type: "select",
        name: "defaultTheme",
        message: "Default theme:",
        choices: [
            { title: "Dark", value: "dark" },
            { title: "Light", value: "light" },
            { title: "System (follows OS)", value: "system" },
        ],
        initial: 0,
    });

    const { packageManager } = await prompts({
        type: "select",
        name: "packageManager",
        message: "Package manager:",
        choices: [
            { title: "npm", value: "npm" },
            { title: "pnpm", value: "pnpm" },
            { title: "yarn", value: "yarn" },
            { title: "bun", value: "bun" },
        ],
        initial: 0,
    });

    const targetDir = resolve(process.cwd(), projectName);

    if (existsSync(targetDir)) {
        const { overwrite } = await prompts({
            type: "confirm",
            name: "overwrite",
            message: `Directory "${projectName}" already exists. Overwrite?`,
            initial: false,
        });
        if (!overwrite) {
            console.log(kleur.red("  Cancelled."));
            process.exit(1);
        }
    }

    console.log();
    console.log(kleur.dim(`  Creating ${projectName}...`));

    mkdirSync(targetDir, { recursive: true });
    cpSync(TEMPLATE_DIR, targetDir, { recursive: true });

    /* Patch package.json with project name */
    const pkgPath = join(targetDir, "package.json");
    const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
    pkg.name = projectName;
    writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

    /* Patch layout.tsx with chosen default theme */
    const layoutPath = join(targetDir, "app", "layout.tsx");
    let layout = readFileSync(layoutPath, "utf-8");
    layout = layout.replace('defaultTheme="dark"', `defaultTheme="${defaultTheme}"`);
    writeFileSync(layoutPath, layout);

    /* Install deps */
    const installCmd = packageManager === "yarn" ? "yarn" : `${packageManager} install`;
    console.log(kleur.dim(`  Installing dependencies with ${packageManager}...\n`));
    try {
        execSync(installCmd, { cwd: targetDir, stdio: "inherit" });
    } catch {
        console.log(kleur.yellow("\n  Install failed — run it manually inside the project folder."));
    }

    console.log();
    console.log(kleur.green("  ✓ Done!\n"));
    console.log(`  ${kleur.bold("Get started:")}`);
    console.log(`    ${kleur.cyan(`cd ${projectName}`)}`);
    console.log(`    ${kleur.cyan(`${packageManager === "npm" ? "npm run" : packageManager} dev`)}`);
    console.log();
    console.log(`  ${kleur.dim("Docs: https://koori-ui.dev")}`);
    console.log();
}

main().catch((err) => {
    console.error(kleur.red("  Error: " + err.message));
    process.exit(1);
});
