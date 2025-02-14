'use client';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { useActionState } from 'react';
import formCreateAction from './_actions/form-create.js';
import { revalidatePath } from 'next/cache.js';

export default function Page() {
  const [state, formAction, pending] = useActionState(formCreateAction, null);

  return (
    <>
      <Navbar />
      <main className="flex-grow container mx-auto px-8 lg:px-36 pb-8">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="space-y-6">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter">Contact</h1>
              <p className="text-muted-foreground"></p>
            </div>
          </div>
          <div className="space-y-6">
            <form className="space-y-6" action={formAction}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Name
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <input
                  required
                  placeholder="your.email@domain.com"
                  id="email"
                  name="email"
                  type="email"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Message
                </label>
                <textarea
                  required
                  placeholder="Your message..."
                  id="message"
                  name="message"
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                ></textarea>
              </div>
              <button
                disabled={pending}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
              >
                {pending ? 'Sending...' : 'Send Message'}
              </button>
              {state?.errorMessage && <div className="text-red-500">{state.errorMessage}</div>}
              {state?.successMessage && <div className="text-green-500">{state.successMessage}</div>}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
