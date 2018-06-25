import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from "../actions/index";
import {bindActionCreators} from 'redux';
class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return (<li onClick={()=>this.props.selectBook(book)} key={book.title} className="list-group-item">{book.title}</li>);
		});
	}

	render() {

		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	//whatever is returned will show up as props in BookList
	return {
		books: state.books
	}
}
//Anything returned from this function will available as props to container
function mapDispatchToProps(dispatch){
	//Whenever select book is called result should be passed to all of the reducers
	return bindActionCreators({selectBook},dispatch);
}
//promote a BookList from a component to container. it needs to know the new dispatch method
//selectBook. Hence make it available as a prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList);