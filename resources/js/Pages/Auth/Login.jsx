import React from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import Guest from "../../Layouts/Guest";

export default function Login(props) {
    const { errors } = props;

    const { data, setData, post } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    const changeHandler = (e) =>
        setData({ ...data, [e.target.id]: e.target.value });

    const submitHandler = (event) => {
        event.preventDefault();
        post(route("login"), data);
    };

    return (
        <>
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
                                value={data.email}
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
                                value={data.password}
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
                                value={data.remember}
                                onChange={(e) =>
                                    setData({
                                        ...data,
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
                    <span className="text-muted">Does not have account?</span>{" "}
                    <Link className="text-decoration-none" href={route('register')}>
                        Register
                    </Link>
                </div>
            </div>
        </>
    );
}

Login.layout = (page) => <Guest title="Login" children={page} />;
