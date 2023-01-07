import './Button.scss';

const Button = ({input, result, width, action, className}) => {
    return (
        <>
            <button onClick={(e)=>action(input,result)}  id='but' className={className} style={{width: width}}>{input}</button>
        </>
    )
}

export default Button;