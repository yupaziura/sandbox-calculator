import './Output.scss';

const Output = ({value}) => {
    return (
        <>
            <input className='output' type="text" value={value}/>
        </>
    )
}

export default Output;