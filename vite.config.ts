import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"; // 导入 path 模块，帮助我们解析路径
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    css: {
        /* CSS 预处理器 */
        preprocessorOptions: {
            scss: {
                additionalData: `@use "src/style/index.module.scss" as *;`
            },
        }
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, "src"),
            },
        ]
    }
})
