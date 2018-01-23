import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
        return (
            <form>
                <div className="form-group col-sm-8">
                    <h3>Youtube API Toy App</h3>
                    <input
                        placeholder="Search Here"
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value)} />
                </div>
            </form>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
