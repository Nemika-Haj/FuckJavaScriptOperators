import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                array: {
                    value: "#eec35b"
                },
                symbol: {
                    value: "#6a909b"
                },
                string: {
                    value: "#a0bb86"
                }
            }
        },
        semanticTokens: {
            colors: {
                
            }
        }
    },
    globalCss: {
        body: {
            background: "#0f0f0f",
        }
    }
})

const theme = createSystem(defaultConfig, config);

export default theme;