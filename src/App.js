import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

var vals = [
	'A meme',
	'A selfie',
	'Photo with a filter',
	'An animal',
	'Food',
	'Nature',
	'Kode With Klossy',
	'Your favorite holiday',
	'Your hometown',
	'Mountains',
	'Sunrise or sunset',
	'Sunglasses',
	'Your school',
	'A bridge',
	'A sport',
	'A picture of textbook pages',
	'A banana',
	'A water bottle',
	'A screenshot',
	'Friends',
	'A random video',
	'Shoes',
	'A baby',
	'A rainbow'
];

shuffle(vals);

class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = { clicked: false };
		this.handleClick = this.handleClick.bind(this);

		this.handleChange = this.handleChange.bind(this);
	}

	handleClick() {
		if (this.state.clicked === true) {
			this.setState({ clicked: false });
		}
	}

	handleChange() {
		this.setState({ clicked: true });
	}

	render() {
		if (this.state.clicked === false) {
			return (
				<Col className="d-flex flex-column square px-1">
					<p>{this.props.val}</p>
					<textarea rows="2" placeholder="did you find a picture?" onChange={this.handleChange}></textarea>
				</Col>
			);
		} else {
			return (
				<Col className="d-flex flex-column square clicked px-1" onClick={this.handleClick}>
					<p>{this.props.val}</p>
					<textarea rows="2" placeholder="did you find a picture?" onChange={this.handleChange}></textarea>
				</Col>
			);
		}
	}
}

class BingoRow extends React.Component {
	render() {
		var first = vals[this.props.rowNum * 5];
		var second = vals[this.props.rowNum * 5 + 1];
		var third = vals[this.props.rowNum * 5 + 2];
		var fourth = vals[this.props.rowNum * 5 + 3];
		var fifth = vals[this.props.rowNum * 5 + 4];

		if (this.props.rowNum === 2) {
			third = 'a group photo of community hour later tonight (Free aka You!)';
		}
		if (this.props.rowNum === 4) {
			fifth = vals[12];
		}

		return (
			<Row>
				<Square val={first} />
				<Square val={second} />
				<Square val={third} />
				<Square val={fourth} />
				<Square val={fifth} />
			</Row>
		);
	}
}

export class App extends React.Component {
	render() {
		return (
			<div className="App container text-center my-sm-3">
				<div className="title">
					<h1 className="asa" id="title">
							KWK Camera Roll Bingo
					</h1>
					<h6 style={{"font-weight":"bold"}}>Find a picture in your camera roll that is described by each box</h6>
					<h6 style={{"font-weight":"bold"}}>Drop a screenshot of your bingo in the #fun channel when you get bingo!</h6>
				</div>
				<Container className="mb-3">
					<BingoRow rowNum={0} />
					<BingoRow rowNum={1} />
					<BingoRow rowNum={2} />
					<BingoRow rowNum={3} />
					<BingoRow rowNum={4} />
				</Container>
				<footer>
					<hr width="80%" />
					<p>Adapted by Wendy Su from Kimberly Gao who adapted from Phi Henry Nguyen</p>
				</footer>
			</div>
		);
	}
}
