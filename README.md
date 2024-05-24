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
