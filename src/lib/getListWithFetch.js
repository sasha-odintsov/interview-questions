export default async function getListWithFetch(url, route, method, body) {
    const response = await fetch(url + '/' + route, {
        method,
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    document.location.reload();  
};