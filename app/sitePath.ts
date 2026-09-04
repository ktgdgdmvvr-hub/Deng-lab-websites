const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const basePath = configuredBasePath.endsWith("/")
  ? configuredBasePath.slice(0, -1)
  : configuredBasePath;

export function sitePath(path: string): string {
  if (!basePath || !path.startsWith("/") || path.startsWith("//")) return path;
  return `${basePath}${path}`;
}
