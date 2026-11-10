import { GoogleG } from "@/components/lp/GoogleG";
import { Stars } from "@/components/lp/Stars";

export type Review = { readonly name: string; readonly source: string; readonly rating: number; readonly text: string };

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="lp-review">
      <div className="lp-review-top">
        <Stars count={review.rating} label={`${review.rating} out of 5 stars`} />
        <GoogleG size={20} />
      </div>
      <blockquote>{"“" + review.text + "”"}</blockquote>
      <div>
        <div className="lp-review-name">{review.name}</div>
        <div className="lp-review-src">Google review</div>
      </div>
    </article>
  );
}
