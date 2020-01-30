import React from 'react'
import { SearchList } from './SearchList'
import { SearchForm } from './SearchForm'

let data = [
    {index: 0, name: "a string", url: 'test.com/?search=string'},
    {index: 1, name: "a name", url: 'test.com/?search=name'},
    {index: 2, name: "return all", url: 'test.com/?search=all'}
  ];

let startingIndex = data.length;

export class SavedSearches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            url: '',
            index: startingIndex,
            data: data
        }
        this.changeName=this.changeName.bind(this)
        this.changeUrl=this.changeUrl.bind(this)
        this.submitSearch=this.submitSearch.bind(this)
        this.deleteSearch=this.deleteSearch.bind(this)
    }
    changeName(newName) {
        this.setState({
            name: newName
        })
    }
    changeUrl(newUrl) {
        this.setState({
            url: newUrl
        })
    }
    deleteSearch(deleteThis) {
        console.log(deleteThis);
        let newData = this.state.data.filter( searchItem => searchItem.index !== deleteThis.index )
        this.setState({
            data: newData
        })
    }
    submitSearch(search) {
        // TODO: post to server. For now, manually update data in setState
        let newData = this.state.data
        let newIndex = this.state.index + 1
        newData.push(search);
        // add search to data and clear the inputs
        this.setState({
            data: newData,
            index: newIndex,
            url: '',
            name: ''
        });
    }

    render() {
        return (
            <div className="search-container">
                <SearchList data={this.state.data} onDelete={this.deleteSearch}/>
                <SearchForm submitSearch={this.submitSearch} changeName={this.changeName} changeUrl={this.changeUrl} name={this.state.name} url={this.state.url} index={this.state.index}/>
            </div>
        )
    }
}

