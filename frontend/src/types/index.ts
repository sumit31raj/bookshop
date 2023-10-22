export interface Author {
  name: string;
};

export interface Format {
  "image/jpeg"?: string;
  "text/plain"?: string;
  "application/rdf+xml"?: string;
  "text/html"?: string;
  "application/x-mobipocket-ebook"?: string;
}

export interface Book {
  authors: Author[];
  bookshelves: string[];
  copyright: boolean | null;
  downloadCount: number;
  id: string;
  languages: string[];
  mediaType: string;
  subjects: string[];
  title: string;
  formats: Format;
};
