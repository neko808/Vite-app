import { build } from "vite";
import { resolve } from "path"

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'login/index.html')
            }
        }
    }
} 