//
// var Search = React.createClass({
//
//
//   render: function() {
//     return (
//         <form className="searchForm">
//           <input type="text" placeholder="Buscar" />
//           <button type="button" className="icon-search">Search</button>
//         </form>
//     );
//   }
// });
//
// function Search(props) {
//   return (
//       <form className="searchForm">
//         <input type="text" placeholder="Buscar" />
//         <button type="button" className="icon-search">Search</button>
//       </form>
//   );
// }
//
const Search = (props) => (
    <form className="inline-search-form">
      <input type="text" name="search" placeholder="Search" />
      <button type="button" className="icon-search">Search</button>
    </form>
);

window.Search = Search;