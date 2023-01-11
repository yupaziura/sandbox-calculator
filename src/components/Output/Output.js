import './Output.scss';

const Output = ({value, setResult, history, throwError, error}) => {
    return (
        <>
        <div className="output_container">
            <p className='history'>{history}</p>
            <input  onKeyDown={(e)=>{throwError(e)}} 
                    placeholder='0' 
                    autoFocus 
                    className='output' 
                    type="text" 
                    value={value} 
                    onChange={(e)=>{error? setResult('error') : setResult(e.target.value)}}/>
        </div>
        </>
    )
}

export default Output;