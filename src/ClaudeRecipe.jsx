import ReactMarkdown from "react-markdown"

export default function Recipe(props) {
    while(props.Recipe === null){
        const state = "Working on your yumi Recipe..."
    }
    return (
        
        <section className="suggested-recipe-container" aria-live="polite">
            <p>{state}</p>
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.Recipe}</ReactMarkdown>
        </section>
    )
}