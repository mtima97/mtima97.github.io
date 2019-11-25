import "./style.scss";

import("./hello").then(mod => {
    const nothing = mod.default();
    const nothingToo = mod.useless();

    console.log(`${nothing}, ${nothingToo}`);
});