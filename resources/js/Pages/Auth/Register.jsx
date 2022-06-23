import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Guest from "../../Layouts/Guest";

export default function Register() {
    return (
        <>
            <div className="card">
                <div className="card-header">Register</div>
                <div className="card-body">Register Form</div>
                <div className="card-footer">
                    <span className="text-muted">Already have account?</span>{" "}
                    <Link className="text-decoration-none" href="/login">
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
}

Register.layout = (page) => <Guest title="Register" children={page} />;
