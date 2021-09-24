import React from 'react';

import { useAppStore } from '../store/AppProvider';
import { increment, decrement } from '../store/appReducer';

export default function RootComponent() {

    const { state, dispatch } = useAppStore();

    const increaseCount = () => {
        dispatch(increment())
    }

    const decrementCount = () => {
        dispatch(decrement())
    }

    return <div style={{ textAlign: 'center' }}>
        <h1>{state.count}</h1>
        <button style={{ fontSize: '36px', marginRight: '10px' }} onClick={increaseCount}>
            &#8657;
        </button>
        <button style={{ fontSize: '36px' }} onClick={decrementCount}>
            &#8659;
        </button>
    </div>;
}

