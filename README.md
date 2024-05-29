# Workspace

## Run command in specific app

```bash
pnpm --filter <package-app> <command>
```

## Run command in all apps

```bash
pnpm recursive <command>
```

or

```bash
pnpm -r <command>
```

## Link package to specific app

```bash
pnpm --filter <package-app> add <package-name> --workspace
```

## Add package to root level

```bash
pnpm add [-D] -w <package-name>
```

## Add package to specific app

```bash
pnpm --filter <package-app> add [-D] <package-name>
```

## Remove package from specific app

```bash
pnpm --filter <package-app> remove <package-name>
```

## Add package to all apps

```bash
pnpm recursive add [-D] <package-name>
```

## Remove package from all apps

```bash
pnpm recursive remove <package-name>
```

# NX Commands

## Initialize

```bash
pnpx nx init
```

## Run command in specific app
```bash
pnpm --filter --filter <package-app> <command>

pnpx nx run <package-app>:<command>
pnpx nx <command> <package-app>
```

## Run command in all apps
```bash
pnpm -r <command>

pnpx nx run-many --target=<command>
pnpx nx run-many --target=<command> --projects=<package-app-one>,<package-app-two>
```

## Show project graph
```bash
pnpx nx dep-graph
```
