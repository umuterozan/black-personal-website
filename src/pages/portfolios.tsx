import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Layout from "@/components/Layout";
import PortfoliosSection from "@/components/PortfoliosSection";

export default function Portfolios() {
    return (
        <Layout title="Portfolios">
            <Header />
            <PortfoliosSection />
            <Footer />
        </Layout>
    );
}
