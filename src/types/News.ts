export interface ImageAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    large: {
      ext: string;
      url: string;
      hash: string;
      mime: string;
      name: string;
      path: null;
      size: number;
      width: number;
      height: number;
      provider_metadata: {
        public_id: string;
        resource_type: string;
      };
    };
    small: {
      ext: string;
      url: string;
      hash: string;
      mime: string;
      name: string;
      path: null;
      size: number;
      width: number;
      height: number;
      provider_metadata: {
        public_id: string;
        resource_type: string;
      };
    };
    medium: {
      ext: string;
      url: string;
      hash: string;
      mime: string;
      name: string;
      path: null;
      size: number;
      width: number;
      height: number;
      provider_metadata: {
        public_id: string;
        resource_type: string;
      };
    };
    thumbnail: {
      ext: string;
      url: string;
      hash: string;
      mime: string;
      name: string;
      path: null;
      size: number;
      width: number;
      height: number;
      provider_metadata: {
        public_id: string;
        resource_type: string;
      };
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface News {
  title: string;
  date: string;
  text: string;
  author: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  image: {
    data: {
      id: number;
      attributes: ImageAttributes;
    };
  };
  localizations: {
    data: [
      {
        id: number;
        attributes: {
          title: string;
          date: string;
          author: string;
          description: string;
          slug: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
          locale: string;
        };
      },
    ];
  };
}

export interface NewsData {
  id: number;
  attributes: News;
}

export interface NewsResponse {
  data: NewsData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
