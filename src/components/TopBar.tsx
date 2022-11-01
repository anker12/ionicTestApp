import { IonButton, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

type TopBarProps = {
    title: string,
    slot?: string | null,
}

const TopBar: React.FC<TopBarProps> = ({
    title,
    slot,
}) => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <IonHeader slot={slot ?? ''}>
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
