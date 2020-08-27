import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

export const Wrapper = styled(Form)`
	width: 500px;
`;
export const ConfigTextArea = styled(TextArea)`
	height: 500px !important;
	display: block;
`;
export const ApplyBtn = styled(Button)`
	float: right;
	margin-top: 15px;
`;
