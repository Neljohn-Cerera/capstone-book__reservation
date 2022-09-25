import { Books_Authors } from "./../../entities/Books_Authors";
import { BookAuthor } from "./../../entities/BookAuthor";
import { datasource } from "../../db";
import { Book } from "./../../entities/Book";
import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";

@Resolver()
export class BooksAuthorsResolver {
  // add category to a book
  @Mutation(() => Boolean)
  async addAuthorToBook(
    @Arg("bookId") bookId: string,
    @Arg("authors", () => [String]) authors: string[]
  ): Promise<Boolean> {
    const book = await Book.findOne({ where: { bookId } });
    if (!book) return false;
    authors.map(async (author) => {
      const _author = await BookAuthor.findOne({ where: { author } });
      if (!_author) {
        // if author is not found we'll create author
        const newAuthor = await BookAuthor.create({ author }).save();
        // insert into books_authors
        await Books_Authors.create({
          bookId: book.id,
          bookAuthorId: newAuthor?.id,
        }).save();
      } else {
        // if author is found,  retrieve its author id
        // insert into books_authors
        await Books_Authors.create({
          bookId: book.id,
          bookAuthorId: _author?.id,
        }).save();
      }
      return;
    });

    return true;
  }

  // remove category from book
  @Mutation(() => Boolean)
  async removeAuthorFromBook(
    @Arg("bookId", () => Int) bookId: number,
    @Arg("bookAuthorId", () => Int) bookAuthorId: number
  ): Promise<Boolean> {
    const removeAuthor = await datasource
      .createQueryBuilder()
      .delete()
      .from(Books_Authors)
      .where("bookId = :bookId and bookAuthorId = :bookAuthorId", {
        bookId: bookId,
        bookAuthorId: bookAuthorId,
      })
      .execute();

    console.log("removeAuthor : ", removeAuthor);
    if (removeAuthor.affected === 0) {
      return false;
    }

    return true;
  }

  @Query(() => [Books_Authors])
  async books_authors(): Promise<Books_Authors[] | null> {
    return await Books_Authors.find();
  }
}
