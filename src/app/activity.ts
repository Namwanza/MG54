export interface Activity {
    id: number;
    name: string;
    date: string;
    time: string; 
    imageUrl: string;
    location: {
      address: string,
      city: string,
      country: string
    };
}
