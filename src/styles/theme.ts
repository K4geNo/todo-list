import { extendTheme } from "@chakra-ui/react"

export const defaultTheme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "gray.600",
                color: "gray.100",
            },
            "body, input, button, textarea": {
                fontFamily: '"Inter", sans-serif',
                fontSize: "1rem",
                fontWidth: "400",
            },
        },
    },
    colors: {
        // Colors Products
        purple: "#8284FA",
        "purple-dark": "#5E60CE",
        blue: "#4EA8DE",
        "blue-dark": "#1E6F9F",

        // Colors Base
        "gray-100": "#F2F2F2",
        "gray-200": "#D9D9D9",
        "gray-300": "#808080",
        "gray-400": "#333333",
        "gray-500": "#262626",
        "gray-600": "#1A1A1A",
        "green-700": "#0D0D0D",

        danger: "#E25858",
    },
    "*::focus": {
        outline: 0,
        boxShadow: "0 0 0 2px gray.500",
    },
})
