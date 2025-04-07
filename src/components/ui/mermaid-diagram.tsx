import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { icons } from '@iconify-json/logos';
import { useTheme } from 'next-themes';
import type { MermaidConfig } from 'mermaid';
import { cn } from '@/lib/utils';

// Register AWS icons once
mermaid.registerIconPacks([{
  name: 'logos',
  icons,
}]);

interface MermaidDiagramProps {
  diagram: string;
  className?: string;
}

export function MermaidDiagram({ diagram, className }: MermaidDiagramProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    const renderDiagram = async () => {
      if (!elementRef.current || !diagram) return;
      
      try {
        // Initialize mermaid with theme-specific config
        mermaid.initialize({
          startOnLoad: false,
          theme: 'neutral' as const,
          securityLevel: 'loose',
          flowchart: { useMaxWidth: true },
          architecture: { useMaxWidth: true },
          themeVariables: {
            // Common colors
            primaryColor: '#FF9900', // AWS Orange
            primaryBorderColor: '#FF9900',
            
            // Theme-specific colors
            textColor: isDark ? '#FFFFFF' : '#0F172A',
            lineColor: isDark ? '#94A3B8' : '#64748B',
            mainBkg: isDark ? '#0F172A' : '#FFFFFF',
            secondaryColor: isDark ? '#1E293B' : '#F8FAFC',
            tertiaryColor: isDark ? '#334155' : '#F1F5F9',
            primaryTextColor: isDark ? '#FFFFFF' : '#0F172A',
            secondaryTextColor: isDark ? '#FFFFFF' : '#0F172A',
            tertiaryTextColor: isDark ? '#FFFFFF' : '#0F172A',
            nodeBorder: '#FF9900',
            clusterBkg: isDark ? '#1E293B' : '#F8FAFC',
            clusterBorder: isDark ? '#475569' : '#CBD5E1',
            edgeLabelBackground: isDark ? '#1E293B' : '#FFFFFF',
            titleColor: isDark ? '#FFFFFF' : '#0F172A'
          }
        });
        
        // Clear the element's content
        elementRef.current.innerHTML = '';
        
        // Generate a unique ID for this diagram
        const id = `mermaid-${Math.random().toString(36).slice(2, 11)}`;
        
        // Render the diagram
        const { svg } = await mermaid.render(id, diagram);
        elementRef.current.innerHTML = svg;

        // Apply direct styling to SVG elements
        const svgElement = elementRef.current.querySelector('svg');
        if (svgElement) {
          // Force colors for text elements
          svgElement.querySelectorAll('text').forEach(text => {
            (text as SVGTextElement).style.fill = isDark ? '#FFFFFF' : '#0F172A';
          });
          
          // Force colors for edge paths
          svgElement.querySelectorAll('path.edge').forEach(edge => {
            (edge as SVGPathElement).style.stroke = isDark ? '#94A3B8' : '#64748B';
          });
        }
      } catch (error) {
        console.error('Failed to render mermaid diagram:', error);
        if (elementRef.current) {
          elementRef.current.innerHTML = `
            <div class="text-red-500 p-4">
              <p>Failed to render diagram</p>
              <pre class="text-sm mt-2 bg-red-950/20 p-2 rounded">${error.message}</pre>
            </div>`;
        }
      }
    };

    renderDiagram();
  }, [diagram, isDark]); // Re-render when diagram or theme changes

  return (
    <div 
      ref={elementRef} 
      className={className}
      style={{ 
        backgroundColor: isDark ? '#0F172A' : '#FFFFFF'
      }}
    />
  );
} 