import React from "react";
import { Book } from "@/types/book";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BookCardProps {
  book: Book;
  className?: string;
}

export function BookCard({ book, className }: BookCardProps) {
  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-xl border bg-muted/40 shadow-sm transition hover:-translate-y-1 hover:shadow-md",
        className
      )}
    >
      <img
        src={book.imageUrl}
        alt={book.title}
        className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <div className="text-white">
          {book.author && (
            <p className="text-sm uppercase tracking-wide text-white/80">
              {book.author}
            </p>
          )}
          <h3 className="text-xl font-semibold leading-tight">{book.title}</h3>
        </div>

        <div className="mt-3 space-y-3 transition duration-300 group-hover:translate-y-0">
          <p className="text-sm leading-relaxed text-white/90 line-clamp-4 opacity-0 transition duration-300 group-hover:opacity-100">
            {book.summary}
          </p>

          {book.articleLink && (
            <Button
              size="sm"
              variant="secondary"
              className="w-fit bg-white text-black hover:bg-white/90 opacity-0 transition duration-300 group-hover:opacity-100"
              asChild
            >
              <a href={book.articleLink} target="_blank" rel="noopener noreferrer">
                Read notes
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

