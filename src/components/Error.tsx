import { FC } from 'react';
import { ErrorProps } from '../App';

const Error: FC<ErrorProps> = ({ errorText }) => {
	return <div className='error'>{errorText}</div>;
};

export default Error;
