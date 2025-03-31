import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <header className="bg-white h-32 md:h-16 lg:h-16 flex items-center">
            <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col h-16 items-center md:flex-row md:justify-between md:items-center">
                    <a className="block" href="/">
                        <span className="sr-only">Home</span>
                        <img className="h-8" src="/logo lama.svg" alt="Logo_lama" />
                    </a>

                    <nav className="mt-4 md:mt-0" aria-label="Global">
                        <ul className="flex items-center gap-12 text-s">
                        <li>
                            <a href="/ConsultMember">
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                                                </svg>
                                            </button>
                             </a>
                            </li>
                            <li>
                                <a href="/CreateMember">
                                    <button className="px-4 py-2 text-white font-bold rounded hover:opacity-80 transition"
                                        style={{ backgroundColor: "#181b32" }}>
                                        Crear Miembro
                                </button>
                            </a>

                            </li>

                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="px-6 py-2 font-medium tracking-wide rounded-lg transition-colors duration-300 focus:outline-none focus:ring"
                                    style={{
                                        backgroundColor: '#181b32',
                                        color: 'white',
                                    }}
                                >
                                    Log Out
                                </button>

                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
