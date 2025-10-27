import { WelcomeLayout } from '../Layouts.js/ContainerLayout.js'
import NavBar from '../components/WelcomePageNavBar.js';
import Load from '../components/Load.js';
import MainContent from '../components/WelcomePageMainContent.js'

function WelcomePage()
{
    return (
        <WelcomeLayout>
            <Load />
            <NavBar />
            <MainContent />
        </WelcomeLayout>
    );
}

export default WelcomePage