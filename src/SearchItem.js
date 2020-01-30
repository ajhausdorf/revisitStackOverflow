import React from 'react'

export class SearchItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete=this.handleDelete.bind(this)
    }
    handleDelete() {
        this.props.onDelete(this.props.searchItem)
    }
    render() {
      return (
        <li key={this.props.index} className="list-group-item searches__item">
          <a href={this.props.url} title={this.props.name}>
            {this.props.children}
          </a>
          &nbsp;({this.props.url})
          <button onClick={this.handleDelete} value={this.props.index} className="pull-right"><i className="fa fa-times"></i>
          </button>
        </li>
      );
    }
  };