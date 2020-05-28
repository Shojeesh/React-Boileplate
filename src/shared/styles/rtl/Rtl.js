function cssToString(cssStyles, p) {
    return cssStyles.reduce((result, v) => {
        let addition = v;
        if (typeof v === "function") {
            const vResult = v(p);
            addition =
            typeof vResult === "string" ? vResult : cssToString(vResult, p);
        }
        return result + addition;
    }, "")
}

const Rtl = (...styles) => p => {
    const cssStyles = [...styles];
    const dir = document.getElementsByTagName("html")[0].getAttribute("dir");
    return dir === "rtl"
    ? cssjanus.transform(cssToString(cssStyles, p), {
        transformDirInUrl: false,
        transformEdgeInUrl: false
    })
    : cssStyles;
}

export default Rtl