import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Guest from "../../Layouts/Guest";

export default function Register() {
    return (
        <Guest title="Register">
            <div className="card">
                <div className="card-header">Register</div>
                <div className="card-body">Register Form</div>
                <div className="card-footer">
                    <Link
                        className="text-decoration-none link-dark"
                        href="/login"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </Guest>
    );
}
