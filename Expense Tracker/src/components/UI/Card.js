import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return(
        <div className={classes}>
            {props.children}            
        </div>
    )
}

export default Card;


// Children prop is built in prop and always be the content between opening closing tag. It is used to pass the content betwween custom component

// the classname for customer wrapper will be the same as that in previoous component. 