function countAndSortCategories(categories) {
    const categoryCounts = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});
    
    const sortedCategories = Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);
    
    return {
        counts: categoryCounts,
        sorted: sortedCategories
    };
}

const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
const result = countAndSortCategories(categories);

console.log("Category Counts:", result.counts);
console.log("Sorted Categories:", result.sorted);