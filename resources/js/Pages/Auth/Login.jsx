import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Guest from "../../Layouts/Guest";

export default function Login() {
    return (
        <Guest title="Login">
            <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">Login Form</div>
                <div className="card-footer">
                    <Link
                        className="text-decoration-none link-dark"
                        href="/register"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </Guest>
    );
}
