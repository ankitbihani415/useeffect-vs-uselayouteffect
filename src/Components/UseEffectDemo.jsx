import React , { useState, useEffect } from 'react';

const UseEffectDemo = () => {
    const [value, setValue] = useState(0);
    const [styleObj, setStyleObj] = useState({
        border:'5px solid black', width:300, height:300
    });

    useEffect(() => {
        if (value === 0) {
            setValue(10 + Math.random() * 200);
        }
        setStyleObj({
            border:'5px solid green', width:200, height:200
        })
    }, [value]);

    console.log('render', value);

    return (
        <>
            <button onClick={() => setValue(0)}>
                UseEffect Click: {value}
            </button>
            {
                value && <div style={styleObj}>Click above button and you will have screen fluctuation</div>
            }
        </>
    );
}

export default UseEffectDemo