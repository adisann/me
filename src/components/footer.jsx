import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Portofolio</h3>
            <p className="text-sm text-muted-foreground">© 2025 Adisan. All rights reserved.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/home" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                Projects
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="http://github.com/adisann/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-black" aria-label="GitHub">
                <Github />
              </a>
              <a href="https://id.linkedin.com/in/i-made-wisnu-adi-sanjaya-79a022240" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-black" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="mailto:wisnusanjaya0979@gmail.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-black" aria-label="LinkedIn">
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
