import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    

    render() { 
        const { onDecrement,onDelete,onIncrement,onReset} = this.props;

        return (<div>
            <button
             onClick = {onReset}
            className="btn-primary btn-sm m-2">Reset</button>
            {this.props.counters.map(counter => 
            <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement} counter={counter}>
            </Counter>
            )}
        </div>
        );
    }
}

export default Counters;