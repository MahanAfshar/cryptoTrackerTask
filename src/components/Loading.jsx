import { ThreeDots } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='grid place-content-center'>
            <ThreeDots
                visible={true}
                width='100'
                height='100'
                color='gray'
            />
        </div>
    )
}

export default Loading