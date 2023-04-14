import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import HomeSection from "@/components/HomeSection";
import Layout from "@/components/Layout";

export default function Home() {
    return (
        <Layout title="Home">
            <Header />
            <HomeSection />
            <Footer />
        </Layout>
    );
}
