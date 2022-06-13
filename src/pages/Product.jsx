import { mobile } from "../responsive";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Remove, Add } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({padding: "10px", flexDirection: "column"})}
`;
const ImgContainer = styled.div`
	flex: 1;
`;
const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
	${mobile({height: "40vh"})}
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	${mobile({padding: "10px"})}
`;
const Title = styled.h1`
	font-weight: 200;
`;
const Desc = styled.p`
	margin: 20px 0px;
`;
const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const FilterContainer = styled.div`
	display: flex;
	width: 50%;
	justify-content: space-between;
	margin: 30px 0px;
	${mobile({width: "100%"})}
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;
const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
`;
const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
	display: flex;
	align-items: center;
	width: 50%;
	justify-content: space-between;
	${mobile({width: "100%"})}
`;
const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: 700;
`;
const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;
const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background-color: white;
	curor: pointer;
	font-weight: 500;

	&:hover{
		background-color: #f8f4f4;
	}
`;

const Product = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src="https://images.pexels.com/photos/2229712/pexels-photo-2229712.jpeg?cs=srgb&dl=pexels-denis-zagorodniuc-2229712.jpg&fm=jpg" />
				</ImgContainer>
				<InfoContainer>
					<Title>Denim Jump Suit</Title>
					<Desc>
						Ut duis nisi minim eu eu laboris non in ut ut consequat
						ex sit ex ex sint amet reprehenderit irure ea excepteur
						nulla deserunt ut exercitation cupidatat in et dolore
						elit est sed culpa dolor duis ut sunt non qui eu nostrud
						nostrud aliquip et cupidatat ut dolor culpa mollit esse
						ut occaecat veniam reprehenderit irure ad qui occaecat
						elit est nisi aliquip ad duis sed nisi incididunt
						nostrud occaecat aliqua ex laborum consequat
						reprehenderit ut consectetur aliquip velit ut occaecat
						ea non consequat quis reprehenderit sint .
					</Desc>
					<Price>$ 20</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="darkblue" />
							<FilterColor color="gray" />
						</Filter>
						<Filter>
							<FilterTitle>Title</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount> 1 </Amount>
							<Add />
							<Button>Add To Cart</Button>
						</AmountContainer>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<NewsLetter />
			<Footer />
		</Container>
	);
};

export default Product;
