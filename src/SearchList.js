import React from 'react'
import { SearchItem } from './SearchItem'
export class SearchList extends React.Component {
    render() {
      let searchItems = this.props.data.map((search, i) => {
        return (
          <SearchItem index={i} searchItem={search} url={search.url} onDelete={this.props.onDelete}>
            {search.name}
          </SearchItem>
        );
      });
      return (
        <ul>
          {searchItems}
        </ul>
      );
    }
}
