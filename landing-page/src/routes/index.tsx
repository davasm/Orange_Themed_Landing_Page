import { BrowserRouter, Route ,Routes as Switch, Navigate } from "react-router-dom"
import Dashboard from "../pages/dashboard/Navbar"

export const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" element={<Dashboard />}/>

                <Route path="*" element={<Navigate to="pagina-inicial" />} />           
            </Switch>
        </BrowserRouter>
    )
}