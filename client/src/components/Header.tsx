import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import logoUrl from '@shared/static/images/logo.png';

const menuItems = [
  { name: '首页', href: '/' },
  { name: '团队实力', href: '/team' },
  { name: '核心业务', href: '/services' },
  { name: '合作咨询', href: '/contact' },
];

export function Header() {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-20 w-full px-2 group"
      >
        <div className={cn(
          'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
          isScrolled && 'bg-background/80 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
        )}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logoUrl} alt="Logo" className="h-8 w-auto" />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className={cn(
                        'block duration-150',
                        isActive(item.href)
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground hover:text-primary'
                      )}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn(
              'bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent',
              menuState ? '!block' : ''
            )}>
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        onClick={() => setMenuState(false)}
                        className={cn(
                          'block duration-150',
                          isActive(item.href)
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground hover:text-primary'
                        )}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  size="sm"
                  className={cn(isScrolled ? 'lg:inline-flex' : 'lg:hidden')}
                >
                  <span>联系我们</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Sheet open={menuState} onOpenChange={setMenuState}>
        <SheetContent side="right" className="w-[300px] p-6">
          <div className="flex flex-col space-y-6 mt-8">
            <img src={logoUrl} alt="Logo" className="h-8 w-auto" />
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    onClick={() => setMenuState(false)}
                    className={cn(
                      'block text-lg duration-150 py-2',
                      isActive(item.href)
                        ? 'text-primary font-medium'
                        : 'text-muted-foreground hover:text-primary'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-4">
              <span>联系我们</span>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}