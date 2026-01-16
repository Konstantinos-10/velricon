import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Velricon Sanity Studio',
    description: 'Backend content management for Velricon',
    robots: 'noindex', // Important: keep the studio out of search results
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="sanity-studio-wrapper" style={{ height: '100vh', width: '100vw' }}>
            {children}
        </div>
    );
}
