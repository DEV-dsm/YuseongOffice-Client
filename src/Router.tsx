import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import MainPage from 'pages/main/page';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
}
