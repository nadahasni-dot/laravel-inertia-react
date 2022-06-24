import React from "react";
import { useForm } from "@inertiajs/inertia-react";

export default function CreateUser({ errors }) {
    const { data, setData, post, reset } = useForm({
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
        post(route("users.store"), { data, onSuccess: () => reset() });
    };

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">Create New User</div>
                    <div className="card-body">
                        <form noValidate onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={changeHandler}
                                    id="name"
                                    className="form-control"
                                />
                                {errors && (
                                    <div className="text-danger mt-1">
                                        {errors.name}
                                    </div>
                                )}
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="username">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            value={data.usrname}
                                            onChange={changeHandler}
                                            id="username"
                                            className="form-control"
                                        />
                                        {errors && (
                                            <div className="text-danger mt-1">
                                                {errors.username}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            onChange={changeHandler}
                                            id="email"
                                            className="form-control"
                                        />
                                        {errors && (
                                            <div className="text-danger mt-1">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="location">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={data.location}
                                            onChange={changeHandler}
                                            id="location"
                                            className="form-control"
                                        />
                                        {errors && (
                                            <div className="text-danger mt-1">
                                                {errors.location}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            onChange={changeHandler}
                                            id="password"
                                            className="form-control"
                                        />
                                        {errors && (
                                            <div className="text-danger mt-1">
                                                {errors.password}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mt-3"
                            >
                                Register New User
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
