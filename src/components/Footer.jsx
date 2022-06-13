import styled from "styled-components";
import { mobile } from "../responsive";
import {
	Facebook,
	Twitter,
	Instagram,
	Pinterest,
	MailOutline,
	Room,
	Phone,
} from "@material-ui/icons";

const Container = styled.div`
	display: flex;
	${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
	margin: 20px 0px;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({backgroundColor: "lightGrey"})}
`;

const Title = styled.h1`
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({display: "none"})}
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 50%;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>Felabs</Logo>
				<Desc>
					Occaecat id magna ut exercitation nisi pariatur ullamco
					occaecat ut nulla voluptate elit consequat minim amet in
					cupidatat non ex laboris veniam quis adipisicing in quis sed
					commodo et cillum cillum fugiat ullamco aute proident
					laborum. Lorem ipsum eu nostrud occaecat in sunt est
					adipisicing consequat sint esse incididunt id mollit
					cupidatat non eu ex duis velit pariatur.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3b5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="e4405f">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55acee">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="e60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accesories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>WishList</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>

			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{marginRight: "10px"}}/>
					622 Dixie Path, South Tobichester 98336
				</ContactItem>
				<ContactItem>
					<Phone style={{marginRight: "10px"}}/>
					+1 234 56 78 9
				</ContactItem>
				<ContactItem>
					<MailOutline style={{marginRight: "10px"}}/>
					contact@felabs.com
				</ContactItem>
				<Payment src="image" />
			</Right>
		</Container>
	);
};

export default Footer;
