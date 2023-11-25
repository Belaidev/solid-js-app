import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
	plugins: [solid(), Icons({ compiler: 'solid', scale: 1 })]
});
