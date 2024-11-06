
export async function getBooks() {
    try {
        const response = await fetch("db.json");
        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
}
