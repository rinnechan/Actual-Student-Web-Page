import Link from 'next/link';
import Image from 'next/image';
import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex">
    {/* Left */}
    <div className="w-50 md:w-50 lg:w-100 xl:w-100 p-4">
      <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
        <Image src="/logo.png" alt="Logo" width={50} height={50}/>
        <span className="hidden lg:block">Random School</span> 
      </Link>
      <Menu/>
    </div>

    {/* Right */}
    <div className="flex-1 bg-[#f9f9f9] overflow-scroll">
      <Navbar/>
      {children}
    </div>
  </div>;
}
