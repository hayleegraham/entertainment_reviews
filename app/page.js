import HomeHero from "./components/HomeHero";
import HomeReviews from "./components/HomeReviews";


export default function Home() {
  return (
    <div>
        <HomeHero />
        <HomeReviews contentLimit={3} header={"Recent Reviews"} marginTop={"mt-16"}/>
    </div>
  );
}
