export const getAllCatagory = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/news/categories",
    );
    return res.json();
};

export const getNewsByCatagoryId = async (id) => {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/news/category/${id}
`,
    );
    return res.json();
};

export const getNewsDetailsById = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    const data = await res.json()
    return data.data[0]
}