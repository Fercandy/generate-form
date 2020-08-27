import React, { FC } from 'react';
import Config from './ConfigComp/Config';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import Result from './ResultComp/Result';

const { TabPane } = Tabs;

const App: FC = () => {
	return (
		<Tabs type='card'>
			<TabPane tab='Config' key='1'>
				<Config />
			</TabPane>
			<TabPane tab='Result' key='2'>
				<Result />
			</TabPane>
		</Tabs>
	);
};

export default App;
