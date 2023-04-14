import AboutSection from "@/components/AboutSection";
import Layout from "@/components/Layout";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function About() {
    return (
        <Layout title="About">
            <Header />
            <AboutSection />
            <Footer />
        </Layout>
    );
}
