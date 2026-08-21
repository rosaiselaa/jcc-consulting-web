import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "./Home";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Contact() {
  return <div className="site-page"><Navbar /><main className="contact-page"><ContactSection /></main><Footer /></div>;
}