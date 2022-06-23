import React from "react";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import toast, { Toaster } from "react-hot-toast";

export default function Guest({ children, title }) {
    const { flash } = usePage().props;

    flash.type && toast[flash.type](flash.message);

    return (
        <>
            <Head title={title} />
            <Toaster />
            <div className="min-vh-100 d-flex align-items-center justify-content-center">
                <div className="col-md-4">
                    <h3 className="text-center d-block mb-4">
                        <Link
                            className="text-decoration-none link-dark"
                            href={route("home")}
                        >
                            My Website
                        </Link>
                    </h3>
                    {children}
                </div>
            </div>
        </>
    );
}
