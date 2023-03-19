import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Dropdown, DropdownItem } from '../../utils/styles';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { TbPhoneCall } from 'react-icons/tb';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiYoutube } from 'react-icons/fi';
import { RxTwitterLogo } from 'react-icons/rx';
import { IoEarth } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md'

const FooterWrapper = styled.footer`
`
const FooterContent = styled.div`
	padding: 55px 0;
	display: flex;
	justify-content: space-between;
	gap: 220px;
`
const Description = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: 315px;
	gap: 18px;
`
const Logo = styled(Link)`
	display: flex;
	align-items: center;
	flex-direction: column;
	font-family: 'Wellfleet';
	font-size: 14px;
	img {
		max-width: 30px;
	}
`
const DescriptionText = styled.div`
	font-family: 'Montserrat';
	font-size: 16px;
	line-height: 158.52%;
	color: #FFFBFB;
	span {
		color: #1DAEFF;
	}
`
const References = styled.div`
	flex: 1 1 auto;
	display: flex;
	justify-content: space-between;
`
const FooterTitle = styled.div`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	letter-spacing: 0.02em;
	color: #FFFFFF;
`
const ReferencesItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
`
const ReferencesItemFollow = styled(ReferencesItem)`
	max-width: 205px;
`
const ReferencesContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	max-width: 230px;
`
const ReferencesText = styled.div`
	font-family: 'Montserrat';
	font-size: 16px;
	line-height: 20px;
	color: rgba(255, 255, 255, 0.8);
	display: flex;
	align-items: center;
	gap: 5px;
`
const NetworkList = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 15px;
`
const Network = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	background: #2C2B2B;
	border-radius: 8px;
	cursor: pointer;
`
const SelectLanguage = styled.div`
	width: 205px;
	height: 52px;
	border: 0.4px solid rgba(255, 251, 251, 0.65);
	border-radius: 8px;
	position: relative;
	display: flex;
	align-items: center;
	cursor: pointer;
`
const SelectLanguagePlaceholder = styled.div`
	font-family: 'Montserrat';
	font-size: 18px;
	line-height: 22px;
	color: rgba(255, 251, 251, 0.65);
	display: flex;
	align-items: center;
	gap: 5px;
	padding-left: 18px;
`
/* const FooterDropdown = styled(Dropdown)`
	height: 80px;
` */
const Arrow = styled(MdKeyboardArrowDown)`
	margin-left: 16px;
	font-size: 22px;
	&._active {
		transform: rotate(180deg)
	}
`

const Licience = styled.div`
	text-align: center;
	padding: 32px 0;
	border-top: 1px solid rgba(255, 251, 251, 0.35);
	font-family: 'PT Serif';
	font-size: 14px;
	line-height: 19px;
	color: rgba(255, 251, 251, 0.65);
`

const Footer = () => {
	const [isShow, setIsShow] = useState<boolean>(false);
	return (
		<FooterWrapper>
			<Container>
				<FooterContent>
					<Description>
						<Logo to='/'>
							<img src="images/icons/homeLogo.svg" alt="Main logo" />
							Homeverse.io
						</Logo>
						<DescriptionText>
							Homeverse.io is a gated community with a great location. Located downtown, you’re within walking distance of Parks, and the...<span>View More</span>
						</DescriptionText>
					</Description>
					<References>
						<ReferencesItem>
							<FooterTitle>Contact Us</FooterTitle>
							<ReferencesContent>
								<ReferencesText>
									Dream home villas San Diego, CA, USA
								</ReferencesText>
								<ReferencesText>
									<TbPhoneCall />
									025-777-3067
								</ReferencesText>
								<ReferencesText>
									<HiOutlineEnvelope />
									admin@thehomeverse.io
								</ReferencesText>
							</ReferencesContent>
						</ReferencesItem>
						<ReferencesItemFollow>
							<FooterTitle>Follow Us</FooterTitle>
							<NetworkList>
								<Network>
									<AiOutlineInstagram />
								</Network>
								<Network>
									<FiYoutube />
								</Network>
								<Network>
									<RxTwitterLogo />
								</Network>
							</NetworkList>
							<SelectLanguage>
								<SelectLanguagePlaceholder onClick={() => setIsShow(prev => !prev)}>
									<IoEarth style={{ fontSize: 18 }} />
									English - En
									<Arrow className={isShow ? '_active' : ''} />
								</SelectLanguagePlaceholder>
								{isShow &&
									<Dropdown>
										<DropdownItem>
											English - En
										</DropdownItem>
										<DropdownItem>
											Russian - Ru
										</DropdownItem>
									</Dropdown>
								}
							</SelectLanguage>
						</ReferencesItemFollow>
					</References>
				</FooterContent>
			</Container>
			<Licience>
				© 2022 Dandelion | All Rights Reserved
			</Licience>
		</FooterWrapper>
	)
}

export default Footer;