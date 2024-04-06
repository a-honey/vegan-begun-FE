import { CategorySelectBar } from "../_components/organisms";
import { FeedCard } from "../_components/mocules";

export default function category() {
  return (
    <main>
      <CategorySelectBar />
      <section>
        <FeedCard />
      </section>
    </main>
  );
}
