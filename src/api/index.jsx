export default async function ApiCall({ url, method = "GET", body, headers }) {
  try {
    const response = await fetch(url, {
      method,
      body,
      headers,
    });
    return response.json();
  } catch (error) {
    Promise.reject(error);
  }
}
