

export type CounterAction = 
| {type: 'increaseBy', payload: {value:number;}}
| {type: 'reset'};

//forma 1
/* export const doReset = ():CounterAction => {  //esta func regresa un tipo :CounterAction
    return {
        type: 'reset'
    }
} */ 

//forma 2: entre parentesis quiere decir que regresa un objeto
    export const doReset = ():CounterAction => ({  //esta func regresa un tipo :CounterAction
        type: 'reset'
    })

    export const doIncreaseBy = (value:number):CounterAction => {
        return {
            type: 'increaseBy',
            payload: {value}  //el value:value el value es igual al que se recibe de argumento por lo tanto se puede escribir solo 1 vez
        }
    }

