import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { BlogPost } from '../@types/schema';

export default class NotionService {
  client: Client;
  n2m: NotionToMarkdown;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
    this.n2m = new NotionToMarkdown({ notionClient: this.client });
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    const database = process.env.NOTION_BLOG_DATABASE_ID ?? '';

    // Get all blog posts from Notion
    const response = await this.client.databases.query({
      database_id: database,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Created',
          direction: 'descending',
        },
      ],
    });

    return response.results.map((res) => {
      // response를 블로그 포스트로 변환
      return NotionService.pageToBlogPost(res);
    });
  }

  private static pageToBlogPost(page: any): BlogPost {
    let cover = page.cover;

    switch (cover) {
      case 'file':
        cover = page.cover.file;
        break;
      case 'external':
        cover = page.cover.external.url;
        break;
      default:
        // 기본 커버 이미지 지정을 원할 경우 값 변경
        cover = '';
    }

    return {
      id: page.id,
      cover: cover,
      title: page.properties.Name.title[0].plain_text,
      tags: page.properties.Tags.multi_select,
      date: page.properties.Updated.last_edited_time,
      slug: page.properties.Slug.formula.string,
      //   id: page.id,
      //   cover: cover,
      //   title: page.properties.Name.title[0].plain_text,
      //   // category: page.properties.Category.select.name,
      //   tags: page.properties.Tags.multi_select.name,
      //   description: page.properties.Description.rich_text[0].plain_text,
      //   date: page.properties.Updated.last_edited_time,
      //   slug: page.properties.Slug.formula.string,
    };
  }
}
