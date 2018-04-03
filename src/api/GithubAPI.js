class GithubAPI {
    static API_URL = 'https://api.github.com/';

    static fetchIssues(path) {
        const url = this.API_URL + 'repos/' + path + '/issues';

        return fetch(url).then((response) => {
            return response.json();
        });
    }
}

export default GithubAPI;