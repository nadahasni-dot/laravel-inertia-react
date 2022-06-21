import React from "react";
import App from "../Layouts/App";

export default function Dashboard() {
    return (
        <App title="Dashboard">
            <div className="container">
                <div className="card">
                    <div className="card-header">Dashboard</div>
                    <div className="card-body">This is dashboard</div>
                </div>
            </div>
        </App>
    );
}
