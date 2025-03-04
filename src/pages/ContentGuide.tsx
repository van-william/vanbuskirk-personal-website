
import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { contentManagementGuide } from "@/utils/content-loader";
import { parseMarkdown } from "@/utils/markdown";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const ContentGuide = () => {
  const blogGuideHtml = parseMarkdown(contentManagementGuide.addingBlogPost);
  const photoGuideHtml = parseMarkdown(contentManagementGuide.addingPhotography);

  return (
    <>
      <PageHeader
        title="Content Management Guide"
        description="Learn how to easily add and update blog posts and photographs."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card>
              <Tabs defaultValue="blog" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="blog">Blog Posts</TabsTrigger>
                  <TabsTrigger value="photography">Photography</TabsTrigger>
                </TabsList>
                <TabsContent value="blog">
                  <CardContent className="pt-6">
                    <div 
                      className="prose dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: blogGuideHtml }}
                    />
                  </CardContent>
                </TabsContent>
                <TabsContent value="photography">
                  <CardContent className="pt-6">
                    <div 
                      className="prose dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: photoGuideHtml }}
                    />
                  </CardContent>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentGuide;
