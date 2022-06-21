import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "../Components/Navbar";

export default function App({ children, title }) {
    return (
        <>
            <Head title={`${title} | Nada`} />
            <Navbar />
            <div className="mt-4">{children}</div>
        </>
    );
}
