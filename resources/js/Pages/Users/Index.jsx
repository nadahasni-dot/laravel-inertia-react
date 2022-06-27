import React from "react";
import { Link } from "@inertiajs/inertia-react";
import App from "../../Layouts/App";
import Pagination from "../../Components/Pagination";
import Dialog from "../../Components/Dialog";
import useDialog from "../../Hooks/useDialog";
import CreateUser from "../../Components/CreateUser";

export default function Index(props) {
    const { errors } = props;
    const { data: users, links, from } = props.users;
    const [addTrigger, openModalAdd, closeModalAdd] = useDialog();

    return (
        <div className="container">
            <Dialog trigger={addTrigger} title="Create New User">
                <CreateUser errors={errors} close={closeModalAdd} />
            </Dialog>
            <button onClick={openModalAdd} className="btn btn-primary">
                Create User
            </button>
            <div className="card mb-5 mt-3">
                <div className="card-header">Users</div>
                <div className="card-body table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="fw-bold">
                            <tr>
                                <td>#</td>
                                <td>Name</td>
                                <td>Username</td>
                                <td>Email</td>
                                <td>Location</td>
                                <td className="text-end">Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{from + index}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.location}</td>
                                    <td>
                                        <div className="dropdown text-end">
                                            <button
                                                className="btn btn-sm p-0"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-three-dots-vertical"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link
                                                        href="#"
                                                        as="button"
                                                        className="dropdown-item"
                                                    >
                                                        View
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        as="button"
                                                        className="dropdown-item"
                                                    >
                                                        Edit
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        as="button"
                                                        className="dropdown-item"
                                                    >
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination links={links} />
                </div>
            </div>
        </div>
    );
}

Index.layout = (page) => <App title="Users" children={page} />;
