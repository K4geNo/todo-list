import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { defaultTheme } from "./styles/theme"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={defaultTheme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
)
