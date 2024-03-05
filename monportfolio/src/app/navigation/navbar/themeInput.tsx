export default function ThemeInput(props: {label: string, value: string}) {
    return (
        <>
            <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label={props.label} value={props.value}/>
        </>
    )
}