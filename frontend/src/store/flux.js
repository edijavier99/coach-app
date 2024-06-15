const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			allArticles : [],
			singleArticle: []
		},
		actions: {
			// Use getActions to call a function within a function
			capitalizeFirstLetter: (text) => {
				return text.charAt(0).toUpperCase() + text.slice(1);
			},
			fetchAllArticles: () => {
				const apiUrl = process.env.REACT_APP_BACKEND_URL;
				fetch(`${apiUrl}api/articles/`)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({allArticles: data})
					})
					.catch(error => console.error('Error fetching articles:', error));
			},
			fetchSingleArticle: (article_id) =>{
				const apiUrl = process.env.REACT_APP_BACKEND_URL;
				fetch(`${apiUrl}api/article/${article_id}`)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({singleArticle: data})
					})
					.catch(error => console.error('Error fetching article:', error));
			}
		}
	};
};

export default getState;
