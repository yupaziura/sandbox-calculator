import './Button.scss';

const Button = ({input, result, width, action}) => {
    return (
        <>
            <button onClick={(e)=>action(input,result)}  id='but' className='button' style={{width: width}}>{input}</button>
        </>
    )
}

export default Button;