import { useQuery } from 'react-query';

export function useFetchData() {
    return useQuery('fetchData', async () => {
        const response = await fetch('/api/categories_management', {
            method: 'GET',
            headers: {
                'Accept': 'application/json', // Ensure that the Accept header is set to JSON
            },
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
      
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error(`Invalid content type: ${contentType}`);
        }
  
        try {
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Failed to parse response as JSON:', error);
            throw new Error('Failed to parse response as JSON');
        }
    });
}
