export async function fetchData(endpoint){
    try {
        const response = await(await fetch(`https://swapi.dev/api/${endpoint}`)).json();
        return response;
    } catch (error) {
        console.error(`Error fetch: ${error}`);
    };
};