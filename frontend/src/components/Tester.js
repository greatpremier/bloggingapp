import { useEffect, useState } from "react";

const Tester = () => {
    // State to hold the fetched data. Initialized as null or an empty object
    // depending on the expected API response structure for /wp-json
    const [data, setData] = useState(null); // Or {} if you expect an empty object initially
    const [loading, setLoading] = useState(true); // To show a loading message
    const [error, setError] = useState(null); // To handle potential errors

    useEffect(() => {
        const fetchWordPressData = async () => {
            try {
                const response = await fetch('http://localhost:8888/wordpress/wp-json');
                if (!response.ok) { // Check if the response was successful (status 200-299)
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const info = await response.json();
                setData(info); // Set the fetched data
            } catch (error) {
                setError(error); // Catch and set any errors
            } finally {
                setLoading(false); // Always set loading to false after fetch attempt
            }
        };

        fetchWordPressData(); // Call the async function inside useEffect

        // The empty dependency array [] means this effect runs only once after the initial render,
        // similar to componentDidMount in class components.
    }, []);

    // --- Conditional Rendering ---
    if (loading) {
        return <div>Loading WordPress data...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // If data is null (meaning fetch failed or hasn't completed and no error),
    // or if the data structure isn't what we expect for mapping, handle it.
    // The /wp-json endpoint typically returns an object with details like 'name', 'description', 'routes', etc.
    // It does NOT return an array of items with 'id' and 'name' to map over directly.
    // You'll likely want to display specific properties from the `data` object.

    if (!data) {
        return <div>No data found or unexpected data format.</div>;
    }

    return (
        <div>
            <h1>WordPress Site Information:</h1>
            {/* Displaying properties from the fetched data object */}
            {data.name && <p><strong>Site Name:</strong> {data.name}</p>}
            {data.description && <p><strong>Description:</strong> {data.description}</p>}
            {data.url && <p><strong>Site URL:</strong> <a href={data.url}>{data.url}</a></p>}

            {/* If you intended to fetch posts or pages, you'd target a different endpoint, e.g.,
                '/wp/v2/posts' or '/wp/v2/pages', which return arrays.
                If 'data' contains a property that IS an array you want to map, you would do:
                
                {data.someArrayProperty && data.someArrayProperty.map(item => (
                    <li key={item.id}>{item.title.rendered}</li> // Example for posts
                ))}
            */}
        </div>
    );
};

export default Tester;