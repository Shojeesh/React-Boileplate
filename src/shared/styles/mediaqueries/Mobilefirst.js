const sizes = {
    pc: 1199,
    lap: 1024,
    tab: 991,
    tabMini: 768,
    mob: 480
}

export default Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => styled.css`
        @media (min-width: ${sizes[label]}px) {
            ${styled.css(...args)}
        }
    `
    return acc
}, {})
