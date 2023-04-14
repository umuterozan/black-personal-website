import BlogSection from "@/components/BlogSection";
import Layout from "@/components/Layout";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function Blog() {
    return (
        <Layout title="Blog">
            <Header />
            <BlogSection />
            <Footer />
        </Layout>
    );
}
