import { useCounter } from '../hooks/useCounter';

export const Counter = () => {

    const { count, handleIncrement } = useCounter();


    return (
        <div>
            <p className='text-4xl font-bold mb-5'>
                Counter: {count}
            </p>

            <div className="flex gap-4 justify-center">
                <button
                    className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium shadow-sm'
                    onClick={() => handleIncrement(1)}
                >
                    +1
                </button>
                <button
                    className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 font-medium shadow-sm'
                    onClick={() => handleIncrement(-1)}
                >
                    -1
                </button>
            </div>
        </div>
    )
}
