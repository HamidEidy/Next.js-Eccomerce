'use server'
const BASE_URL = '';

async function fetchData(url: string, method: string, body?: any) {
    const options: RequestInit = {
        method: method,
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    };
    if (body) {
        options.body = JSON.stringify(body);
    }
    const response = await fetch(`${BASE_URL}${url}`, options);
    return await response.json();
}

async function getFetch(url: string) {
    return await fetchData(url, 'GET');
}

async function postFetch(url: string, body: any) {
    return await fetchData(url, 'POST', body);
}

export { getFetch, postFetch };