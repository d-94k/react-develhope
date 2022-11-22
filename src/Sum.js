export default function Sum ({arr = [10, 20, 30]}) {
    return <h1>Result: {arr.reduce((a, b) => a + b, 0)}</h1>
}