function SectionTitle(props){
    return (<p className={`section-title section-title-${props.id} ${props.className}`} id={`${props.id}-title`}>{props.children}</p>);
}

function ActionButton(props){
    return(<button className={`action-btn action-btn-${props.id} ${props.className}`} id={`${props.id}-btn`}>{props.children}</button>);
}

export {SectionTitle, ActionButton};

