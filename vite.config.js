import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [
        vue({}),
        move({
            patterns: [
                { from: '404.html', to: 'dist/404.html' }
            ]
        })
    ],
    resolve: {
        alias: [
            {
                find: "./runtimeConfig",
                replacement: "./runtimeConfig.browser" // ensures browser compatible version of AWS JS SDK is used
            }
        ]
    }
});
