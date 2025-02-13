import Link from 'next/link';
import { Download } from 'lucide-react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container flex h-14 items-center">
        <div className="lg:ml-64 ml-4 mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">I Made Wisnu</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Services</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="default" className="hidden md:flex">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                  About
                </Link>
                <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
                  Services
                </Link>
                <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                  Contact
                </Link>
                <Button variant="default" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
