import React, { useState, useLayoutEffect } from 'react';

const UseLayoutEffectDemo = () => {
    const [value, setValue] = useState(0);
    const [styleObj, setStyleObj] = useState({
        border:'5px solid black', width:300, height:300
    });

    useLayoutEffect(() => {
        if (value === 0) {
            setValue(10 + Math.random() * 200);
        }
        setStyleObj({
            border:'5px solid red', width:200, height:200
        })
    }, [value]);

    console.log('render', value);

    return (
        <>
            <button onClick={() => setValue(0)}>
                UseLayoutEffect Click: {value}
            </button>
            {
                value && <div style={styleObj}>Click above button and you will not have any screen fluctuation</div>
            }
        </>
    );
}

export default UseLayoutEffectDemo