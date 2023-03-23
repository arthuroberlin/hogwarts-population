import { FC } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import video from './assets/background-video.mp4';
import HouseResult from './components/HouseResult';
import MadeWithLove from './components/MadeWithLove';
import Error from './components/Error';

export interface DataType {
	name: string;
	percent: number;
}

export interface ErrorProps {
	errorText: string;
}

export const App: FC = () => {
	const [data, setData] = useState<DataType[] | null>();
	const [errorText, setErrorText] = useState<string>('no error 🦄');
	const [loading, setLoading] = useState<boolean>(false);

	const dataUrl =
		'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=990080&format=json';

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			await axios
				.get(`${dataUrl}`)
				.then((response) => {
					setData(response.data.achievementpercentages.achievements);
					setLoading(false);
				})
				.catch((error) => {
					setErrorText(error.status);
				});
		};
		fetchData();
	}, []);

	return (
		<div className='App'>
			<video
				autoPlay
				muted
				loop
				src={video}></video>
			{data ? <HouseResult data={data} /> : null}
			<footer>
				<div className='footer--wrapper'>
					<Error errorText={errorText} />
					<MadeWithLove />
				</div>
			</footer>
		</div>
	);
};

export default App;
