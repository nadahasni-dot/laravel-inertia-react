import React, { useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";

export default function EditUser({ errors, close, model }) {
    const { data, setData, put, reset } = useForm({
        name: "",
        email: "",
        username: "",
        location: "",
    });

    const changeHandler = (e) =>
        setData({ ...data, [e.target.name]: e.target.value });

    const submitHandler = (event) => {
        event.preventDefault();
        put(route("users.update", model.id), {
            data,
            onSuccess: () => {
                reset();
                close();
            },
        });
    };

    useEffect(() => {
        setData({
            ...data,
            name: model.name,
            email: model.email,
            username: model.username,
            location: model.location,
        });
    }, [model]);

    return (
        <form noValidate onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={changeHandler}
                    className="form-control"
                />
                {errors && (
                    <div className="text-danger mt-1">{errors.name}</div>
                )}
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={data.username}
                            onChange={changeHandler}
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
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={data.location}
                            onChange={changeHandler}
                            className="form-control"
                        />
                        {errors && (
                            <div className="text-danger mt-1">
                                {errors.location}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
                Update User
            </button>
        </form>
    );
}
