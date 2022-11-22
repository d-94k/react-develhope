export default function Sum ({arr}) {
    return <h1>Result: {arr.reduce((a, b) => a + b, 0)}</h1>
}