import { articles } from "./articles";

export const articleService = (() => {
    let filteredArticles = articles;

    // Case insensitive comparison helper
    const caseInsensitiveIncludes = (array, value) =>
        array.some(item => item.toLowerCase() === value.toLowerCase());

    // Main service function
    const filterAndSortArticles = (filter = {}) => {
        filteredArticles = articles;

        // Apply filters if provided
        if (filter.category) {
            filteredArticles = filteredArticles.filter(article =>
                caseInsensitiveIncludes(article.categories, filter.category));
        }

        if (filter.tag) {
            filteredArticles = filteredArticles.filter(article =>
                caseInsensitiveIncludes(article.tags, filter.tag));
        }

        if (filter.query) {
            const queryLower = filter.query.toLowerCase();
            filteredArticles = filteredArticles.filter(article =>
                article.title.toLowerCase().includes(queryLower) ||
                article.categories.some(category => category.toLowerCase().includes(queryLower)) ||
                article.tags.some(tag => tag.toLowerCase().includes(queryLower))
            );
        }

        // Sort by publication_date
        filteredArticles.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date));

        return filteredArticles;
    };

    // Get n popular articles by number of visits
    const getPopularArticles = (n) => {
        return [...articles]
            .sort((a, b) => b.visits - a.visits)
            .slice(0, n);
    };

    // Get n popular tags
    const getPopularTags = (n) => {
        const tagCount = {};

        articles.forEach(article => {
            article.tags.forEach(tag => {
                tag = tag.toLowerCase();
                if (tagCount[tag]) {
                    tagCount[tag]++;
                } else {
                    tagCount[tag] = 1;
                }
            });
        });

        return Object.entries(tagCount)
            .sort(([, a], [, b]) => b - a)
            .slice(0, n)
            .map(([tag]) => tag);
    };

    // Get categories with their occurrence count
    const getPopularCategories = () => {
        const categoryCount = {};

        articles.forEach(article => {
            article.categories.forEach(category => {
                category = category.toLowerCase();
                if (categoryCount[category]) {
                    categoryCount[category]++;
                } else {
                    categoryCount[category] = 1;
                }
            });
        });

        return Object.entries(categoryCount)
            .map(([category, count]) => ({ category, occurrence: count }))
            .sort((a, b) => b.occurrence - a.occurrence);
    };

    return {
        filterAndSortArticles,
        getPopularArticles,
        getPopularTags,
        getPopularCategories
    };
})();

export const commentsService = (() => {

    const baseUrl = 'https://f0574d5dfe.execute-api.ca-central-1.amazonaws.com/dev'
    const getComments = (articleId) => {
        console.log(`${baseUrl}/comments/${articleId}`);
        return fetch(`${baseUrl}/comments/${articleId}`)
            .then(response => response.json());
    };

    const postComment = (body) => {
        console.log(body);
        return fetch(`${baseUrl}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
    return {
        getComments,
        postComment
    };
})();
