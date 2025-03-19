import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "8f4048bfca82498db540b06ade88dfb9",
	},
});
