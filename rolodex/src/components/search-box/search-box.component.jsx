// import { Component } from "react";
import './search-box.styles.css';
const SearchBox = (props)=>{
  const { placeholder, onChangeHandler, className } = props;
  return(
    <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
  )
}

// class SearchBox extends Component {
//   render() {
//     // console.log(this.props)  
//     const { placeholder, onChangeHandler, className } = this.props;
//     return (
//       <input
//         className={className}
//         type="search"
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;