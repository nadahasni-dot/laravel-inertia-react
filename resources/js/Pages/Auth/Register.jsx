import React from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import Guest from "../../Layouts/Guest";

export default function Register(props) {
    const { errors } = props;

    const { data, setData, post } = useForm({
        name: "",
        email: "",
        username: "",
        location: "",
        password: "",
    });

    const changeHandler = (e) =>
        setData({ ...data, [e.target.id]: e.target.value });

    const submitHandler = (event) => {
        event.preventDefault();
        post(route("register"), data);
    };

    return (
        <>
            <div className="card">
                <div className="card-header">Register</div>
                <div className="card-body">
                    <form onSubmit={submitHandler} noValidate>
                        <div className="mb-3">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                value={data.name}
                                onChange={changeHandler}
                            />
                            {errors && (
                                <div className="text-danger mt-1">
                                    {errors.name}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="form-control"
                                value={data.username}
                                onChange={changeHandler}
                            />
                            {errors && (
                                <div className="text-danger mt-1">
                                    {errors.username}
                                </div>
                            )}
                        </div>
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
                            <label htmlFor="location">Address</label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                className="form-control"
                                value={data.location}
                                onChange={changeHandler}
                            />
                            {errors && (
                                <div className="text-danger mt-1">
                                    {errors.location}
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
                        <button type="submit" className="btn btn-primary mt-3">
                            Register
                        </button>
                    </form>
                </div>
                <div className="card-footer">
                    <span className="text-muted">Already have account?</span>{" "}
                    <Link
                        className="text-decoration-none"
                        href={route("login")}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
}

Register.layout = (page) => <Guest title="Register" children={page} />;
