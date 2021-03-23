import react from 'react';

const square =({value, onClick})=>{
    const style=value?`squares ${value}`:`squares`
    return (
        <button className={style} onClick={onclick}>
            {value}
        </button>)
}

export default square;
