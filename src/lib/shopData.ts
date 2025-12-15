export async function getShopData(shop: string) {
  const encodedShopName = encodeURIComponent(shop);
  
  console.log(`Raw Shop Name: ${shop}`);
  console.log(`Encoded Shop Name: ${encodedShopName}`);

  const url = `https://api.skorpion.in/fetchShopDetails?shopName=${encodedShopName}`;
  
  try {
    const res = await fetch(url, { 
        cache: "no-store", 
        signal: AbortSignal.timeout(5000) 
    });

    if (!res.ok) {
      console.error(`API Fetch failed with status ${res.status} for shop: ${shop}`);
      throw new Error(`Failed to fetch shop details: HTTP Status ${res.status}`);
    }

    const data = await res.json();
    console.log(`API data:`, data);
    return data;

  } catch (error) {
    console.error(`Fetch error for shop (${shop}):`, error);
    throw new Error(`Shop data retrieval failed for ${shop}: ${error instanceof Error ? error.message : 'Unknown network error'}`);
  }
}