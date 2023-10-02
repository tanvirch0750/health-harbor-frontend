import AdminHeader from '@/components/view/headers/AdminHeader';
import AdminSidebar from '@/components/view/sidebars/AdminSidebar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AdminHeader /> <AdminSidebar>{children}</AdminSidebar>{' '}
    </div>
  );
}

export default Layout;
