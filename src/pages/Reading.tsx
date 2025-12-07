import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { books } from "@/data/books";
import { BookCard } from "@/components/ui/book-card";

const Reading = () => {
  return (
    <>
      <PageHeader
        title="Reading"
        description="Books shaping how I build and lead. Hover for notes; click through when available."
      />

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Reading;

