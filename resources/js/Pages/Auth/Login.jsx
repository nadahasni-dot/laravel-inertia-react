import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import Guest from "../../Layouts/Guest";
import { Inertia } from "@inertiajs/inertia";

export default function Login(props) {
    const { errors } = props;

    const [values, setValues] = useState({
        email: "",
        password: "",
        remember: "",
    });

    const changeHandler = (e) =>
        setValues({ ...values, [e.target.id]: e.target.value });

    const submitHandler = (event) => {
        event.preventDefault();
        Inertia.post("/login", values);
    };

    return (
        <Guest title="Login">
            <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">
                    <form onSubmit={submitHandler} noValidate>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                onChange={changeHandler}
                            />
                            {errors && (
                                <div className="text-danger mt-1">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                onChange={changeHandler}
                            />
                            {errors && (
                                <div className="text-danger mt-1">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                                className="form-check-input"
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        remember: e.target.checked,
                                    })
                                }
                            />
                            <label
                                htmlFor="remember"
                                className="form-check-label"
                            >
                                Remember Me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">
                            Login
                        </button>
                    </form>
                </div>
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
