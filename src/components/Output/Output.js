import './Output.scss';

const Output = ({value, setResult, history}) => {
    return (
        <>
        <div className="output_container">
            <p className='history'>{history}</p>
            <input placeholder='0' autoFocus className='output' type="text" value={value} onChange={(e)=>{setResult(e.target.value)}}/>
        </div>
        </>
    )
}

export default Output;