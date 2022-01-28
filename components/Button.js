export function Button({content, onClick, inverted}){
    return (
        <button onClick={onClick} className={inverted ? 'inverted' : ''}>
            <span>{content}</span>
        </button>
    )
}