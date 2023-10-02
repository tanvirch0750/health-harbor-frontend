import PublicHeader from '@/components/view/headers/PublicHeader';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PublicHeader />
      {children}
    </div>
  );
}

export default Layout;
