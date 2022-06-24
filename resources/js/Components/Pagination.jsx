import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Pagination({ links }) {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {links.map((link, key) => (
                    <li
                        key={key}
                        className={`page-item ${
                            link.url === null && "disabled"
                        } ${link.active && "active"}`}
                    >
                        <Link
                            as="button"
                            disabled={link.url === null}
                            href={link.url}
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                            className="page-link"
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
