import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"

export const JournalApp = ( ) => {
    return (
        <>
            <h1>Hola Mundo</h1>
            <AppTheme>
                <AppRouter />
            </AppTheme>
        </>
    )
}