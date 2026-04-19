export const compRandomColor = () => {
    const colors = ['teal', 'blue', 'coral', 'purple', 'pink', 'amber', 'green', 'gray']
    return colors[Math.floor(Math.random() * colors.length)]
}