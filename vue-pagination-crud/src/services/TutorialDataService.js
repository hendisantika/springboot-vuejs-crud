import http from "../http-common";

class TutorialDataService {
    getAll(params) {
        return http.get("/tutorials", {params});
    }

    // other CRUD methods
}

export default new TutorialDataService();
