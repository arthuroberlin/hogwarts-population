import { FC } from 'react';
import { DataType } from '../App';
import Gryffindor from '../assets/gryffindor.svg';
import Hufflepuff from '../assets/hufflepuff.svg';
import Ravenclaw from '../assets/ravenclaw.svg';
import Slytherin from '../assets/slytherin.svg';

interface DataProps {
	data: DataType[] | null;
}

interface CardsProps {
	iconHouse: string;
	houseName: string;
	achievementPercentage: number;
}

const House: FC<CardsProps> = ({ houseName, iconHouse, achievementPercentage }) => {
	const fullPercent = achievementPercentage;
	const cutPercent = String(fullPercent).slice(0, 2);

	return (
		<div className='wrapper'>
			<div className='house'>
				<div className='house--icon__wrapper'>
					<img
						className='house--icon'
						src={iconHouse}
					/>
				</div>
				<h1 className='house--name'>{houseName}</h1>
				<p className='house--percent'>{cutPercent} %</p>
			</div>
		</div>
	);
};

const HouseResult: FC<DataProps> = ({ data }) => {
	return (
		<div className='container'>
			<div className='sub--container'>
				{data &&
					data.map((achievement) => {
						const { name, percent } = achievement;
						if (name === 'PFA_2') {
							return (
								<House
									key={name}
									iconHouse={Slytherin}
									houseName='Slytherin'
									achievementPercentage={percent}
								/>
							);
						} else {
							return null;
						}
					})}
				{data &&
					data.map((achievement) => {
						const { name, percent } = achievement;
						if (name === 'PFA_5') {
							return (
								<House
									key={name}
									iconHouse={Ravenclaw}
									houseName='Ravenclaw'
									achievementPercentage={percent}
								/>
							);
						} else {
							return null;
						}
					})}
				{data &&
					data.map((achievement) => {
						const { name, percent } = achievement;

						if (name === 'PFA_4') {
							return (
								<House
									key={name}
									iconHouse={Gryffindor}
									houseName='Gryffindor'
									achievementPercentage={percent}
								/>
							);
						} else {
							return null;
						}
					})}
				{data &&
					data.map((achievement) => {
						const { name, percent } = achievement;

						if (name === 'PFA_3') {
							return (
								<House
									key={name}
									iconHouse={Hufflepuff}
									houseName='Hufflepuff'
									achievementPercentage={percent}
								/>
							);
						} else {
							return null;
						}
					})}
			</div>
		</div>
	);
};

export default HouseResult;
