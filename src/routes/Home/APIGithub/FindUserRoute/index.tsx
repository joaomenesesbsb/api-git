import { Outlet } from "react-router-dom";
import CardAPI from "../../../../components/CardAPI";

export default function FindUserRoute() {
    return (
        <>
            <CardAPI />
            <Outlet />
        </>
    )
}