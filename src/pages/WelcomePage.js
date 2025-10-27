import { WelcomeLayout } from '../Layouts.js/ContainerLayout.js'
import NavBar from '../components/WelcomePageNavBar.js'
import Load from '../components/Load.js';
import MainContent from '../components/WelcomePageMainContent.js'
import Footer from '../components/WelcomePageFooter.js'

function WelcomePage()
{
    return (
        <WelcomeLayout>
            <Load />
            <NavBar />
            <MainContent />
            <Footer />
        </WelcomeLayout>
    );
}

export default WelcomePage