import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Poppins, Cinzel, Inter, Noto_Sans_Kannada } from 'next/font/google';
import SmoothScrolling from '@/components/SmoothScrolling';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800'], subsets: ['latin'], variable: '--font-poppins' });
const cinzel = Cinzel({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-cinzel' });
const notoSansKannada = Noto_Sans_Kannada({ weight: ['400', '700'], subsets: ['kannada'], variable: '--font-noto-kannada' });

export const metadata = {
  title: 'R. Roshan Baig | Former Minister & Seven-Time MLA',
  description: 'Official portfolio of R. Roshan Baig, Former Minister, Government of Karnataka and Seven-Time MLA from Shivajinagar, Bengaluru. A visionary leader committed to public service.',
  keywords: 'R. Roshan Baig, Roshan Baig, Karnataka Minister, Shivajinagar MLA, Indian Politician, Bengaluru',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable} ${cinzel.variable} ${notoSansKannada.variable}`}>
      <body className="font-sans bg-off-white text-text-dark antialiased">
        <NextIntlClientProvider messages={messages}>
          <SmoothScrolling>
            <Header />
            {children}
            <Footer />
          </SmoothScrolling>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
