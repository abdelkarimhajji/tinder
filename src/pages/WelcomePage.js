import { WelcomeLayout } from '../Layouts.js/ContainerLayout.js'
import NavBar from '../components/NavBar';
import Load from '../components/Load.js';

function WelcomePage()
{
    return (
        <WelcomeLayout>
            <Load />
            <NavBar />
        </WelcomeLayout>
    );
}

export default WelcomePage