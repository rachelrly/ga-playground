export function Button({content, onClick}){
    return (
        <button onClick={onClick}>
            <span>{content}</span>
        </button>
    )
}