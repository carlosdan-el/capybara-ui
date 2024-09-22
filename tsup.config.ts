import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ["src", "!src/**/*.stories.tsx"],
    target: 'esnext',
    format: ['cjs', 'esm'],
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    loader: {
        '.avif': 'file',
        '.mdx': 'file',
    },
});