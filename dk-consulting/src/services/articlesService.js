import http from "../http";

const articlesService = {
    getArticles: async (payload)=> {
        const { data } = await http.post("/api/materials/", payload);
        return data;
    },
}


export default articlesService
