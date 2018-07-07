import React, { Component } from 'react';


import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
	color: #464646;
	font-size: 18px;
	font-weight: 300;
	line-height: 22px;
`
const WorkTime = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300:
	line-height: 24px;
	span  {
		display: block;
		font-size: 21px;
		font-weight: 700;
		color: #464646;
	}		
`
class Adress extends React.Component {
	render() {
		return(
				<span> {this.props.addr} </span>
			)
	}
}
const Calls = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300:
	line-height: 24px;
	span  {
		display: block;
		font-size: 21px;
		font-wieght 700;
		color: #464646;
	}		
`
class TelNumber extends React.Component {
	render() {
		return(
				<span> {this.props.tel} </span>
			)
	}
}
const CallButton = styled.button`
		width: 176px;
		height: 48px;
		background-color: #3fc7db;
		border-radius: 30px;
		color: #ffffff;
		font-size: 14px;
		font-weight: 400px;
		line-height: 22.04px;

`
class Menu extends React.Component {
	render() {
		return(
			<Row>
				<Col lg={3}>
					<Repair> Ремонт айфонов в сервисном центре и на выезде
					</Repair>
				</Col>

				<Col lg={3} lgOffset={1}>
					<WorkTime>Пн-пт с 10 до 20, сб, вс с 11 до 18
					<Adress addr='Ленская 102'> </Adress>
					</WorkTime>
				</Col>

				<Col lg={3}>
						<Calls>Звонки принимаются 24 часа
							<TelNumber tel='8 (856) 922 55 44'></TelNumber>
						</Calls>
				</Col>
				<Col lg={2}>
					<CallButton> Заказать звонок! </CallButton>
				</Col>
			</Row>
		)
	}
}
export default Menu