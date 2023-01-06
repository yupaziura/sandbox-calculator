import './Button.scss';

const Button = ({value, width}) => {
    return (
        <>
            <button id='but' className='button' style={{width: width}}>{value}</button>
        </>
    )
}

export default Button;