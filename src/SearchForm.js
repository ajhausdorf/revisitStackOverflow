import React from 'react'

export class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange=this.handleNameChange.bind(this)
        this.handleUrlChange=this.handleUrlChange.bind(this)
        this.handleSubmitSearch=this.handleSubmitSearch.bind(this)
    }
    handleNameChange(e) {
      this.props.changeName(e.target.value);
    }
    handleUrlChange(e) {
      this.props.changeUrl(e.target.value);
    }
    handleSubmitSearch(e) {
        e.preventDefault();
        let url = this.props.url.trim();
        let name = this.props.name.trim();
        let index = this.props.index;
        if (!url || !name) {
            return;
        }
        // Set property for parent element to react to
        this.props.submitSearch({index: index, name: name, url: url});
    }
    render() {
      return(
        <form className="search-form" onSubmit={this.handleSubmitSearch}>
          <h4>Save a new search:</h4>
          <div className="well">
             <div className="form-group">
              <label htmlFor="name">Search Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter a name for your search"
                value={this.props.name}
                onChange={this.handleNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="url">Search URL</label>
              <input
                type="text"
                name="url"
                className="form-control"
                placeholder="Enter A Search"
                value={this.props.url}
                onChange={this.handleUrlChange}
              />
            </div>
            <div className="form-group">
             <input type="submit" value="Save" className="btn btn-primary" />
            </div>
          </div>
        </form>
      );
    }
  }


