const sizes = {
    large: 1199,
    medium: 991,
    small: 768,
    mini: 360
}
export default Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => styled.css`
        @media (max-width: ${sizes[label]}px) {
            ${styled.css(...args)};
        }
    `
    return acc
}, {})
