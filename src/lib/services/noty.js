import Noty from "noty";
import "noty/lib/themes/nest.css";
import "noty/lib/noty.css";

export const showNoty = (/** @type {string} */ message, /** @type {Noty.Type} */ type) => {
    new Noty({
        theme: "nest",
        text: message,
        type: type,
        layout: "bottomRight",
        timeout: 1500,
    }).show();
}