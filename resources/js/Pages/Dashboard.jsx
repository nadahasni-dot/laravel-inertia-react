import React from "react";
import App from "../Layouts/App";

export default function Dashboard() {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">Dashboard</div>
                    <div className="card-body">This is dashboard</div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <App title="Dashboard" children={page} />;
