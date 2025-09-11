import { useEffect } from 'react';

interface ExternalRedirectProps {
  to: string;
}

const ExternalRedirect = ({ to }: ExternalRedirectProps) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-secondary/20">
      <div className="text-center px-4">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p className="text-muted-foreground">
          You are being redirected to an external link.
        </p>
      </div>
    </div>
  );
};

export default ExternalRedirect;
