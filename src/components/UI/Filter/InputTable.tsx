import styled from 'styled-components';
import { useAppSelector } from '../../../app/hooks';
import { selectAllHouse } from '../../../features/Houses/housesSlice';

interface Props {
	data: string;
	changeData: (item: string) => void;
	changeActive: (item: boolean) => void;
	locationChanger: (item: string | null) => void;
}

const TableWrapper = styled.ul`
	position: absolute;
	top: calc(100% + 3px);
	width: 100%;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	z-index: 10;
	border-radius: 14px;
	max-height: 150px;
	overflow: auto;
`
const TableItem = styled.li`
	width: 100%;
	padding: 15px 16px;
	color: #000;
	cursor: pointer;
	background-color: transparent;
	transition: all .3s ease 0s;
	@media(any-hover : hover){
		&:hover {
			background-color: rgba(0, 0, 0, 0.658);
			color: #fff;
		}
	}
`

function InputTable({ data, changeData, changeActive, locationChanger }: Props) {
	const houses = useAppSelector(selectAllHouse);
	const filteredHouses = houses.filter(house => (
		house.location.toLowerCase().includes(data.toLowerCase())
	))
	const uniqueHouses = filteredHouses
		.map(item => item.location)
		.filter((house, index, arr) => arr.indexOf(house) === index);

	const clickHandler = (item: string) => {
		changeData(item);
		changeActive(false);
		locationChanger(item);
	}
	return (
		<>
			{uniqueHouses.length > 0 &&
				<TableWrapper>
					{uniqueHouses.map(item => (
						<TableItem key={item} onClick={() => clickHandler(item)}>
							{item}
						</TableItem>
					))}
				</TableWrapper>
			}
		</>
	)
}

export default InputTable;