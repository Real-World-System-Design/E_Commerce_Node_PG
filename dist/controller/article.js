"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArticle = exports.updateArticle = exports.getAllArticles = void 0;
const typeorm_1 = require("typeorm");
const Article_1 = require("../model/Article");
async function getAllArticles() {
    const repo = typeorm_1.getRepository(Article_1.Article);
    const articles = await repo.find();
    return articles;
}
exports.getAllArticles = getAllArticles;
// export async function createArticle(data: articleData):Promise<Article> {
//     //validation
//     if(!data.body) throw new Error("body field is empty");
//     if(!data.title) throw new Error("title field is empty");
//     if(!data.tags) throw new Error("tags field is empty");
//     try {
//         const repo = getRepository(Article);
//         const article = repo.save(new Article(
//             data.title,
//             data.title,
//             data.body,
//             data.tags
//         ));
//         return article;
//     } catch (e) {
//         throw e
//     }
// }
async function updateArticle(data, slug) {
    try {
        const repo = typeorm_1.getRepository(Article_1.Article);
        const article = await repo.findOne(slug);
        if (!article)
            throw new Error("No aricle with this slug exists");
        if (data.body)
            article.body = data.body;
        if (data.title)
            article.title = data.title;
        if (data.tags)
            article.tags = data.tags;
        const updatedArticle = await repo.save(article);
        return updatedArticle;
    }
    catch (e) {
        throw e;
    }
}
exports.updateArticle = updateArticle;
async function deleteArticle(slug) {
    try {
        const reop = typeorm_1.getRepository(Article_1.Article);
        const article = await reop.findOne(slug);
        if (!article)
            throw new Error("No aricle with this slug exists");
        reop.delete(article);
    }
    catch (e) {
        throw e;
    }
}
exports.deleteArticle = deleteArticle;
