const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			todayTodos : [],
			filteredResults : [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			capitalizeFirstLetter : (text) => {
				return text.charAt(0).toUpperCase() + text.slice(1);
			},
		}
	};
};
export default getState;