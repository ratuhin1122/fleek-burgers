import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React, { type PropsWithChildren } from 'react';

// Using PropsWithChildren is a clean way to type the children prop
const Homelayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children} 
            </main>
            <Footer />
        </div>
    );
};

export default Homelayout;