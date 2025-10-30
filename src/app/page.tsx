import Hero from "../components/home/Hero";
import Advantages from "../components/home/Advantages";
import HomeCTA from "../components/home/HomeCTA";
import ProductGrid from "../components/products/ProductGrid";

export default function Home() {
    return (
        <main>
            <Hero />
            <Advantages />
            <ProductGrid />
            <HomeCTA />
        </main>
    );
}
