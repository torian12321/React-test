var
React    = require('react'),
ReactDOM = require('react-dom');


class Modal extends React.Component{
	componentDidMount() {
		this.modalTarget = document.createElement('div');
		this.modalTarget.className = 'modal';
		document.body.appendChild(this.modalTarget);
		this._render();
	}
	componentDidUpdate() {
		this._render();	
	}
	componentWillUnmount() {
		ReactDOM.unmountComponentAtNode(this.modalTarget);
		document.body.removeChild(this.modalTarget);
	}
	_render(){
		ReactDOM.render(
			<div>{this.props.children}</div>,
			this.modalTarget
		);
	}
	render(){
		return <noscript />;
	}
}

module.exports = Modal;