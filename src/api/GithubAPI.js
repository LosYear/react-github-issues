const param = require('jquery-param');

class GithubAPI {
    static API_URL = 'https://api.github.com/';

    static fetchIssues(path, params = {}) {
        const url = GithubAPI.API_URL + 'repos/' + path + '/issues?' + param(params);

        return fetch(url).then((response) => {
            if (response.ok) {
                return response.json();
            }

            throw response;
        });
    }

    static fetchIssuesCount(path, params = {}) {
        const url = GithubAPI.API_URL + 'repos/' + path + '?' + param(params);

        return fetch(url).then((response) => {
            if (response.ok) {
                return response.json();
            }

            throw response;
        }).then((data) => data.open_issues_count);
    }
}

export default GithubAPI;