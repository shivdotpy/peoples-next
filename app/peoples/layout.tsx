import Navbar from '@/components/navbar/Navbar';

export default function PeopleLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
