import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
        this.getLink = this.getLink.bind(this);
    }

    closeSearchPage(e) {
        e.preventDefault();
        document.getElementById("search-bar").style.display = "block";
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

    getLink(listItem) {
        const searchStrWords = listItem.split(" ");
        let route =""
        route = searchStrWords.map(word => {
            return route += "/" +  word.toLowerCase();
        })
        return <Link to={route[1]} >{listItem.toString()}</Link>;
    }
    
    render(){
        return (
            <div className="search-bar-main">
                <div className="search-bar-1">
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
                <br />
                <ul className="search-link-list">
                    {this.state.filtered.map(item => (
                        <li key={item}>
                            {/* {item} */}
                            {this.getLink(item)} &nbsp;
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default withRouter(SearchBar);