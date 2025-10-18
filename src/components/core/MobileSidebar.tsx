import { Mail, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from '../ui/sheet';

interface MobileSidebarProps {
  navItems: Array<{ label: string; href: string }>;
}

export function MobileSidebar({ navItems }: MobileSidebarProps) {
  return (
    <Sheet>
      <div className="justify-self-end md:hidden">
        <SheetTrigger asChild>
          <Button>
            <Menu />
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent>
        <SheetHeader>
          <a href="/" className="font-black text-4xl tracking-tight serif block w-min">Axel</a>
        </SheetHeader>
        <nav>
          <ul className='px-4 grid'>
            {navItems.map((item) => (
              <a href={item.href} className='transition-all hover:pl-2 py-3 group relative'><span>{item.label}</span><div className='absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all'/></a>
            ))}
          </ul>
        </nav>
        <SheetFooter>
          <a href='mailto:axelcastano@proton.me' className='flex cursor-pointer gap-2 justify-center items-center'>
            <Mail />
            <span>axelcastano@proton.me</span>
          </a>
          <Button variant="secondary">My CV</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
