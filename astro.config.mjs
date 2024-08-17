import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [vue(), tailwind({ applyBaseStyles: false })],
    site: 'https://kotop21.github.io/global-war/',
    base: 'my-repo',
});
