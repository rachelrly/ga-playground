export function Button({content, onClick, inverted =false}){
    return (
        <button onClick={onClick} className={inverted ? 'inverted' : ''}>
            <span>{content}</span>
        </button>
    )
}