import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Guest({ children, title }) {
    return (
        <>
            <Head title={title} />
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
