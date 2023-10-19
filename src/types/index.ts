export type Author = {
  name: string;
};

export type Book = {
  authors: Author[];

  copyright: boolean;
  download_count: number;
  formats?: { [format: string]: string };
  id: number;
  languages?: string[];
  media_type?: string;
  subjects?: string[];
  title: string;
};

export type NavItem = {
  id: number;
  name: string;
  href: string;
};
