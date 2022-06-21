import React from "react";

export default function Home(props) {
    const { mahasiswa } = props;

    return (
        <div>
            {mahasiswa.map((item) => (
                <ul key={item.username}>
                    <li>Username: {item.username}</li>
                    <li>Age: {item.age}</li>
                </ul>
            ))}
        </div>
    );
}
