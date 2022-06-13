import styled from "styled-components";
import { mobile } from "../responsive";
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
	width: 25%;
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
	flex-direction: column;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0px;
	padding: 10px;
`;
const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 12px;
	background-color: teal;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
`;

const Link = styled.a`
	margin: 10px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Sign In</Title>
				<Form>
					<Input placeholder="username" />
					<Input placeholder="Password" />

					<Button>Login</Button>
					<Link>Do you want to remember password</Link>
					<Link>Create a new Account</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};
export default Login;
