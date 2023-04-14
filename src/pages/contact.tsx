import ContactSection from "@/components/ContactSection";
import Layout from "@/components/Layout";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function Contact() {
    return (
        <Layout title="Contact">
            <Header />
            <ContactSection />
            <Footer />
        </Layout>
    );
}
