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
	'Knows how to ski or snowboard',
	'Has more than 2 siblings',
	'Read a book over break (which one?)',
	'Plays an instrument (what instrument?)',
	'Plays a sport (what sport?)',
	'Can speak and read another language',
	'Took up a new hobby in 2020 (what hobby?)',
	'Has an awful sleeping schedule',
	'Prefers summer over winter',
	'Is lactose intolerant',
	'Is left-handed',
	'Baked/cooked something new in 2020',
	'Is born in February',
	'First time coding at KWK',
	'Prefers light mode',
	'Has a pet',
	'Prefers vanilla over chocolate',
	'Loves sushi',
	'Prefers Andriod over Apple',
	'Knows how to embroider/knit/crochet',
	'Prefers coffee over tea',
	'Has overslept a Zoom class',
	'Goes to class in PJs',
	'Has cut their own hair or bangs',
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
					<textarea rows="2" placeholder="who did you meet?" onChange={this.handleChange}></textarea>
				</Col>
			);
		} else {
			return (
				<Col className="d-flex flex-column square clicked px-1" onClick={this.handleClick}>
					<p>{this.props.val}</p>
					<textarea rows="2" placeholder="who did you meet?" onChange={this.handleChange}></textarea>
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
			third = 'Loves KWK Campus (Free aka You!)';
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
							KWK Icebreaker Bingo
					</h1>
					<h6 style={{"font-weight":"bold"}}>Try to find a scholar that's described by each box!</h6>
					<h6 style={{"font-weight":"bold"}}>Drop a screenshot of your bingo in the slack thread to get special prize :)</h6>
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
					<p>Adapted by Kimberly Gao from Phi Henry Nguyen</p>
				</footer>
			</div>
		);
	}
}
