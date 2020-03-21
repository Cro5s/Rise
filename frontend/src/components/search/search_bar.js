import React from 'react';
import { withRouter } from 'react-router-dom';
import './search.css';

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        // Set the currentstate to a list of categories from Rise
        this.state = {
            list: this.props.list,
            filtered: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.closeSearchPage = this.closeSearchPage.bind(this);
    }

    componentDidMount() {
        this.setState({
            filtered: this.props.list
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.list
        });
    }

    closeSearchPage(e) {
        e.preventDefault();
        this.props.history.push('/');
    }

    handleChange(e) {
        let currentList = [];
        let newList = [];

        // If search bar is not empty return all items from 
        // the current list which include search string
        if (e.target.value !== "") {
            currentList = this.props.list;

            newList = currentList.filter(item => {
                const lc = item.toLowerCase();
                const filter = e.target.value.toLowerCase();
                debugger;
                return lc.includes(filter);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = this.props.list;
        }
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList
        });
    }

    render(){
        return (
            <div className="search-bar-main">
                <div className="search-bar">
                    <input 
                        type="text" 
                        className="search-input" 
                        onChange={this.handleChange} 
                        placeholder="Search..." 
                    />
                    <button 
                        className="search-close"
                        onClick={this.closeSearchPage}
                    > <i className="far fa-window-close fa-2x"></i> </button>
                </div>
                <br />
                <ul>
                    {this.state.filtered.map(item => (
                        <li key={item}>
                            {item} &nbsp;
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default withRouter(SearchBar);