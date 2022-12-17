import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        console.log('render search-box')

        const { className, placeholder, onSearchChange } = this.props;
        return (
            <div className="search-box">
                <input
                    className={`search-box ${className}`}
                    type='search'
                    placeholder={placeholder}
                    onChange={onSearchChange}
                />
            </div>
        );
    }
}

export default SearchBox;