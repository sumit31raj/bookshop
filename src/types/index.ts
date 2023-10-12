
export type Authors ={
  name:string,
  birth_year: number,
   death_year: number

}


export type Book= {
    authors: Authors[]; // You might want to define a type for authors
    bookshelves?: any[]; // You might want to define a type for bookshelves
    copyright?: boolean;
    download_count: number;
    formats?: { [format: string]: string }; // Object with keys as format names and values as URLs
    id: number;
    languages?: string[]; // An array of language codes
    media_type?: string;
    subjects?: string[]; // An array of subjects
    title: string;
    translators?: any[]; // You might want to define a type for translators
  }
  
