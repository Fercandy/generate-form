import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { DynamicFormWrapper, Button, Container } from './style';
import { Typography } from 'antd';
import { RootState } from '../combineReducers';

const { Title } = Typography;

interface Item {
	label: string;
	type: string;
}

const Result: FC = () => {
	const { items, title } = useSelector((state: RootState) => state.data);

	const dynamicForm = () =>
		items?.map((item: Item, i: number) => (
			<span key={i}>
				{item.type === 'button' ? (
					<Button type={item.type} value={item.label} />
				) : (
					<DynamicFormWrapper>
						<label>{item.label}</label>
						<input type={item.type} />
					</DynamicFormWrapper>
				)}
			</span>
		));

	return (
		<Container>
			<Title level={3}>{title}</Title>
			{dynamicForm()}
		</Container>
	);
};

export default Result;
