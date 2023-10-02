import DoctorHeader from '@/components/view/headers/DoctorHeader';
import DoctorSidebar from '@/components/view/sidebars/DoctorSidebar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DoctorHeader />
      <DoctorSidebar>{children}</DoctorSidebar>
    </div>
  );
}

export default Layout;
