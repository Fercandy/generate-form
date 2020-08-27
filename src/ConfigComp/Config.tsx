import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { applyDataValue } from '../store/action';
import { Wrapper, ConfigTextArea, ApplyBtn } from './style';
import { Form, message } from 'antd';

const Config: FC = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();

	const onFinish = (values: any): void => {
		const cleanJson = values?.items.replace(/\n/g, '');
		const json = JSON.parse(cleanJson);

		dispatch(applyDataValue(json));
		message.success('Json data is applied!');
	};

	return (
		<Wrapper onFinish={onFinish} form={form}>
			<Form.Item name='items'>
				<ConfigTextArea rows={4} />
			</Form.Item>
			<Form.Item>
				<ApplyBtn type='primary' htmlType='submit'>
					Apply
				</ApplyBtn>
			</Form.Item>
		</Wrapper>
	);
};

export default Config;
