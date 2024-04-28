import { Suspense } from "react";
import FoodFetch from "./FoodFetch";

export default function MenuContentPage() {
  return (
    <>
      <Suspense>
        <FoodFetch />
      </Suspense>
    </>
  );
}
