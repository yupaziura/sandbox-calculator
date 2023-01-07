import './Output.scss';

const Output = ({value, setResult}) => {
    return (
        <>
            <input className='output' type="text" value={value} onChange={(e)=>{setResult(e.target.value)}}/>
        </>
    )
}

export default Output;