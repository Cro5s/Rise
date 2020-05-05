import { connect } from 'react-redux';
import SearchBar from './search_bar';

const mapStateToProps = state => {
    const searchList = [
        "Woman Jackets",
        "Woman Tops",
        "Woman Pants",
        "Woman Shoes",
        "Men Jackets",
        "Men Shirts",
        "Men Pants",
        "Men Shoes",
        "Kids Jackets",
        "Kids Shirts",
        "Kids Pants",
        "Kids Shoes"
    ]
    return {
        list: searchList
    }
}

export default connect(
    mapStateToProps, 
    null
)(SearchBar);