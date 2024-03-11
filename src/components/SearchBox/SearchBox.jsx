import css from "./SearchBox.module.css";

const SearchBox = ({ searchValue, setSearchValue }) => {
	return (
		<div className={css.searchBox}>
			<p className={css.searchTitle}>Find contacts by name</p>
			<input
				className={css.searchInput}
				type="text"
				onChange={(evt) => setSearchValue(evt.target.value)}
				placeholder="Type a name for search"
				value={searchValue}
			/>
		</div>
	);
};

export default SearchBox;
