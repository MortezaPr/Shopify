import Navbar from "@/components/Navbar";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex justify-center">
        <Navbar />
      </div>
      {children}
    </div>
  );
}
