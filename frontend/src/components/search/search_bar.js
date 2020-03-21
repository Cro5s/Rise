import React from 'react';

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        // Set the currentstate to a list of categories from Rise
        this.state = {
            list: this.props.list,
            filtered: []
        }
        this.handleChange = this.handleChange.bind(this)
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
            <div>
                <input 
                    type="text" 
                    className="search-input" 
                    onChange={this.handleChange} 
                    placeholder="Search..." 
                />
                <br />
                <ul>
                    {this.state.list.map(item => (
                        <li key={item}>
                            {item} &nbsp;
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default SearchBar;