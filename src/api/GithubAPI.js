const param = require('jquery-param');

class GithubAPI {
    static API_URL = 'https://api.github.com/';

    static fetchIssues(path, params = {}) {
        const url = this.API_URL + 'repos/' + path + '/issues?' + param(params);

        return fetch(url).then((response) => {
            if (response.ok) {
                return response.json();
            }

            return [];
        });
    }

    static fetchIssuesCount(path, params = {}) {
        const url = this.API_URL + 'repos/' + path + '?' + param(params);

        return fetch(url).then((response) => {
            if (response.ok) {
                return response.json();
            }

            return {open_issues_count: 0};
        }).then((data) => data.open_issues_count);
    }
}

export default GithubAPI;