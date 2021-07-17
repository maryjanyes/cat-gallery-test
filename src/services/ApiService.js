const apiUrl = 'https://gist.githubusercontent.com/manfredxu99/df3be12d855d2e8825d30784a43d4b31/raw/d5efd3062343703df33bf0ec1b0c469fb83cb9f9/cat.json';

export default class ApiService {
    static async getCatsData() {
        const catsDataResponse = await fetch(apiUrl);

        const catsData = await catsDataResponse.json();

        return catsData;
    }
}
