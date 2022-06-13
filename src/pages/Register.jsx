import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: url("https://images.pexels.com/photos/2229712/pexels-photo-2229712.jpeg?cs=srgb&dl=pexels-denis-zagorodniuc-2229712.jpg&fm=jpg")
		center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	padding: 20px;
	width: 40%;
	background-color: white;
	${mobile({width: "75%"})}
`;
const Title = styled.h1`
	font-size: 34px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;
const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;
const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 12px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Create an Account</Title>
				<Form>
					<Input placeholder="first name" />
					<Input placeholder="Last Name" />
					<Input placeholder="Username" />
					<Input placeholder="Email" />
					<Input placeholder="Password" />
					<Input placeholder="Confirm Password" />
					<Agreement>
						By creating an account i consent the processing of my
						personal details in accordance with the{" "}
						<b>Privacy Policy</b>
					</Agreement>

					<Button>Create</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};
export default Register;
