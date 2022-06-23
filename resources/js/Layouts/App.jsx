import React from "react";
import { Head, usePage } from "@inertiajs/inertia-react";
import Navbar from "../Components/Navbar";
import toast, { Toaster } from "react-hot-toast";

export default function App({ children, title }) {
    const { flash } = usePage().props;

    flash.type && toast[flash.type](flash.message);

    return (
        <>
            <Head title={`${title} | Nada`} />
            <Navbar />
            <Toaster />
            <div className="mt-4">{children}</div>
        </>
    );
}
