import PatientHeader from '@/components/view/headers/PatientHeader';
import PatientSidebar from '@/components/view/sidebars/PatientSidebar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PatientHeader />
      <PatientSidebar>{children}</PatientSidebar>
    </div>
  );
}

export default Layout;
