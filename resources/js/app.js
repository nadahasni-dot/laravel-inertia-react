import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import "bootstrap";
import { InertiaProgress } from "@inertiajs/progress";

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
});

InertiaProgress.init({
    delay: 0,
    showSpinner: true,
    includeCSS: true,
    color: "#ffffff",
});
