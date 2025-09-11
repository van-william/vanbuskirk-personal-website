import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import { Layout } from "@/components/layout/Layout";

import HomePage from "./pages/Index";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import PhotographyPage from "./pages/Photography";
import ContactPage from "./pages/Contact";
import ContentGuidePage from "./pages/ContentGuide";
import ArchitectureDiagramsPage from "./pages/ArchitectureDiagrams";
import ArchitectureDiagramDetailPage from "./pages/ArchitectureDiagramDetail";
import NotFound from "./pages/NotFound";
import ExternalRedirect from "./components/ExternalRedirect";
import OpenAIPage from "./pages/OpenAI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/photography" element={<PhotographyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/content-guide" element={<ContentGuidePage />} />
              <Route path="/architecture-diagrams" element={<ArchitectureDiagramsPage />} />
              <Route path="/architecture-diagrams/:slug" element={<ArchitectureDiagramDetailPage />} />
              <Route path="/io" element={<OpenAIPage />} />
              <Route path="/openai" element={<OpenAIPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
