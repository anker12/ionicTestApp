import { IonButton, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

type TopBarProps = {
    title: string,
}

const TopBar: React.FC<TopBarProps> = ({
    title
}) => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonButtons slot='end'>
                    <IonButton onClick={() => setLoggedIn(!loggedIn)}>
                        {loggedIn ? 'Logout' : 'Login'}
                    </IonButton>
                </IonButtons>
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default TopBar;
