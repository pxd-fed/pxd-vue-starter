import axios from 'axios';

const module2 = {};

module2.getModule = (url, data) => {
	try {
		return axios({
			method: 'get',
			baseURL: process.env.VUE_APP_BASEURL,
			url,
			params: { ...data },
		});
	} catch (error) {
		return console.error(`[API][module2] getModule is failed url: ${url}, error: ${error}`);
	}
};

module2.postModule = (url, data) => {
	try {
		return axios({
			method: 'post',
			baseURL: process.env.VUE_APP_BASEURL,
			url,
			data,
		});
	} catch (error) {
		return console.error(`[API][module2] postModule is failed url: ${url}, error: ${error}`);
	}
};

module2.putModule = (url, data) => {
	try {
		return axios({
			method: 'put',
			baseURL: process.env.VUE_APP_BASEURL,
			url,
			data,
		});
	} catch (error) {
		return console.error(`[API][module2] putModule is failed url: ${url}, error: ${error}`);
	}
};

module2.patchModule = (url, data) => {
	try {
		return axios({
			method: 'patch',
			baseURL: process.env.VUE_APP_BASEURL,
			url,
			data,
		});
	} catch (error) {
		return console.error(`[API][module2] patchModule is failed url: ${url}, error: ${error}`);
	}
};

module2.deleteModule = (url) => {
	try {
		return axios({
			method: 'delete',
			baseURL: process.env.VUE_APP_BASEURL,
			url,
		});
	} catch (error) {
		return console.error(`[API][module2] deleteModule is failed url: ${url}, error: ${error}`);
	}
};

export default module2;
