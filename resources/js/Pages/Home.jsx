import React from "react";
import App from "../Layouts/App";

export default function Home() {
    return (
        <App title="Home">
            <div className="container">
                <div className="card">
                    <div className="card-header">Home</div>
                    <div className="card-body">This is home</div>
                </div>
            </div>
        </App>
    );
}
