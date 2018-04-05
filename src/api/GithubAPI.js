const param = require('jquery-param');

class GithubAPI {
    static API_URL = 'https://api.github.com/';

    static fetchIssues(path, params = {}) {
        const url = this.API_URL + 'repos/' + path + '/issues?' + param(params);

        return fetch(url).then((response) => {
            if(response.ok) {
                return response.json();
            }

            return [];
        });
    }
}

export default GithubAPI;